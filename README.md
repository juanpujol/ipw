# IPW

IP Watcher its a very simple API that returns the client's IP on any method. GET, POST, PUT, PATCH, or DELETE. It's very useful to verify IPs when using proxies or VPNs.

## How to Use

Just request the endpoint with `/api` using any "http" method, and it will return a JSON object with the origin IP.

Try it now with **GET**: https://ipw.qtal.pro/api

## Deploy to Vercel

This requires to have a free account on https://vercel.com/

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/git?s=https%3A%2F%2Fgithub.com%2Fjuanpujol%2Fipw&project-name=ipw&repository-name=ipw)
