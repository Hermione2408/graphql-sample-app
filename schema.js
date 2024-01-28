const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    hello: String
    books: [Book]
  }
  type Book {
    title: String
    author: String
  }
  type Mutation {
    addBook(title: String, author: String): Book
  }
  
`);

module.exports = schema;
