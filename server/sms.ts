import express from "express";
const app = express();
import Nexmo from "nexmo";

const nexmo = new Nexmo({
    apiKey: "803ed778",
    apiSecret: "T8rbSwQ1lhzt2eCp",
});



app.post("/", async (req, res) => {
    try {
        const { sms, number } = req.body;
        const from = "Vonage APIs";
        const to = number;
        const text = sms;
        nexmo.message.sendSms(from, to, text,{type:'unicode'},(err,data)=>{
            if(err) console.log(err)
            console.log(data)
        });
        res.send({sms,number})
    } catch (err) {
        console.log(err);
    }
});

module.exports = app;
