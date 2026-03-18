package org.example;

import org.example.streamapi.JSONGenerator;
import org.example.streamapi.JSONParser;
import org.example.objectmodelapi.MovieReader;
import org.example.objectmodelapi.MovieWriter;
import org.example.jsonb.JSONBLab;

public class Main {
    public static void main(String[] args) {
        try {
            //========================================= STREAM =======================================//
            String movieFile = "src/main/resources/movie.json";
            // Step 1: Overwrite movie.json with new data
            JSONGenerator generatorLab = new JSONGenerator();
            generatorLab.produceJsonInStreamingFashion();

            // Step 2: Parse the same file
            JSONParser parserLab = new JSONParser();
            parserLab.consumeJsonInStreamingFashion(movieFile);

            //========================================== OBJECT MODEL =========================================//

//            // Step 1: Write new JSON to movie.json
//            MovieWriter writerLab = new MovieWriter();
//            writerLab.writeMovieJson();
//
//            // Step 2: Read the same file using Object Model API
//            MovieReader readerLab = new MovieReader();
//            readerLab.readMovieJson(movieFile);

            //========================================== JSON BINDING =========================================//

//            JSONBLab jsonbLab = new JSONBLab();
//            jsonbLab.runJsonBLab();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}