var inputs = [];

function search(){
  var searchQuery = document.getElementById("userInput").value;
  if(typeof searchQuery === 'string' && searchQuery.length === 0){
    alert("Please enter a country");
  }
  else{
    document.getElementById("resultArea").innerText="Getting Population Data";
    getCountryPopulation(searchQuery);
  }
}

function getCountryPopulation(searchQuery) {
    var xhttp = new XMLHttpRequest();
    let searchReq="https://api.api-ninjas.com/v1/country?name="+searchQuery;
    console.log(searchReq);
    xhttp.open("GET", searchReq,true);
    xhttp.setRequestHeader('X-Api-Key', '9adG7iI1x/NcPOu2COMoiw==LcQX2Uj1SdzYFQ9Y');
    xhttp.responseType="json";
    xhttp.onload = function (){
      if (this.status === 200) {
        myFunction(this);
      }

    }
    xhttp.send();
  }

  
  function myFunction(jsonObj) {
    var result = jsonObj.response;
    if(result[0]==null){
      alert("Invalid Country Name");
      document.getElementById("resultArea").innerText="";
    }
    else{
    var countryName=result[0].name;
    var population = result[0].population;
    inputs.push({"countryName":countryName,"population":population});
    document.getElementById("resultArea").innerText=countryName+" has "+population*1000+" people";
    }
  } 


  