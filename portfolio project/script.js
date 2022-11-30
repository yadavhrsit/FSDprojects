const h1 = `Hey, I am Harshit`;
const h4 = `a Developer`;
var index1 = 0;
var index2 = 0;

put();
function put(){

    myInterval = setInterval(()=>{
        letter=h1[index1];
        document.getElementById("h1").textContent += letter;
        index1++;
        if(index1==h1.length){
            index1=0;
            clearInterval(myInterval);
        }
    }, 250);    


    myInterval2 = setInterval(()=>{
        letter=h4[index2];
        document.getElementById("h4").textContent += letter;
        index2++;
        if(index2==h4.length){
            index2 = 0;
            clearInterval(myInterval2);
        }
    }, 340); 
    setTimeout(cut,4500);
}

// setTimeout(cut,4500);
function cut(){
    len1 =  16
    len2 =  10;

    myInterval3 = setInterval(()=>{
        if(len1 == 0){
            done1 = true;
            clearInterval(myInterval3);
        }
        let contents = document.getElementById("h1").textContent;
        contentsUpdated = contents.slice(0, (contents.length-1) );
        document.getElementById("h1").textContent = contentsUpdated;
        len1--;
        
    }, 230);    


    myInterval4 = setInterval(()=>{
        if(len2 == 0){
            done2 = true;
            clearInterval(myInterval4);
        }
        let contents = document.getElementById("h4").textContent;
        contentsUpdated = contents.slice(0, (contents.length-1) );
        document.getElementById("h4").textContent = contentsUpdated;
        len2--;
        
    }, 390); 
    setTimeout(put,4500);
}
