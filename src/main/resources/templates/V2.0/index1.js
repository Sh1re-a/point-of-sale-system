
var id1;
function click(idPass){
    var id = idPass.id
    if(id = "bra"){
        var dt = document.getElementById("bra")
        dt.style.opacity = "1"
        dt.style.fontSize = "15px"
    }
    if(id = "bra1"){
        var dt = document.getElementById("bra")
        dt.style.opacity = "0.5";
        var dt2 = document.getElementById("bra1")
        dt2.style.opacity = "1"
        dt2.style.fontSize = "15px"
        var dt3 = document.getElementById("bra2")
        dt3.style.opacity = "1"
    }
    if(id = "bra2"){
        var dt = document.getElementById("bra")
        dt.style.opacity = "0.5";
        var dt2 = document.getElementById("bra1")
        dt2.style.opacity = "0.5"
        
        var dt3 = document.getElementById("bra2")
        dt3.style.opacity = "1"
        dt3.style.fontSize = "15px"
    }

    console.log("knapp tryckt")
    
}

function showDishes(idElement){
    id1 = idElement.id
    var allId = []
   
    var idElement = document.getElementById(id1)
    var categoryText = idElement.innerHTML
    var stringCut = categoryText.split('<span')[0]
    document.getElementById("BoxHeader").innerHTML = stringCut +"<div id ='hej'class='content2Text1'><span id ='bra' class='headtext1' onclick='click(this)' >Popular</span>&nbsp; &nbsp;&nbsp;<span id ='bra1' class='headtext2' onclick='click(this)' >A-z</span>&nbsp; &nbsp;&nbsp;<span id='bra2' class='headtext3' onclick='click(this)'>Price</span></div>"
    var cutIdNumber = id1
    let lowerCase = stringCut.toLowerCase();
    

    var element = document.getElementsByClassName("contentBox2")
    removeDishes(element)

    var totalDish = 14;

    var xhr = new XMLHttpRequest()
    xhr.open("GET", "data/"+lowerCase+".json")
    xhr.onload = function(){
        var data = JSON.parse(this.response)
                if(lowerCase.includes("pre")){
                s = 0;
                createDishes(data,s)
           }
            else if(lowerCase == "mains"){
                s = 1;
                createDishes(data,s)
            }
            else if(lowerCase == "dessert"){
                s = 2;
                createDishes(data,s)
            }
            else if(lowerCase == "wines"){
                s = 3;
                createDishes(data,s)
            }
            else if(lowerCase == "beers"){
                s = 4;
                createDishes(data,s)
            }
            else if(lowerCase == "drinks"){
                s = 5;
                createDishes(data,s)
            }
            else if(lowerCase == "snacks"){
                s = 6;
                createDishes(data,s)
            }
            else if(lowerCase == "addons"){
                s = 7;
                createDishes(data,s)
            }
            else if(lowerCase == "extra"){
                s = 8;
                createDishes(data,s)
            } 
     
    }
    xhr.send()
    
    
    

   /* var createContent = document.createElement("div")
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

    */

}

function createBox(){
    var number = id1.substring(4)

    var createContent = document.createElement("div")
    createContent.setAttribute("class", "ebox"+number)
    createContent.setAttribute("id", "ebox" +number )
    var divId = document.getElementById("3")
    var getCategory = document.getElementById("BoxHeader")
    var categoryText1 = getCategory.innerHTML
    var splitText = categoryText1.split('<div')[0]
    createContent.innerHTML = '<span class="varaHeader">' + splitText + '</span>'

    var check = document.getElementById("3").children
    
   // var children = document.querySelectorAll("3");

    var count = 0;
        
            for(var j = 0; j < check.length; j++){
                var x = check[j]
                if(id1.substring(4) == x.id.substring(4)){
                    count++
            }
            }

            if(count > 0){
                console.log("already exisist")
            }
            else
            divId.append(createContent)

}


function removeDishes(elements){
    for(var i = elements.length - 1; 0 < elements.length; i--){
        elements[i].parentNode.removeChild(elements[i]);
    }

}



