import { useState } from "react";

export default function Letras({
  palavraCerta,
  setPalavraCerta,

  contadorErro,
  setContadorErro,

  letraSelecionada,
  setLetraSelecionada,

  desabilitar,
  setDesabilitar,

  palavraAleatoria,
  setPalavraAleatoria,
  cor,
  setCor,
}) {
  const alfabeto = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const resposta = palavraCerta.join("");
  const letraCerta = resposta.includes(letraSelecionada);
  const arrayResposta = palavraCerta.join("");
  function compararLetra() {
    alert(`comparar Letra selecionada`);

    if (letraSelecionada === `a`) {
      alert(`teste letra a`);
    }
  }
  return (
    <>
      <div className="teclado">
        {alfabeto.map(l => (
          <button
            className="tecla"
            data-test="letter"
            disabled={desabilitar}
            onClick={() => compararLetra(l)}
            id={l}
          >
            {l}
          </button>
        ))}
      </div>
    </>
  );
}
