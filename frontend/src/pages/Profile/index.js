import React, {useState,useEffect} from 'react';
import { Link, useHistory} from 'react-router-dom';
import { FiPower,FiTrash2 } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg'

import api from '../../services/api';

import './styles.css';

export default function Profile(){
    //Array de stats para incidents por ong
    const [incidents, setIncidents] = useState([]);
    
    //buscado nome da ong armazenada no storege
    const history = useHistory();
    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');

    /** Essa função recebe dois paramentro: 1° Qual função vai executar; 2° Quando
     * será executado
     * 
     * [] = array de dependencias, toda vez que muda o effect é executado novamente, no
     * caso se ficar vazio so executa uma vez
    */
    useEffect(()=>{
        api.get('profile', {
            headers: {
                Authorization: ongId, 
            }    
        }).then(response => {
            setIncidents(response.data);
        })
    },[ongId]);

    /**
     * Função para deletar incident por id
     */
    async function handleDeleteIncident(id){
        try{
           await api.delete(`incidents/${id}`,{
               headers:{
                Authorization: ongId,
               }                
           });
           
           /** Criando um filtro para atualizar a lista de incidents já deletados */
           setIncidents(incidents.filter(incident => incident.id !== id));

        } catch(err){
            alert('Erro ao deletar um incident, tente novamente');
        }
    }

    function handleLogout(){
        localStorage.clear();
        history.push('/');    
    }

    return( 
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the Hero" />
                <span>Bem vindo(a), {ongName}</span>

                <Link className="button" to='/newincident'> Cadastrar Novo Caso </Link>
                <button onClick={handleLogout}>
                    <FiPower size={18} color="#E02041" /> 
                </button>
            </header>

            <h1> Casos cadastrados</h1>
            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                    <strong>CASO:</strong>
                    <p>{incident.title}</p>
                    
                    <strong>DESCRÇÃO:</strong>
                    <p>{incident.description}</p>
                    
                    <strong>VALOR:</strong>
                    <p>{Intl.NumberFormat('pt-BR', {style:'currency',currency:'BRL'}).format(incident.value)}</p>

                    <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                        <FiTrash2 size={20} color="#a8a8b3"  />
                    </button>
                </li>
                ))}
            </ul>
        </div>
    );
}