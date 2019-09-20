import os

import pandas as pd
import numpy as np
from datetime import datetime


from flask import Flask, jsonify, render_template
from flask_pymongo import PyMongo
import json
from bson import ObjectId

app = Flask(__name__)

# TODO make sure that "amazon_db" is name of the database (or rename it) - done
mongo = PyMongo(app, uri="mongodb://localhost:27017/amazon_db")


#################################################
# Database Setup
#################################################


class JSONEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, ObjectId):
            return str(o)
        return json.JSONEncoder.default(self, o)

@app.route("/")
def index():
    """Return the homepage."""
    return render_template("index.html")

@app.route("/comparison")
def comparison():
    """Return the homepage."""
    return render_template("comparison.html")


@app.route("/data_sources")
def sources():
    """Return the homepage."""
    return render_template("data_sources.html")

@app.route("/how_to_help")
def help():
    """Return the homepage."""
    return render_template("how_to_help.html")


@app.route("/cleanup_db")
def cleanup_db():
    # TODO make sure that "fires" is the name of the collection (or rename it) - done
    locations = mongo.db.fires.find({}, {'_id': False})
    locations = list(locations)
    clean_locations = []
    i = 0
    for location in locations:
        i += 1
        print(f"processed {i} of {len(locations)}")
        acq_date = location['acq_date']
        if not acq_date:
            print(f"missing acq_date for {location}")
            continue
        clean_location = {'latitude': location['latitude'],
                          'longitude': location['longitude'],
                          'acq_date': datetime.strptime(location['acq_date'], '%m/%d/%y')}
        clean_locations.append(clean_location)

    mongo.db.clean_fires.drop()
    mongo.db.clean_fires.insert(clean_locations)


@app.route("/amazon_fire_data/2014")
def amazon_fire_data():
    # TODO make sure that "fires" is the name of the collection (or rename it) - done
    # mongo.db.clean_fires.acq_date.find({"$expr": {"$eq": [{"$year": "$"}]}})
    year = 2014
    locations = mongo.db.clean_fires.find({'acq_date': { '$gte': datetime(year, 1, 1),
                                            '$lte': datetime(year + 1, 1, 1)}}, {'_id': False})
    # locations = mongo.db.clean_fires.find{acq_date: {$eq: 2014, $lt: end}, {'_id': False}}

    # print(JSONEncoder().encode(locations[1]))
    # loc1=JSONEncoder().encode(locations)

    # loc1=list(locations)
    print(locations[0])
    locations = list(locations)
    result = []
    for location in locations:
        acq_date = location['acq_date']
        if acq_date.year == 2014:
            result.append(location)
    return jsonify(result)

    # print(locations[1])
    # # TODO I am assuming that each document inside the fires collection has
    # #      latitude and longitude fields
    # #      (see "heatArray.push([location.latitude, location.longitude]);" inside app.js for more details)
    # # location.latitude, location.longitude
    #

@app.route("/amazon_fire_data/2015")
def amazon_fire_data_2015():
    # TODO make sure that "fires" is the name of the collection (or rename it) - done
    # mongo.db.clean_fires.acq_date.find({"$expr": {"$eq": [{"$year": "$"}]}})
    year = 2015
    locations_2015 = mongo.db.clean_fires.find({'acq_date': { '$gte': datetime(year, 1, 1),
                                            '$lte': datetime(year + 1, 1, 1)}}, {'_id': False})
    # locations = mongo.db.clean_fires.find{acq_date: {$eq: 2014, $lt: end}, {'_id': False}}

    # print(JSONEncoder().encode(locations[1]))
    # loc1=JSONEncoder().encode(locations)

    # loc1=list(locations)
    print(locations_2015[0])
    locations_2015 = list(locations_2015)
    result = []
    for location in locations_2015:
        acq_date = location['acq_date']
        if acq_date.year == 2015:
            result.append(location)
    return jsonify(result)


