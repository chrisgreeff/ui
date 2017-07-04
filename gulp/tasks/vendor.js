'use strict'

import gulp from 'gulp'
import bower from 'main-bower-files'
import wrap from 'gulp-wrap'
import concat from 'gulp-concat'
import es from 'event-stream'
import scriptFilter from '../utils/script-filter'

const vendorScriptsGlob = bower().filter(scriptFilter)
const vendorStylesGlob = []

vendorScriptsGlob.push('./assets/vendor/**/*.js')

gulp.task('vendor', () => {
  return es.concat(
    gulp.src(vendorScriptsGlob)
      .pipe(wrap(';(function() {<%= contents %>}());'))
      .pipe(concat('vendor.js'))
      .pipe(gulp.dest('./web/js')),

    gulp.src(vendorStylesGlob)
      .pipe(concat('vendor.css'))
      .pipe(gulp.dest('./web/css'))
  )
})
