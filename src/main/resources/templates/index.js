

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
  var x = document.getElementById(el).innerHTML;
  document.getElementById("desText").innerHTML = x;

}

var one = 0;
var two = 0;
var three = 0;
var four = 0;
var five = 0;
var six = 0;
var seven = 0;
var eight = 0;
var nine = 0;
function itemCountFunction(idElement){
  if(idElement.includes("1")){
    document.getElementById("itemcount1").innerHTML = one++;
  }
  if(idElement.includes("2")){
    
    document.getElementById("itemcount2").innerHTML = two++;
  }
  if(idElement.includes("3")){
    
    document.getElementById("itemcount3").innerHTML = three++;
  }
  if(idElement.includes("4")){
    
    document.getElementById("itemcount4").innerHTML = four++;
  }
  if(idElement.includes("5")){
    
    document.getElementById("itemcount5").innerHTML = five++;
  }
  if(idElement.includes("6")){
    
    document.getElementById("itemcount6").innerHTML = six++;
  }
  if(idElement.includes("7")){
   
    document.getElementById("itemcount7").innerHTML = seven++;
  }
  if(idElement.includes("8")){
    
    document.getElementById("itemcount8").innerHTML = eight++;
  }
  if(idElement.includes("9")){

    document.getElementById("itemcount9").innerHTML = nine++;
  }


  
  
}