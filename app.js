const Koa = require('koa')
const koaBody = require('koa-body')

const port = 3000

const app = new Koa()

app.use(koaBody())


app.use(async ctx => {
  const body = ctx.request.body
  if(!body.name) ctx.throw(400, ".name required")

  ctx.body = { name: body.name.toUpperCase() }
})

app.listen(port, () => console.log("Listening on %s", port))
