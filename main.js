function showname(){
    var firstname = document.getElementById("first-name").value;
    var secondname = document.getElementById("second-name").value;
  

    var fullname = firstname + " "+ secondname;
    document.getElementById("full-name").innerHTML=fullname
}