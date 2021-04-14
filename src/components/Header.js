import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { setSection } from '../actions';
import '../assets/styles/components/Header.scss'; 
import Logo from '../assets/static/images/logo.gif';

const Header = (props) => {
  
    const {sectionActive} = props;
    const handleSetSection = (section) => {

        props.setSection(section)
    };
return (
<header>
     <figure >
         <img 
         className= 'header__logo-img border-round shadow-1'
         src= {Logo}
         alt='Logo anime'
         
         />
     </figure>
     <nav className='header__nav'>
         <ul className = 'header__nav__options'>
             <li
             onClick={() => handleSetSection('Animes')}
             className= {`header__nav_option-item ${

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
              &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                <Link to = '/Favoritos'>Favoritos</Link> 
             </li>
         </ul>


     </nav>

</header>
);    
};
const mapStateToProps = (state) => {

    return{
        sectionActive : state.sectionActive,

    };
}

const mapDispatchToProps = {

    setSection
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

