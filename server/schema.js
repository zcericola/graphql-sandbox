//fetch to make HTTP requests
const fetch = require('node-fetch');
const {GraphQLSchema, GraphQLObjectType, GraphQLInt, GraphQLString} = require('graphql');

//expecting an object
const PersonType = new GraphQLObjectType({
    name: 'Person',
    description: 'person from star wars',
    fields: () => ({
        name: {
            type: GraphQLString,
            resolve: (response) => response.name         
            
          
        },
        height: {
            type: GraphQLString,
            resolve: (res) => res.height
        }
        
    })
})



//how you will make your query
// query {person(id: 1){
// name
//}}
//resolve is what it should execute -- here we are fetching data from the swapi API

module.exports = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'query',
        description: '...',
        fields: () => ({
            person: {
                type: PersonType,
                args: {
                    id: {type: GraphQLInt}
                },
                resolve: (root, args) =>  {
                    return fetch(`https://swapi.co/api/people/${args.id}`).then(response => {
                        return response.json();
                     })}

            }
        })
    })
})