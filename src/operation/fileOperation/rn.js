import path from "path";
import { cwd } from "process";
import { rename } from "fs/promises";

import { getPathToWorkDirectory } from "../../commands/getPathToWorkDirectory.js";

export const rn = async (oldPath, newPath) => {
  const old = path.join(cwd(), oldPath);
  const correctOld = old.toString().split("/").slice(0, -1).join("/");
  const correct = path.join(correctOld, newPath);

  try {
    await rename(old, correct);
    console.log(getPathToWorkDirectory(cwd()));
  } catch {
    console.log("Operation failed");
  }
};
