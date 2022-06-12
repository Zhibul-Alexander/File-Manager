import { cwd } from "process";
import { isAbsolute, join } from "path";

export const getPathFromFile = (path) =>
  isAbsolute(path) ? path : join(cwd(), path);
