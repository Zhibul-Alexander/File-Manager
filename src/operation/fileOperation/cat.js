import { readFile } from "fs/promises";

export const cat = async (path) => {
  try {
    const fileText = await readFile(path, "utf8");
    console.log(fileText);
  } catch {
    console.log("Operation failed");
  }
};
