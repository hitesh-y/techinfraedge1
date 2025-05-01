// This is a mock implementation for react-native-web
// It provides the minimum functionality needed for react-bits to work

const StyleRegistry = {
  resolve: (style) => {
    return style || {};
  }
};

export default StyleRegistry;