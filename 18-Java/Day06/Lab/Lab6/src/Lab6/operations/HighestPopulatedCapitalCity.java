package Lab6.operations;

import Lab6.classes.City;
import Lab6.classes.Country;

import java.util.*;
import java.util.stream.Collectors;

public class HighestPopulatedCapitalCity {
    // optional means may get value or null
    public static Optional<City> getCapital(List<City> cities, List<Country> countries) {

        List<City> capitalCities = countries.stream()
                .map(country->
                cities.stream()
                        .filter(city -> city.id == Integer.parseInt(country.capital))
                        .findFirst()
                        .orElse(null)
                )
                .filter(city -> city != null)
                .toList();
        
        return capitalCities.stream()
                .max(Comparator.comparingInt(c -> c.population));
    }
}
