package org.example.objectmodelapi;

import jakarta.json.Json;
import jakarta.json.JsonArray;
import jakarta.json.JsonObject;
import jakarta.json.JsonReader;

import java.io.File;
import java.io.FileReader;

public class MovieReader {

    public void readMovieJson(String filePath) throws Exception {
        File file = new File(filePath);
        JsonReader reader = Json.createReader(new FileReader(file));
        JsonObject movie = reader.readObject();
        reader.close();

        String title = movie.getString("title");
        int year = movie.getInt("year");
        double rating = movie.getJsonNumber("rating").doubleValue();
        boolean available = movie.getBoolean("available");

        System.out.println("Title: " + title);
        System.out.println("Year: " + year);
        System.out.println("Rating: " + rating);
        System.out.println("Available: " + available);

        JsonArray genres = movie.getJsonArray("genre");
        System.out.print("Genres: ");
        for (int i = 0; i < genres.size(); i++) {
            System.out.print(genres.getString(i));
            if (i != genres.size() - 1) System.out.print(", ");
        }
        System.out.println();

        JsonArray cast = movie.getJsonArray("cast");
        System.out.println("Cast:");
        for (int i = 0; i < cast.size(); i++) {
            JsonObject actor = cast.getJsonObject(i);
            System.out.println("  Name: " + actor.getString("name") +
                    ", Role: " + actor.getString("role"));
        }
    }
}