package se.shirwac.pos.system.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import se.shirwac.pos.system.models.Dish;


@Repository
public interface DishRepo extends JpaRepository<Dish, Long> {
}
