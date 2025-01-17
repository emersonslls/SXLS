const bcrypt = require('bcrypt');
const db = require('../Config/Bd');

exports.register = (req, res) => {
  const { nome, email, telefone, senha } = req.body;

  // Verifica se o e-mail já está em uso
  const checkQuery = 'SELECT * FROM usuarios WHERE email = ?';
  db.query(checkQuery, [email], (err, results) => {
    if (err) return res.status(500).json({ error: 'Erro no servidor.' });
    if (results.length > 0) return res.status(400).json({ error: 'E-mail já está em uso.' });

    // Hash da senha
    bcrypt.hash(senha, 10, (err, hash) => {
      if (err) return res.status(500).json({ error: 'Erro ao gerar hash da senha.' });

      // Inserção no banco
      const insertQuery = `
        INSERT INTO usuarios (nome, email, telefone, senha_hash)
        VALUES (?, ?, ?, ?)
      `;
      db.query(insertQuery, [nome, email, telefone, hash], (err) => {
        if (err) return res.status(500).json({ error: 'Erro no servidor.' });
        res.status(201).json({ message: 'Usuário registrado com sucesso!' });
      });
    });
  });
};
