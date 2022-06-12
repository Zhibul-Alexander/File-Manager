import { stdout } from "process";
import { cpus } from "os";

export const getCpus = () => {
  try {
    const cpusNumber = cpus().length;
    const cpusModel = cpus().map((item, index) => {
      return `${index + 1})${item.model}`;
    });
    const cpusSpeed = cpus().map((item) => {
      return `${item.speed / 1000} GHz`;
    });

    stdout.write(
      `- Overall amount of CPUS: ${cpusNumber}${"\n"}- Model: ${cpusModel}${"\n"}- Speed: ${cpusSpeed}`
    );
  } catch {
    console.log("Operation failed");
  }
};
