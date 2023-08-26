import { z } from 'zod'
import qs from 'qs'
import { api } from '../lib/axios.js'
import 'dotenv/config'
import { Database } from '../database.js'

const database = new Database()

export async function getCompany(request, response) {
  const getCompanySchema = z.object({
    domain: z.string(),
  })

  const _company = getCompanySchema.safeParse(request.params)

  if (_company.success === false) {
    const message = _company.error.format()

    return response.status(400).json({ message })
  }

  const company = _company.data

  const params = qs.stringify({
    domain: company.domain,
    api_key: process.env.API_KEY,
  })

  try {
    const result = await api.get('?' + params)

    if (result.data.name) {
      database.insert(result.data)
    }

    return response.json(result.data)
  } catch (err) {
    console.error(err)

    return response.status(500).send({ message: 'Occured an error.' })
  }
}
