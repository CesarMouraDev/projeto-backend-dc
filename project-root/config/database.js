// config/database.js

const { Sequelize } = require('sequelize');

// URL de conexão fornecido
const DATABASE_URL = 'postgres://postgres.mgbjipcpivtjgncobobr:[YOUR-PASSWORD]@aws-0-us-west-1.pooler.supabase.com:6543/postgres';

// Configuração do Sequelize
const sequelize = new Sequelize(DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  logging: false, // Defina como true se quiser ver logs de SQL
});

// Testar a conexão
sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  })
  .catch(err => {
    console.error('Não foi possível conectar ao banco de dados:', err);
  });

module.exports = sequelize;
