# lookup local service dns
```
kubectl apply -f .\k8s\dnsutils.yaml

```

 ```
 kubectl exec -i -t dnsutils -- nslookup aks-helloworld-two.nginx-ns

 ```