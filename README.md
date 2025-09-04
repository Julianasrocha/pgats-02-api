# API de Transferências e Usuários

Esta API permite realizar login, registro de usuários, consulta de usuários e transferências de valores, com regras básicas de negócio. O banco de dados é em memória, ideal para aprendizado de testes e automação de APIs.

## Instalação

1. Clone o repositório ou copie os arquivos para seu ambiente.
2. Instale as dependências:
   ```powershell
   npm install express swagger-ui-express
   ```

## Estrutura de Diretórios

- `controller/`: Lógica dos endpoints
- `service/`: Regras de negócio
- `model/`: Dados em memória
- `app.js`: Configuração dos middlewares e rotas
- `server.js`: Inicialização do servidor
- `swagger.json`: Documentação Swagger

## Como Executar

```powershell
node server.js
```

Acesse a documentação Swagger em [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

## Endpoints

- `POST /register`: Registra novo usuário
- `POST /login`: Realiza login
- `GET /users`: Lista usuários
- `POST /transfer`: Realiza transferência
- `GET /transfers`: Lista transferências
- `GET /api-docs`: Documentação Swagger

## Regras de Negócio

- Login exige usuário e senha
- Não é permitido registrar usuários duplicados
- Transferências acima de R$ 5.000,00 só podem ser feitas para favorecidos

## Testes

Para automação de testes, importe o `app.js` em seu script de testes (ex: com Supertest) sem iniciar o servidor.

---

API desenvolvida para fins educacionais.
