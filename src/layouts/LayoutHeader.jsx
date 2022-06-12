import React from 'react';
import LogoDefault from '../assets/img/Logo-default.svg';
import LogoWhite from '../assets/img/Logo-white.svg';
import {useLocation} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';

export default function LayoutHeader() {
  const {hash} = useLocation();
  const changeLogo = ['#service', '#video', '#contact'];
  const changeTextColor = ['#project', '#what-our-client-say', '#team', '#contact'];
  const changeColor = changeTextColor.includes(hash) ? 'neutro-700' : 'neutro-200';
  const getLogo = changeLogo.includes(hash)  ?  LogoWhite : LogoDefault;

  return (
    <header className="l-header">
      <figure>
        <img src={getLogo} alt="Company logo" loading="lazy" />
      </figure>
      <nav className="navbar">
        <ul className="nav">
          <li className="nav-item">
            <HashLink className={changeColor} aria-label="Home" to="/#hero">Home</HashLink>
          </li>
          <li className="nav-item">
            <HashLink className={changeColor} aria-label="Service" to="/#service">Servicios</HashLink>
          </li>
          <li className="nav-item">
            <HashLink className={changeColor} aria-label="Project" to="/#project">Proyectos</HashLink>
          </li>
          <li className="nav-item">
            <HashLink className={changeColor} aria-label="Team" to="/#team">Equipo</HashLink>
          </li>
          <li className="nav-item">
            <HashLink className={changeColor} aria-label="Contact" to="/#contact">Contáctanos</HashLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
