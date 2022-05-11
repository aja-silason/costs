import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import Message from '../layout/Message';
import Conteiner from '../layout/Conteiner';
import LinkButton from '../layout/LinkButton';

import styles from './Projects.module.css'
import ProjectCard from '../project/ProjectCard';

export default function Projects(){

    const [projects, setProjects] = useState([])
    
    const location = useLocation()
    let message = ''
    if(location.state){
        message = location.state.message
    }

    useEffect(() =>{

        fetch('http://localhost:5000/projects',{
            method: 'GET',
            header: {
            'Content-Type': 'application/json',
            },
        }).then(resp => resp.json())
        .then(data =>{
            console.log(data)
            setProjects(data)
        })
        .catch(err => console.log(err))
    }, [])

    return(
        <div className={styles.project_conteiner}>
            <div className={styles.title_conteiner}>
                <h1>Meus Projetos</h1>
                <LinkButton to="../newproject" text="Criar Projeto"/>
            </div>
            {message && <Message msg={message} type="success"/>}

            <Conteiner customClass="start">
                {projects.length > 0 &&
                projects.map((project) => (
                    <ProjectCard
                        id={project.id} 
                        name={project.name}
                        budget={project.budget}
                        category={project.category.name}
                        key={project.id}
                    />
                ))
                }
            </Conteiner>

        </div>
    );
} 