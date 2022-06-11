import * as readline from "readline";
import process, { stdin as input, stdout as output } from "process";

import { endProgram, getUsername } from "./index.js";
import { up } from "../navigation/up.js";

const rl = readline.createInterface({ input, output });

export const runManager = () => {
  try {
    rl.on("line", (line) => {
      const operation = line.split(" ");
      switch (operation[0]) {
        case ".exit":
          output.write(endProgram(getUsername()));
          process.exit();
          break;
        case "up":
          up();
          break;

        default:
          console.log("Invalid input");
      }
    });
  } catch (error) {
    console.error("Operation failed");
  }
};
