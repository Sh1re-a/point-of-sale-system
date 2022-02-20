

function showDishes(idElement){
    var id = idElement.id
    var idElement = document.getElementById(id)
    var categoryText = idElement.innerHTML
    var stringCut = categoryText.split('<span')[0]
    document.getElementById("BoxHeader").innerHTML = stringCut +"<div id ='hej'class='content2Text1'><span class='headtext1'>Popular</span>&nbsp; &nbsp;&nbsp;<span class='headtext2'>A/z</span>&nbsp; &nbsp;&nbsp;<span class='headtext3'>Price</span></div>"
    var cutIdNumber = id.split('cbox')
    

    var element = document.getElementsByClassName("contentBox2")
    removeDishes(element)

    var totalDish = 9;

    createDishes(totalDish)

    var createContent = document.createElement("div")
    createContent.setAttribute("class", "content3text1")
    createContent.setAttribute("id", cutIdNumber )
    var divId = document.getElementById("3")
   // var getCategory = document.getElementById("BoxHeader")
  //  var categoryText1 = getCategory.innerHTML
   // var splitText = categoryText1.split('<span')[0]
    createContent.innerHTML = stringCut

    
    
    var check = document.getElementsByClassName("content3")
  // for(var i = 0; i < check.length; i++){
     //  if(!check[i].id == cutIdNumber){
           divId.appendChild(createContent)
    //   }

  // }
   

    

}

function removeDishes(elements){
    for(var i = elements.length - 1; 0 < elements.length; i--){
        elements[i].parentNode.removeChild(elements[i]);
    }

}

function createDishes(totalDish){
    for(var i = 0; i < totalDish; i++){
        var createContent = document.createElement("div")
    createContent.setAttribute("id", "dBox" +1)
    createContent.setAttribute("class", "contentBox2")
    createContent.setAttribute("onclick", "addToCashier(this)")
    createContent.innerHTML = "<span class='itemCountS'>0</span> <span class='item'>Marabou</span> <span class='price'>€12.50</span>"

    var divId2 = document.getElementById("2")
    
    divId2.appendChild(createContent)
    }
}


function addToCashier(idBox){
    //TODO: Skapa en loop som lägger till

    var id = idBox.id
    var idElementItem = document.getElementById(id).getElementsByClassName("item")[0]
    var idElementPrice= document.getElementById(id).getElementsByClassName("price")[0]
    
    var item = idElementItem.innerHTML
    
    
    var price = idElementPrice.innerHTML


    
    
    var getCategory = document.getElementById("BoxHeader")
    var categoryText1 = getCategory.innerHTML
    var splitText = categoryText1.split('<span')[0]

    

    createContent.innerHTML = splitText
    
    createContent.innerHTML = createContent.innerHTML + item[0] + price
    var divId = document.getElementById("3")
divId.appendChild(createContent)
    

}

function allItem(array){
    for(var i = 0; i < array.length; i++){
       return array[i];
    }

}
