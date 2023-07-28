import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween.js'

dayjs.extend(isBetween)

function isStoreOpen(date) {
  const client = dayjs(date)

  const opened = dayjs().set('hour', 8).set('minute', 0).set('second', 0)

  const closed = dayjs().set('hour', 18).set('minute', 1).set('second', 0)

  const weekday = [1, 2, 3, 4, 5]

  const isBuninessDay = weekday.includes(client.get('day'))

  if (!isBuninessDay) {
    return false
  }

  const isOpen = client.isBetween(opened, closed)

  return isOpen
}

const client = new Date(2023, 6, 29, 9, 1, 1)

console.log(isStoreOpen(client))
