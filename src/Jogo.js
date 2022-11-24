import { useState } from "react";
export default function Jogo(props) {
  const [foto, setFoto] = useState("/assets/forca0.png");
  const [status, setStatus] = useState("ativo");

  return (
    <>
      <div className="containerGame">
        <div className="esquerdaContainer">
          <img className={`imagemForca ${status}`} src={foto} alt="forca 1" />
        </div>
        <div className="direitaContainer">
          <button className="botaoEscolher">Escolher Palavra</button>
          <div className="palavra">_ _ _ _ _ _ _ _ _ _</div>
        </div>
      </div>
    </>
  );
}
