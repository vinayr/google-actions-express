"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const { dialogflow } = require("actions-on-google");

const app = dialogflow({ debug: true });

// Handle the Dialogflow intent named 'favorite color'.
// The intent collects a parameter named 'color'.
app.intent("favorite color", (conv, { color }) => {
  const luckyNumber = color.length;
  // Respond with the user's lucky number and end the conversation.
  conv.close("Your lucky number is " + luckyNumber);
});

const expressApp = express();
expressApp.use(bodyParser.json());

expressApp.post("/gactions", app);

expressApp.listen(3000, () => {
  console.log("Server is running on 3000 port");
});
