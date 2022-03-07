<!-- GETTING STARTED -->
## Getting Started

Ifall min Heroku app inte fungerar som det ska, kan det bero på att jag använder mig free tier database. Den har mycket limit som 10 max_connection och det ser ut som mitt projekt slår nästan direkt i det taket samma med max_question. Så ifall nu inte fungerar har jag skapat ett liknande repo fast med localhost. Ifall det fungerar kan du skippa den dela och scrolla vidare.


### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Sh1re-a/local.pos-system
   ```
2. Sedan måste du röra dig mot application.properties som ligger under resource mappen och ändra dessa värden. Du måste även skapa en database som heter STI innan du kör igång
```java
    spring.datasource.url=jdbc: mysql://localhost:3306/STI?
	spring.datasource.username=root
	spring.datasource.password=
	spring.jpa.hibernate.ddl-auto=create-drop
	spring.mvc.pathmatch.matching-strategy = ANT_PATH_MATCHER
	spring.output.ansi.enabled=ALWAYS
	server.port=8081
   ```
   3. För att få du ska få in lite data du kan leka med och prova dig runt. Måste du ändra en url string den ligger under mappen Service i SpringBoot. Använd samma som du hade i application.properties.
    
```java
  private final String url ="mysql://localhost:3306/STI?";
	```


   4. Nu borde du kunna köra igång programmet! Sen är det bara gå till localhost.
    


### Features so far

- Lägga till rätter som skickas till databasen.
- Hämta rätter från databasen med ett query vilken kategori som gäller.
- Filter funktion för att sortera efter hur många beställningar, bokstavningsordning och pris.
- För varje beställning skickas ett kvitto till databasen med tid och totala pris.
- Hämta antal varor varje kategori har och uppdaterat varje gång en rätt har antingen lagts in.
- När en vara läggs in i varukorgen så sparas det i localstorage som sedan försvinner efter att sidan har laddats om.

### Features coming
- Kunna uppdatera rätterna via hemsidan
- Kunna radera rätterna via hemsidan
- Kunna hantera flera beställningar samtidigt
- Inloggning system




# About The Project
![alt text](https://github.com/Sh1re-a/pos.system/blob/master/image/bild1.png?raw=true)

Jag har byggt ett Point of Sale system, där användaren kan välja mellan 9 olika kategorier. Användaren ska kunna lägga till, modifiera, och ta bort olika rätter. Sedan ska användaren också kunna lägga beställningar. Jag har även lagt ner mycket tid på att bygga ett användarvänligt UI. 

Några svårigheter jag har just nu:
* Jag har deploy appen på Heroku men jag har haft problem med databaserna på heroku, med de som har vart gratis då de har haft ett max antal connection och max_questions. Så har mitt projekt svårt att köra på heroku. Det kan vara beror på att jag har rätt många questions och connections mot databasen. Men jag håller på att läsa på om Cached queries.
* Jag känner att min hemsida brister lite i smooth animation, har inte riktigt haft mycket tid  och ge mig in på det, men fixar det så småningom.

### Build with



* [Spring-Boot](https://spring.io)
* [Vanilla JS](https://www.javascript.com)
* [HTML](https:///)
* [CSS](https:///)
* [JPA](https://jakarta.ee/specifications/persistence/3.0/)
* [SWAGGER](https://swagger.io)
* [MySQL](https://mysql.com)
* [JAVA](https://java.com)









# Function

#### Hämta rätter
![alt text](https://github.com/Sh1re-a/pos.system/blob/master/image/gif1.mov?raw=true)




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

#### Java

```Java
@GetMapping(value = "/category/{categoryType}/")
    public List<Dish> byCategory(@PathVariable CategoryType categoryType){
        return dishRepo.findByCategoryType(categoryType);
    }
```

#### Filter/Order dishes
![alt text](https://github.com/Sh1re-a/pos.system/blob/master/image/gif2.mov?raw=true)
###### Ändrar ordningen på rätterna utifrån Popular(hur många beställningar varje rätt har), sen utifrån bokstavsordning och pris. Jag gör ett anropp till databasen som ger tillbaks i den ordning användern klickar på. Sparar också antalet varor i localStorage som jag tömmer efter webbläsaren laddar om.

#### Java

```Java
@Query("SELECT a FROM Dish a WHERE a.categoryType = ?1 ORDER BY ‰ DESC")
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

#### Lägg till rätt i databasen
![alt text](https://github.com/Sh1re-a/pos.system/blob/master/image/ezgif.com-video-to-gif-6.mov?raw=true)
###### Med hjälp av PUT request som jag skickar via JS till API jag skapade i spring boot, kan jag skicka in rätter in till databasen. Sedan när jag klickar på den kategorin dyker upp rätten upp.

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


#### Lägg till kvittot i databasen
![alt text](https://github.com/Sh1re-a/pos.system/blob/master/image/gif4.mov?raw=true)
###### Med hjälp av PUT request som jag skickar via JS till API jag skapade i spring boot, kan jag skicka in kvittot in till databasen.

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


