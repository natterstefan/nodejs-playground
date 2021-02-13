import request from 'supertest'

import app from '../server'

describe('GET /api/hello-world', () => {
  it('should return 200 OK', () => {
    return request(app).post('/api/hello-world').expect(200)
  })
})
