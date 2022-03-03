package se.shirwac.pos.system.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import se.shirwac.pos.system.enums.CategoryType;
import se.shirwac.pos.system.models.Dish;
import se.shirwac.pos.system.repo.DishRepo;
import se.shirwac.pos.system.service.DishService;

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

    @GetMapping(value = "/category/{categoryType}/")
    public List<Dish> byCategory(@PathVariable CategoryType categoryType){
        return dishRepo.findByCategoryType(categoryType);
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
        return "Dish" + deleteDish.getDishName() + " is deleted";

    }


}
