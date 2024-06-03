import book from '../models/book.js';

class BooksController {

    static async listBooks (res){
        try {
            const bookList = await book.find({});
            res.status(200).json(bookList);
        } catch (e){
            res.status(500).json(e.message);
        }
    };

    static async createBook (req, res){
        try {
            const newBook = await book.create(req.body)
            res.status(200).json(newBook);
        } catch (e){
            res.status(500).json({message: e.message});
        }
    };

    static async updateBook (req, res){
        try {
            const updatedBook = await book.findOneAndUpdate({title: req.params.title}, {price: req.body.price})
            res.status(200).json(updatedBook);
        } catch (e){
            res.status(500).json({message: e.message});
        }
    };

    static async deleteBook (req, res){
        try {
            const deletedBook = await book.findOneAndDelete({title: req.params.title})
            res.status(200).json(deletedBook);
        } catch (e){
            res.status(500).json({message: e.message});
        }
    };

};

export default BooksController;