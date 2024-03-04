const crypto = require('crypto');
const hashService = require('./hash-service');

const smsSid = "AC6d633e3d35b9ed554f81ecdd1ae18e01";
// const smsSid = process.env.SMS_SID;

const smsAuthToken = "8c6a2fca787692338a531ea2b71034b9";
const twilio = require('twilio')(smsSid, smsAuthToken, {
    lazyLoading: true,
});

class OtpService {
    async generateOtp() {
        const otp = crypto.randomInt(1000, 9999);
        return otp;
    }

    async sendBySms(phone, otp) {
        return await twilio.messages.create({
            to: phone,
            from: process.env.SMS_FROM_NUMBER,
            body: `Your codershouse OTP is ${otp}`,
        });
    }

    verifyOtp(hashedOtp, data) {
        let computedHash = hashService.hashOtp(data);
        return computedHash === hashedOtp;
    }
}

module.exports = new OtpService();
