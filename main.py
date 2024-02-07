from flask import *
from pafy import new
# from pywhatkit import playonyt
from youtubesearchpython import VideosSearch


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
        song = args["song"].strip()
        print(song)
        
    except:
        return "<html><error>code=100<br>Invalid Data</error></html>"
        
    return render_template("you.html",frm=frm,to=to,tlen=len(to))


@web.route("/iloveu")
def love():
    url = None
    if song!=None:
        query = song.replace("%"," ")
        yt_url = VideosSearch(query).result()["result"][0]["link"]
        url = new(yt_url).getbestaudio().url
    
    else:
        return "<html>Error Code : 420<br>Change the query and try again.</html>"

    return render_template("love.html",url=url)


web.run(debug=True)