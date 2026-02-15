package lab4.customexception;

public class ExceptionTester {
    private final A obj=new A();

    public void scenario1()
    {
        try{
            obj.myMethod1();
        }catch(MyNewException e)
        {
            System.out.println(e.getMessage());
        }finally{
            System.out.println("Finally after method 1");
        }
    }

    public void scenario2()
    {
        try{
            obj.myMethod1();
            obj.myMethod2();
            obj.myMethod3();
        }catch(MyNewException e)
        {
            System.out.println("All errors catched in one block "+e.getMessage());
        }
        finally{
            System.out.println("Finally after all executed once");
        }
    }

    public void scenario3()
    {
        try {
            obj.myMethod1();
        }
        catch (MyNewException e) {
            System.out.println("Method1: " + e.getMessage());
        }

        try {
            obj.myMethod2();
        }
        catch (MyNewException e) {
            System.out.println("Method2: " + e.getMessage());
        }

        try {
            obj.myMethod3();
        }
        catch (MyNewException e) {
            System.out.println("Method3: " + e.getMessage());
        }

        System.out.println("All methods executed with separate catches.");
    }
}
