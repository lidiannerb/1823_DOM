const BotaoConclui = () => { //componentes sempre começam com letra maiuscula
    const botaoConclui = document.createElement('button') /*criando um elemento button */

    botaoConclui.classList.add('check-button') //adicionado a classe do CSS ao botaoConclui
    botaoConclui.innerText = 'concluir'//conteudo do texto que será reinderizado no botão(vai aparecer concluir no botao)
    botaoConclui.addEventListener('click', concluirTarefa)/*escutando o evento de click e atribuindo a nova função 
    que foi criada abaixo, de concluir tarefa*/        
    return botaoConclui /*esse botão deve ser colocado dentro da li, que é o elemento criado lá no componente criarTarefa */
}

/*CRIANDO UMA NOVA FUNÇÃO QUE VAI PASSAR UM TRAÇO NA ATIVIDADE QUANDO ELA FOR CONCLUÍDA*/

const concluirTarefa = (evento) =>{
    const botaoConclui = evento.target //target serve para pegar o alvo do evento botaoConclui (saber no que clicou)
    const tarefaCompleta = botaoConclui.parentElement /*essa variável pega o pai do evento botaoConclui, que é a li,
    ou seja, estamos subindo um elemento do  nó do DOM*/
    tarefaCompleta.classList.toggle('done') /* estamos acessando as classes que tem dentro da li através do 
    classList. E dentro desse elemento, executamos o método toggle. Dentro do toggle eu passo a classe do CSS 
    que da o efeito de rabisco (done (tarefa concluída)) / O toggle devolve o booleano verdadeiro ou falso, que será
    se cliquei ou nao no botao*/
}

export default BotaoConclui