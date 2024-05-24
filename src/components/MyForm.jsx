import { useState } from "react";
import { socket } from "../socket";

const MyForm = () => {
    const [value, setValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = (event) => {
        event.preventDefault();
        //setIsLoading(true);

        let msj = {
            chat_id: '1',
            sender_id: '11',
            message: value,
        }

         //socket.timeout(2000).emit('create_message', msj, () => {
           // setIsLoading(false);
        // });

        socket.emit("create_message", msj);
    }

    return (
        <div>
            <h3>My form</h3>
            <form onSubmit={ onSubmit } >
                <input onChange={e => setValue(e.target.value)} />
                <button type="submit" disabled={isLoading} >SUBMIT</button>
            </form>
        </div>
    )
}

export { MyForm };