import { useState } from "react";
import Palavras from "./components/Palavras";
import Chute from "./components/Chute";
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import palavras from "./components/Palavras";

export default function App() {
  //Jogo.js
  const [contadorErro, setContadorErro] = useState(0); //Number //contador de erros (max 6 erros), tb muda imagem (usa tb em letras e chute)
  const [imagem, setImagem] = useState({ contadorErro }); //Number que altera nome da imagem
  const [underlines, setUnderlines] = useState([]); //palavra escolhida substituida por _
  const [palavraCerta, setPalavraCerta] = useState(""); //Array com uma letra em cada espaco (usa tb em letras e chute)
  const [palavraEscolhida, setPalavraEscolhida] = useState(""); //palavra escolhida aleatoriamente na lista de palavras
  const [letraAtiva, setLetraAtiva] = ""; //Letra sendo testada
  const [divPalavraOculta, setDivPalavraOculta] = useState(""); //container do Jogo com palavra em _
  const [palavraAleatoria, setPalavraAleatoria] = useState(""); //armazena a palavra aleatória designada
  //const [chute, setChute] = useState(""); //chute começa vazio  //usa tb em Chute.js
  const [listaLetrasAcertos, setListaLetrasAcertos] = useState([]); //letras corretas inseridas

  //Letras.js
  const [desabilitar, setDesabilitar] = useState("true"); //habilita e desabilita usando disabled
  //const [contadorErro, setContadorErro] = useState(0); //contador de erros (max 6 erros), tb muda imagem
  const [letraSelecionada, setLetraSelecionada] = useState([]); //letra selecionada pelo jogador
  const [arrayPalavraCerta, setArrayPalavraCerta] = useState([]); //Palavra aleatoria com letras separadas
  const [cor, setCor] = useState("black"); //cor final de apresentaçao do resultado (certo:#27ae60 errado:#ff0000)
  //const [palavraCerta, setPalavraCerta] = useState("") //Array com uma letra em cada espaco (usa tb em letras e chute)

  //Chute.js
  //const [palavraCerta, setPalavraCerta] = useState("") //Array com uma letra em cada espaco (usa tb em letras e chute)
  const [chute, setChute] = useState(""); //chute começa vazio //usa tb em Jogo.js
  //const [palavraEscolhida, setPalavraEscolhida] = useState(""); //palavra escolhida aleatoriamente na lista de palavras (usa mas ta em jogo)
  //const [divPalavraOculta, setDivPalavraOculta] = useState("");  //container do Jogo com palavra em _ (usa em cima jogo)
  const [textoInput, setTextoInput] = useState("");
  //const [contadorErro, setContadorErro] = useState(0); //contador de erros (max 6 erros), tb muda imagem (usado tb em Letras)
  //const [palavraEscolhida, setPalavraEscolhida] = useState(""); //palavra escolhida aleatoriamente na lista de palavras (usa tb em Jogo.js)
  const [desabilitarInput, setDesabilitarInput] = useState({ desabilitar });
  //const [cor, setCor] = useState("black"); //cor final de apresentaçao do resultado (certo:#27ae60 errado:#ff0000)
  return (
    <>
      <Jogo
        contadorErro={contadorErro}
        setContadorErro={setContadorErro}
        cor={cor}
        setCor={setCor}
        chute={chute}
        setChute={setChute}
        palavraCerta={palavraCerta}
        setPalavraCerta={setPalavraCerta}
        listaLetrasAcertos={listaLetrasAcertos}
        setListaLetrasAcertos={listaLetrasAcertos}
        setDesabilitar={setDesabilitar}
      />
      <Letras
        desabilitar={desabilitar}
        setDesabilitar={setDesabilitar}
        contadorErro={contadorErro}
        setContadorErro={setContadorErro}
        letraSelecionada={letraSelecionada}
        setLetraSelecionada={setLetraSelecionada}
        cor={cor}
        setCor={setCor}
        arrayPalavraCerta={arrayPalavraCerta}
        setArrayPalavraCerta={setArrayPalavraCerta}
        palavraCerta={palavraCerta}
        setPalavraCerta={setPalavraCerta}
        palavraAleatoria={palavraAleatoria}
        setPalavraAleatoria={setPalavraAleatoria}
      />
      <Chute
        cor={cor}
        setCor={setCor}
        chute={chute}
        setChute={setChute}
        textoInput={textoInput}
        setTextoInput={setTextoInput}
        desabilitar={desabilitar}
        setDesabilitar={setDesabilitar}
        palavraCerta={palavraCerta}
        setPalavraCerta={setPalavraCerta}
      />
    </>
  );
}
