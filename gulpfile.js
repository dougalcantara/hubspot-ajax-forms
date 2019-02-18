const gulp = require('gulp');
const sass = require('gulp-sass');
const sourceMaps = require('gulp-sourcemaps');
const autoPrefixer = require('gulp-autoprefixer');
const gutil = require('gulp-util');
const webpack = require('webpack');
const WPConfig = require('./webpack.config');
const browserSync = require('browser-sync').create();

const PATHS = {
  builtJS: './dist/**/*.js',
  testHTML: './test/index.html',
  scss: './src/scss/**/*.scss',
  builtCSS: './test/css/',
};

function reload(done) {
  browserSync.reload();

  done();
};

function serve(done) {
  browserSync.init({
    notify: false,
    server: {
      baseDir: 'test/',
    }
  });

  done();
}

function compileSCSS(done) {
  gulp.src(PATHS.scss)
    .pipe(sourceMaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoPrefixer({
      browsers: ['last 3 versions'],
      cascade: false,
    }))
    .pipe(sourceMaps.write())
    .pipe(gulp.dest(PATHS.builtCSS));

  done();
};

function compileJS(done) {
  const compiler = webpack(WPConfig);

  compiler.watch({}, (err, stats) => {
    if (err) {
      throw new gutil.PluginError('webpack', err);
    }

    gutil.log('[webpack]', stats.toString({chunks: false}));

    browserSync.reload();
  });

  done();
};

function watchFiles() {
  gulp.watch(PATHS.scss, compileSCSS);
  gulp.watch(PATHS.builtJS, reload);
  gulp.watch(PATHS.builtCSS, reload);
  gulp.watch(PATHS.testHTML, reload);
}

const build = gulp.series(compileJS, compileSCSS, serve, watchFiles);

exports.default = build;
