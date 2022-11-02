# lookup local service dns
```
kubectl apply -f .\k8s\dnsutils.yaml

```

 ```
 kubectl exec -i -t dnsutils -- nslookup aks-helloworld-two.nginx-ns

 ```

 ```

apiVersion: networking.k8s.io/v1beta1
kind: Ingress
metadata:
  name: ingress-service
  annotations:
    kubernetes.io/ingress.class: 'nginx'
    nginx.ingress.kubernetes.io/use-regex: 'true'
    nginx.ingress.kubernetes.io/rewrite-target: /$1
    nginx.ingress.kubernetes.io/auth-response-headers: item_id
    nginx.ingress.kubernetes.io/auth-method: POST
    nginx.ingress.kubernetes.io/auth-url: http://pth-auth.default.svc.cluster.local:8000/items/1
    nginx.ingress.kubernetes.io/server-snippet: |
      location = /error/401 {
        proxy_method POST;
        proxy_pass http://pth-auth.default.svc.cluster.local:8000/error/401;
      }
      location = /error/403 {
        proxy_method POST;
        proxy_pass http://pth-auth.default.svc.cluster.local:8000/error/403;
      }
    nginx.ingress.kubernetes.io/configuration-snippet: |
      error_page 401 /error/401;
      error_page 403 /error/403;
    # UPDATE THIS LINE ABOVE
spec:
  rules:
    - http:
        paths:
          - path: /?(.*)
            # UPDATE THIS LINE ABOVE
            backend:
              serviceName: client-cluster-ip-service
              servicePort: 3000
          - path: /api/?(.*)
            # UPDATE THIS LINE ABOVE
            backend:
              serviceName: server-cluster-ip-service
              servicePort: 5000
          - path: /pth-auth/?(.*)
            # UPDATE THIS LINE ABOVE
            backend:
              serviceName: pth-auth
              servicePort: 8000

 ```