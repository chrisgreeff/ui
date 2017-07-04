'use strict'

import gulp from 'gulp'
import rev from 'gulp-rev'
import runSequence from 'run-sequence'

gulp.task('rev:scripts', () => {
  return gulp.src('./web/js/**/*.js')
    .pipe(rev())
    .pipe(gulp.dest('./web/js'))
    .pipe(rev.manifest({ base: '.', merge: true }))
    .pipe(gulp.dest('.'))
})

gulp.task('rev:styles', () => {
  return gulp.src('./web/css/**/*.css')
    .pipe(rev())
    .pipe(gulp.dest('./web/css'))
    .pipe(rev.manifest({ base: '.', merge: true }))
    .pipe(gulp.dest('.'))
})

gulp.task('rev', (callback) => runSequence('rev:styles', 'rev:scripts', callback))
