#include <iostream>
using namespace std;

class Shape
{
protected:
    float dim1;
    float dim2;
public:
    Shape(float _dim1,float _dim2=0)
    {
        dim1=_dim1;
        dim2=_dim2;
    }

    virtual void SetDim1(float _dim1)
    {
        dim1=_dim1;
    }
    virtual void SetDim2(float _dim2)
    {
        dim2=_dim2;
    }

    float GetDim1()
    {
        return dim1;
    }

    float GetDim2()
    {
        return dim2;
    }

    virtual double CalculateArea()=0;

    void Print()
    {
        cout<<"\nDim1: "<<dim1<<" ===== Dim2: "<<dim2<<'\n';
    }
};

class Rectangle:public Shape
{
public:
    Rectangle(float _dim1,float _dim2):Shape(_dim1,_dim2) {}

    double CalculateArea()
    {
        return dim1*dim2;
    }

    void SetDim1(float _dim1)
    {
        dim1=_dim1;
    }

    void SetDim2(float _dim2)
    {
        dim2=_dim2;
    }
};

class Triangle:public Shape
{
public:
    Triangle(float _dim1,float _dim2):Shape(_dim1,_dim2) {}

    double CalculateArea()
    {
        return 0.5*dim1*dim2;
    }
};

class Circle:public Shape
{
public:
    Circle(float _r):Shape(_r) {}

    double CalculateArea()
    {
        return 3.14*dim1*dim1;
    }
};

class Square:public Rectangle
{
public:
    Square(float _x):Rectangle(_x,_x) {}

    double CalculateArea()
    {
        return dim1*dim1;
    }

    void SetDim1(float _dim1)
    {
        dim1=_dim1;
        dim2=_dim1;
    }

    void SetDim2(float _dim2)
    {
        dim1=_dim2;
        dim2=_dim2;
    }
};

void MyFun(Shape *s)
{
    cout<<"\n Area = "<<s->CalculateArea();
}

int main()
{
    Shape *r=new Rectangle(3,4);
    Shape *t=new Triangle(2,2);
    Shape *c=new Circle(5);
    Shape *s=new Square(4);

    cout<<"\nRectangle Area = "<<r->CalculateArea()<<'\n';
    cout<<"\nTriangle Area = "<<t->CalculateArea()<<'\n';
    cout<<"\nCircle Area = "<<c->CalculateArea()<<'\n';
    cout<<"\nSquare Area = "<<s->CalculateArea()<<'\n';

    cout<<"\n==================== Print array ==================\n";
    Shape *ShapesArray[4];

    ShapesArray[0] =r;
    ShapesArray[1] =t;
    ShapesArray[2] =c;
    ShapesArray[3] =s;

    for(int i=0;i<4;i++)
    {
        MyFun(ShapesArray[i]);
    }
    delete[] ShapesArray;

}
