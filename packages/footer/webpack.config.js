process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

const fs = require('fs');
const path = require('path');
const url = require('url');

const webpack = require('webpack');
const ignoredFiles = require('react-dev-utils/ignoredFiles');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const svgToMiniDataURI = require("mini-svg-data-uri");
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');
const { ModuleFederationPlugin } = webpack.container;

const paths = require('./config/paths');
const getStyleLoaders = require('./config/getStyleLoaders');

process.on('unhandledRejection', err => {
  throw err;
});

const publicPath = '/';
const publicUrl = '';
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

module.exports = {
  mode: 'production',
  entry: [
    paths.appIndexJs,
  ],
  cache: false,
  devtool: "source-map",
  optimization: {
    minimize: false
  },
  output: {
    pathinfo: true,
    publicPath: 'http://localhost:4002/',
		filename: 'static/js/bundle.js',
		// chunkFilename: 'static/js/[name].chunk.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: "images/[hash][ext]",
    devtoolModuleFilenameTemplate: info =>
      path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
  },
  stats: {
    warnings: false
  },
  devServer: {
    clientLogLevel: 'none',
    contentBase: paths.appPublic,
    watchContentBase: true,
    publicPath,
    quiet: true,
    watchOptions: {
      ignored: ignoredFiles(paths.appSrc),
    },
    overlay: false,
    historyApiFallback: {
      disableDotRule: true,
    },
    before(app, server) {
    },
  },
  resolve: {
    extensions: [".jsx", ".js", ".json"],
    alias: {
      '~': paths.appSrc,
    }
  },
  stats: {
    warnings: false
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				include: paths.appSrc,
				loader: require.resolve('babel-loader'),
				options: {
					customize: require.resolve(
						'babel-preset-react-app/webpack-overrides'
					),
					
					plugins: [
						[
							require.resolve('babel-plugin-named-asset-import'),
							{
								loaderMap: {
									svg: {
										ReactComponent: '@svgr/webpack?-prettier,-svgo![path]',
									},
								},
							},
						],
					],
					cacheDirectory: true,
					cacheCompression: false,
				},
      },
      {
				test: /\.(png|jpg)$/,
				type: "asset"
      },
      {
				test: /\.svg$/,
				type: "asset",
				generator: {
					dataUrl: content => {
						if (typeof content !== "string") {
							content = content.toString();
						}

						return svgToMiniDataURI(content);
					}
				}
			},
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
			},
			{
				exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
				loader: require.resolve('file-loader'),
				options: {
					name: 'static/media/[name].[hash:8].[ext]',
				},
      },
      {
        test: cssRegex,
        exclude: cssModuleRegex,
        use: getStyleLoaders({
          importLoaders: 1,
        }),
      },
      {
        test: cssModuleRegex,
        use: getStyleLoaders({
          importLoaders: 1,
          modules: true,
          getLocalIdent: getCSSModuleLocalIdent,
        }),
      },
      {
        test: sassRegex,
        exclude: sassModuleRegex,
        use: getStyleLoaders({ importLoaders: 2 }, 'sass-loader'),
      },
      {
        test: sassModuleRegex,
        use: getStyleLoaders(
          {
            importLoaders: 2,
            modules: true,
            getLocalIdent: getCSSModuleLocalIdent,
          },
          'sass-loader'
        ),
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
			inject: true,
      template: paths.appHtml,
    }),
    new ModuleFederationPlugin({
      name: "footer",
      library: { type: "var", name: "footer" },
      filename: "remoteEntry.js",
      exposes: {
        "./Footer": "./src/App",
      },
      shared: {
        react: {
          import: "react",
          shareKey: "react",
          shareScope: "default",
          singleton: true, 
        },
        "react-dom": {
          singleton: true,
        },
        "styled-components": {
          singleton: true,
        }
      },
    }),
	],
  experiments: {
		asset: true
	},
  node: {
    global: true
  },
};
