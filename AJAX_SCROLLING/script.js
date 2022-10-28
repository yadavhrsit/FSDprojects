function blogData() {
    var txtFile = new XMLHttpRequest();
    txtFile.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
      }
    };
    txtFile.open("GET", "blog.txt", true);
    txtFile.send();
  }
  function myFunction(data) {
    var innerCode = data.responseText;
         document.getElementById("data-container").innerHTML += innerCode;
       }


    // Function that checks if div is in viewport
    function isInViewport(element) {
    var bounding = element.getBoundingClientRect();

    if (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    ) {
        blogData();
    } 
}

const element = document.querySelector("#data-container");
window.addEventListener('scroll', function (event) {
    if (isInViewport(element)) {
    }
}, false);
