import nodeMailer from "nodemailer"


export const sendMail = async ({userMessage,email}) => {

    const transport = nodeMailer.createTransport({
        host: process.env.SMPT_HOST,
        port: process.env.SMPT_PORT,
        auth: {
            user: process.env.SMPT_USER,
            pass: process.env.SMPT_PASSWORD
        },

    });

    await transport.sendMail({
        from: email,
        to: email,
        subject: "Contact Request",
        text: userMessage
    })

}