const Koa = require('koa')
const koaBody = require('koa-body')
const config = require('./config')

const port = config.port

const app = new Koa()


app.use(koaBody({ jsonLimit: '1kb' }))

app.use(async ctx => {
  const body = ctx.request.body
  if(!body.name) ctx.throw(400, ".name required")

  ctx.body = { name: body.name.toUpperCase() }
})

module.exports = app.listen(port, () => console.log("Listening on %s", port))
