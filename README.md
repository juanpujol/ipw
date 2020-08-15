# IPW

[![Maintainability](https://api.codeclimate.com/v1/badges/dba35aa2cf2c45f20d2e/maintainability)](https://codeclimate.com/github/juanpujol/ipw/maintainability)

IP Watcher its a simple API that returns the client's IP while using any http method. **GET**, **POST**, **PUT**, **PATCH**, or **DELETE**. Very useful to verify IPs when using proxies or VPNs.

## How to Use

Just request the endpoint with `/api` using any method, and it will return a JSON object with the origin IP.

Try it now with **GET**: https://ipw.qtal.pro/api

Or use `curl` to try other methods.

```
curl --request GET https://ipw.qtal.pro/api
curl --request POST https://ipw.qtal.pro/api
curl --request PUT https://ipw.qtal.pro/api
curl --request PATCH https://ipw.qtal.pro/api
curl --request DELETE https://ipw.qtal.pro/api
curl --request OPTIONS https://ipw.qtal.pro/api
```

## Deploy with Vercel

This requires a free account on https://vercel.com/

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/git?s=https%3A%2F%2Fgithub.com%2Fjuanpujol%2Fipw&project-name=ipw&repository-name=ipw)

> _*No environment variables required._