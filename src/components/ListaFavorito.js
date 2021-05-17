import React from 'react'
import {connect } from 'react-redux';
import '../assets/styles/components/ListaFavoritos.scss';
import Anime from './Anime';
import Vacio from './Vacio';
import propTypes from 'prop-types';

 const ListaFavorito = (props) => {

  const {favoriteAnimes} = props;
  
    return (
      <div className='favoriteList'>
      {!favoriteAnimes.length ? (
          <Vacio/>
      ) : (
        favoriteAnimes.map((character) => (
              <Anime key={character.id} data = {character.data}/>
          ))
      )}
  </div>
    )
}
const mapStateToProps = (state) =>
{
  return {
    favoriteAnimes: state.favoriteAnimes
  }
}
ListaFavorito.propTypes={
  data: propTypes.object,
}
export default connect(mapStateToProps,null)(ListaFavorito)