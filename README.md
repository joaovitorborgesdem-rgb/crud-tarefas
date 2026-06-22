# CRUD de Tarefas

API REST para gerenciamento de tarefas construída com Node.js, Express e PostgreSQL.

## Tecnologias

- Node.js
- Express
- PostgreSQL
- dotenv

## Como rodar

1. Clone o repositório
2. Instale as dependências:
```bash
   npm install
```
3. Configure o arquivo `.env`:
DB_HOST=localhost

DB_PORT=5432

DB_NAME=crud_tarefas

DB_USER=postgres

DB_PASSWORD=sua_senha
4. Crie a tabela no PostgreSQL
5. Rode o servidor:
```bash
   node src/app.js
```

## Endpoints

| Método | Rota | Descrição |
|--------|------|-----------|
| POST | /tarefas | Criar tarefa |
| GET | /tarefas | Listar tarefas |
| PUT | /tarefas/:id | Atualizar tarefa |
| DELETE | /tarefas/:id | Deletar tarefa |

## Schema do banco

```sql
CREATE TABLE tarefas (
  id SERIAL PRIMARY KEY,
  titulo VARCHAR(255) NOT NULL,
  descricao TEXT,
  concluida BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```