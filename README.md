# Category

- [ ] What is TypeScript
- [ ] Installing & Using TypeScript
- [ ] The Advantages of TypeScript
- [ ] Setting Up our Development Environment
- [ ] The Course Project setup
- [ ] Module Introduction
- [ ] Using Types
- [ ] TypeScript Types VS JavaScript Types
- [ ] Numbers, Strings and Booleans
- [ ] Type Assignment and Type Inference
- [ ] Object Types
- [ ] Array Types
- [ ] Tuples
- [ ] Enums
- [ ] The Any Type
- [ ] Union Types
- [ ] Literal Types
- [ ] Type Aliases
- [ ] Function Return Types and Void
- [ ] Function Types
- [ ] Function Types and Callbacks
- [ ] The Unknown Type
- [ ] The Never Type
- [ ] Wrap Up
- [ ] Module Introduction
- [ ] Watch Node
- [ ] Compiling the Entire Project
- [ ] Include and Exclude Files
- [ ] Setting a Compilation Target
- [ ] Understanding TypeScript Libs
- [ ] More Options
- [ ] Source Maps
- [ ] Rootdir and Outdir
- [ ] noemit on Error
- [ ] Strict Compilation Options
- [ ] Code Quality Options
- [ ] Debugging with Visual Studio Code
- [ ] Wrap Up

### For Compile
- tsc --watch(or -w)

- tsc --init
- tsc
- tsc --watch(or -w)

### For Include or Exclude Files
- tsconfing.json
- "exclude":["file.ts"]
- "include":["file.ts"]
- "files":["file.ts"]

## tsconfig.json

### Basic Options

- target
- module
- lib
- sourceMap
Simplify debug in Chrome browser with .ts
- outDir and rootDir
원하는 경로에 있는 ts 파일을 컴파일하여 원하는 경로로 js 파일 생성
- removeComments
- noEmitOnError
false를 설정하면 오류가 있든 없든 output 생성, true를 설정하면 오류가 있을 경우 output 생성X

### Strict Type-Checking Options
"strict": true Or 나머지 원하는 대로 setting

### Additional Checks
- noUnusedLocals
- noUnusedParameters
- noImplicitReturns

### Debugging with Visual Studio Code
- Debugger for Chrome Extension
- "sourceMap": true in tsconfig.json