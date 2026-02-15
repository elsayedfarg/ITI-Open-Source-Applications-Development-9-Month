package Lab6.operations;

import Lab6.classes.City;
import Lab6.classes.Country;

import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class MostPopulatedCountry {
    public static Map<String, Country> getCountry(List<Country> countries)
    {
        Map<String, Country> mostPopulatedCountries = new HashMap<>();

        List<String> continents = countries
                .stream()
                .map(country -> country.continent)
                .distinct()
                .collect(Collectors.toList());

        continents.forEach(continent -> {
            countries.stream()
                    .filter(country -> country.continent.equals(continent))
                    .max(Comparator.comparingDouble(c -> c.population))
                    .ifPresent(country -> mostPopulatedCountries.put(continent, country));
        });

        return mostPopulatedCountries;
    }
}
