package se.shirwac.pos.system.models;

import javax.persistence.*;
import java.util.List;


@Entity
public class DishCategory {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private long categoryID;
   @Column(name = "CategoryName")
   private String categoryName;
   @Column(name = "Dishes")
   private List<Dish> allDishes;

   public DishCategory(long categoryID, String categoryName, List<Dish> allDishes) {
      this.categoryID = categoryID;
      this.categoryName = categoryName;
      this.allDishes = allDishes;
   }

   public long getCategoryID() {
      return categoryID;
   }

   public void setCategoryID(long categoryID) {
      this.categoryID = categoryID;
   }

   public String getCategoryName() {
      return categoryName;
   }

   public void setCategoryName(String categoryName) {
      this.categoryName = categoryName;
   }

   public List<Dish> getAllDishes() {
      return allDishes;
   }

   public void setAllDishes(List<Dish> allDishes) {
      this.allDishes = allDishes;
   }

   @Override
   public String toString() {
      return "DishCategory{" +
              "categoryID=" + categoryID +
              ", categoryName='" + categoryName + '\'' +
              ", allDishes=" + allDishes +
              '}';
   }
}
