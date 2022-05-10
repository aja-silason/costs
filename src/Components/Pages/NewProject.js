import React from 'react';
import ProjectForm from '../project/ProjectForm';

import styles from './NewProject.module.css'

export default function NewProject(){
    return(
        <div className={styles.newproject_conteiner}>
            <h1>Criar Projecto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm btnText="Criar Projeto"/>
        </div>
    )
} 