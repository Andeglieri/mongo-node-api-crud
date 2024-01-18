import express from 'express';
import connectDb from './config/dbconnect.js';
import routes from './routes/index.js';

const connection = await connectDb();

connection.on("error", (e) => { console.error('e', e) });
connection.once("open", () =>{});

const app = express();
routes(app)

export default app;