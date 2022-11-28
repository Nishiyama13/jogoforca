import { useState } from "react";

export default function Chute(props) {
  const [chute, setChute] = useState([]);
  function conferirChute() {
    //ao começar a escrever no place holder o botão tem que ficar valido
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
          disabled="disabled"
          onClick={() => conferirChute()}
        >
          Chutar!
        </button>
      </div>
    </>
  );
}
