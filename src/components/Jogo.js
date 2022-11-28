import { useState } from "react";
import palavras from "./Palavras";

export default function Jogo({
  palavraCerta,
  setPalavraCerta,

  contadorErro,
  setContadorErro,

  cor,
  setCor,

  chute,
  setChute,

  imagem,
  setImagem,

  arrayPalavraCerta,
  setArrayPalavraCerta,

  divPalavraOculta,
  setDivPalavraOculta,

  listaLetrasAcertos,
  setListaLetrasAcertos,

  setDesabilitar,
}) {
  let comparador = () => Math.random() - 0.5;
  const listaPalavrasAleatorias = palavras.sort(comparador);
  setPalavraCerta = listaPalavrasAleatorias[0];

  function geradorDePalavras() {
    //logica de escolher uma palavras

    arrayPalavraCerta = palavraCerta.split(""); //transforma a String em Array //depois .join('') transforma array em string sem espaco
    setArrayPalavraCerta(arrayPalavraCerta);
  }

  function iniciarJogo() {
    alert("iniciou a partida!");

    setContadorErro(0); //limpa o contador de erros
    setImagem(contadorErro); //coloca imagem inicial se contadorErro(0)
    setDesabilitar(false); //habilita o teclado, input e botao de chute

    divPalavraOculta(
      <div className="palavra" data-test="word" style={{ color: cor }}>
        {listaLetrasAcertos.join(" ")}
      </div>
    );

    geradorDePalavras(); //chama funcao que escolhe uma palavra da lista em Palavras.js
  }

  return (
    <>
      <div className="containerGame">
        <div className="esquerdaContainer">
          <img
            data-test="game-image"
            className={"imagemForca"}
            src={`./assets/forca${imagem ? contadorErro : contadorErro}.png`}
            alt="forca"
          />
        </div>
        <div className="direitaContainer">
          <button
            onClick={iniciarJogo}
            data-test="choose-word"
            className="botaoEscolher"
          >
            Escolher Palavra
          </button>
          <div className="palavra" data-answer={palavraCerta}>
            {divPalavraOculta}
          </div>
        </div>
      </div>
    </>
  );
}
