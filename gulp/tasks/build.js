'use strict'

import gulp from 'gulp'
import runSequence from 'run-sequence'

gulp.task('build', ['build:dev'])

gulp.task('build:dev', (callback) => {
  return runSequence(
    'clean',
    ['vendor', 'styles', 'fonts', 'scripts', 'standard', 'images'],
    'html',
    callback
  )
})

gulp.task('build:prod', (callback) => {
  return runSequence(
    'clean',
    ['vendor', 'styles', 'fonts', 'scripts:prod', 'standard:prod', 'images'],
    'gzip',
    'rev',
    'html',
    callback
  )
})

gulp.task('build:preview', (callback) => {
  return runSequence(
    'clean',
    ['vendor', 'styles', 'fonts', 'scripts:prod', 'standard:prod', 'images'],
    'gzip',
    'rev',
    'html',
    callback
  )
})
