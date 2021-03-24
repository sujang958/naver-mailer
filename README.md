# Naver Mailer  

## 가벼운 네이버 메일러  

## install
```
$ npm install --save naver-mailer
```  

## Example
```
const NaverMail = require('naver-mailer');
const mailer = new NaverMail('id', 'super secret password');

mailer.send(mailer.createMailOption('to@to.com', 'title', 'description', false))
```