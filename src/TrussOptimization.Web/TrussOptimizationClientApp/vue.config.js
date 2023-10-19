
module.exports = {
  baseUrl: "./",
  productionSourceMap: false,
  filenameHashing: false,
  configureWebpack: {
    devtool: "source-map"
  },
  chainWebpack: config => {
    config
        .plugin('fork-ts-checker')
        .tap(args => {
            let allowUseMem= 1000;
            // in vue-cli shuld args[0]['typescript'].memoryLimit
            args[0].memoryLimit = allowUseMem;
            return args
        })
},
};
