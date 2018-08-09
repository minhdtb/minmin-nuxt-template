const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    webpack: (config, options, webpack) => {
        config.resolve.extensions.push('.ts');

        config.module.rules.push({
            test: /\.ts$/,
            loader: 'ts-loader'
        });

        if (options.env === 'production') {
            config.plugins.push(new UglifyJsPlugin());
        }

        config.entry.main = './server/server.ts';
        return config
    }
};