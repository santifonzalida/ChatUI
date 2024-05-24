import { ChatFooter } from "./ChatFooter";
import { useNavigate } from "react-router";
import { ChatContext } from "../context";
import { useContext } from "react";

const ChatBody = () => {

    const contex = useContext(ChatContext);
    const navigate = useNavigate();

    const handleExit = () => {
        navigate('/');
    }
    
    return (
        <div className="flex-1">
            {/* Chat Header */}
            <header className="flex justify-between bg-slate-300 p-3 text-gray-700">
                <h1 className="text-2xl font-semibold">Room test dev</h1>
                <button 
                    className="rounded-lg bg-orange-200 px-4 py-2 hover:bg-orange-400"
                    onClick={ handleExit }>Salir</button>
            </header>

            <div className="h-screen overflow-y-auto p-4 pb-36">
                {/*  Incoming Message */}
                <div className="flex mb-4 cursor-pointer">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
                    <img src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="User Avatar" className="w-8 h-8 rounded-full"/>
                    </div>
                    <div className="flex max-w-96 bg-white rounded-lg p-3 gap-3">
                    <p className="text-gray-700">Hey Bob, how's it going?</p>
                    </div>
                </div>
                
                {/*  Outgoing Message */}
                <div className="flex justify-end mb-4 cursor-pointer">
                    <div className="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3">
                    <p>Hi Alice! I'm good, just finished a great book. How about you?</p>
                    </div>
                    <div className="w-9 h-9 rounded-full flex items-center justify-center ml-2">
                    <img src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="My Avatar" className="w-8 h-8 rounded-full"/>
                    </div>
                </div>  

                {/* someone is typing */}
                <div className="fixed">
                    <p className="font-sm font-light text-gray-500">Someone is typing...</p>
                </div>
            </div>
            
            <ChatFooter/>
        </div>
    )
}

export { ChatBody };