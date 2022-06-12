import { createWriteStream } from "fs";
import { cwd } from "process";

import { getPathFromFile } from "../../utils/index.js";
import { getPathToWorkDirectory } from "../../commands/getPathToWorkDirectory.js";

export const add = async (filePath) => {
  try {
    await createWriteStream(getPathFromFile(filePath));
    console.log(getPathToWorkDirectory(cwd()));
  } catch {
    console.log("Operation failed");
  }
};
