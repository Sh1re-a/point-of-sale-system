package se.shirwac.pos.system.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import se.shirwac.pos.system.enums.CategoryType;
import se.shirwac.pos.system.models.Dish;
import se.shirwac.pos.system.models.Receipt;
import se.shirwac.pos.system.repo.DishRepo;
import se.shirwac.pos.system.repo.ReceiptRepo;

import java.util.ArrayList;
import java.util.List;


@RestController
public class WebController {

    @Autowired
    private DishRepo dishRepo;

    @Autowired
    private ReceiptRepo receiptRepo;

    @GetMapping(value = "/list")
    public ArrayList<Integer> getCategoryCountItems(){
        ArrayList<Integer> myList = new ArrayList<Integer>();
        for (CategoryType type : CategoryType.values()){
            myList.add(dishRepo.findHowManyItemsInStockByCategory(type));
        }
        return myList;

    }

    @GetMapping(value="/dishes")
    public List<Dish> getDish(CategoryType categoryType){
       List<Dish> dishList = dishRepo.findByCategoryType(categoryType);
       return dishList;
    }

    @GetMapping(value="/dishes/highPrice")
    public List<Dish> getDishByHighPrice(CategoryType categoryType){
        List<Dish> dishList = dishRepo.findByCategoryTypeOrderByHighPrice(categoryType);
        return dishList;
    }

    @GetMapping(value="/dishes/lowPrice")
    public List<Dish> getDishByLowPrice(CategoryType categoryType){
        List<Dish> dishList = dishRepo.findByCategoryTypeOrderByLowPrice(categoryType);
        return dishList;
    }

    @GetMapping(value="/dishes/A-z")
    public List<Dish> getDishByAz(CategoryType categoryType){
        List<Dish> dishList = dishRepo.findByCategoryTypeOrderByAz(categoryType);
        return dishList;
    }

    @PostMapping(value = "/save/receipt")
    public String saveReceipt(@RequestBody Receipt receipt){
        receiptRepo.save(receipt);
        return "Receipt saved";
    }

    @GetMapping(value ="/receipt")
    public List<Receipt> getReceipts(){
        return receiptRepo.findAll();
    }

}
