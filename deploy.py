from flask import Flask, render_template, send_from_directory
import os
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

@app.route("/secret.html")
def superSecret():
   return render_template("secret.html")

@app.route("/bulletin.html")
def bulletinBoard():
   return render_template("bulletin.html")

@app.route('/favicon.ico')
def favicon(): 
    return send_from_directory(os.path.join(app.root_path, 'static'),
                          'favicon.ico',mimetype='image/vnd.microsoft.icon')

if __name__ == "__main__":
   app.run(debug=True)
