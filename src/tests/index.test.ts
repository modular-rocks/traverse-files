import { 
  resolve, 
  collect, 
  traverse, 
  removeTests, 
  removeExtensions, 
  removeIgnoredExtensions 
} from '../index'

describe("removeExtensions works as intended", () => {
  test("", () => {
    const extensions: string[] = ['js', 'ts'] 
    expect(removeExtensions(extensions)('hello-world.js')).toEqual(true);
    expect(removeExtensions(extensions)('hello-world.gs')).toEqual(false);
    expect(removeExtensions(extensions)('hello-world.ts')).toEqual(true);
  });
});

describe("removeIgnoredExtensions works as intended", () => {
  test("", () => {
    const ignoredExtensions = ['.d.ts', '.d.tsx']
    expect(removeIgnoredExtensions(ignoredExtensions)('hello-world.d.ts')).toEqual(false);
    expect(removeIgnoredExtensions(ignoredExtensions)('hello-world.d.gs')).toEqual(true);
    expect(removeIgnoredExtensions(ignoredExtensions)('hello-world.ts')).toEqual(true);
  });
});

describe("removeTests works as intended", () => {
  test("", () => {
    expect(removeTests('hello-world.test.ts')).toEqual(false);
    expect(removeTests('hello-world.ts')).toEqual(true);
  });
});

describe("collect works as intended", () => {
  test("", () => {
    const fullpath: string = resolve(__dirname, './test-directory')
    const extensions = ['js', 'ts', 'tsx', 'jsx']
    const ignoredExtensions = ['.d.ts', '.d.tsx']
    const ignoreTests = true

    let collected = collect(fullpath, extensions, ignoredExtensions, ignoreTests)
    collected = collected.map((path: string) => path.replace(process.cwd(), ''))

    
    const expected = ["/src/tests/test-directory/nested/one.js", "/src/tests/test-directory/nested/three.js", "/src/tests/test-directory/nested/two.js", "/src/tests/test-directory/one.js", "/src/tests/test-directory/three.js", "/src/tests/test-directory/two.js"]

    expect(collected).toEqual(expected);
  });
});

describe("traverse works as intended", () => {
  test("", () => {
    const fullpath: string = resolve(__dirname, './test-directory')

    let collected = traverse(fullpath, [])
    collected = collected.map((path: string) => path.replace(process.cwd(), ''))

    const expected = ["/src/tests/test-directory/nested/one.js", "/src/tests/test-directory/nested/three.js", "/src/tests/test-directory/nested/two.js", "/src/tests/test-directory/one-declaration.d.ts", "/src/tests/test-directory/one-test.test.js", "/src/tests/test-directory/one.js", "/src/tests/test-directory/three.js", "/src/tests/test-directory/two.js"]

    expect(collected).toEqual(expected);
  });
});


