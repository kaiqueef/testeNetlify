//TODO:: CRIAR ARQUIVO COM TODAS AS ROTAS E CHAMA-LO NO APP

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="*" element={<div>TESTE 2</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;