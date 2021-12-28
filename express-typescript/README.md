### create type-script config file

create a tsconfig file : `tsc --init`
add these lines: 
```
  "outDir": "./dist",
  "rootDir": "./src",
  "moduleResolution": "node"  
```

### install dev dependencies:
npm i -D ts-node  @types/node @types/express


### package.json scripts
```
  "start": "node dist/index.js",
  "dev": "nodemon src/index.ts",
  "build": "tsc -p ."
```