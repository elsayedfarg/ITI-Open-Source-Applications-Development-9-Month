package Lab6.operations;

import Lab6.classes.City;

import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class HighestPopulatedCity {
    public static Map<String, City> getCity(List<City> cities) {
        Map<String, City> highestCities = new HashMap<>();

        List<String> countries = cities
                .stream()
                .map(city -> city.country)
                .distinct()
                .collect(Collectors.toList());

        countries.forEach(country -> {
            cities.stream()
                    .filter(city -> city.country.equals(country))
                    .max(Comparator.comparingInt(c -> c.population))
                    .ifPresent(city -> highestCities.put(country, city));
        });

        return highestCities;
    }
}
