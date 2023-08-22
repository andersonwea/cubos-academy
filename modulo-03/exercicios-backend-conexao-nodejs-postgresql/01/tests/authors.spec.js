import { describe, it, expect } from 'vitest'
import { app } from '../src/app.js'
import request from 'supertest'

describe('authors', () => {
  it('should be posible to create a new author', async () => {
    const createAuthorResponse = await request(app.listen(3000))
      .post('/authors')
      .send({
        name: 'John Doe',
        age: 34,
      })
      .expect(201)

    expect(createAuthorResponse.body).toEqual(
      expect.objectContaining({
        name: 'John Doe',
        age: 34,
      }),
    )
  })
})
