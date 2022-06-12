import { arch, stdout } from "process";

export const getArchitecture = () => {
  try {
    stdout.write(`Architecture: ${arch}`);
  } catch {
    console.log("Operation failed");
  }
};
