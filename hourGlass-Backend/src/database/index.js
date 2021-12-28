require('dotenv').config()
const mongoose = require('mongoose')

const initDatabase = () => {
  const URL_MONGO = process.env.URL_MONGO
  main().catch(err => console.log(err))
  async function main () {
    await mongoose.connect(URL_MONGO)
  }
}
console.log('Database connected')

module.exports = { initDatabase }
