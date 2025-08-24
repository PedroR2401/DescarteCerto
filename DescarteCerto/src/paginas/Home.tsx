export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-center text-3xl font-bold mb-6">
        Página Inicial
      </h1>

      <p className="mb-4">
        Esse é um conteúdo de teste para a Home. Role para baixo e veja o rodapé no final da página 👇
      </p>

      {/* bloco grande só para simular conteúdo longo */}
      <div className="h-[1500px] bg-gradient-to-b from-green-200 to-green-400 flex items-center justify-center text-xl">
        Área de conteúdo de teste (1500px de altura)
      </div>
    </div>
  );
}
