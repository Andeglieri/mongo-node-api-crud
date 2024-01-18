import express from 'express';
import Routes from './routes.js'

const routes = (app) => {
    app.route("/").get((res) => res.status(200));
    app.use(express.json(), Routes);
};

export default routes;