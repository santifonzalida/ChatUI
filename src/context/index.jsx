import { useState, useEffect, createContext } from "react"
import { socket } from '../socket';

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {

    useEffect(() => {
        // TODO: Buscar todos los mensajes de la sala
    },[]);

    const [userName, setUserName] = useState('');
    const [someoneIsTyping, setSomeoneIsTyping] = useState([]);
    const [messages, setMessages] = useState([]);

    return (
        <ChatContext.Provider value={{
            socket,
            messages,
            setMessages,
            someoneIsTyping,
            setSomeoneIsTyping,
            userName,
            setUserName,
        }}>
            {children}
        </ChatContext.Provider>
    )
}