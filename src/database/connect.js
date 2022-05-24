const mongoose = require("mongoose");

const connectToDatabase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs.r8hmo.mongodb.net/database?retryWrites=true&w=majority`,
    (error) => {
      if (error) {
        return console.log("Erro ao se conectar com o banco de dados: ", error);
      }

      return console.log("Conexão realizada com sucesso!");
    }
  );
};

module.exports = connectToDatabase;
