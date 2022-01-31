import BotaoConclui from "./componentes/concluiTarefa.js"
import BotaoDeleta from "./componentes/deletaTarefa.js"

    const criarTarefa = (e) => {  //criando um objeto que recebe uma função
    e.preventDefault() //previne o comportamento padrão do formulário que é de enviar dados recarregando a página
    const lista = document.querySelector('[data-list]') //buscando o elemento UL (html)
    const input =  document.querySelector('[data-form-input') //criando uma variável que recebe o input 
    const valor = input.value //criando uma variável que recebe valor do input
    const tarefa = document.createElement('li') //const tarefa esta criando um elemento li
    tarefa.classList.add('task') //ultimo passo (estilizar a li)
    const conteudo = `<p class="content">${valor}</p>` //template strings 
   
    tarefa.innerHTML = conteudo //o conteúdo de tarefa será igual ao conteúdo que está no paragrafo  
    
    tarefa.appendChild(BotaoConclui()) /*criada depois de criar o componente de baixo BotaoConclui, para que o botão 
    já apareça dentro da li quando uma atividade for lançada*/
    tarefa.appendChild(BotaoDeleta()) //inclui BotaoDeleta aqui depois de criar a const dele lá embaixo, linha 65
    lista.appendChild(tarefa) /*penultimo passo: anexa/adiciona um elemento filho dentro de um elemento pai ou seja,
    está recebendo tarefa (que ta criando uma li) e colocando dentro de lista (ul)*/
    input.value = ""  //limpando o input
}
const novaTarefa = document.querySelector('[data-form-button]') /*criando uma constante que recebe o botao */
novaTarefa.addEventListener('click', criarTarefa) /*atribuindo à const novaTarefa o evento de clicar e a tarefa a
ser executada*/


/* => indica que é uma arrow function:
    R. expressão que possui uma sintaxe mais curta quando comparada a uma expressão de função (function expression) 
    o tem seu próprio this, arguments, super ou new.target. Estas expressões de funções são melhor aplicadas para 
    funções que não sejam métodos, e elas não podem ser usadas como construtoras (constructors). */
/* Utilizamos data-attributes no HTML da nossa aplicação para separar responsabilidades entre Javascript e CSS.
    (data-form-input data-form-button)*/
/*createElement = método que cria elementos do DOM */
/*o que faz uma tarefa ficar embaixo da outra quando voce clica em novo item? é o  appendChild, que sempre coloca
    a tarefa no final do nó*/
/* template string = dois acentos graves (alura mais explica) que interpola arquivo html com js. Dentro do 
    parag colocamos uma expressão, no caso uma expressão em js, que é a constante "valor", para isso 
    precisa de ${}*/    
/*Estilizando a li que ta sendo criada: adiciona a classe do CSS (task) que já tinha nesta li, à tarefa, 
    que é a const que cria a lista */ 

/*CRIANDO UM NOVO COMPONENTE PARA A APLICAÇÃO que toda vez que clicar num botão, a atividade vai ficar com um traço
indicando que já foi realizada*/


     /*esses parenteses foram inseridos por úlitmo (ddepois retiramos quando importamos via import defalt ) e 
     fizeram executar toda essa função que inserimos dentro de uma função anônima lá na primeira linha do js, 
     agora a função está dentro do escopo da função anônima (encapsulamos)e não mais no escopo global. 
     Se ficasse dentro de um escopo global, quem inspecionasse a página,teria acesso 
      a formula, o que nao pode acontecer */