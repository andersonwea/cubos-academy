import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween.js'

dayjs.extend(isBetween)

function isStoreOpen(date) {
  const client = dayjs(date)

  const openedWeekDays = dayjs(client)
    .set('hour', 8)
    .set('minute', 0)
    .set('second', 0)
  const closedWeekDays = dayjs(client)
    .set('hour', 18)
    .set('minute', 1)
    .set('second', 0)

  const openedWeekendDays = dayjs(client)
    .set('hour', 8)
    .set('minute', 0)
    .set('second', 0)
  const closedWeekendDays = dayjs(client)
    .set('hour', 12)
    .set('minute', 1)
    .set('second', 0)

  const weekday = [1, 2, 3, 4, 5]

  const isWeekDay = weekday.includes(client.get('day'))

  let isOpen = null

  if (!isWeekDay) {
    isOpen = client.isBetween(openedWeekendDays, closedWeekendDays)

    return isOpen
  }

  isOpen = client.isBetween(openedWeekDays, closedWeekDays)

  return isOpen
}

const client = new Date(2023, 6, 29, 11, 1, 1)

console.log(isStoreOpen(client))
