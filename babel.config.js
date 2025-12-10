module.exports = {
  presets: ['@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        alias: {
          '@': './src',
        },
      },
    ],
  ],
};
