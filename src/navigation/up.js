import path from "path";
import { chdir, cwd } from "process";

import { getPathToWorkDirectory } from "../commands/getPathToWorkDirectory.js";

export const up = () => {
  const presentDirectory = path.join(cwd(), "..");
  chdir(presentDirectory);

  console.log(getPathToWorkDirectory(presentDirectory));
};
