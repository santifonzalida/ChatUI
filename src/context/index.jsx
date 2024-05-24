import { useState, useEffect, createContext } from "react"
import socketIO from 'socket.io-client';

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {

    const socket = socketIO.connect('http://localhost:3001');

    const [userName, setUserName] = useState('');
    const [someoneIsTyping, setSomeoneIsTyping] = useState([]);
    const [chats, setChats] = useState([]);

    return (
        <ChatContext.Provider value={{
            socket,
            chats,
            setChats,
            someoneIsTyping,
            setSomeoneIsTyping,
            userName,
            setUserName,
        }}>
            {children}
        </ChatContext.Provider>
    )
}