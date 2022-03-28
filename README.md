
# Point of sale system
![alt text](https://github.com/Sh1re-a/pos.system/blob/master/image/bild1.png?raw=true)

Jag har byggt ett Point of Sale system, där användaren kan välja mellan 9 olika kategorier. Användaren ska kunna lägga till, modifiera, och ta bort olika rätter. Sedan ska användaren också kunna lägga beställningar. 

UI-inspirationen kommer från 
https://dribbble.com/shots/14607661-Cashier-prototype

##### Heroku länk och REST-API
https://shirwac-pos-system.herokuapp.com/

https://shirwac-pos-system.herokuapp.com/swagger-ui.html#/

Några svårigheter jag har just nu:
* Jag har deploy appen på Heroku men jag har haft problem med databaserna i det programmet då det var en gratisversion vilket resulterar i att man bara har ett max antal connections och max_questions. Därav har mitt projekt haft svårigheter att köras på Heroku. Det kan bero på att jag har rätt många questions och connections mot databasen. Men i nuläget håller jag på att läsa lite om Cached queries, så det inte blir rätt många questions.
* Jag känner att min hemsida brister lite i smooth animation, har inte riktigt haft mycket tid  och ge mig in på det, men fixar det inom en snar tid.

### Build with



* [Spring-Boot](https://spring.io)
* [Vanilla JS](https://www.javascript.com)
* [HTML](https:///)
* [CSS](https:///)
* [JPA](https://jakarta.ee/specifications/persistence/3.0/)
* [SWAGGER](https://swagger.io)
* [MySQL](https://mysql.com)
* [Java](https://java.com)


### Features so far

- Lägga till rätter som skickas till databasen.
- Hämta rätter från databasen med ett query vilken kategori som gäller.
- Filter funktion för att sortera efter hur många beställningar, bokstavningsordning och pris.
- För varje beställning skickas ett kvitto till databasen med tid och totala pris.
- Hämta varor från varje kategori samt uppdateras varje gång en rätt har lagts in..
- När en vara läggs in i varukorgen så sparas det i "localstorage" som sedan försvinner efter att sidan har laddats om.

### Features coming
- Kunna uppdatera rätterna via hemsidan
- Kunna radera rätterna via hemsidan
- Kunna hantera flera beställningar samtidigt
- Inloggning system






# Funktioner

### 01. Hämta rätter
![alt text](https://github.com/Sh1re-a/pos.system/blob/master/image/gif1.mov?raw=true)
###### Vi hämtar rätterna från databasen med hjälp av XMLHttpRequest till API:in jag har skapat och sedan skapas elementen utifrån hur många rätter varje kategori består av. Sen uppdateras även antal items på kategoriens ruta.



##### Javascript　

```javascript
function apiConnection(categories){
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "http://localhost:8081/dishes?categoryType="+ categories)
    xhr.onload = function(){
        var data = JSON.parse(this.response)
                createDishes(data)
           }
	xhr.send()
	}
```

##### Java

```Java
@GetMapping(value = "/category/{categoryType}/")
    public List<Dish> byCategory(@PathVariable CategoryType categoryType){
        return dishRepo.findByCategoryType(categoryType);
    }
```

### 02. Filter/Order dishes
![alt text](https://github.com/Sh1re-a/pos.system/blob/master/image/gif2.mov?raw=true)
###### Ändrar ordningen på rätterna utifrån Popular(hur många beställningar varje rätt har), sen utifrån bokstavsordning och pris. Jag gör ett anropp till databasen som ger tillbaks i den ordning som användern klickar på. Sparar också antalet varor i localStorage som jag tömmer efter webbläsaren har laddats om.

#### Java

```Java
@Query("SELECT a FROM Dish a WHERE a.categoryType = ?1 ORDER BY orders DESC")
    List<Dish> findByCategoryType(CategoryType categoryType);

    @Query("SELECT COUNT(dishName) FROM Dish a where a.categoryType= ?1")
    int findHowManyItemsInStockByCategory(CategoryType categoryType);

    @Query("SELECT a FROM Dish a WHERE a.categoryType =?1 ORDER BY price DESC")
    List<Dish> findByCategoryTypeOrderByHighPrice(CategoryType categoryType);

    @Query("SELECT a FROM Dish a WHERE a.categoryType =?1 ORDER BY price ASC")
    List<Dish> findByCategoryTypeOrderByLowPrice(CategoryType categoryType);

    @Query("SELECT a FROM Dish a WHERE a.categoryType =?1 ORDER BY dishName ASC")
    List<Dish> findByCategoryTypeOrderByAz(CategoryType categoryType);
```

### 03. Lägg till rätt i databasen
![alt text](https://github.com/Sh1re-a/pos.system/blob/master/image/ezgif.com-video-to-gif-6.mov?raw=true)
###### Med hjälp av PUT request som jag skickar via JS till API:in som jag skapade i spring boot, kan jag skicka in rätter in till databasen. Sedan när jag klickar på den kategorin jag la den in, dyker upp rätten upp.

#### Java

```Java
@PostMapping(value = "/save/dish")
    public String saveDish(@RequestBody Dish dish){
        dishRepo.save(dish);
        return "Dish is saved";
    }
```
###### Vi kan se nedan att rätten är sparad i vår databas.
![alt-text](https://github.com/Sh1re-a/pos.system/blob/master/image/Skärmavbild%202022-03-07%20kl.%2015.11.35.png?raw=true)


#### 04. Lägg till kvittot i databasen
![alt text](https://github.com/Sh1re-a/pos.system/blob/master/image/gif4.mov?raw=true)
###### Med hjälp av PUT request som jag skickar via JS till API:in som jag skapade i spring boot, kan jag spara kvittot in databasen.

#### Java

```Java
@PostMapping(value = "/save/receipt")
    public String saveReceipt(@RequestBody Receipt receipt){
        receiptRepo.save(receipt);
        return "Receipt saved...";
    }
```
###### Vi kan se nedan att rätten är sparad i vår databas. Jag har försökt lösa så varorna även kommer med i kvittot, men jag har förstått att MySql inte kan läsa av Java list, så jag får framöver fixa två tabeller med relationer sedan sätta ihop.
![alt-text](https://github.com/Sh1re-a/pos.system/blob/master/image/Skärmavbild%202022-03-07%20kl.%2015.21.57.png?raw=true)


