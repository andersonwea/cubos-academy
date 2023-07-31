import dayjs from 'dayjs'
import 'dayjs/locale/pt-br.js'

dayjs.locale('pt-br')

const date = dayjs()

function dateFormat(date) {
  const dateFormat = {
    'a)': date.format('DD [de] MMMM [de] YYYY'),
    'b)': date.format('DD/MM/YYYY'),
    'c)': date.format('D MMM'),
    'd)': date.format('DD MMM YYYY'),
    'e)': date.format('DD [de] MMM [de] YYYY'),
    'f)': date.format('DD MMM'),
  }

  for (date in dateFormat) {
    console.log(dateFormat[date])
  }
}

dateFormat(date)
