import { unlink } from "fs/promises";

import { cp } from "./index.js";

export const mv = async (copyFile, newFile) => {
  try {
    await cp(copyFile, newFile);
    await unlink(copyFile, (err) => {
      console.log(err);
    });
  } catch {
    console.log("Operation failed");
  }
};
