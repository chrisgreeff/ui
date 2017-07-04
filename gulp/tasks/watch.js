'use strict'

import gulp from 'gulp'

gulp.task('watch', () => {
  gulp.watch('./assets/**/*.scss', ['styles'])
  gulp.watch('./assets/images/**/*', ['images'])
  gulp.watch('./assets/index.html', ['html'])
})
