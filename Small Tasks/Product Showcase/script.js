const itemsTitle = document.querySelectorAll('.item-title');
const items = document.querySelector('.category-items');
const categoriesTitle = document.querySelectorAll('.category-title');
for (let dry of categoriesTitle){
    if(dry.innerHTML=='Dry Fruits'){
        var dryfuit = dry;
    }
    let x=`url("img/${dry.innerHTML}.jpeg")`;
    dry.previousElementSibling.style.backgroundImage = x; 
}

dryfuit.parentElement.parentElement.addEventListener('click',function(){
    items.classList.toggle('hidden');
    
    for (let item of itemsTitle){
        let x=`url("img/${item.innerHTML}.jpeg")`;
        console.log(x);
        item.previousElementSibling.style.backgroundImage = x; 
    }
    
})