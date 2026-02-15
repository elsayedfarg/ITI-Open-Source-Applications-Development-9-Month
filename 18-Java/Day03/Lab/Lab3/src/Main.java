import lab3.rootsofquadraticequation.DefineRootsOfQuadraticEquation;
import lab3.temperatureconverter.TemperatureConvert;

public class Main {
    public static void main(String[] args) {
//        // Task 1
//        float x=24;
//        TemperatureConvert converter = new TemperatureConvert();
//        System.out.println("Temp is = "+x+"C or "+converter.apply(x)+" F");

        // Task 2
        DefineRootsOfQuadraticEquation rootsCalculator=new DefineRootsOfQuadraticEquation();

        double[] coefficients = {2, 5, -3};

        double[] roots = rootsCalculator.apply(coefficients);

        if (roots != null) {
            System.out.println("Root 1: " + roots[0]);
            System.out.println("Root 2: " + roots[1]);
        } else {
            System.out.println("The equation has complex roots.");
        }
    }
}