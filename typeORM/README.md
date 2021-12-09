### install

install type orm                  : npm i  typeorm --save
extra dependency for typeORM      : npm install reflect-metadata --save
install db packages               : npm install pg --save

install dev dependencies          : npm i -D typescript@latest ts-node@latest

### in package.json file:

"scripts": {
  ...
  "typeorm": "node --require ts-node/register ./node_modules/typeorm/cli.js"    
}

### start
as we installed type-orm locally not globally
to start project  , command : npx typeorm init 