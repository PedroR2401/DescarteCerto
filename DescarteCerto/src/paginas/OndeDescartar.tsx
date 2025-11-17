// import React from "react";
import "./css/OndeDescartar.css";

// import Pilhas from "../images/pilhas.png";
// import Medicamentos from "../images/medicamentos.png";
// import Oleo from "../images/oleo.png";
// import Eletro from "../images/eletro.png";
// import Lampadas from "../images/lampadas.png";
// import Agrotoxicos from "../images/agrotoxicos.png";
// import Moveis from "../images/moveis.png";
// import Roupas from "../images/roupas.png";
// import Limpeza from "../images/limpeza.png";

export default function OndeDescartar() {
  return (
    <div className="OndeDescartarPagina">
      <section className="OD-Header">
        <h1 className="OD-Titulo">Você sabe onde descartar isso?</h1>
        <p className="OD-Descricao">
          Nem todo resíduo pode ser jogado no lixo comum ou na reciclagem. Alguns merecem atenção especial, como pilhas, medicamentos, óleo de cozinha, eletrônicos e produtos químicos.
        </p>
      </section>

      <section className="OD-Cards">
        <div className="OD-Card">
          {/* <img src={Pilhas} alt="Pilhas" /> */}
          <h3>Pilhas e baterias</h3>
          <p>Devem ser descartadas em pontos de coleta específicos em lojas e mercados.</p>
        </div>

        <div className="OD-Card">
          {/* <img src={Medicamentos} alt="Medicamentos" /> */}
          <h3>Medicamentos</h3>
          <p>Farmácias e postos de saúde possuem coletores para medicamentos vencidos.</p>
        </div>

        <div className="OD-Card">
          {/* <img src={Oleo} alt="Óleo de cozinha" /> */}
          <h3>Óleo de cozinha</h3>
          <p>Nunca descarte óleo no ralo. Entregue em pontos especializados para reciclagem.</p>
        </div>

        <div className="OD-Card">
          {/* <img src={Eletro} alt="Eletrônicos" /> */}
          <h3>Eletroeletrônicos</h3>
          <p>Devem ser descartados em pontos de coleta de lixo eletrônico ou ecopontos.</p>
        </div>

        <div className="OD-Card">
          {/* <img src={Lampadas} alt="Lâmpadas" /> */}
          <h3>Lâmpadas</h3>
          <p>Leve para estabelecimentos que recolhem lâmpadas fluorescentes.</p>
        </div>

        <div className="OD-Card">
          {/* <img src={Agrotoxicos} alt="Agrotóxicos" /> */}
          <h3>Embalagens de agrotóxicos</h3>
          <p>Devem ser lavadas e entregues em pontos de coleta autorizados.</p>
        </div>
      </section>

      <section className="OD-Outros">
        <div className="OD-Card">
          {/* <img src={Moveis} alt="Móveis" /> */}
          <h3>Móveis e estofados</h3>
          <p>Solicite retirada com agendamento ou entregue em ecopontos.</p>
        </div>

        <div className="OD-Card">
          {/* <img src={Roupas} alt="Roupas" /> */}
          <h3>Calçados e roupas</h3>
          <p>Doe ou entregue em caixas de coleta destinadas à reutilização.</p>
        </div>

        <div className="OD-Card">
          {/* <img src={Limpeza} alt="Produtos químicos" /> */}
          <h3>Produtos de limpeza</h3>
          <p>Devem ser entregues em pontos específicos para resíduos perigosos.</p>
        </div>

      <section className="OD-Info">
        <h2>Pontos de coleta perto de você</h2>
        <p>Use nosso aplicativo para encontrar o ponto de descarte mais próximo.</p>
      </section>

      </section>
    </div>
  );
}
