export default function Chute(props) {
  return (
    <>
      <div className="containerResposta">
        <p>Já sei a palavra!</p>
        <input
          className="inputPalavra"
          data-test="guess-input"
          type="text"
          name="input"
          value="Digite a palavra..."
        ></input>
        <button className="botaoChute" data-test="guess-button">
          Chutar!
        </button>
      </div>
    </>
  );
}
