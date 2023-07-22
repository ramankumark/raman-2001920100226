from flask import Flask, jsonify, request
import requests
import json
import time

app = Flask(_name_)

def fetch_numbers_from_url(url):
    try:
        response = requests.get(url, timeout=0.5)
        if response.status_code == 200:
            data = response.json()
            return data.get("numbers", [])
    except requests.exceptions.Timeout:
        pass
    except requests.exceptions.RequestException:
        pass
    return []

@app.route('/numbers', methods=['GET'])
def get_numbers():
    urls = request.args.getlist('url')

    unique_numbers = set()
    for url in urls:
        numbers = fetch_numbers_from_url(url)
        unique_numbers.update(numbers)

    sorted_numbers = sorted(list(unique_numbers))

    return jsonify({"numbers": sorted_numbers})

if _name_ == '_main_':
    app.run(port=8008)