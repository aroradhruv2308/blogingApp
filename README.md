# blogingApp
node js express mongodb based bloging app 

# Setup the config file
a config file is the file where all the secret info is stored in the .env format the file here is named as config.env and using dotenv module we will be cofiguring those variables and info in to our code so for loading the config file write ```dotenv.config({ path: './config/config.env' })```  now once the config file is loaded we can access any var defined there using `process.env.(name of the variable)` the NODE_ENV is defined by the cross-env and write the scripts for both dev mode and the production mode like`"start": "cross-env NODE_ENV=production node app"` 



