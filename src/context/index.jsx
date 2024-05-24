import { useState, useEffect, createContext } from "react"

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
    const [showChat, setShowChat] = useState(false);
    const [userName, setUserName] = useState('');

    return (
        <ChatContext.Provider value={{
            showChat,
            setShowChat,
            userName,
            setUserName,
        }}>
            {children}
        </ChatContext.Provider>
    )
}