import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./componentes/MenuSuperior";
import Footer from "./componentes/Rodape"


// páginas
import Home from "./paginas/Home";

function App() {

 return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />

        {/* conteúdo principal muda conforme a rota */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
export default App
