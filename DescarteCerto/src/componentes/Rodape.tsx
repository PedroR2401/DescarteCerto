import instagramIcon from "../images/instagramIcon.png";
import "./estilizacao/rodape.css";

function Footer() {
  return (
    <footer className="Footer">
      {/* Voltar ao topo */}
      <div className="div_VoltarTopo">
        <a href="#topo" className="a_VoltarTopo">
          Voltar ao topo
        </a>
      </div>

      {/* Título */}
      <h2 className="Titulo">
        Projeto Descarte Certo
      </h2>

      {/* Conteúdo principal */}
      <div className="Principal">
        {/* Páginas do site */}
        <div className="div_BlocoVerde">
          <h3 className="h3_PaginaSite">Equipe do Descarte Certo</h3>
          <ul className="ul_PaginaSite">
            <li><a href="#" className="a_PaginaSite">Home</a></li>
            <li><a href="#" className="a_PaginaSite">Onde Descartar</a></li>
            <li><a href="#" className="a_PaginaSite">Doações</a></li>
            <li><a href="#" className="a_PaginaSite">Dicas</a></li>
            <li><a href="#" className="a_PaginaSite">Aplicativo</a></li>
          </ul>
        </div>

        {/* Redes sociais */}
        <div className="div_RedesSociais">
          <div className="div_RedesSociais_Filha">
            <a href="#" className="Instagram"><img src={instagramIcon} className="InstagramIcon"/></a>
          </div>
          <button className="FaleConosco">
            Converse com a gente
          </button>
        </div>

        {/* Equipe */}
        <div className="div_Equipe">
          <div className="div_BlocoVerde">
          <h3 className="h3_Equipe">Equipe do Descarte Certo</h3>
          <p>Laura Moreira,</p>
          <p>Marcius Esquecula,</p>
          <p>Pedro Romão,</p>
          <p>Samara Magalhães</p>
          </div>
        </div>
      </div>

      {/* Créditos finais */}
      <div className="CreditosFinais">
        FATEC - Faculdade de Tecnologia do Estado de São Paulo - Projeto Integrador II – Curso de ADS AMS – Prof. Rita
      </div>
    </footer>
  );
}

export default Footer;
