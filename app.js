const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const passport = require('passport')
const session = require('express-session');
const MongoStore = require('connect-mongo');
const connectDB = require('./config/db')


const app = express()

// body parser

app.use(express.urlencoded({extended:false}));
app.use(express.json());
// load config
dotenv.config({ path: './config/config.env' })
connectDB()

//passport config
require('./config/passport')(passport)

//Logging Middleware
if(process.env.NODE_ENV === 'development'){
	app.use(morgan('dev'))
}


//express-session middleware


app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
  })
)
// handlebars helpers

const { formatDate } = require('./helpers/hbs')

// HandleBars middleware

app.engine('.hbs',exphbs({ helpers: {
	formatDate,
}, defaultLayout: 'main',extname: '.hbs'}));
app.set('view engine','.hbs');

//passport middleware

app.use(passport.initialize())
app.use(passport.session())


// connectDB()

const PORT = process.env.PORT || 3000
console.log(`${process.env.MONGO_URI}`)
//
// routes
const booksRouter = require("./routers/index.js");
app.use('/',booksRouter);

const loginRouter = require("./routers/auth.js");
app.use('/auth',loginRouter);

const storiesRouter = require("./routers/stories.js");
app.use('/stories',storiesRouter);

// static folder
app.use(express.static(path.join(__dirname,'public')))





app.listen(PORT,console.log(`server running on ${process.env.NODE_ENV} mode and on port ${PORT}`));