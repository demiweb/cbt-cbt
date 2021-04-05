var syntax        = 'scss'; // Syntax: sass or scss;

var gulp          = require('gulp'),
		gutil         = require('gulp-util' ),
		sass          = require('gulp-sass'),
		browsersync   = require('browser-sync'),
		concat        = require('gulp-concat'),
		uglify        = require('gulp-uglify'),
		cleancss      = require('gulp-clean-css'),
		rename        = require('gulp-rename'),
		autoprefixer  = require('gulp-autoprefixer'),
		notify        = require("gulp-notify"),
		rigger        = require("gulp-rigger"),
		rsync         = require('gulp-rsync');

gulp.task('browser-sync', function() {
	browsersync({
		server: {
			baseDir: 'dist'
		},
		notify: false,
		// open: false,
		// tunnel: true,
		// tunnel: "projectname", //Demonstration page: http://projectname.localtunnel.me
	})
});

gulp.task('styles', async function() {
	gulp.src('app/'+syntax+'/**/*.'+syntax+'')
	.pipe(sass({ outputStyle: 'expand' }).on("error", notify.onError()))
	.pipe(rename({ suffix: '.min', prefix : '' }))
	.pipe(autoprefixer(['last 15 versions']))
	.pipe(cleancss( {level: { 1: { specialComments: 0 } } })) // Opt., comment out when debugging
	// .pipe(gulp.dest('app/css'))
	.pipe(gulp.dest('dist/css'))
	.pipe(browsersync.stream())
});

gulp.task('html', async function() {
	return gulp.src('app/*.html')
		.pipe(rigger()) // Прогоним через rigger
		.pipe(gulp.dest('dist/'))
		.pipe(browsersync.stream())
});
gulp.task('img', function () {
	gulp.src('app/img/**/*.*') // Выберем файлы по нужному пути
		.pipe(gulp.dest('dist/img'))// Переместим их в папку build

		.pipe(browsersync.stream());
});

gulp.task('fonts', function () {
	gulp.src('app/fonts/**/*.*') // Выберем файлы по нужному пути
		.pipe(gulp.dest('dist/fonts'))// Переместим их в папку build

		.pipe(browsersync.stream());
});

gulp.task('js', function() {
	gulp.src([
		'app/libs/jquery/dist/jquery.min.js',
		'app/libs/slick/slick.min.js',
		'app/libs/swiper/swiper.min.js',
		'app/libs/bootstrap/js/bootstrap.min.js',		
		'app/libs/lightgallery/js/lightgallery.min.js',
		'app/libs/lightgallery/js/lg-zoom.min.js',
		'app/libs/lightgallery/js/lg-thumbnail.min.js',		
		'app/libs/maskedinput/jquery.maskedinput.min.js',	
		'app/libs/wow/dist/wow.min.js',
		'app/libs/lighttabs/lightTabs.js',
		'app/libs/jquery.nicescroll/jquery.nicescroll.js',
		'app/libs/jquery.countTo/jquery.countTo.js',
		'app/libs/countdown/jquery.countdown.js',
		'app//libs/jquery-nice-select/js/jquery.nice-select.min.js',
		'app/js/common.js', // Always at the end
		])
	.pipe(concat('scripts.min.js'))
	// .pipe(uglify()) // Mifify js (opt.)
	// .pipe(gulp.dest('app/js'))
	.pipe(gulp.dest('dist/js'))
	.pipe(browsersync.stream())
});

gulp.task('rsync', function() {
	gulp.src('app/**')
	.pipe(rsync({
		root: 'app/',
		hostname: 'username@yousite.com',
		destination: 'yousite/public_html/',
		// include: ['*.htaccess'], // Includes files to deploy
		exclude: ['**/Thumbs.db', '**/*.DS_Store'], // Excludes files from deploy
		recursive: true,
		archive: true,
		silent: false,
		compress: true
	}))
});

gulp.task('watch', ['styles', 'html', 'img', 'fonts', 'js', 'browser-sync'], function() {
	gulp.watch('app/'+syntax+'/**/*.'+syntax+'', ['styles']);
	gulp.watch('app/img/**/*.*', ['img']);
	gulp.watch('app/fonts/*/**.*', ['fonts']);
	gulp.watch(['libs/**/*.js', 'app/js/common.js'], ['js']);
	gulp.watch('app/*.html', ['html'])
});

gulp.task('default', ['watch']);
