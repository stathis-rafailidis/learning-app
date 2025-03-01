from flask import Flask, jsonify, request
import json
app = Flask(__name__)


# Opening JSON file
with open('..//sample.json', 'r') as openfile:
 
    # Reading from json file
    json_object_math_1 = json.load(openfile)



dictionary = {
        "word1": "definition1",
        "word2": "definition2",
        "word3": "definition3"
    }

topics = {
    # "math1": {"title": "Math 1", "content": "This is Math 1 content."},
    "math1": json_object_math_1,
    "math2": {"title": "Math 2", "content": "This is Math 2 content."},
    "math3": {"title": "Math 3", "content": "This is Math 3 content."}
}

@app.route('/api/topic/<topic>', methods=['GET'])
def get_topic(topic):
    if topic in topics:
        return jsonify(topics[topic])
    else:
        return jsonify({"error": "Topic not found"}), 404

@app.route("/members")
def members():
    return {"mem": ['mem1', 'mem2', 'mem3', 'mem4']}
    

@app.route('/api/dictionary')
def get_dictionary():
    
    return jsonify(dictionary)

@app.route('/api/dictionary', methods=["POST"])
def add_word():
    new_word = request.json
    dictionary.update(new_word)
    # Logic to add the new word to the dictionary
    print(dictionary)
    return jsonify(new_word), 201

if __name__ == "__main__":
    app.run(debug=True)