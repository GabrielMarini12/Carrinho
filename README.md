# Carrinho

Simulando um carrinho de compras de um e-commerce 🛒

# Tecnologia

- React JS
- TypeScript

# Começando
- Dependência
  - TailwindCss
  - react icon
  - react router dom
  - toaster

- Para rodar a Api dos produtos
  - json-server --watch db.json

- Para executar o projeto
  - npm run dev

# Como usar
- 1 - Ao acessar o projeto, essa é a tela inicial.

![image](https://github.com/GabrielMarini12/Carrinho/assets/101841688/3f438a7a-4932-4130-855f-a1e78b468c52)

- 2 - Ao clicar na foto ou título do produto, você consegue visualizar o detalhe deste produto, com possibilidade de adicioná-lo ao carrinho (sendo redirecionado de forma automática para o carrinho).

![image](https://github.com/GabrielMarini12/Carrinho/assets/101841688/0cd240e5-5a31-414c-becc-8fe06010c77c)

- 3 - Ao clicar no ícone do carrinho, se o carrinho estiver vazio aparecerá:
  - Você terá a opção de retornar para página de produtos clicando no botão ou no ícone do site.

![image](https://github.com/GabrielMarini12/Carrinho/assets/101841688/a9cac970-ac81-43b7-9343-5732d4adab12)

  - 3.1 - Ao clicar no ícone do carrinho, se conter produtos aparecerá:
    - Você aumentar o número de produtos, diminuir, exlcuir... e os valores são recalculados dinamicamente.

  ![image](https://github.com/GabrielMarini12/Carrinho/assets/101841688/7802284a-a536-4710-b92f-7fd5a995c7ab)

  - 3.2 - Toda vez que você adicionar um produto ao carrinho o usuário será notificado.

  ![image](https://github.com/GabrielMarini12/Carrinho/assets/101841688/d0e9489e-3f45-4a66-8b0a-30f60699d489)


# Características

As principais características do aplicativo são:
- Consumir uma Api de produtos externa.
- Utilização de Context Api.
- Exibir os produtos de forma dinâmica.
- Ver detlahes dos produtos.
- Adicionar os produtos ao carrinho.
- Manipular os produtos no carrinho (aumentar quantidade, diminuir e excluir).
- Cálculo feito de forma dinâmica.
