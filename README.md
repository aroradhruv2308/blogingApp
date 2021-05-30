# blogingApp
node js express mongodb based bloging app 

# Setup the config file
a config file is the file where all the secret info is stored in the .env format the file here is named as config.env and using dotenv module we will be cofiguring those variables and info in to our code so for loading the config file write ```dotenv.config({ path: './config/config.env' })```  now once the config file is loaded we can access any var defined there using `process.env.(name of the variable)` the NODE_ENV is defined by the cross-env and write the scripts for both dev mode and the production mode like`"start": "cross-env NODE_ENV=production node app"` 

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



