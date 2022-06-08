import React from 'react';
import LogoDefault from '../assets/img/Logo-default.svg';
import LogoWhite from '../assets/img/Logo-white.svg';
import {Link, useLocation} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import useNavigationToTop from '../utils/useNavigationToTop';

export default function LayoutHeader() {
  const {hash} = useLocation();
  const forLogoWhite = ['#service', 'lo'];
  const getLogo = forLogoWhite.includes(hash)  ?  LogoWhite : LogoDefault;
  const navigateToTop = useNavigationToTop();

  const navigateAndReset = e => {
    e.preventDefault();
    navigateToTop('/');
  };

  return (
    <header className="l-header">
      <figure>
        <img src={getLogo} alt="Company logo" loading="lazy" />
      </figure>
      <nav className="navbar">
        <ul className="nav">
          <li className="nav-item"><Link aria-label="Home" to="/" onClick={navigateAndReset}>Home</Link></li>
          <li className="nav-item"><HashLink aria-label="Service" to="/#service">Servicios</HashLink></li>
          <li className="nav-item"><HashLink aria-label="Project" to="/#project">Proyectos</HashLink></li>
          <li className="nav-item"><HashLink aria-label="Team" to="/#team">Equipo</HashLink></li>
          <li className="nav-item"><HashLink aria-label="Contact" to="/#contact">Contáctanos</HashLink></li>
        </ul>
      </nav>
    </header>
  );
}
