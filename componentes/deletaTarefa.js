const BotaoDeleta = () =>{ //componentes sempre começam com letra maiuscula
    const botaoDeleta = document.createElement('button')
    botaoDeleta.innerText = 'deletar'
    botaoDeleta.addEventListener('click', deletarTarefa)
    return botaoDeleta
}

const deletarTarefa = (evento) =>{
    const botaoDeleta = evento.target
     
    const tarefaCompleta = botaoDeleta.parentElement //pegando elemento pai do botaoDeleta que é a li

    tarefaCompleta.remove()

    return botaoDeleta
}

export default BotaoDeleta