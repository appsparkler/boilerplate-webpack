module.exports = {
  splitChunks: {
    cacheGroups: {
      reactlibs: {
        test: /[\\/]node_modules[\\/](.*)?react(.*)?\.(js|mjs|jsx|ts|tsx)$/,
        name: 'react-cache',
        // cacheGroupKey here is `commons` as the key of the cacheGroup
        // name(module, chunks, cacheGroupKey) {
        //   const moduleFileName = module.identifier().split('/').reduceRight(item => item);
        //   const allChunksNames = chunks.map((item) => item.name).join('~');
        //   return `${cacheGroupKey}-${allChunksNames}-${moduleFileName}`;
        // },
        chunks: 'all'
      },
      vendorlibs: {
          test: /[\\/]node_modules[\\/]((?!(react)).*?)\.(js|mjs|jsx|ts|tsx)$/,
          name: 'vendor-cache',
          // cacheGroupKey here is `commons` as the key of the cacheGroup
          // name(module, chunks, cacheGroupKey) {
          //   const moduleFileName = module.identifier().split('/').reduceRight(item => item);
          //   const allChunksNames = chunks.map((item) => item.name).join('~');
          //   return `${cacheGroupKey}-${allChunksNames}-${moduleFileName}`;
          // },
          chunks: 'all'
      }
    }
  }
};
