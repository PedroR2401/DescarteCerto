// import React from "react";
import "./css/OndeDescartar.css";

import Pilhas from "../images/baterias.png";
import Medicamentos from "../images/medicamentos.png";
import Oleo from "../images/oleo.png";
import Eletro from "../images/eletroeletronicos.png";
import Lampadas from "../images/lampadas.png";
import Agrotoxicos from "../images/agrotoxicos.png";
import Moveis from "../images/moveis.png";
import Roupas from "../images/roupas.png";
import Limpeza from "../images/DiferencaLixos.png";

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
          className="w-full h-full object-contain" 
        />
      </div>

      {/* Título com fonte Serifada */}
      <h3 className="text-2xl font-serif font-bold text-[#2c3e26] mb-4 leading-tight">
        {titulo}
      </h3>

      {/* Texto descritivo */}
      <p className="text-[#1a2018] text-[0.95rem] leading-relaxed font-medium">
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
    corFundo: "bg-[#A9D18E]" // Verde
  },
  {
    titulo: "Medicamentos",
    texto: "Devem ser descartados em farmácias com coletas específicas. Nunca no lixo comum ou vaso sanitário.",
    imagem: Medicamentos, // Substitua por Medicamentos
    corFundo: "bg-[#D2B48C]" // Bege
  },
  {
    titulo: "Óleo de cozinha",
    texto: "Nunca deve despejar o óleo usado na pia. Armazene em garrafas plásticas e entregue em pontos de coleta.",
    imagem: Oleo, // Substitua por Oleo
    corFundo: "bg-[#A9D18E]" // Verde
  },
  {
    titulo: "Eletroeletrônicos",
    texto: "Contêm materiais tóxicos. Devem ser levados em ecopontos ou campanhas de coleta tecnológica.",
    imagem: Eletro, // Substitua por Eletro
    corFundo: "bg-[#D2B48C]" // Bege
  },
  {
    titulo: "Lâmpadas",
    texto: "Contêm mercúrio. Leve em lojas especializadas e nunca quebre ou jogue no lixo comum.",
    imagem: Lampadas, // Substitua por Lampadas
    corFundo: "bg-[#A9D18E]" // Verde
  },
  {
    titulo: "Embalagens de agrotóxicos",
    texto: "Os vestígios podem fazer mal. As embalagens devem ser lavadas e levadas aos lugares indicados.",
    imagem: Agrotoxicos, // Substitua por Agrotoxicos
    corFundo: "bg-[#D2B48C]" // Bege
  },
  {
    titulo: "Móveis e estofados",
    texto: "Se não for possível doar, solicite a coleta agendada da prefeitura ou leve a um ecoponto.",
    imagem: Moveis, // Substitua por Moveis
    corFundo: "bg-[#A9D18E]" // Verde
  },
  {
    titulo: "Calçados e roupas",
    texto: "Se estiverem em bom estado, doe. Caso contrário, descarte em pontos de coleta têxteis.",
    imagem: Roupas, // Substitua por Roupas
    corFundo: "bg-[#D2B48C]" // Bege
  },
  {
    titulo: "Produtos de limpeza",
    texto: "Por conter químicos, as embalagens vazias devem ser descartadas corretamente nos lixos recicláveis.",
    imagem: Limpeza, // Substitua por Limpeza
    corFundo: "bg-[#A9D18E]" // Verde
  },
];

// --- 3. Componente Principal ---
export default function OndeDescartar() {
  return (
    <div className="w-full flex flex-col items-center bg-white min-h-screen pb-16">
      
      {/* Header */}
      <section className="max-w-5xl w-full mt-12 px-6 mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-800">
          Você sabe onde jogar isso?
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed text-justify">
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
      <section className="bg-green-100 w-full text-center py-12 mt-20">
        <h2 className="text-2xl font-bold text-green-800">Pontos de coleta perto de você</h2>
        <p className="text-lg text-gray-700 mt-2">
          Use nosso aplicativo para encontrar o ponto de descarte mais próximo.
        </p>
      </section>
    </div>
  );
}