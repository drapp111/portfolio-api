import fs from 'fs';
import google from "googleapis";
import 'dotenv/config'

const OAuth2 = google.Auth.OAuth2Client;
import nodemailer from 'nodemailer';

export function createTransporter() {
    try {
        if(process.env.ENVIRONMENT = "DEV") {
            let transporter = nodemailer.createTransport({
                jsonTransport: true
            });
            return transporter;
        }
        else if(process.env.ENVIRONMENT = "PROD") {
            const oauth2Client = new OAuth2(
                process.env.CLIENT_ID,
                process.env.CLIENT_SECRET,
                "https://developers.google.com/oauthplayground"
            );
            
            oauth2Client.setCredentials({
                refresh_token: process.env.REFRESH_TOKEN
            });
            const accessToken = new Promise((resolve, reject) => {
                oauth2Client.getAccessToken((err, token) => {
                    if (err) {
                    reject("Failed to create access token :(");
                    }
                    resolve(token);
                });
            });
            const transporter = nodemailer.createTransport({
                service: "gmail",
                tls: {
                    rejectUnauthorized: false
                },
                auth: {
                    type: "OAuth2",
                    user: process.env.EMAIL,
                    accessToken,
                    clientId: process.env.CLIENT_ID,
                    clientSecret: process.env.CLIENT_SECRET,
                    refreshToken: process.env.REFRESH_TOKEN
                }
            });
            return transporter;
        }
    } catch(error) {
        throw error;
    }
};

export async function sendContactEmail(request, mailer) {

    return new Promise((resolve) => {
        mailer.sendMail(request.query, function(error, info) {
            if(error) {
                return resolve(200);
            } else {
                if(process.env.ENVIRONMENT == "DEV") {
                    var today = new Date();
                    var date = (today.getMonth()+1) + '-' + today.getDate() + '-' + today.getFullYear();
                    var time = today.getHours() + "-" + today.getMinutes() + "-" + today.getSeconds();
                    var dateTime = date + '_' + time;

                    var message = JSON.parse(info.message);
                    console.log(message);

                    var fileContent = "<div>Subject: " + message.subject + "</div><br/><div>" + message.html + "</div>";
            
                    fs.writeFile(`${process.env.TEST_EMAIL_FOLDER}TEST_EMAIL_${dateTime}.html`, fileContent, function (err) {
                        if (err) throw err;
                        console.log(`Saved email at ${process.env.TEST_EMAIL_FOLDER}`);
                    });
                }
                resolve(200);
            }
        });
    });
    
}
