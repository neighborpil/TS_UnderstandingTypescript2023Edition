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
3. 서버를 구동한다
```
% npm start
```
4. 코드 작성 후 컴파일한다
```
% tsc app.ts
```

### Typescirpt Features
- object타입을 하면 내부의 어떤 것들에 대해서도 타입추론을 하지 못하고 에러로 표시한다
```
const person: object = {
    name: 'Maximilian',
    age: 30,
};

const person: {} = {
    name: 'Maximilian',
    age: 30,
};
```
- typescript representation
```
const person: {
    name: string,
    age: number,
    hobbies: string[]
} = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', "Cooking"]
};
```

#### Typescript core types
- number
- string
- boolean
- object
- Array
- Tuple(typescript only) : fixed length of array
- enum: automatically enumerated global constant identifiers
- any: most flexible, any kind of value, no specific type
