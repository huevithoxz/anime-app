import React from 'react'
import '../assets/styles/components/Vacio.scss'
import emptyImage from'../assets/static/images/NotFound.gif'
 const Vacio = () => (
  
        <div className='empty'>
        <img className= 'empty-img' src= { emptyImage} alt="Rick" />
        <span className='empty-text'>
  Aun no has seleccionado un anime en tu lista de favoritos 
   <br/> 
  Por favor selecciona uno de la pagina principal
        </span>
    </div>
    
)

export default Vacio