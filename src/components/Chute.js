import { useState } from "react";

/*usar para transformar palavra em array de letras
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"
*/
export default function Chute({
  palavraCerta,
  setPalavraCerta,

  chute,
  setChute,

  cor,
  setCor,

  textoInput,
  setTextoInput,

  desabilitar,
  setDesabilitar,

  contadorErro,
  setContadorErro,

  palavraEscolhida,

  desabilitarInput,
  setDesabilitarInput,

  setImagem,
  setPalavraAleatoria,
}) {
  function conferirChute() {
    if (textoInput === palavraCerta) {
      setCor = "#27ae60";
    } else {
      setCor = "#ff0000";
      setContadorErro(0); //Zera os erros
      setImagem(0); //volta para a primeira imagem sem corpo
      setPalavraAleatoria(""); //limpa a palavra aleatoria escolhida
    }
  }

  function chutar() {
    alert("chutou!");
    setDesabilitar(false);
    setChute([...chute, textoInput]);
    setTextoInput("");

    conferirChute(); //chama funcao para conferir chute
  }

  return (
    <>
      <div className="containerResposta">
        <p>Já sei a palavra!</p>
        <input
          placeholder="Digite a palavra..."
          className="inputPalavra"
          disabled={desabilitar}
          data-test="guess-input"
          type="text"
          name="input"
          onChange={e => setChute(e.target.value)}
          value={textoInput}
        ></input>
        <button
          className="botaoChute"
          data-test="guess-button"
          disabled={desabilitar}
          onClick={chutar}
        >
          Chutar!
        </button>
      </div>
    </>
  );
}
