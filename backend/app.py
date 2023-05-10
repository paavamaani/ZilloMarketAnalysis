from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'

cors = CORS(app, resources={r"/predict": {"origins": "http://localhost:3000"}})

@app.route('/predict', methods=['POST', 'OPTIONS'])
def predict():
    if request.method == 'OPTIONS':
        headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST',
            'Access-Control-Allow-Headers': 'Content-Type'
        }
        return ('', 204, headers)
    elif request.method == 'POST':
        try:
            data = request.get_json()
            model_input = np.array(data["list"])
            prediction = model.predict(model_input)

            return jsonify({'prediction': prediction.tolist()})

        except ValueError as v:
            return jsonify(str(v))

if __name__ == '__main__':
    app.run(port=3001)
