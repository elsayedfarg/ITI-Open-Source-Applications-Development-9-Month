package Lab6.classes;

public class City {
    public int id;
    public String name;
    public int population;
    public String country;

    public City(int id, String name, int population, String country) {
        this.id = id;
        this.name = name;
        this.population = population;
        this.country = country;
    }

    @Override
    public String toString() {
        return name + " [" + id + "], Population: " + population + ", Country: " + country;
    }
}
