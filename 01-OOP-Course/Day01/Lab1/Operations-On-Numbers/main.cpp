#include <iostream>
using namespace std;
int main()
{
    float FNumber=0,SNumber=0;
    cout<<"Enter the first number: ";
    while (!(cin >> FNumber))
    {
        cout << "please enter a number: ";
        cin.clear();
        cin.ignore(50, '\n');
    }
    cout<<"Enter the second number (can not be zero): ";
    while (true)
    {
        if (!(cin >> SNumber))
        {
            cout << "Please enter a number: ";
            cin.clear();
            cin.ignore(50, '\n');
        }
        else if (SNumber == 0)
        {
            cout << "Please enter a non-zero number: ";
        }
        else
        {
            break;
        }
    }
    float Sum=FNumber+SNumber;
    float Sub=FNumber-SNumber;
    float Mul=FNumber*SNumber;
    float Div=FNumber/SNumber;
    cout<<"Summation result = "<<Sum<<'\n';
    cout<<"Subtraction result = "<<Sub<<'\n';
    cout<<"Multiplication result = "<<Mul<<'\n';
    cout<<"Division result = "<<Div<<'\n';
    return 0;
}
