import { useState } from "react";

export default function Chute(props) {
  const [chute, setChute] = useState([]);
  function testarChute() {
    //logica de comparacao
    setChute("");
  }

  return (
    <>
      <div className="containerResposta">
        <p>Já sei a palavra!</p>
        <input
          placeholder="Digite a palavra..."
          className="inputPalavra"
          data-test="guess-input"
          type="text"
          name="input"
          onChange={e => setChute(e.target.value)}
          value={chute}
        ></input>
        <button
          className="botaoChute"
          data-test="guess-button"
          onClick={() => testarChute()}
        >
          Chutar!
        </button>
      </div>
    </>
  );
}
