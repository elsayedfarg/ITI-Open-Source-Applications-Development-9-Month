package lab5.JPanel;

import javax.swing.*;
import java.awt.*;
import java.util.Date;
import java.util.logging.Logger;

public class MyPanel extends JPanel implements Runnable {
    // Task 2
//    private int x = 0;
//    private String message = "Welcome to the new marquee";

    // Task 3
    private int x = 100;
    private int y = 100;

    // Ball movement speed (direction)
    private int dx = 4;
    private int dy = 4;

    private final int ballSize = 30;

    public MyPanel()
    {
        this.setBackground(Color.black);
        // task 2
//        x=getWidth();

        // creating new thread using Runnable
        new Thread(this).start();
    }

    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        g.setColor(Color.white);
        // task 1
//        g.drawString(new Date().toString(), 200, 200);

        // task 2
//        g.setFont(new Font("Serif", Font.BOLD, 24));
//        g.drawString(message, x, 150);

        // task 3
        g.fillOval(x, y, ballSize, ballSize);
    }

    @Override
    public void run() {
        // task 2
//        Font font = new Font("Serif", Font.BOLD, 24);
        while(true)
        {
            // task 2
//            int textWidth = getFontMetrics(font).stringWidth(message);
//            x -= 20;
//
//            if (x + textWidth < 0) {
//                x = this.getWidth();
//            }
//            repaint();

            // task 3
            x += dx;
            y += dy;

            //left wall
            if (x <= 0) {
                dx = -dx;// reverse direction
            }

            //right wall
            if (x + ballSize >= getWidth()) {
                dx = -dx;
            }

            //top wall
            if (y <= 0) {
                dy = -dy;
            }

            //bottom wall
            if (y + ballSize >= getHeight()) {
                dy = -dy;
            }

            // Redraw panel
//            repaint();
            try{
                // task 1
//                this.repaint();
//                Thread.sleep(1000);

                // task 2
                Thread.sleep(100);

                // task 3
//                Thread.sleep(30);
            }catch (InterruptedException ex)
            {
                Logger.getLogger(MyPanel.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
            }
        }
    }
}
