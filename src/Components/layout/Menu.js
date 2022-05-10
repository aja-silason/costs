import React from 'react';
import { Link } from 'react-router-dom';

import Conteiner from './Conteiner'

import styles from './Menu.module.css'

import logo from '../../img/costs_logo.png'

export default function Menu(){
    return(
        <React.Fragment>
            <nav className={styles.navbar}>
                <Conteiner>
                    <Link to='/'>
                        <img src={logo} alt="Costs"/>
                    </Link>

                    <ul className={styles.list}>
                        
                        <li className={styles.item}>
                            <Link to='/'>Home</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to='/projects'>Projetos</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to='/company'>Empresas</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to='/contact'>Contacto</Link>
                        </li>
                        
                    </ul>
                </Conteiner>
            </nav>
        </React.Fragment>
    );
}