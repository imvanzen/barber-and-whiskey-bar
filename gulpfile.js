'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const gulpDeployFtp = require('gulp-deploy-ftp');
const ftpConfig = require('config').get('GentlemanBarber.ftpConfig');

gulp.task('deploy', function () {
    return gulp.src('./dist')
        .pipe(gulpDeployFtp(ftpConfig));
});

gulp.task('styles', function () {
    return gulp.src('./src/sass/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./dist'));
});

gulp.task('images', () => {
    gulp.src('./src/img/*')
        .pipe(image({
            pngquant: true,
            optipng: false,
            zopflipng: true,
            jpegRecompress: false,
            mozjpeg: true,
            guetzli: false,
            gifsicle: true,
            svgo: true,
            concurrent: 10,
            quiet: true // defaults to false
        }))
        .pipe(gulp.dest('./dist/img'));
});

gulp.task('styles:watch', function () {
    gulp.watch('./src/sass/**/*.scss', ['styles']);
});

gulp.task('images:watch', function () {
    gulp.watch('./src/img/**/*.(png|jpg|gif)', ['images']);
});

gulp.task('watch', ['styles:watch', 'images:watch']);

gulp.task('default', ['styles', 'images']);
