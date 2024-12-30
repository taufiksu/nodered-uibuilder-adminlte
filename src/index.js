var app_socket;

$(document).ready(function () {
    uibuilder.start();

    uibuilder.send({
        "topic": "get_socket_id",
        "payload": "get socket id"
    });

    uibuilder.onChange('msgsReceived', function (newVal) {
        if (msg.topic === "get_socket_id") {
            app_socket = msg._socketId;
        }

        if (msg.topic === "helloworld") {
            alert('Hello World from Node-RED!');
        }
    });

    uibuilder.send({
        "topic": "helloworld",
        _socketId: app_socket
    });
});