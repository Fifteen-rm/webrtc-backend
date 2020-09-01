import * as twilio from 'twilio';
import {TwilioConfig} from './config/signalConfig';


const AccessToken = twilio.jwt.AccessToken;
const { VideoGrant } = AccessToken;

const generateToken = (config: TwilioConfig): any  => {
  return new AccessToken(
    config.twilio.accountSid,
    config.twilio.apiKey,
    config.twilio.apiSecret
  );
};

export const videoToken = (identity: string, room: string, config: TwilioConfig): any => {
  let videoGrant:any;
  if (typeof room !== 'undefined') {
    videoGrant = new VideoGrant({ room });
  } else {
    videoGrant = new VideoGrant();
  }
  const token = generateToken(config);
  token.addGrant(videoGrant);
  token.identity = identity;
  return token;
};
