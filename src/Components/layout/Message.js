import { useState, useEffect } from 'react';

import styles from './Message.module.css'

export default function Message({type, msg}){

    const [visible, setVisible] = useState(true)

    useEffect(() =>{

        if(!msg){
            setVisible(false)
            return
        }
        else{
            setVisible(true)
        
            const timer = setTimeout(() =>{
                setVisible(false)
            }, 3000)
            return () => clearTimeout(timer)
        }


    }, [msg])

    return(
        <>
            {visible &&(
                <div className={`${styles.message} ${styles[type]}`}>{msg}
                </div>
            )}
        </>
    );
} 