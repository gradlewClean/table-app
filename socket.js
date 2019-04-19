const app  = require('express')();
const http = require('http').Server(app);
const io   = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', (socket) => {
  socket.emit("hello", "Привет из Сокет-сервера");
});

const PORT = 8090
http.listen(PORT, () => {
  console.log(`Listen server on ${PORT}`);
});