#include <iostream>
using namespace std;

class ComplexNumber
{
private:
    int Real;
    int Imaginary;

public:
    ComplexNumber(int _real=0,int _imageinary=0)
    {
        Real=_real;
        Imaginary=_imageinary;
    }

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

    // 1- Complex + Complex
    ComplexNumber operator +(ComplexNumber c)
    {
        ComplexNumber Result;

        Result.Real=Real+c.Real;
        Result.Imaginary=Imaginary+c.Imaginary;

        return Result;
    }

    // 2- Complex + Int
    ComplexNumber operator +(int num)
    {
        ComplexNumber Result;

        Result.Real=Real+num;
        Result.Imaginary=Imaginary;

        return Result;
    }

    // 3- Int + Complex
    friend ComplexNumber operator +(int num,ComplexNumber c);

    // 4- ==
    int operator ==(ComplexNumber c)
    {
        return Real==c.Real && Imaginary==c.Imaginary;
    }

    // 5- !=
    int operator !=(ComplexNumber c)
    {
        return !(*this==c);
    }

    // 6- ++c
    ComplexNumber& operator ++()
    {
        ++Real;
        return *this;
    }

    // 7- c++
    ComplexNumber operator ++(int)
    {
        ComplexNumber result(Real,Imaginary);
        ++Real;
        return result;
    }

    // 8-Int = Complex (Casting)
    explicit operator int()
    {
        return Real;
    }
};

// 3- Int + Complex
ComplexNumber operator +(int num,ComplexNumber c)
{
    ComplexNumber Result;

    Result.Real=c.Real+num;
    Result.Imaginary=c.Imaginary;

    return Result;
}

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

    c2.PrintComplex();

    // 1- Complex + Complex
    ComplexNumber Sum = c1+c2;
    cout << "\n\nSum Complex + Complex Result : ";
    Sum.PrintComplex();

    // 2- Complex + Int
    ComplexNumber c3=c1+2;
    cout << "\n\nSum Complex + int Result : ";
    c3.PrintComplex();

    // 3- Int + Complex
    ComplexNumber c4=2+c1;
    cout << "\n\nSum Int + Complex Result : ";
    c4.PrintComplex();

    // 4- ==
    if(c1==c2)
    {
        cout<<"\nC1 = C2\n";
    }
    else
    {
        cout<<"\nC1 != C2\n";
    }

    // 5- !=
    if(c1!=c2)
    {
        cout<<"\nC1 != C2\n";
    }
    else
    {
        cout<<"\nC1 = C2\n";
    }

    // 6- ++c
    c1.PrintComplex();
    ++c1;
    c1.PrintComplex();

    // 7- c++
    ComplexNumber c5,c6;
    c5++;
    c5.PrintComplex();//1
    c6=c5++;
    c6.PrintComplex();//1

    // 8-Int = Complex (Casting)
    int x=(int)c6;

//
//    ComplexNumber Sub = SubtractComplexNumbers(c1, c2);
//    cout << "\n\nSub Result : ";
//    PrintComplex(Sub);

}
