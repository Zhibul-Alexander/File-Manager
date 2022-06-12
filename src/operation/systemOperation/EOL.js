import { EOL } from "os";
import { stdout } from "process";

export const getEOL = () => {
  try {
    stdout.write(`End-Of-Line: ${JSON.stringify(EOL)}`);
  } catch {
    console.log("Operation failed");
  }
};
