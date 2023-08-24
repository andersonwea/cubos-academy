import { z } from 'zod'

export function checkParamsId(request, response, next) {
  const checkParamsIdSchema = z.object({
    id: z.string(),
  })

  const _id = checkParamsIdSchema.safeParse(request.params)

  if (_id.success === false) {
    const message = _id.error.format()

    return response.status(400).json({ message })
  }

  return next()
}
