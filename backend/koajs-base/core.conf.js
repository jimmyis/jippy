module.exports = {
  framework: {
    koa: {
      main: require('koa'),
      router: require('koa-router')
    },
    use() {
      return new this.koa.main()
    }
  },
  port: 3000,
  main() {
    return this.framework.use()
  },
  routes() {
    return require('./routes')(this.main(),this)
  },
}