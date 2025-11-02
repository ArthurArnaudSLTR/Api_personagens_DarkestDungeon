API de Personagens (Darkest Dungeon)

Uma API REST em Node.js e TypeScript para gerenciar dados de personagens, com foco nas classes e habilidades inspiradas no jogo Darkest Dungeon.

A documentação interativa da API é fornecida via Swagger UI.

🚀 Tecnologias
Linguagem: TypeScript

Ambiente: Node.js

Framework: Express

Documentação: Swagger UI / OpenAPI 3.0

🛠️ Como Iniciar o Projeto
Siga estes passos para clonar o repositório, instalar as dependências e rodar o servidor localmente.

1. Clonar o Repositório
git clone git clone https://github.com/ArthurArnaudSLTR/Api_personagens_DarkestDungeon.git

2. Instalar Dependências
Execute este comando na pasta raiz do projeto (onde está o package.json):

npm install

3. Rodar a API
Como este projeto usa TypeScript, você precisará do ts-node. O comando para rodar o servidor é:

# Executa o arquivo index.ts
npx ts-node src/index.ts

O servidor será inicializado na porta 3005.

A API subiu na porta 3005
Documentação do Swagger disponível em: http://localhost:3005/api-docs

📝 Documentação da API (Swagger)
Todos os endpoints (rotas) da API podem ser explorados e testados diretamente no seu navegador.

Acesse:
http://localhost:3005/api-docs

Endpoints Principais

GET

/personagens

Lista todos os personagens e suas habilidades.

POST

/personagens

Cria um novo personagem.

PUT

/personagens/:nome

Atualiza as informações de um personagem existente.

DELETE

/personagens/:nome

Exclui um personagem específico.

👤 Autor
[Arthur Arnaud]
