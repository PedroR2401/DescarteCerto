import instagramIcon from "../images/instagramIcon.png";
import "./estilizacao/rodape.css";

function Footer() {
  return (
    <footer>
      {/* Voltar ao topo */}
      <div className="DivVoltarTopo">
        <a href="#topo" className=".A_voltarTopo">
          Voltar ao topo
        </a>
      </div>

      {/* Título */}
      <h2 className="Titutlo">
        Projeto Descarte Certo
      </h2>

      {/* Conteúdo principal */}
      <div className="Principal">
        {/* Páginas do site */}
        <div className="Div_PaginaSite">
          <h3 className="h3_PaginaSite">Equipe do Descarte Certo</h3>
          <ul className="ul_PaginaSite">
            <li><a href="#" className=".a_PaginaSite">Home</a></li>
            <li><a href="#" className=".a_PaginaSite">Onde Descartar</a></li>
            <li><a href="#" className=".a_PaginaSite">Doações</a></li>
            <li><a href="#" className=".a_PaginaSite">Dicas</a></li>
            <li><a href="#" className=".a_PaginaSite">Aplicativo</a></li>
          </ul>
        </div>

        {/* Redes sociais */}
        <div className="flex flex-col items-center mb-6 md:mb-0">
          <div className="flex space-x-4 text-3xl mb-3">
            <a href="#" className="text-pink-600 hover:scale-110 transition"><img src={instagramIcon} /></a>
          </div>
          <button className="bg-gray-200 px-4 py-2 rounded-full text-sm shadow hover:bg-gray-300">
            Converse com a gente
          </button>
        </div>

        {/* Equipe */}
        <div className="bg-green-200 p-3 rounded-lg">
          <h3 className="font-semibold mb-2">Equipe do Descarte Certo</h3>
          <p>Laura Moreira,</p>
          <p>Marcius Esquecula,</p>
          <p>Pedro Romão,</p>
          <p>Samara Magalhães</p>
        </div>
      </div>

      {/* Créditos finais */}
      <div className="bg-gray-800 text-white text-center text-xs py-2 mt-6">
        FATEC - Faculdade de Tecnologia do Estado de São Paulo - Projeto Integrador II – Curso de ADS AMS – Prof. Rita
      </div>
    </footer>
  );
}

export default Footer;
