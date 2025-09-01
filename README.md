# 🚚 Delivery Dashboard

Projeto Angular para gerenciamento de entregas de uma transportadora, com integração a **JSON Server** para simulação de API REST.

---

## 🛠️ Pré-requisitos

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [Angular CLI](https://angular.io/cli)
  ```bash
  npm install -g @angular/cli
  ```

## JSON Server
npm install -g json-server

⚙️ Instalação

## Clone o repositório:

git clone https://github.com/seu-usuario/delivery-dashboard.git
cd delivery-dashboard

## Instale as dependências:

npm install

## Rodando o projeto
1. Rodar a API fake (JSON Server)
json-server --watch db.json --port 3000

API disponível em: http://localhost:3000

Exemplo de endpoint: http://localhost:3000/entregas

2. Rodar o frontend Angular
ng serve

Frontend disponível em: http://localhost:4200