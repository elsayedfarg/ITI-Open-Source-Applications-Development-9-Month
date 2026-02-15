package lab4.shapes;

import java.util.List;

public class ShapeTest {
    public static <T extends Shape> void drawAllShapes(List<T> shapesList)
    {
        System.out.println("Drawing Shapes");

        for (Shape s : shapesList) {
            s.draw();
        }

        System.out.println("-///////////////////-");
    }
}
