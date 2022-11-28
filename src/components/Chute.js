import { useState } from "react";

export default function Chute({
  chute,
  setChute,
  textoInput,
  setTextoInput,
  palavraCerta,
  arrayPalavraCerta,
  setDivPalavraOculta,
}) {
  function conferirChute() {
    if (chute === palavraCerta) {
      //setCor("#27ae60");
      setDivPalavraOculta(
        <div className="palavra" data-test="word" style={{ color: "#27ae60" }}>
          {arrayPalavraCerta}
        </div>
      );
    } else {
      //setCor("#ff0000");
      setDivPalavraOculta(
        <div className="palavra" data-test="word" style={{ color: "#ff0000" }}>
          {arrayPalavraCerta}
        </div>
      );
    }

    function chutar() {
      alert("chutou!");
      //setDesabilitar(true); //desabilita o input apos chute
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
            disabled={false}
            data-test="guess-input"
            type="text"
            name="input"
            onChange={e => setChute(e.target.value)}
            value={textoInput}
          ></input>
          <button
            className="botaoChute"
            data-test="guess-button"
            disabled={false}
            onClick={chutar}
          >
            Chutar!
          </button>
        </div>
      </>
    );
  }
}

/*
import { useState } from "react";
export default function Chute({
  cor,
  setCor,

  palavraCerta,
  setPalavraCerta,

  chute,
  setChute,

  textoInput,
  setTextoInput,

  desabilitar,
  setDesabilitar,

  contadorErro,
  setContadorErro,

  desabilitarInput,
  setDesabilitarInput,

  setImagem,
  setPalavraAleatoria,

  divPalavraOculta,
  setDivPalavraOculta,

  listaPalavrasAleatorias,
  setListaPalavrasAleatorias,
}) {
  function conferirChute() {
    let contador = 0;
    //let arrayPalavraCerta = [];
    //let arrayPalavraCertaEscondida = [];

    //teste mas e pra habilitar direto do inicio do jogo
    //logica de comparacao
    if (textoInput === palavraCerta) {
      setCor("#27ae60");
      setDivPalavraOculta(
        <div className="palavra" data-test="word" style={{ color: cor }}>
          {palavraCerta}
        </div>
      );
    } else {
      setCor("#ff0000");
      let contador = contadorErro; //talvez esteja atrasado
      setContadorErro(0); //Zera os erros
      setImagem(contador); //volta para a primeira imagem sem corpo (sou deveria)
      setPalavraAleatoria(""); //limpa a palavra aleatoria escolhida
      setDivPalavraOculta(
        <div className="palavra" data-test="word" style={{ color: cor }}>
          {palavraCerta}
        </div>
      );
    }

    function chutar() {
      alert("chutou!");
      setDesabilitar(true);
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
            disabled={desabilitarInput}
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
}*/
