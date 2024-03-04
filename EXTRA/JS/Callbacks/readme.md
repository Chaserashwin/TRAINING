# Callbacks

## Asynchronous and synchronous :-

- Asynchronous actions are the actions that we initate now and they finish later.
  eg. setTimeout(),

- Synchronous actions are the actions that initate and finish one by one

## Callback functions :-

- It is a function passed into another function as an argument, which is then invoked inside the outer function to complete an action

- Here is an example of a callback:

```
const callback = (arg) => {
  console.log(arg);
};

const loadScript = (src, callback) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = callback("ashwin");
  document.head.append(sc);
};
```

- Now, we can do something like this:

```
loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",
  callback
);
```

- This is called the "callback-based" style of async programming. A function that does something asynchronously should provide a callback argument when we put the function to run after its completion

## Callback Hell / Pyramid of Doom

- When we have callback inside callbacks, the code gets difficult to manage

```
loadScript((...) {
    loadScript...
        loadScript...
            loadScript...
})
```

- As calls become more nested, the code becomes deeper and increasingly more difficult to manage, especially if we have real code instead of ...

- This is sometimes called _"Callback hell"_ or _pyramid of doom_

- The pyramid of these calls grows to words the right with every asynchronous action . Soon it spirals out of control. So this way of coding isnt very good!

---

# Promises
