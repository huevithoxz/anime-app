import React, {Fragment} from 'react';
import notFound from '../assets/static/images/error-404.png'
import '../assets/styles/components/Vacio.scss'

const NotFoundAnime = () => (
    <Fragment>
        
        <div className='empty'>
        <img className= 'empty-img' src= { notFound} alt="Rick" />
        <span className='empty-text'>
        404: URL Not Found
        </span>
    </div>
        
    
        <button type="button" to="/" >volver</button>
    </Fragment>
);

NotFoundAnime.displayName = 'NotFoundAnime';

export default NotFoundAnime;