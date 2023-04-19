const { Model, DataTypes } = require('sequelize');
const Doacao = require('./Doacao');

class Ong extends Model {}

Ong.init({
    cnpj:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    data_criacao:{
        type: DataTypes.DATE,
        allowNull: false
    }
}, 
{
    sequelize, 
    modelName:'ong', 
    tableName: 'ongs'
});

Ong.hasMany(Doacao);
Doacao.belongsTo(Ong);

module.exports = Ong;
