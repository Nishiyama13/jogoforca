import { useState } from "react";
import Chute from "./Chute";

export default function Letras({
  contadorErro,
  setContadorErro,
  desabilitar,
  palavraCerta,
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

  function compararLetra(l) {
    alert(`comparar Letra selecionada`);
    const arrayResposta = palavraCerta.join("");
    const letraCerta = arrayResposta.includes(l.value);

    if (letraCerta) {
      l.style.color = "green";
    } else {
      setContadorErro = contadorErro + 1;
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
/*import { useState } from "react";

export default function Letras({
  palavraCerta,
  setPalavraCerta,

  contadorErro,
  setContadorErro,

  letraSelecionada,
  setLetraSelecionada,

  desabilitar,

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
  const arrayResposta = palavraCerta.join("");
  const letraCerta = arrayResposta.includes(letraSelecionada);

  function compararLetra() {
    alert(`comparar Letra selecionada`);

    if (letraCerta) {
     ;
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
*/
