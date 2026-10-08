import Titulo from "./components/Titulo"
import Aluno from "./components/Aluno"
import Nota from "./components/Nota"
import Produto from "./components/Produto"

function App() {
  return (
    <>
      <Titulo />
      <Aluno nome="Carlos" turma="DS" />
      <Aluno nome="Ana" turma="DS" />
      <Aluno nome="Pedro" turma="DS" />
      <Nota disc="React" nota={8.5} />
      <Nota nota={9.5} />
      <Nota nota={10} />
      <Produto
        nome="Teclado Mecânico"
        desc="Teclado com iluminação RGB"
        pre={250}
        disponivel={true}
      />
      <button>Comprar</button>
      <Produto
        nome="Mouse"
        desc="Rosa da Hello Kit"
        pre={50}
        disponivel={true}
      />
      <button>Comprar</button>
      <Produto
        nome="Celular"
        desc="Rosa da Xuxa"
        pre={49.99}
        disponivel={true}
      />
      <button>Comprar</button>
      <Produto
        nome="Fone"
        desc="Bluetooth rosa"
        pre={60}
        disponivel={true}
      />
      <button>Comprar</button>
    </>
  )
}

export default App
