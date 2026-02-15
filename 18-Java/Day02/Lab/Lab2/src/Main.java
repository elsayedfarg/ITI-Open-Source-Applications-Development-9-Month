//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
//        // 1-ip split
//        String commandLine="192.168.1.23";
//        IPCutter cut=new IPCutter((commandLine));
//        System.out.println("The output of "+commandLine+" is");
//        int []out=cut.doIPSplitUsingStringTokenizer();
//        for(int i=0;i<out.length;i++)
//        {
//            System.out.println(out[i]);
//        }

        // 2-count occurrences o word in string
//        String str="java course java abc java again";
//        String word="java";
//        CountWordOccurrences counter=new CountWordOccurrences(str,word);
//
////        System.out.println("The number of occurrences of the word: "+word+" is");
////        int count=counter.countWordOccurrencesUsingContains();
////        System.out.println(count);
//
//        System.out.println("The number of occurrences of the word: "+word+" is");
//        int count=counter.countWordOccurrencesUsingIndexOf();
//        System.out.println(count);

//        // 3-find max and min values
        int []arr={1,10,2,14,5,24,5,2,3,16,1,100,29,49,59,29,38};
        ArrayAlgorithms m=new ArrayAlgorithms();
        System.out.println("Max value in the array is: "+m.max(arr));
        System.out.println("Min value in the array is: "+m.min(arr));
    }
}