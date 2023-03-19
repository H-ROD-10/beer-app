import Image from 'next/image'
import React from 'react'
import styles from './WeCanHelpYou.module.css'

export const WeCanHelpYou = () => {
  return (
    <section className={styles.container}>
        <h2>¿Podemos ayudarle?</h2>
        <div className={styles.content}>
            <div>
                <div className={styles.wrapperIcons}>
                    <Image
                        src="/svg/intercom.svg"
                        alt="Beer-App Logo"
                        width={32}
                        height={32}
                        priority
                    />
                </div>
                <p>Chat</p>
            </div>
            <div>
                <div className={styles.wrapperIcons}>
                    <Image
                        src="/svg/phone.svg"
                        alt="Beer-App Logo"
                        width={32}
                        height={32}
                        priority
                    />
                    
                </div>
                <p>Llamar</p>
            </div>
        </div>
  </section>
  )
}
