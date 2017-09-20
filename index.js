var express = require("express");
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World!');
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});


/*var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var turnState = true;
var rooms = {};

app.use(express.static("static"));
app.get('/', function(req, res){
res.sendFile(__dirname + '/index.html');
});

	io.on("connection", function(socket){
		socket.on("reset", function(roomID) {
			delete rooms[roomID];
			io.sockets.to(roomID).emit('reset');
		});
		socket.on("startNewGame", function(id) {
			rooms[id] = 1;
			socket.join(id);
			io.sockets.to(id).emit('waitingForOpponent');
		});
		socket.on("joinGame", function(id) {
			if (id in rooms) {
				if (rooms[id] < 2) {
					socket.join(id);
					io.sockets.to(id).emit('gameStarted');
					rooms[id]++;
				}
				else {
					socket.emit('roomOverflowed');
				}
			}
			else {
				socket.emit('roomNotExist');
			}
		});
		socket.on("moveToServer", function(room) {
			var moveArr = handleMove(room);
			var win = checkWin(room)
			socket.broadcast.to(room.roomID).emit('moveFromServer_');
			io.sockets.to(room.roomID).emit('moveFromServer', moveArr);
			if (win) {
				io.sockets.to(room.roomID).emit('WIN', win);
				return;
			}
			if (handleDraw(room)) {
				io.sockets.to(room.roomID).emit('draw');
			}
		});
	});

	function handleMove(room) {
		if (room.boxArr[room.moveID]) return
		room.boxArr[room.moveID] = room.turnState ? "X" : "O";
		room.turnState = !room.turnState;
		room.classNames[room.moveID] = "showMove"
		return room
	}
	function handleDraw(room) {
		let len = 0;
		for (let i in room.boxArr) {
			if (room.boxArr[i]) {
				len++;
			}
		}
		if (len>8) {
			room.boxArr.length = 0;
			return true;
		}
	}
	function checkWin(room) {
		var classNames = []
		if (room.boxArr[0] === room.boxArr[1] && room.boxArr[1] === room.boxArr[2] && room.boxArr[0]) {
			classNames[0] = classNames[1] = classNames[2] = "win";
			return classNames
		}
		if (room.boxArr[3] === room.boxArr[4] && room.boxArr[4] === room.boxArr[5] && room.boxArr[3]) {
			classNames[3] = classNames[4] = classNames[5] = "win";
			return classNames
		}
		if (room.boxArr[6] === room.boxArr[7] && room.boxArr[7] === room.boxArr[8] && room.boxArr[6]){
			classNames[6] = classNames[7] = classNames[7] = "win";
			return classNames
		}
		if (room.boxArr[0] === room.boxArr[3] && room.boxArr[3] === room.boxArr[6] && room.boxArr[0]) {
			classNames[0] = classNames[3] = classNames[6] = "win";
			return classNames
		}
		if (room.boxArr[1] === room.boxArr[4] && room.boxArr[4] === room.boxArr[7] && room.boxArr[1]) {
			classNames[1] = classNames[4] = classNames[7] = "win";
			return classNames
		}
		if (room.boxArr[2] === room.boxArr[5] && room.boxArr[5] === room.boxArr[8] && room.boxArr[2]) {
			classNames[2] = classNames[5] = classNames[8] = "win";
			return classNames
		}
		if (room.boxArr[0] === room.boxArr[4] && room.boxArr[4] === room.boxArr[8] && room.boxArr[0]) {
			classNames[0] = classNames[4] = classNames[8] = "win";
			return classNames
		}
		if (room.boxArr[2] === room.boxArr[4] && room.boxArr[4] === room.boxArr[6] && room.boxArr[2]) {
			classNames[2] = classNames[4] = classNames[6] = "win";
			return classNames
		}
		return false
	}
	
http.listen(3000, function(){
  console.log("listening on *:3000");
});*/