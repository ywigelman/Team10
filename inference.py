import numpy as np
import wget
import cloudinary.api
from flask import Flask, request
import os
import cv2
import cloudinary
from keras.models import model_from_json

p_app = Flask(__name__)

PREDICTION_TO_LETTER: dict = {0: 'A', 1: 'B', 2: 'C', 3: 'D', 4: 'E', 5: 'F', 6: 'G', 7: 'H', 8: 'I', 9: 'J', 10: 'K',
                              11: 'L', 12: 'M', 13: 'N', 14: 'O', 15: 'P', 16: 'Q', 17: 'R', 18: 'S', 19: 'T', 20: 'U',
                              21: 'V', 22: 'W', 23: 'X', 24: 'Y', 25: 'Z', 26: 'del', 27: 'nothing', 28: 'space'}


with open('model.json', 'r') as f:
    model = model_from_json(f.read())
    model.summary()
    model.load_weights('weights.h5')

cloudinary.config(
    cloud_name=os.environ['CLOUDINARY_CLOUD_NAME'],
    api_key=os.environ['CLOUDINARY_API_KEY'],
    api_secret=os.environ['CLOUDINARY_API_SECRET']
)


@p_app.route('/image_predict', methods=['GET'])
def predict_sign():
    try:
        im = cloudinary.api.resource(request.args.get("public_id"))
        im_file = wget.download(im['url'])
        im_arr = cv2.resize(cv2.imread(im_file), (224, 224)).reshape(1, 224, 224, 3)
        prediction = PREDICTION_TO_LETTER[np.argmax(model.predict(im_arr))]
    except Exception as e:
        return f"Error: {e}"
    return str(prediction)


@p_app.route('/multi_image_predict', methods=['GET'])
def predict_sign_multi():
    try:
        predictions = np.array([0 for _ in range(len(PREDICTION_TO_LETTER.keys()))])
        for im_id in request.args.get("public_ids"):
            im = cloudinary.api.resource(im_id)
            im_file = wget.download(im['url'])
            im_arr = cv2.resize(cv2.imread(im_file), (224, 224)).reshape(1, 224, 224, 3)
            prediction = model.predict(im_arr)
            predictions[np.argmax(prediction)] += 1
        prediction = PREDICTION_TO_LETTER[np.argmax(predictions)]
    except Exception as e:
        return f"Error: {e}"
    return str(prediction)


if __name__ == "main":
    port = os.environ.get('PORT')
    if port:
        p_app.run(host='0.0.0.0', port=int(port))
    else:
        p_app.run()
