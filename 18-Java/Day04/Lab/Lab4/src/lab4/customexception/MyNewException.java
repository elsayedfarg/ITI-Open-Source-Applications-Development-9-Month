package lab4.customexception;

public class MyNewException extends Exception{
    public MyNewException()
    {
        super("MyNewException occurred!");
    }

    public MyNewException(String msg)
    {
        super(msg);
    }
}
