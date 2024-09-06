# **Relatório Técnico - Testes de Cypress em Aplicação React**

## **Introdução**
Este relatório descreve a implementação e execução de testes automatizados em uma aplicação React utilizando **Cypress**. A aplicação inclui duas funcionalidades principais:
- **To-Do List**: Permite adicionar e verificar itens em uma lista.
- **Calculadora**: Realiza operações aritméticas simples.

Os testes foram desenvolvidos seguindo o ciclo de desenvolvimento orientado a testes (TDD).

## **Objetivos**
- Implementar uma aplicação React com duas páginas principais: **To-Do List** e **Calculadora**.
- Escrever testes end-to-end com **Cypress** para verificar a funcionalidade dessas páginas.
- Fornecer um guia completo para rodar a aplicação e executar os testes localmente.

## **Estrutura do Projeto**
```plaintext
C:\Users\Inteli\Documents\GitHub\ponderada-computacao-cypress-react-tests-es09-s5
├── prints                                   # Capturas de tela dos testes
├── src
│   ├── cypress                              # Diretório Cypress
│   │   └── e2e                              # Testes end-to-end
│   │      └── react-demo.cy.js              # Testes Cypress
│   ├── todo-e-calculadora-react             # Aplicação React (To-Do e Calculadora)
│       └── src
│           ├── assets                       # Recursos visuais
│           ├── App.tsx                      # Arquivo principal com rotas
│           ├── Calculadora.tsx              # Componente da calculadora
│           ├── ToDo.tsx                     # Componente de To-Do List
│           ├── index.tsx                    # Ponto de entrada da aplicação React
│           └── vite.config.ts               # Configuração do Vite
```

## **Tecnologias Utilizadas**
- **React**: Biblioteca para criação de interfaces de usuário.
- **Cypress**: Ferramenta para testes end-to-end.
- **React Router**: Para o gerenciamento de rotas na aplicação.
- **Vite**: Ferramenta de build para desenvolvimento rápido.

## **Passo a Passo para Executar a Aplicação**

### 1. Pré-requisitos
Certifique-se de que o **Node.js** esteja instalado em sua máquina. Para verificar a instalação, execute:
```bash
node -v
```

### 2. Clonar o Repositório
Clone o repositório para a sua máquina local. Execute o comando abaixo no terminal:
```bash
git clone https://github.com/seu-usuario/ponderada-computacao-cypress-react-tests-es09-s5.git
```

### 3. Instalar as Dependências
Navegue até o diretório clonado e instale todas as dependências do projeto (incluindo o **Vite** e o **Cypress**):
```bash
cd ponderada-computacao-cypress-react-tests-es09-s5/src/todo-e-calculadora-react
npm install
```

### 4. Rodar o Servidor de Desenvolvimento
Após instalar as dependências, inicie o servidor de desenvolvimento para rodar a aplicação localmente. Use o seguinte comando:
```bash
npm run dev
```
A aplicação estará disponível no endereço padrão:
```
http://localhost:5173
```

Agora, você pode acessar as funcionalidades:
- **To-Do List**: Acesse `http://localhost:5173/todo`
- **Calculadora**: Acesse `http://localhost:5173/calculadora`

## **Passo a Passo para Rodar os Testes com Cypress**

### 1. Abrir o Cypress no Modo Interativo
Para executar os testes em modo interativo, abra uma nova janela do terminal, navegue até o diretório `src` do projeto e execute o seguinte comando:
```bash
cd ../cypress
npx cypress open
```
Na interface gráfica que abrir, selecione o teste `react-demo.cy.js` dentro da pasta `e2e`.

### 2. Executar o Cypress em Modo Headless
Se preferir executar os testes em modo headless (sem interface gráfica), use o comando:
```bash
npx cypress run --browser chrome --spec './src/cypress/e2e/react-demo.cy.js'
```

## **Testes Implementados**

### **Teste 1: To-Do List**
Este teste verifica a funcionalidade de adicionar itens a uma lista de tarefas na rota `/todo`.

```js
describe('React todo example', () => {
  it('Should add and verify todo list', () => {
    cy.visit('http://localhost:5173/todo');
    cy.get('#new-todo').type("My first todo item");
    cy.contains('Add Todo').click();
    cy.get('#new-todo').type("My second todo item");
    cy.contains('Add Todo').click();
    cy.get('ul > li').eq(0).should('have.text', 'My first todo item');
    cy.get('ul > li').eq(1).should('have.text', 'My second todo item');
  });
});
```

### **Teste 2: Calculadora**
Este teste verifica a operação de soma na rota `/calculadora`.

```js
describe('React calculator example', () => {
  it('Should validate addition operation', () => {
    cy.visit('http://localhost:5173/calculadora');
    cy.get('button').contains('7').click();
    cy.get('button').contains('+').click();
    cy.get('button').contains('9').click();
    cy.get('button').contains('=').click();
    cy.get('div[class="component-display"]>div').should('have.text', '16');
  });
});
```

## **Resultados Esperados**
- **Teste To-Do List**: O teste deve passar se os itens forem corretamente adicionados e exibidos na lista.
- **Teste Calculadora**: O teste deve passar se a operação de soma for realizada corretamente.

## **Prints dos testes**
![Resultado dos Testes](./prints/Screenshot%202024-09-06%20184424.png) 

![Resultado dos Testes](./prints/Screenshot%202024-09-06%20184434.png) 