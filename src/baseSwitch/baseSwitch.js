import * as readline from "readline";
import process, { stdin as input, stdout as output } from "process";

import { endProgram, getUsername } from "../commands/index.js";
import { up, cd, ls } from "../navigation/index.js";

const rl = readline.createInterface({ input, output });

export const baseSwitch = async () => {
  rl.on("line", (line) => {
    const operation = line.split(" ");
    switch (operation[0]) {
      case ".exit":
      case "exit": {
        output.write(endProgram(getUsername()));
        process.exit();
      }
      case "up": {
        up();
        break;
      }
      case "cd": {
        cd(operation[1]);
        break;
      }
      case "ls": {
        ls();
        break;
      }
      default: {
        console.log("Invalid input");
      }
    }
  })
    .on("close", () => {
      output.write(endProgram(getUsername()));
    })
    .on("error", () => {
      console.error("Operation failed");
    });
};
