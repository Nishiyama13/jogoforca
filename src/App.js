import Jogo from "./Jogo";

function App() {
  return (
    <>
      <main>
        <Jogo />
        <div className="teclado">
          <button className="tecla selecionado" disabled="disabled">
            A
          </button>
          <button className="tecla">B</button>
          <button className="tecla">C</button>
          <button className="tecla">D</button>
          <button className="tecla">E</button>
          <button className="tecla">F</button>
          <button className="tecla">G</button>
          <button className="tecla">H</button>
          <button className="tecla">I</button>
          <button className="tecla">J</button>
          <button className="tecla">K</button>
          <button className="tecla">L</button>
          <button className="tecla">M</button>
          <button className="tecla">N</button>
          <button className="tecla">O</button>
          <button className="tecla">P</button>
          <button className="tecla">Q</button>
          <button className="tecla">R</button>
          <button className="tecla">S</button>
          <button className="tecla">T</button>
          <button className="tecla">U</button>
          <button className="tecla">V</button>
          <button className="tecla">W</button>
          <button className="tecla">X</button>
          <button className="tecla">Y</button>
          <button className="tecla">Z</button>
        </div>
        <div className="containerResposta">
          <p>Já sei a palavra!</p>
          <input
            className="inputPalavra"
            type="text"
            name="input"
            value="Digite a palavra..."
          ></input>
          <button className="botaoChute">Chutar!</button>
        </div>
      </main>
    </>
  );
}

export default App;
