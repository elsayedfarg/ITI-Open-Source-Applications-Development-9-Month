package lab4.customexception;

public class A {
    public void myMethod1() throws MyNewException
    {
        System.out.println("this is method 1");
        throw new MyNewException("Error from Method 1");
    }

    public void myMethod2() throws MyNewException
    {
        System.out.println("this is method 2");
        throw new MyNewException("Error from Method 2");
    }

    public void myMethod3() throws MyNewException
    {
        System.out.println("this is method 3");
        throw new MyNewException("Error from Method 3");
    }
}
