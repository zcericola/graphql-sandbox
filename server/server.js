const express = require('express');
//bringing in graphQL
const graphqlHTTP = require('express-graphql');
const app = express();
const port = 3002;

//packages needed are graphql, and express-graphql

//graph ql needs a schema file to work
const schema = require('./schema');


//invoking graphql as middleware
//graphiql is a gui for the browser to help with making HTTP requests
//must have a schema that is defined in another file on the graphqlHTTP object
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));


app.listen(port);
console.log(`listening on port ${port}`);