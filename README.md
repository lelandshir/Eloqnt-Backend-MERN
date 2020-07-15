### Stack

- MERN (MongoDB, Express, React.js, Node.js)

### Packages

- Express: lightweight and fast framework for node.js
- CORS: Cross-Origin Resource Sharing - Express Middleware, so we can access something outside the server, from the server... [more research]
- Mongoose: makes interacting with MongoDB through Node.js simpler
- DOTENV - loads environment vars from .env into process env, simpler dev,
- Nodemon - tool that auto restarts node app/server when file changes are detected
- React - with it's component-based structure, React.js is in charge of keeping the HTML and JavaScript in sync; dynamically updates the dom upon changes of state, Also makes requests

### Steps

- Using Node & Express to build a Server and est. a connection to MongoDB using mongoose

1. npm init, npm i <dependencies>
1. build out server.js; est a connection w/ db
1. mkdirs, touch files; /models, /controllers
1. models - build & export schemas
1. Build an Express API
1. controllers - build CRUD routes
1. Add in React; mkdir public
1. app.use(express.static('public'))
