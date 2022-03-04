
var id1;
var counter = 0;
function clickHeader(idPass){
    var id = idPass.id
    if(id == "bra"){
        var dt = document.getElementById("bra")
        dt.style.opacity = "1"
        //dt.style.fontSize = "15px"
        var dt2 = document.getElementById("bra1")
        dt2.style.opacity = "0.5"
       // dt2.style.fontSize = "15px"
        var dt3 = document.getElementById("bra2")
        dt3.style.opacity = "0.5"

        var element = document.getElementsByClassName("contentBox2")
        removeDishes(element)

        var getCategory = document.getElementById("huvudText")
        var save = getCategory.innerHTML
        var saveUpperCase = save.toUpperCase();
        apiConnection(saveUpperCase)
        
    }
    if(id == "bra1"){
        var dt = document.getElementById("bra")
        dt.style.opacity = "0.5";
        var dt2 = document.getElementById("bra1")
        dt2.style.opacity = "1"
       // dt2.style.fontSize = "15px"
        var dt3 = document.getElementById("bra2")
        dt3.style.opacity = "0.5"

        var element = document.getElementsByClassName("contentBox2")
        removeDishes(element)

        var getCategory = document.getElementById("huvudText")
        var save = getCategory.innerHTML
        var saveUpperCase = save.toUpperCase();
        apiConnectionAz(saveUpperCase)




    }
    if(id == "bra2"){
        var dt = document.getElementById("bra")
        dt.style.opacity = "0.5";
        var dt2 = document.getElementById("bra1")
        dt2.style.opacity = "0.5"
        
        var dt3 = document.getElementById("bra2")
        dt3.style.opacity = "1"
       // dt3.style.fontSize = "15px"
        counter++;
        var element = document.getElementsByClassName("contentBox2")
        removeDishes(element)

        var getCategory = document.getElementById("huvudText")
        var save = getCategory.innerHTML
        var saveUpperCase = save.toUpperCase();
        
        if(counter % 2 == 0){
            apiConnectionHighPrice(saveUpperCase);
        }
        else
        apiConnectionLowPrice(saveUpperCase);
    }

    console.log("knapp tryckt")
    
}

function apiConnection(upperCase){
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "http://localhost:8081/dishes?categoryType="+ upperCase)
    xhr.onload = function(){
        var data = JSON.parse(this.response)
                if(upperCase.includes("PRE")){
                s = 0;
                createDishes(data,s)
           }
            else if(upperCase.includes("MAINS")){
                s = 1;
                createDishes(data,s)
            }
            else if(upperCase.includes("DESSERTS")){
                s = 2;
                createDishes(data,s)
            }
            else if(upperCase.includes("WINES")){
                s = 3;
                createDishes(data,s)
            }
            else if(upperCase.includes("BEERS")){
                s = 4;
                createDishes(data,s)
            }
            else if(upperCase.includes("DRINKS")){
                s = 5;
                createDishes(data,s)
            }
            else if(upperCase.includes("SNACKS")){
                s = 6;
                createDishes(data,s)
            }
            else if(upperCase.includes("ADDONS")){
                s = 7;
                createDishes(data,s)
            }
            else if(upperCase.includes("EXTRA")){
                s = 8;
                createDishes(data,s)
            } 
     
    }
    xhr.send()
}

function apiConnectionHighPrice(upperCase){
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "http://localhost:8081/dishes/highPrice?categoryType="+upperCase)
    xhr.onload = function(){
        var data = JSON.parse(this.response)
                if(upperCase.includes("PRE")){
                s = 0;
                createDishes(data,s)
           }
            else if(upperCase.includes("MAINS")){
                s = 1;
                createDishes(data,s)
            }
            else if(upperCase.includes("DESSERTS")){
                s = 2;
                createDishes(data,s)
            }
            else if(upperCase.includes("WINES")){
                s = 3;
                createDishes(data,s)
            }
            else if(upperCase.includes("BEERS")){
                s = 4;
                createDishes(data,s)
            }
            else if(upperCase.includes("DRINKS")){
                s = 5;
                createDishes(data,s)
            }
            else if(upperCase.includes("SNACKS")){
                s = 6;
                createDishes(data,s)
            }
            else if(upperCase.includes("ADDONS")){
                s = 7;
                createDishes(data,s)
            }
            else if(upperCase.includes("EXTRA")){
                s = 8;
                createDishes(data,s)
            } 
     
    }
    xhr.send()
}

