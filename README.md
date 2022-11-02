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

kubectl apply -f https://github.com/bob-walters/nginx-istio/blob/main/namespace-ingress.yaml
kubectl apply -f https://github.com/bob-walters/nginx-istio/blob/main/ingress-class.yaml

helm upgrade --install ingress-nginx-v4 ingress-nginx -f .\k8s\nginx-ingress-release-values.yaml --repo https://kubernetes.github.io/ingress-nginx  --namespace ingress --version="3.30.0"