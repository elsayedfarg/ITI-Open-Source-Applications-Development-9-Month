import java.util.StringTokenizer;

public class IPCutter {
    String cmdLine;
    // constructor
    public IPCutter(String cmdLine)
    {
        this.cmdLine=cmdLine;
    }

    int [] doIPSplit()
    {
        // splitting the string
        String [] strResult=cmdLine.split("\\.");

        // converting the splitted values to int
        int strResultLength=strResult.length;
        int [] intResult=new int[strResultLength];
        for(int i=0;i<strResultLength;i++)
        {
            intResult[i]=Integer.parseInt(strResult[i]);
        }

        // returning the value
        return  intResult;
    }

    int [] doIPSplitUsingStringTokenizer()
    {
        // splitting the string (tokenizer works with delimiter not regex)
        StringTokenizer strResult=new StringTokenizer(cmdLine,".");

        // converting the splitted tokens to int
        int strResultLength=strResult.countTokens();
        int [] intResult=new int [strResultLength];

        int i=0;
        while (strResult.hasMoreTokens()) {
            intResult[i]=Integer.parseInt(strResult.nextToken());
            i++;
        }
        return intResult;
    }
}
