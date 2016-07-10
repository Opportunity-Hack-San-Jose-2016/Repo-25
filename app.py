import os
import random

from flask import Flask, render_template, request, redirect, url_for
app = Flask(__name__)

@app.route("/")
def index():
   return render_template("index.html", title="Housing Trust Silicon Valley")
   
@app.route("/submitInfo", methods=["GET", "POST"])
def submitFormData():
   formData= {};
   name = request.form["name"];
   formData["name"]=str(name);
   address = request.form["address"];
   formData["address"]=str(address);
   phone1 = request.form["phone1"];
   formData["phone1"]=str(phone1);
   phone2 = request.form["phone2"];
   formData["phone2"]=str(phone2);
   Email1 = request.form["Email1"];
   formData["Email1"]=str(Email1);
   Email2 = request.form["Email2"];
   formData["Email2"]=str(Email2);
   live = request.form["live"];
   formData["live"]=str(live);
   live2 = request.form["live2"];
   formData["live2"]=str(live2);
   work = request.form["work"];
   formData["work"]=str(work);
   work2 = request.form["work2"];
   formData["work2"]=str(work2);
   home = request.form["home"];
   formData["home"]=str(home);
   adult = request.form["adult"];
   formData["adult"]=str(adult);
   children = request.form["children"];
   formData["children"]=str(children);
   address2 = request.form["address2"];
   formData["address2"]=str(address2);
   sold = request.form["sold"];
   formData["sold"]=str(sold);
   lender = request.form["lender"];
   formData["lender"]=str(lender);
   company = request.form["company"];
   formData["company"]=str(company);
   phone3 = request.form["phone3"];
   formData["phone3"]=str(phone3);
   monthly = request.form["monthly"];
   formData["monthly"]=str(monthly);
   yearly = request.form["yearly"];
   formData["yearly"]=str(yearly);
   down = request.form["down"];
   formData["down"]=str(down);
   source = request.form["source"];
   formData["source"]=str(source);
   assets = request.form["assets"];
   formData["assets"]=str(assets);
   hud = request.form["hud"];
   formData["hud"]=str(hud);
   contact = request.form["contact"];
   formData["contact"]=str(contact);
   three = request.form["three"];
   formData["three"]=str(three);
   bmp = request.form["bmp"];
   formData["bmp"]=str(bmp);
   hud2 = request.form["hud2"];
   formData["hud2"]=str(hud2);
   assets2 = request.form["assets2"];
   formData["assets2"]=str(assets2);
   print formData
   return render_template("result.html");

if __name__ == "__main__":
   app.run(host=os.getenv('IP', '0.0.0.0'),port=int(os.getenv('PORT', 8080)))

   