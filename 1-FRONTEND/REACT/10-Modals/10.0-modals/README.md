### Problem:-

problem with the previous version is that we cant use [position:fixed] all the time at last we have to use the [position:relative]

And when we do [position:relative] all our content get distorted

So, to avoid that we have two ways :-

1. To use [position:fixed] = when we use it our background content got down from the center due to (testing) class and That is not good
   NOTE: if we remove (testing) class then problem get sorted but if any new developer came and add some code to it, again it will get distorted

2. To use [ReactDOM.createPortal] =
