const mainconfig = require('./core.conf')
process.env.ENV_VARIABLE = 'dev'
const environment = process.env.ENV_VARIABLE ? process.env.ENV_VARIABLE : 'test'

switch (environment) {
  case 'dev':
  case 'development':
    app(mainconfig).run()
}

function app (config) {
  // TODO: Configs verify/validate
  
  // TODO: Check database connection
  return {
    core: {
      app: config.main()
    },
    run(setting) {
      try {
        this.core.app.use(config.routes())
        this.core.app.listen(config.port)
        console.log(`App starting  \r\n by '${process.env.USER}' in '${environment}' mode at port ${config.port}`)
      } catch (err) {
        console.log("Get Error on app starting")
        console.log(err)
      }
    }
  }
}