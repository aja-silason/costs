import React from 'react'
import styles from './Project.module.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Loading from '../layout/Loading'
import Conteiner from '../layout/Conteiner'

export default function Project(){

    const { id } = useParams()
    
    const [project, setProject] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)

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

    function togleProjectForm() {
        setShowProjectForm(!showProjectForm)
    }

    return (
        <React.Fragment>
            {project.name ? (
                <div className={styles.project_details}>
                    <Conteiner customClass="column">
                        <div className={styles.detail_conteiner}>
                            <h1>Projeto: {project.name}</h1>
                            <button onClick={togleProjectForm} className={styles.btn}>
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
                                    <p>form</p>
                                </div>
                            )}
                        </div>
                    </Conteiner>
                </div>
            ): (
                <Loading />
            )}
        </React.Fragment>
    )
}