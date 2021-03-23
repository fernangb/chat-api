/* eslint-disable @typescript-eslint/no-var-requires */
import 'reflect-metadata';

import express, { Request, Response } from 'express';
import path from 'path';
import cors from 'cors';

import routes from './routes';
import '../typeorm';
import '../../container';

const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(cors());
app.use(express.json());
app.use(routes);

app.get('/', (request: Request, response: Response) => {
  response.sendFile(`${__dirname}/client/index.html`);
});

io.on('connection', socket => {
  const { user_id } = socket.handshake.query;
  console.log(socket.id);

  socket.on('chat message', msg => {
    console.log('user: ', msg);
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

http.listen(3333, () => {
  console.log('\n--- Server started on port 3333 ---\n');
});
