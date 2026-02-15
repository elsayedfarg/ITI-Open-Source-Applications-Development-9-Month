package lab5.threads;

public class MyThread extends Thread{
    String threadName;
    public MyThread(String name)
    {
        this.threadName=name;
    }

    public void run()
    {
        for(int i=0;i<10;i++)
        {
            System.out.println(i+" "+threadName);
            try{
                sleep((int)(Math.random()*1000));// random delay
            }catch(InterruptedException e)
            {
                e.printStackTrace();
            }
        }
        System.out.println("Done "+threadName);
    }
}
