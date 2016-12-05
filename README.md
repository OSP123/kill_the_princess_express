# README For Kill Da Princess Application

Link to Live Application: https://kill-da-princess.herokuapp.com/characters

This repository demonstrates the usage of various technolgies for building a game application in the MVC architectural style. The technologies will be based on the Node.js engine and will utilize the Express.js framework.

Other technologies include:

- Bootstrap for templating
- Handlebars for view engine (used with Bootstrap)
- Sequelize as ORM
- MySQL as the database

1. create a database called projects_db

`mysql -u root`

`create database monster;`

2. install modules in package.json

`npm install`

3. install sequelize cli globally to be able to run migrations on your computer:

`npm install -g sequelize-cli`

4. run your migrations to create your tables

`sequelize db:migrate`

5. start up the app

`nodemon start`

if you don't have nodemon

`npm start`

6. Want to create a migration:

`sequelize migration:create create-<table name here>`

edit the migration file

to run the migration file:

`sequelize db:migrate`

You'll still have to make the model file

6. curious of all the commands you can do with sequelize cli?

go here: https://github.com/sequelize/cli

7. curious of all the sequelize relationships:

http://docs.sequelizejs.com/en/latest/docs/associations/

-----

In order to associate the models with each other, you need to change the models
like this:

```js
// user.js
// ...
classMethods: {
  associate: function(models) {
    Person.hasMany(models.Task)
  }
}
// ...
```

And finally you have to adjust the `config/config.json` to fit your environment.
Once thats done, your database configuration is ready!
