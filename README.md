# Naver Mailer  

## 가벼운 네이버 메일러  

## install  
### npm
```
$ npm install naver-mailer
```  
## yarn
```
$ yarn add naver-mailer
```  

## Example
```javascript
const NaverMail = require('naver-mailer');
const mailer = new NaverMail('id', 'super secret password');

mailer.send(mailer.createMailOption('to@to.com', 'title', 'description', false))
```