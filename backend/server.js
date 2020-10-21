const express = require("express")
const cors = require('cors')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const http = require('http')
const socketio = require('socket.io')


require('dotenv').config()



const app = express()
const server = http.createServer(app)
const io = socketio(server)
const PORT = process.env.PORT


// Use bodyParser
app.use(bodyParser.json())

// Config for only development
if(process.env.NODE_ENV === 'development'){
  app.use(cors({
    origin: process.env.CLIENT_URL
  }))

  app.use(morgan('dev'))
}


// Load all routes
const authRouter = require('./routes/auth.route')
const postRouter = require('./routes/post.route')


// Use Routes
app.use('/api/', authRouter)
app.use('/api/', postRouter)

app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Page Not Founded"
  })
})


// Socket for chat
io.on('connection', socket => {
  socket.emit('chat-message', 'Hello World')
})

// app.use(cors())//(corsOptions));
// app.use(express.json())

// Connect to Database
const uri = process.env.ATLAS_URI
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
})
const connection = mongoose.connection
connection.once('open', () => {
  console.log("MongoDB database connection established successfully")
})


app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`)
})

server.listen(process.env.SERVER_PORT, () => console.log(`Chat server has started.`))
