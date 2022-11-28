export default function Letras() {
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

  return (
    <>
      <div className="teclado">
        {alfabeto.map(l => (
          <button
            data-test="letter"
            className="tecla selecionado"
            disabled="disabled"
          >
            {l}
          </button>
        ))}
      </div>
    </>
  );
}
