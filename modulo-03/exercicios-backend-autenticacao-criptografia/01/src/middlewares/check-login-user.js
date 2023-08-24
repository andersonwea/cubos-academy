import jwt from 'jsonwebtoken'
import { env } from '../env/index.js'

export async function checkLoginUser(request, response, next) {
  const { authorization } = request.headers

  const [_, token] = authorization.split(' ')

  try {
    const decoded = jwt.verify(token, env.JWT_SECRET)

    const { id } = decoded

    request.locals = { user_id: id }

    next()
  } catch (err) {
    return response.status(401).json({ message: 'Unathorized error' })
  }
}
