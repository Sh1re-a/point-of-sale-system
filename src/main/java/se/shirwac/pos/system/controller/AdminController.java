package se.shirwac.pos.system.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import se.shirwac.pos.system.models.Dish;
import se.shirwac.pos.system.repo.DishRepo;

import java.util.List;

@RestController
public class AdminController {

    @Autowired
    private DishRepo dishRepo;

    @GetMapping(value = "/")
    public String welcomePage(){
        return "Welcome to my page";
    }

    @GetMapping(value = "/allDishes")
    public List<Dish> getAllDishes(){
        return dishRepo.findAll();
    }

    @PostMapping(value = "/save/dish")
    public String saveDish(@RequestBody Dish dish){
        dishRepo.save(dish);
        return "Dish is saved";

    }

    @DeleteMapping(value = "/delete/dish")
    public String deleteDish(@PathVariable long id,@RequestBody Dish dish){
        Dish deleteDish = dishRepo.findById(id).get();
        dishRepo.delete(deleteDish);
        return "Dish" + deleteDish.getName() + " is deleted";

    }


}
