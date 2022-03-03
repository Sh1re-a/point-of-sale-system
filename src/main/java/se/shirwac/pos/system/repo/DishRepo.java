package se.shirwac.pos.system.repo;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import se.shirwac.pos.system.enums.CategoryType;
import se.shirwac.pos.system.models.Dish;

import java.util.List;


@Repository
public interface DishRepo extends JpaRepository<Dish, Long> {



    @Query("SELECT a FROM Dish a WHERE a.categoryType = ?1")
    List<Dish> findByCategoryType(CategoryType categoryType);


    @Query("SELECT COUNT(dishName) FROM Dish a where a.categoryType= ?1")
    int findHowManyItemsInStockByCategory(CategoryType categoryType);

    //SELECT a FROM Dish a WHERE a.categoryType =?1 ORDER BY price DESC/ASC Order by price   DESC för högsta pris/ASC för lägsta pris

}
