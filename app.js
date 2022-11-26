const qrcode = require("qrcode-terminal");

const { Client } = require("whatsapp-web.js");
const client = new Client();

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Client is ready!");
});

client.on("message", async (message) => {
  if (message.body === "Fulus") {
    const pin = (await Math.floor(Math.random() * 100000)) + 1;
    message.reply(`Please enter ${pin} on the app or web page`);
    const num = message.getContact();
    console.log(num);
  }
});

client.initialize();
