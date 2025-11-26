// import React from "react";
import "./css/OndeDescartar.css";

import Pilhas from "../images/baterias.png";
import Medicamentos from "../images/medicamentos.png";
import Oleo from "../images/oleo.png";
import Eletro from "../images/eletroeletronicos.png";
import Lampadas from "../images/lampadas.png";
import Agrotoxicos from "../images/agrotoxicos.png";
import Moveis from "../images/moveis.jpg";
import Roupas from "../images/roupas.png";
import Limpeza from "../images/produtos.png";
import qrcode from "../images/qrcode.png"
import googleplay from "../images/googleplay.png"

// --- 1. Definição do Componente Card ---
interface CardProps {
  imagem: string;
  titulo: string;
  texto: string;
  corFundo?: string;
}

function Card({ imagem, titulo, texto, corFundo = "bg-[#A9D18E]" }: CardProps) {
  return (
    // REMOVIDO: transition-transform hover:scale-105 duration-300
    <div className={`${corFundo} rounded-[2.5rem] shadow-lg p-8 flex flex-col items-center text-center w-full max-w-[320px] min-h-[450px]`}>
      
      {/* Caixa branca da imagem (Estilo arredondado) */}
      <div className="bg-white rounded-[1.5rem] w-full aspect-[4/3] flex items-center justify-center mb-6 shadow-sm overflow-hidden p-4">
        <img 
          src={imagem} 
          alt={titulo}
          className="w-full h-full font-fredoka object-contain" 
        />
      </div>

      {/* Título com fonte Serifada */}
      <h3 className="text-2xl font-fredoka font-bold text-padraoVerdeEscuro mb-4 leading-tight">
        {titulo}
      </h3>

      {/* Texto descritivo */}
      <p className="text-black text-[0.95rem] leading-relaxed font-fredoka">
        {texto}
      </p>
    </div>
  );
}

// --- 2. Dados dos Cards com as Cores Alternadas ---
const cardsData = [
  {
    titulo: "Pilhas e baterias",
    texto: "Na sua composição contém metais pesados, que contaminam o solo e a água. Devem ser descartados em pontos de coleta específicos.",
    imagem: Pilhas, 
    corFundo: "bg-[#A9D091]" // Verde
  },
  {
    titulo: "Medicamentos",
    texto: "Devem ser descartados em farmácias com coletas específicas. Nunca no lixo comum ou vaso sanitário.",
    imagem: Medicamentos, // Substitua por Medicamentos
    corFundo: "bg-[#CFBB9A]" // Bege
  },
  {
    titulo: "Óleo de cozinha",
    texto: "Nunca deve despejar o óleo usado na pia. Armazene em garrafas plásticas e entregue em pontos de coleta.",
    imagem: Oleo, // Substitua por Oleo
    corFundo: "bg-[#A9D091]" // Verde
  },
  {
    titulo: "Eletroeletrônicos",
    texto: "Contêm materiais tóxicos. Devem ser levados em ecopontos ou campanhas de coleta tecnológica.",
    imagem: Eletro, // Substitua por Eletro
    corFundo: "bg-[#CFBB9A]" // Bege
  },
  {
    titulo: "Lâmpadas",
    texto: "Contêm mercúrio. Leve em lojas especializadas e nunca quebre ou jogue no lixo comum.",
    imagem: Lampadas, // Substitua por Lampadas
    corFundo: "bg-[#A9D091]" // Verde
  },
  {
    titulo: "Embalagens de agrotóxicos",
    texto: "Os vestígios podem fazer mal. As embalagens devem ser lavadas e levadas aos lugares indicados.",
    imagem: Agrotoxicos, // Substitua por Agrotoxicos
    corFundo: "bg-[#CFBB9A]" // Bege
  },
  {
    titulo: "Móveis e estofados",
    texto: "Se não for possível doar, solicite a coleta agendada da prefeitura ou leve a um ecoponto.",
    imagem: Moveis, // Substitua por Moveis
    corFundo: "bg-[#A9D091]" // Verde
  },
  {
    titulo: "Calçados e roupas",
    texto: "Se estiverem em bom estado, doe. Caso contrário, descarte em pontos de coleta têxteis.",
    imagem: Roupas, // Substitua por Roupas
    corFundo: "bg-[#CFBB9A]" // Bege
  },
  {
    titulo: "Produtos de limpeza",
    texto: "Por conter químicos, as embalagens vazias devem ser descartadas corretamente nos lixos recicláveis.",
    imagem: Limpeza, // Substitua por Limpeza
    corFundo: "bg-[#A9D091]" // Verde
  },
];

