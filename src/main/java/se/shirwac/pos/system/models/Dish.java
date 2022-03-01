package se.shirwac.pos.system.models;

import javax.persistence.*;

@Entity
@Table(name = "Dish")
public class Dish {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name="DishName")
    private String dishName;
    @Column(name="Price")
    private double price;
    @Enumerated(EnumType.STRING)
    @Column(name = "dishCategory")
    private CategoryType categoryType;
    @Column(name = "orders")
    private int orders;


    public Dish() {
    }

    public Dish(String dishName, double price, CategoryType categoryType, int orders) {
        this.dishName = dishName;
        this.price = price;
        this.categoryType = categoryType;
        this.orders = orders;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getDishName() {
        return dishName;
    }

    public void setDishName(String dishName) {
        this.dishName = dishName;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public CategoryType getCategoryType() {
        return categoryType;
    }

    public void setCategoryType(CategoryType categoryType) {
        this.categoryType = categoryType;
    }

    public int getOrders() {
        return orders;
    }

    public void setOrders(int orders) {
        this.orders = orders;
    }

    @Override
    public String toString() {
        return "Dish{" +
                "id=" + id +
                ", dishName='" + dishName + '\'' +
                ", price=" + price +
                ", categoryType=" + categoryType +
                ", orders=" + orders +
                '}';
    }
}
