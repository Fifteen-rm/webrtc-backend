import { Logger } from "tslog";
const log: Logger = new Logger({ name: "config logger" });
import * as dotenv from "dotenv";
dotenv.config();

export const getSiganlConfig = (): Twillo => {
    return new Twillo(
        new TwilloModel(
            process.env?.TWILIO_ACCOUNT_SID ?? " ", 
            process.env?.TWILIO_API_KEY ?? " ", 
            process.env?.TWILIO_API_SECRET ?? " ")
    );
};

class Twillo {
    twillo: TwilloModel;

    constructor(twillo: TwilloModel) {
        this.twillo = twillo;
    }
}
class TwilloModel {
    accountSid: string;
    apiKey: string;
    apiSecret: string;

    constructor(accoutSid: string, apiKey: string, apiSecret: string) {
        this.accountSid = accoutSid;
        this.apiKey = apiKey;
        this.apiSecret = apiSecret;
    }
}

