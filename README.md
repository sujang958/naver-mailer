# Naver Mailer  

## 가벼운 네이버 메일러  

## install  
### npm
```
$ npm install naver-mailer
```  
### yarn
```
$ yarn add naver-mailer
```  

## Example
### ES5
```javascript
const NaverMailer = require('naver-mailer').default;
const mailer = new NaverMail('id', 'super secret password');

mailer.send(mailer.createMailOption('to@to.com', 'title', 'description', false));
```  
### ES6
```javascript
import NaverMail from 'naver-mailer';;
const mailer = new NaverMail('id', 'super secret password');

mailer.createMailOption('to@to.com', 'title', 'description', false);
mailer.send();
```  
### Add Attachments
```javascript
const NaverMail = require('naver-mailer');
const mailer = new NaverMail('id', 'super secret password');

mailer.createMailOption('to@to.com', 'title', 'description');
mailer.addAttachments('./your_file_path', 'this_is_option');
mailer.send();
```  