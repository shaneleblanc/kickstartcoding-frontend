# "bottle.py" is a simple Python framework for writing web-servers. It does
# the same sorts of things as Django, except its much simpler and is only
# in one file.
from bottle import route, run, request

import json
import io


# Some top rated movies from IMDB
movies = [
    {
        'name': 'The Shawshank Redemption',
        'desc': 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        'rate': 9.3,
        'year': 1994,
        'director': 'Frank Darabont',
        'length': 142,
    },
    {
        'name': 'The Godfather',
        'desc': 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
        'rate': 9.2,
        'year': 1972,
        'director': 'Francis Ford Coppola',
        'length': 175,
    },
    {
        'name': 'The Dark Knight',
        'desc': 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
        'rate': 9.0,
        'year': 2008,
        'director': 'Christopher Nolan',
        'length': 152,
    },
    {
        'name': 'The Godfather: Part II',
        'desc':'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.',
        'rate': 9.0,
        'year': 1974,
        'director': 'Francis Ford Coppola',
        'length': 202,
    },
    {
        'name': 'The Room',
        'desc': 'Johnny is a successful banker who lives happily in a San Francisco townhouse with his fiancée, Lisa. One day, inexplicably, she gets bored with him and decides to seduce his best friend, Mark. From there, nothing will be the same again.',
        'rate': 10.0,
        'year': 2004,
        'director': 'Tommy Wiseau',
        'length': 99,
    },
]

@route('/api/all')
def index():
    return {
        'movies': movies,
    }

@route('/api/search/<search_term>')
def index(search_term):
    search_term = search_term.lower()
    return {
        'results': [
            movie for movie in movies
            if search_term in movie.get('name', '').lower()
        ],
    }

@route('/api/add/movie', method='POST')
def index():
    info = json.load(io.TextIOWrapper(request.body))
    movies.append(info)
    return {
        'success': True,
    }

run(host='localhost', port=8080)
