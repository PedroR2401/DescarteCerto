import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./componentes/MenuSuperior";
import Footer from "./componentes/Rodape"


// páginas
import Home from "./paginas/Home";
import OndeDescartar from "./paginas/OndeDescartar";
// import Doacoes from "./paginas/OndeDescartar";
// import Dicas from "./paginas/OndeDescartar";
// import Aplicativo from "./paginas/OndeDescartar";

function App() {

 return (
    <Router>
      <div className="min-h-screen flex flex-col overflow-x-hidden">
        <Header />

        {/* conteúdo principal muda conforme a rota */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/OndeDescartar" element ={<OndeDescartar />} />
            {/* <Route path="/Doacoes" element ={<Doacao />} />
            <Route path="/Dicas" element ={<Dicas />} />
            <Route path="/Aplicativo" element ={<Aplicativo />} /> */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
export default App
