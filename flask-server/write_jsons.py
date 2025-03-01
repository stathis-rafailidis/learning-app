# Python program to write JSON
# to a file


import json

# Data to be written
math_1 = [
    {
        "ID": 1,
        "problem": '1 + 1 = ?',
        "answer": 2
    },
    {
        "ID": 2,
        "problem": '2 + 2 = ?',
        "answer": 4
    },
    {
        "ID": 3,
        "problem": '3 + 3 = ?',
        "answer": 6
    },
    {
        "ID": 4,
        "problem": '4 + 4 = ?',
        "answer": 8
    }
]

with open("sample.json", "w") as outfile:
	json.dump(math_1, outfile, indent=4)
