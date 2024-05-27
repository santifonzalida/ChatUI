import { ChatBar } from '../../components/ChatBar';
import { ChatBody } from '../../components/ChatBody';

const Chat = () => {    
    return(
        <div className="flex h-screen overflow-hidden">
            <ChatBar />
            <ChatBody/>
        </div>
    )
}

export { Chat };