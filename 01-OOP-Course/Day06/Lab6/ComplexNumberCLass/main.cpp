#include <iostream>
using namespace std;

class ComplexNumber
{
private:
    int Real;
    int Imaginary;

public:
    void SetReal(int _Real)
    {
        if (cin.fail())
        {
            cout << "Invalid input for Real part. Setting to 0.\n";
            cin.clear();
            cin.ignore(10000, '\n');
            Real = 0;
        }
        else
        {
            Real = _Real;
        }
    }
    int GetReal()
    {
        return Real;
    }

    void SetImaginary(int _Imaginary)
    {
        if (cin.fail())
        {
            cout << "Invalid input for Imaginary part. Setting to 0.\n";
            cin.clear();
            cin.ignore(10000, '\n');
            Imaginary = 0;
        }
        else
        {
            Imaginary = _Imaginary;
        }
    }
    int GetImaginary()
    {
        return Imaginary;
    }

    void PrintComplex()
    {
        cout<<"\n\nMember Print Function\n\n";
        if(Imaginary<0)
        {
            cout<<Real<<Imaginary<<"J\n";
        }
        else if(Imaginary>0)
        {
            cout<<Real<<"+"<<Imaginary<<"J\n";
        }
        else
        {
            cout<<Real<<'\n';
        }
    }

    ComplexNumber AddComplexNumbers(ComplexNumber c)
    {
        ComplexNumber Result;

        Result.Real=Real+c.Real;
        Result.Imaginary=Imaginary+c.Imaginary;

        return Result;
    }
};

void PrintComplex(ComplexNumber c)
{
    cout<<"\n\nStandalone Print Function\n\n";
    if(c.GetImaginary()<0)
    {
        cout<<c.GetReal()<<c.GetImaginary()<<"J\n";
    }
    else if(c.GetImaginary()>0)
    {
        cout<<c.GetReal()<<"+"<<c.GetImaginary()<<"J\n";
    }
    else
    {
        cout<<c.GetReal()<<'\n';
    }
}

ComplexNumber SubtractComplexNumbers(ComplexNumber c1,ComplexNumber c2)
{
    ComplexNumber Result;

    Result.SetReal(c1.GetReal()-c2.GetReal());
    Result.SetImaginary(c1.GetImaginary()-c2.GetImaginary());

    return Result;
}

int main()
{
    ComplexNumber c1, c2;

    cout << "Enter Real part of first complex number: ";
    int real1;
    cin >> real1;
    c1.SetReal(real1);

    cout << "Enter Imaginary part of first complex number: ";
    int imag1;
    cin >> imag1;
    c1.SetImaginary(imag1);

    c1.PrintComplex();

    cout << "\nEnter Real part of second complex number: ";
    int real2;
    cin >> real2;
    c2.SetReal(real2);

    cout << "Enter Imaginary part of second complex number: ";
    int imag2;
    cin >> imag2;
    c2.SetImaginary(imag2);

    ComplexNumber Sum = c1.AddComplexNumbers(c2);
    cout << "\n\nSum Result : ";
    PrintComplex(Sum);

    ComplexNumber Sub = SubtractComplexNumbers(c1, c2);
    cout << "\n\nSub Result : ";
    PrintComplex(Sub);

}
