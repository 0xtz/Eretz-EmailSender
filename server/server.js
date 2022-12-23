import express, { json } from "express";
import { sendMail } from "./sendMail.js";
import { config } from "./config.js";
import cors from "cors";

const { port } = config;

const app = express();
app.use(cors());
app.use(json());

// routes
app.post("/send", (req, res) => {
    try {
        const { to, subject, text } = req.body;
        sendMail(to, subject, text);
        res.status(200).json({ message: "success" });
    } catch (error) {
        res.status(500).json({ message: "error" });
        console.log(error);
    }
})

// run server
app.listen(3131, () => {
    console.log(`\n Server is running on port ${port}`);
});
