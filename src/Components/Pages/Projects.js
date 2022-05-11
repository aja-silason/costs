import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

import Message from '../layout/Message';
import Conteiner from '../layout/Conteiner';
import LinkButton from '../layout/LinkButton';

import styles from './Projects.module.css'

export default function Projects(){
    
    const location = useLocation()
    let message = ''
    if(location.state){
        message = location.state.message
    }

    return(
        <div className={styles.project_conteiner}>
            <div className={styles.title_conteiner}>
                <h1>Meus Projetos</h1>
                <LinkButton to="../newproject" text="Criar Projeto"/>
            </div>
            {message && <Message msg={message} type="success"/>}

            <Conteiner customClass="start">
                <p>Projetos...</p>
            </Conteiner>

        </div>
    );
} 