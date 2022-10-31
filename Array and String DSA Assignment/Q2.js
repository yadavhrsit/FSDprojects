var arr1=[1,2,4,3,2,4,2,5,7,2];
var freq = 1;
var counter = 0;
var item;
for (var i=0; i<arr1.length; i++)
{
        for (var j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 counter++;
                if (freq<counter)
                {
                  freq=counter; 
                  item = arr1[i];
                }
        }
        counter=0;
}
console.log(item+" ( " +freq +" times ) ") ;