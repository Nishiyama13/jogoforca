export default function Chute() {
  return (
    <>
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
    </>
  );
}
