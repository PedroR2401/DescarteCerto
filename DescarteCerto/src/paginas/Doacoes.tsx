import "./css/Doacoes.css";
import ImagemDoacoes from "../images/donation traduzido.png";
import Atencao from "../images/atencao.png";
import ItensInfantis from "../images/itens infatis.jpg"
import ImagemNao from "../images/nao2.png"
import ImagemEconomiaCircular from "../images/economia circular.png";
import qrcode from "../images/qrcode.png";
import googleplay from "../images/googleplay.png";
import domesticos from "../images/domesticos.jpg";
import moveis from "../images/moveis.jpg";
import roupas from "../images/roupas.png";
import alimentos from "../images/alimetos.jpg";
import eletronicos from "../images/eletronicos.jpg"

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
      <h2 className="doacoes-card-titulo">
        O que pode ser doado?
      </h2>

    <div className="doacoes-grid">


  <Card
    imagem={ItensInfantis}
    titulo="Itens infantis"
    texto="Doe roupas, brinquedos e materiais escolares limpos e funcionando. Separe por idade."
    corFundo="bg-[#A9D091]"
  />

  <Card
    imagem={domesticos}
    titulo="Utensílios domésticos"
    texto="Garanta que estejam limpos e em bom estado. Embale objetos frágeis e agrupe semelhantes."
    corFundo="bg-[#CFBB9A]"
  />

  <Card
    imagem={moveis}
    titulo="Móveis"
    texto="Verifique se estão em boas condições. Limpe, organize e, se necessário, desmonte para o transporte."
    corFundo="bg-[#A9D091]"
  />

  <Card
    imagem={roupas}
    titulo="Roupas e calçados"
    texto="Doe apenas peças limpas e organizadas. Separe por categoria para facilitar a distribuição."
    corFundo="bg-[#CFBB9A]"
  />

  <Card
    imagem={alimentos}
    titulo="Alimentos não perecíveis"
    texto="Prefira alimentos dentro do prazo e embalagens fechadas."
    corFundo="bg-[#A9D091]"
  />

  <Card
    imagem={eletronicos}
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

{/* Seção "Doe em Família" */}
<div className="max-w-7xl mx-auto mt-10 flex flex-col space-y-8 items-center">

  {/* Título - Já está centralizado */}
  <h2 className="text-2xl md:text-3xl font-fredoka font-bold text-padraoVerdeEscuro text-center mb-5">
    Doe em família
  </h2>

  {/* Texto - Adicionado mx-auto para centralizar o bloco de texto */}
  <p className="text-black md:text-2xl leading-relaxed font-fredoka text-justify max-w-7xl mx-auto">
    Doar em família é uma ótima maneira de fortalecer laços e incentivar atitudes solidárias.
    Explique a importância da doação para que todos compreendam o impacto positivo desse gesto.
    Organizar um momento para selecionar itens juntos pode tornar a experiência mais envolvente,
    especialmente para as crianças, que aprendem sobre generosidade de forma prática. Contar histórias
    de quem já recebeu doações também pode motivar e mostrar que pequenas ações fazem a diferença.
  </p>


  <img
    src={ImagemEconomiaCircular}
    alt="Economia Circular"
    className="w-10/12 rounded-xl"
  />

</div>


{/* Nova Seção: Veja onde doar perto de você no nosso Aplicativo! */}
<div className="max-w-7xl mx-auto mt-16 p-8">
  <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
    
    {/* Coluna da Esquerda: Textos */}
    <div className="md:w-1/2 space-y-6">
      <h2 className="text-3xl md:text-4xl font-fredoka font-bold text-padraoVerdeEscuro">
        Veja onde doar perto de você no nosso Aplicativo!
      </h2>
      
      <p className="text-black font-fredoka text-lg">
        Com nosso app você consegue fazer tudo isso. Com o Descarte Certo fica mais fácil cuidar do planeta!
      </p>
      
      <p className="text-black font-fredoka text-lg">
        Conheça nosso app e descubra os pontos de doação mais próximos de você. Encontre doações ou pessoas que precisam
      </p>
      
      <p className="text-black font-fredoka text-lg">
        Nosso aplicativo tem o objetivo de facilitar o descarte correto e incentivar a solidariedade.
      </p>

      <p className="text-black text-lg font-fredoka">
        É rápido, simples e gratuito !
      </p>
    </div>

    {/* Coluna da Direita: QR Code e Google Play */}
    <div className="flex flex-col items-center justify-center space-y-4 md:w-1/3">
      {/* O QR Code aqui é uma imagem estática que você precisará ter em seu projeto */}
      <img 
        src={qrcode} 
        alt="QR Code do Aplicativo" 
        className="w-full font-fredoka max-w-xs h-auto"
      />
      {/* O botão Google Play */}
      <img
        src={googleplay}
        alt="Disponível no Google Play"
        className="max-w-[150px] font-fredoka h-auto" 
      />
    </div>

  </div>
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

      <h3 className="text-xl font-fredoka font-semibold text-padraoVerdeEscuro mb-2">{titulo}</h3>

      <p className="text-black font-fredoka text-base leading-relaxed px-3">
        {texto}
      </p>
    </div>
  );
}
