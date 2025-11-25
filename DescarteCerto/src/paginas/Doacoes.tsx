import "./css/Doacoes.css";
import ImagemDoacoes from "../images/donation traduzido.png";
import Atencao from "../images/atencao.png";
import ItensInfantis from "../images/itens infatis.jpg"
import ImagemNao from "../images/nao2.png"
export default function Doacoes() {
  return (
    <section className="doacoes-container">

      {/* SEÇÃO INICIAL – IGUAL À PRIMEIRA IMAGEM */}
      <div className="doacoes-hero">
        
        {/* TEXTO À ESQUERDA */}
        <div className="doacoes-hero-texto">
          <h1 className="doacoes-hero-titulo">
            Nem tudo é lixo: Doe antes de descartar
          </h1>

          <h2 className="doacoes-hero-subtitulo">
            Por que doar faz diferença?
          </h2>

          <p className="doacoes-hero-paragrafo">
            Doar faz diferença porque evita desperdício, ajuda quem precisa e
            contribui para um mundo mais sustentável. Objetos que não usamos mais
            podem ter grande valor para outras pessoas, fortalecendo a comunidade
            e reduzindo a poluição. Pequenos gestos incentivam a reutilização,
            diminuem o lixo e criam impacto positivo tanto social quanto ambiental.
          </p>
        </div>

        {/* IMAGEM À DIREITA */}
        <div className="doacoes-hero-imagem">
          <img
            src={ImagemDoacoes}
            alt="Doações"
            className="doacoes-hero-img"
          />
        </div>

      </div>

<div className="doacoes-card-grande-flex">

  {/* PARTE DE CIMA → imagem + texto */}
  <div className="flex gap-6">
    <img src={Atencao} className="doacoes-card-img-lateral" />

    <div className="space-y-4">
      <h2 className="doacoes-card-titulo">
        Doação não é descarte disfarçado
      </h2>

      <p className="doacoes-card-texto">
        A doação não deve ser uma maneira disfarçada de se livrar de coisas sem utilidade,
      mas sim uma oportunidade de fortalecer a comunidade e reduzir o desperdício.
      Separar os itens adequadamente garante um impacto positivo tanto para quem recebe
      quanto para o meio ambiente, promovendo práticas mais sustentáveis e responsáveis.
      </p>
    </div>
  </div>

  {/* PARTE DE BAIXO → começa abaixo da imagem */}
  <div className="space-y-4">
    <h2 className="doacoes-card-titulo2">
      Dica prática: Prepare o item para a doação
    </h2>

    <p className="doacoes-card-texto2">
     Antes de doar, verifique se o item está em boas condições e ainda pode ser útil.
      Faça pequenos reparos, embale corretamente e, se possível, identifique o objeto para
      facilitar seu uso. Por fim, leve a doação a instituições ou pessoas que realmente
      precisam, garantindo um impacto positivo e sustentável.
    </p>
  </div>

</div>
    <div className="doacoes-grid">

  <Card
    imagem={ItensInfantis}
    titulo="Itens infantis"
    texto="Doe roupas, brinquedos e materiais escolares limpos e funcionando. Separe por idade."
    corFundo="bg-[#A9D091]"
  />

  <Card
    imagem={ItensInfantis}
    titulo="Utensílios domésticos"
    texto="Garanta que estejam limpos e em bom estado. Embale objetos frágeis e agrupe semelhantes."
    corFundo="bg-[#CFBB9A]"
  />

  <Card
    imagem={ItensInfantis}
    titulo="Móveis"
    texto="Verifique se estão em boas condições. Limpe, organize e, se necessário, desmonte para o transporte."
    corFundo="bg-[#A9D091]"
  />

  <Card
    imagem={ItensInfantis}
    titulo="Roupas e calçados"
    texto="Doe apenas peças limpas e organizadas. Separe por categoria para facilitar a distribuição."
    corFundo="bg-[#CFBB9A]"
  />

  <Card
    imagem={ItensInfantis}
    titulo="Alimentos não perecíveis"
    texto="Prefira alimentos dentro do prazo e embalagens fechadas."
    corFundo="bg-[#A9D091]"
  />

  <Card
    imagem={ItensInfantis}
    titulo="Eletrônicos"
    texto="Doe apenas os que funcionam ou podem ser consertados. Apague dados pessoais antes de entregar."
    corFundo="bg-[#CFBB9A]"
  />

</div>

      {/* O que não deve ser doado */}
      <div className="doacoes-hero2">
        
        {/* TEXTO À ESQUERDA */}
        <div className="doacoes-hero-texto2">
          <h1 className="doacoes-hero-titulo2">
            O que não deve ser doado
          </h1>

          <p className="doacoes-hero-paragrafo2">
           É importante selecionar itens que realmente possam ser 
           aproveitados. Roupas rasgadas ou muito manchadas, 
           eletrônicos que não funcionam e móveis quebrados ou sem 
           condições de uso devem ser reciclados ou descartados 
           corretamente. Alimentos vencidos ou sem embalagem segura 
           não são adequados para doação, pois podem representar 
           riscos à saúde. Produtos de higiene pessoal usados e 
           medicamentos fora da validade também devem ser 
           descartados conforme as normas sanitárias. 
          </p>
        </div>

        {/* IMAGEM À DIREITA */}
        <div className="doacoes-hero-imagem2">
          <img
            src={ImagemNao}
            alt="Doações"
            className="doacoes-hero-img2"
          />
        </div>

      </div>

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
  corFundo?: string;  // ← permite cores diferentes por card
}

 function Card({ imagem, titulo, texto, corFundo = "bg-[#D8E9C4]" }: CardProps) {
  return (
    <div className={`${corFundo} rounded-2xl shadow-md p-11 flex flex-col items-center text-center w-72`}>
      <img src={imagem} className="w-48 h-36 object-contain mb-4 rounded-2xl" />

      <h3 className="text-xl font-bold text-padraoVerdeEscuro mb-2">{titulo}</h3>

      <p className="text-black text-base leading-relaxed px-3">
        {texto}
      </p>
    </div>
  );
}
