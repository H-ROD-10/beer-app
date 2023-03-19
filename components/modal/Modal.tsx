import React, { useState, useEffect, MouseEvent } from 'react';
import ReactDom from 'react-dom'

import styles from './Modal.module.css'

export const Modal = ({showModal, onClose, children, title}: any) => {
    const [isBrowser, setIsBrowser] = useState(false)

    useEffect(() => {
      setIsBrowser(true)
    }, [])

    const handleClose = (e: MouseEvent<HTMLButtonElement>) =>{
      e.preventDefault();
      onClose()
    }
    
    const modalContent = showModal ? (
      <div className={styles.overlay}>
        <div className={styles.modal}>
          <div className={styles.header}>
              <button onClick={handleClose}>X</button>
          </div>
          <div>
            {children}
          </div>
        </div>
      </div>
    ):(null)

    if(isBrowser){
      const element = document.getElementById('modal-root')
      return ReactDom.createPortal(
        modalContent,
        element!
      )
    } else {
      return null
    }
}

