from flask import *

web = Flask(__name__)



@web.route("/iloveu")
def home():
    return render_template("gender.html")


@web.route("/love")
def girl():
    return render_template("love.html")


web.run(debug=True)