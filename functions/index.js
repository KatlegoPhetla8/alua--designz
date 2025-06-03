require('dotenv').config()
const { onDocumentCreated } = require('firebase-functions/firestore');
const nodemailer = require('nodemailer');


const portEmail = process.env.USER_EMAIL;
const portPass = process.env.PASSWORD__EMAIL;

const transporterEmail = nodemailer.createTransport({
    service: "gmail",
        auth:{
            user: portEmail,
            pass: portPass
        }
    });

    const sendEmail = async (data, type) =>{
        let subject, htmlEmailFormat

        if(type === 'contact'){
            subject = data.subject || "";
            htmlEmailFormat =`
        <div style="font-family: Arial, sans-serif; padding: 20px;">
         <div style="font-size: 28px; font-weight: bold; color: rgb(212, 172, 121); letter-spacing: 1px; margin-bottom: 10px;">
            AD
        </div>
        <h2 style="color: #333;">${subject}</h2>
        <p><strong>Name:</strong> ${data.fullName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong></p>
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; border: 1px solid #ddd;">
            <p style="white-space: pre-line;">${data.message}</p>
        </div>
        <br />
        <p style="font-size: 0.9em; color: #888;">This email was automatically sent from your website's enquiry form.</p>
        </div>
        `
        } else if(type === 'serviceEnquiry'){
            subject = data.serviceEnquire ||""
            htmlEmailFormat =`
        <div style="font-family: Arial, sans-serif; padding: 20px;">
         <div style="font-size: 28px; font-weight: bold; color: rgb(212, 172, 121); letter-spacing: 1px; margin-bottom: 10px;">
            AD
        </div>
        <h2 style="color: #333;">${subject}</h2>
        <p><strong>Name:</strong> ${data.fullName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Company Name:</strong> ${data.companyName}</p>
        <p><strong>Contact:</strong> ${data.contactNum}</p>
        <p><strong>Service:</strong> ${data.serviceEnquire}</p>
        <p><strong>Message:</strong></p>
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; border: 1px solid #ddd;">
            <p style="white-space: pre-line;">${data.message}</p>
        </div>
        <br />
        <p style="font-size: 0.9em; color: #888;">This email was automatically sent from your website's enquiry form.</p>
        </div>
        `
        }
        const mailOptions = {
            from: portEmail,
            to: "afflatuscreation@gmail.com",
            subject: `${subject} from - ${data.fullName}`,
            replyTo: data.email,
            html: htmlEmailFormat
        };
            await transporterEmail.sendMail(mailOptions)
    };

    // Functions for sending Enquire or Contact
    exports.contactForm = onDocumentCreated('contact/{docId}', async(event)=>{
        const data = event.data?.data();
        if(!data) return;
        await sendEmail(data, 'contact')
    });

    exports.enquireForm = onDocumentCreated('serviceEnquiry/{docId}', async(event)=>{
        const data = event.data?.data();
        if(!data) return;
        await sendEmail(data, 'serviceEnquiry')
    });