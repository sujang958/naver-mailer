import node_mailer from 'nodemailer';

class Mail {
    /**
     * @param {String} id 
     * @param {String} password 
     */
    constructor(id, password) {
        try {
            if (!id.split('@')[1])
                id += "@naver.com";
                
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
     * @returns {{from: String, to: String, subject: String, text: String, html?: String, attachments?: Array}}
     */
    createMailOption(to, title, description = "Nothing Here", isHtml = false) {
        if (!this.mailOptions) {
            this.mailOptions = {
                from: this.id,
                to,
                subject: title,
            };
        } else {
            this.mailOptions.from;
            this.mailOptions.id = id;
            this.mailOptions.to= to;
        }
        
        if (isHtml)
            this.mailOptions.html = description;
        else
            this.mailOptions.text = description;

        return this.mailOptions;
    }

    /**
     * @param {String} path 
     * @param {String?} filename
     */
    addAttachments(path, filename) {
        if (this.mailOptions) {
            let attachment = {};
            attachment.path = path;

            if (!this.mailOptions.attachments)
                this.mailOptions.attachments = [];
            if (filename)
                attachment.filename = filename;
            
            this.mailOptions.attachments.push(attachment);
        } else {
            this.mailOptions = {};
            let attachment = {};
            attachment.path = path;
            this.mailOptions.attachments = [];

            if (filename)
                attachment.filename = filename;
            
            this.mailOptions.attachments.push(attachment);
        }

        return this.mailOptions;
    }

    /**
     * @param {{from: String, to: String, subject: String, text: String, html?: String, attachments?: Array}} mailOptions 
     */
    send(mailOptions=undefined) {
        if (!mailOptions)
            mailOptions = this.mailOptions;
        
        this.transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                throw new Error('[Mail] Authorization failed! Are you use a 2FA?');
            } else {
                console.log(`[Mail] Send mail to ${mailOptions.to}`);
            }
        });
    }
}

export default Mail;