## How I Started

```
npx create-next-app@latest --ts
```

```
package.json

{
  "type": "module",  //use import instead of require
  "scripts": {
    "dev": "nodemon Server.js",
    "next": "next dev",
    "build": "next build && next export",
    "start": "node Server.js",
    "heroku-postbuild": "npm run build"
  },
  "dependencies": {
    "@sendgrid/mail": "^7.6.1",
    "axios": "^0.26.0",
    "cookie-parser": "^1.4.6",
    "dotenv": "^16.0.0",
    "express": "^4.17.3",
    "google-auth-library": "^7.12.0",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^6.2.2",
    "sass": "^1.49.8"
  },
  "devDependencies": {
    "nodemon": "^2.0.15",  //npm i -D nodemon
  }
}
```

```
next.config.js

const nextConfig = {
  trailingSlash: true  // make it easier to copy and paste url
}

export default nextConfig  // use export default intead of module.exports =
```

```
create .env
```
```
create request.rest

POST http://localhost:5000/abi/
Content-Type: application/json

{
 "key1": "value1",
 "key2": "value2"
}
```

```
.gitignore

/node_modules
/.next
/out
.DS_Store
.env
request.rest
```

```
Remove unecessary code
Change favicon.ico
```

```
Procfile
web: node Server.js
```