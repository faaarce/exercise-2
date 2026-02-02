const prompt = require("prompt-sync")();
const destinasi = prompt("masukan destinasi perjalanan? ");
const kilometer = parseFloat(prompt("masukan jarak perjalanan (km): "));
const kecepatanRataRata = 60;
const totalWaktu = kilometer / kecepatanRataRata;
console.log(`waktu perjalanan yang akan kamu tempuh ke ${destinasi} adalah ${totalWaktu}`)