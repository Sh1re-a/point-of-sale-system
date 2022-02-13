package se.shirwac.pos.system.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import se.shirwac.pos.system.models.Dish;

public interface DishRepo extends JpaRepository<Dish, Long> {
}
