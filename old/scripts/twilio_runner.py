import os
import twilio
from twilio import rest

abspath = os.path.abspath(__file__)
dname = os.path.dirname(abspath)
os.chdir(dname)

account_sid = os.environ['TWILIO_SID']
auth_token = os.environ['TWILIO_TOKEN']

client = rest.TwilioRestClient(account_sid, auth_token)


def send_message(text, debug=True):
    f = open('phones.csv')
    numbers = f.read().split('\r')

    if debug:
        numbers = ["7035992135", "7033002527"]

    for number in numbers:
        print number
        try:
            message = client.sms.messages.create(body=text,
            to=number,
            from_="+14438981316")
        except twilio.TwilioRestException:
            continue


if __name__ == "__main__":
    pass