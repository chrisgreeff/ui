'use strict'

import gulp from 'gulp'
import sass from 'gulp-sass'
import autoprefixer from 'gulp-autoprefixer'
import handleErrors from '../utils/handle-errors'

const stylesGlob = [
  './assets/styles/cui.scss'
]

gulp.task('styles', () => {
  return gulp.src(stylesGlob)
    .pipe(sass({ errLogToConsole: true }))
    .on('error', handleErrors)
    .pipe(autoprefixer({
      // Default prefix support to all browsers of latest two versions.
      browsers: ['last 2 versions']
    }))
    .on('error', handleErrors)
    .pipe(gulp.dest('./web/css'))
})
