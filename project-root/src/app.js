const 


const { Sequelize, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

// Inicialize o Sequelize com a configuração do seu banco de dados
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql', // ou 'postgres', 'sqlite', 'mssql'
});

// Defina o modelo de usuário
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sobrenome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true, // Adiciona as colunas createdAt e updatedAt
  hooks: {
    beforeCreate: async (user) => {
      const salt = await bcrypt.genSalt(10);
      user.senha = await bcrypt.hash(user.senha, salt);
    },
  },
});

// Sincronize o modelo com o banco de dados
sequelize.sync()
  .then(() => {
    console.log('Tabela de usuários criada com sucesso!');
  })
  .catch((error) => {
    console.error('Erro ao criar a tabela de usuários:', error);
  });

module.exports = User;
