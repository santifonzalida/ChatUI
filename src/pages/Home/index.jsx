import { useContext, useState } from 'react';
import { ChatContext } from '../../context';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();
    const context = useContext(ChatContext);
    const [userName, setUserName] = useState('');

    const handleSubmit = () => {
        context.setUser({...context.user, name: userName});
        navigate('/chat');
    }

    return(
        <div className="flex items-center justify-center bg-indigo-400 h-screen">
            <div>
                <h3 className="text-white text-4xl">Bienvenido</h3>
                <p className="text-white">Para comenzar ingrese su nombre</p>
                <input 
                    type="text"
                    value={userName} 
                    className="border-4 shadow-lg bg-indigo-400 rounded-lg text-2xl mt-4 py-1 px-1 text-white" 
                    onChange={(e) => setUserName(e.target.value)}
                    onKeyDown={(e) => {e.key === 'Enter' ? handleSubmit(e) : ''}}/>
                <button className="rounded-lg h-12 w-20 shadow-lg bg-white ml-4 text-lg cursor-pointer text-indigo-400" onClick={handleSubmit}>Ingresar</button>
            </div>
        </div>
    )
}

export { Home }