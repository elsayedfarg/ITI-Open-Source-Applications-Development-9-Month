package lab3.rootsofquadraticequation;

import java.util.function.Function;

public class DefineRootsOfQuadraticEquation implements Function<double[],double[]> {

    @Override
    public double[] apply(double[] coefficients) {
        double a = coefficients[0];
        double b = coefficients[1];
        double c = coefficients[2];

        double discriminant = b * b - 4 * a * c;

        if (discriminant < 0) {
            return null;
        }

        double root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        double root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

        return new double[]{root1, root2};// new array
    }
}
