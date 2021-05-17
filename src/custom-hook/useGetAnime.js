import { useState } from "react";
import axios from "axios";
import { useLocalStorage } from './useLocalStorage';
import { headers, home } from "../constants/index";

const useGetAnime = () => {
    const [animes, setAnimes] = useLocalStorage('animes','');
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(false);
  
    async function getAnimeHome() {
      try {
        const response = await axios.get(home, headers);
        const resultado = response.data
        const result = resultado.data
        console.log(result, "jhfjhghg");
        setAnimes(result);
        setCargando(false);
        setError(false);
      } catch (error) {
        setCargando(false);
        setError(error);
      }
    }

  return { animes, cargando, error, getAnimeHome };
};

export default useGetAnime