#include <iostream>

using namespace std;

class Parent
{
protected:
    float x;
    float y;
public:
    Parent(float _x,float _y)
    {
        x=_x;
        y=_y;
    }

    virtual int Add()
    {
        return x+y;
    }
};

class Child:public Parent
{
private:
    float z;

public:
    Child(float _x,float _y,float _z):Parent(_x,_y)
    {
        z=_z;
    }

    int Add()
    {
        return x+y+z;
    }
};

int ValidateInput()
{
    int Input=0;
    while (true)
    {
        if (!(cin >> Input))
        {
            cout << "Please enter a number: ";
            cin.clear();
            cin.ignore(50, '\n');
        }
        else
        {
            break;
        }
    }
    return Input;
}

int main()
{
    cout<<"Enter the first number : ";
    int num1=ValidateInput();
    cout<<"Enter the second number : ";
    int num2=ValidateInput();
    cout<<"Enter the third number : ";
    int num3=ValidateInput();
    Parent *p1=new Parent(num1,num2);
    cout<<"Result = "<<p1->Add()<<'\n';

    Parent *p=new Child(num1,num2,num3);
    cout<<"Result = "<<p->Add();
}
