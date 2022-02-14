import express from 'express';
import { Router } from 'express';

const server = express();
const loggingMiddleware = (req, res, next) => {
    const url = req.url;
    const methos = req.method;

    console.log(`[${new Date().toISOString}] ${method} ${url}`);

    next();

}


//req haru express ko default foemat ho
server.get('/', (req, res, next) => {
    res.send('this is the response from the index(/) route');
});

server.get('/cars', (req, res, next) => {
    res.send('this is the response from the car(/cars) route');
});

server.post('/cars', (req, res, next) => {
    console.log(req.body);
  
    res.send('This is the response from post request for the car');
  });

const PORT = 8848;

server.listen(PORT, () => {
    console.log(`Listening on 127.0.0.1:${PORT}`);
});

