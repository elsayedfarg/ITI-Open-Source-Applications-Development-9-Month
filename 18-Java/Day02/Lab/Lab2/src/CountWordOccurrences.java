public class CountWordOccurrences {
    String str;
    String word;
    public CountWordOccurrences(String str,String word)
    {
        this.str=str;
        this.word=word;
    }

    int countWordOccurrencesUsingContains()
    {
        // split the string using one or more spaces
        String[] splittedString=str.split("\\s+");

        // count the occurrences
        int counter=0;
        for(String item : splittedString)
        {
            // i have used equals to compare values not references
            if(item.equalsIgnoreCase(word))
            {
                counter++;
            }
        }
        return counter;
    }

    int countWordOccurrencesUsingIndexOf()
    {
        int index=0;
        int counter=0;
        // get the first index of the needed word then skip it
        // start the search from index which is 0
        while((index=str.indexOf(word,index))!=-1)
        {
            counter++;
            index+=word.length();
        }
        return counter;
    }
}
