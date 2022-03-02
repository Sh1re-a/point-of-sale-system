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

}
