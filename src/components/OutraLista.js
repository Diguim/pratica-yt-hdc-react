function OutraLista ({ itens }){
    return (
        <>
            <h3>Lista de coisas boas: </h3>
            {itens.length > 0 ? (
                itens.map((item, index) => (
                    <p key={index}>{item}</p>
                ))) : (
                    <p>NÃO HÁ ITENS NA LISTA</p>
                )
            }
        </>
    )
}

export default OutraLista