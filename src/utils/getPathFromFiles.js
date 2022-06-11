import { fileURLToPath } from "url";
import { dirname, join } from "path";

export const getPathFromFiles = (url, path, fileName = "") => {
  const __filename = fileURLToPath(url);
  const __dirname = dirname(__filename);
  const filePath = join(__dirname, path, fileName);
  return filePath;
};
