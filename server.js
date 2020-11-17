const discord = require("discord.js");
const client = new discord.Client();
const alexa = require("alexa-bot-api");
var chatbot = new alexa("aw2plm"); //free access key for Mewtwo Machine channel (provided by CTK WARRIOR)
client.on("ready", () => {
  console.log("Ready for chatting!| Bot by CosmosX");
});
client.on("message", async message => {
  if (message.author.bot) return;
  let content = message.content;
  chatbot.getReply(content).then(r => message.channel.send(r));
});
client.login(process.env.TOKEN);
