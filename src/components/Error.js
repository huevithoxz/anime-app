import React from 'react';
import '../assets/styles/components/Error.scss'; 
import errorImage from '../assets/static/images/error-404.png'

 const Error = () =>  (

    <div className='error'>
        <img className='error-img' src={errorImage} alt="Error uwu" />

    <span className='error-text'>
        Sorry, an error has been ocurred
    </span>
    </div>
 )
export default Error