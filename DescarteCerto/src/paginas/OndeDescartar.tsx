import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import "./css/OndeDescartar.css";

export default function DescartarScreen() {
  const cards = [
    {
      title: "Pilhas e baterias",
      text: "Não sua composição contém metais pesados, que quando descartados incorretamente podem contaminar o solo e a água. Devem ser levados aos pontos de coleta específicos.",
    //   icon: require("../assets/pilhas.png"),
    },
    {
      title: "Medicamentos",
      text: "Devem ser descartados em farmácias ou postos de saúde que ofereçam esse tipo de serviço. O descarte incorreto pode fazer com que o remédio entre em contato com o solo ou água potável, causando sérios riscos ao meio ambiente.",
    //   icon: require("../assets/medicamentos.png"),
    },
    {
      title: "Óleo de cozinha",
      text: "Nunca deve ser jogado diretamente no ralo, pois pode entupir encanamentos e poluir rios. Armazene o óleo usado em garrafas PET e leve aos pontos de coleta.",
    //   icon: require("../assets/oleo.png"),
    },
    {
      title: "Eletroeletrônicos",
      text: "Contém materiais tóxicos e pesados. Podem ser levados a postos de coleta de lixo eletrônico ou a lojas que aceitam esses materiais para reciclagem segura.",
    //   icon: require("../assets/eletronicos.png"),
    },
    {
      title: "Lâmpadas",
      text: "Lâmpadas fluorescentes, de vapor de sódio ou mercúrio não podem ser jogadas no lixo comum. Busque pontos de coleta especializados.",
    //   icon: require("../assets/lampada.png"),
    },
    {
      title: "Embalagens de agrotóxicos",
      text: "Devem passar pela tríplice lavagem antes do descarte e devolvidas em locais autorizados. Nunca jogue no lixo comum.",
    //   icon: require("../assets/agrotoxicos.png"),
    },
  ];

  return (
    <ScrollView className="flex-1 bg-[#F9F9F9] px-5 pt-6">
      <Text className="text-2xl font-bold text-gray-800 mb-2">
        Você sabe onde jogar isso?
      </Text>

      <Text className="text-gray-600 mb-6 leading-relaxed">
        Nem todo resíduo pode ser jogado no lixo comum ou na reciclagem.
        Alguns merecem uma atenção especial, como pilhas, medicamentos,
        produtos hospitalares e agrotóxicos.  
        Veja como descartar corretamente esses itens.
      </Text>

      {/* Cards */}
      {cards.map((item, index) => (
        <View key={index} className="cardContainer">
          {/* <Image source={item.icon} className="w-20 h-20 mb-3" /> */}
          <Text className="cardTitle">{item.title}</Text>
          <Text className="cardText">{item.text}</Text>
        </View>
      ))}

      <View className="h-10" />
    </ScrollView>
  );
}
