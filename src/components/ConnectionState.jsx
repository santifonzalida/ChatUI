const ConnectionState = ({ isConnected }) => {
    return (
        <div>
            <h3>Connection state component</h3>
            <p>State: {isConnected}</p>
        </div>
    )
}

export {ConnectionState}