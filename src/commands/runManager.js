import * as readline from "readline";
import process, { stdin as input, stdout as output } from "process";
import { homedir } from "os";

import { endProgram, getUsername } from "./index.js";
import { up, cd, ls } from "../navigation/index.js";

const rl = readline.createInterface({ input, output });

let __dirname = homedir();

export const runManager = () => {
  try {
    rl.on("line", (line) => {
      const operation = line.split(" ");
      switch (operation[0]) {
        case "up":
          up();
          break;
        case "cd":
          cd(operation.splice(0, 1).join(" "));
          break;
        case "ls":
          ls(__dirname);
          break;
        case ".exit":
          output.write(endProgram(getUsername()));
          process.exit();
          break;
        default:
          console.log("Invalid input");
      }
    });
  } catch (error) {
    console.error("Operation failed");
  }
};
