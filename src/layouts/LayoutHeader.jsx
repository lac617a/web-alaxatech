import React from 'react';
import LogoDefault from '../assets/img/Logo-default.svg';
import { HashLink } from 'react-router-hash-link';
import Copyright from './Copyright';
import Network from './Network';

export default function LayoutHeader() {
  const [isMenu, setIsMenu] = React.useState(false);

  return (
    <header className="l-header">
      <HashLink aria-label="Home" to="/#hero">
        <figure>
          <img src={LogoDefault} alt="Company logo" loading="lazy" />
        </figure>
      </HashLink>
      <nav className={`navbar${isMenu ? ' open' : ''}`}>
        <ul
          className="nav"
          onBlur={() => setIsMenu(false)}
          role={isMenu ? 'button' : 'list'}>
          <li className="nav-item">
            <HashLink aria-label="Home" to="/#hero">Home</HashLink>
          </li>
          <li className="nav-item">
            <HashLink aria-label="Service" to="/#service">Servicios</HashLink>
          </li>
          <li className="nav-item">
            <HashLink aria-label="Project" to="/#project">Proyectos</HashLink>
          </li>
          <li className="nav-item">
            <HashLink aria-label="Team" to="/#team">Equipo</HashLink>
          </li>
          <li className="nav-item">
            <HashLink aria-label="Contact" to="/#contact">Contáctanos</HashLink>
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
