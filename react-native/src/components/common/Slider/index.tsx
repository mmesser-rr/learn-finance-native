// Imports: Dependencies
import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { Animated, Dimensions, PanResponder, PanResponderGestureState, View, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { RedLinnerGradient } from 'src/utils/constants';

// Imports: React Hooks
import { useLowHigh, useWidthLayout, useSelectedRail } from './hooks';

// Imports: Helper Functions
import { clamp, getValueForPosition, isLowCloser } from './helpers';

import styles from './styles';

// TypeScript Type: Props
interface IProps {
  type: 'Range' | 'Single';
  min: number;
  max: number;
  step: number;
  value?: number;
  onChange: (low: number, high: number) => void;
  minRange?: number;
  disabled?: boolean;
  minimumTrackTintColor?: string;
  maximumTrackTintColor?: string;
  thumbStyle?: ViewStyle;
  gradientColors?: string[];
  marginHorizontalWidth?: number;
}

// TypeScript Type: Gesture State Ref
interface IGestureStateRef {
  isLow: boolean;
  lastValue: number;
  lastPosition: number;
}

// React Native: Screen Dimensions
const { width } = Dimensions.get('window');

// Component: Slider
export const Slider: React.FC<IProps> = ({
  type,
  min,
  max,
  step,
  value = 0,
  onChange,
  minRange = 0,
  disabled = false,
  minimumTrackTintColor = 'blue',
  maximumTrackTintColor = 'white',
  thumbStyle,
  gradientColors = [],
  marginHorizontalWidth = 0
}) => {
  // React Hooks: State
  const [thumbWidth, setThumbWidth] = useState<number>(value);

  // TODO TODO TODO (SET STATE + FIX OVERLAP WITH NAMES)
  const [lowProp, setLowProp] = useState<number>(min);
  const [highProp, setHighProp] = useState<number>(max);

  // React Hooks: Refs
  const lowThumbXRef = useRef<Animated.Value>(new Animated.Value(value));
  const highThumbXRef = useRef<Animated.Value>(new Animated.Value(value));
  const pointerX = useRef<Animated.Value>(new Animated.Value(value)).current;
  const gestureStateRef = useRef<IGestureStateRef>({ isLow: true, lastValue: 0, lastPosition: 0 });
  const containerWidthRef = useRef<number>(value);

  // React Hooks: Use Low High
  const { inPropsRef, inPropsRefPrev, setLow, setHigh } = useLowHigh(value, type === 'Single' ? max : highProp, min, max, step);

  // React Hooks: Use Selected Rail
  const [selectedRailStyle, updateSelectedRail] = useSelectedRail(inPropsRef, containerWidthRef, thumbWidth, type);

  // Update Thumbs
  const updateThumbs = useCallback(() => {
    // Ref: Container With
    const { current: containerWidth } = containerWidthRef;

    if (!thumbWidth || !containerWidth) {
      return;
    }

    // Ref: Props
    const { low, high } = inPropsRef.current;

    // Slider Type: Range
    if (type === 'Range') {
      // High Position
      const highPosition: number = ((high - min) / (max - min)) * (containerWidth - thumbWidth);

      // Ref: Set Value (High Thumb X)
      highThumbXRef.current.setValue(highPosition);
    }

    // Low Position
    const lowPosition: number = ((low - min) / (max - min)) * (containerWidth - thumbWidth);

    // Ref: Set Value (Low Thumb X)
    lowThumbXRef.current.setValue(lowPosition);

    // Update Selected Rail
    updateSelectedRail();

    // Props: On Change
    onChange?.(low, high);
  }, [type, inPropsRef, max, min, onChange, thumbWidth, updateSelectedRail]);

  // React Hooks: Lifecycle Methods
  useEffect(() => {
    // TODO (WHAT?)
    if ((lowProp !== undefined && lowProp !== inPropsRefPrev.lowPrev) || (highProp !== undefined && highProp !== inPropsRefPrev.highPrev)) {
      // Update Thumbs
      updateThumbs();
    }
  }, [highProp, inPropsRefPrev.lowPrev, inPropsRefPrev.highPrev, lowProp, inPropsRefPrev, updateThumbs]);

  useEffect(() => {
    // Update Thumbs
    updateThumbs();
  }, [updateThumbs]);

  // Handle Container Layout
  const handleContainerLayout = useWidthLayout(containerWidthRef, updateThumbs);

  // Handle Thumb Layout
  const handleThumbLayout = useCallback(
    ({ nativeEvent }) => {
      const {
        layout: { width: newWidth },
      } = nativeEvent;

      if (thumbWidth !== newWidth) {
        setThumbWidth(newWidth);
      }
    },
    [thumbWidth],
  );
  // React Native: Pan Handlers
  const { panHandlers } = useMemo(
    () =>
      // React Native: Pan Responder
      PanResponder.create({
        // On Start Should Set Pan Responder
        onStartShouldSetPanResponder: (): boolean => true,
        // On Start Should Set Pan Responder Capture
        onStartShouldSetPanResponderCapture: (): boolean => true,
        // On Move Should Set Pan Responder
        onMoveShouldSetPanResponder: (): boolean => true,
        // On Move Should Set Pan Responder Capture
        onMoveShouldSetPanResponderCapture: (): boolean => true,
        // On Pan Responder Termination Request
        onPanResponderTerminationRequest: (): boolean => true,
        // On Pan Responder Terminate
        onPanResponderTerminate: (): boolean => true,
        // On Should Block Native Responder
        onShouldBlockNativeResponder: (): boolean => true,
        // On Pan Responder Grant
        onPanResponderGrant: ({ nativeEvent }, gestureState: PanResponderGestureState): void => {
          // TODO (WHAT?) (REFACTOR WITH !disabled)
          if (disabled) {
            return;
          }

          // Gesture State: Number Of Active Touches (Currently On Screen)
          const { numberActiveTouches } = gestureState;

          if (numberActiveTouches > 1) {
            return;
          }

          // TODO (WHAT?)
          const { locationX: downX, pageX } = nativeEvent;

          // Container X
          const containerX: number = pageX - downX;

          // TODO (WHAT?)
          const { low, high, min, max } = inPropsRef.current;

          // Container Width
          const containerWidth: number = containerWidthRef.current;

          // Low Position
          const lowPosition: number = thumbWidth / 2 + ((low - min) / (max - min)) * (containerWidth - thumbWidth);

          // High Position
          const highPosition: number = thumbWidth / 2 + ((high - min) / (max - min)) * (containerWidth - thumbWidth);

          // Is Low
          const isLow: boolean = type === 'Single' || isLowCloser(downX, lowPosition, highPosition);

          // TODO (WHAT?)
          gestureStateRef.current.isLow = isLow;

          // Handle Position Change
          const handlePositionChange = (positionInView: number): void => {
            // TODO (WHAT?)
            const { low, high, min, max, step } = inPropsRef.current;

            // Min Value
            const minValue: number = isLow ? min : low + minRange;

            // Max Value
            const maxValue: number = isLow ? high - minRange : max;

            // Value
            const value: number = clamp(getValueForPosition(positionInView, containerWidth, thumbWidth, min, max, step), minValue, maxValue);

            // TODO (WHAT?)
            if (gestureStateRef.current.lastValue === value) {
              return;
            }

            // Available Space
            const availableSpace: number = containerWidth - thumbWidth;

            // Absolute Position
            const absolutePosition: number = ((value - min) / (max - min)) * availableSpace;

            // Ref: Last Value (Gesture State)
            gestureStateRef.current.lastValue = value;

            // Ref: Last Position (Gesture State)
            gestureStateRef.current.lastPosition = absolutePosition + thumbWidth / 2;

            // Ref: Set Value (Absolute Position)
            (isLow ? lowThumbXRef.current : highThumbXRef.current).setValue(absolutePosition);

            // Props: On Change
            onChange?.(isLow ? value : low, isLow ? high : value);

            // TODO (WHAT?)
            (isLow ? setLow : setHigh)(value);

            // Update Selected Rail
            updateSelectedRail();
          };

          // Handle Position Change
          handlePositionChange(downX);

          // Ref: Remove All Listeners (Pointer X)
          pointerX.removeAllListeners();

          // Ref: Add Listener (Pointer X)
          pointerX.addListener(({ value: pointerPosition }): void => {
            // Position In View
            const positionInView: number = pointerPosition - containerX;

            // Handle Position Change
            handlePositionChange(positionInView);
          });
        },
        // On Pan Responder Move
        onPanResponderMove: disabled ? undefined : Animated.event([null, { moveX: pointerX }], { useNativeDriver: false }),
        // On Pan Responder Release
        onPanResponderRelease: (): void => {
          return;
        },
      }),
    [disabled, pointerX, inPropsRef, thumbWidth, type, minRange, onChange, setLow, setHigh, updateSelectedRail],
  );

  return (
    <View style={{ width: width - marginHorizontalWidth - thumbWidth }}>
      <View onLayout={handleContainerLayout} style={styles.controlsContainer}>
        <View style={[styles.railsContainer, { marginHorizontal: thumbWidth / 2 }]}>
          <View
            style={[
              styles.railContainer,
              { backgroundColor: maximumTrackTintColor }
            ]}
          />

          <Animated.View style={selectedRailStyle}>
            {gradientColors.length === 0 ?
              (
                <View
                  style={[
                    styles.railSelectedContainer,
                    { backgroundColor: minimumTrackTintColor }
                  ]}
                />
              ) :
              (
                <LinearGradient
                  colors={RedLinnerGradient}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  style={styles.railSelectedGradientContainer}
                />
              )
            }
          </Animated.View>
        </View>

        <Animated.View style={{ transform: [{ translateX: lowThumbXRef.current }] }} onLayout={handleThumbLayout}>
          <View style={[styles.thumbContainer, thumbStyle]} />
        </Animated.View>

        {type === 'Range' && (
          <Animated.View style={[styles.highThumbContainer, { transform: [{ translateX: highThumbXRef.current }] }]}>
            <View style={[styles.thumbContainer, thumbStyle]} />
          </Animated.View>
        )}

        <View {...panHandlers} style={styles.touchableArea}  />
      </View>
    </View>
  );
};
