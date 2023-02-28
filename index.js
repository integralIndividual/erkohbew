// written by snapple92
// made on 2/22/2023

// slightly modified on 2/24/2023

const express = require("express");
const app = express();

// why isn't this enabled by default??
app.use(express.json());

const discord = require("discord.js");

app.post('/', (request, response) => {
  let webhook = new discord.WebhookClient({ url: request.body.webhook });
  let webhookResponse = await webhook.send(request.body);

  response.json({ response: webhookResponse });
});

app.listen(process.env.PORT);

