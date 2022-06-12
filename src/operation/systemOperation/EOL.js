import { stdout } from "process";
import { EOL } from "os";

export const getEOL = () => {
  try {
    stdout.write(`End-Of-Line: ${JSON.stringify(EOL)}`);
  } catch {
    console.log("Operation failed");
  }
};
