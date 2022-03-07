import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  highThumbContainer: {
    position: 'absolute',
  },
  railsContainer: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelFixedContainer: {
    alignItems: 'flex-start',
  },
  labelFloatingContainer: {
    position: 'absolute',
    alignItems: 'flex-start',
    left: 0,
    right: 0,
  },
  touchableArea: {
    ...StyleSheet.absoluteFillObject,
  },
  railContainer: {
    flex: 1,
    height: 2,
    borderRadius: 2,
  },
  railSelectedContainer: {
    height: 4,
    borderRadius: 2,
  },
  railSelectedGradientContainer: {
    height: 4,
    borderRadius: 2,
  },
  thumbContainer: {
    height: 30,
    width: 30,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderWidth: 0.5,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 1,
    shadowOpacity: 0.1,
  },
});

export default styles;
