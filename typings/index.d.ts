import fs from 'fs';

export interface mailOption {
    from: String;
    to: String;
    subject: String;
    text?: String;
    html?: String | fs.ReadStream;
    attachments?: Attachments;
}

export interface Attachments {
    [index: number]: Attachment;
}

export interface Attachment {
    path: String;
    filename?: String;
}