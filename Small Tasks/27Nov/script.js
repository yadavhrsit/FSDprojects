var btn = document.getElementById('replay-btn');
var defaultDiv = document.getElementsByClassName('default')[0];
var numbersDiv = document.getElementsByClassName('numbers')[0];
var elem=["1","2","3","4","5"];
var i=1;
btn.addEventListener('click',()=>{
    defaultDiv.classList.toggle('hidden');
    numbersDiv.classList.toggle('hidden');
    myInterval = setInterval(()=>{
        
        if(i==5){
            clearInterval(myInterval);
            i=0;
            defaultDiv.classList.toggle('hidden');
            numbersDiv.classList.toggle('hidden');
        }

        numbersDiv.innerHTML=`<h1 class="rotate">${elem[i]}</h1><h2>GET READY</h2>`;
        i++;
        }, 1000);    

})
