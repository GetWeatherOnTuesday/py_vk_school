import vk_api
import json
from vk_api.longpoll import VkLongPoll, VkEventType

vk_session = vk_api.VkApi(
    token="760b06693f2c51021e2064fe392c96f758e3d88cbd3bb209f1b484a1c576daac78cf460941fe9920753d9")
session_api = vk_session.get_api()
longpool = VkLongPoll(vk_session)


def get_keyboard(btns):
    btn = []
    for i in range(len(btns)):
        btn.append([])
        for k in range(len(btns[i])):
            btn[i].append(None)
    for i in range(len(btns)):
        for k in range(len(btns[i])):
            text = btns[i][k][0]
            btn[i][k] = {"action": {
                "type": "text", "payload": "{\"button\": \"" + "1" + "\"}", "label": f"{text}"}}
    first_keyboard = {'one_time': False, 'buttons': btn}
    first_keyboard = json.dumps(
        first_keyboard, ensure_ascii=False).encode('utf-8')
    first_keyboard = str(first_keyboard.decode('utf-8'))
    return first_keyboard


def send_some_msg(id, some_text):
    vk_session.method("messages.send", {
                      "user_id": id, "message": some_text, "random_id": 0})


for event in longpool.listen():
    if event.type == VkEventType.MESSAGE_NEW:
        if event.to_me:
            msg = event.text.lower()
            id = event.user_id
            if msg == "hi":
                send_some_msg(id, "Hi friend!")
