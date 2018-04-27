/*
 * Libraries and utils
 */
var webpack = require( 'webpack' );
var path = require( 'path' );
var autoprefixer = require( 'autoprefixer' );
var CommonsChunkPlugin = require( 'webpack/lib/optimize/CommonsChunkPlugin' );
var autoprefixer = require( 'autoprefixer' );
var rucksack = require( 'rucksack-css' );
var mqpacker = require( 'css-mqpacker' );
var ROOT_PATH = path.resolve( __dirname );
var APP_PATH = path.resolve( ROOT_PATH, 'src/app' );
var ENDPOINTS_PATH = path.resolve( ROOT_PATH, 'src/endpoints' );
var BUILD_PATH = path.resolve( ROOT_PATH, 'dist' );
var PUBLIC_PATH = '/iSiteWatch-React/js/'; 

var uglifyPlugin = new webpack.optimize.UglifyJsPlugin( {
    compress: {
        warnings: false
    }
} );

module.exports = {
    cache: false,
    entry: {
        app: [ path.resolve( APP_PATH, 'app.jsx' ) ]
    },
    output: {
        path: path.join( BUILD_PATH, 'js' ),
        publicPath: PUBLIC_PATH,
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                query: { compact: false },
                exclude: /(node_modules)/
            },
            {
                test: /\.s?css$/,
                loader: 'style!css!postcss!sass'
            },
            {
                include: /\.json$/,
                loaders: [ 'json-loader' ]
            },
            { test: /\.(woff|woff2?|ttf|eot)(\?.*)?$/, loader: 'url?limit=204800' },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,   loader: 'url?limit=10000&minetype=image/svg+xml' },
            { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192' }
        ]
    },
    resolve: {
        extensions: [ '', '.js', '.jsx', '.json' ],
        root: ROOT_PATH,
        alias: {
            'app': 'src/app/',
            'utils': 'src/app/utils',
            'endpoints': 'src/endpoints',
            'styles': 'src/asses/css',
            'shared': 'src/app/shared'
        }
    },
    devtool: 'cheap-source-map',
    plugins: [
        new CommonsChunkPlugin( 'common.js' ),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    // These are the plugins that PostCSS will use when it runs.
    postcss: function () {
        var pcPlugins = [];
        // http://simplaio.github.io/rucksack/
        pcPlugins.push( rucksack() );
        // https://github.com/postcss/autoprefixer
        pcPlugins.push( autoprefixer( {
            browsers: [
                'Chrome >= 28',
                'Firefox >= 22',
                'Explorer > 10',
                'Edge >= 1',
                'Safari >= 5',
                'iOS >= 7',
                'Android >= 4',
                'ChromeAndroid >= 28'
            ]
        } ) );
        return pcPlugins;
    }
};
