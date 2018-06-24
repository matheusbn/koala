const Koa = require('koa')
const koaBody = require('koa-body')
const config = require('./config')

const port = config.port

const app = new Koa()


app.use(koaBody({ jsonLimit: '1kb' }))

app.use(async ctx => ctx.body = "hey buddy \n")

module.exports = app.listen(port, () => console.log("Listening on %s", port))
