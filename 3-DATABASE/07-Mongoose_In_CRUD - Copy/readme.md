## Process

- create project by:
  `npm init -y`
- installing modules:-
  `npm i nodemon express`
- install mongoose module for connecting to the database
  `npm i mongoose`

## Steps

1. config: which helps in connecting to database
2. model: which is used to create schema for the database if we cannot give collection name it will by default selects user
3. controller: which is used to add data to the database through schema
4. routes : it helps in routing the different routes
5. call in the index.js

- we use save() which will work instead of insertOne()/ insertMany()

## Note:-

findOne-
FindbyId- for searching by an Id

## Link for CRUD:

(https://www.geeksforgeeks.org/node-js-crud-operations-using-mongoose-and-mongodb-atlas/)

(https://medium.com/@skhans/how-to-build-a-basic-node-js-crud-app-with-mongoose-and-mongodb-3e958a36001d)
