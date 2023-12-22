
from tech.helper import preprocessing, outputprocessing
import tensorflow as tf


model = tf.keras.models.load_model("data/my_model.h5")

def prediksi(user_input):
  input = preprocessing(user_input)
  prediction = model.predict(input)
  output = outputprocessing(prediction)
  return output
