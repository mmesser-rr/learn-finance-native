module.exports = {
  presets: [
    'module:metro-react-native-babel-preset'
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          src: './src',
        },
      },
    ],
    'jest-hoist',
    'react-native-reanimated/plugin',
    ['module:react-native-dotenv', {
      'moduleName': '@env',
      'path': '.env',
      'blacklist': null,
      'whitelist': null,
      'safe': false,
      'allowUndefined': true
    }]
  ],
};
