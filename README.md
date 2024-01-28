# GraphQL-REST Bookstore Sample App

This sample application demonstrates how to set up a basic server with both GraphQL and REST endpoints for managing a list of books.

## Prerequisites

Before running the application, make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- npm (Node Package Manager), which comes with Node.js

## Getting Started

To get the application running, follow these steps:

1. **Clone the Repository**

2. **Install Dependencies**

     ``` npm install```

3. **Start the Server**

    ```node index.js```

The server should start and be listening on port 4000 for GraphQL and REST requests.

## Using the App

**GraphQL**
The GraphQL API can be accessed at *http://localhost:4000/graphql*. You can use the GraphiQL interface to run queries and mutations directly from the browser.

Sample GraphQL Queries

**Fetch all books:**

```javascript
 query {
  books {
    title
    author
  }
} 
```

**Add a new book:**

```javascript
mutation {
  addBook(title: "New Book Title", author: "Author Name") {
    title
    author
  }
}
```

**REST API**

The REST API endpoints are also accessible on *http://localhost:4000*.

Sample REST Requests

**Fetch all books (GET request):**

```javascript
GET /books

```

**Add a new book (POST request):**


```javascript
POST /books

```

Include the book data as JSON in the request body:

```json
{
  "title": "New Book Title",
  "author": "Author Name"
}

```


