const express = require('express')
const morgan = require('morgan')
const { initDatabase } = require('./database')

const app = express()

const PORT = 4000 || process.env.PORT
app.use(morgan('dev'))
app.use(express.json())
initDatabase()
app.use(require('./routes')) // Importamos todas las rutas

module.exports = { app, PORT }
