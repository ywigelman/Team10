import sys

from flask import Flask, request, jsonify
import pickle
import pandas as pd
import json
import os

filename = 'model_name'
app = Flask(__name__)
model = pickle.load(open(filename,'rb'))


@app.route('/predict_single', methods=['GET'])
def predict_single():
    try:
        df = pd.DataFrame.from_dict({feat: [float(request.args.get(feat))] for feat in request.args})
        prediction = model.predict(df)[0]
    except:
        return "URL not properly formatted. Try format: /predict_single?age=10&sex=1&trestbps=140&chol=193&fbs=0.0&restecg=0.0&thalach=145&exang=1.0&oldpeak=1.0&slope=2.0"
    return str(prediction)


@app.route('/predict_many', methods=['POST'])
def predict_many():
    try:
        content = json.loads(request.get_json())
        df = pd.DataFrame(content)
        prediction = model.predict(df)
    except Exception as e:
         return jsonify({'error':"JSON wrong format" })
    lists = prediction.tolist()
    return json.dumps(lists)


if __name__ == "main":
    port = os.environ.get('PORT')

    if port:
        app.run(host='0.0.0.0', port=int(port))
    else:
        app.run()