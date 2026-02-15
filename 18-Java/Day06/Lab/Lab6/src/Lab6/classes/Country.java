package Lab6.classes;

public class Country {
    public String name;
    public String code;
    public String continent;
    public double surfaceArea;
    public double population;
    public double gnp;
    public String capital;

    public Country(String code, String name, String continent, double surfaceArea,
                   double population, double gnp, String capital) {
        this.code = code;
        this.name = name;
        this.continent = continent;
        this.surfaceArea = surfaceArea;
        this.population = population;
        this.gnp = gnp;
        this.capital = capital;
    }

    @Override
    public String toString() {
        return "Country {" +
                "Code='" + code + '\'' +
                ", Name='" + name + '\'' +
                ", Continent='" + continent + '\'' +
                ", Surface Area=" + surfaceArea +
                ", Population=" + population +
                ", GNP=" + gnp +
                ", Capital='" + capital + '\'' +
                '}';
    }
}
