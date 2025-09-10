export default function Home() {
 return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-32 py-10 space-y-12">
      
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1 text-center md:text-left space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            Bem vindo! Conheça nosso projeto
          </h1>
          <p className="text-gray-600 leading-relaxed">
            O Descarte Certo é uma iniciativa dedicada a conscientizar a população sobre o 
            descarte correto do lixo e a conectar pessoas que precisam com aquelas que desejam doar, 
            promovendo uma cidade mais solidária e sustentável.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Acreditamos que pequenas atitudes geram grandes mudanças. Junte-se a nós nesse movimento!
          </p>
        </div>

        {/* Logo na lateral */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img 
            src="/logo.png" 
            alt="Logo Descarte Certo" 
            className="w-40 md:w-56 rotate-12"
          />
        </div>
      </section>

      {/* Bloco Destacado */}
      <section className="bg-green-100 rounded-2xl shadow-md px-6 py-8 text-center md:text-left w-full">
        <h2 className="text-xl md:text-2xl font-semibold text-green-800 mb-2">
          Descarte Inteligente, Planeta Agradece
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Nosso planeta está sofrendo com o descarte incorreto de resíduos. 
          Tornando os lixos úteis novamente, evitamos a poluição e colaboramos para um futuro mais sustentável. 
          Faça parte dessa mudança e ajude a construir um mundo melhor.
        </p>
      </section>

      {/* Seção Texto + Imagem */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 w-full">
        {/* Imagem */}
        <div className="flex-1 flex justify-center">
          <img 
            src="/reciclagem.png" 
            alt="Pessoa reciclando" 
            className="w-56 md:w-72"
          />
        </div>

        {/* Texto */}
        <div className="flex-1 text-center md:text-left space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">
            Afinal, por que reciclar?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Reciclar não é só uma opção, é uma necessidade para o futuro do nosso planeta. 
            O simples ato de separar resíduos pode reduzir a poluição, economizar recursos 
            e transformar nossa cidade em um lugar mais sustentável.
          </p>
        </div>
      </section>
      {/* Seção: Benefícios */}
<section id="beneficios-descarte" className="px-6 md:px-16 lg:px-32 py-16">
  <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10">
    Benefícios do Descarte Correto
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="p-6 bg-green-100 rounded-xl shadow text-center">
      <img src="/empregos.png" alt="Mais empregos" className="w-16 h-16 mx-auto mb-4" />
      <h3 className="font-semibold text-lg text-green-800 mb-2">Mais empregos</h3>
      <p className="text-gray-600">
        A reciclagem contribui para a geração de novos postos de trabalho e desenvolvimento sustentável.
      </p>
    </div>

    <div className="p-6 bg-green-100 rounded-xl shadow text-center">
      <img src="/reduzir.png" alt="Reduzir lixo" className="w-16 h-16 mx-auto mb-4" />
      <h3 className="font-semibold text-lg text-green-800 mb-2">Reduzir lixo</h3>
      <p className="text-gray-600">
        Separar corretamente os resíduos ajuda a reduzir a quantidade de lixo nos aterros sanitários.
      </p>
    </div>

    <div className="p-6 bg-green-100 rounded-xl shadow text-center">
      <img src="/preservar.png" alt="Preservar" className="w-16 h-16 mx-auto mb-4" />
      <h3 className="font-semibold text-lg text-green-800 mb-2">Preservar</h3>
      <p className="text-gray-600">
        A reciclagem contribui para preservar os recursos naturais e proteger o meio ambiente.
      </p>
    </div>
  </div>
</section>

{/* Seção: Diferença entre tipos de lixo */}
<section id="tipos-lixo" className="px-6 md:px-16 lg:px-32 py-16">
  <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">
    Diferença entre lixo orgânico, reciclável e rejeito
  </h2>
  <p className="text-gray-600 leading-relaxed text-justify mb-6">
    Lixo orgânico é composto por restos de alimentos, folhas, cascas de frutas e outros materiais 
    de origem natural. Já o lixo reciclável é formado por materiais como papel, plástico, vidro e metal. 
    Rejeitos são resíduos que não possuem possibilidade de reaproveitamento, como papel higiênico, 
    fraldas descartáveis e alguns tipos de embalagens contaminadas.
  </p>

  <div className="flex justify-center">
    <img src="/lixeiras.png" alt="Tipos de lixo" className="w-full max-w-3xl" />
  </div>
</section>

{/* Seção: O que NÃO vai na coleta seletiva */}
<section id="nao-coleta" className="px-6 md:px-16 lg:px-32 py-16">
  <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">
    O que NÃO vai na coleta seletiva
  </h2>
  <div className="flex flex-col md:flex-row items-center gap-8">
    <div className="flex-1 flex justify-center">
      <img src="/nao.png" alt="Não vai na coleta seletiva" className="w-48 md:w-64" />
    </div>
    <div className="flex-1 text-gray-600 space-y-3">
      <p>
        Nem todos os materiais podem ser reciclados. Alguns exemplos de resíduos que NÃO 
        devem ir para a coleta seletiva:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Papel higiênico, fraldas, absorventes</li>
        <li>Espelhos e lâmpadas</li>
        <li>Isopor muito sujo e contaminado</li>
        <li>Resíduos hospitalares</li>
        <li>Restos de comida misturados com outros materiais</li>
      </ul>
    </div>
  </div>
</section>
{/* Seção: Descarte Consciente */}
<section id="descarte-consciente" className="px-6 md:px-16 lg:px-32 py-16">
  <div className="bg-green-200 rounded-2xl shadow-md p-6 md:p-10 text-center md:text-left">
    <h2 className="text-xl md:text-2xl font-bold text-green-900 mb-4">
      Descarte Consciente: Onde Vai Seu Lixo?
    </h2>
    <p className="text-gray-700 leading-relaxed">
      O lixo simplesmente não “desaparece” quando descartado de forma incorreta, muitas vezes ele acaba 
      poluindo as ruas, entupindo bueiros, contaminando o solo e prejudicando o meio ambiente. 
      Tanto objetos do dia a dia menores como sacolas e garrafas plásticas, quanto objetos maiores 
      como móveis e eletrodomésticos, devem ter sua devida atenção. Afinal, cada ação conta, quando você 
      descarta corretamente você contribui para uma cidade mais limpa, ajuda a preservar o meio ambiente, 
      e ainda pode ajudar outras pessoas por meio da doação.
    </p>
  </div>
</section>
    </div>
  );
}
