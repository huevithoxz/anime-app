import React, { useState, useEffect } from "react";
import "../assets/styles/components/AnimeLista.scss";
import axios from "axios";
import Anime from "./Anime";
import Error from "./Error";
import Loader from "./Loader";
import useGetAnime from '../custom-hook/useGetAnime';




const AnimeLista = () => {
  
  const { animes, cargando, error, getAnimeHome } = useGetAnime();
  useEffect(() => {
    getAnimeHome();
    
  }, []);

  return (
    <div className="characterList">
    {cargando ? (
      <Loader />
    ) : error ? (
      <Error />
    ) : (
        animes.map((character) => (
        <Anime key={character.id} data={character} />
      ))
    )}
  </div>
  )
};

export default AnimeLista;
