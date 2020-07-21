const { src, dest, parallel } = require('gulp');
const minify_css = require('gulp-css');
const concat = require('gulp-concat')
var htmlmin = require('gulp-htmlmin');

function html() {
    return src('app/*.html')
        .pipe(htmlmin())
        .pipe(dest('build/'))
}

function css() {
    return src('app/styles/*.css')
        .pipe(minify_css())
        .pipe(dest('build/styles'))
}

function js() {
    return src('app/scripts/*.js')
        .pipe(concat('main.min.js'))
        .pipe(dest('build/scripts'))
}

function assets() {
    return src('app/assets/*/*.png')
    .pipe(dest('build/assets'))
}

exports.html = html;
exports.css = css;
exports.js = js;
exports.assets = assets;

exports.default = parallel(html, css, js, assets);