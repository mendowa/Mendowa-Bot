const fs = require('fs');
const path = require('path');

module.exports = (direcotry, foldersOnly = false) => {
  let fileNames = [];

  const files = fs.readdirSync(direcotry, { withFilesTypes: true });

  for (const file of files) {
    const filePath = path.join(direcotry, file.name);

    if (foldersOnly) {
      if (file.isDirectory()) {
        fileNames.push(filePath);
      }
    } else {
      if (file.isFile()) {
        fileNames.push(filePath);
      }
    }
  }

  return fileNames;
}