function saveAllItem(){
    var pre = "pre"
    var mains = "mains"
    var dessert = "dessert"

    var xhr = new XMLHttpRequest()
    xhr.open("GET", "data/"+pre+".json")
    xhr.onload = function(){
        var data = JSON.parse(this.response) 
         var i = 0;
         var howManyItemsInStock = document.getElementById("nummer" + i)
         howManyItemsInStock.innerHTML = data.length + " "
          array0 = savingItemInLocalStorage(data)
  
         }             
    xhr.send()

    var xhr = new XMLHttpRequest()
    xhr.open("GET", "data/"+mains+".json")
    xhr.onload = function(){
        var data = JSON.parse(this.response) 
         var i = 1;
         var howManyItemsInStock = document.getElementById("nummer" + i)
         howManyItemsInStock.innerHTML = data.length + " "
         array1 = savingItemInLocalStorage(data)
  
        
         }             
    xhr.send()


    var xhr = new XMLHttpRequest()
    xhr.open("GET", "data/"+dessert+".json")
    xhr.onload = function(){
        var data = JSON.parse(this.response) 
         var i = 2;
         var howManyItemsInStock = document.getElementById("nummer" + i)
        howManyItemsInStock.innerHTML = data.length + " "
        array2 = savingItemInLocalStorage(data)
  
        
         }            
    xhr.send()
}




var array0 = []
var array1 = []
var array2 = []



saveAllItem()




function createDishes(data,s){
    
    if(s == 0){
    for(var i = 0; i < data.length; i++){
    var createContent = document.createElement("div")
    createContent.setAttribute("id", s+ "Box"+ i)
    createContent.setAttribute("class", "contentBox2")
    createContent.setAttribute("onclick", "addToCashier(this)")
    createContent.innerHTML = "<span id='tja"+i+"' class='itemCountS'>"+array0[i] +"</span> <span id='tjo"+i +"'class='item'>"+data[i].dishName +"</span> <span <span id='tjena"+i +"' class='price'>€"+data[i].price+ "</span>"
    
   
    var divId2 = document.getElementById("2")
    
    divId2.appendChild(createContent)
    createContent.classList.add("dbox" + 1, "faded-out")
    createContent.classList.remove("faded-out")
    requestAnimationFrame(() => {
        createContent.classList.remove("faded-out")
      })
    }
    }
    if(s == 1){
        for(var i = 0; i < data.length; i++){
        var createContent = document.createElement("div")
        createContent.setAttribute("id", s +"Box"+ i)
        createContent.setAttribute("class", "contentBox2")
        createContent.setAttribute("onclick", "addToCashier(this)")
        createContent.innerHTML = "<span id='tja"+i+"' class='itemCountS'>"+array1[i] +"</span> <span id='tjo"+i +"'class='item'>"+data[i].dishName +"</span> <span <span id='tjena"+i +"' class='price'>€"+data[i].price+ "</span>"
        
       
        var divId2 = document.getElementById("2")
        
        divId2.appendChild(createContent)
        createContent.classList.add("dbox" + 1, "faded-out")
        createContent.classList.remove("faded-out")
        requestAnimationFrame(() => {
            createContent.classList.remove("faded-out")
          })
        }
        }
        if(s == 2){
            for(var i = 0; i < data.length; i++){
            var createContent = document.createElement("div")
            createContent.setAttribute("id", s+"Box"+ i)
            createContent.setAttribute("class", "contentBox2")
            createContent.setAttribute("onclick", "addToCashier(this)")
            createContent.innerHTML = "<span id='tja"+i+"' class='itemCountS'>"+array2[i] +"</span> <span id='tjo"+i +"'class='item'>"+data[i].dishName +"</span> <span <span id='tjena"+i +"' class='price'>€"+data[i].price+ "</span>"
            
           
            var divId2 = document.getElementById("2")
            
            divId2.appendChild(createContent)
            createContent.classList.add("dbox" + 1, "faded-out")
            createContent.classList.remove("faded-out")
            requestAnimationFrame(() => {
                createContent.classList.remove("faded-out")
              })
            }
            }
}

function getItemCounterByItemName(dishName,data) {
    return data.filter(
        function(data){ return data.dishName == dishName }
    );
  }

var antal = 0
var alltihop = 0;



