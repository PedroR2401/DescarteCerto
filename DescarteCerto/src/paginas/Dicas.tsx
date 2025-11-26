import "./css/Dicas.css";

export default function Dicas() {
  return (
    <div className="sust-container">

      <h2 className="sust-titulo">
        Como aplicar a sustentabilidade no seu dia a dia?
      </h2>

      <p className="sust-paragrafo">
        Aplicar a sustentabilidade no dia a dia é mais simples do que parece,
        muitas atitudes simples causam impacto muito positivo no meio ambiente!
        Separar o lixo, reutilizar materiais e economizar água ajudam a construir
        um planeta mais sustentável.
      </p>

      <p className="sust-paragrafo">
        Pensando nisso, nós do projeto Descarte Certo queremos valorizar quem já
        entende a importância de cuidar melhor do seu bairro e da cidade. Por isso,
        selecionamos conteúdos especiais com ideias úteis para você reutilizar itens,
        evitar desperdício e aprender técnicas que podem contribuir com um mundo melhor!
      </p>

      {/* BLOCO 1 */}
      <h3 className="sust-subtitulo">Faça sabão com óleo de cozinha usado</h3>
      <div className="w-full max-w-3xl aspect-video mx-auto">
 <iframe
    className="w-full h-full rounded-xl shadow-lg"
    src="https://www.youtube.com/embed/FsV4gAfIPdM"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>
      <p className="sust-paragrafo">
        Vamos aprender com a Bee da Casa de Manual do Mundo uma forma de reciclar
        óleo de cozinha! Com o óleo a mais girando nas engrenagens do consumo,
        podemos dar um destino útil transformando-o em sabão para usar no dia a dia.
      </p>

      {/* BLOCO 2 */}
      <h3 className="sust-subtitulo">Como fazer tecido com sacola plástica</h3>
      <div className="w-full max-w-3xl aspect-video mx-auto">
 <iframe
    className="w-full h-full rounded-xl shadow-lg"
    src="https://www.youtube.com/embed/fACgvPqhKWw"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
 </div>
      <p className="sust-paragrafo">
        Podemos reciclar sacolas plásticas de supermercado assim como o plástico do
        Thacopy: podemos cortar uma carteira com elas e reutilizar de forma criativa.
        É uma alternativa ótima para dar novo uso aos materiais antes de descartá-los!
      </p>

    </div>
  );
}
