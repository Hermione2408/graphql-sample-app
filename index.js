const { book } = require('./data');
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');

const root = {
  hello: () => 'Hello, world!',
  books: () => book,
  addBook: ({ title, author }) => {
    const newBook = { title, author };
    book.push(newBook);
    return newBook;
  },
};
const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.get('/books', (req, res) => {
  res.json(book);
});
app.post('/books', (req, res) => {
  const newBook = req.body; 
  book.push(newBook);
  res.status(201).json(newBook);
});
app.listen(4000, () => console.log('Server running on http://localhost:4000/graphql'));