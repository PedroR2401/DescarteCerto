import instagramIcon from "../images/instagramIcon.png";
import emailIcon from "../images/envelope.png";
import "./estilizacao/rodape.css";
import facebookIcon from "../images/facebookIcon.png";
import xIcon from "../images/xIcon.png";
function Footer() {
  return (
    <footer className="Footer">
       {/* Voltar ao topo */}
      <div className="div_VoltarTopo">
        <a href="#topo" className="a_VoltarTopo">
          Voltar ao topo
        </a>
      </div>
      <div className="Geral">
     

      {/* Título */}
      <h2 className="Titulo">
        Projeto Descarte Certo
      </h2>

      {/* Conteúdo principal */}
      <div className="Principal">
        {/* Páginas do site */}
        <div className="div_BlocoVerde">
          <h3 className="h3_PaginaSite">Páginas do Site</h3>
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
            <a href="#" className="Facebook"><img src={facebookIcon} className="FacebookIcon"/></a>
            <a href="#" className="Instagram"><img src={instagramIcon} className="InstagramIcon"/></a>
            <a href="#" className="X"><img src={xIcon} className="XIcon"/></a>
          </div>
          <button className="FaleConosco">
           <img className="EmailIcon" src={emailIcon} />Converse com a gente
          </button>
        </div>

        {/* Equipe */}
         <div className="div_BlocoVerde">
        <div className="div_Equipe">
        <h3 className="h3_Equipe">Equipe Descarte Certo</h3>
          <ul className="ul_PaginaSite">
          <p className="p_Equipe">Laura Moreira</p>
          <p className="p_Equipe">Marcius Esquecula</p>
          <p className="p_Equipe">Pedro H. Romão</p>
          <p className="p_Equipe">Samara Magalhães</p>
          </ul>
          </div>
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
