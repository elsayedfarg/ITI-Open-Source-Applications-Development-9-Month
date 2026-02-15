import lab5.JPanel.MyPanel;
import lab5.threads.MyRunnableThread;
import lab5.threads.MyThread;

import javax.swing.*;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        // creating a frame
        JFrame frame = new JFrame();
        frame.setTitle("lab 5");

        MyPanel mp=new MyPanel();
        frame.setContentPane(mp);

        frame.setSize(500, 300);
        frame.setVisible(true);

        // using the thread (Extending the class thread)
//        new MyThread("thread 1").start();
//        new MyThread("thread 2").start();

//        // implement (Runnable Interface)
//        MyRunnableThread runnableThread=new MyRunnableThread();
//        Thread th=new Thread(runnableThread);
//        th.start();
    }
}