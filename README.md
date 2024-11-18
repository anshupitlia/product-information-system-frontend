# Product Information System Frontend

Microservice for the User Interface of the product information System. 

It denotes the green part in the following ![architecture diagram](docs/architecture-diagram.png):

It is react.js application, provides the UI to be able to view products and update them.

### To test & Run the application:

`npm run tests`

`npm start`

can be run. 

We can also use docker to build it as such

`docker build -t product-information-system-frontend .`

and then 

`docker run -p 3000:3000 product-information-system-frontend`

### Linting 

eslint has been configured and can be run using `npm run lint`

### CI/CD

`Github actions` has been configured


