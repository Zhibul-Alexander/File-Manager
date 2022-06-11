import { readdir } from "fs";
import path from "path";

export const ls = (pathDirectory) => {
  try {
    console.log(readdir(path.join(pathDirectory)));
  } catch {
    console.log("Operation failed");
  }
};
