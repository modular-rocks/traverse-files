const path = require("path");
const { readFileSync, statSync, readdirSync } = require("fs");

export const read = (path: string) => readFileSync(path).toString()
export const resolve = (dirname: string, filename: string) => path.resolve(dirname, filename)
export const readFilesInDirectory = (directoryPath: string) => readdirSync(directoryPath)
export const isDirectory = (absolutePath: string) => statSync(absolutePath).isDirectory()