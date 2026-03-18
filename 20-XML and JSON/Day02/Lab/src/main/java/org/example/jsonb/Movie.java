package org.example.jsonb;

public class Movie {
    public String title;
    public int year;
    public double rating;
    public boolean available;

    // Default constructor (required by JSON-B)
    public Movie() {
    }

    public Movie(String title, int year, double rating, boolean available) {
        this.title = title;
        this.year = year;
        this.rating = rating;
        this.available = available;
    }

    @Override
    public String toString() {
        return "Movie{" +
                "title='" + title + '\'' +
                ", year=" + year +
                ", rating=" + rating +
                ", available=" + available +
                '}';
    }
}