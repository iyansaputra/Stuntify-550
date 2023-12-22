import pickle
from sklearn.preprocessing import LabelEncoder
import numpy as np
import pandas as pd
from sklearn.preprocessing import MinMaxScaler


def labelencode(path : str):
    with open(path, "rb") as labelen:
        label = pickle.load(labelen)
    return label

label_stunting =  LabelEncoder()
label_stunting.fit(['No', 'Yes'])
label_gender = LabelEncoder()
label_gender.fit(['Male', 'Female'])
scalling = MinMaxScaler(feature_range=(0, 17))

def preprocessing(input):
    df = pd.DataFrame([input])
   
    df['jenis_kelamin'] = label_gender.transform(df['jenis_kelamin'])

    # Tangani penskalaan (asumsikan 'scalling' adalah MinMaxScaler)
    columns_to_scale = ['umur', 'berat_awal', 'tinggi_awal', 'tinggi', 'berat']
    df[columns_to_scale] = scalling.fit_transform(df[columns_to_scale])

    return df


def outputprocessing(output):
  threshold = 0.16
  predictions_binary = [0 if x >= threshold else 1 for x in output]
  output1 = label_stunting.inverse_transform(predictions_binary)[0]
  if output1 == "Yes":
      output1 = {"Sistem Stuntify memprediksi anak kekurangan gizi atau terindikasi stunting"}
  else:
      output1 = {"Sistem Stuntify memprediksi anak normal atau tidak terindikasi stunting"}
  return output1

