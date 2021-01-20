import sys
import numpy as np
import cv2, wget
import cloudinary.api
from flask import Flask, request, jsonify
import pickle
import os
import cv2
import cloudinary
from conf import CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, PREDICTION_TO_LETTER

# TODO - Download model here
filename = 'model_name'
app = Flask(__name__)
model = pickle.load(open(filename,'rb'))

cloudinary.config(
  cloud_name = CLOUDINARY_CLOUD_NAME,
  api_key = CLOUDINARY_API_KEY,
  api_secret = CLOUDINARY_API_SECRET
)


@app.route('/image_predict', methods=['GET'])
def predict_sign():
    # TODO- test this out with real model
    try:
        im = cloudinary.api.resource(request.args.get("public_id"))
        im_file = wget.download(im['url'])
        im_arr = cv2.resize(cv2.imread(im_file), (224, 224))
        prediction = PREDICTION_TO_LETTER[model.predict(im_arr)]
    except Exception as e:
        return f"Error: {e}"
    return str(prediction)


@app.route('/multi_image_predict', methods=['GET'])
def predict_sign_multi():
    # TODO - Try with actual model, validate request args
    try:
        predictions = np.array([0 for _ in range(len(PREDICTION_TO_LETTER.keys()))])
        for im_id in request.args.get("public_ids"):
            im = cloudinary.api.resource(im_id)
            im_file = wget.download(im['url'])
            im_arr = cv2.resize(cv2.imread(im_file), (224, 224))
            prediction = model.predict(im_arr)
            predictions[prediction] += 1
        prediction = PREDICTION_TO_LETTER[np.argmax(predictions)]
    except Exception as e:
         return f"Error: {e}"
    return str(prediction)


if __name__ == "main":
    port = os.environ.get('PORT')

    if port:
        app.run(host='0.0.0.0', port=int(port))
    else:
        app.run()