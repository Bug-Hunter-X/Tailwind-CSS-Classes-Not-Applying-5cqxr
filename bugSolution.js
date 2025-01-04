```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ... other content files
    "../index.html", // Add index.html path correctly to include the div element 
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
```javascript
// index.html
<!DOCTYPE html>
<html>
<head>
  <title>Tailwind CSS Example</title>
  <link href="../dist/output.css" rel="stylesheet">
</head>
<body>
  <div class="bg-red-500 hover:bg-blue-700">
  Hover me!
  </div>
</body>
</html>
```