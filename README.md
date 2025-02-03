# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# Calculator

# The Eval Function in JavaScript: Functionality and Security Risks

## 1. Functionality of the Eval Function

The `eval()` function in JavaScript allows a string to be interpreted and executed as JavaScript code.

```javascript
// Example
let code = "2 + 3";
let result = eval(code); // result = 5
```

## 2. Security Risks

### Code Injection
- An attacker could inject malicious code.
- Possible execution of harmful scripts.
- Access to sensitive system resources.

### Performance Issues
- `eval()` is significantly slower than other computation methods.
- Requires complex security checks.

### Debugging Difficulties
- Code is generated at runtime.
- Hard to trace and debug.

## 3. Secure Alternatives
- Use of the `Function()` constructor.
- Mathematical libraries.
- Regular expressions for validation.
- Strict input validation.



