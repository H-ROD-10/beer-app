import React, { ChangeEvent, MouseEvent } from 'react'
import styles from './Filter.module.css'
import Image from 'next/image'

interface IProps {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  cleanFilter: () => void;
  selectedFilters: number[];
  handleClick: () => void;
}



export const Filter = ({cleanFilter, selectedFilters, handleChange, handleClick}: IProps) => {
  return (
    <>
    <form className={styles.container}>
        <div>
           <div className={styles.wrapper}>
             <h2>Filtros</h2>
           </div>
            <div className={styles.wrapper}>
                <div>
                  <p>Rubia</p>
                </div>
                <input type="checkbox" value="1" onChange={(e) => handleChange(e)} checked={selectedFilters.includes(1)}/>
            </div>
            <div className={styles.wrapper}>
                <div>
                  <p>Morena</p>
                </div>
                <input type="checkbox" value="2" onChange={(e) => handleChange(e)} checked={selectedFilters.includes(2)}/>  
            </div>
            <div className={styles.wrapper}>
                <div>
                  <p>Roja</p>
                </div>
                <input type="checkbox" value="3" onChange={(e) => handleChange(e)} checked={selectedFilters.includes(3)}/>
            </div>
        </div>
    </form>
    <div className={styles.buttons}>
        <button className={styles.secondary} onClick={cleanFilter}>LIMPIAR</button>
        <button className={styles.primary} onClick={handleClick}>
            FILTRAR
            <Image
              src="/svg/filters.svg"
              alt="Beer-App Logo"
              width={24}
              height={24}
              priority
            />
        </button>
    </div>
    </>
  )
}
