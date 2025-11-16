#include <iostream>
#include <cmath>
using namespace std;

class Fraction
{
private:
    int numerator;
    int denominator;

public:
    // Constructor
    Fraction(int _num = 0, int _den = 1)
    {
        if (_den == 0)
        {
            cout << "Denominator cannot be zero. Setting to 1.\n";
            denominator = 1;
        }
        else
        {
            denominator = _den;
        }
        numerator = _num;
    }

    // Setters
    void SetNumerator(int n)
    {
        numerator = n;
    }
    void SetDenominator(int d)
    {
        if (d == 0)
        {
            cout << "Denominator cannot be zero. Setting to 1.\n";
            denominator = 1;
        }
        else
        {
            denominator = d;
        }
    }

    // Getters
    int GetNumerator()
    {
        return numerator;
    }
    int GetDenominator()
    {
        return denominator;
    }

    // Print function
    void PrintFraction()
    {
        cout << numerator << "/" << denominator << "\n";
    }

    // 1. Fraction + Fraction
    Fraction operator+(Fraction f)
    {
        Fraction result;
        result.SetNumerator(numerator * f.denominator + f.numerator * denominator);
        result.SetDenominator(denominator * f.denominator);
        return result;
    }

    // 2. Fraction + int
    Fraction operator+(int num)
    {
        Fraction result;
        result.SetNumerator(numerator + num * denominator);
        result.SetDenominator(denominator);
        return result;
    }

    // 3. int + Fraction (friend)
    friend Fraction operator+(int num, Fraction f);

    // 4. ==
    bool operator==(Fraction f)
    {
        return numerator * f.denominator == f.numerator * denominator;
    }

    // 5. !=
    bool operator!=(Fraction f)
    {
        return !(*this == f);
    }

    // 6. ++f (prefix)
    Fraction &operator++()
    {
        numerator += denominator;
        return *this;
    }

    // 7. f++ (postfix)
    Fraction operator++(int)
    {
        Fraction temp = *this;
        numerator += denominator;
        return temp;
    }

    // 8. Casting to int
    explicit operator int()
    {
        return numerator / denominator;
    }
};

// 3. int + Fraction
Fraction operator+(int num, Fraction f)
{
    Fraction result;
    result.SetNumerator(f.GetNumerator() + num * f.GetDenominator());
    result.SetDenominator(f.GetDenominator());
    return result;
}

void PrintFraction(Fraction f)
{
    cout << f.GetNumerator() << "/" << f.GetDenominator() << "\n";
}

int main()
{
    Fraction f1(1, 2), f2(3, 4);

    cout << "Fraction 1: ";
    f1.PrintFraction();
    cout << "Fraction 2: ";
    f2.PrintFraction();

    // 1. Fraction + Fraction
    Fraction sum = f1 + f2;
    cout << "\nSum (Fraction + Fraction): ";
    sum.PrintFraction();

    // 2. Fraction + int
    Fraction f3 = f1 + 2;
    cout << "Sum (Fraction + int): ";
    f3.PrintFraction();

    // 3. int + Fraction
    Fraction f4 = 3 + f1;
    cout << "Sum (int + Fraction): ";
    f4.PrintFraction();

    // 4. ==
    if (f1 == f2)
        cout << "f1 == f2\n";
    else
        cout << "f1 != f2\n";

    // 5. !=
    if (f1 != f2)
        cout << "f1 != f2\n";
    else
        cout << "f1 == f2\n";

    // 6. ++f
    cout << "\nPrefix ++f1: ";
    ++f1;
    f1.PrintFraction();

    // 7. f++
    cout << "Postfix f2++: ";
    f2++;
    f2.PrintFraction();

    // 8. Casting
    int x = (int)f2;
    cout << "Casting f2 to int: " << x << "\n";

    return 0;
}
