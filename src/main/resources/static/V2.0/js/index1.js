


var id1;
var counter = 0;
runLocalStorage();

window.onunload = function () {
	localStorage.setItem("checker",0)
}

function checkCashier(){
    var hasNumber = /\d/;
    var testString = document.getElementById("köpText").innerHTML
    var knapp = document.getElementById("buyButton")
    if(hasNumber.test(testString)){
        knapp.style.backgroundColor = "#6360BA"
    }
    
}


//const reload = setInterval(reloaditemStock, 10000)


function reloaditemStock(){
    
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "https://shirwac-pos-system.herokuapp.com/list")
    xhr.onload = function(){
        for(var i = 0; i < 9; i++){
        var data = JSON.parse(this.response) 
         var x = JSON.stringify(data[i])
         
         var howManyItemsInStock = document.getElementById("nummer" + i)
        howManyItemsInStock.innerHTML = x + " ";
    }
}
    xhr.send()
    console.log("Den når")

}

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
function runLocalStorage(){
    if(localStorage.getItem("checker") != 1){
    
    var category = ["PRE","MAINS","DESSERTS","WINES","BEERS","DRINKS","SNACKS","ADDONS","EXTRA"]
    for(var i = 0; i < 9; i++){
        var xhr = new XMLHttpRequest()
        xhr.open("GET", "https://shirwac-pos-system.herokuapp.com/dishes?categoryType="+ category[i])
        xhr.onload = function(){
        var data = JSON.parse(this.response)
        savingInLocal(data)
    }
    xhr.send()
        

    }
}

}

function apiConnection(upperCase){
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "https://shirwac-pos-system.herokuapp.com/dishes?categoryType="+ upperCase)
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
    xhr.open("GET", "https://shirwac-pos-system.herokuapp.com/dishes/highPrice?categoryType="+upperCase)
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
    xhr.open("GET", "https://shirwac-pos-system.herokuapp.com/dishes/lowPrice?categoryType="+upperCase)
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
    xhr.open("GET", "https://shirwac-pos-system.herokuapp.com//dishes/A-z?categoryType="+upperCase)
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
    xhr.open("GET", "https://shirwac-pos-system.herokuapp.com/list")
    xhr.onload = function(){
        var data = JSON.parse(this.response) 
         var i = JSON.stringify(data[0])
         
         var howManyItemsInStock = document.getElementById("nummer" + 0)
        howManyItemsInStock.innerHTML = i + " ";
         array0 = savingItemInLocalStorage(data[0])
         
  
         }             
    xhr.send()

    var xhr = new XMLHttpRequest()
    xhr.open("GET", "https://shirwac-pos-system.herokuapp.com/list")
    xhr.onload = function(){
        var data = JSON.parse(this.response) 
         var i = JSON.stringify(data[1])
         var howManyItemsInStock = document.getElementById("nummer" + 1)
         howManyItemsInStock.innerHTML = i+ " "
         array1 = savingItemInLocalStorage(data[1])
         
  
        
         }             
    xhr.send()


    var xhr = new XMLHttpRequest()
    xhr.open("GET", "https://shirwac-pos-system.herokuapp.com/list")
    xhr.onload = function(){
        var data = JSON.parse(this.response) 
         var i = JSON.stringify(data[2]);
         var howManyItemsInStock = document.getElementById("nummer" + 2)
         howManyItemsInStock.innerHTML = i + " "
        array2 = savingItemInLocalStorage(data[2])
  
        
         }            
    xhr.send()

    var xhr = new XMLHttpRequest()
    xhr.open("GET", "https://shirwac-pos-system.herokuapp.com/list")
    xhr.onload = function(){
        var data = JSON.parse(this.response) 
         var i = JSON.stringify(data[3]);
         var howManyItemsInStock = document.getElementById("nummer" + 3)
         howManyItemsInStock.innerHTML = i + " "
        array3 = savingItemInLocalStorage(data[3])
  
        
         }            
    xhr.send()
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "https://shirwac-pos-system.herokuapp.com/list")
    xhr.onload = function(){
        var data = JSON.parse(this.response) 
         var i = JSON.stringify(data[4]);
         var howManyItemsInStock = document.getElementById("nummer" + 4)
         howManyItemsInStock.innerHTML = i + " "
        array4 = savingItemInLocalStorage(data[4])
  
        
         }            
    xhr.send()
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "https://shirwac-pos-system.herokuapp.com/list")
    xhr.onload = function(){
        var data = JSON.parse(this.response) 
         var i = JSON.stringify(data[5]);
         var howManyItemsInStock = document.getElementById("nummer" + 5)
         howManyItemsInStock.innerHTML = i + " "
        array5 = savingItemInLocalStorage(data[5])
  
        
         }            
    xhr.send()
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "https://shirwac-pos-system.herokuapp.com/list")
    xhr.onload = function(){
        var data = JSON.parse(this.response) 
         var i = JSON.stringify(data[6]);
         var howManyItemsInStock = document.getElementById("nummer" + 6)
         howManyItemsInStock.innerHTML = i + " "
        array6 = savingItemInLocalStorage(data[6])
  
        
         }            
    xhr.send()
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "https://shirwac-pos-system.herokuapp.com/list")
    xhr.onload = function(){
        var data = JSON.parse(this.response) 
         var i = JSON.stringify(data[7]);
         var howManyItemsInStock = document.getElementById("nummer" + 7)
         howManyItemsInStock.innerHTML = i + " "
        array7 = savingItemInLocalStorage(data[7])
  
        
         }            
    xhr.send()
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "https://shirwac-pos-system.herokuapp.com/list")
    xhr.onload = function(){
        var data = JSON.parse(this.response) 
         var i = JSON.stringify(data[8]);
         var howManyItemsInStock = document.getElementById("nummer" + 8)
         howManyItemsInStock.innerHTML = i + " "
        array8 = savingItemInLocalStorage(data[8])
  
        
         }            
    xhr.send()
    
}

