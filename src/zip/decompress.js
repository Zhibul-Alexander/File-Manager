import path from "path";
import { cwd } from "process";
import { createWriteStream, createReadStream } from "fs";
import { createBrotliDecompress } from "zlib";

import { getPathToWorkDirectory } from "../commands/getPathToWorkDirectory.js";

export const decompress = async (pathFile, decompressFile) => {
  try {
    const startFile = path.join(cwd(), pathFile);
    const correctFile = startFile.toString().split("/").slice(0, -1).join("/");
    const correct = path.join(correctFile, decompressFile);

    const source = createReadStream(startFile);
    const destination = createWriteStream(correct);
    const brotli = createBrotliDecompress();

    await source.pipe(brotli).pipe(destination);

    console.log("Command completed!");
    console.log(getPathToWorkDirectory(cwd()));
  } catch {
    console.log("Operation failed");
  }
};
