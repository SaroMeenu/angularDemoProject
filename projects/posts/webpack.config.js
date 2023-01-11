const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "posts",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },   
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
        library: { type: "module" },

        // For remotes (please adjust)
        // name: "posts",
        // filename: "remoteEntry.js",
        // exposes: {
        //     './Component': './projects/posts/src/app/app.component.ts',
        // },        
        name: "posts",
        filename: "remoteEntry.js",
        exposes: {
            './Module': './projects/posts/src/app/app.module.ts',
        }, 
        
        // For hosts (please adjust)
        // remotes: {
        //     "shell": "http://localhost:6402/remoteEntry.js",
        //     "order": "http://localhost:6403/remoteEntry.js",
        //     "login": "http://localhost:6401/remoteEntry.js",
        //     "register": "http://localhost:6404/remoteEntry.js",

        // },

        shared: share({
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },

          ...sharedMappings.getDescriptors()
        })
        
    }),
    sharedMappings.getPlugin()
  ],
};
