const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const withCSS = require("@zeit/next-css");
const withVideos = require("next-videos");

const SVGWebpack = {
	webpack: function(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: [{ loader: "@svgr/webpack" }]
		});
		// config.module.rules.push({
		// 	test: /\.tff$/,
		// 	use: [
		// 		{
		// 			loader: "url-loader",
		// 			options: {
		// 				limit: 100000,
		// 				name: "[name].[ext]"
		// 			}
		// 		}
		// 	]
		// });
		return config;
	}
};

module.exports = withPlugins(
	[
		[
			optimizedImages,
			{
				handleImages: ["png"],
				optimizeImages: true,
				optimizeImagesInDev: false,
				// optipng: {
				// 	optimizationLevel: 7
				// },
				pngquant: true
			}
		],
		[withCSS],
		[withVideos],
		{
			env: {
				SHOPIFY_URI: "https://itsokay.gg/api/graphql",
				STOREFRONT_API: "5137863724b14226533a014af2994a3a"
			}
		}
	],
	SVGWebpack
);
