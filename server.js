const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

// Rota raiz da API
app.get('/', (req, res) => {
  res.json({ 
    status: 'online',
    message: 'Axis API rodando com sucesso!'
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Axis rodando na porta ${PORT}`);
});