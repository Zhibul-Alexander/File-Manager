import { homedir } from "os";
import {
  startProgram,
  getUsername,
  getPathToWorkDirectory,
} from "./commands/index.js";
import { baseSwitch } from "./baseSwitch/index.js";

const App = () => {
  try {
    console.log(
      startProgram(getUsername()) + "\n" + getPathToWorkDirectory(homedir())
    );

    baseSwitch();
  } catch {
    console.log("Operation failed");
  }
};

App();
