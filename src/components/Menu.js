import React, { useState } from 'react'


const Menu = () => {
    const [Abierto, setAbierto] = useState( false );

    const tokenMenu = () => {
        setAbierto(!Abierto);
    }

  return (
    <div className='relativa'>

        <Image src='/menu.svg' alt='menu' width={32} height = {32} className='cursos-pointer'/>
      
    </div>
  )
}

export default Menu
