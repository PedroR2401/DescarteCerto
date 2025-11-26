import logoEnome from "../images/logoEnome.png";
import "./estilizacao/MenuSuperior.css";
// IMPORTANTE: Mudar de 'Link' para 'NavLink'
import { NavLink } from "react-router-dom"; 

function Header() {
  return (
    <header id="topo" className="Header">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={logoEnome} alt="Descarte Certo" className="h-18 sm:h-18 md:h-14 w-auto ml-28" />
      </div>

      {/* Menu */}
      <nav>
        <ul className="ListaMenu">
          
          {/* USANDO NavLink */}
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "Menu active-link" : "Menu"}
          >
            <li>Home</li>
          </NavLink>

          <NavLink 
            to="/OndeDescartar"
            className={({ isActive }) => isActive ? "Menu active-link" : "Menu"}
          >
            <li>Onde descartar</li>
          </NavLink>

          <NavLink 
            to="/Doacoes"
            className={({ isActive }) => isActive ? "Menu active-link" : "Menu"}
          >
            <li>Doações</li>
          </NavLink>

          <NavLink 
            to="/Dicas"
            className={({ isActive }) => isActive ? "Menu active-link" : "Menu"}
          >
            <li>Dicas</li>
          </NavLink>

          <NavLink 
            to="/Aplicativo"
            className={({ isActive }) => isActive ? "Menu active-link" : "Menu"}
          >
            <li>Aplicativo</li>
          </NavLink>

        </ul>
      </nav>
    </header>
  );
}

export default Header;