import Logo from "../assets/react.svg"; // Coloque sua imagem na pasta assets
import "./estilizacao/MenuSuperior.css";

function Header() {
  return (
    <header className="bg-padraoVerdeClaro text-gray-800 flex items-center justify-between px-6 py-3 shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={Logo} alt="Descarte Certo" className="h-10 w-10" />
        <span className="font-bold text-lg">Descarte Certo</span>
      </div>

      {/* Menu */}
      <nav>
        <ul className="flex space-x-6 font-medium">
          <li className="text-black hover:text-gray-800 cursor-pointer">Home</li>
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