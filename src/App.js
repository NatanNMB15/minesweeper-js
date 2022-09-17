import React from "react";
import Board from "./components/Board";
import StyledHeading from "./components/StyledHeading";

function App() {
  return (
    <div>
      <StyledHeading>Minesweeper</StyledHeading>
      <Board />
      <StyledHeading>
        Grupo: Natan de Macedo Barbosa, Ederson dos Santos Palma, Rodrigo Souza
        Warzak
      </StyledHeading>
    </div>
  );
}

export default App;
