const inquirer = require("inquirer");
const Web3 = require("web3");

require("dotenv").config();

const getSelection = async () => {
  const { option } = await inquirer.prompt([
    {
      type: "list",
      name: "option",
      message: "Select a Network to establish connection:",
      choices: [
        "Binance Smart Chain",
        "Ethereum",
        "Polygon (Matic)",
        new inquirer.Separator(),
        "Custom Network",
      ],
    },
  ]);

  console.log(`\t${option}`);
  return option;
};

const getEndpoint = (network) => {
  switch (network) {
    case "Binance Smart Chain":
      return process.env.BINANCE_SMART_CHAIN;

    case "Ethereum":
      return process.env.ETHEREUM;

    case "Polygon (Matic)":
      return process.env.POLYGON;

    case "Custom Network":
      return process.env.CUSTOM_NODE;

    default:
      return null;
  }
};

const main = async () => {
  const selection = await getSelection();
  const endpoint = getEndpoint(selection);

  if (!endpoint) {
    console.error("Please usa a valid endpoint in the .env file");
  } else {
    const web3 = new Web3(endpoint);

    const subscription = web3.eth
      .subscribe("pendingTransactions", function (error, result) {
        if (!error) {
          console.log(result);
        } else {
          console.error(error);
        }
      })
      .on("data", function (transaction) {
        console.log(transaction);
      })
      .on("error", () => {
        console.error("Please use wss rpcs only");
      });
  }
};

main();
