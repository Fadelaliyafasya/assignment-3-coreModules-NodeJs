const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukan namamu: ", (nama) => {
  rl.question("Masukan nomor handphonemu: ", (nomor) => {
    rl.question("Masukan emailmu: ", (email) => {
      console.log(
        `Nama kamu adalah ${nama}, nomor handphonemu adalah ${nomor}, dan emailmu ${email}, terima kasih!!!`
      );
      rl.close();
    });
  });
});
