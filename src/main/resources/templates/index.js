

function cateClick(id) {
  if(id.includes("1")){
    document.getElementById("desText").innerHTML = "";
    document.getElementById("cBox1").style.opacity = 1;
    document.getElementById("desText").innerHTML = "Pre";
  }
  if(id.includes("2")){
    document.getElementById("desText").innerHTML = "";
    document.getElementById("cBox2").style.opacity = 1;
    document.getElementById("desText").innerHTML = "Mains";
    
  }
  if(id.includes("3")){
    document.getElementById("desText").innerHTML = "";
    document.getElementById("cBox3").style.opacity = 1;
    document.getElementById("desText").innerHTML = "Dessert";
    
  }
  if(id.includes("4")){
    document.getElementById("desText").innerHTML = "";
    document.getElementById("cBox4").style.opacity = 1;
    document.getElementById("desText").innerHTML = "Wines";
    
  }
  if(id.includes("5")){
    document.getElementById("desText").innerHTML = "";
    document.getElementById("cBox5").style.opacity = 1;
    document.getElementById("desText").innerHTML = "Beers";
    
  }
  if(id.includes("6")){
    document.getElementById("desText").innerHTML = "";
    document.getElementById("cBox6").style.opacity = 1;
    document.getElementById("desText").innerHTML = "Drinks";
    
  }
  if(id.includes("7")){
    document.getElementById("desText").innerHTML = "";
    document.getElementById("cBox7").style.opacity = 1;
    document.getElementById("desText").innerHTML = "Snacks";
    
  }
  if(id.includes("8")){
    document.getElementById("desText").innerHTML = "";
    document.getElementById("cBox8").style.opacity = 1;
    document.getElementById("desText").innerHTML = "Addons";

  }
  if(id.includes("9")){
    document.getElementById("desText").innerHTML = "";
    document.getElementById("cBox9").style.opacity = 1;
    document.getElementById("desText").innerHTML = "Extra";
   
    
  }

    
  
    document.getElementById("desText").style.color = "white";
   
    var elements = document.getElementsByClassName('dessertBox');
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

var one = 1;
var two = 1;
var three = 1;
var four = 1;
var five = 1;
var six = 1;
var seven = 1;
var eight = 1;
var nine = 1;

function itemCountFunction(idElement){
  if(idElement.includes("1")){
    document.getElementById("dBox1").style.opacity = 1;
    document.getElementById("itemcount1").innerHTML = one++;
  }
  if(idElement.includes("2")){
    document.getElementById("dBox2").style.opacity = 1;
    document.getElementById("itemcount2").innerHTML = two++;
  }
  if(idElement.includes("3")){
    document.getElementById("dBox3").style.opacity = 1;
    document.getElementById("itemcount3").innerHTML = three++;
  }
  if(idElement.includes("4")){
    document.getElementById("dBox4").style.opacity = 1;
    document.getElementById("itemcount4").innerHTML = four++;
  }
  if(idElement.includes("5")){
    document.getElementById("dBox5").style.opacity = 1;
    document.getElementById("itemcount5").innerHTML = five++;
  }
  if(idElement.includes("6")){
    document.getElementById("dBox6").style.opacity = 1;
    document.getElementById("itemcount6").innerHTML = six++;
  }
  if(idElement.includes("7")){
    document.getElementById("dBox7").style.opacity = 1;
    document.getElementById("itemcount7").innerHTML = seven++;
  }
  if(idElement.includes("8")){
    document.getElementById("dBox8").style.opacity = 1;
    document.getElementById("itemcount8").innerHTML = eight++;
  }
  if(idElement.includes("9")){
    document.getElementById("dBox9").style.opacity = 1;
    document.getElementById("itemcount9").innerHTML = nine++;
  }


  
  
}