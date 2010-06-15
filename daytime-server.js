var net = require('net');
net.createServer(function (stream) {
    stream.setEncoding('utf8');
    stream.addListener('connect', function() {
        stream.write((new Date()).toUTCString());
        stream.end();
    });
}).listen(13);
