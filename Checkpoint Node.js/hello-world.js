// 1 page hello world
console.log("HELLO WORLD");

// server.js
const http = require("http");
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Hello Node !!!!</h1>\n");
});
server.listen(3000, () => console.log("Serveur en cours d'exécution sur le port 3000"));

// file-system.js
const fs = require("fs");
fs.writeFile("welcome.txt", "Hello Node", (err) => {
    if (err) throw err;
    console.log("Fichier créé avec succès");
});
fs.readFile("welcome.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
});


// password-generator.js
const generatePassword = require("generate-password");
function generateRandomPassword() {
    const password = generatePassword.generate({
        length: 10,
        numbers: true
    });
    console.log("Mot de passe généré :", password);
}
generateRandomPassword();

// email-sender.js
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "sio@gmail.com",
        pass: "12345678"
    }
});
const mailOptions = {
    from: "sio@gmail.com",
    to: "koffi@gmail.com",
    subject: "Test Node.js",
    text: "Bonjour, ceci est un test d'envoi d'email avec Node.js."
};
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Email envoyé : " + info.response);
    }
});