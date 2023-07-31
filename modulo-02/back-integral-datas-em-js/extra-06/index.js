import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween.js'

dayjs.extend(isBetween)

const clientArrived = new Date(2023, 7, 1, 12, 15)

function isPromotionStillAvailable(clientArrived) {
  const client = dayjs(clientArrived)

  const promotionStarts = dayjs()
  const promotionEnds = dayjs().add(24, 'hour')

  const isPromotionValid = client.isBetween(promotionStarts, promotionEnds)

  return isPromotionValid
}

console.log(isPromotionStillAvailable(clientArrived))
