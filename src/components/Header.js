import React from 'react';
import {Link} from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { setSection } from '../actions';
import '../assets/styles/components/Header.scss'; 
import Logo from '../assets/static/images/logo.gif';

const Header = () => {
  
    const sectionActive = useSelector((state) => state.sectionActive);
    const dispatch = useDispatch();

    const handleSetSection = (section) => {

        dispatch(setSection(section));
    };
return (
<header className='header'>
     <figure className='header__logo' >
         <img 
         className= 'header__logo-img'
         src= {Logo}
         alt='Logo anime'
         
         />
     </figure>
     <nav className='header__nav'>
         <ul className = 'header__nav__options'>
             <li
             onClick={() => handleSetSection('Animes')}
             className= {`header__nav__options-item ${

                sectionActive === 'Animes' ? 
                'active' : ''
             }`}
             >
            <Link to ='/'>Animes</Link>
             </li>
             <li
            
            onClick={() => handleSetSection('Favoritos')}
            className= {`header__nav__options-item ${
                sectionActive === 'Favoritos' ? 
                'active' : ''
            }`} 
             
             > 
              
                <Link to = '/Favoritos'>Favoritos</Link> 
             </li>
         </ul>


     </nav>

</header>
);    
};


export default Header;

