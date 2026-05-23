# Week 8 Notes

## Routing in React

Routing is important in Single Page Applications (SPA).  
It helps us move between pages without reloading the entire website.

We use:

```bash
npm install react-router-dom
```

### Steps for Routing
1. Design root layout
2. Install react-router-dom
3. Create components/pages
4. Configure routes

### Example

```javascript
import { BrowserRouter, Routes, Route } from "react-router-dom";

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
</BrowserRouter>
```

---

## useNavigate

Used for programmatic navigation.

```javascript
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

navigate("/about");
```

---

## useLocation

Used to know current location/path.

```javascript
import { useLocation } from "react-router-dom";

const location = useLocation();

console.log(location.pathname);
```

---

# State Management in React

State management helps us share and manage data between components.

When many components are involved, passing props becomes difficult.  
This problem is called:

```text
Prop Drilling
```

---

# Context API

Context API is a built-in React feature used to share state between components without prop drilling.

Best for:
- Small to medium applications
- Theme management
- Authentication
- Shared data

---

## Steps to Use Context API

### Create Context

```javascript
import { createContext } from "react";

const CounterContext = createContext();
```

### Provider

```javascript
<CounterContext.Provider value={value}>
  {children}
</CounterContext.Provider>
```

### Consume Context

```javascript
import { useContext } from "react";

const data = useContext(CounterContext);
```

---

## Important Note

One context should preferably manage one state only.  
Multiple states in one context may cause unnecessary re-renders.

---

# CORS

CORS stands for:

```text
Cross-Origin Resource Sharing
```

It is a browser security feature that controls requests between different origins.

Example:
- Frontend → localhost:5173
- Backend → localhost:5000

Backend must allow requests using CORS configuration.

---

# Topics Covered

- Routing in React
- react-router-dom
- useNavigate
- useLocation
- State Management
- Prop Drilling
- Context API
- CORS