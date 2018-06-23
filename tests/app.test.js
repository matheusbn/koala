const server = require('../app')
const request = require('supertest').agent(server)

describe('Server', () => {
  after(() => server.close())

  describe('POST /', () => {
    describe('with JSON', () => {
      it('should work', done => {
        request
        .post('/')
        .send({ name: 'Matheus' })
        .expect(200)
        .expect({ name: 'MATHEUS' }, done)
      })
    })

  })
})
