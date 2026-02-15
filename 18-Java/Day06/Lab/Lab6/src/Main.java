import Lab6.classes.City;
import Lab6.classes.Country;
import Lab6.operations.HighestPopulatedCapitalCity;
import Lab6.operations.HighestPopulatedCity;
import Lab6.operations.MostPopulatedCountry;
import Lab6.readcsv.ReadCSV;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

public class Main {
    public static void main(String[] args) {
        List<String[]> countryRows= ReadCSV.readCSV("../Countries.csv");
        List<Country> countries=new ArrayList<>();

        for(String[] row: countryRows)
        {
            countries.add(
                    new Country(
                            row[0],
                            row[1],
                            row[2],
                            Double.parseDouble(row[3]),
                            Double.parseDouble(row[4]),
                            Double.parseDouble(row[5]),
                            row[6]
                    )
            );
        }

        List<String[]> cityRows= ReadCSV.readCSV("../Cities.csv");
        List<City> cities=new ArrayList<>();

        for(String[] row: cityRows)
        {
            cities.add(
                    new City(
                            Integer.parseInt(row[0]),
                            row[1],
                            Integer.parseInt(row[2]),
                            row[3]
                    )
            );
        }

        // LAB OPERATIONS //
        Map<String, City> highestCities = HighestPopulatedCity.getCity(cities);
        highestCities.forEach((country, city) ->
                System.out.println("Country: " + country + " -> Highest City: " + city));

//        Map<String, Country> highestCountries = MostPopulatedCountry.getCountry(countries);
//        highestCountries.forEach((continent, country) ->
//                System.out.println("Continent: " + continent + " -> Most Populated Country: " + country));

//        Optional<City> highestCapital = HighestPopulatedCapitalCity.getCapital(cities, countries);
//        highestCapital.ifPresent(city ->
//                System.out.println("Highest Populated Capital City: " + city)
//        );


    }
}