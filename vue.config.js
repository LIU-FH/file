const CompressionWebpackPlugin = require("compression-webpack-plugin");
const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;

module.exports = {
    // outputDir:'docs',
    configureWebpack: config => {
        if (IS_PROD) {
            config.externals = {
                vue: "Vue",
                "vue-router": "VueRouter",
                vuex: "Vuex",
                axios: "axios",
                "js-cookie": "Cookies",
                "ViewUI": 'view-design',
                "vue-lazyload": "VueLazyload",
            };
        }
        const plugins = [];
        plugins.push(
            new CompressionWebpackPlugin({
                filename: "[path].gz[query]",
                algorithm: "gzip",
                test: productionGzipExtensions,
                threshold: 10240,
                minRatio: 0.8
            })
        );
        config.plugins = [...config.plugins, ...plugins];
    },
    chainWebpack: config => {
        const cdn = IS_PROD ? {
            css: [
                "http://unpkg.com/view-design/dist/styles/iview.css",
            ],
            js: [
                "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js",
                "http://unpkg.com/view-design/dist/iview.min.js",
                "https://unpkg.com/vue-router/dist/vue-router.min.js",
                "https://unpkg.com/vuex@3.1.2/dist/vuex.min.js",
                "https://unpkg.com/axios@0.19.2/dist/axios.min.js",
                "https://cdn.jsdelivr.net/npm/js-cookie@beta/dist/js.cookie.min.js",
                "https://unpkg.com/vue-lazyload/vue-lazyload.js",
            ]
        } : {};
        config.plugin("html").tap(args => {
            args[0].cdn = cdn;
            return args;
        });
        // 修复HMR
        config.resolve.symlinks(true);
        // 压缩图片
        config.module
            .rule("images")
            .use("image-webpack-loader")
            .loader("image-webpack-loader")
            .options({
                mozjpeg: {
                    progressive: true,
                    quality: 65
                },
                optipng: {
                    enabled: false
                },
                pngquant: {
                    quality: [0.65, 0.9],
                    speed: 4
                },
                gifsicle: {
                    interlaced: false
                }
                // webp: { quality: 75 }
            });
    }
};