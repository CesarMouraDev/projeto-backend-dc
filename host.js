const { Sequelize } = require('sequelize');


//postgresql://postgres.mgbjipcpivtjgncobobr:[YOUR-PASSWORD]@aws-0-us-west-1.pooler.supabase.com:6543/postgres
// Configuração da conexão
const sequelize = new Sequelize('seu_banco_de_dados', 'seu_usuario', 'sua_senha', {
  host: 'localhost',
  dialect: 'postgres',
  dialectModule: require('pg'), // Opcional: explicitamente usa o módulo pg
});

// Testar a conexão
sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  })
  .catch(err => {
    console.error('Não foi possível conectar ao banco de dados:', err);
  });
