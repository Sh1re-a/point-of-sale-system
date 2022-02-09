

function cateClick() {

    
    document.getElementById("desText").innerHTML = "Pre";
    document.getElementById("desText").style.color = "white";
    var elements = document.getElementsByClassName('dessertBox'); // get all elements

    var dates = document.querySelectorAll('[id^="dBox"]');
    for (var i = 0; i < dates.length; i++){
      elements[i].style.transition = "0.7s"
      elements[i].style.color = "white";
      
    }
  
}

function cateClick1(el){
  var val = el.id;
  var x = document.getElementById(el).innerText;
  document.getElementById("desText").innerHTML = x;

}