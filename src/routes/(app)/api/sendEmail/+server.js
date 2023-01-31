import sgMail from "@sendgrid/mail";
import {SENDGRID_API_KEY, TO_EMAIL_ADDRESS} from '$env/static/private';

sgMail.setApiKey(SENDGRID_API_KEY);

export const POST = async (event) => {
    const formBody = await event.request.formData();

    const email = formBody.get('mittente');
    const oggetto = formBody.get('oggetto');
    const testoEmail = formBody.get('testoEmail');
    const testo = testoEmail + ' ' + email;
    
        const msg = {
            to: TO_EMAIL_ADDRESS,
            from: TO_EMAIL_ADDRESS,
            subject: oggetto,
            text: testo,
        };
        console.log("Form submitted");
        sgMail.send(msg).then(() => {}, error => {
            console.error(error);
            if (error.response) {
                console.error(error.response.body)
            }});
        return new Response(JSON.stringify({ success: true }), {
            headers: {
                'Content-Type': 'application/json'
            }
        })
}