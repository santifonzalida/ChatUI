import { socket } from "../socket";

const ConnectionManager = () => {
    const connect = () => {
        socket.connect();
        console.log(socket)
    }

    const disconnect = () => {
        socket.disconnect();
        console.log(socket)
    }

    return (
        <div>
            <h3> Connection Manager </h3>
            <button onClick={ connect } >CONNECT</button>
            <button onClick={ disconnect }>DISCONNECT</button>
        </div>
    )
}

export { ConnectionManager };