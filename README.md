# TS_UnderstandingTypescript2023Edition

### Installing
1. 설치
 - npm init으로 package.json파일이 생성이 된다
```
% npm init -- 엔터엔터엔터...
% npm install --save-dev lite-server
```
2. package.json파일 내에 스크립트를 추가해 준다 : "start": "lite-server"
```
{
  "name": "typescript",
  "version": "0.0.1",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "lite-server"
  },
  "author": "",
  "license": "ISC",
  "description": "",
  "devDependencies": {
    "lite-server": "^2.6.1"
  }
}

```


