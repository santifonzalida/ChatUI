import { useContext, useState } from "react";
import { ChatContext } from "../context";

const ChatFooter = () => {
    const [message, setMessage] = useState('');
    const context = useContext(ChatContext);

    const handleSendMessage = () => {
        if (message.length > 0) {
            context.socket.emit("create_message",{ message:message, sender_id: context.socket.id, chat_id: '664d544cf9918c5ed4a5de76'});
        }
        setMessage('');
    }

    return (
        <>
            {/* Chat Input */}
            <footer className="bg-white border-t border-gray-300 p-4 absolute bottom-0 w-3/4">
                <div className="flex items-center">
                    <input 
                        type="text" 
                        value={message}
                        placeholder="Escribe un mensaje..." 
                        className="w-full p-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500"
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={(e) => {e.key === 'Enter' ? handleSendMessage(e) : ''}}/>
                    <button 
                        className="bg-indigo-500 text-white px-4 py-2 rounded-md ml-2"
                        onClick={ handleSendMessage }>Enviar</button>
                </div>
            </footer>
        </>
    )
}

export { ChatFooter };