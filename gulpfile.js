/* 
 * this file handles gulp for /src
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var paths = {
    styles: {
        src: './src/assets/css/',
        files: './src/assets/css/**/*.css',
        dest: './dist/css'
    },
    images: {
        src: './src/assets/images',
        files: './src/assets/images/*',
        dest: './dist/images/'
    },
    static: {
        src: './src/app/**/*.scss',
        files: './src/app/**/*.scss',
        dest: './dist/css'
    },
    html: {
        src: './src/',
        files: './src/*.html',
        dest: './dist/'
    }
};

gulp.task('css', function() {
    return gulp.src([
                './src/assets/css/uhfn_assets.css',
                './src/assets/css/uhfn_styles.css'
            ])
            //.pipe(minifyCSS())
            .pipe(prefix('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
            .pipe(concat('app.min.css'))
            .pipe(gulp.dest(paths.styles.dest))
});

gulp.task('sass', function(){
    return gulp.src(paths.styles.files)
        .pipe(sass({
            outputStyle: 'uncompressed',
            includePaths : [ paths.styles.src ]

        }))
        .on('error', function(error){
            var errorString = '[' + error.plugin + ']';
            errorString += ' ' + error.message.replace('\n',''); // Removes new line at the end

            if (error.fileName)   { errorString += ' in ' + error.fileName; }
            if (error.lineNumber) { errorString += ' on line ' + error.lineNumber; }

            console.error(errorString);
        })
        //.pipe(prefix('last 2 version', 'Explorer > 8', 'iOS > 6', 'Android > 3'))
        .pipe(gulp.dest(paths.styles.dest));
});

gulp.task('static', function(){
    return gulp.src(paths.static.files)
        .pipe(sass({
            outputStyle: 'uncompressed',
            sourceComments: 'map',
            includePaths : [ paths.static.src ]
        }))
        .on('error', function(error){
            var errorString = '[' + error.plugin + ']';
            errorString += ' ' + error.message.replace('\n',''); // Removes new line at the end

            if (error.fileName)   { errorString += ' in ' + error.fileName; }
            if (error.lineNumber) { errorString += ' on line ' + error.lineNumber; }

            console.error(errorString);
        })
        .pipe(prefix('last 2 version', 'Explorer > 8', 'iOS > 6', 'Android > 3'))
        .pipe(gulp.dest(paths.static.dest));
});

gulp.task('images', function() {
    return gulp.src(paths.images.files)
        .pipe(gulp.dest(paths.images.dest));
});

gulp.task('html', function() {
    return gulp.src(paths.html.files)
        .pipe(gulp.dest(paths.html.dest));
});

gulp.task('build', ['css', 'sass','images', 'static', 'html'] , function() {});

gulp.task('watch', ['static', 'sass'], function() {
    gulp.watch(paths.static.files, ['static'])
        .on('change', function(evt) {
            console.log(
                '[watcher] File ' + evt.path.replace(/.*(?=\/scss)/,'') + ' was ' + evt.type + ', compiling...'
            );
        });
    gulp.watch(paths.styles.files, ['sass'])
        .on('change', function(evt) {
            console.log(
                '[watcher] File ' + evt.path.replace(/.*(?=\/scss)/,'') + ' was ' + evt.type + ', compiling...'
            );
        });
});

// This is the default task - which is run when `gulp` is run
// The tasks passed in as an array are run before the tasks within the function
gulp.task('default', ['sass', 'images'], function() {
    gulp.watch(paths.styles.files, ['sass'])
        .on('change', function(evt) {
            console.log(
                '[watcher] File ' + evt.path.replace(/.*(?=\/scss)/,'') + ' was ' + evt.type + ', compiling...'
            );
        });

    gulp.watch(paths.images.files, ['images'])
        .on('change', function(evt) {
            console.log(
                '[watcher] File ' + evt.path.replace(/.*(?=\/src)/,'') + ' was ' + evt.type + ', moving...'
            );
        });
});
