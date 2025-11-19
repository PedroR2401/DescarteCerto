// import DoacaoBanner from "../assets/doacoes-banner.png";
// import EconomiaCircular from "../assets/economia-circular.png";
import "./css/Doacoes.css";
// // ÍCONES DOS CARDS
import ItensInfantis from "../images/CardEmpregos.jpg";
// import UtensiliosDomesticos from "../assets/utensilios-domesticos.png";
// import Moveis from "../assets/moveis.png";
// import RoupasCalcados from "../assets/roupas-calcados.png";
// import AlimentosNaoPereciveis from "../assets/alimentos-nao-pereciveis.png";
// import Eletronicos from "../assets/eletronicos.png";

export default function Doacoes() {
  return (
    <section className="doacoes-container">

      <h1 className="doacoes-titulo-principal">
        Nem tudo é lixo: Doe antes de descartar
      </h1>

      <p className="doacoes-paragrafo">
        Doar itens em bom estado pode reduzir significativamente o lixo e contribuir 
        para ações sociais. Roupas, móveis e objetos que você não usa mais podem 
        ganhar uma nova vida ajudando outras pessoas.
      </p>

      {/* <img src={DoacaoBanner} alt="Doações" className="doacoes-banner" /> */}

      {/* CARD GRANDE */}
      <div className="doacoes-card-grande">
        <h2 className="doacoes-card-titulo">Doação não é descarte disfarçado</h2>
        <p className="doacoes-card-texto">
          A doação deve ser feita com itens realmente utilizáveis e limpos...
        </p>
      </div>

      <div className="doacoes-card-grande">
        <h2 className="doacoes-card-titulo">Dica prática: Prepare o item para doação</h2>
        <p className="doacoes-card-texto">
          Antes de doar, limpe o item, dobre roupas e verifique se funciona...
        </p>
      </div>

      <h2 className="doacoes-subtitulo">O que pode ser doado?</h2>

      {/* GRID DOS CARDS */}
      <div className="doacoes-grid">

        <Card
          imagem={ItensInfantis}
          titulo="Itens infantis"
          texto="Brinquedos e roupas infantis em bom estado."
        />

        <Card
          imagem={ItensInfantis}
          titulo="Utensílios domésticos"
          texto="Pratos, copos, panelas e utensílios em bom estado."
        />

        <Card
          imagem={ItensInfantis}
          titulo="Móveis"
          texto="Móveis utilizáveis e sem partes quebradas."
        />

        <Card
          imagem={ItensInfantis}
          titulo="Roupas e calçados"
          texto="Devem estar limpos e prontos para uso."
        />

        <Card
          imagem={ItensInfantis}
          titulo="Alimentos não perecíveis"
          texto="Itens dentro da validade."
        />

        <Card
          imagem={ItensInfantis}
          titulo="Eletrônicos"
          texto="Somente se estiverem funcionando."
        />

      </div>

      <h2 className="doacoes-subtitulo">O que não deve ser doado</h2>
      <p className="doacoes-paragrafo">
        Evite doar itens quebrados, sujos ou que ofereçam riscos.
      </p>

      <img
        src={ItensInfantis}
        alt="Economia Circular"
        className="doacoes-economia-img"
      />

      <h2 className="doacoes-subtitulo">Doe em família</h2>
      <p className="doacoes-paragrafo">
        Doar em família é uma ótima maneira de ensinar solidariedade.
      </p>

      <div className="doacoes-qrcode-box">
        <p className="doacoes-paragrafo">Veja onde doar perto de você no aplicativo!</p>
        <img src="/qrcode.png" alt="QR Code" className="doacoes-qrcode" />
        <img src="/googleplay.png" alt="Google Play" className="doacoes-googleplay" />
      </div>

    </section>
  );
}

// COMPONENTE DE CARD
interface CardProps {
  imagem: string;
  titulo: string;
  texto: string;
}

function Card({ imagem, titulo, texto }: CardProps) {
  return (
    <div className="doacoes-card">
      <img src={imagem} alt={titulo} className="doacoes-card-img" />
      <h3 className="doacoes-card-titulo-item">{titulo}</h3>
      <p className="doacoes-card-paragrafo">{texto}</p>
    </div>
  );
}
