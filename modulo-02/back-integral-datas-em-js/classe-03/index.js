import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween.js'

dayjs.extend(isBetween)

function isStoreOpen(client) {
  const opened = dayjs().set('hour', 8).set('minute', 0).set('second', 0)

  const closed = dayjs().set('hour', 18).set('minute', 1).set('second', 0)

  const canEnter = dayjs(client).isBetween(opened, closed, 'second')

  return canEnter
}

const client = new Date(2023, 6, 27, 18, 0)
console.log(client)
console.log(isStoreOpen(client))
