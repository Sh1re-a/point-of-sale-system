function showDishes(idElement){
    var id = idElement.id
    var idElement = document.getElementById(id)
    var categoryText = idElement.innerHTML
    var bodyElement = document.getElementById("content2Text1")

    var stringCut = categoryText.split('<span')[0]

    var createSpan = document.createElement('span')
    
    
    createSpan.setAttribute("class", "itemCount")
    createSpan.innerHTML = "10 items"

    document.getElementById("BoxHeader").innerHTML = stringCut 


}