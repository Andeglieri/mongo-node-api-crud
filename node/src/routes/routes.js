import express from 'express';
import BooksController from '../controllers/BooksController.js';

const Routes = express.Router();

Routes.get("/livros", BooksController.listBooks);
Routes.post("/livros", BooksController.createBook);
Routes.put("/livros/:title", BooksController.updateBook);
Routes.delete("/livros/:title", BooksController.deleteBook);

export default Routes;