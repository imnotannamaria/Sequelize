module.exports = (sequelize, DataTypes) => {
    
    const Comentarios = sequelize.define(
        'Comentarios',{
            texto: DataTypes.STRING,
        },
        {
            tableName: "comentarios",
            timestamps: false
        }
    );

    return Comentarios ;
}