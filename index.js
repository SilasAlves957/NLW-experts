const perguntas = [
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "var myVar",
        "let myVar",
        "const myVar",
      ],
      correta: 2
    },
    {
      pergunta: "O que o método console.log() faz em JavaScript?",
      respostas: [
        "Exibe uma mensagem de erro na tela",
        "Imprime mensagens no console do navegador ou do ambiente de execução",
        "Modifica o valor de uma variável",
      ],
      correta: 1
    },
    {
      pergunta: "Como você declara uma função em JavaScript?",
      respostas: [
        "function myFunction() {}",
        "def myFunction() {}",
        "var myFunction = () => {}",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a forma correta de acessar o primeiro elemento de um array em JavaScript?",
      respostas: [
        "array[0]",
        "array.first()",
        "array.getElement(0)",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do operador === em JavaScript?",
      respostas: [
        "Compara dois valores e verifica se são do mesmo tipo e valor",
        "Atribui um valor a uma variável",
        "Compara dois valores e verifica se são do mesmo tipo",
      ],
      correta: 0
    },
    {
      pergunta: "Como você pode adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "array.addEnd(element)",
        "array.push(element)",
        "array.append(element)",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o resultado da expressão 2 + '2' em JavaScript?",
      respostas: [
        "4",
        "'22'",
        "22",
      ],
      correta: 1
    },
    {
      pergunta: "O que o método parseInt() faz em JavaScript?",
      respostas: [
        "Retorna o valor inteiro de uma string",
        "Remove os espaços em branco de uma string",
        "Converte uma string em letras minúsculas",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a estrutura de controle utilizada para executar um bloco de código repetidamente em JavaScript?",
      respostas: [
        "if...else",
        "for loop",
        "switch",
      ],
      correta: 1
    },
    {
      pergunta: "O que o operador % faz em JavaScript?",
      respostas: [
        "Divide dois números e retorna o resto da divisão",
        "Multiplica dois números",
        "Subtrai um número de outro",
      ],
      correta: 0
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add (item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      quizItem.querySelector('dl').appendChild(dt)
  
  
    }
  
  
    quizItem.querySelector('dl dt').remove()
  
  
    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }
  