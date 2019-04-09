import { Animated, Easing, I18nManager} from 'react-native';

export function fromLeft(duration = 300) {
  return {
    transitionSpec: {
      duration,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: ({ layout, position, scene }) => {
      const { index } = scene;
      const { initWidth } = layout;

      const translateX = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [-initWidth, 0, 0],
      });

      const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });

      return { opacity, transform: [{ translateX }] };
    },
  };
}

export function fromRight(duration) {
  return {

      transitionSpec: {
        duration,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
        useNativeDriver: true,
      },
      screenInterpolator: ({ layout, position, scene }) => {

        const index = scene.index;
        const inputRange = [index - 1, index, index + 1];

        const width = layout.initWidth;
        const outputRange = I18nManager.isRTL
          ? ([-width, 0, width * 0.3]: Array<number>)
          : ([width, 0, width * -0.3]: Array<number>);

        const opacity = position.interpolate({
          inputRange: [
            index - 1,
            index - 0.99,
            index,
            index + 0.99,
            index + 1,
          ],
          outputRange: [0, 1, 1, 0.3, 0],
        });

        const translateY = 0;
        const translateX = position.interpolate({
          inputRange,
          outputRange,
        });

        return {
          opacity,
          transform: [{ translateX }, { translateY }],
        };
    },
  };
}

export function fromTop(duration = 300) {
  return {
    transitionSpec: {
      duration,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: ({ layout, position, scene }) => {
      const { index } = scene;
      const { initHeight } = layout;

      const translateY = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [-initHeight, 0, 0],
      });

      const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });

      return { opacity, transform: [{ translateY }] };
    },
  };
}
export function fromBottom(duration = 800) {
  return {
    transitionSpec: {
      duration,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: ({ layout, position, scene }) => {
      const { index } = scene;
      const { initHeight } = layout;

      const translateY = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [initHeight, 0, 0],
      });

      const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });

      return { opacity, transform: [{ translateY }] };
    },
  };
}
export function fadeIn(duration = 500) {
  return {
    transitionSpec: {
      duration,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: ({ position, scene }) => {
      const { index } = scene;

      const opacity = position.interpolate({
        inputRange: [index - 1, index],
        outputRange: [0, 1],
      });

      return { opacity };
    },
  };
}

export function zoomIn(duration = 300) {
  return {
    transitionSpec: {
      duration,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: ({ position, scene }) => {
      const { index } = scene;

      const scale = position.interpolate({
        inputRange: [index - 1, index],
        outputRange: [0, 1],
      });

      return { transform: [{ scale }] };
    },
  };
}

export function zoomOut(duration = 300) {
  return {
    transitionSpec: {
      duration,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: ({ position, scene }) => {
      const { index } = scene;

      const scale = position.interpolate({
        inputRange: [index - 1, index],
        outputRange: [10, 1],
      });

      return { transform: [{ scale }] };
    },
  };
}

export function flipY(duration = 300) {
  return {
    transitionSpec: {
      duration,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: ({ position, scene }) => {
      const { index } = scene;

      const rotateY = position.interpolate({
        inputRange: [index - 1, index],
        outputRange: ['180deg', '0deg'],
      });

      return { transform: [{ rotateY }], backfaceVisibility: 'hidden' };
    },
  };
}

export function flipX(duration = 300) {
  return {
    transitionSpec: {
      duration,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: ({ position, scene }) => {
      const { index } = scene;

      const rotateX = position.interpolate({
        inputRange: [index - 1, index],
        outputRange: ['180deg', '0deg'],
      });

      return { transform: [{ rotateX }], backfaceVisibility: 'hidden' };
    },
  };
}
