module.exports = function (api) {
  api.cache(true);

  plugins.push();

  plugins.push("expo-router/babel");

  plugins.push([
    [
      "babel-plugin-rewrite-require",
      {
        aliases: {
          stream: "readable-stream",
        },
      },
    ],
  ]);

  return {
    presets: ["babel-preset-expo"],
    plugins,
  };
};