function apiConnectionLowPrice(upperCase){
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "http://localhost:8081/dishes/lowPrice?categoryType="+upperCase)
    xhr.onload = function(){
        var data = JSON.parse(this.response)
                if(upperCase.includes("PRE")){
                s = 0;
                createDishes(data,s)
           }
            else if(upperCase.includes("MAINS")){
                s = 1;
                createDishes(data,s)
            }
            else if(upperCase.includes("DESSERTS")){
                s = 2;
                createDishes(data,s)
            }
            else if(upperCase.includes("WINES")){
                s = 3;
                createDishes(data,s)
            }
            else if(upperCase.includes("BEERS")){
                s = 4;
                createDishes(data,s)
            }
            else if(upperCase.includes("DRINKS")){
                s = 5;
                createDishes(data,s)
            }
            else if(upperCase.includes("SNACKS")){
                s = 6;
                createDishes(data,s)
            }
            else if(upperCase.includes("ADDONS")){
                s = 7;
                createDishes(data,s)
            }
            else if(upperCase.includes("EXTRA")){
                s = 8;
                createDishes(data,s)
            } 
     
    }
    xhr.send()
}

function apiConnectionAz(upperCase){
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "http://localhost:8081/dishes/A-z?categoryType="+upperCase)
    xhr.onload = function(){
        var data = JSON.parse(this.response)
                if(upperCase.includes("PRE")){
                s = 0;
                createDishes(data,s)
           }
            else if(upperCase.includes("MAINS")){
                s = 1;
                createDishes(data,s)
            }
            else if(upperCase.includes("DESSERTS")){
                s = 2;
                createDishes(data,s)
            }
            else if(upperCase.includes("WINES")){
                s = 3;
                createDishes(data,s)
            }
            else if(upperCase.includes("BEERS")){
                s = 4;
                createDishes(data,s)
            }
            else if(upperCase.includes("DRINKS")){
                s = 5;
                createDishes(data,s)
            }
            else if(upperCase.includes("SNACKS")){
                s = 6;
                createDishes(data,s)
            }
            else if(upperCase.includes("ADDONS")){
                s = 7;
                createDishes(data,s)
            }
            else if(upperCase.includes("EXTRA")){
                s = 8;
                createDishes(data,s)
            } 
     
    }
    xhr.send()
}



function showDishes(idElement){
    id1 = idElement.id
    
   
    var idElement = document.getElementById(id1)
    var categoryText = idElement.innerHTML
    var stringCut = categoryText.split('<span')[0]
    document.getElementById("BoxHeader").innerHTML ="<span id='huvudText' class='huvudText'>"+ stringCut +"</span><div id ='hej'class='content2Text1'><span id ='bra' class='headtext1' onclick='clickHeader(this)' >Popular</span>&nbsp; &nbsp;&nbsp;<span id ='bra1' class='headtext2' onclick='clickHeader(this)' >A-z</span>&nbsp; &nbsp;&nbsp;<span id='bra2' class='headtext3' onclick='clickHeader(this)'>Price</span></div>"
    var cutIdNumber = id1
    let upperCase = stringCut.toUpperCase();
    

    var element = document.getElementsByClassName("contentBox2")
    removeDishes(element)

    var totalDish = 14;

    apiConnection(upperCase);
}

