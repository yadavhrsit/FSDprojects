var modal = document.getElementById("myModal");
var btn = document.getElementById("addBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
    document.getElementsByClassName('heading')[0].value="";
    document.getElementsByClassName('content')[0].value="";
  modal.style.display = "none";
  
}

var addTicket = document.getElementById("addTicket");
addTicket.onclick = function(){

    var title = document.getElementsByClassName('heading')[0];
    var content = document.getElementsByClassName('content')[0];

    if(title.value ==="" || content.value ===""){
        alert("One or Both Fields are Empty");
    }
    else{
        var ticket = `<div class="ticket-container">
                    <div class="ticket-header">
                        <button class="buttons minimize-btn" onclick="minimizer(this)"> - </button>
                        <button class="buttons e-btn"> E </button>
                        <button class="buttons close-btn"onclick="closer(this)"> x </button>
                    </div>
                    <div class="ticket-body">
                        <textarea class="ticket-text">${title.value}
${content.value}</textarea>
                    </div>
                </div>`;
        document.getElementById('body').innerHTML+= ticket;
        title.value="";
        content.value="";
    }
}

function minimizer(event){
    event.parentNode.nextElementSibling.classList.toggle('minimize-it');
    event.parentNode.parentNode.classList.toggle('minimized');
}
function closer(event){
    event.parentNode.parentNode.remove();
}


