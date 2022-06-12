import { stdout } from "process";
import { userInfo } from "os";

export const getSystemUsername = () => {
  try {
    stdout.write(`System user name: ${userInfo().username}`);
  } catch {
    console.log("Operation failed");
  }
};
