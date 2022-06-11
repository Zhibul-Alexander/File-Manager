import { homedir } from "os";
import {
  startProgram,
  getUsername,
  getPathToWorkDirectory,
  runManager,
} from "./commands/index.js";

const App = () => {
  try {
    console.log(
      startProgram(getUsername()) + "\n" + getPathToWorkDirectory(homedir())
    );

    runManager();
  } catch {
    console.log("Operation failed");
  }
};

App();
