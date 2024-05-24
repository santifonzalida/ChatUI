import { useState, useEffect, createContext } from "react"

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
    const [userName, setUserName] = useState('');
    const [someoneIsTyping, setSomeoneIsTyping] = useState([]);
    const [chats, setChats] = useState([]);

    return (
        <ChatContext.Provider value={{
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