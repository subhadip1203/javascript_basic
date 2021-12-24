const { ApolloServer , gql } = require('apollo-server');

const typeDefs = gql `

  type Product {
    name: String !
    description: String!
    price: Float!
    quantity: Int!
    isActive: Boolean
  }
  

  type Query {
    hello: String
    mandetoryField: String!
    numberOfCount: Int
    price: Float
    isActive: Boolean
    myStringArr: [String]
    noNullStringArr: [String!]!
    products: [Product!]!
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
    },
    myStringArr: ()=>{
      return ['hi', null, 'hope', 'all', 'good']
    },
    noNullStringArr: ()=>{
      return ['hi', 'hope', 'all', 'good']
    },

    products: ()=>{
      return [
        {
          name: 'product 1',
          description: 'product description 1',
          price: 99.99,
          quantity: 10,
          isActive: true
        },
        {
          name: 'product 2',
          description: 'product description 2',
          price: 199.99,
          quantity: 20,
          isActive: false
        }
      ]
    },
  }
}


const server = new ApolloServer({
  typeDefs,
  resolvers
});


server.listen()
.then( r => console.log(`server is running at : ${r.url}`) )
.catch( err => console.log(err) )