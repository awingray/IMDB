import json
import io
import collections
import bson
from pymongo import MongoClient
import ast
import re

# Requires the PyMongo package.
# https://api.mongodb.com/python/current

client = MongoClient(
    'mongodb+srv://admin:admin@cluster0.6vb9c.mongodb.net/imdb?retryWrites=true&w=majority')


# print(client['imdb']['movies'].find_one())

with open('movies.json', encoding="utf-8") as json_file:
    data = json.load(json_file)

actorLst = []
# print(res[1])

for i in range(62058):

    metascore = data[i]['metascore']
    year = data[i]['year']
    users_rating = data[i]['users_rating']
    votes = data[i]['votes']

    if votes != "":
        votes = int(re.sub('[\,]', '', votes))

    if year != "":
        year = int(year)

    if metascore != "":
        metascore = int(metascore)

    if users_rating != "":
        users_rating = float(users_rating)

    genre = data[i]['genre']
    genre = ast.literal_eval(genre)
    actors = data[i]['actors']
    actors = ast.literal_eval(actors)
    languages = data[i]['languages']
    languages = ast.literal_eval(languages)
    countries = data[i]['countries']
    countries = ast.literal_eval(countries)

    directors = data[i]['directors']
    if directors != "":
        directors = ast.literal_eval(directors)

    description = data[i]['description']
    imdb_url = data[i]['imdb_url']
    img_url = data[i]['img_url']
    rating = data[i]['rating']
    runtime = data[i]['runtime']
    tagline = data[i]['tagline']
    title = data[i]['title']

    dat = dict({"actors": actors, "countries": countries, "description": description, "directors": directors, "genre": genre, "imdb_url": imdb_url, "img_url": img_url,
                "languages": languages, "metascore": metascore, "rating": rating, "runtime": runtime, "tagline": tagline, "title": title, "users_rating": users_rating, "votes": votes, "year": year})

    # client['imdb']['movies'].insert_one(dat)
##    for act in actors:
##        if act not in actorLst:
##            actorLst.append(act)



