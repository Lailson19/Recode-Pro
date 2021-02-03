from flask import Flask, render_template, request

app = Flask(__name__, template_folder="./src/views")

# Rotas com verbos-------------------------------------

@app.route("/", methods=["GET","POST"])
def home():
    if(request.method == "GET"):
        return render_template("index.html")
    else:
        if(request.form["num1"] != "" and request.form["num2"] != ""):
            num1 = request.form["num1"]
            num2 = request.form["num2"]

            if(request.form["opc"] == "soma"):
                soma = int(num1) + int(num2)
                return {
                    "Resultado": str(soma)
                }
            elif (request.form["opc"] == "subt"):
                sub = int(num1) - int(num2)
                return {
                    "Resultado": str(sub)
                }
            elif (request.form["opc"] == "mult"):
                mult = int(num1) * int(num2)
                return {
                    "Resultado": str(mult)
                }
            else:
                div = int(num1) // int(num2)
                return {
                    "Resultado": str(div)
                }
        else:
            return "Informe um valor válido!"

# @app.route("/<id>")
# def home_id(id):
#     return id

# Rota de erros----------------------------------------

@app.errorhandler(404)
def not_found(error):
    return render_template("erro.html")

# Servidor---------------------------------------------
app.run(port=8000, debug=True)