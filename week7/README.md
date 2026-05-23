# React & JavaScript Notes

## DOM (Document Object Model)

Browser converts HTML elements into JavaScript objects called DOM.

Using JavaScript we can:
- Change content
- Add elements
- Remove elements
- Handle events

Browser flow:
1. HTML Parser → Creates DOM tree
2. CSS Parser → Applies styles
3. JavaScript Engine → Manipulates DOM

---

# Event Handling

Event = action in browser  
Examples:
- click
- hover
- scroll

Event listeners are used to respond to events.

```javascript
button.addEventListener("click", function () {
  console.log("Button clicked");
});
```

---

# Query Selector

Used to select elements from DOM.

```javascript
document.querySelector("#id");
document.querySelector(".class");
document.querySelector("p");
```

`querySelectorAll()` returns all matching elements.

---

# jQuery

jQuery is a JavaScript library used for:
- DOM manipulation
- Event handling
- AJAX
- Animations

But it directly manipulates DOM, so modern frameworks like React are preferred.

---

# ReactJS

React is a JavaScript library for building UI.

Features:
- Component-based architecture
- Reusable components
- Virtual DOM
- Declarative approach

Create React App using Vite:

```bash
npm create vite@latest
npm install
```

---

# Single Page Applications (SPA)

In React:
- Server sends one HTML page initially
- Later requests use AJAX
- UI updates without page reload

---

# AJAX

AJAX = Asynchronous JavaScript and XML

Used to:
- Send requests without refreshing page
- Receive data from server asynchronously

Mostly JSON format is used.

---

# Virtual DOM

Virtual DOM is a lightweight copy of real DOM.

React compares:
- Virtual DOM
- Real DOM

Then updates only changed parts for better performance.

---

# React Components

A component contains:
- State (optional)
- React element (mandatory)

Example hierarchy:

```text
App
 ├── Header
 ├── Main
 ├── Sidebar
 └── Footer
```

---

# useState Hook

Used to add state in functional components.

```javascript
const [count, setCount] = useState(0);
```

### Example

```javascript
<button onClick={() => setCount(count + 1)}>
  Increment
</button>
```

When state depends on previous value:

```javascript
setCount(prev => prev + 1);
```

---

# Updating Arrays

```javascript
setTodos([...todos, newTodo]);
```

Avoid direct mutation like:
```javascript
todos.push(newTodo);
```

---

# Updating Objects

```javascript
setUser({ ...user, name: "John" });
```

Avoid direct mutation.

---

# Iterating Objects

```javascript
Object.keys()
Object.values()
Object.entries()
```

Example:

```javascript
Object.entries(user).map(([key, value]) => (
  <p>{key}: {value}</p>
))
```

---

# Form Validation

Libraries:
- Formik
- React Hook Form

React Hook Form is:
- Lightweight
- Faster
- Easier to use

---

# react-hook-form

Important methods:
- register
- handleSubmit
- formState
- reset
- setError

Example:

```javascript
const { register, handleSubmit } = useForm();
```

---

# Lifting State Up

Moving state from child to parent component.

Used when multiple child components need same state.

Useful for small component levels.

For large applications use:
- Context API
- Redux

---

# useEffect Hook

Used for side effects like:
- API calls
- Timers
- Event listeners

---

## Cases of useEffect

### 1. No Dependency Array

Runs after every render.

```javascript
useEffect(() => {
  console.log("Runs every render");
});
```

---

### 2. Empty Dependency Array

Runs only once.

```javascript
useEffect(() => {
  console.log("Runs once");
}, []);
```

---

### 3. With Dependency

Runs when dependency changes.

```javascript
useEffect(() => {
  console.log("Runs when count changes");
}, [count]);
```