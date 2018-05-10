module.exports = (expressObj) => {
    const userController = require('../controller/UserController.js');

    // /app.post('/api/v1', books.create);
    //Create a new User
    expressObj.post('/api/v1/user/register', userController.register);

    //sign in user
    expressObj.post('/api/v1/user/signin', userController.signin);
    // Retrieve all books
    //app.get('/books', books.findAll);

    // Retrieve a single book with bookId
    //app.get('/books/:bookId', books.findOne);

    // Update a book with bookId
    //app.put('/books/:bookId', books.update);

    // Delete a book with bookId
    //app.delete('/books/:bookId', books.delete);
};