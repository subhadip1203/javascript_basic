### install

install type orm                  : npm i  typeorm --save
extra dependency for typeORM      : npm install reflect-metadata --save
install db packages               : npm install pg --save

install dev dependencies          : npm i -D typescript@latest ts-node@latest

### in package.json file:

"scripts": {
  ...
  "typeorm": "ts-node ./node_modules/typeorm/cli.js"    
}

### start
as we installed type-orm locally not globally
to start project  , command : npx typeorm init 

### change name of table:
to make a table with name xxxxx , go to in entity file :
@Entity('xxxxxx')
export class  {
  .....
}

### typeorm command
command : npm run typeorm schema:drop