// --- 3. Componente Principal ---
export default function OndeDescartar() {
  return (
    <div className="w-full flex flex-col items-center bg-white min-h-screen pb-16">
      
      {/* Header */}
      <section className="max-w-5xl w-full mt-12 px-6 mb-10">
        <h1 className="text-3xl md:text-4xl font-fredoka font-bold mb-6 text-padraoVerdeEscuro">
          Você sabe onde jogar isso?
        </h1>
        <p className="text-lg text-black leading-relaxed font-fredoka text-justify">
          Nem todo resíduo pode ser jogado no lixo comum ou na reciclagem. Alguns merecem uma atenção especial, como pilhas, medicamentos, produtos hospitalares e agrotóxicos. Quando descartados de forma incorreta, esses materiais podem causar sérios danos ao meio ambiente e à saúde dos moradores da região.
          <br /><br />
          Veja como descartar corretamente esses itens e conheça, no nosso aplicativo, os pontos de coleta de lixo especial mais próximos de você. Vamos juntos contribuir para uma cidade mais limpa e segura!
        </p>
      </section>

      {/* Grid de Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-6xl w-full place-items-center">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            imagem={card.imagem}
            titulo={card.titulo}
            texto={card.texto}
            corFundo={card.corFundo}
          />
        ))}
      </section>

      {/* Footer / Info */}
{/* Nova Seção: Veja onde doar perto de você no nosso Aplicativo! */}
<div className="max-w-7xl mx-auto mt-16 p-8">
  <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
    
    {/* Coluna da Esquerda: Textos */}
    <div className="md:w-1/2 space-y-6">
      <h2 className="text-3xl md:text-4xl font-fredoka font-bold text-padraoVerdeEscuro">
        Descubra os pontos de coleta desses materiais próximos de você no nosso Aplicativo!
      </h2>
      
      <p className="text-black font-fredoka text-lg">
        Com nosso aplicativo fica mais fácil cuidar do planeta!
      </p>
      
      <p className="text-black font-fredoka text-lg">
        Conheça nosso app e descubra os pontos de coleta mais próximos de você.
      </p>
      
      <p className="text-black font-fredoka text-lg">
        Nosso aplicativo tem o objetivo de facilitar o descarte correto e incentivar a solidariedade.
      </p>

      <p className="text-black  text-lg font-fredoka font-bold">
        É rápido, simples e gratuito !
      </p>
    </div>

    {/* Coluna da Direita: QR Code e Google Play */}
    <div className="flex flex-col items-center justify-center space-y-4 md:w-1/3">
      {/* O QR Code aqui é uma imagem estática que você precisará ter em seu projeto */}
      <img 
        src={qrcode} 
        alt="QR Code do Aplicativo" 
        className="w-full max-w-xs h-auto"
      />
      {/* O botão Google Play */}
      <img
        src={googleplay}
        alt="Disponível no Google Play"
        className="max-w-[150px] h-auto" 
      />
    </div>

  </div>
</div>

      {/* Descarte Consciente */}
      <section id="descarte-consciente" className="DescarteConsciente">
        <div className="DescarteBox">
          <h2 className="DescarteTitulo">Mas tudo REALMENTE precisa ser descartado?</h2>
          <p className="DescarteTexto">
           Móveis, roupas e objetos em bom estado podem ganhar um novo destino! <br></br><br></br>

Com o Descarte Certo, você também pode:<br></br>
• Anunciar doações de itens que não usa mais.<br></br>
• Encontrar pessoas ou instituições que estão precisando exatamente do que você tem.<br></br>
• Evitar o descarte desnecessário e ajudar quem precisa.<br></br><br></br>

Transforme o que iria para o lixo em uma nova oportunidade para alguém! 
          </p>
        </div>
      </section>
      
    </div>
  );
}