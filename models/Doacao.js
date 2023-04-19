const { Model, DataTypes } = require('sequelize');

class Doacao extends Model {}

Doacao.init({
    doador: {
        type: DataTypes.STRING,
        allowNull: false
    },
    valor: {
        type: DataTypes.NUMBER,
        allowNull: false
    }
}, 
{
    sequelize, 
    modelName:'doacao', 
    tableName: 'doacoes'
});

module.exports = Doacao;