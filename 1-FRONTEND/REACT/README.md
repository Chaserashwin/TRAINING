### Commands for creating a project:-

```
npm create vite@latest
```

### Useful snippets:

1. rfc

```
import React from 'react'

export default function $1() {
  return <div>$0</div>
}
```

2. rafce

```
import React from 'react'

const $1 = () => {
  return <div>$0</div>
}

export default $1
```

### Properties for header:-

- justify-content : space-around; //--> left right me space krne ke liye
- align-items: center : //--> uper niche se space krne ke liye

### Declarative and Imperative programming:-

react is a declarative programming as in this we just need to give the instruction not the final result

### Q-Can we pass a state direclty to another component?

> yes, through props

### Props vs States

- one component to another
- data managed in a single component
- props are read only

## Hooks

- {useEffect} :-
  when we access any data from API it takes a lot of cpu usage to compute the data
  to prevent it from increasing the load time of our website we use {useEffect} to particular fetch the data when we need it.

- {useContext} :-
  used to use a functionality which is common to all the component like theme in webpage, cart in shopping websites which is common to all the componenets and is required by all the components

- {useRef} :-
  it works on the actual DOM not the Virtual DOM
  eg.:- contact us form
  where we just want to get info and not any validation

- {useMemo} :-
  used where we dont want to rerender a specific component during the onChange() function which uses rerendring

- {useCallback} :-
  import { useCallback } from 'react';

```
export default function ProductPage({ productId, referrer, theme }) {
const handleSubmit = useCallback((orderDetails) => {
post('/product/' + productId + '/buy', {
referrer,
orderDetails,
});
}, [productId, referrer]); <---parameters which when got changed only then the function got render
```

homework:-
25 jan
DOM manupulation
Methods - foreach, filter, map

30 jan
flex

31 jan
state
box model

01 feb
event loop

09 feb
react and redux
