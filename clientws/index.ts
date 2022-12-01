const { Manager } = require("socket.io-client");

const manager = new Manager("almacne-iot.us-east-1.elasticbeanstalk.com");
// const manager = new Manager("localhost:3000", {
//   cors: {
//     origin: "*",
//   },
// });

const socket = manager.socket("/");
socket.on("connect", () => {
  console.log("connected client");
});

// receive data from server on channel "mensaje"
socket.on("mensaje", (data: any) => {
  console.log("data from server", data);
});

const celdas = manager.socket("/celdas");
celdas.on("connect", () => {
  console.log("connected celdas");
});

const autorizacion = manager.socket("/autorizacion");
autorizacion.on("connect", () => {
  console.log("connected autorizacion");
});

// receive input from console
process.stdin.resume();
process.stdin.setEncoding("utf8");
process.stdin.on("data", function (text: any) {
  console.log("received data:", text);
  socket.emit("mensaje", String(text));
});

// emit a message to the server every 2 seconds
// setInterval(
//   () => {
//     console.log("emitting message");
//     socket.emit("mensaje", "hello");
//   },

//   2000
// );
