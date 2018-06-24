const server = require('../app')
const request = require('supertest').agent(server)

describe('Server', () => {
  after(() => server.close())

  describe('GET /', () => {
    it('should work', done => {
      request
      .get('/')
      .expect(200)
      .expect("hey buddy \n", done)
    })

  })
})
