import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./componentes/MenuSuperior";
import Footer from "./componentes/Rodape"


// páginas
import Home from "./paginas/Home";

function App() {

 return (
    <Router>
      <div className="min-h-screen flex flex-col overflow-x-hidden">
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
