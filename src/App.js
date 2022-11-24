import Jogo from "./Jogo";
import Letras from "./Letras";

function App() {
  return (
    <>
      <main>
        <Jogo />
        <Letras />
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
