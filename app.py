from flask import Flask, render_template, request, session
app = Flask(__name__)

app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'

@app.route('/', methods=['POST', 'GET'])
def mainPage():
    data = {
        "grid-size": '4'
    }
    if request.method == 'POST':
        gridSize = request.form["input-number"]
        if int(gridSize) < 2 or int(gridSize) > 50:
            data = {
                "grid-size": session['grid-size'],
                "valid": "no"
            }
        else:
            session['grid-size'] = gridSize
            data = {
                "grid-size": session['grid-size'],
                "valid": "yes"
            }  
        return render_template('index.html', data=data)
    else:
        return render_template('index.html', data=data)