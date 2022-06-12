import { readdir } from "fs/promises";
import { cwd } from "process";

export const ls = async () => {
  try {
    const array = await readdir(cwd());
    console.log(array);
  } catch {
    console.log("Operation failed");
  }
};
