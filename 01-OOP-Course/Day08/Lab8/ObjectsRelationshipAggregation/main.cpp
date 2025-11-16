#include <iostream>
using namespace std;

class Point
{
private:
    int x;
    int y;
public:

    Point(int _x=0,int _y=0)
    {
        x=_x;
        y=_y;
        cout<<"\nPoint Created\n";
    }

    void SetX(int _x)
    {
        x=_x;
    }
    void SetY(int _y)
    {
        y=_y;
    }

    void SetPoint(int _x,int _y)
    {
        x=_x;
        y=_y;
    }

    int GetX()
    {
        return x;
    }
    int GetY()
    {
        return y;
    }

    void Print()
    {
        cout<<"("<<x<<","<<y<<")\n";
    }
};

class Rectangle
{
private:
    Point *UpperLeftPoint;
    Point *LowerRightPoint;
public:
    Rectangle(int x1,int y1,int x2,int y2)
    {
        UpperLeftPoint=new Point(x1,y1);
        LowerRightPoint=new Point(x2,y2);
    }

    ~Rectangle()
    {
        delete UpperLeftPoint;
        delete LowerRightPoint;
    }

    void Print()
    {
        UpperLeftPoint->Print();
        LowerRightPoint->Print();
    }
};

class Circle
{
private:
    Point *Center;
    int Radius;
public:
    Circle(int x,int y,int r)
    {
        Center=new Point(x,y);
        Radius=r;
    }

    ~Circle()
    {
        delete Center;
    }

    void Print()
    {
        cout<<"Center: ";
        Center->Print();
        cout<<"Radius: "<<Radius<<"\n";
    }

};

class Triangle
{
private:
    Point *p1,*p2,*p3;
public:
    Triangle(int x1,int y1,int x2,int y2,int x3,int y3)
    {
        p1=new Point(x1,y1);
        p2=new Point(x2,y2);
        p3=new Point(x3,y3);

    }

    ~Triangle()
    {
        delete p1;
        delete p2;
        delete p3;
    }

    void Print()
    {
        cout<<"Triangle Points:\n";
        p1->Print();
        p2->Print();
        p3->Print();
    }
};

int main()
{
    Rectangle r1(4,2,5,3);
    r1.Print();

    Circle c1(3,4,5);
    c1.Print();

    Triangle t1(1,2,3,4,5,6);
    t1.Print();
}
