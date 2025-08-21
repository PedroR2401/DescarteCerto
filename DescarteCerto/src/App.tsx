import './App.css'

import Header from "./componentes/MenuSuperior";
import Footer from "./componentes/Rodape"

function App() {

  return (
    <>
          <div className="flex flex-col min-h-screen">
      <Header />

      <Footer />
    </div>
    </>
  )
}

export default App
