function Pessoa({nome, idade, profissao, foto}) { //desestruturação - seria props
    return (
        <div>
            <img src={foto} alt="nomeDaPEssoa" />
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissao: {profissao}</p>
        </div>
    )
}

export default Pessoa