module.exports = (sequelize, type) => {
    return sequelize.define("customer", {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        required: true
      },
      firstName: type.STRING,
      lastName: type.STRING,
      address: type.STRING,
      lattitude: type.STRING,
      longitude: type.STRING,
      city: type.STRING,
      country: type.STRING,
      phoneNo: type.STRING,
      imageURl: type.STRING,
 
     
    });
  };
  