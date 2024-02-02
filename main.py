from flask import *




web = Flask(__name__)



@web.route("/link")
def home():
    return render_template("link.html")


@web.route("/you")
def you():
    args = request.args
    frm = args["from"]
    to = args["to"]
    song = args["song"]
    return render_template("you.html",frm=frm,to=to,tlen=len(to))


@web.route("/iloveu")
def love():
    return render_template("love.html")



web.run(debug=True)