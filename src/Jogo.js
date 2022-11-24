import { useState } from "react";
export default function Jogo(props) {
  const [foto, setFoto] = useState("/assets/forca0.png");
  const [status, setStatus] = useState("ativo");

  const palavraEscolhida = "puxadalista";
  return (
    <>
      <div className="containerGame">
        <div className="esquerdaContainer">
          <img
            data-test="game-image"
            className={`imagemForca ${status}`}
            src={foto}
            alt="forca 0"
          />
        </div>
        <div className="direitaContainer">
          <button data-test="choose-word" className="botaoEscolher">
            Escolher Palavra
          </button>
          <div
            className="palavra"
            data-test="word"
            data-answer={palavraEscolhida}
          >
            _ _ _ _ _ _ _ _ _ _
          </div>
        </div>
      </div>
    </>
  );
}
