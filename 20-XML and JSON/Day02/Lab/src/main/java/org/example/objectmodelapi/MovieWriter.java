package org.example.objectmodelapi;

import jakarta.json.Json;
import jakarta.json.JsonArrayBuilder;
import jakarta.json.JsonObject;
import jakarta.json.JsonWriter;

import java.io.File;
import java.io.FileWriter;

public class MovieWriter {

    public void writeMovieJson() throws Exception {
        // Write to the same movie.json in resources
        File file = new File("src/main/resources/movie.json");

        try (FileWriter fw = new FileWriter(file);
             JsonWriter writer = Json.createWriter(fw)) {

            // Build the cast array
            JsonArrayBuilder castArray = Json.createArrayBuilder()
                    .add(Json.createObjectBuilder()
                            .add("name", "Matthew McConaughey")
                            .add("role", "Cooper"))
                    .add(Json.createObjectBuilder()
                            .add("name", "Anne Hathaway")
                            .add("role", "Brand"));

            // Build the JSON object
            JsonObject movieJson = Json.createObjectBuilder()
                    .add("title", "Interstellar")
                    .add("year", 2014)
                    .add("genre", Json.createArrayBuilder()
                            .add("Sci-Fi")
                            .add("Adventure"))
                    .add("rating", 8.6)
                    .add("available", true)
                    .add("cast", castArray)
                    .build();

            // Write JSON object to file
            writer.write(movieJson);
        }

        System.out.println("movie.json written successfully!");
    }
}