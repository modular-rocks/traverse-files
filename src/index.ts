const path = require("path");

import { read, resolve, readFilesInDirectory, isDirectory } from './convenience'

const removeExtensions = (extensions: string[]) => (fullpath: string) => {
  return extensions.includes(path.extname(fullpath).replace('.', ''))
}
const removeIgnoredExtensions = (ignoredExtensions: string[]) => (fullpath: string) => {
  return !ignoredExtensions.map((ex: string) => fullpath.includes(ex)).filter(Boolean)[0]
}

const removeTests = (fullpath: string) => !path.basename(fullpath).match(/test/)

function traverse(directory: string, files: string[]) {
  readFilesInDirectory(directory).forEach((filePath: string) => {    
      const absolutePath: string = path.join(directory, filePath);    
      return isDirectory(absolutePath) ? 
                traverse(absolutePath, files) : files.push(absolutePath)
  });
  return files
}

const collect = (path: string, extensions: string[], ignoredExtensions: string[], ignoreTests: Boolean) => {
  let files: string[] = [];
  traverse(path, files);
  let output = files
                .filter(removeExtensions(extensions))
                .filter(removeIgnoredExtensions(ignoredExtensions))
      
  if (ignoreTests) {
    output = output.filter(removeTests)
  }

  return output
}

export { 
  read, 
  resolve, 
  collect, 
  traverse, 
  removeTests, 
  removeExtensions, 
  removeIgnoredExtensions 
}
