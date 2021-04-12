import React from 'react';
import '../assets/styles/components/Footer.scss';

const Footer = () => (

<footer className='footer'>

<div className='footer__made'>
    Made with
    {''}
    <span role='img' aria-label='heart'>💜</span>
    {''}
    by
    <a href='https://www.linkedin.com/in/matias-riquelme-emparan/' 
    reel='noopener noreferrer'
    target='_blank'
    className='logo'
    >
        <span className='logo-img'>&lt;&gt;</span>
        {' '}
        <span>Matias Riquelme</span>
    </a>
</div>
<div className='footer__location'>
    CH, 
    <span>Santiago</span>,2021

</div>
</footer>
) ;

export default Footer;