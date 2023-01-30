from http.server import BaseHTTPRequestHandler

import telebot
import openai

openai.api_key = "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"
bot = telebot.TeleBot("5635268086:AAHyqpthIeHd-ytiv88-C43sFDOifNkFX88")

@bot.message_handler(content_types=["text"])
def handle_message(message):
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=f"{message.text}",
        max_tokens=1024,
        n=1,
        stop=None,
        temperature=0.5,
    )
    bot.send_message(message.chat.id, response.choices[0].text)

bot.polling()

class handler(BaseHTTPRequestHandler):

    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type','text/plain')
        self.end_headers()
        self.wfile.write('Hello, world!'.encode('utf-8'))
        return
