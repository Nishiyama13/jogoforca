import Palavras from "./Palavras";
import Chute from "./Chute";
import Jogo from "./Jogo";
import Letras from "./Letras";

function App() {
  const listaImagem = [
    {
      imagem: "/assets/forca0.png",
      status: "ativo",
    },
    {
      imagem: "/assets/forca1.png",
      status: "desativo",
    },
    {
      imagem: "/assets/forca2.png",
      status: "desativo",
    },
    {
      imagem: "/assets/forca3.png",
      status: "desativo",
    },
    {
      imagem: "/assets/forca4.png",
      status: "desativo",
    },
    {
      imagem: "/assets/forca5.png",
      status: "desativo",
    },
    {
      imagem: "/assets/forca6.png",
      status: "desativo",
    },
  ];

  return (
    <>
      <Jogo />
      <Letras />
      <Chute />
    </>
  );
}

export default App;
