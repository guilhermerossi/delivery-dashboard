# 🚚 Delivery Dashboard

Projeto Angular para gerenciamento de entregas de uma transportadora, com integração a **JSON Server** para simulação de API REST.

---

## 🛠️ Pré-requisitos

- [Node.js](https://nodejs.org/) (versão LTS recomendada)  
- [Angular CLI](https://angular.io/cli)

```bash
npm install -g @angular/cli

JSON Server

npm install -g json-server

⚙️ Instalação

Clone o repositório:

git clone https://github.com/seu-usuario/delivery-dashboard.git
cd delivery-dashboard


Instale as dependências:

npm install

▶️ Rodando o projeto
1️⃣ Rodar a API fake (JSON Server)
json-server --watch db.json --port 3000


API disponível em: http://localhost:3000

Exemplo de endpoint: http://localhost:3000/entregas

2️⃣ Rodar o frontend Angular
ng serve


Frontend disponível em: http://localhost:4200

📂 Estrutura do projeto
src/
 ├── app/
 │    ├── features/        # Componentes e módulos de cada funcionalidade
 │    ├── shared/          # Componentes, pipes e módulos reutilizáveis
 │    └── core/            # Serviços e providers
 ├── assets/               # Imagens, ícones, etc.
 ├── environments/         # Configurações de ambiente
db.json                    # Banco de dados fake do JSON Server

📌 Comandos úteis

Rodar Angular:

ng serve


Rodar Angular em outra porta:

ng serve --port 4300


Build de produção:

ng build --configuration production


Rodar testes unitários:

ng test


Rodar lint (analisar código):

ng lint


Rodar JSON Server:

json-server --watch db.json --port 3000
