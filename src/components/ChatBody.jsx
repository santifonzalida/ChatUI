import { ChatFooter } from "./ChatFooter";
import { useNavigate } from "react-router";
import { ChatContext } from "../context";
import { useContext, useEffect } from "react";

const ChatBody = () => {
    const context = useContext(ChatContext);
    const navigate = useNavigate();

    useEffect(() => {
        
        context.socket.on('response_message', (data) => {
            let messagesList = [...context.messages];
            messagesList.push(JSON.stringify(data));
            context.setMessages(messagesList);

            console.log('respuestaa de backend: ' + JSON.stringify(data));

            console.log(context.user)
        });

    }, []);


    const renderIncommingMessages = (message) => {
        return (
            <div className="flex mb-4 cursor-pointer">
                {/*  Incoming Message */}
                <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
                    <img src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="User Avatar" className="w-8 h-8 rounded-full"/>
                </div>
                <div className="flex max-w-96 bg-white rounded-lg p-3 gap-3">
                    <p className="text-gray-700">INCOMING{message.message}</p>
                </div>
            </div>  
        )
    }

    const renderOutCommingMessages = (message) => {
        return (
            <div className="flex justify-end mb-4 cursor-pointer"> 
                <div className="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3">
                    <p> OUTGOING {message.message}</p>
                </div>
                <div className="w-9 h-9 rounded-full flex items-center justify-center ml-2">
                    <img src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="My Avatar" className="w-8 h-8 rounded-full"/>
                </div>
            </div>
        )
    }
    
    return (
        <div className="flex-1">
            {/* Chat Header */}
            <header className="flex justify-between bg-slate-300 p-3 text-gray-700">
                <h1 className="text-2xl font-semibold">Room test dev</h1>
                <button 
                    className="rounded-lg bg-orange-200 px-4 py-2 hover:bg-orange-400"
                    onClick={ () => navigate('/') }>Salir</button>
            </header>
            
            {context.messages.map((message) => (
               <div key={message._id}>
                    <div  className="h-screen overflow-y-auto p-4 pb-36">
                        {message.sender_id == context.user.socketId ? renderOutCommingMessages(message) : renderIncommingMessages(message)}
                    </div>
                </div>
            ))}

            {/* someone is typing */}
            <div className="fixed hidden">
                            <p className="font-sm font-light text-gray-500">Someone is typing...</p>
                        </div>
            <ChatFooter/>
        </div>
    )
}

export { ChatBody };