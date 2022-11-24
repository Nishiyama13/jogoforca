export default function Jogo() {
  return (
    <>
      <div className="containerGame">
        <div className="esquerdaContainer">
          <img className="imagemForca" src="/assets/forca3.png" alt="forca 3" />
        </div>
        <div className="direitaContainer">
          <button className="botaoEscolher">Escolher Palavra</button>
          <div className="palavra">_ _ _ _ _ _ _ _ _ _</div>
        </div>
      </div>
    </>
  );
}
