var path = require('path');
var webpack = require("webpack");
const OptimizeJsPlugin = require("optimize-js-plugin");
module.exports = {
    entry: {
        'core.min': './src/app/bootstrap',
        'vendor': [
            'react',
            'react-dom',
            'react-router',
            'prop-types',
            'redux',
            'react-redux',
            'react-router-redux',
            'moment',
            'lodash',
            'axios',
        ],
    },
    output: {
        path: path.join(__dirname, '/public/js'), //path require file
        publicPath: '/public/',
        filename: '[name].js',
        chunkFilename: '[name]-[chunkhash].js'
    },
    module: {
        loaders: [{
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    plugins: ['transform-decorators-legacy'],
                    presets: ['react', 'es2015']
                }
            },
            { test: /\.css$/, loader: "style-loader!css-loader" }, {
                test: /\.(jpe?g|png|gif|svg|eot|svg|woff|woff2|ttf)$/i,
                loaders: [
                    'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            path.resolve('./src'),
            'node_modules'
        ],
        alias: {
            Check$: path.resolve(__dirname, 'src/common/helpers/check.js'),
            Helper$: path.resolve(__dirname, 'src/common/helpers/index.js'),
            Config$: path.resolve(__dirname, 'src/common/config/index.js'),
            Routes$: path.resolve(__dirname, 'src/common/config/routes.js'),
            // SportConfig$: path.resolve(__dirname, 'src/common/config/sport.js'),
            ScriptHOC$: path.resolve(__dirname, 'src/common/hoc/Script.js'),
            //component
            Pagination$: path.resolve(__dirname, 'src/common/components/PaginationView.js'),
            //end component
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        }),
        new OptimizeJsPlugin({
            sourceMap: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.min.js'
        }),
        new webpack.ProvidePlugin({
            //plugin
            'React': 'react',
            'ReactDOM': 'react-dom',
            'Redux': 'redux',
            'ReactRedux': 'react-redux',
            'ReactRouter': 'react-router',
            'ReactRouterRedux': 'react-router-redux',
            'PropTypes': 'prop-types',
            'axios': 'axios',
            'moment': 'moment',
            '_': 'lodash',
            // 'KeyboardJS': 'keyboardjs',
            'ScriptHOC': 'ScriptHOC',
            //end plugin
            //conf
            'Config': 'Config',
            'Check': 'Check',
            'Helper': 'Helper',
            'Routes': 'Routes',
            //end conf
            //component
            'Pagination': 'Pagination'
            //end component
        })
    ]
};