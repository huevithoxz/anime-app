import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux';
import propTypes from 'prop-types'; 
import {setFavorite,deleteFavorite} from '../actions'; 
import '../assets/styles/components/Anime.scss';
import {ReactComponent as SVGStar} from '../assets/static/icons/star.svg';
import AnimeDetalle from './AnimeDetalle'; 
import Modal from './Modal'
import useModal from '../custom-hook/useModal'
 const Anime = (props) => {

    const {modal,handleColseModal,handleOpenModal} = useModal();
    const [favorito, setFavorito] = useState(false);
    const {data,favoriteAnimes} = props 
    const {id} = data;
    console.log(props,"data")
    
    
    const handleSetFavorite = () => 
    {
        props.setFavorite({ data });
        setFavorito(true)
    }

    const handleDeleteFavorite = (itemId) => {

        props.deleteFavorite(itemId);
        setFavorite(false);


    }
    const isFavorite = () => { 
        const result =  favoriteAnimes.filter((favoriteAnimes) => favoriteAnimes.data.id === id,); 
        if(result.length)
        {
            setFavorite(true)
        }
    }
    useEffect(() => {
        isFavorite(); 
      
    },[])
    return (
        <div className='character'>

        <img className='character__img' src ={data.attributes.posterImage.large} alt="animi" />
        <div className='character__details'>
            <h2 className='character__details-name'>
                {data.attributes.canonicalTitle}
            </h2>
    {
        favorito ? 
        <SVGStar onClick={()=>handleDeleteFavorite(id)}  className='character__details-star favorite' /> 
        :
        <SVGStar onClick={handleSetFavorite}  className='character__details-star noFavorite' /> 
    }
    <p
        className='character__details__item'
    >
        <span className='character__details__item-type'>Status</span>
    {' '}
    {data.attributes.status}
    </p>
    <p
        className='character__details__item'
    >
        <span className='character__details__item-type'>Fecha de termino</span>
    {' '}
    {data.attributes.endDate}
    </p>
    <p
        className='character__details__item'
    >
        <span className='character__details__item-type'>Gender</span>
    {' '}
    {data.attributes.ageRatingGuide}
    </p>
    <p onClick={handleOpenModal} className='character__details__item-more'>
    More details...
    </p>
    <Modal isOpen={modal} onCloss={handleColseModal}>
        <AnimeDetalle data={data} /> 
    </Modal>
        </div>
        
    </div>
    )
}
Anime.propTypes={
    data: propTypes.object,
    
    }
    
const mapStateToProps = (state) => 
{
    return {
        favoriteAnimes: state.favoriteAnimes
    }

};

const mapDispatchToProps = {
setFavorite,
deleteFavorite
};
export default connect(mapStateToProps,mapDispatchToProps)(Anime);
