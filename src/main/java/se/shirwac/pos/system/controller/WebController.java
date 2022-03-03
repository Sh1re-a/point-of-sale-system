package se.shirwac.pos.system.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import se.shirwac.pos.system.enums.CategoryType;
import se.shirwac.pos.system.repo.DishRepo;

import java.util.ArrayList;


@RestController
public class WebController {

    @Autowired
    private DishRepo dishRepo;

    @GetMapping(value = "/list")

    public ArrayList<Integer> getCategoryCountItems(){
        ArrayList<Integer> myList = new ArrayList<Integer>();
        for (CategoryType type : CategoryType.values()){
            myList.add(dishRepo.findHowManyItemsInStockByCategory(type));
        }
        return myList;


    }

}
