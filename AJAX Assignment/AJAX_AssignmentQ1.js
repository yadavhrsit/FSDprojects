// JS File for AJAX Assignment Question 1

function restrauntsdata() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
      }
    };
    xhttp.open("GET", "RestrauntsData.xml", true);
    xhttp.send();
  }
  function myFunction(xml) {
    var i;
    var xmlDoc = xml.responseXML;

    var x = xmlDoc.getElementsByTagName("restaurant");
    var attrMap=[];
    var j=0;

     for (i = 0; i <x.length; i++) { 
        attrMap[j]=x[i].attributes;
        j++;
       }

     for (i = 0; i <attrMap.length; i++) {
        if(attrMap[i].getNamedItem("type").value == "bar"){
            var list ="<ul style=color:Tomato;>";
        }
        else{
            var list ="<ul style=color:DodgerBlue;>";
        }
        
         list += "<li>" + attrMap[i].getNamedItem("name").value + "</li> ";
         list += "<li>" + attrMap[i].getNamedItem("address").value + "</li>";
         list += "</ul>";
         
         document.getElementById("container").innerHTML += list;
       }
        
      
    } 

  restrauntsdata();