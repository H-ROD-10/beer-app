import Image from 'next/image'
import React, { Dispatch, SetStateAction } from 'react'
import styles from './FlotingButtonFilter.module.css'

interface IProps{
  setShowModal: Dispatch<SetStateAction<boolean>>
}

export const FlotingButtonFilter = ({setShowModal}: IProps) => {
  return (
   <div className={styles.container}>
        <button
          onClick={() => setShowModal(true)}
        >
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
  )
}
