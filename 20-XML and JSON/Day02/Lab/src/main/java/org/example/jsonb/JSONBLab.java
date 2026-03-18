package org.example.jsonb;

import jakarta.json.bind.Jsonb;
import jakarta.json.bind.JsonbBuilder;

import java.util.ArrayList;
import java.util.List;

public class JSONBLab {

    public void runJsonBLab() throws Exception {

        Jsonb jsonb = JsonbBuilder.create();

        // --- Single Movie Object ---
        Movie movie = new Movie("Inception", 2010, 8.8, true);

        // Serialize single object
        String result = jsonb.toJson(movie);
        System.out.println("Single Movie JSON string: " + result);

        // Deserialize back
        movie = jsonb.fromJson(result, Movie.class);
        System.out.println("Deserialized Movie object: " + movie);

        // --- Array of Movies ---
        Movie[] movies = new Movie[2];
        movies[0] = movie;
        movies[1] = new Movie("Interstellar", 2014, 8.6, true);

        result = jsonb.toJson(movies);
        System.out.println("Movies Array JSON string: " + result);

        Movie[] results = jsonb.fromJson(result, Movie[].class);
        System.out.println("Second Movie in array: " + results[1].title);

        // --- List of Movies ---
        List<Movie> movieList = new ArrayList<>();
        movieList.add(movie);
        movieList.add(new Movie("The Matrix", 1999, 8.7, true));

        // Serialize List to JSON
        result = jsonb.toJson(movieList);
        System.out.println("Movies List JSON string: " + result);

        // Deserialize List using temporary array
        Movie[] tempArray = jsonb.fromJson(result, Movie[].class);

        List<Movie> resultList = new ArrayList<>();
        for (Movie m : tempArray) resultList.add(m);

        // Print each Movie in the list
        for (Movie m : resultList) {
            System.out.println("Movie in List: " + m);
        }
    }
}