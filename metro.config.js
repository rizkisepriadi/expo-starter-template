const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);


// Alias @ ke src/shared agar konsisten dengan tsconfig dan babel
config.resolver = config.resolver || {};
config.resolver.alias = {
  ...(config.resolver.alias || {}),
  '@': require('path').resolve(__dirname, 'src/shared'),
};

module.exports = withNativeWind(config, {
  input: './src/shared/assets/global.css',
});
