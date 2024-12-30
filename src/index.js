/** The simplest use of uibuilder client library
 * See the docs if the client doesn't start on its own.
 */

// Listen for incoming messages from Node-RED and action
// uibuilder.onChange('msg', (msg) => {
//     // do stuff with the incoming msg
// })

$(document).ready(function () {
    uibuilder.start();

    uibuilder.send({
        "topic": "helloworld",
        _socketId: app_socket
    });

    uibuilder.onChange('msgsReceived', function (newVal) {
        if (msg.topic === "helloworld") {
            alert('Hello World from Node-RED!');
        }
    });
});