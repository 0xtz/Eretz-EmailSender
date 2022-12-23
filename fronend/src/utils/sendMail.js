import axios from "axios";

export const sendMail = (to, subject, message) => {
    axios
        .post("http://localhost:3131/send", {
            to: to,
            subject: subject,
            text: message,
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });

    console.log({
        to: to,
        subject: subject,
        text: message,
    });
};
