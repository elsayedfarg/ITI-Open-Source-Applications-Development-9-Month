public class ArrayAlgorithms {
    public int binarySearch(int [] arr,int value)
    {
        int start=0;
        int end = arr.length - 1;
        while(start<=end)
        {
            int mid=(start+end)/2;
            if(arr[mid]==value)
                return mid;
            if(value>arr[mid])
                start=mid+1;
            else if(value<arr[mid])
                end=mid-1;
        }
        return -1;
    }

    public int max(int []arr)
    {
        long startTime = System.currentTimeMillis();
        System.out.println("Start Time: "+startTime);

        int maxValue=arr[0];
        for(int i=1;i<arr.length;i++)
        {
            if(maxValue<arr[i])
            {
                maxValue=arr[i];
            }
        }
        long endTime = System.currentTimeMillis();
        System.out.println("End Time: "+endTime);

        return maxValue;
    }

    public int min(int []arr)
    {
        long startTime = System.currentTimeMillis();
        System.out.println("Start Time: "+startTime);

        int minValue=arr[0];
        for(int i=1;i<arr.length;i++)
        {
            if(minValue>arr[i])
            {
                minValue=arr[i];
            }
        }
        long endTime = System.currentTimeMillis();
        System.out.println("End Time: "+endTime);

        return minValue;
    }

}