saveAllItem()


function createDishes(data,s){
    
    if(s == 0) {
    for(var i = 0; i < data.length; i++){
    var createContent = document.createElement("div")
    createContent.setAttribute("id", s+ "Box"+ i)
    createContent.setAttribute("class", "contentBox2")
    createContent.setAttribute("onclick", "addToCashier(this)")
    createContent.innerHTML = "<span id='tja"+i+"' class='itemCountS'>"+localStorage.getItem(data[i].dishName) +"</span> <span id='tjo"+i +"'class='item'>"+data[i].dishName +"</span> <span <span id='tjena"+i +"' class='price'>€"+data[i].price+ "</span>"
   
    
    
   
    var divId2 = document.getElementById("2")
    
    divId2.appendChild(createContent)
    if(localStorage.getItem(data[i].dishName) > 0){
        var find = document.getElementById(s+"Box"+i)
        find.style.opacity="1"
    }
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
        createContent.innerHTML = "<span id='tja"+i+"' class='itemCountS'>"+localStorage.getItem(data[i].dishName) +"</span> <span id='tjo"+i +"'class='item'>"+data[i].dishName +"</span> <span <span id='tjena"+i +"' class='price'>€"+data[i].price+ "</span>"
        
       
        var divId2 = document.getElementById("2")
        
        divId2.appendChild(createContent)
        if(localStorage.getItem(data[i].dishName) > 0){
            var find = document.getElementById(s+"Box"+i)
            find.style.opacity="1"
        }
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
            createContent.innerHTML = "<span id='tja"+i+"' class='itemCountS'>"+localStorage.getItem(data[i].dishName) +"</span> <span id='tjo"+i +"'class='item'>"+data[i].dishName +"</span> <span <span id='tjena"+i +"' class='price'>€"+data[i].price+ "</span>"
            
           
            var divId2 = document.getElementById("2")
            
            divId2.appendChild(createContent)
            if(localStorage.getItem(data[i].dishName) > 0){
                var find = document.getElementById(s+"Box"+i)
                find.style.opacity="1"
            }
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
                createContent.innerHTML = "<span id='tja"+i+"' class='itemCountS'>"+localStorage.getItem(data[i].dishName) +"</span> <span id='tjo"+i +"'class='item'>"+data[i].dishName +"</span> <span <span id='tjena"+i +"' class='price'>€"+data[i].price+ "</span>"
                
               
                var divId2 = document.getElementById("2")
                
                divId2.appendChild(createContent)
                if(localStorage.getItem(data[i].dishName) > 0){
                    var find = document.getElementById(s+"Box"+i)
                    find.style.opacity="1"
                }
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
                    createContent.innerHTML = "<span id='tja"+i+"' class='itemCountS'>"+localStorage.getItem(data[i].dishName) +"</span> <span id='tjo"+i +"'class='item'>"+data[i].dishName +"</span> <span <span id='tjena"+i +"' class='price'>€"+data[i].price+ "</span>"
                    
                   
                    var divId2 = document.getElementById("2")
                    
                    divId2.appendChild(createContent)
                    if(localStorage.getItem(data[i].dishName) > 0){
                        var find = document.getElementById(s+"Box"+i)
                        find.style.opacity="1"
                    }
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
                        createContent.innerHTML = "<span id='tja"+i+"' class='itemCountS'>"+localStorage.getItem(data[i].dishName)+"</span> <span id='tjo"+i +"'class='item'>"+data[i].dishName +"</span> <span <span id='tjena"+i +"' class='price'>€"+data[i].price+ "</span>"
                        
                       
                        var divId2 = document.getElementById("2")
                        
                        divId2.appendChild(createContent)
                        if(localStorage.getItem(data[i].dishName) > 0){
                            var find = document.getElementById(s+"Box"+i)
                            find.style.opacity="1"
                        }
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
                            createContent.innerHTML = "<span id='tja"+i+"' class='itemCountS'>"+localStorage.getItem(data[i].dishName)+"</span> <span id='tjo"+i +"'class='item'>"+data[i].dishName +"</span> <span <span id='tjena"+i +"' class='price'>€"+data[i].price+ "</span>"
                            
                           
                            var divId2 = document.getElementById("2")
                            
                            divId2.appendChild(createContent)
                            if(localStorage.getItem(data[i].dishName) > 0){
                                var find = document.getElementById(s+"Box"+i)
                                find.style.opacity="1"
                            }
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
                                createContent.innerHTML = "<span id='tja"+i+"' class='itemCountS'>"+localStorage.getItem(data[i].dishName)+"</span> <span id='tjo"+i +"'class='item'>"+data[i].dishName +"</span> <span <span id='tjena"+i +"' class='price'>€"+data[i].price+ "</span>"
                                
                               
                                var divId2 = document.getElementById("2")
                                
                                divId2.appendChild(createContent)
                                if(localStorage.getItem(data[i].dishName) > 0){
                                    var find = document.getElementById(s+"Box"+i)
                                    find.style.opacity="1"
                                }
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
                                    createContent.innerHTML = "<span id='tja"+i+"' class='itemCountS'>"+localStorage.getItem(data[i].dishName)+"</span> <span id='tjo"+i +"'class='item'>"+data[i].dishName +"</span> <span <span id='tjena"+i +"' class='price'>€"+data[i].price+ "</span>"
                                    
                                   
                                    var divId2 = document.getElementById("2")
                                    
                                    divId2.appendChild(createContent)
                                    if(localStorage.getItem(data[i].dishName) > 0){
                                        var find = document.getElementById(s+"Box"+i)
                                        find.style.opacity="1"
                                    }
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
    xhr.open("GET", "https://shirwac-pos-system.herokuapp.com/dishes?categoryType="+dataNameLowerCase)
    xhr.onload = function(){
    var data = JSON.parse(this.response) 

    var found = getItemCounterByItemName(findItem2,data)
        
    if(findElement.innerHTML.includes(item)){
        if(dataNameLowerCase == "PRE"){
            var antal = localStorage.getItem(findItem2)
            antal++;
            localStorage.setItem(findItem2,antal)
            var int  = price.substring(1);
            var number = parseFloat(int)
            var totalSumma = found[0].price * localStorage.getItem(findItem2)
            document.getElementById(id).innerHTML = "<span id='tja"+theCut+"' class='itemCountS'>"+localStorage.getItem(findItem2) +"</span> <span id='tjo"+theCut+"' class='item'>"+findItem2+"</span> <span id='tjena"+theCut+"' class='price'>"+findPrice2+"</span>"
            findId.style.opacity = "1"
                var counter = document.getElementById("räknare" +dataNameLowerCase+ theCut)
                var priceTotal = document.getElementById("priset" +dataNameLowerCase+ theCut)
                counter.innerHTML ="x" + localStorage.getItem(findItem2) + " "
                priceTotal.innerHTML = "£" + totalSumma.toFixed(2)
                alltihop = alltihop + (totalSumma/localStorage.getItem(findItem2))
                var ja = alltihop.toFixed(2)
                kassanId.innerHTML = " €"+ja
               // findElement.innerHTML = + '<div class ="content31"><span class ="cashierCount"> x' + array[theCut] + '</span><span class ="vara">'+ item + '</span>' + '<span class ="priset">€' +totalSumma + '</span></div>'
                }
                if(dataNameLowerCase == "MAINS"){
                    var antal = localStorage.getItem(findItem2)
                antal++;
                localStorage.setItem(findItem2,antal)
                var int  = price.substring(1);
                var number = parseFloat(int)
               // var totalSumma = number * antal
               var totalSumma = found[0].price * localStorage.getItem(findItem2)
               document.getElementById(id).innerHTML = "<span id='tja"+theCut+"' class='itemCountS'>"+localStorage.getItem(findItem2) +"</span> <span id='tjo"+theCut+"' class='item'>"+findItem2+"</span> <span id='tjena"+theCut+"' class='price'>"+findPrice2+"</span>"
               findId.style.opacity = "1"
                var counter = document.getElementById("räknare" +dataNameLowerCase+ theCut)
                var priceTotal = document.getElementById("priset" +dataNameLowerCase+ theCut)
                counter.innerHTML ="x" + localStorage.getItem(findItem2) + " "
                priceTotal.innerHTML = "£" + totalSumma.toFixed(2)
                alltihop = alltihop + (totalSumma/localStorage.getItem(findItem2))
                var ja = alltihop.toFixed(2)
                kassanId.innerHTML = " €"+ja
                }
                if(dataNameLowerCase == "DESSERTS"){
                    var antal = localStorage.getItem(findItem2)
                    
                antal++;
                localStorage.setItem(findItem2,antal)
                var int  = price.substring(1);
                var number = parseFloat(int)
               // var totalSumma = number * antal
               var totalSumma = found[0].price * localStorage.getItem(findItem2)
               document.getElementById(id).innerHTML = "<span id='tja"+theCut+"' class='itemCountS'>"+localStorage.getItem(findItem2)+"</span> <span id='tjo"+theCut+"' class='item'>"+findItem2+"</span> <span id='tjena"+theCut+"' class='price'>"+findPrice2+"</span>"
               findId.style.opacity = "1"
                var counter = document.getElementById("räknare" +dataNameLowerCase+ theCut)
                var priceTotal = document.getElementById("priset" +dataNameLowerCase+ theCut)
                counter.innerHTML ="x" + localStorage.getItem(findItem2) + " "
                priceTotal.innerHTML = "£" + totalSumma.toFixed(2)
                alltihop = alltihop  + (totalSumma/localStorage.getItem(findItem2))
                var ja = alltihop.toFixed(2)
                kassanId.innerHTML = " €"+ja
                }
                if(dataNameLowerCase == "WINES"){
                    var antal = localStorage.getItem(findItem2)
                antal++;
                localStorage.setItem(findItem2,antal)
                var int  = price.substring(1);
                var number = parseFloat(int)
               // var totalSumma = number * antal
               var totalSumma = found[0].price * localStorage.getItem(findItem2)
               document.getElementById(id).innerHTML = "<span id='tja"+theCut+"' class='itemCountS'>"+localStorage.getItem(findItem2) +"</span> <span id='tjo"+theCut+"' class='item'>"+findItem2+"</span> <span id='tjena"+theCut+"' class='price'>"+findPrice2+"</span>"
               findId.style.opacity = "1"
                var counter = document.getElementById("räknare" +dataNameLowerCase+ theCut)
                var priceTotal = document.getElementById("priset" +dataNameLowerCase+ theCut)
                counter.innerHTML ="x" + localStorage.getItem(findItem2) + " "
                priceTotal.innerHTML = "£" + totalSumma.toFixed(2)
                alltihop = alltihop + (totalSumma/localStorage.getItem(findItem2))
                var ja = alltihop.toFixed(2)
                kassanId.innerHTML = " €"+ja
                }
                if(dataNameLowerCase == "BEERS"){
                    var antal = localStorage.getItem(findItem2)
                antal++;
                localStorage.setItem(findItem2,antal)
                var int  = price.substring(1);
                var number = parseFloat(int)
               // var totalSumma = number * antal
               var totalSumma = found[0].price * localStorage.getItem(findItem2)
               document.getElementById(id).innerHTML = "<span id='tja"+theCut+"' class='itemCountS'>"+localStorage.getItem(findItem2) +"</span> <span id='tjo"+theCut+"' class='item'>"+findItem2+"</span> <span id='tjena"+theCut+"' class='price'>"+findPrice2+"</span>"
               findId.style.opacity = "1"
                var counter = document.getElementById("räknare" +dataNameLowerCase+ theCut)
                var priceTotal = document.getElementById("priset" +dataNameLowerCase+ theCut)
                counter.innerHTML ="x" + localStorage.getItem(findItem2) + " "
                priceTotal.innerHTML = "£" + totalSumma.toFixed(2)
                alltihop = alltihop + (totalSumma/localStorage.getItem(findItem2))
                var ja = alltihop.toFixed(2)
                kassanId.innerHTML = " €"+ja
                }
                if(dataNameLowerCase == "DRINKS"){
                    var antal = localStorage.getItem(findItem2)
                antal++;
                localStorage.setItem(findItem2,antal)
                var int  = price.substring(1);
                var number = parseFloat(int)
               // var totalSumma = number * antal
               var totalSumma = found[0].price * localStorage.getItem(findItem2)
               document.getElementById(id).innerHTML = "<span id='tja"+theCut+"' class='itemCountS'>"+localStorage.getItem(findItem2)+"</span> <span id='tjo"+theCut+"' class='item'>"+findItem2+"</span> <span id='tjena"+theCut+"' class='price'>"+findPrice2+"</span>"
               findId.style.opacity = "1"
                var counter = document.getElementById("räknare" +dataNameLowerCase+ theCut)
                var priceTotal = document.getElementById("priset" +dataNameLowerCase+ theCut)
                counter.innerHTML ="x" + localStorage.getItem(findItem2) + " "
                priceTotal.innerHTML = "£" + totalSumma.toFixed(2)
                alltihop = alltihop + (totalSumma/localStorage.getItem(findItem2))
                var ja = alltihop.toFixed(2)
                kassanId.innerHTML = " €"+ja
                }
                if(dataNameLowerCase == "SNACKS"){
                    var antal = localStorage.getItem(findItem2)
                antal++;
                localStorage.setItem(findItem2,antal)
                var int  = price.substring(1);
                var number = parseFloat(int)
               // var totalSumma = number * antal
               var totalSumma = found[0].price * localStorage.getItem(findItem2)
               document.getElementById(id).innerHTML = "<span id='tja"+theCut+"' class='itemCountS'>"+localStorage.getItem(findItem2) +"</span> <span id='tjo"+theCut+"' class='item'>"+findItem2+"</span> <span id='tjena"+theCut+"' class='price'>"+findPrice2+"</span>"
               findId.style.opacity = "1"
                var counter = document.getElementById("räknare" +dataNameLowerCase+ theCut)
                var priceTotal = document.getElementById("priset" +dataNameLowerCase+ theCut)
                counter.innerHTML ="x" + localStorage.getItem(findItem2) + " "
                priceTotal.innerHTML = "£" + totalSumma.toFixed(2)
                alltihop = alltihop + (totalSumma/localStorage.getItem(findItem2))
                var ja = alltihop.toFixed(2)
                kassanId.innerHTML = " €"+ja
                }
                if(dataNameLowerCase == "ADDONS"){
                    var antal = localStorage.getItem(findItem2)
                antal++;
                localStorage.setItem(findItem2,antal)
                var int  = price.substring(1);
                var number = parseFloat(int)
               // var totalSumma = number * antal
               var totalSumma = found[0].price * localStorage.getItem(findItem2)
               document.getElementById(id).innerHTML = "<span id='tja"+theCut+"' class='itemCountS'>"+localStorage.getItem(findItem2) +"</span> <span id='tjo"+theCut+"' class='item'>"+findItem2+"</span> <span id='tjena"+theCut+"' class='price'>"+findPrice2+"</span>"
               findId.style.opacity = "1"
                var counter = document.getElementById("räknare" +dataNameLowerCase+ theCut)
                var priceTotal = document.getElementById("priset" +dataNameLowerCase+ theCut)
                counter.innerHTML ="x" + localStorage.getItem(findItem2) + " "
                priceTotal.innerHTML = "£" + totalSumma.toFixed(2)
                alltihop = alltihop + (totalSumma/localStorage.getItem(findItem2))
                var ja = alltihop.toFixed(2)
                kassanId.innerHTML = " €"+ja
                }
                if(dataNameLowerCase == "EXTRA"){
                    var antal = localStorage.getItem(findItem2)
                antal++;
                localStorage.setItem(findItem2,antal)
                var int  = price.substring(1);
                var number = parseFloat(int)
               // var totalSumma = number * antal
               var totalSumma = found[0].price * localStorage.getItem(findItem2)
               document.getElementById(id).innerHTML = "<span id='tja"+theCut+"' class='itemCountS'>"+localStorage.getItem(findItem2) +"</span> <span id='tjo"+theCut+"' class='item'>"+findItem2+"</span> <span id='tjena"+theCut+"' class='price'>"+findPrice2+"</span>"
               findId.style.opacity = "1"
                var counter = document.getElementById("räknare" +dataNameLowerCase+ theCut)
                var priceTotal = document.getElementById("priset" +dataNameLowerCase+ theCut)
                counter.innerHTML ="x" + localStorage.getItem(findItem2) + " "
                priceTotal.innerHTML = "£" + totalSumma.toFixed(2)
                alltihop = alltihop + (totalSumma/localStorage.getItem(findItem2))
                var ja = alltihop.toFixed(2)
                kassanId.innerHTML = " €"+ja
                }

            }
            else {
                if(dataNameLowerCase == "PRE"){
                    var antal = localStorage.getItem(findItem2)
                    antal++
                    localStorage.setItem(findItem2, antal)

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
                    var antal = localStorage.getItem(findItem2)
                    antal++
                    localStorage.setItem(findItem2,antal)

                    
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
                var antal = localStorage.getItem(findItem2)
                antal++
                localStorage.setItem(findItem2,antal)

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
            var antal = localStorage.getItem(findItem2)
            antal++
            localStorage.setItem(findItem2,antal)

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
        var antal = localStorage.getItem(findItem2)
        antal++
        localStorage.setItem(findItem2,antal)

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
        var antal = localStorage.getItem(findItem2)
        antal++
        localStorage.setItem(findItem2,antal)

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
    var antal = localStorage.getItem(findItem2)
    antal++
    localStorage.setItem(findItem2,antal)

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
    var antal = localStorage.getItem(findItem2)
    antal++
    localStorage.setItem(findItem2,antal)

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
    var antal = localStorage.getItem(findItem2)
    antal++
    localStorage.setItem(findItem2,antal)

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
    createElement3.setAttribute("onclick","pay()")
    createElement3.innerHTML="<span id='payKnapp'>Pay</span>"

    getBody.appendChild(createElement3)

    var createElement4 = document.createElement("div")
    createElement4.setAttribute("class","cancelButton")
    createElement4.setAttribute("id", "cancelButton")
    createElement4.setAttribute("onclick","cancel()")
    createElement4.innerHTML="<span id='cancelKnapp'>Cancel</span>"

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

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


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
    var s = new Date()
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
    xhr.open("POST", "https://shirwac-pos-system.herokuapp.com/save/receipt")
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8")
    xhr.send(post)
    xhr.onload = function(){
        if(xhr.status === 200){
            console.log("Det funka")
        } 

  }
 /* var find1 = document.getElementsByClassName("buyScreen");
  for(var i = 0; i < find1.length; i++){
  find1[i].remove();
  } */

  var findbyId = document.getElementById("buyScreen1")
  removeAllChildNodes(findbyId)

  
  var find2 = document.getElementById("buyScreen2");
    find2.remove();
    
  var find3 = document.getElementById("checkOutButton")
  find3.remove()

  var find4 = document.getElementById("cancelButton")
  find4.remove()
  
    var createDiv = document.createElement("div")
    createDiv.setAttribute("class","lds-dual-ring")
    createDiv.setAttribute("id", "lds")
    var findDiv = document.getElementById("buyScreen1")
    findDiv.style.display = "flex"
    findDiv.style.justifyContent= "center"
    findDiv.style.alignItems = "center"
    findDiv.style.position = "relative"
    findDiv.style.position = "right: 20px"
    findDiv.appendChild(createDiv)


//TODO: Funktionen excute direkt vet inte vrf.
    setTimeout(function(){
        var find = document.getElementById("lds")
        find.remove()
        findDiv.innerHTML = "Thanks for shopping with us!"
    },3000)
    

   

    setTimeout(function (){
        findDiv.innerHTML = "Thanks for shopping with us!"
        location.reload()
    }, 5000)
    
    

   



}

function savingInLocal(data){
    localStorage.setItem("checker", 1)
    for(var i = 0; i < data.length; i++){
        localStorage.setItem(data[i].dishName, 0)
    }

}


function adminDash(){
    var getBody = document.getElementById("container")
    var createBackground = document.createElement("div")
    createBackground.setAttribute("class", "backScreen")
    createBackground.setAttribute("id", "backScreen1")
    getBody.appendChild(createBackground)

    var createExitButton = document.createElement("div")
    createExitButton.setAttribute("class", "exitButton")
    createExitButton.setAttribute("id", "exitButton")
    createExitButton.innerHTML="<span id='exitDot' onclick='closeWin()'>x</span>"


    var createDiv = document.createElement("div")
    createDiv.setAttribute("class", "adminDashboard")
    createDiv.setAttribute("id", "adminDashboard")

    
    createDiv.innerHTML= "<span id='text10' onclick ='addDish()'>ADD</span><span id='text11' onclick='updateDish()'>UPDATE</span><span id='text12' onclick = 'deleteDish()'>DELETE</span><span id='text13' onclick='listDish()'>LIST</span>"
    var find = document.getElementById("adminDashboard")
    createDiv.style.alignItems = "center"

    getBody.appendChild(createDiv);
    
    getBody.appendChild(createExitButton)

    

    
}

function closeWin(){
      var doc5 = document.getElementById("backScreen1")
      doc5.remove();
    
      var doc6 = document.getElementById("exitButton")
      doc6.remove();

      var doc7 = document.getElementById("adminDashboard")
      doc7.remove();

      var doc8 = document.getElementById("backButton")
      doc8.remove()
}

function goBack(){
    var find = document.getElementById("adminDashboard")
    find.innerHTML=""
    find.innerHTML= "<span id='text10' onclick ='addDish()'>ADD</span><span id='text11' onclick='updateDish()'>UPDATE</span><span id='text12' onclick = 'deleteDish()'>DELETE</span><span id='text13' onclick='listDish()'>LIST</span>"
    find.style = "align-items:center"
    var find2 = document.getElementById("backButton")
    find2.remove()
}

function addDish(){
    var find = document.getElementById("adminDashboard")
    find.innerHTML=""
    find.style = "align-items: space-between"
    findContainer = document.getElementById("container")

    var createBackButton = document.createElement("div")
    createBackButton.setAttribute("class", "backButton")
    createBackButton.setAttribute("id", "backButton")
    createBackButton.innerHTML="<span id='backDot' onclick='goBack()'>←</span>"
    findContainer.appendChild(createBackButton)

    
    var createDiv = document.createElement("div")
    createDiv.setAttribute("class", "adminDashDiv")
    createDiv.setAttribute("id", "adminDashDiv")
    createDiv.innerHTML= '<div class="form-group"><label for="firstname">Dish Name</label><input id="dishNamn" class="form-control" type="text" name="dishName" placeholder=" Enter your dish name" required></div>'
     +'<div class="form-group"><label for="dishPrice">Dish Price</label><input id="dishPris" class="form-control" type="number" name="dishPrice" placeholder=" Enter your dish price" required></div> '+
     '<div class="categoryChoose"><label for="cars">Choose a category:</label><select name="category" id="category">'+
    '<option value="PRE">PRE</option><option value="MAINS">MAINS</option><option value="DESSERTS">DESSERTS</option><option value="WINES">WINES</option><option value="WINES">BEERS</option><option value="DRINKS">DRINKS</option> ' +
    '<option value="SNACKS">SNACKS</option><option value="ADDONS">ADDONS</option><option value="EXTRA">EXTRA</option></select></div><input id ="drop"type="submit" class="btn btn-primary" onclick = "pushDish()">'
    

    var findBody = document.getElementById("adminDashboard")
    findBody.appendChild(createDiv)
}

function pushDish(){
    var dishName1 = document.getElementById("dishNamn").value
    var dishPrice1 = document.getElementById("dishPris").value
    var category1 = document.getElementById("category").value

    localStorage.setItem(dishName1, 0)

    let postObj = {
        "dishName": dishName1,
        "price": dishPrice1,
        "categoryType": category1
    }

    let post = JSON.stringify(postObj)

    var xhr = new XMLHttpRequest()
    xhr.open("POST", "https://shirwac-pos-system.herokuapp.com/save/dish")
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8")
    xhr.send(post)
    xhr.onload = function(){


        if(xhr.status === 200 || xhr.status === 201){
            var findDash = document.getElementById("adminDashDiv")
            findDash.remove()

            var findBackButton = document.getElementById("backButton")
            findBackButton.remove()

            var findExitButton = document.getElementById("exitButton")
            findExitButton.remove()

            var createDiv = document.createElement("div")
            createDiv.setAttribute("class","lds-dual-ring")
            createDiv.setAttribute("id", "lds")


            var findAdmin = document.getElementById("adminDashboard")
            findAdmin.style= "align-items: center"
            findAdmin.appendChild(createDiv)

            setTimeout(function(){
                var find = document.getElementById("lds")
                createDiv.remove()
                findAdmin.innerHTML= "Dish is added..."
            },3000)

            
                
            

            setTimeout(function(){
                findAdmin.innerHTML= "Dish is added..."
                var find1 = document.getElementById("adminDashboard")
                find1.remove()
                var find2 = document.getElementById("backScreen1")
                find2.remove()
                reloaditemStock()
            },5000)

            

            

            
        } 
    }


    
}

function updateDish(){
    var find = document.getElementById("adminDashboard")
    find.innerHTML=""
    var getBody = document.getElementById("container")

    var createBackButton = document.createElement("div")
    createBackButton.setAttribute("class", "backButton")
    createBackButton.setAttribute("id", "backButton")
    createBackButton.innerHTML="<span id='backDot' onclick='goBack()'>←</span>"
    getBody.appendChild(createBackButton)

    find.innerHTML = '<div id = "categorySwitch"><select name="category" id="category"><option value="PRE">PRE</option><option value="MAINS">MAINS</option> ' +
    '<option value="DESSERTS">DESSERTS</option><option value="WINES">WINES</option><option value="WINES">BEERS</option><option value="DRINKS">DRINKS</option>' +
    '<option value="SNACKS">SNACKS</option><option value="ADDONS">ADDONS</option><option value="EXTRA">EXTRA</option></select></div>'

    var category1 = document.getElementById("category").value

    find.style.gridColumn = "2"
    find.style.gridColumnEnd = "10"
    find.style.fontSize = "12px"

    var createDiv2 = document.createElement("div")
    createDiv2.setAttribute("class", "tableDash")
    createDiv2.setAttribute("id", "tableDash")
    find.appendChild(createDiv2)
    
    listDish(category1)
    

    

}

function listDish(upperCase){
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "https://shirwac-pos-system.herokuapp.com/dishes?categoryType="+ upperCase)
    xhr.onload = function(){
        var data = JSON.parse(this.response)
        createTable(data)
    }
    xhr.send()
    
}

function createCell(content){
    var aCell = document.createElement("td")
    aCell.innerHTML = content
    return aCell;
}

function createRow(id,dishName, price){
    var aRow = document.createElement("tr")
    

    aRow.appendChild(createCell(id))
    aRow.appendChild(createCell(dishName))
    aRow.appendChild(createCell(price))
    return aRow
}

function createTable(data){
    var appElement = document.getElementById("tableDash")
    var aTable = document.createElement("table")

    appElement.appendChild(aTable)
    for(var i = 0; i < data.length; i++){
        aTable.appendChild(createRow(data[i].id, data[i].dishName, data[i].price))
    }
    
    

}