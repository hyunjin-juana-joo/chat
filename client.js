'use strict';
const net = require('net');
// prompt name
console.log('이름을 입력하세요!');
process.stdin.once('data', data => {
    let name = data.toString().replace('\n', '');

    // connect to server
    let socket = net.connect(8787, '127.0.0.1', () => {
        socket.on('data', data => {
            console.log(data.toString());
        });

        process.stdin.on('data', data => {
            let message = data.toString().replace('\n', '');
            let packet = `${name}|${message}`;
            socket.write(packet);
        });
    });
});