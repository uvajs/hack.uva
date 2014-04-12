import os
from twilio import rest

abspath = os.path.abspath(__file__)
dname = os.path.dirname(abspath)
os.chdir(dname)

account_sid = os.environ['TWILIO_SID']
auth_token = os.environ['TWILIO_TOKEN']

client = rest.TwilioRestClient(account_sid, auth_token)


def send_message(text):
    f = open('phones.csv')
    numbers = f.read().split('\r')
    for number in numbers:
        print number
        message = client.sms.messages.create(body=text,
            to=number,
            from_="+14438981316")


if __name__ == "__main__":
    pass
