const express = require('express');
const app = express();

app.use(express.json());

const tarefaRoutes = require('./routes/tarefaRoutes');
app.use('/tarefas', tarefaRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;