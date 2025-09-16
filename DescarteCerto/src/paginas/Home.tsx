import "./css/Home.css";
import LogoSite from "../images/LogoSite.png";




export default function Home() {
  return (
    <div className="PaginaPrincipal">

      {/* Primeiro Section */}
      <section className="PrimeiroSection">
        <div className="PrimeiroBox">
        <div className="PrimeiroTexto">
          <h1 className="PrimeiroTitulo">
            Bem vindo! Conheça nosso projeto
          </h1>
          <p className="PrimeiroDescricao">
           O Descarte Certo é uma iniciativa dedicada a conscientizar a população sobre o descarte
          correto do lixo e conectar pessoas que precisam com aqueles que desejam doar,
          promovendo um ciclo de solidariedade e cuidado com o meio ambiente.
          </p>

          <p className="PrimeiroDescricao">
           Acreditamos que pequenas atitudes geram grandes mudanças. Por isso, precisamos de 
          toda a ajuda possível, para que consigamos uma cidade limpa. Com o nosso aplicativo 
          ficará fácil para os cidadãos encontrarem os locais corretos para o descarte responsável 
          de resíduos e incentivamos a doação de itens que ainda podem ser úteis para outras pessoas. 
            </p>
                    {/* Logo na lateral */}
          <div className="PrimeiroLogo">
          <img 
            src={LogoSite}
            alt="Logo Descarte Certo" 
            className="PrimeiroLogoImg"
          />
        </div>            <br></br>

            <p className="PrimeiroDescricao">
           O que para você não tem mais serventia, pode transformar a vida de alguém. Não jogue fora, doe!
            </p>            <br></br>

            <p className="PrimeiroDescricao">
           Junte-se a nós nessa missão e faça parte da mudança. 
           Vamos construir juntos uma comunidade mais consciente, 
           sustentável e solidária!
            </p>
        </div>
        </div>
      </section>

      {/* Bloco Destacado */}
      <section className="BlocoDestacado">
        <h2 className="BlocoTitulo">
          Descarte Inteligente, Planeta Agradece
        </h2>
        <p className="BlocoTexto">
          Nosso planeta está sofrendo com o descarte incorreto de resíduos. Toneladas de lixo são 
          descartadas em locais inadequados, contaminando rios, solos e afetando a vida de 
          inúmeras espécies. Plásticos invadem oceanos, produtos químicos poluem o ar e 
          montanhas de entulho ocupam espaços que poderiam ser verdes e saudáveis.
          Cada ação conta! Separar corretamente os resíduos e dar destino adequado ao que não 
          usamos é um gesto essencial para preservar nosso futuro. O planeta agradece quando 
          fazemos o descarte certo!

        </p>
      </section>

      {/* Seção Texto + Imagem */}
      <section className="TextoImagem">
        <div className="TextoImagemImg">
          <img 
            src="/reciclagem.png" 
            alt="Pessoa reciclando" 
            className="TextoImagemFoto"
          />
        </div>
        <div className="TextoImagemTexto">
          <h2 className="TextoImagemTitulo">
            Afinal, por que reciclar?
          </h2>
          <p className="TextoImagemDescricao">
           Reciclar é mais do que separar o lixo, 
           é um ato de consciência e solidariedade. 
           Quando descartamos resíduos de forma 
           incorreta, prejudicam os rios, solos e o ar 
           que respiramos. Mas ao dar um novo 
           destino aos materiais recicláveis, 
           reduzimos a poluição e fortalecemos 
           nossa comunidade.
            </p>
        </div>
      </section>

      {/* Benefícios */}
      <section id="beneficios-descarte" className="Beneficios">
        <h2 className="BeneficiosTitulo">Benefícios do Descarte Correto</h2>
        <div className="BeneficiosGrid">
          <div className="BeneficioItem">
            <img src="/empregos.png" alt="Mais empregos" className="BeneficioIcone" />
            <h3 className="BeneficioTitulo">Mais empregos</h3>
            <p className="BeneficioTexto">A reciclagem e a reutilização 
              incentivam a economia
              sustentável, gerando novas 
              oportunidades e fortalecendo 
              a comunidade.</p>
          </div>

          <div className="BeneficioItem">
            <img src="/reduzir.png" alt="Reduzir lixo" className="BeneficioIcone" />
            <h3 className="BeneficioTitulo">Reduzir lixo</h3>
            <p className="BeneficioTexto">Separar corretamente os resíduos ajuda a reduzir a quantidade de lixo nos aterros sanitários.</p>
          </div>

          <div className="BeneficioItem">
            <img src="/preservar.png" alt="Preservar" className="BeneficioIcone" />
            <h3 className="BeneficioTitulo">Preservar</h3>
            <p className="BeneficioTexto">O descarte correto diminui 
              resíduos e poluição. Reciclar 
              dá novos usos aos materiais 
              e contribui para um 
              ambiente mais limpo e 
              sustentável. 

            </p>

            </div>
        </div>
      </section>

      {/* Diferença entre tipos de lixo */}
      <section id="tipos-lixo" className="TiposLixo">
        <h2 className="TiposLixoTitulo">Diferença entre lixo orgânico, reciclável e rejeito</h2>
        <p className="TiposLixoTexto">
          Lixo orgânico é composto por restos de alimentos, folhas, cascas de frutas e outros 
          materiais de origem natural. Ele pode ser reaproveitado por meio da compostagem, 
          transformando-se em adubo para plantas e reduzindo o impacto ambiental.
        </p>

        <p className="TiposLixoTexto">
          Lixo reciclável inclui papel, plástico, vidro e metal. Esses materiais podem ser 
          processados e utilizados na fabricação de novos produtos, diminuindo a necessidade 
          de matéria-prima e ajudando na preservação do meio ambiente.
        </p>

        <p className="TiposLixoTexto">
          Rejeito, por sua vez, é o lixo que não pode ser reaproveitado ou reciclado, como papel 
          higiênico, adesivos e alguns tipos de embalagens. Esse tipo de resíduo acaba sendo 
          destinado aos aterros sanitários.
        </p>

        <p className="TiposLixoTexto">
          Separar corretamente os resíduos é um passo essencial para reduzir o impacto 
          ambiental e contribuir para um mundo mais sustentável e solidário. Recicláveis 
          precisam estar limpos e secos para não contaminar outros materiais.
          </p>

        <div className="TiposLixoImg">
          <img src="/lixeiras.png" alt="Tipos de lixo" className="TiposLixoFoto" />
        </div>
      </section>

      {/* O que NÃO vai na coleta seletiva */}
      <section id="nao-coleta" className="NaoColeta">
        <h2 className="NaoColetaTitulo">O que NÃO vai na coleta seletiva</h2>
        <div className="NaoColetaGrid">
          <div className="NaoColetaImg">
            <img src="/nao.png" alt="Não vai na coleta seletiva" className="NaoColetaFoto" />
          </div>
          <div className="NaoColetaTexto">
            <p>Nem tudo pode ser reciclado na coleta seletiva. 
              Materiais como papel higiênico, fraldas, espelhos, 
              cerâmicas e embalagens de produtos químicos 
              devem ser descartados corretamente no lixo comum. 
              Separar bem os resíduos ajuda a evitar a 
              contaminação e torna a reciclagem mais eficiente. 
              Faça sua parte!
            </p>

            <div className="NaoColetaTexto">
            <p><strong className="Negrito">Lixo orgânico</strong> pode virar adubo por meio da compostagem.<br></br>
              <strong className="Negrito">Materiais recicláveis</strong> como papel, plástico, vidro e 
              metal devem ir para a coleta seletiva e podem ser 
              transformados em novos produtos. <br></br>
              <strong className="Negrito">Rejeitos</strong>, como papel higiênico e adesivos, vão para 
              aterros sanitários, pois não podem ser reaproveitados
            </p>

              </div>
        </div>
        </div>
      </section>

      {/* Descarte Consciente */}
      <section id="descarte-consciente" className="DescarteConsciente">
        <div className="DescarteBox">
          <h2 className="DescarteTitulo">Descarte Consciente: Onde Vai Seu Lixo?</h2>
          <p className="DescarteTexto">
            O lixo simplesmente não “desaparece” quando descartado de forma incorreta, muitas 
            vezes ele acaba poluindo as ruas, entupindo bueiros, contaminando o solo e 
            prejudicando o meio ambiente. Tanto objetos do dia a dia menores como sacolas e 
            garrafas plásticas, quanto objetos maiores como móveis e eletrodomésticos, devem 
            ter sua devida atenção. Afinal, cada ação conta, quando você descarta corretamente 
            você contribui para uma cidade mais limpa, ajuda a preservar o meio ambiente, e 
            ainda pode ajudar outras pessoas por meio da doação. 
          </p>
        </div>
      </section>
    </div>
  );
}
