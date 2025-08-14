import logoEnome from "../images/logoEnome.png"; // Coloque sua imagem na pasta assets
import "./estilizacao/MenuSuperior.css";

function Header() {
  return (
    <header className="Header">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={logoEnome} alt="Descarte Certo" className="h-16 w-auto ml-5" />
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