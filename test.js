const NaverMail = require('./index')
const mailer = new NaverMail('enter7377@naver.com', 'SUPER SECRET');

mailer.createMailOption('enter7377@naver.com', 'asdf', 'asdf');
mailer.addAttachments('./yarn.lock', '얀락');
mailer.send();