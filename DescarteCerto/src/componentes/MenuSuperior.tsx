import logoEnome from "../images/logoEnome.png"; // Coloque sua imagem na pasta assets
import "./estilizacao/MenuSuperior.css";
// import { useState } from "react";

function Header() {
  // const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="Header">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={logoEnome} alt="Descarte Certo" className="h-24 sm:h-16 md:h-12 w-auto ml-3" />
      </div>

      {/* Menu */}
      <nav>
        <ul className="flex space-x-6 font-medium">
          <li className="Menu">Home</li>
          <li className="Menu">Onde descartar</li>
          <li className="Menu">Doações</li>
          <li className="Menu">Dicas</li>
          <li className="Menu">Aplicativo</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;