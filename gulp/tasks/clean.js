'use strict'

import gulp from 'gulp'
import del from 'del'

gulp.task('clean', () => {
  return del([
    './web/**/*',
    './rev-manifest.json'
  ])
})