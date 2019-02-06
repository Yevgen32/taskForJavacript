const gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglifyjs'),
    del = require('del'),
    cleanCSS = require('gulp-clean-css'),
    babel = require('gulp-babel');

gulp.task('compiled', async () => {
    return gulp.src('src/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('sass', () => {
    return gulp.src('src/sass/**/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream());
});

gulp.task('minify-css', () => {
    return gulp.src('src/css/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('scriptsLibrary', ()=>{
   return gulp.src([
      'src/libs/jquery/dist/jquery.min.js'
   ])
       .pipe(uglify())
       .pipe(concat('libs-min.js'))
       .pipe(gulp.dest('src/js'));
});

gulp.task('scriptsMain', ()=>{
   return gulp.src('src/js/main.js')
       .pipe(uglify())
       .pipe(concat('main-min.js'))
       .pipe(gulp.dest('src/js'));
});

gulp.task('clean', async ()=>{
   return del.sync('dist');
});

gulp.task('watch', () => {
    browserSync.init({
        server: {
            baseDir: 'src'
        },
        notify: false
    });
    gulp.watch('src/sass/**/*.sass', gulp.parallel('sass'));
    gulp.watch('src/*.html').on('change', browserSync.reload);
    gulp.watch('src/js/*.js').on('change', browserSync.reload);
});

gulp.task('move', ()=>{
    const buildFonts = gulp.src('src/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'));
    const buildJs = gulp.src('src/js/**/*.js')
        .pipe(gulp.dest('dist/js'));
    const buildHtml = gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
    return buildHtml, buildFonts, buildJs;
});

gulp.task('build', gulp.series('clean','sass', 'compiled', 'minify-css', 'scriptsLibrary', 'scriptsMain', 'move'), ()=>{

});

