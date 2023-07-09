declare module '@modular-rocks/traverse-files'

interface RandomObject extends Record<string, any> {}
type CollectedFile = [string, string] 

interface Options {
  src: string;
  packagePath: string;
  extensions: string[];
  ignoredFiles: string[];
}

interface Directory {
  files: [string, string][],
  packageContents: RandomObject
}