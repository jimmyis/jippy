module.exports = (app, config) => {
  const init = new config.framework.koa.router()
    .get('/test', ctx => {
      console.log(ctx)
      ctx.body = ctx
    })
    .get('/', ctx => {
      ctx.body = "Hello"
    })
    return init.routes()
}