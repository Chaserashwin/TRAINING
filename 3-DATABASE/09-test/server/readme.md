npm i passport passport-local express-session jsonwebtoken

## In jsonwebtoken

header
payload
signature

token: jwt.sign({ id: user.\_id, username: name }, "tokenSecret!!", {
expiresIn: "3m",( signature)
}),

![token verification](![alt text](image.png))
