// $.ajax({
//     method: 'GET',
//     url: 'https://api.api-ninjas.com/v1/country?name=United States',
//     headers: { 'X-Api-Key': '9adG7iI1x/NcPOu2COMoiw==LcQX2Uj1SdzYFQ9Y'},
//     contentType: 'application/json',
//     success: function(result) {
//         console.log(result[0].population);
//         console.log(result[0].name);
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });

function getCountryPopulation() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
      }
    };
    xhttp.open("GET", "https://api.api-ninjas.com/v1/country?name=United States", true);
    xhttp.setRequestHeader('X-Api-Key', '9adG7iI1x/NcPOu2COMoiw==LcQX2Uj1SdzYFQ9Y');
    xhttp.responseType="json";
    xhttp.send();
  }

  
  function myFunction(jsonObj) {
    var result = jsonObj.response;
    console.log(result[0].name);
    console.log(result[0].population);

    } 

    getCountryPopulation();