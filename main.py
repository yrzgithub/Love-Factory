from flask import *
from pafy import new
from youtubesearchpython import VideosSearch
from base64 import b64decode


web = Flask(__name__)
web.config["SECRET_KEY"] = "yrzapps.love_factory"


@web.route("/")
def noslash():
    return redirect("generate")


@web.route("/generate")
def home():
    return render_template("link.html")


def decode(query):
    return b64decode(query).decode()


@web.route("/you")
def you():
    args = request.args
    try:
        frm = args["from"].strip()
        to = args["to"].strip()
        song = args["dedicate"].strip()
        session["song"] = song
        
    except Exception as e:
        print(str(e))
        return "<error>Error code : 420<br>Reason : Invalid Data</error>"
        
    return render_template("you.html",frm=frm,to=to,tlen=len(to.replace(" ","")))


@web.route("/get_stream_url/<song>")
def get_stream_url(song):
    yt_url = VideosSearch(song).result()["result"][1]["link"]
    stream_url = new(yt_url).getbestaudio().url
    return stream_url


@web.route("/get_stream")
def getStream():
    return get_stream_url(decode(session["song"]))


@web.route("/iloveu")
def love():

    try:
        song = session["song"]
        url = get_stream_url(decode(song))
    
    except Exception as e:
        print(str(e))
        return "<error>Error Code : 420<br>Change the query and try again.</error>"
    
    return render_template("love.html",url=url)
