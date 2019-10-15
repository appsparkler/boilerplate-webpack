module.exports = {
  splitChunks: {
    cacheGroups: {
      commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendorlibs',
          // cacheGroupKey here is `commons` as the key of the cacheGroup
          // name(module, chunks, cacheGroupKey) {
          //   const moduleFileName = module.identifier().split('/').reduceRight(item => item);
          //   const allChunksNames = chunks.map((item) => item.name).join('~');
          //   return `${cacheGroupKey}-${allChunksNames}-${moduleFileName}`;
          // },
          chunks: 'initial'
        }
    },
  },
};
