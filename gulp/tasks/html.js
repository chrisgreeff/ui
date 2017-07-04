'use strict'

import gulp from 'gulp'
import revReplace from 'gulp-rev-replace'

gulp.task('html', () => {
  const manifest = gulp.src('./rev-manifest.json')

  return gulp.src('./assets/index.html')
    .pipe(revReplace({ manifest }))
    .pipe(gulp.dest('./web'))
})
