# VUTTR-Very Useful Tools to Remember

A VUTTR é uma aplicação para gerenciamento de ferramentas, que permite listar, remover e adicionar novas ferramentas. A aplicação foi desenvolvida em ReactJS + Typescript e faz parte da proposta do desafio front-end da plataforma [Bossabox](https://bossabox.com/).

## :book: Sumário

* [Dependências](https://github.com/guilhermeaw/VUTTR#gear-depend%C3%AAncias)
* [Guia de Instalação](https://github.com/guilhermeaw/VUTTR#rocket-guia-de-instala%C3%A7%C3%A3o)
* [Funcionalidades](https://github.com/guilhermeaw/VUTTR#bulb-funcionalidades)

## :gear: Dependências

* [Node](https://nodejs.org/en/) (12.14.0 ou maior)
* [Yarn](https://yarnpkg.com/pt-BR/) ou [NPM](https://www.npmjs.com/)

## :rocket: Guia de instalação

Para rodar a aplicação, é necessário instalar as dependências listadas no tópico [Dependências](https://github.com/guilhermeaw/VUTTR#gear-depend%C3%AAncias) e rodar a [fake-api](https://gitlab.com/bossabox/challenge-fake-api/tree/master) disponibilizada pela equipe da [Bossabox](https://bossabox.com/).
OBS: Neste guia será dado foco na utilização do Yarn

### Como instalar

Clone o repositório:
```
git clone https://github.com/guilhermeaw/VUTTR
```

Navegue até a pasta e instale as dependências:
```
cd VUTTR && yarn install
```

### Executando a aplicação

Iniciar a aplicação:
```
yarn start
```

Compilar e minificar para produção:
```
yarn build
```

### Executando os testes

Executar os testes:
```
yarn test
```

Executar os testes e gerar o coverage
```
yarn test:coverage
```

## :bulb: Funcionalidades

Filtrar ferramentas pelo título:

![Title-Filter](https://i.imgur.com/XnNFcx5.gif)

Filtrar ferramentas pelas tags:

![Tag-Filter](https://i.imgur.com/doUFjRv.gif)

Adicionar novas ferramentas:

![Add-tool](https://i.imgur.com/P1CcRlD.gif)

Remover ferramentas:

![Remove-tool](https://i.imgur.com/fUj6Qc8.gif)

---

Feito com 🧡
