from flask import *
from pafy import new
# from pywhatkit import playonyt
from youtubesearchpython import VideosSearch
from base64 import b64decode


web = Flask(__name__)
song = None


@web.route("/")
def noslash():
    return redirect("generate")


@web.route("/generate")
def home():
    return render_template("link.html")


@web.route("/you")
def you():
    global song
    args = request.args
    try:
        frm = args["from"].strip()
        to = args["to"].strip()
        song = args["dedicate"].strip()
        
    except:
        return "<error>Error code : 420<br>Reason : Invalid Data</error>"
        
    return render_template("you.html",frm=frm,to=to,tlen=len(to.replace(" ","")))


@web.route("/iloveu")
def love():
    url = None
    if song!=None:
        query = b64decode(song).decode()
        yt_url = VideosSearch(query).result()["result"][0]["link"]
        url = new(yt_url).getbestaudio().url
    
    else:
        return "<error>Error Code : 420<br>Change the query and try again.</error>"

    return render_template("love.html",url=url)


web.run(debug=True)