### install type script as dev dependency
npm i typescript --save-dev

### create ts config file:
tsconfig.json with these values
{
  "compilerOptions": {
    "lib": ["es5", "es6", "dom"],
    "target": "es5",
    "module": "commonjs",
    "moduleResolution": "node",
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true
  }
}

### make a src directory 
mkdir src
cd src
touch app.ts


### install express 
npm i express  

### install express-types and ts-node as dev dependencies
npm i -D ts-node  @types/node @types/express


### install require packages for type-ORM
npm i typeorm pg reflect-metadata --save

### add typeORm script in package.json
"typeorm": "typeorm --config typeORM/ormconfig.json"

drop all the tables command : npm run typeorm schema:drop
sync all the tables command : npm run typeorm schema:sync
