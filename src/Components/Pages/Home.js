import React from 'react';
import styles from './Home.module.css'

import savings from '../../img/savings.svg'

export default function Home(){
    return(
        <section className={styles.home_conteiner}>
            <h1>Bem-vindo ao <span>Costs</span></h1> 
            <p>Comece a gerênciar os seus projetos agora mesmo!</p>

            <a href='#'>Criar Projeto</a>

            <img src={savings} alt="Savings"/>

        </section>
    );
} 