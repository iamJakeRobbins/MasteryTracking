1. You’re going to need a configuration file.  I use a file called knex.js in my db directory but you’ll be able to make your own.  This should already exist in order to get your queries running but just in case; it should look like this :

  const environment = process.env.NODE_ENV || 'development';
	
  const config = require('../knexfile')[environment];

	module.exports = require('knex')(config);
2. create a production environment in knexfile.js:
        production: {
        client: 'pg',
        connection: process.env.DATABASE_URL
        }
2. require dotenv
    1. npm install dotenv —save
    2. add ‘require('dotenv').config()’ to knexfile.js
3. "heroku create" in CLI
4. add a db to heroku : 'heroku addons:create heroku-postgresql'
5. ‘heroku config’ to find db url
6. create a ‘.env’ file in your app
7. copy/paste the db url into .env file as: DATABASE_URL=“copypastedurl”+?ssl=true
8. run your migrations and seeds into the heroku database:
    1. knex migrate:latest —env production
    2. knex seed:run —env production
9. hide your database:
    1. create a copy of your .env file as ‘.env.example’
    2. add .env file to .gitignore
10. push everything to github to make sure we’re 100% up to date
11. git push heroku to push your lastest build to heroku
12. heroku open to view your shiny new app
