import os
import random
import gspread

from flask import Flask, render_template, request, redirect, url_for
app = Flask(__name__)

from oauth2client.service_account import ServiceAccountCredentials


@app.route("/")
def index():
   return render_template("index.html", title="Housing Trust Silicon Valley")
   
@app.route("/submitInfo", methods=["GET", "POST"])
def submitFormData():
   scope = ['https://spreadsheets.google.com/feeds']
   credentials = ServiceAccountCredentials.from_json_keyfile_name('My Project-45323bc9a439.json', scope)
   gc = gspread.authorize(credentials)
   sheet1 = gc.open_by_key('1vSpb9VceQ21GzBA2DtsjaGZPy401HU2cwi3J6hxUZFw')
   worksheet = sheet1.get_worksheet(0)
   
   formData= []
   
   formData.append(str(request.form["name"]))
   formData.append(str(request.form["address"]))
   formData.append(str(request.form["phone1"]))
   formData.append(str(request.form["phone2"]))
   formData.append(str(request.form["Email1"]));
   formData.append(str(request.form["Email2"]));
   formData.append(str(request.form["live"]));
   formData.append(str(request.form["live2"]));
   formData.append(str(request.form["work"]));
   formData.append(str(request.form["work2"]));
   formData.append(str(request.form["home"]));
   formData.append(str(request.form["adult"]));
   formData.append(str(request.form["children"]));
   formData.append(str(request.form["address2"]));
   formData.append(str(request.form["sold"]));
   formData.append(str(request.form["lender"]));
   formData.append(str(request.form["company"]));
   formData.append(str(request.form["phone3"]));
   formData.append(str(request.form["monthly"]));
   formData.append(str(request.form["yearly"]));
   formData.append(str(request.form["down"]));
   formData.append(str(request.form["source"]));
   formData.append(str(request.form["assets"]));
   formData.append(str(request.form["hud"]));
   formData.append(str(request.form["contact"]));
   formData.append(str(request.form["three"]));
   formData.append(str(request.form["bmp"]));
   formData.append(str(request.form["hud2"]));
   formData.append(str(request.form["assets2"]));
   print formData
   worksheet.append_row(formData)
   return render_template("result.html");

if __name__ == "__main__":
   app.run(host=os.getenv('IP', '0.0.0.0'),port=int(os.getenv('PORT', 8080)))

   