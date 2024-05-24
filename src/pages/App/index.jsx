import { BrowserRouter, useRoutes } from "react-router-dom";
import { ChatProvider } from "../../context";
import { Home } from '../Home';
import { Chat } from '../Chat';

const AppRoutes = () => {
    let routes = useRoutes([
        { path: '/', element: <Home/> },
        { path: '/chat', element: <Chat />}
    ]);
    return routes;
}

const App = () => {
    return (
        <ChatProvider>
            <BrowserRouter >
                <AppRoutes />
            </BrowserRouter>    
        </ChatProvider>
    );
}

export default App;