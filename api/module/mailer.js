'use strict';

const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    // host: 'smtp.ethereal.email',
    service: '163', // 使用了内置传输发送邮件 查看支持列表：https://nodemailer.com/smtp/well-known/
    port: 465, // SMTP 端口
    secureConnection: true, // 使用了 SSL
    auth: {
        user: 'whwzp321@163.com',
        // 这里密码不是qq密码，是你设置的smtp授权码
        pass: 'syd584521',
    }
});
module.exports=function(email,bookName,path,cb){

    let mailOptions = {
        from: '"books管理系统" <whwzp321@163.com>', // sender address
        to: email, // list of receivers
        subject: 'Hello', // Subject line
        // 发送text或者html格式
        // text: 'Hello world?', // plain text body
        html: '<b>Hello world?</b>' ,// html body
        attachments: [

            {
                filename: bookName,
                path: path,
            }
        ]
    };

// send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        try{if (error) {
            cb({
                ok:-1,
                msg:"发送失败，请检查文件是否超过邮箱最大发送容量"
            })
        }else{
            cb({
                ok:1,
                msg:"已发送，请接收"
            })
        }
        }catch (e) {
            cb({
                ok:-1,
                msg:"发送失败"
            })
        }
// Message sent: <04ec7731-cc68-1ef6-303c-61b0f796b78f@qq.com>
    });
}

