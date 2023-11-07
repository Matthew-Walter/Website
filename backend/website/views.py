from flask import Blueprint, request, jsonify, make_response
import json
import datetime
from .YoutubeScraper import Scraper

x = datetime.datetime.now()


views = Blueprint('views', __name__)


@views.route('/')
def home():
    comments = Scraper()
    if request.method == "OPTIONS":  # CORS preflight
        return _build_cors_preflight_response()
    elif request.method == "GET":  # The actual request following the preflight
        jsonstr = "comments: ["
        jsondict = []
        for x in comments:
            jsondict.append(x.__dict__)
        jsondict2 = {"data": jsondict}
        return _corsify_actual_response(jsonify(jsondict2))
    else:
        raise RuntimeError(
            "Weird - don't know how to handle method {}".format(request.method))


@views.route('/data')
def get_time():
    return {
        'Name': "geek",
        "Age": "22",
        "Date": x,
        "programming": "python"
    }


def _build_cors_preflight_response():
    response = make_response()
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add("Access-Control-Allow-Headers", "*")
    response.headers.add("Access-Control-Allow-Methods", "*")
    return response


def _corsify_actual_response(response):
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response
