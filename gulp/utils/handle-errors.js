'use strict'

import notify from 'gulp-notify'

export default function () {
  const args = Array.prototype.slice.call(arguments)

  console.error(arguments)

  // Send error to notification center with gulp-notify.
  notify.onError({
    title: 'Gulp Error',
    message: '<%= error.message %>'
  }).apply(this, args)

  // Keep gulp from hanging on this task.
  if (this && this.emit) { this.emit('end') }
}
