var browserSync  = require('browser-sync').create()
var exec         = require('child_process').exec
var gulp         = require('gulp')
var runSequence  = require('run-sequence') // This is temporary, until Gulp 4.0 ships with support for sequential tasks
var shell        = require('gulp-shell')

gulp.task('build:jekyll', function() {
  return shell.task(['jekyll build --incremental'])
})

gulp.task('watch', function() {
  return exec('jekyll build --incremental --watch', function(err, stdout, stderr) {
    if (err) {
      console.log(err, stdout, stderr)
    }
  })
})

gulp.task('serve', function() {
  return browserSync.init({
    server: "./_site",
    files: './_site/**/*.*',
    notify: false,
    logPrefix: 'developer.sketchapp.com',
    // Uncomment the next two lines to create a tunnel to https://developersketchapp.localtunnel.me
    // tunnel: 'developersketchapp',
    // online: true, // Set this to 'false' when working with no connection
    open: 'external', // Can use 'local', 'external' or 'tunnel' (last one opens https://developersketchapp.localtunnel.me)
    // Uncomment the next line if you want Gulp to open multiple browsers when running
    // browser: ['google chrome', 'safari', 'firefox']
  })
})

gulp.task('default', function(callback){
  runSequence('build:jekyll', 'watch', 'serve')
})
