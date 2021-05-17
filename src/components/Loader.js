import React from 'react'; 
import '../assets/styles/components/Loader.scss';
import deku from '../assets/static/images/cargando.gif';

 const Loader = () => (

    <div className='loader'>
        <img className='loader-img' src={deku} alt='Carganding'/>
        <span className='loader-text'>
    Cargando....
        </span>

    </div>
 )

export default Loader;