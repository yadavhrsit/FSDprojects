function ConvFun(){
    const date=document.getElementById('Date').value;
    var newDate=0;
    if(date<35){
        newDate=2000+parseInt(date);
    }
    else{
        newDate=1900+parseInt(date);
    }
    document.getElementById('Ans1').innerHTML="New Date is : "+newDate;
}

function ResFun(){
    const Val1=parseInt(document.getElementById('ValA').value);
    const Val2=parseInt(document.getElementById('ValB').value);
    var res;
    if (Val1>Val2){
        res=false;
    }
    else if(Val1+6>=Val2){
        res=true;
    }
    else{
        res=false;
    }

    document.getElementById('Ans2').innerHTML="Result is : "+res;
}

function array(){
    const num=parseInt(document.getElementById('num').value);
    const len=parseInt(document.getElementById('len').value);
    document.getElementById("Ans3").innerHTML = arrReturn(num,len);
}

function arrReturn(num,length){
    
    const arr = [];
    for (var i=1;i<=length;i++){
        arr.push(num*i);
    }
    
    return arr;
}

function lenFind(){
    var count=1;
    var temp=0;
    arr=[];
    const len=parseInt(document.getElementById('lenofarr').value);
    for(let i=0;i<len;i++){
        var input=prompt();
        arr.push(input);
    }
    
    arr.sort();
    
    for (let i = 0; i < arr.length; i++) {
        var a=arr[i]+1;
        
        if(arr[i+1]==a){
            count++;
        }
        else {
            if(temp<count){
               temp=count;
               count=1;
            }
        }
    }
    document.getElementById("Ans4").innerHTML="Length of Longest Sub-Sequence is: "+temp;

}

function letter(){
    var input=document.getElementById('letter').value;
    input=input.charCodeAt()
    document.getElementById("Ans5").innerHTML = nearVowel(input);
}

function nearVowel(input){
    
    if (input>117){
        output="u";               
    }
    else if (input>111){
        if(input+3==117 || input-2<=111 )
            output="o";
        else
            output="u";
    }
    else if (input>105){
        if(input+3==111 || input-2<=105 )
            output="i";
        else
            output="o";
    }
    else if (parseInt(input)>101){
        if(input+3==105 || input-2<=101 )
            output="e";
        else
            output="i";
    }
    else if (parseInt(input)>97){
        if(input+3==101 || input-2<=97 )
            output="a";
        else
            output="e";
    }
    else {
        
    }
    return output;
}
