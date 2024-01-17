import express from 'express';
import connectDb from './config/dbconnect.js';
import book from './models/book.js'

const connection = await connectDb();

connection.on("error", (e) => { console.error('e', e) });
connection.once("open", () => { console.log("sucess") });

const app = express();
app.use(express.json());

app.get("/", (req, res)=>{ 
    res.status(200).send("Status 200");
 });

app.get("/livros", async (req, res) => {
    const bookList = await book.find({});
    res.status(200).json(bookList);
});

app.get("/livros/:id", (req, res) => {
    const index = searchBook(req.params.id)
    res.status(200).json(Livros[index]);
});

app.post("/livros", (req, res) => {
    Livros.push(req.body);
    res.status(201).json(Livros);
})

app.put("/livros/:id", (req, res) => {
    const index = searchBook(req.params.id)
    Livros[index].title = req.body.title
    res.status(200).json(Livros[index]);
});

export default app;