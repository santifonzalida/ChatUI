import { useState, useEffect, createContext } from "react"
import { socket } from '../socket';

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {

    useEffect(() => {
        // TODO: Buscar todos los mensajes de la sala
        fetch('http://localhost:3001/messages/664d544cf9918c5ed4a5de76')
        .then(response => response.json()
        .then(data => {
            setMessages(data);
        }));
    },[]);

    const [user, setUser] = useState({name: '', sockedId: socket.id});
    const [someoneIsTyping, setSomeoneIsTyping] = useState([]);
    const [messages, setMessages] = useState([]);

    return (
        <ChatContext.Provider value={{
            socket,
            messages,
            setMessages,
            someoneIsTyping,
            setSomeoneIsTyping,
            user,
            setUser,
        }}>
            {children}
        </ChatContext.Provider>
    )
}