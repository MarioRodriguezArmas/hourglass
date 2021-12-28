const { app, PORT } = require('./app')

function main () {
  app.listen(PORT, () => {
    console.log('Server ON')
  })
}
main()
