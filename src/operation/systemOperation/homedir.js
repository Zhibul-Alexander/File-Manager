import { stdout } from "process";
import { homedir } from "os";

export const getHomedir = () => {
  try {
    stdout.write(`Home directory: ${homedir()}`);
  } catch {
    console.log("Operation failed");
  }
};
