const { ApolloServer , gql } = require('apollo-server');

const typeDefs = gql `
  type Query {
    hello: String
  }
`

const resolvers =  {
  Query : {
    hello : ()=> {
      return 'hello world'
    }
  }
}


const server = new ApolloServer({
  typeDefs,
  resolvers
});


server.listen()
.then( r => console.log(`server is running at : ${r.url}`) )
.catch( err => console.log(err) )