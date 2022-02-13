package se.shirwac.pos.system.models;

public class DishCategory {
   private long categoryID;
   private String categoryName;

   public DishCategory(long categoryID, String categoryName) {
      this.categoryID = categoryID;
      this.categoryName = categoryName;
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

   @Override
   public String toString() {
      return "DishCategory{" +
              "categoryID=" + categoryID +
              ", categoryName='" + categoryName + '\'' +
              '}';
   }
}
