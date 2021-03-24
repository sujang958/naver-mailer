const node_mailer = require('nodemailer');


class Mail {
    /**
     * @param {String} id 
     * @param {String} password 
     */
    constructor(id, password) {
        try {
            if (!id.split('@')[1])   id += "@naver.com";
            const transporter = node_mailer.createTransport({
                service: 'naver',
                host: 'smtp.naver.com',
                port: 587,
                auth: {
                    user: id,
                    pass: password,
                }
            });
    
            this.id = id;
            /**
             * @type {node_mailer.Transporter}
             */
            this.transporter = transporter;
            console.log('[Mail] Initialize Naver Mail');
        } catch (e) {
            throw new Error('[Mail] Authorization failed! Are you use a 2FA?');
        }
    }

    /** 
     * @param {String} to 
     * @param {String} title 
     * @param {String} description 
     * @param {Boolean} isHtml 
     * @returns {{from: String, to: String, subject: String, text: String, html?: String}}
     */
    createMailOption(to, title, description = "Null", isHtml = false) {
        const mailOptions = {
            from: this.id,
            to,
            subject: title,
        };
        if (isHtml)
            mailOptions.html = description;
        else
            mailOptions.text = description;
    
        return mailOptions;
    }

    /**
     * @param {{from: String, to: String, subject: String, text: String, html?: String}} mailOptions 
     */
    send(mailOptions) {
        this.transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                throw new Error(error)
            } else {
                console.log(`[Mail] Send mail to ${mailOptions.to}`);
            }
        });
    }
}

module.exports = Mail;