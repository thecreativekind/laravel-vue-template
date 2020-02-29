const mix = require("laravel-mix");
const tailwindcss = require("tailwindcss");
const path = require("path");

mix.js("resources/js/app.js", "public/js")
    .sass("resources/sass/app.scss", "public/css")
    .browserSync("my-app.test")
    .options({
        processCssUrls: false,
        postCss: [tailwindcss("./tailwind.config.js")]
    })
    .webpackConfig({
        output: { publicPath: "/" },
        resolve: {
            alias: {
                "@": path.join(__dirname, "resources/js")
            }
        }
    });

if (mix.inProduction()) {
    mix.version();
}
