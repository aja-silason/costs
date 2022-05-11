import React from 'react'
import styles from './Project.module.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Loading from '../layout/Loading'
import Conteiner from '../layout/Conteiner'
import ProjectForm from '../project/ProjectForm'
import Message from '../layout/Message'

export default function Project(){

    const { id } = useParams()
    
    const [project, setProject] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [showServiceForm, setShowServiceForm] = useState(false)
    const [message, setMessage] = useState()
    const [type, setType] = useState()


    useEffect(() => {
        setTimeout(() => {
                fetch(`http://localhost:5000/projects/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then(resp => resp.json())
            .then((data) => {
                setProject(data)
            })
            .catch(err => console.log)
        }, 300)

    }, [id])

    function editPost(project){
        setMessage('')
        //budget validation

        if(project.budget < project.cost){
            setMessage('O orçamento não pode ser menor que o custo do projecto!')
            setType('error')
            return false
        }
        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
        .then(resp => resp.json())
        .then((data) => {
            setProject(data)
            setShowProjectForm(false)
            setMessage('Projecto atualizado!')
            setType('success')
        })
        .catch(err => console.log(err))
    }

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm)
    }

    function toggleServiceForm() {
        setShowServiceForm(!showServiceForm)
    }

    return (
        <React.Fragment>
            {project.name ? (
                <div className={styles.project_details}>
                    <Conteiner customClass="column">
                        {message && <Message type={type} msg={message}/>}
                        <div className={styles.detail_conteiner}>
                            <h1>Projeto: {project.name}</h1>
                            <button onClick={toggleProjectForm} className={styles.btn}>
                                {!showProjectForm ? 'Editar Projeto' : 'Fechar'}
                            </button>
                            {!showProjectForm ? (
                                <div className={styles.project_info}>
                                    <p>
                                        <span>Categoria:</span> {project.category.name}
                                    </p>
                                    <p>
                                        <span>Total de Orçamento: </span> {project.budget} kz
                                    </p>
                                    <p>
                                        <span>Total Utilizado: </span> {project.cost} kz
                                    </p>
                                </div>
                            ): (
                                <div className={styles.project_info}>
                                    <ProjectForm
                                        handleSubmit={editPost} 
                                        btnText="Concluir edição" 
                                        projectData={project}
                                    />
                                </div>
                            )}
                        </div>
                        <div className={styles.service_form_conteiner}>
                            <h2>Adicione um serviço:</h2>
                            <button onClick={toggleServiceForm} className={styles.btn}>
                                {!showServiceForm ? 'Adicionar serviço' : 'Fechar'}
                            </button>
                            <div className={styles.project_info}>
                                {showServiceForm && (
                                    <div>
                                        formulário do serviço
                                    </div>
                                )

                                }
                            </div>
                        </div>
                        <h2>Serviços</h2>
                        <Conteiner customClass="start">
                            <p>Itens de Serviços</p>
                        </Conteiner>
                    </Conteiner>
                </div>
            ): (
                <Loading />
            )}
        </React.Fragment>
    )
}