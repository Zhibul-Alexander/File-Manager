import * as readline from "readline";
import process, { stdin as input, stdout as output } from "process";

import { endProgram, getUsername } from "../commands/index.js";
import { up, cd, ls } from "../navigation/index.js";
import { cat, add, rn, cp, mv } from "../operation/fileOperation/index.js";

const rl = readline.createInterface({ input, output });

export const baseSwitch = async () => {
  rl.on("line", (line) => {
    const operation = line.toString().trim().split(" ");
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
      case "cat": {
        cat(operation[1]);
        break;
      }
      case "add": {
        add(operation[1]);
        break;
      }
      case "rn": {
        rn(operation[1], operation[2]);
        break;
      }
      case "cp": {
        cp(operation[1], operation[2]);
        break;
      }
      case "mv": {
        mv(operation[1], operation[2]);
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
