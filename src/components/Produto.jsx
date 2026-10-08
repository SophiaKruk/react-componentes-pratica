function Produto(props) {

  return (
    <>
    <h4>Nome: {props.nome}</h4>
    <h4>Descrição: {props.desc}</h4>
    <h4>Preço: {props.pre}</h4>
    <h4>{props.disponivel? "Disponível" : "Indisponível"}</h4>
    </>
  )
}

export default Produto