/*package se.shirwac.pos.system.models;

import javax.persistence.*;


@Entity
@Table(name = "DishCategory")
public class DishCategory {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private long id;
   @Enumerated(EnumType.STRING)
   @Column(name = "CategoryName")
   private CategoryType categoryType;
   @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.MERGE, mappedBy = "dishCategory")
   @JoinColumn(name = "dishName")
   private Dish dish;


   public DishCategory() {
   }

   public DishCategory(CategoryType categoryType, Dish dish) {
      this.categoryType = categoryType;
      this.dish = dish;
   }

   public long getId() {
      return id;
   }

   public void setId(long id) {
      this.id = id;
   }


   public CategoryType getCategoryType() {
      return categoryType;
   }

   public void setCategoryType(CategoryType categoryType) {
      this.categoryType = categoryType;
   }

   public Dish getDish() {
      return dish;
   }

   public void setDish(Dish dish) {
      this.dish = dish;
   }


   @Override
   public String toString() {
      return "DishCategory{" +
              "id=" + id +
              ", categoryType=" + categoryType +
              ", dish=" + dish +
              '}';
   }
}

 */
