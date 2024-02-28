### Axios vs fetch

### async and await

#### Ways of inputting details to be entered to add new data to the current API

```
app.post("/addNewPost", async (req, res) => {
```

> 1st way

```
var userid: req.body.userid;
var id: req.body.id;
var title: req.body.title;
var message: req.body.message;
```

> 2nd way

```
var user = {
userId: req.body.userId,
id: req.body.id,
title: req.body.title,
body: req.body.message,
};
```

> 3rd way

```
const { userId, id, title, body } = req.body;
});
```

### Homework:-

- session and cokkies
- async await and promises in js
- API for /selectedPost/id
- countries github api
