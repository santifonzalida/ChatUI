import { useContext } from 'react';
import { ChatContext } from '../../context';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();
    const chatContext = useContext(ChatContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/chat');
    }

    return(
        <div className="flex items-center justify-center bg-slate-600 h-screen">
            <div>
                <h3 className="text-white text-4xl">Bienvenido</h3>
                <p className="text-white">Para comenzar ingrese su nombre</p>
                <input 
                    type="text" 
                    className="border-4 shadow-lg bg-slate-600 rounded-lg text-2xl mt-4 py-1 px-1 text-white" 
                    onChange={(e) => chatContext.setUserName(e.target.value)}
                    minLength={6}/>
                <button className="rounded-lg h-12 w-20 shadow-lg bg-white ml-4 text-lg cursor-pointer text-slate-600" onClick={handleSubmit}>Ingresar</button>
            </div>
        </div>
    )
}

export { Home }