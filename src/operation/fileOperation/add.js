import { createWriteStream } from "fs";

import { getPathFromFile } from "../../utils/index.js";

export const add = (filePath) => {
  try {
    return createWriteStream(getPathFromFile(filePath));
  } catch {
    console.log("Operation failed");
  }
};