@app.route("/amazon_fire_data/2016")
def amazon_fire_data_2016():
    # TODO make sure that "fires" is the name of the collection (or rename it) - done
    # mongo.db.clean_fires.acq_date.find({"$expr": {"$eq": [{"$year": "$"}]}})
    year = 2016
    locations_2016 = mongo.db.clean_fires.find({'acq_date': { '$gte': datetime(year, 1, 1),
                                            '$lte': datetime(year + 1, 1, 1)}}, {'_id': False})
    # locations = mongo.db.clean_fires.find{acq_date: {$eq: 2014, $lt: end}, {'_id': False}}

    # print(JSONEncoder().encode(locations[1]))
    # loc1=JSONEncoder().encode(locations)

    # loc1=list(locations)
    print(locations_2016[0])
    locations_2016 = list(locations_2016)
    result = []
    for location in locations_2016:
        acq_date = location['acq_date']
        if acq_date.year == 2016:
            result.append(location)
    return jsonify(result)

@app.route("/amazon_fire_data/2017")
def amazon_fire_data_2017():
    # TODO make sure that "fires" is the name of the collection (or rename it) - done
    # mongo.db.clean_fires.acq_date.find({"$expr": {"$eq": [{"$year": "$"}]}})
    year = 2017
    locations_2017 = mongo.db.clean_fires.find({'acq_date': { '$gte': datetime(year, 1, 1),
                                            '$lte': datetime(year + 1, 1, 1)}}, {'_id': False})
    # locations = mongo.db.clean_fires.find{acq_date: {$eq: 2014, $lt: end}, {'_id': False}}

    # print(JSONEncoder().encode(locations[1]))
    # loc1=JSONEncoder().encode(locations)

    # loc1=list(locations)
    print(locations_2017[0])
    locations_2017 = list(locations_2017)
    result = []
    for location in locations_2017:
        acq_date = location['acq_date']
        if acq_date.year == 2017:
            result.append(location)
    return jsonify(result)

@app.route("/amazon_fire_data/2018")
def amazon_fire_data_2018():
    # TODO make sure that "fires" is the name of the collection (or rename it) - done
    # mongo.db.clean_fires.acq_date.find({"$expr": {"$eq": [{"$year": "$"}]}})
    year = 2018
    locations_2018 = mongo.db.clean_fires.find({'acq_date': { '$gte': datetime(year, 1, 1),
                                            '$lte': datetime(year + 1, 1, 1)}}, {'_id': False})
    # locations = mongo.db.clean_fires.find{acq_date: {$eq: 2014, $lt: end}, {'_id': False}}

    # print(JSONEncoder().encode(locations[1]))
    # loc1=JSONEncoder().encode(locations)

    # loc1=list(locations)
    print(locations_2018[0])
    locations_2018 = list(locations_2018)
    result = []
    for location in locations_2018:
        acq_date = location['acq_date']
        if acq_date.year == 2018:
            result.append(location)
    return jsonify(result)

@app.route("/amazon_fire_data/2019")
def amazon_fire_data_2019():
    # TODO make sure that "fires" is the name of the collection (or rename it) - done
    # mongo.db.clean_fires.acq_date.find({"$expr": {"$eq": [{"$year": "$"}]}})
    year = 2019
    locations_2019 = mongo.db.clean_fires.find({'acq_date': { '$gte': datetime(year, 1, 1),
                                            '$lte': datetime(year + 1, 1, 1)}}, {'_id': False})
    # locations = mongo.db.clean_fires.find{acq_date: {$eq: 2014, $lt: end}, {'_id': False}}

    # print(JSONEncoder().encode(locations[1]))
    # loc1=JSONEncoder().encode(locations)

    # loc1=list(locations)
    print(locations_2019[0])
    locations_2019 = list(locations_2019)
    result = []
    for location in locations_2019:
        acq_date = location['acq_date']
        if acq_date.year == 2019:
            result.append(location)
    return jsonify(result)


if __name__ == "__main__":
    app.run(debug=True)
