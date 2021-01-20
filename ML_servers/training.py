import pandas as pd
import os
import cv2
import numpy as np
# TODO - Add training server code
folders = os.listdir("asl_alphabet_train")[1:]

X = []
Y = []

for folder in folders:
    path = f"asl_alphabet_train/{folder}"
    images = os.listdir(path)
    for im_name in images:
        im_path = path + "/" + im_name
        image = cv2.resize(cv2.imread(im_path), (224, 224))
        X.append(image)
        Y.append(folder)
Y = np.array(Y)
X = np.array(X)