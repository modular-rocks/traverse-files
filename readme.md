# Traverse files

## Installation

`npm install @modular-rocks/traverse-files`

or 

`yarn add @modular-rocks/traverse-files` 


# Usage 

This package gives you an array of files in a directory. Its designed to be used across the ModularRocks modules, so its been extracted into its own package.

## Collect

```
import { collect } from "@modular-rocks/traverse-files"

const fullpath = '/path/to/directory'
const extensions = ['js', 'ts', 'tsx', 'jsx']
const ignoredExtensions = ['.d.ts', '.d.tsx']
const ignoreTests = true

collect(fullpath, extensions, ignoredExtensions, ignoreTests)

// ['/path/to/directory/file1', '/path/to/directory/file2']
```

## Traverse

```
import { traverse } from "@modular-rocks/traverse-files"

const fullpath = '/path/to/directory'

traverse(fullpath, [])

// ['/path/to/directory/file1', '/path/to/directory/file2']
```

