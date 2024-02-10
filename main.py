from flask import *
from pafy import new
# from pywhatkit import playonyt
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
    
    # with open("requests.txt","a+") as file:
    #    file.write(f"from = {frm}, to = {to},  song = {decode(song)}\n")
    #    file.close()
        
    return render_template("you.html",frm=frm,to=to,tlen=len(to.replace(" ","")))


@web.route("/iloveu")
def love():

    song = session["song"]

    try:
        song != None
        query = decode(song)
        yt_url = VideosSearch(query).result()["result"][1]["link"]
        url = new(yt_url).getbestaudio().url
    
    except Exception as e:
        print(str(e))
        return "<error>Error Code : 420<br>Change the query and try again.</error>"

    return render_template("love.html",url=url.replace("\n",""))



#if __name__ == "__main__":
#    web.run(debug=True)