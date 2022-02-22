var id1;


function showDishes(idElement){
    id1 = idElement.id
    var allId = []
   
    var idElement = document.getElementById(id1)
    var categoryText = idElement.innerHTML
    var stringCut = categoryText.split('<span')[0]
    document.getElementById("BoxHeader").innerHTML = stringCut +"<div id ='hej'class='content2Text1'><span class='headtext1'>Popular</span>&nbsp; &nbsp;&nbsp;<span class='headtext2'>A/z</span>&nbsp; &nbsp;&nbsp;<span class='headtext3'>Price</span></div>"
    var cutIdNumber = id1
    let lowerCase = stringCut.toLowerCase();
    

    var element = document.getElementsByClassName("contentBox2")
    removeDishes(element)

    var totalDish = 14;

    var xhr = new XMLHttpRequest()
    xhr.open("GET", "data/"+lowerCase+".json")
    xhr.onload = function(){
        var data = JSON.parse(this.response)
        createDishes(data)
    }
    xhr.send()

    

    var createContent = document.createElement("div")
    createContent.setAttribute("class", cutIdNumber)
    createContent.setAttribute("id", cutIdNumber )
    var divId = document.getElementById("3")
    var getCategory = document.getElementById("BoxHeader")
    var categoryText1 = getCategory.innerHTML
    var splitText = categoryText1.split('<span')[0]
    createContent.innerHTML = '<span class="varaHeader">' + stringCut + '</span>'
    

    
    
    var check = document.getElementById("3").children
    
   // var children = document.querySelectorAll("3");

    var count = 0;
        
            for(var j = 0; j < check.length; j++){
                var x = check[j]
                if(id1 == x.id){
                    count++
            }
            }

            if(count > 0){
                console.log("already exisist")
            }
            else
            divId.append(createContent)

     //  if(!check[i].id == cutIdNumber){
           
    //   }

  // }
   console.log(check[0])
   console.log(check[1])

    

}

function removeDishes(elements){
    for(var i = elements.length - 1; 0 < elements.length; i--){
        elements[i].parentNode.removeChild(elements[i]);
    }

}

function createDishes(data){
    for(var i = 0; i < data.length; i++){
    var createContent = document.createElement("div")
    createContent.setAttribute("id", "dBox"+ i)
    createContent.setAttribute("class", "contentBox2")
    createContent.setAttribute("onclick", "addToCashier(this)")
    createContent.innerHTML = "<span id='tja"+i+"' class='itemCountS'>"+antal +"</span> <span id='tjo"+i +"'class='item'>"+data[i].dishName +"</span> <span <span id='tjena"+i +"' class='price'>€"+data[i].price+ "</span>"
    
    var divId2 = document.getElementById("2")
    
    divId2.appendChild(createContent)
    createContent.classList.add("dbox" + 1, "faded-out")
    createContent.classList.remove("faded-out")
    requestAnimationFrame(() => {
        createContent.classList.remove("faded-out")
      })
    }
}

var antal = 0

function addToCashier(idBox){
    //TODO: Skapa en loop som lägger till

    var id = idBox.id


    var idElementItem = document.getElementById(id).getElementsByClassName("item")[0]
    var idElementPrice= document.getElementById(id).getElementsByClassName("price")[0]
    
    var item = idElementItem.innerHTML
    
    
    var price = idElementPrice.innerHTML


    
    

    
    var check = document.getElementById("3").children

    
    
    var save = ""
            for(var j = 0; j < check.length; j++){
            var x = check[j]
                if(id1 == x.id){
                    save = x.id
                    
            }
            }

        

           var findElement = document.getElementsByClassName(save)[0]

            

           var theCut = id.substring(4);


            
            if(findElement.innerHTML.includes(item)){
                
                antal++;
                var int  = price.substring(1);
                var number = parseFloat(int)
                var totalSumma = number * antal
               document.getElementById(id).innerHTML = "<span id='tja"+theCut+"' class='itemCountS'>"+antal +"</span> <span class='item'>Marabou</span> <span class='price'>€12.50</span>"
                
                findElement.innerHTML = '<div class ="content31"><span class ="cashierCount"> x' + antal + '</span><span class ="vara">'+ item + '</span>' + '<span class ="priset">€' +totalSumma + '</span></div>'
            }
            else {
                
                var findItem = document.getElementById("tjo"+theCut)
                var findItem2 = findItem.innerHTML;
                var findPrice = document.getElementById("tjena"+theCut)
                var findPrice2 = findPrice.innerHTML;
                
            document.getElementById(id).innerHTML = "<span id='tja"+theCut+"' class='itemCountS'>"+1 +"</span> <span class='item'>"+findItem2+"</span> <span class='price'>"+findPrice2+"</span>"
           findElement.innerHTML = findElement.innerHTML + '<div class ="content31"><span class ="cashierCount"> x' + 1 + '</span><span class ="vara">'+ item + '</span>' + '<span class ="priset">' +price + '</span></div>'

            }
 
    

}

function howManyDishesAdded(antal){
    for (var i = 0; i < antal.length; i++){

    }
}

function arraymove(arr, fromIndex, toIndex) {
    var element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
}


