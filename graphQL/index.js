const { ApolloServer , gql } = require('apollo-server');

const typeDefs = gql `
  type Query {
    hello: String
    mandetoryField: String!
    numberOfCount: Int
    price: Float
    isActive: Boolean
  }
`

const resolvers =  {
  Query : {
    hello : ()=> {
      return 'hello world'
    },
    mandetoryField: ()=>{
      return 'it is a must'
      //return null // will through error as not-nullable field
    },
    numberOfCount: ()=>{
      return 10;
    },
    price: ()=>{
      return 99.99
    },
    isActive: ()=>{
      return true
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