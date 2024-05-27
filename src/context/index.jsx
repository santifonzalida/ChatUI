import { useState, useEffect, createContext } from "react"
import { socket } from '../socket';

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {

    const [user, setUser] = useState({name: '', socketId: ''});
    const [someoneIsTyping, setSomeoneIsTyping] = useState([]);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/messages/664d544cf9918c5ed4a5de76')
        .then(response => response.json()
        .then(data => {
            setMessages(data);
            setUser({name:'', socketId: socket.id});
        }));
    },[]);


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