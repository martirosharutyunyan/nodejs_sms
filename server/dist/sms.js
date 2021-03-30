"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const nexmo_1 = __importDefault(require("nexmo"));
const nexmo = new nexmo_1.default({
    apiKey: "803ed778",
    apiSecret: "T8rbSwQ1lhzt2eCp",
});
app.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { sms, number } = req.body;
        const from = "Vonage APIs";
        const to = number;
        const text = sms;
        nexmo.message.sendSms(from, to, text, { type: 'unicode' }, (err, data) => {
            if (err)
                console.log(err);
            console.log(data);
        });
        res.send({ sms, number });
    }
    catch (err) {
        console.log(err);
    }
}));
module.exports = app;
//# sourceMappingURL=sms.js.map