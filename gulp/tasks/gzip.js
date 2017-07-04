'use strict'

import gulp from 'gulp'
import gzip from 'gulp-gzip'
import es from 'event-stream'

gulp.task('gzip', () => {
  return es.concat(
    gulp.src('./web/js/**/*.js')
      .pipe(gzip())
      .pipe(gulp.dest('./web/js')),

    gulp.src('./web/css/**/*.css')
      .pipe(gzip())
      .pipe(gulp.dest('./web/css'))
  )
})