function createBox(){
    var number = id1.substring(4)
    //Skapar boxen i kassan
    var createContent = document.createElement("div")
    createContent.setAttribute("class", "ebox"+number)
    createContent.setAttribute("id", "ebox" +number )
    var divId = document.getElementById("3")
    var getCategory = document.getElementById("huvudText").innerHTML
    var categoryText1 = getCategory.innerHTML
   // var splitText = categoryText1.split('<div')[0]
    createContent.innerHTML = '<span class="varaHeader">' + getCategory + '</span>'

    var check = document.getElementById("3").children
    
    //För att checka ifall category redan finns

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
    
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "http://localhost:8081/list")
    xhr.onload = function(){
        var data = JSON.parse(this.response) 
         var i = JSON.stringify(data[0])
         
         var howManyItemsInStock = document.getElementById("nummer" + 0)
        howManyItemsInStock.innerHTML = i + " ";
         array0 = savingItemInLocalStorage(data[0])
  
         }             
    xhr.send()

    var xhr = new XMLHttpRequest()
    xhr.open("GET", "http://localhost:8081/list")
    xhr.onload = function(){
        var data = JSON.parse(this.response) 
         var i = JSON.stringify(data[1])
         var howManyItemsInStock = document.getElementById("nummer" + 1)
         howManyItemsInStock.innerHTML = i+ " "
         array1 = savingItemInLocalStorage(data[1])
  
        
         }             
    xhr.send()


    var xhr = new XMLHttpRequest()
    xhr.open("GET", "http://localhost:8081/list")
    xhr.onload = function(){
        var data = JSON.parse(this.response) 
         var i = JSON.stringify(data[2]);
         var howManyItemsInStock = document.getElementById("nummer" + 2)
         howManyItemsInStock.innerHTML = i + " "
        array2 = savingItemInLocalStorage(data[2])
  
        
         }            
    xhr.send()

    var xhr = new XMLHttpRequest()
    xhr.open("GET", "http://localhost:8081/list")
    xhr.onload = function(){
        var data = JSON.parse(this.response) 
         var i = JSON.stringify(data[3]);
         var howManyItemsInStock = document.getElementById("nummer" + 3)
         howManyItemsInStock.innerHTML = i + " "
        array3 = savingItemInLocalStorage(data[3])
  
        
         }            
    xhr.send()
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "http://localhost:8081/list")
    xhr.onload = function(){
        var data = JSON.parse(this.response) 
         var i = JSON.stringify(data[4]);
         var howManyItemsInStock = document.getElementById("nummer" + 4)
         howManyItemsInStock.innerHTML = i + " "
        array4 = savingItemInLocalStorage(data[4])
  
        
         }            
    xhr.send()
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "http://localhost:8081/list")
    xhr.onload = function(){
        var data = JSON.parse(this.response) 
         var i = JSON.stringify(data[5]);
         var howManyItemsInStock = document.getElementById("nummer" + 5)
         howManyItemsInStock.innerHTML = i + " "
        array5 = savingItemInLocalStorage(data[5])
  
        
         }            
    xhr.send()
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "http://localhost:8081/list")
    xhr.onload = function(){
        var data = JSON.parse(this.response) 
         var i = JSON.stringify(data[6]);
         var howManyItemsInStock = document.getElementById("nummer" + 6)
         howManyItemsInStock.innerHTML = i + " "
        array6 = savingItemInLocalStorage(data[6])
  
        
         }            
    xhr.send()
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "http://localhost:8081/list")
    xhr.onload = function(){
        var data = JSON.parse(this.response) 
         var i = JSON.stringify(data[7]);
         var howManyItemsInStock = document.getElementById("nummer" + 7)
         howManyItemsInStock.innerHTML = i + " "
        array7 = savingItemInLocalStorage(data[7])
  
        
         }            
    xhr.send()
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "http://localhost:8081/list")
    xhr.onload = function(){
        var data = JSON.parse(this.response) 
         var i = JSON.stringify(data[8]);
         var howManyItemsInStock = document.getElementById("nummer" + 8)
         howManyItemsInStock.innerHTML = i + " "
        array8 = savingItemInLocalStorage(data[8])
  
        
         }            
    xhr.send()
    
}


//Sparar alla antalet rätter som är tillagda

var array0 = []
var array1 = []
var array2 = []
var array3 = []
var array4 = []
var array5 = []
var array6 = []
var array7 = []
var array8 = []





saveAllItem()




