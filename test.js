import NaverMail from './index.js';
const mailer = new NaverMail('enter7377@naver.com', 'asdf');

let asdf = mailer.createMailOption('enter7377@naver.com', 'asdf', 'asdf');
mailer.addAttachments('./yarn.lock', '얀락');
mailer.send();