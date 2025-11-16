#include <iostream>
using namespace std;

int ValidateInput(){
    int Input=0;
    while (true)
    {
        if (!(cin >> Input))
        {
            cout << "Please enter a number: ";
            cin.clear();
            cin.ignore(50, '\n');
        }
        else if (Input < 0)
        {
            cout << "Please enter a positive number: ";
        }
        else
        {
            break;
        }
    }
    return Input;
}

void PrintFactorial(int number)
{
    long long result=number;
    for(int i=1; i<number; i++)
    {
        result*=i;
    }
    cout<<'\n'<<number<<" Factorial is: "<<result<<'\n';
}

void DisplayFactorialScreen()
{
    cout<<"Enter a number to compute its factorial: ";
    int number=ValidateInput();
    PrintFactorial(number);
}

void DisplayExponentScreen()
{
    int base=0,exponent=0;
    int result=1;
    cout<<"Enter the base: ";
    base=ValidateInput();

    cout<<"Enter the exponent: ";
    exponent=ValidateInput();
    for(int i=0; i<exponent; i++)
    {
        result*=base;
    }
    cout<<"Reuslt is: "<<result;
}

void PrintReversedNumber(int number)
{
    // 1237
    int remainder=0,num2=0;
    while(number>0)
    {
        remainder=number%10;//7
        number/=10;//123
        num2=num2*10+remainder;
    }
    cout<<num2;
}

void DisplayReverseNumberScreen()
{
    cout<<"Enter a number to reverse it: ";
    int number=ValidateInput();
    PrintReversedNumber(number);
}

int main()
{
    DisplayFactorialScreen();
    cout<<'\n';
    DisplayExponentScreen();
    cout<<"\n\n";
    DisplayReverseNumberScreen();
}
