install type orm : npm i  typeorm

in package.json file:

"scripts": {
  ...
  "typeorm": "node --require ts-node/register ./node_modules/typeorm/cli.js"    
}

as we installed type-orm locally not globally
to start project :
command : npx typeorm init 