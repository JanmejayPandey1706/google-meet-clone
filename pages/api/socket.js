import { Server } from "socket.io";

const SocketHandler = (res, req) => {
  if (res.socket.server.io) {
    console.log("socket already running ");
  } else {
    const io = new Server(res.socket.server);
    res.socket.server.io = io;
    io.on("connection", (socket) => {
      connect.log("server is connected");
    });
  }
  res.send();
};

export default SocketHandler;
