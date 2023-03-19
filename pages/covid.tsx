import Link from 'next/link'
import React from 'react'

const Covid = () => {
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <div>
          <h1>En construccion</h1>
          <Link href={'/'}>
            <p style={{color:'blue', textAlign: 'center'}}>VOLVER AL HOME</p>
          </Link>
        </div>
    </div>
  )
}

export default Covid