//TODO:: CRIAR ARQUIVO COM TODAS AS ROTAS E CHAMA-LO NO APP

import { BrowserRouter, Routes, Route } from "react-router-dom";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<div>TESTE 2</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
