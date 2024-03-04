## Google Authentication and Authorization:

- go to console.google.com
- then click on new project
- select project

## Passport Middleware

- Using Middleware "Passport" for matching the credentials
- https://www.passportjs.org/

  > for installing passport google authentication with session
  > ` npm i passport passport-google-oauth express-session`

## Process To be done

1. create three routes for basic
2. getting the client id from google console cloud

- 1. storing the client info in variables
  2. using "passport" authorize:-

  - using middleware through use() method
  - for session we use : serializer and deserializer

3. we use session method so that google cant always check again and again with the credentials and session can store the information which when we want to route the page it will not check again and again
