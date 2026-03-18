package org.example.streamapi;

//Json → Factory to create JsonParser.
//JsonParser → Reads JSON token by token.
//JsonParser.Event → Represents the type of JSON element encountered (START_OBJECT, KEY_NAME, VALUE_STRING, etc.).
//File and FileReader → Read JSON file from disk.

import jakarta.json.Json;
import jakarta.json.stream.JsonParser;
import jakarta.json.stream.JsonParser.Event;
import java.io.File;
import java.io.FileReader;

public class JSONParser {

    public void consumeJsonInStreamingFashion(String filePath) throws Exception {
        // Load movie.json from resources
        File file = new File(filePath);
        JsonParser parser = Json.createParser(new FileReader(file));

        while (parser.hasNext()) {
            Event event = parser.next();
            switch (event) {
                case START_OBJECT:
                    System.out.println("START_OBJECT => {");
                    break;
                case END_OBJECT:
                    System.out.println("END_OBJECT => }");
                    break;
                case START_ARRAY:
                    System.out.println("START_ARRAY => [");
                    break;
                case END_ARRAY:
                    System.out.println("END_ARRAY => ]");
                    break;
                case KEY_NAME:
                    System.out.println("KEY_NAME => " + parser.getString());
                    break;
                case VALUE_STRING:
                    System.out.println("VALUE_STRING => " + parser.getString());
                    break;
                case VALUE_NUMBER:
                    System.out.println("VALUE_NUMBER => " + parser.getBigDecimal());
                    break;
                case VALUE_TRUE:
                    System.out.println("VALUE_TRUE => true");
                    break;
                case VALUE_FALSE:
                    System.out.println("VALUE_FALSE => false");
                    break;
                case VALUE_NULL:
                    System.out.println("VALUE_NULL => null");
                    break;
            }
        }

        parser.close();
    }
}