function createDishes(data,s){
    
    if(s == 0) {
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

            if(s == 3){
                for(var i = 0; i < data.length; i++){
                var createContent = document.createElement("div")
                createContent.setAttribute("id", s+"Box"+ i)
                createContent.setAttribute("class", "contentBox2")
                createContent.setAttribute("onclick", "addToCashier(this)")
                createContent.innerHTML = "<span id='tja"+i+"' class='itemCountS'>"+array3[i] +"</span> <span id='tjo"+i +"'class='item'>"+data[i].dishName +"</span> <span <span id='tjena"+i +"' class='price'>€"+data[i].price+ "</span>"
                
               
                var divId2 = document.getElementById("2")
                
                divId2.appendChild(createContent)
                createContent.classList.add("dbox" + 1, "faded-out")
                createContent.classList.remove("faded-out")
                requestAnimationFrame(() => {
                    createContent.classList.remove("faded-out")
                  })
                }
                }

                if(s == 4){
                    for(var i = 0; i < data.length; i++){
                    var createContent = document.createElement("div")
                    createContent.setAttribute("id", s+"Box"+ i)
                    createContent.setAttribute("class", "contentBox2")
                    createContent.setAttribute("onclick", "addToCashier(this)")
                    createContent.innerHTML = "<span id='tja"+i+"' class='itemCountS'>"+array4[i] +"</span> <span id='tjo"+i +"'class='item'>"+data[i].dishName +"</span> <span <span id='tjena"+i +"' class='price'>€"+data[i].price+ "</span>"
                    
                   
                    var divId2 = document.getElementById("2")
                    
                    divId2.appendChild(createContent)
                    createContent.classList.add("dbox" + 1, "faded-out")
                    createContent.classList.remove("faded-out")
                    requestAnimationFrame(() => {
                        createContent.classList.remove("faded-out")
                      })
                    }
                    }

                    if(s == 5){
                        for(var i = 0; i < data.length; i++){
                        var createContent = document.createElement("div")
                        createContent.setAttribute("id", s+"Box"+ i)
                        createContent.setAttribute("class", "contentBox2")
                        createContent.setAttribute("onclick", "addToCashier(this)")
                        createContent.innerHTML = "<span id='tja"+i+"' class='itemCountS'>"+array5[i] +"</span> <span id='tjo"+i +"'class='item'>"+data[i].dishName +"</span> <span <span id='tjena"+i +"' class='price'>€"+data[i].price+ "</span>"
                        
                       
                        var divId2 = document.getElementById("2")
                        
                        divId2.appendChild(createContent)
                        createContent.classList.add("dbox" + 1, "faded-out")
                        createContent.classList.remove("faded-out")
                        requestAnimationFrame(() => {
                            createContent.classList.remove("faded-out")
                          })
                        }
                        }

                        if(s == 6){
                            for(var i = 0; i < data.length; i++){
                            var createContent = document.createElement("div")
                            createContent.setAttribute("id", s+"Box"+ i)
                            createContent.setAttribute("class", "contentBox2")
                            createContent.setAttribute("onclick", "addToCashier(this)")
                            createContent.innerHTML = "<span id='tja"+i+"' class='itemCountS'>"+array6[i] +"</span> <span id='tjo"+i +"'class='item'>"+data[i].dishName +"</span> <span <span id='tjena"+i +"' class='price'>€"+data[i].price+ "</span>"
                            
                           
                            var divId2 = document.getElementById("2")
                            
                            divId2.appendChild(createContent)
                            createContent.classList.add("dbox" + 1, "faded-out")
                            createContent.classList.remove("faded-out")
                            requestAnimationFrame(() => {
                                createContent.classList.remove("faded-out")
                              })
                            }
                            }

                            if(s == 7){
                                for(var i = 0; i < data.length; i++){
                                var createContent = document.createElement("div")
                                createContent.setAttribute("id", s+"Box"+ i)
                                createContent.setAttribute("class", "contentBox2")
                                createContent.setAttribute("onclick", "addToCashier(this)")
                                createContent.innerHTML = "<span id='tja"+i+"' class='itemCountS'>"+array7[i] +"</span> <span id='tjo"+i +"'class='item'>"+data[i].dishName +"</span> <span <span id='tjena"+i +"' class='price'>€"+data[i].price+ "</span>"
                                
                               
                                var divId2 = document.getElementById("2")
                                
                                divId2.appendChild(createContent)
                                createContent.classList.add("dbox" + 1, "faded-out")
                                createContent.classList.remove("faded-out")
                                requestAnimationFrame(() => {
                                    createContent.classList.remove("faded-out")
                                  })
                                }
                                }
                                if(s == 8){
                                    for(var i = 0; i < data.length; i++){
                                    var createContent = document.createElement("div")
                                    createContent.setAttribute("id", s+"Box"+ i)
                                    createContent.setAttribute("class", "contentBox2")
                                    createContent.setAttribute("onclick", "addToCashier(this)")
                                    createContent.innerHTML = "<span id='tja"+i+"' class='itemCountS'>"+array8[i] +"</span> <span id='tjo"+i +"'class='item'>"+data[i].dishName +"</span> <span <span id='tjena"+i +"' class='price'>€"+data[i].price+ "</span>"
                                    
                                   
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
    
    //För att matcha rätt kassa med rätt kategori
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

    var dataName = document.getElementById("huvudText").innerHTML
    var cutDataName = dataName.split('<div')[0]
    var dataNameLowerCase = dataName.toUpperCase()
           

    var xhr = new XMLHttpRequest()
    xhr.open("GET", "http://localhost:8081/dishes?categoryType="+dataNameLowerCase)
    xhr.onload = function(){
    var data = JSON.parse(this.response) 

    var found = getItemCounterByItemName(findItem2,data)
        
    if(findElement.innerHTML.includes(item)){
        if(dataNameLowerCase == "PRE"){
            var antal = array0[theCut]
            antal++;
            array0.splice(theCut, 1, antal)
            var int  = price.substring(1);
            var number = parseFloat(int)
            var totalSumma = found[0].price * array0[theCut]
            document.getElementById(id).innerHTML = "<span id='tja"+theCut+"' class='itemCountS'>"+array0[theCut] +"</span> <span id='tjo"+theCut+"' class='item'>"+findItem2+"</span> <span id='tjena"+theCut+"' class='price'>"+findPrice2+"</span>"
            findId.style.opacity = "1"
                var counter = document.getElementById("räknare" +dataNameLowerCase+ theCut)
                var priceTotal = document.getElementById("priset" +dataNameLowerCase+ theCut)
                counter.innerHTML ="x" + array0[theCut] + " "
                priceTotal.innerHTML = "£" + totalSumma.toFixed(2)
                alltihop = alltihop + (totalSumma/array0[theCut])
                var ja = alltihop.toFixed(2)
                kassanId.innerHTML = " €"+ja
               // findElement.innerHTML = + '<div class ="content31"><span class ="cashierCount"> x' + array[theCut] + '</span><span class ="vara">'+ item + '</span>' + '<span class ="priset">€' +totalSumma + '</span></div>'
                }
                if(dataNameLowerCase == "MAINS"){
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
                alltihop = alltihop + (totalSumma/array1[theCut])
                var ja = alltihop.toFixed(2)
                kassanId.innerHTML = " €"+ja
                }
                if(dataNameLowerCase == "DESSERTS"){
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
                alltihop = alltihop  + (totalSumma/array2[theCut])
                var ja = alltihop.toFixed(2)
                kassanId.innerHTML = " €"+ja
                }
                if(dataNameLowerCase == "WINES"){
                    var antal = array3[theCut]
                antal++;
                array3.splice(theCut, 1, antal)
                var int  = price.substring(1);
                var number = parseFloat(int)
               // var totalSumma = number * antal
               var totalSumma = found[0].price * array3[theCut]
               document.getElementById(id).innerHTML = "<span id='tja"+theCut+"' class='itemCountS'>"+array3[theCut] +"</span> <span id='tjo"+theCut+"' class='item'>"+findItem2+"</span> <span id='tjena"+theCut+"' class='price'>"+findPrice2+"</span>"
               findId.style.opacity = "1"
                var counter = document.getElementById("räknare" +dataNameLowerCase+ theCut)
                var priceTotal = document.getElementById("priset" +dataNameLowerCase+ theCut)
                counter.innerHTML ="x" + array3[theCut] + " "
                priceTotal.innerHTML = "£" + totalSumma.toFixed(2)
                alltihop = alltihop + (totalSumma/array3[theCut])
                var ja = alltihop.toFixed(2)
                kassanId.innerHTML = " €"+ja
                }
                if(dataNameLowerCase == "BEERS"){
                    var antal = array4[theCut]
                antal++;
                array4.splice(theCut, 1, antal)
                var int  = price.substring(1);
                var number = parseFloat(int)
               // var totalSumma = number * antal
               var totalSumma = found[0].price * array4[theCut]
               document.getElementById(id).innerHTML = "<span id='tja"+theCut+"' class='itemCountS'>"+array4[theCut] +"</span> <span id='tjo"+theCut+"' class='item'>"+findItem2+"</span> <span id='tjena"+theCut+"' class='price'>"+findPrice2+"</span>"
               findId.style.opacity = "1"
                var counter = document.getElementById("räknare" +dataNameLowerCase+ theCut)
                var priceTotal = document.getElementById("priset" +dataNameLowerCase+ theCut)
                counter.innerHTML ="x" + array4[theCut] + " "
                priceTotal.innerHTML = "£" + totalSumma.toFixed(2)
                alltihop = alltihop + (totalSumma/array4[theCut])
                var ja = alltihop.toFixed(2)
                kassanId.innerHTML = " €"+ja
                }
                if(dataNameLowerCase == "DRINKS"){
                    var antal = array5[theCut]
                antal++;
                array5.splice(theCut, 1, antal)
                var int  = price.substring(1);
                var number = parseFloat(int)
               // var totalSumma = number * antal
               var totalSumma = found[0].price * array5[theCut]
               document.getElementById(id).innerHTML = "<span id='tja"+theCut+"' class='itemCountS'>"+array5[theCut] +"</span> <span id='tjo"+theCut+"' class='item'>"+findItem2+"</span> <span id='tjena"+theCut+"' class='price'>"+findPrice2+"</span>"
               findId.style.opacity = "1"
                var counter = document.getElementById("räknare" +dataNameLowerCase+ theCut)
                var priceTotal = document.getElementById("priset" +dataNameLowerCase+ theCut)
                counter.innerHTML ="x" + array5[theCut] + " "
                priceTotal.innerHTML = "£" + totalSumma.toFixed(2)
                alltihop = alltihop + (totalSumma/array5[theCut])
                var ja = alltihop.toFixed(2)
                kassanId.innerHTML = " €"+ja
                }
                if(dataNameLowerCase == "SNACKS"){
                    var antal = array6[theCut]
                antal++;
                array6.splice(theCut, 1, antal)
                var int  = price.substring(1);
                var number = parseFloat(int)
               // var totalSumma = number * antal
               var totalSumma = found[0].price * array6[theCut]
               document.getElementById(id).innerHTML = "<span id='tja"+theCut+"' class='itemCountS'>"+array6[theCut] +"</span> <span id='tjo"+theCut+"' class='item'>"+findItem2+"</span> <span id='tjena"+theCut+"' class='price'>"+findPrice2+"</span>"
               findId.style.opacity = "1"
                var counter = document.getElementById("räknare" +dataNameLowerCase+ theCut)
                var priceTotal = document.getElementById("priset" +dataNameLowerCase+ theCut)
                counter.innerHTML ="x" + array6[theCut] + " "
                priceTotal.innerHTML = "£" + totalSumma.toFixed(2)
                alltihop = alltihop + (totalSumma/array6[theCut])
                var ja = alltihop.toFixed(2)
                kassanId.innerHTML = " €"+ja
                }
                if(dataNameLowerCase == "ADDONS"){
                    var antal = array7[theCut]
                antal++;
                array7.splice(theCut, 1, antal)
                var int  = price.substring(1);
                var number = parseFloat(int)
               // var totalSumma = number * antal
               var totalSumma = found[0].price * array7[theCut]
               document.getElementById(id).innerHTML = "<span id='tja"+theCut+"' class='itemCountS'>"+array7[theCut] +"</span> <span id='tjo"+theCut+"' class='item'>"+findItem2+"</span> <span id='tjena"+theCut+"' class='price'>"+findPrice2+"</span>"
               findId.style.opacity = "1"
                var counter = document.getElementById("räknare" +dataNameLowerCase+ theCut)
                var priceTotal = document.getElementById("priset" +dataNameLowerCase+ theCut)
                counter.innerHTML ="x" + array7[theCut] + " "
                priceTotal.innerHTML = "£" + totalSumma.toFixed(2)
                alltihop = alltihop + (totalSumma/array7[theCut])
                var ja = alltihop.toFixed(2)
                kassanId.innerHTML = " €"+ja
                }
                if(dataNameLowerCase == "EXTRA"){
                    var antal = array8[theCut]
                antal++;
                array8.splice(theCut, 1, antal)
                var int  = price.substring(1);
                var number = parseFloat(int)
               // var totalSumma = number * antal
               var totalSumma = found[0].price * array8[theCut]
               document.getElementById(id).innerHTML = "<span id='tja"+theCut+"' class='itemCountS'>"+array8[theCut] +"</span> <span id='tjo"+theCut+"' class='item'>"+findItem2+"</span> <span id='tjena"+theCut+"' class='price'>"+findPrice2+"</span>"
               findId.style.opacity = "1"
                var counter = document.getElementById("räknare" +dataNameLowerCase+ theCut)
                var priceTotal = document.getElementById("priset" +dataNameLowerCase+ theCut)
                counter.innerHTML ="x" + array8[theCut] + " "
                priceTotal.innerHTML = "£" + totalSumma.toFixed(2)
                alltihop = alltihop + (totalSumma/array8[theCut])
                var ja = alltihop.toFixed(2)
                kassanId.innerHTML = " €"+ja
                }

            }
            else {
                if(dataNameLowerCase == "PRE"){
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
                if(dataNameLowerCase == "MAINS"){
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

            if(dataNameLowerCase == "DESSERTS"){
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

        if(dataNameLowerCase == "WINES"){
            var antal = array3[theCut]
            antal++
            array3.splice(theCut, 1, antal)

    document.getElementById(id).innerHTML = "<span id='tja"+theCut+"' class='itemCountS'>"+ 1 +"</span> <span id='tjo"+theCut +"' class='item'>"+findItem2+"</span> <span id='tjena"+theCut+"' class='price'>"+findPrice2+"</span>"
    findId.style.opacity = "1"
   findElement.innerHTML = findElement.innerHTML + '<div class ="content31"><span id ="räknare'+dataNameLowerCase+ theCut+'"class ="cashierCount"> x' + 1 + ' ' + '</span><span class ="vara">'+ item + '</span>' + '<span id="priset'+dataNameLowerCase+ theCut +'" class ="priset">' +price + '</span></div>'
            
            var number = price.substring(1)
            var lastNumber = parseFloat(number)
            alltihop = lastNumber +alltihop
           var ja = alltihop.toFixed(2)
            kassanId.innerHTML = " €"+ja;
    }
    if(dataNameLowerCase == "BEERS"){
        var antal = array4[theCut]
        antal++
        array4.splice(theCut, 1, antal)

        document.getElementById(id).innerHTML = "<span id='tja"+theCut+"' class='itemCountS'>"+ 1 +"</span> <span id='tjo"+theCut +"' class='item'>"+findItem2+"</span> <span id='tjena"+theCut+"' class='price'>"+findPrice2+"</span>"
        findId.style.opacity = "1"
        findElement.innerHTML = findElement.innerHTML + '<div class ="content31"><span id ="räknare'+dataNameLowerCase+ theCut+'"class ="cashierCount"> x' + 1 + ' ' + '</span><span class ="vara">'+ item + '</span>' + '<span id="priset'+dataNameLowerCase+ theCut +'" class ="priset">' +price + '</span></div>'
        
        var number = price.substring(1)
        var lastNumber = parseFloat(number)
        alltihop = lastNumber +alltihop
       var ja = alltihop.toFixed(2)
        kassanId.innerHTML = " €"+ja;
    }

    if(dataNameLowerCase == "DRINKS"){
        var antal = array5[theCut]
        antal++
        array5.splice(theCut, 1, antal)

document.getElementById(id).innerHTML = "<span id='tja"+theCut+"' class='itemCountS'>"+ 1 +"</span> <span id='tjo"+theCut +"' class='item'>"+findItem2+"</span> <span id='tjena"+theCut+"' class='price'>"+findPrice2+"</span>"
findId.style.opacity = "1"
findElement.innerHTML = findElement.innerHTML + '<div class ="content31"><span id ="räknare'+dataNameLowerCase+ theCut+'"class ="cashierCount"> x' + 1 + ' ' + '</span><span class ="vara">'+ item + '</span>' + '<span id="priset'+dataNameLowerCase+ theCut +'" class ="priset">' +price + '</span></div>'
        
        var number = price.substring(1)
        var lastNumber = parseFloat(number)
        alltihop = lastNumber +alltihop
       var ja = alltihop.toFixed(2)
        kassanId.innerHTML = " €"+ja;
}       

if(dataNameLowerCase == "SNACKS"){
    var antal = array6[theCut]
    antal++
    array6.splice(theCut, 1, antal)

document.getElementById(id).innerHTML = "<span id='tja"+theCut+"' class='itemCountS'>"+ 1 +"</span> <span id='tjo"+theCut +"' class='item'>"+findItem2+"</span> <span id='tjena"+theCut+"' class='price'>"+findPrice2+"</span>"
findId.style.opacity = "1"
findElement.innerHTML = findElement.innerHTML + '<div class ="content31"><span id ="räknare'+dataNameLowerCase+ theCut+'"class ="cashierCount"> x' + 1 + ' ' + '</span><span class ="vara">'+ item + '</span>' + '<span id="priset'+dataNameLowerCase+ theCut +'" class ="priset">' +price + '</span></div>'
    
    var number = price.substring(1)
    var lastNumber = parseFloat(number)
    alltihop = lastNumber +alltihop
   var ja = alltihop.toFixed(2)
    kassanId.innerHTML = " €"+ja;
}

if(dataNameLowerCase == "ADDONS"){
    var antal = array7[theCut]
    antal++
    array7.splice(theCut, 1, antal)

document.getElementById(id).innerHTML = "<span id='tja"+theCut+"' class='itemCountS'>"+ 1 +"</span> <span id='tjo"+theCut +"' class='item'>"+findItem2+"</span> <span id='tjena"+theCut+"' class='price'>"+findPrice2+"</span>"
findId.style.opacity = "1"
findElement.innerHTML = findElement.innerHTML + '<div class ="content31"><span id ="räknare'+dataNameLowerCase+ theCut+'"class ="cashierCount"> x' + 1 + ' ' + '</span><span class ="vara">'+ item + '</span>' + '<span id="priset'+dataNameLowerCase+ theCut +'" class ="priset">' +price + '</span></div>'
    
    var number = price.substring(1)
    var lastNumber = parseFloat(number)
    alltihop = lastNumber +alltihop
   var ja = alltihop.toFixed(2)
    kassanId.innerHTML = " €"+ja;
}
if(dataNameLowerCase == "EXTRA"){
    var antal = array7[theCut]
    antal++
    array7.splice(theCut, 1, antal)

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
    for(var i = 0; i < data; i++){
        array.push(0)
    }
    return array
}

function buy(){
    var getBody = document.getElementById("container")
    var createBackground = document.createElement("div")
    createBackground.setAttribute("class", "backScreen")
    createBackground.setAttribute("id", "backScreen1")
    getBody.appendChild(createBackground)


    var createElement = document.createElement("div")
    createElement.setAttribute("class", "buyScreen")
    createElement.setAttribute("id", "buyScreen1")
    
   // createElement.style.filter="blur(0px)"
    
    
    getBody.appendChild(createElement)
    var getNewElement = document.getElementById("buyScreen1")

    duplicateChildNodes("3",getNewElement)

    var createElement2 = document.createElement("div")
    createElement2.setAttribute("class", "buyScreen2")
    createElement2.setAttribute("id", "buyScreen2")
    
    
   getBody.appendChild(createElement2)

    var fixed = alltihop.toFixed(2)
    var taxCut = fixed * 0.12;
    var fixedTaxCut = taxCut.toFixed(2)
    var toInt1 = parseInt(fixed)
    var toInt2 = parseInt(fixedTaxCut)


    var lastPrice = toInt1 + toInt2
    var fixedLastPrice = lastPrice.toFixed(2)

    var getNewElement2 = document.getElementById("buyScreen2")
    getNewElement2.innerHTML = "<div class='rad1'><span id='subTotal' class='buyTax'>SubTotal</span><span id='priceBeforeTax' class='priceBeforeTax'>£"+
    fixed + "</span></div><div class ='rad1'><span id='tax' class'tax'>Tax</span><span id='taxAdd' class='taxAdd'>£" + fixedTaxCut + "</span></div><div class='rad2'><span id='totalEndPrice' class='totalEndPrice'>Total</span><span id=lastPrice>£"+
    fixedLastPrice +"</span></div>"

    var createElement3 = document.createElement("div")
    createElement3.setAttribute("class","checkOutButton")
    createElement3.setAttribute("id", "checkOutButton")
    createElement3.innerHTML="<span id='payKnapp' onclick='pay()'>Pay</span>"

    getBody.appendChild(createElement3)

    var createElement4 = document.createElement("div")
    createElement4.setAttribute("class","cancelButton")
    createElement4.setAttribute("id", "cancelButton")
    createElement4.innerHTML="<span id='cancelKnapp' onclick='cancel()'>Cancel</span>"

    getBody.appendChild(createElement4)



    


    
    
    
    
}

function duplicateChildNodes (parentId,targetId){
    var parent = document.getElementById(parentId);
    NodeList.prototype.forEach = Array.prototype.forEach;
    var children = parent.childNodes;
    children.forEach(function(item){
      var cln = item.cloneNode(true);
      targetId.appendChild(cln);
    });
  };


  function cancel(){
      var doc1 = document.getElementById("backScreen1")
      doc1.remove();

      var doc2 = document.getElementById("buyScreen1")
      doc2.remove();
      
      var doc3 = document.getElementById("buyScreen2")
      doc3.remove();

      var doc4 = document.getElementById("checkOutButton")
      doc4.remove();

      var doc5 = document.getElementById("cancelButton")
      doc5.remove();
      
  }

  function pay(){
    let s= new Date()
    var totalPrice1 = document.getElementById("lastPrice")
    var x = totalPrice1.innerHTML;
    var cut = x.substring(1)

    let postObj = {
        id: 0,
        date: s,
        totalPrice: cut
    }

    let post = JSON.stringify(postObj)

    var xhr = new XMLHttpRequest()
    xhr.open("POST", "http://localhost:8081/save/receipt")
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8")
    xhr.send(post)
    xhr.onload = function(){
        if(xhr.status === 200){
            console.log("Det funka")
        }
        

  }

}