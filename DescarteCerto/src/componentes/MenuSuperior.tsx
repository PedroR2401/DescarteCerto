import logoEnome from "../images/logoEnome.png"; // Coloque sua imagem na pasta assets
import "./estilizacao/MenuSuperior.css";
import { Link } from "react-router-dom";

function Header() {
  // const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header id="topo" className="Header">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={logoEnome} alt="Descarte Certo" className="h-18 sm:h-18 md:h-14 w-auto ml-28" />
      </div>

      {/* Menu */}
      <nav>
        <ul className="ListaMenu">

          <Link to="/">
            <li className="Menu">Home</li>
          </Link>

          <Link to="/OndeDescartar">
            <li className="Menu">Onde descartar</li>
          </Link>

          <Link to="/Doacoes">
          <li className="Menu">Doações</li>
          </Link>

          <Link to="/Dicas">
          <li className="Menu">Dicas</li>
          </Link>

          <Link to="/Aplicativo">
          <li className="Menu">Aplicativo</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;