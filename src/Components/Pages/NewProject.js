//import { useHistory } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import React from 'react';
import ProjectForm from '../project/ProjectForm';

import styles from './NewProject.module.css'

export default function NewProject(){

    //const history = useHistory()
    const navigate = useNavigate()

    function createPost(project){
        //initialize cost and service
        
        project.cost = 0
        project.services = []

        fetch ('http://localhost:5000/projects',{
            method:'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(project),
        })
        .then((resp => resp.json()))
        .then ((data) =>{
                console.log(data)
                //redirect
                navigate('/projects', {message: 'Projeto criado com sucesso!'})
        } )
        .catch((err) => console.log(err)
        )
    }

    return(
        <div className={styles.newproject_conteiner}>
            <h1>Criar Projecto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto"/>
        </div>
    )
} 