function addToCashier(idBox){
    //TODO: Skapa en loop som lägger till
    createBox()
    var id = idBox.id


    var idElementItem = document.getElementById(id).getElementsByClassName("item")[0]
    var idElementPrice= document.getElementById(id).getElementsByClassName("price")[0]
    
    var item = idElementItem.innerHTML
    
    
    var price = idElementPrice.innerHTML


    
    

    
    var check = document.getElementById("3").children

    var num2 = id1.substring(4)
    
    
    var save = ""
            for(var j = 0; j < check.length; j++){
            var x = check[j]
                if(num2 == x.id.substring(4)){
                    save = x.id
                    
            }
            }

        

           var findElement = document.getElementById(save)

            

           var theCut = id.substring(4);

           var findItem = document.getElementById("tjo"+theCut)
           var findItem2 = findItem.innerHTML;
           var findPrice = document.getElementById("tjena"+theCut)
           var findPrice2 = findPrice.innerHTML;

           var findId = document.getElementById(id)
           var kassanId = document.getElementById("kassa")

           var dataName = document.getElementById("BoxHeader").innerHTML
           var cutDataName = dataName.split('<div')[0]
           var dataNameLowerCase = cutDataName.toLowerCase()
           
            


           var xhr = new XMLHttpRequest()
            xhr.open("GET", "data/"+dataNameLowerCase+".json")
            xhr.onload = function(){
            var data = JSON.parse(this.response) 

            var found = getItemCounterByItemName(findItem2,data)
        
            if(findElement.innerHTML.includes(item)){
                if(dataNameLowerCase == "pre"){
                var antal = array0[theCut]
                antal++;
                array0.splice(theCut, 1, antal)
                var int  = price.substring(1);
                var number = parseFloat(int)
               // var totalSumma = number * antal
               var totalSumma = found[0].price * array0[theCut]
               document.getElementById(id).innerHTML = "<span id='tja"+theCut+"' class='itemCountS'>"+array0[theCut] +"</span> <span id='tjo"+theCut+"' class='item'>"+findItem2+"</span> <span id='tjena"+theCut+"' class='price'>"+findPrice2+"</span>"
               findId.style.opacity = "1"
                var counter = document.getElementById("räknare" +dataNameLowerCase+ theCut)
                var priceTotal = document.getElementById("priset" +dataNameLowerCase+ theCut)
                counter.innerHTML ="x" + array0[theCut] + " "
                priceTotal.innerHTML = "£" + totalSumma.toFixed(2)
                alltihop = alltihop + totalSumma
                var ja = alltihop.toFixed(2)
                kassanId.innerHTML = " €"+ja
               // findElement.innerHTML = + '<div class ="content31"><span class ="cashierCount"> x' + array[theCut] + '</span><span class ="vara">'+ item + '</span>' + '<span class ="priset">€' +totalSumma + '</span></div>'
                }
                if(dataNameLowerCase == "mains"){
                    var antal = array1[theCut]
                antal++;
                array1.splice(theCut, 1, antal)
                var int  = price.substring(1);
                var number = parseFloat(int)
               // var totalSumma = number * antal
               var totalSumma = found[0].price * array1[theCut]
               document.getElementById(id).innerHTML = "<span id='tja"+theCut+"' class='itemCountS'>"+array1[theCut] +"</span> <span id='tjo"+theCut+"' class='item'>"+findItem2+"</span> <span id='tjena"+theCut+"' class='price'>"+findPrice2+"</span>"
               findId.style.opacity = "1"
                var counter = document.getElementById("räknare" +dataNameLowerCase+ theCut)
                var priceTotal = document.getElementById("priset" +dataNameLowerCase+ theCut)
                counter.innerHTML ="x" + array1[theCut] + " "
                priceTotal.innerHTML = "£" + totalSumma.toFixed(2)
                alltihop = alltihop + totalSumma
                var ja = alltihop.toFixed(2)
                kassanId.innerHTML = " €"+ja
                }
                if(dataNameLowerCase == "dessert"){
                    var antal = array2[theCut]
                antal++;
                array2.splice(theCut, 1, antal)
                var int  = price.substring(1);
                var number = parseFloat(int)
               // var totalSumma = number * antal
               var totalSumma = found[0].price * array2[theCut]
               document.getElementById(id).innerHTML = "<span id='tja"+theCut+"' class='itemCountS'>"+array2[theCut] +"</span> <span id='tjo"+theCut+"' class='item'>"+findItem2+"</span> <span id='tjena"+theCut+"' class='price'>"+findPrice2+"</span>"
               findId.style.opacity = "1"
                var counter = document.getElementById("räknare" +dataNameLowerCase+ theCut)
                var priceTotal = document.getElementById("priset" +dataNameLowerCase+ theCut)
                counter.innerHTML ="x" + array2[theCut] + " "
                priceTotal.innerHTML = "£" + totalSumma.toFixed(2)
                alltihop = alltihop + totalSumma
                var ja = alltihop.toFixed(2)
                kassanId.innerHTML = " €"+ja
                }

            }
            else {
                if(dataNameLowerCase == "pre"){
                     var antal = array0[theCut]
                    antal++
                    array0.splice(theCut, 1, antal)

                document.getElementById(id).innerHTML = "<span id='tja"+theCut+"' class='itemCountS'>"+ 1 +"</span> <span id='tjo"+theCut +"' class='item'>"+findItem2+"</span> <span id='tjena"+theCut+"' class='price'>"+findPrice2+"</span>"
                findId.style.opacity = "1"
                findElement.innerHTML = findElement.innerHTML + '<div class ="content31"><span id ="räknare'+dataNameLowerCase+ theCut+'"class ="cashierCount"> x' + 1 + ' ' + '</span><span class ="vara">'+ item +" " + '</span>' + '<span id="priset'+dataNameLowerCase+ theCut+'" class ="priset">' +price + '</span></div>'
                    
                    var number = price.substring(1)
                    var lastNumber = parseFloat(number)
                    alltihop = lastNumber +alltihop
                   var ja = alltihop.toFixed(2)
                    kassanId.innerHTML = " €"+ja;
            }
                if(dataNameLowerCase == "mains"){
                    var antal = array1[theCut]
                    antal++
                    array1.splice(theCut, 1, antal)

                    
            document.getElementById(id).innerHTML = "<span id='tja"+theCut+"' class='itemCountS'>"+ 1 +"</span> <span id='tjo"+theCut +"' class='item'>"+findItem2+"</span> <span id='tjena"+theCut+"' class='price'>"+findPrice2+"</span>"
            findId.style.opacity = "1"
           findElement.innerHTML = findElement.innerHTML + '<div class ="content31"><span id ="räknare'+dataNameLowerCase+ theCut+'"class ="cashierCount"> x' + 1 + ' ' + '</span><span class ="vara">'+ item + '</span>' + '<span id="priset'+dataNameLowerCase+ theCut+'" class ="priset">' +price + '</span></div>'
                    
                    var number = price.substring(1)
                    var lastNumber = parseFloat(number)
                    alltihop = lastNumber +alltihop
                   var ja = alltihop.toFixed(2)
                    kassanId.innerHTML = " €"+ja;
            }

            if(dataNameLowerCase == "dessert"){
                var antal = array2[theCut]
                antal++
                array2.splice(theCut, 1, antal)

        document.getElementById(id).innerHTML = "<span id='tja"+theCut+"' class='itemCountS'>"+ 1 +"</span> <span id='tjo"+theCut +"' class='item'>"+findItem2+"</span> <span id='tjena"+theCut+"' class='price'>"+findPrice2+"</span>"
        findId.style.opacity = "1"
       findElement.innerHTML = findElement.innerHTML + '<div class ="content31"><span id ="räknare'+dataNameLowerCase+ theCut+'"class ="cashierCount"> x' + 1 + ' ' + '</span><span class ="vara">'+ item + '</span>' + '<span id="priset'+dataNameLowerCase+ theCut +'" class ="priset">' +price + '</span></div>'
                
                var number = price.substring(1)
                var lastNumber = parseFloat(number)
                alltihop = lastNumber +alltihop
               var ja = alltihop.toFixed(2)
                kassanId.innerHTML = " €"+ja;
        }

            }
                }
                   
        xhr.send()
 
    

}

function savingItemInLocalStorage(data){
    var array = []
    for(var i = 0; i < data.length; i++){
        array.push(data[i].add)
    }
    return array
}



