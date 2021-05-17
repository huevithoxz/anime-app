import React from 'react'
import "../assets/styles/components/AnimeDetail.scss";
import propTypes from 'prop-types';
 const AnimeDetalle = (props) => {
    const {data} = props; 
console.log(data,"data que llega a detalle")
  
    return (
        <div className='characterDetail'>
            <img className='characterDetail-img' src={data.attributes.posterImage.medium} alt='anime'/>
            <div className='characterDetail__container'>

           <h2 className='characterDetail-name'>{data.attributesname}</h2>
           <p className='characterDetail__item'>
               <span className='characterDetail__item-type'>Status:</span>
               {' '}
               {data.attributes.status}
           </p>
           <p className='characterDetail__item'>
               <span className='characterDetail__item-type'>Capitulos:</span>
               {' '}
               {data.attributes.episodeCount}
           </p>
           <p className='characterDetail__item'>
               <span className='characterDetail__item-type'>Sinopcis:</span>
               {' '}
               {data.attributes.synopsis}
           </p>
        
            </div>

        </div>
    )
   }
   AnimeDetalle.propTypes={
    data: propTypes.object,
    
    }
export default AnimeDetalle;