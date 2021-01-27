# Kiewit Employee Data Explorer
## To simply view the deployed page, visit [this URL!](http://employee-data99.herokuapp.com/)

This application was created to retrieve and display employee records. It supports searching for employees by name, as well as filtering by department and/or age.

## Setup
1) Run `npm i` to install dependencies.
1) Run `npm run build` to build bundles.
1) Finally, run `npm run start` to start ther server.

Once you've started the server locally, navigate to localhost at the port specified in server/index.js in your web browser.

### Notes
If this were a larger scale project, I'd build out a docker container for a DBMS instance and have my service query that instead of just using example data. I decided against it in this case as using a database would require significantly more setup for the person reviewing my code.
