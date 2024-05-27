import { ChatBar } from '../../components/ChatBar';
import { ChatBody } from '../../components/ChatBody';
import { useContext, useEffect } from 'react';
import { ChatContext } from '../../context';

const Chat = () => {
    const context = useContext(ChatContext);

    useEffect(() => {
        //context.setUser({...context.user, sockedId: context.socket.id})
        console.log('Desde chatPAge' + JSON.stringify(context.user));
    }, [])

    return(
        <div className="flex h-screen overflow-hidden">
            <ChatBar />
            <ChatBody/>
        </div>
    )
}

export { Chat };