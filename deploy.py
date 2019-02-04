from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def home():
   return render_template("index.html")

@app.route("/tester.html")
def tester():
    return "test success"

@app.errorhandler(404)
def contentNotFound(e):
   return "alan please add details", 404


if __name__ == "__main__":
   app.run(debug=True)
