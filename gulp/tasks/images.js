'use strict'

import gulp from 'gulp'
import changed from 'gulp-changed'

gulp.task('images', () => {
  return gulp.src('./assets/images/**/*')
    .pipe(changed('./web/images'))
    .pipe(gulp.dest('./web/images'))
})
