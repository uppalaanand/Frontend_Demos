### useRef Hook
useRef is a reference hook in React.

### It is mainly used for:
- Accessing DOM elements directly
- Storing values without re-rendering the component

### Syntax
    const refName = useRef(initialValue)

-- Example:

    import { useRef } from "react";

    function App() {
    const inputRef = useRef();

    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <>
        <input ref={inputRef} />
        <button onClick={focusInput}>Focus</button>
        </>
    );
    }

-- Here inputRef.current gives access to the actual DOM element.

### Functions in JavaScript
Functions are called First Class Citizens in JavaScript because they can behave like normal variables.

3 Important Things
    1. Function can be stored in a variable
        const greet = function() {
            console.log("Hello");
        }
    2. Function can be passed as argument
        function greet() {
            console.log("Hello");
        }

        function execute(fn) {
            fn();
        }

        execute(greet);
    3. Function can return another function
        function outer() {
            return function inner() {
                console.log("Inner Function");
            }
        }

        outer()();

### Closures in JavaScript

A closure means an inner function can access variables from the outer function even after the outer function execution is completed.

Example:
    function outer() {
    let count = 0;

    return function inner() {
        count++;
        console.log(count);
    }
    }

    const counter = outer();

    counter();
    counter();
    counter();

    Output
    1
    2
    3

Here inner() remembers the count variable.
This is called a closure.

1. Uses of Closures
2. Data privacy
3. Private variables
4. Callbacks
5. Counters
6. State Management in React

State management is used to manage data between components.

Two popular libraries:

# Redux
# Zustand

Redux is powerful but has more boilerplate.

Zustand is:

- Simple
- Lightweight
- Easy to learn
- Less code

So currently we are learning Zustand.

# Zustand
- Installation
    npm install zustand

- Creating Store
    import { create } from "zustand";

    const useStore = create((set) => ({
    count: 0,

    increment: () =>
        set((state) => ({
        count: state.count + 1
        })),

    decrement: () =>
        set((state) => ({
        count: state.count - 1
        }))
    }));

- Using Store
    const { count, increment } = useStore();

### Axios vs Fetch

Both are used for making API requests.

Fetch API

Fetch is built into the browser.

- Syntax:
    fetch(url, options)
Example:
    fetch("https://api.com/data")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

In fetch:
We manually convert response into JSON Error handling needs extra work Axios

Axios is an external library.

- Installation
    npm install axios
GET Request
    import axios from "axios";

const res = await axios.get("https://api.com/data");

console.log(res.data);
POST Request
await axios.post("https://api.com/data", {
  name: "John",
  age: 20
});

- Advantages of Axios
1. Automatic JSON parsing
2. Cleaner syntax
3. Better error handling
4. Easier to use