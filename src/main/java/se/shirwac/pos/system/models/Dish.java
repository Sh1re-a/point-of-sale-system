package se.shirwac.pos.system.models;

import javax.persistence.*;

@Entity
public class Dish {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name="Name")
    private String name;
    @Column(name="Price")
    private double price;
    @Column(name= "Category")
    private DishCategory dishCategory;


    public Dish(long id, String name, double price, DishCategory dishCategory) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.dishCategory = dishCategory;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public DishCategory getDishCategory() {
        return dishCategory;
    }

    public void setDishCategory(DishCategory dishCategory) {
        this.dishCategory = dishCategory;
    }

    @Override
    public String toString() {
        return "Dish{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", price=" + price +
                ", dishCategory=" + dishCategory +
                '}';
    }
}
