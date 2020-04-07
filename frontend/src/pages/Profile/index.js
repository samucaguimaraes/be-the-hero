import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower,FiTrash2 } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg'


import './styles.css';

export default function Profile(){
    return( 
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the Hero" />
                <span>Bem vinda, APAD</span>

                <Link className="button" to='/newincident'> Cadastrar Novo Caso </Link>
                <button>
                    <FiPower size={18} color="#E02041" /> 
                </button>
            </header>

            <h1> Casos cadastrados</h1>
            <ul>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso Teste</p>
                    
                    <strong>DESCRÇÃO:</strong>
                    <p>Descrição Teste</p>
                    
                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"  />
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso Teste</p>
                    
                    <strong>DESCRÇÃO:</strong>
                    <p>Descrição Teste</p>
                    
                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"  />
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso Teste</p>
                    
                    <strong>DESCRÇÃO:</strong>
                    <p>Descrição Teste</p>
                    
                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"  />
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso Teste</p>
                    
                    <strong>DESCRÇÃO:</strong>
                    <p>Descrição Teste</p>
                    
                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"  />
                    </button>
                </li>
            </ul>
        </div>
    );
}