const fs = require("fs");
const path = require("path");

// Criar uma pasta
// fs.mkdir(path.join(__dirname, "/test"), (error) => {
//   if (error) {
//     return console.log("Erro: ", error);
//   }
//   console.log("Pasta criada com sucesso!");
// });

// Criar um arquivo
fs.writeFile(
  path.join(__dirname, "/test", "teste.html"),
  "hello node!",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }
    console.log("Arquivo criado");

    // Adicionar à um arquivo
    fs.appendFile(
      path.join(__dirname, "/test", "test.txt"),
      " hello word!",
      (error) => {
        if (error) {
          return console.log("Erro: ", error);
        }
        console.log("Arquivo modificado");
      }
    );

    // Ler um arquivo
    fs.readFile(
      path.join(__dirname, "/test", "test.txt"),
      "utf8",
      (error, data) => {
        if (error) {
          return console.log("Erro: ", error);
        }
        console.log(data);
      }
    );
  }
);
