# EP3 - Browser History

## Problem Statement

You have a browser of one tab where you start on the `homepage` and you can visit another `url`, get back in the history number of `steps` or move forward in the history number of `steps`.

Implement the following operations on your `BrowserHistory` object:

* `BrowserHistory(string homepage)` - Initializes the object with the `homepage` of the browser.
* `void visit(string url)` - Visits `url` from the current page. It clears up all the forward history.
* `string back(int steps)` - Move `steps` back in history. If you can only return `x` steps in the history and `steps > x`, you will return only `x` steps. Return the current `url` after moving back in history at most `steps`.
* `string forward(int steps)` - Move `steps` forward in history. If you can only forward `x` steps in the history and `steps > x`, you will forward only `x` steps. Return the current `url` after moving forward in history at most `steps`.

Hint: You can use your doubly-linked list from the previous exercise.

## How to submit your solution

Clone this repository and create a new branch for you. Then, create a folder with your name and add your solution to it. You can use any language you like. When you're ready, push your new branch and submit a PR to add your solution to the main branch and ask a colleague to review it.

All solutions will be available to everyone once they are submitted. It's up to you, but highly recommended, to give it a try before looking at any other solutions.

---

# EP3 - Histórico do Navegador

## Enunciado

Você está implementando um navegador de apenas uma aba, em que você começa na `homepage` e pode visitar outra `url` e navegar para trás ou para frente no histórico um número arbitrário de passos (`steps`).

Implemente as seguintes operações no seu objeto `BrowserHistory`:

* `BrowserHistory(string homepage)` - Inicializa o objeto com a `homepage` do navegador.
* `void visit(string url)` - Visita a `url` a partir da página atual. Limpa todo o histórico pra frente.
* `string back(int steps)` - Anda `steps` passos para trás no histórico. Se você só pode retornar `x` passos no histórico e `steps > x`, você só deve retornar `x` passos. Retorne a `url` atual após retornar no histórico.
* `string forward(int steps)` - Anda `steps` passos para frente no histórico. Se você só pode avançar `x` passos no histórico e `steps > x`, você só deve avançar `x` passos. Retorne a `url` atual após avançar no histórico.

Dica: Você pode utilizar sua implementação de lista duplamente ligada do exercício anterior.

## Como submeter sua solução

Clone esse repositório e crie uma branch para você. Após isso, crie uma pasta com o seu nome e adicione a sua solução nela. Você pode usar a linguagem que preferir. Quando tudo estiver pronto, faça um push da sua nova branch e envie uma PR para adicionar a sua solução ao branch main e peça a um colega para revisar.

Todas as soluções estarão visíveis para todos assim que forem submetidas. É sua responsabilidade (mas altamente recomendado) se assegurar de tentar sua própria solução antes de olhar outras.
