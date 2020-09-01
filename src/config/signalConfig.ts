import { Logger } from "tslog";
import * as dotenv from "dotenv";

const log: Logger = new Logger({ name: "config logger" });
dotenv.config();

export const getSiganlConfig = (): TwilioConfig => {
    return new TwilioConfig(
        new TwilloModel(
            process.env?.TWILIO_ACCOUNT_SID ?? " ", 
            process.env?.TWILIO_API_KEY ?? " ", 
            process.env?.TWILIO_API_SECRET ?? " ")
    );
};

export class TwilioConfig {
    twilio: TwilloModel;

    constructor(twillo: TwilloModel) {
        this.twilio = twillo;
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

