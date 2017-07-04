'use strict'

import gulp from 'gulp'
import standard from 'gulp-standard'
import handleErrors from '../utils/handle-errors'

const standardGlob = [
  './assets/app/**/*.js',
  './gulp/**/*.js'
]

gulp.task('standard', () => {
  return gulp.src(standardGlob)
    .pipe(standard())
    .on('error', handleErrors)
    .pipe(standard.reporter('default', {}))
})

gulp.task('standard:prod', () => {
  return gulp.src(standardGlob)
    .pipe(standard({ breakOnError: true }))
    .pipe(standard.reporter('default', {}))
})
