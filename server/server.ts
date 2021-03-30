import dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
const app = express();
const port: number | string = process.env.PORT;

app.use(morgan(`dev`));
app.use(express.json());
app.use(
    express.urlencoded({
        extended: false,
    }),
);

app.use('/smsNumber',require('./sms'))

app.listen(port, (): void => console.log(`server is runing on port ${port}`));
