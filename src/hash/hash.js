import path from "path";
import { cwd } from "process";
import crypto from "crypto";
import fs from "fs";

import { getPathToWorkDirectory } from "../commands/getPathToWorkDirectory.js";

export const hash = async (filePath) => {
  const fileHash = path.join(cwd(), filePath);

  try {
    const fileBuffer = await fs.promises.readFile(fileHash);

    const hash = crypto.createHash("sha256").update(fileBuffer).digest("hex");
    console.log(hash);

    console.log(getPathToWorkDirectory(cwd()));
  } catch {
    console.log("Operation failed");
  }
};
