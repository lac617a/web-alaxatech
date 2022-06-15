import React from 'react';
import LogoDefault from '../assets/img/Logo-default.svg';
import LogoWhite from '../assets/img/Logo-white.svg';
import {HashLink} from 'react-router-hash-link';
import {useLocation} from 'react-router-dom';
import Copyright from './Copyright';
import Network from './Network';

export default function LayoutHeader() {
  const [isMenu, setIsMenu] = React.useState(false);
  const {hash} = useLocation();
  const changeLogo = ['#service', '#video', '#contact'];
  const changeTextColor = ['#project', '#what-our-client-say', '#team', '#contact'];
  const changeColor = changeTextColor.includes(hash) ? 'neutro-700' : 'neutro-200';
  const getLogo = changeLogo.includes(hash)  ?  LogoWhite : LogoDefault;

  return (
    <header className="l-header">
      <figure>
        <img src={isMenu ? LogoWhite : getLogo} alt="Company logo" loading="lazy" />
      </figure>
      <nav className={`navbar${isMenu ? ' open' : ''}`}>
        <ul
          className="nav"
          onBlur={() => setIsMenu(false)}
          role={isMenu ? 'button' : 'menu'}>
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
        <div className="l-only-responsive">
          <Network />
          <Copyright />
        </div>
      </nav>
      <button
        className={`btn l-menu-btn${isMenu ? ' open' : ''}`}
        onClick={() => setIsMenu(current => !current)}>
        <div className="l-menu-btn__burger"></div>
      </button>
    </header>
  );
}
