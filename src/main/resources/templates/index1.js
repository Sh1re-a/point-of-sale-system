function showDishes(idElement){
    var id = idElement.id
    var idElement = document.getElementById(id)
    var categoryText = idElement.innerHTML
   

    var stringCut = categoryText.split('<span')[0]

    

  
  
  /*  var createSpan1 = document.createElement("span")
    createSpan1.setAttribute("class", "boxHeader1")
    createSpan1.innerHTML = stringCut

    var element = document.getElementById("BoxHeader")
    element.appendChild(createSpan1)

    var createSpan2 = document.createElement("span")
    createSpan.setAttribute("class", "content2Text1")
    createSpan2.innerHTML = "Popular A/z Price"

    var element2 = document.getElementById("hej")
    element2.appendChild(createSpan2)
    
    */

    
    
   

   

   document.getElementById("BoxHeader").innerHTML = stringCut +"<div id ='hej'class='content2Text1'><span class='headtext1'>Popular</span><span class='headtext2'>A/z</span><span class='headtext3'>Price</span></div>"
   // var colorElement = document.getElementById("true")
  //  colorElement.style.color = "black"
}

function createSpan(){
    var createSpan = document.createElement('span')
    
    createSpan.setAttribute("class", "content2Text1")
    var ja = createSpan.innerHTML = "Popular A/z Price"
    

    createSpan.innerHTML = "Popular A/z Price"

    return createSpan

}