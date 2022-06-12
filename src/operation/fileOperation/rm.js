import { unlink } from "fs/promises";
import path from "path";
import { cwd } from "process";

import { getPathToWorkDirectory } from "../../commands/getPathToWorkDirectory.js";

export const rm = async (unlinkPath) => {
  try {
    await unlink(path.join(cwd(), unlinkPath), () => {
      console.log("Error");
    });

    console.log("Command completed!");
    console.log(getPathToWorkDirectory(cwd()));
  } catch {
    console.log("Operation failed");
  }
};
