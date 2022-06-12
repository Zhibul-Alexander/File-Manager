import path from "path";
import { cwd } from "process";
import { createReadStream, createWriteStream } from "fs";

import { getPathToWorkDirectory } from "../../commands/getPathToWorkDirectory.js";

export const cp = async (copyFile, newFile) => {
  const copy = path.join(cwd(), copyFile);
  const correctCopy = copy.toString().split("/").slice(0, -1).join("/");
  const correct = path.join(correctCopy, newFile);

  try {
    const readFile = createReadStream(copy);
    const writeFile = createWriteStream(correct);

    await readFile.pipe(writeFile);

    console.log("Command completed");
    console.log(getPathToWorkDirectory(cwd()));
  } catch {
    console.log("Operation failed");
  }
};
