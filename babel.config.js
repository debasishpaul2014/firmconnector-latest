function babelConfig(api) {
  if (api) {
    api.cache(false);
  }

  const presets = ["module:metro-react-native-babel-preset"];
  const plugins = [
    [
      "module-resolver",
      {
        alias: {
          appColors: "./src/Colors",
          appConstants: "./src/Constants",
          components: "./src/Components",
          screens: "./src/screens",
          utils: "./src/utils",
        },
        cwd: "babelrc",
      },
    ],
  ];

  return {
    presets,
    plugins,
  };
}

module.exports = babelConfig;
