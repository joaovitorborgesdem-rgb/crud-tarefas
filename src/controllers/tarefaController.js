const pool = require('../config/db');

const criar = async (req, res) => {
  const { titulo, descricao } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO tarefas (titulo, descricao) VALUES ($1, $2) RETURNING *',
      [titulo, descricao]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

const listar = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM tarefas ORDER BY created_at DESC');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

const atualizar = async (req, res) => {
  const { id } = req.params;
  const { titulo, descricao, concluida } = req.body;
  try {
    const result = await pool.query(
      'UPDATE tarefas SET titulo=$1, descricao=$2, concluida=$3 WHERE id=$4 RETURNING *',
      [titulo, descricao, concluida, id]
    );
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

const deletar = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM tarefas WHERE id=$1', [id]);
    res.status(200).json({ mensagem: 'Tarefa deletada com sucesso' });
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

module.exports = { criar, listar, atualizar, deletar };