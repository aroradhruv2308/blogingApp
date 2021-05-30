# blogingApp
node js express mongodb based bloging app 

# Setup the config file and connecting DB
a config file is the file where all the secret info is stored in the .env format the file here is named as config.env and using dotenv module we will be cofiguring those variables and info in to our code so for loading the config file write ```dotenv.config({ path: './config/config.env' })```  now once the config file is loaded we can access any var defined there using `process.env.(name of the variable)` the NODE_ENV is defined by the cross-env and write the scripts for both dev mode and the production mode like`"start": "cross-env NODE_ENV=production node app"`  here we are using the mongodb atlas create the cluster on there site registe a user and take a key from there and paste in the config file as a variable and now in the cofig folder you have to make the db.js which will have the same code which we did with the help of mongoose but this time we will use the key stored in the config as the variable in the .env file again export the function and require in app.js

# setting up morgan for the logging middlewares 
no need to mess yourself with what is morgan just remember that it helps in the hnadling logging files these middlewares are added and then the show info on console abbout all the logging request to the site server for this add 
`if(process.env.NODE_ENV === 'development'){
	app.use(morgan('dev'))
}`
# setting up routes and the hbs template engine
## wait wait first what is template engine
Simply said ‘Templating’ engine is an engine that can manipulate your HTML code from the server side using the server side code you use. By it’s very authentic built in syntaxes you can loop, change content dynamically, alert messages to user and etc.
## here we use the hbs
so for this first we have to add the handle bars middle wares to tell that what ciew engine we are using so `app.engine('.hbs',exphbs({ defaultLayout: 'main',extname: '.hbs'}));
app.set('view engine','.hbs');` add this to the app.js and now you have to make directories make the exactly same directory so that no error occur
in the root directory make the views inside declare the layouts which will contain two files ie main.hbs and login.hbs and now inside the views you will add your html files but in .hbs extension the layout defines the basic structure and all other hbs runs through rout on the layout and you can see that in the above mentioned that the default layout is main so it will run the main.hbs first and then all the files as the route commands

## setting up routes 
now this routes will handle all the http request get ,post patch delete or any other so now we will make the router folder in the route directory  inside which index.js is made now here you have to make the all the routes and export the router the router is made by the express 
method ie `const router = new express.Router()` and then all the routers are declared like ```router.get('/',(req,res)=>{
	res.render('login');
})``` 
and then export the router as ```module.exports = router```
and now import the router in the app.js

## setting up the static for css and the images
always remember make your static folder name as public now in the app.js mention ```app.use(express.static(path.join(__dirname,'public')))``` like this and then u can use css in the any template file in the link tag as mentioned
```<link rel="stylesheet" type="text/css" href="/css/style.css">```

# EDITING THE LOGIN PAGE
so now we are gonna edit this login page so for that we will be using the login layout as the default layout was set to be main.hbs hence now we have to change that so go to the `router/index.js` and there when you are rendering the login template you have t specify the layout as the argument 
`router.get('/',(req,res)=>{
	res.render('login',{
		layout: 'login'
	});
})` for all the front end designing we are using the font awesome and from there only all the google buttos and the icons are used

# GOOGLE AUTHENTICATION

here we have to get the api key and the a api secret so to do that we have to go to google cloud console and in that we have to follow the steps to like to select api services and setting up credentials (if you are a new user )
and after doing all that shit yu will be getting the api key and api secret which you will be adding in the config file 






