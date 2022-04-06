import React, { ReactElement, useState } from "react";
import {
  Animated,
  TouchableWithoutFeedback,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { scale } from "src/config/dimentions";
import { GradientButtonColors } from "src/utils/constants";

import styles from './styles';

interface SwitchProps {
  onValueChange: (value: boolean) => void;
  disabled?: boolean;
  activeText?: string;
  inActiveText?: string;
  backgroundInactive: string;
  value: boolean;
  circleActiveColor: string;
  circleInActiveColor: string;
  circleSize: number;
  activeTextStyle?: object;
  inactiveTextStyle?: object;
  containerStyle?: object;
  barHeight?: number;
  circleBorderWidth?: number;
  innerCircleStyle?: object;
  changeValueImmediately?: boolean;
  outerCircleStyle?: object;
  width: number;
  switchBorderRadius?: number;
}

interface SwitchContentProps {
  value: boolean;
  children: ReactElement;
}

const SwitchContent: React.FC<SwitchContentProps> = ({value, children}) => {
  if (value) {
    return (
      <LinearGradient
        colors={GradientButtonColors}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.gradient}
      >{children}</LinearGradient>
    );
  }

  return children;
};

const Switch: React.FC<SwitchProps> = (props) => {
  const {
    backgroundInactive,
    circleActiveColor,
    circleInActiveColor,
    activeText,
    inActiveText,
    circleSize,
    containerStyle,
    activeTextStyle,
    inactiveTextStyle,
    barHeight,
    circleBorderWidth,
    innerCircleStyle,
    outerCircleStyle,
    width,
    switchBorderRadius,
    value: propValue,
    ...restProps
  } = props;

  const [value, setValue] = useState(propValue);
  const transformSwitch = new Animated.Value(
    propValue
      ? (width - circleSize) / 2 - scale(2)
      : -((width - circleSize) / 2 - scale(2))
  );

  const handleSwitch = () => {
    if (props.disabled) {
      return;
    }

    if (propValue === value) {
      props.onValueChange(!value);
      return;
    }

    if (props.changeValueImmediately) {
      props.onValueChange(!propValue);
    } else {
      setValue(!value);
      props.onValueChange(!value);
    }
  };

  return (
    <SwitchContent value={propValue}>
      <TouchableWithoutFeedback onPress={handleSwitch} {...restProps}>
        <Animated.View
          style={[
            styles.container,
            containerStyle,
            {
              backgroundColor: propValue ? 'transparent' : backgroundInactive,
              // width,
              height: barHeight || circleSize,
              borderRadius: switchBorderRadius || circleSize
            }
          ]}
        >
          <Animated.View
            style={[
              styles.animatedContainer,
              {
                left: transformSwitch,
                width
              },
              outerCircleStyle
            ]}
          >
            <Animated.View
              style={[
                styles.circle,
                {
                  borderWidth: circleBorderWidth,
                  width: circleSize,
                  height: circleSize,
                  borderRadius: circleSize / 2
                },
                innerCircleStyle
              ]}
            >
            </Animated.View>
          </Animated.View>
        </Animated.View>
      </TouchableWithoutFeedback>
    </SwitchContent>
  );
};

Switch.defaultProps = {
  value: false,
  onValueChange: () => null,
  disabled: false,
  activeText: "On",
  inActiveText: "Off",
  backgroundInactive: "gray",
  circleActiveColor: "white",
  circleInActiveColor: "white",
  circleSize: 30,
  barHeight: undefined,
  circleBorderWidth: 1,
  changeValueImmediately: true,
  innerCircleStyle: { alignItems: "center", justifyContent: "center" },
  outerCircleStyle: {},
  width: scale(51),
  switchBorderRadius: undefined,
};

export default Switch;
