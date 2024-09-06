// Teste de exemplo para adicionar e verificar itens em uma lista de tarefas
describe('React todo example', () => {
  it('Should add and verify todo list', () => {
    // Red: Primeiro escrevi o teste. Espero que ele falhe, pois ainda não implementei a funcionalidade.
    cy.visit('http://localhost:5173/todo'); // Acessa a página da rota 'todo'.

    // Green: Agora implementei a funcionalidade para que o teste passe.
    cy.get('#new-todo').type("My first todo item"); // Digita o primeiro item de tarefa.
    cy.contains('Add Todo').click(); // Clica no botão para adicionar o item à lista.

    cy.get('#new-todo').type("My second todo item"); // Digita o segundo item de tarefa.
    cy.contains('Add Todo').click(); // Clica no botão para adicionar o segundo item à lista.

    // Refactor: Aqui posso melhorar o código ou o teste, mas ele ainda deve passar. Faço asserções para garantir que os itens foram adicionados corretamente.
    cy.get('ul > li').eq(0).should('have.text', 'My first todo item'); // Verifica o texto do primeiro item.
    cy.get('ul > li').eq(1).should('have.text', 'My second todo item'); // Verifica o texto do segundo item.
  });
});

// Teste de exemplo para validar operação de soma em uma calculadora React
describe('React calculator example', () => {
  it('Should validate addition operation', () => {
    // Red: Escrevi o teste para validar a operação de soma, sem ainda implementar a funcionalidade.
    cy.visit('http://localhost:5173/calculadora'); // Acessa a página da rota 'calculadora'.

    // Green: Agora a funcionalidade de soma foi implementada e espero que o teste passe.
    cy.get('button').contains('7').click(); // Clica no botão com o número 7.
    cy.get('button').contains('+').click(); // Clica no botão de adição.
    cy.get('button').contains('9').click(); // Clica no botão com o número 9.
    cy.get('button').contains('=').click(); // Clica no botão de igual para realizar a operação.

    // Refactor: Refatorei o código ou o teste para garantir clareza, mas o teste ainda passa.
    cy.get('div[class="component-display"]>div').should('have.text', '16'); // Verifica se o resultado da soma é 16.
  });
});
