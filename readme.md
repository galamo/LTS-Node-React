# LTS - Node.js & React Course ( 2 days )

### Prerequisites

- install node.js ( latest version 20 )
- make sure npm installed as expected

Subjects:

- Running Javascript with Node.js
- Typescript setup ( ts-node vs tsc watcher)

### Getting Started

- [Node.js version 20 installed](https://nodejs.org/en/download/)
- NPM installed (part of Node.js installation)
- [Docker for desktop installed](https://docs.docker.com/desktop/install/windows-install/)

- open command line & run the following commands:

1. `node -v`
2. `npm -v`
3. `docker -v`

# Async programming

- Callback
- Promise
- Async Await

# Node.js & React

## Overview

1. Node.js Async programming
2. Building Api
3. Creating Simple Integration test
4. Error handling
5. Common libs: Cors,Zod,dotEnv
6. React client using vite
7. Making Ajax ( http request - using axios ) to out Api

- Cors - Allow users from other domains to access our API
- Zod - Input validation
- dotEnv - control environment variables

# Node

#### Recommended Project Structure

1. Create A folder lts-react-node ( `mkdir lts-react-node` )
2. Navigate into the folder ( `cd lts-react-node` )
3. Create A folder inside lts-react-node with name: lecture ( `mkdir lecture` )
4. Create another folder inside lts-react-node with name: myLab ( `mkdir myLab` )
5. Structure

#### Git ( openning new branch - only if needed)

- `git checkout -b <YOUR_BRANCH_NAME>`
- `git checkout master`
- `git pull`

#### Api:

[products](https://dummyjson.com/docs/products)

### Node.js

#### Testing your environment

1. open `CMD`
2. Run
   ```cmd
    node -v
   ```
3. Run
   ```cmd
    npm -v
   ```
4. Type `node` press `enter`
5. declare Javascript variable and print it
   ```js
   > const userName = 'Gal'
   > userName
   ```

#### Starter files:

1. .gitignore
2.

#### Async programming

1. `Callback`
2. `Promise`
3. `Async` `await`

#### Building our API

- Install Globals
  ```
  npm install  typescript  nodemon  concurrently
  ```
- Navigate to the api folder
- Run
  ```cmd
  npm init
  ```
- Answer the interactive questions
- Paste the following Json in the `package.json` file under `dependencies` key

  ```js

  {

      "concurrently": "^6.2.0",
      "dotenv": "^10.0.0",
      "express": "^4.17.1",
      "zod": "^17.4.0",
      "nodemon": "^2.0.7",
      "ts-node": "^10.0.0",
      "typescript": "^4.3.2",
      "winston": "^3.3.3"
  },

  ```

- Paste the following Json in the `package.json` file under `devDependecies` key

  ```js
  {
      "@types/express": "^4.17.12",
      "@types/node": "^15.12.2"
  }
  ```

- Install the dependencies
- Run

  ```cmd
  npm install
  ```

  Or

  ```cmd
  npm i
  ```

- Typescript Setup
  1. Add `tsconfig.json` file to the `api`
  ```js
  {
      "compilerOptions": {
          "module": "commonjs",
          "outDir": "dist",
          "target": "ES2015",
          "esModuleInterop": true,
          "resolveJsonModule": true,
          "baseUrl": "src"
      },
      "include": [
          "./src"
      ],
      "exclude": [
          "node_modules"
      ]
  }
  ```
  - concurrently script
  ```js
  "all": "concurrently -k -p \"[{name}]\" -n \"TypescriptCompiler,application\" -c \"red.bold,yellow.bold,\" \"npm run build_watch\" \"npm run dev\"",
  ```

# Running Setup for API

first run
`npm install -g typescript -g nodemon -g concurrently`

1. navigate `./apps/api/`
2. run `npm i`
3. run `npm run all`

#### Express

1. Initial HTTP Server snippet
2. Create the first entry point

```js
const express = require("express");
const app = express();

app.get("/healthcheck", function (req, res) {
  res.send("Api is working");
});

app.listen(3333);
```

# Ex1

1. Add new entry point /GET username
2. return your user name ( hardcoded ) for example `return res.send("GalA")`

3. Entry points

- GET `/products`
- GET `/products/:id`
- GET `/products/search?q=param`
- POST `/auth/login`

# Ex2

1. Add new entry point /GET products/:id
2. according the following API [products](https://dummyjson.com/docs/products)

3. Create Router

   ```js
   const express = require("express");
   const router = express.Router();
   router.get("/products/search", function (req, res) {
     // implementation
   });
   ```

# React

### Using vite

`npm create vite@latest`

### Subjects:

1. Component
2. Stateless Vs Statefull
3. UseState
4. UseEffect

MongoDb example
Routing - react
report

# Run project

- go to dev-apps - run docker compose up
- go to api - run npm i
- go to seed - run npm i
- go to seed - run node index.js
- go to api - run npm run start-dev

