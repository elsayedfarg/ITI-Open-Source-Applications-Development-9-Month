package org.example.streamapi;

import jakarta.json.Json;
import jakarta.json.stream.JsonGenerator;

import java.io.File;
import java.io.FileWriter;

public class JSONGenerator {

    public void produceJsonInStreamingFashion() throws Exception {
        // Overwrite the existing movie.json in resources
        File file = new File("src/main/resources/movie.json");

        try (FileWriter writer = new FileWriter(file);
             JsonGenerator generator = Json.createGenerator(writer)) {

            generator.writeStartObject()
                    .write("title", "Interstellar")
                    .write("year", 2014)
                    .writeStartArray("genre")
                    .write("Sci-Fi")
                    .write("Adventure")
                    .writeEnd()
                    .write("rating", 8.6)
                    .write("available", true)
                    .writeStartArray("cast")
                    .writeStartObject()
                    .write("name", "Matthew McConaughey")
                    .write("role", "Cooper")
                    .writeEnd()
                    .writeStartObject()
                    .write("name", "Anne Hathaway")
                    .write("role", "Brand")
                    .writeEnd()
                    .writeEnd()
                    .writeEnd();

            generator.flush();
        }

        System.out.println("movie.json updated successfully!");
    }
}