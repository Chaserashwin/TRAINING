Basics of Redux:-
Three Main Concepts of Redux are:

-> Store : It is like a State which tells that what is the main function of it...
interface CounterState {
value: number;
}
interface UserState {
isSignedIn: boolean;
}

-> Actions : These are the features of these store which performs specific operation...
const incrementByAmount = { type: "INCREMENT", payload: 10};
const decrement = {type: "DECREMENT" };

-> Reducers : These are used to create copy of store and modify that copy version without affecting the store

Commands for installing react :-
npm install @reduxjs/toolkit
npm install react-redux
