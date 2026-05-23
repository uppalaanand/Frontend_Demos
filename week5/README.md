# Authentication & Frontend Notes

# Protected Routes Authentication

## Login Flow

When client sends request to login route:

```text
POST /login
```

Backend:
- Verifies user credentials
- Generates token
- Stores token in cookies

```text
Login Success
```

---

# Protected Route Access

When client requests a protected route:

```text
GET /dashboard
```

Browser automatically sends token from cookies.

Backend middleware checks:
- Token exists or not
- Token is valid or not

If valid:
```text
Access Granted
```

If invalid:
```text
Unauthorized Error
```

---

# Middleware

Middleware is used to protect routes.

It verifies JWT token before allowing access.

### Flow

```text
Request → Middleware → Verify Token → Access Route
```

---

# Authentication Process

```text
1. User Login
2. Token Generated
3. Token Stored in Cookie
4. Client Sends Token Automatically
5. Middleware Verifies Token
6. Access Protected Routes
```

---

# Frontend Starting

## Goal

Create:
- Dynamic UI
- Responsive UI
- User-friendly application

Frontend responsibilities:
- Display data
- Handle user interactions
- Manage routes
- Connect backend APIs

---

# Frontend Features

- Authentication pages
- Protected routes
- Responsive design
- API integration
- State management
