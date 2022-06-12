import { readFile } from "fs/promises";
import { cwd } from "process";

import { getPathToWorkDirectory } from "../../commands/getPathToWorkDirectory.js";

export const cat = async (path) => {
  try {
    const fileText = await readFile(path, "utf8");
    console.log(fileText);
    console.log("Command completed");
    console.log(getPathToWorkDirectory(cwd()));
  } catch {
    console.log("Operation failed");
  }
};
