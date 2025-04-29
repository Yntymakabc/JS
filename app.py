from flask import Flask, jsonify, request
from collections import defaultdict
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes
db = defaultdict(str)


@app.route('/sum')
def get_sum_query():
    try:
        a = int(request.args.get('a', 0))
        b = int(request.args.get('b', 0))
        return ({"sum": a + b})
    except ValueError:
        return jsonify({"error": "Parameters must be integers"}), 400

@app.route('/')
def hello():
    return jsonify("hello")

@app.route('/add_user')
def add_user():
    name = str(request.args.get("name", "asan"))
    age = int(request.args.get("age", "15"))
    db[name] = age
    return jsonify({"success":True,
                   "message":"user added successfully",
                   "user":{
                       "name":name,
                       "age":age}
                       })


@app.route("/get_users")
def get_user():
    return jsonify(dict(db))


@app.route("/delete_user", methods = ["DELETE", "GET"])
def delete_user():
    name = str(request.args.get("nameToDelete"))
    try:
        del db[name]
        return jsonify({
            "success":True, 
            "message":"susseccfully deleted"
        })
    except:
        return jsonify({
            "message":"the user is not found"
        })
    
from random import randint
@app.route("/get_question")
def get_question():
    num = randint(0,100)
    num2 = randint(0,100)
    return jsonify({
        "question": f"{num} + {num2}", 
        "anwer": num+num2
    })
        
    




if __name__ == '__main__':
    app.run(debug=True)