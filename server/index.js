const app = require('express')()
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const router = require('./router');

io.on('connection', socket => {
  console.log('We have a new connection!!!');

  socket.on('disconnect', () => {
    console.log('User had Left!!!');
  })
})

app.use(router);


http.listen(4000, () => console.log('Listening on port 4000'));
