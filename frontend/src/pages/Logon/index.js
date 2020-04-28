import React, {useState } from 'react';
import { Link, useHistory  } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png';

export default function Logon() {
    //Armazenando o estado do id no input
    const [id, setId] = useState('');

    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try {
            //Chamando serviço de login da ONG
            const response = await api.post('session',{id});

            //Armazenando nome e id da ONG no storage local (session)
            localStorage.setItem('ongId',id);
            localStorage.setItem('ongName',response.data.name);
            

            history.push('/profile');
        } catch (err) {
            alert ("Login não foi autorizado");
        }
         
    }


    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero" />
                
                <form onSubmit={handleLogin}>
                    <h1>Faça seu Logon</h1>
                   
                    <input 
                        placeholder="Sua ID" 
                        value = {id}
                        onChange = {e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>
                    
                    <Link className ="back-link" to="/register">
                        <FiLogIn size={16} color='#E02041' />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes" />
        </div>
    );
}