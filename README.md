nest -- generate controller farms
nest -- generate service farms
nest -- generate module farms

#Migration create

```
"scripts": {
  "typeorm": "ts-node ./node_modules/typeorm/cli",
  "typeorm:run-migrations": "npm run typeorm migration:run -- -d ./typeOrm.config.ts",
  "typeorm:generate-migration": "npm run typeorm -- -d ./typeOrm.config.ts migration:generate ./migrations/$npm_config_name",
  "typeorm:create-migration": "npm run typeorm -- migration:create ./migrations/$npm_config_name",
  "typeorm:revert-migration": "npm run typeorm -- -d ./typeOrm.config.ts migration:revert",
  ...
}
```

npm run makemigrations --name=test

npm run migrations