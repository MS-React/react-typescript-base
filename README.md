# React and Typescript

### Description

This repository is implemented with webpack and the initial setup to use typescript with react [Reference](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html)

### Directory Structure

src
|----- static ---- index.html
|----- App.tsx
|----- index.tsx

### Typescript config

```json
{
  "compilerOptions": {
    "outDir": "./dist/",
    "sourceMap": true,
    "noImplicitAny": true,
    "module": "commonjs",
    "target": "es6",
    "jsx": "react"
  },
  "include": [
    "./src/**/*"
  ]
}
```

### Start application

  * npm install
  * npm start