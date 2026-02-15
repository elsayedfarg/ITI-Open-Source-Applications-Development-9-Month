//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        // 1
//        System.out.println("Test");

        // 2 Run -> edit conf
//        if(args.length>0)
//            System.out.println("true value "+args[0]);
//        else
//            System.out.println(("false value"));

        // 3
        if(args.length==2)
        {
            int n=Integer.parseInt(args[0]);
            String value=args[1];

            for(int i=0;i<n;i++)
            {
                System.out.println(value);
            }
        }
        else
            System.out.println("Number of arguments must be 2");
    }
}