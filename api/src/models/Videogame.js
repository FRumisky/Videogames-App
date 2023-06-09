const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("videogame", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
     
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    fecha_de_lanzamiento: {
      type: DataTypes.DATEONLY,
    },
    rating: {
      type: DataTypes.FLOAT(),
      allowNull:true,
      validate:{
        isNumeric: true,
        min:0,
        max:5
      }
    },
    plataformas: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    image:{
      type: DataTypes.STRING,
      validate: {
        isUrl:true,
      }
    },
    imageAdditional:{
      type: DataTypes.STRING,
      validate: {
        isUrl:true,
      }
    }
  },{
    timestamps: false,
  });
};
