function showDishes(idElement){
    var id = idElement.id
    var idElement = document.getElementById(id)
    var categoryText = idElement.innerHTML
    var stringCut = categoryText.split('<span')[0]
    document.getElementById("BoxHeader").innerHTML = stringCut +"<div id ='hej'class='content2Text1'><span class='headtext1'>Popular</span><span class='headtext2'>A/z</span><span class='headtext3'>Price</span></div>"
  
    

    var element = document.getElementsByClassName("contentBox2")
    removeDishes(element)

    var totalDish = 9;

    createDishes(totalDish)



   
    


}

function removeDishes(elements){
    for(var i = elements.length - 1; 0 < elements.length; i--){
        elements[i].parentNode.removeChild(elements[i]);
    }

}

function createDishes(totalDish){
    for(var i = 0; i < totalDish; i++){
        var createContent = document.createElement("div")
    createContent.setAttribute("class", "contentBox2")
    createContent.innerHTML = "nya"
    var divId = document.getElementById("2")
    divId.appendChild(createContent)
    }
}
