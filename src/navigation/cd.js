import path from "path";
import { chdir, cwd } from "process";

import { getPathToWorkDirectory } from "../commands/index.js";

export const cd = (pathDirectory) => {
  if (path.isAbsolute(pathDirectory)) {
    chdir(path.join(pathDirectory));

    console.log(getPathToWorkDirectory(pathDirectory));
  } else {
    chdir(path.join(cwd(), pathDirectory));

    console.log(getPathToWorkDirectory(cwd()));
  }
};
