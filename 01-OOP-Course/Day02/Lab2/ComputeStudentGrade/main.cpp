#include <iostream>

using namespace std;

int main()
{
    int Degree=0;
    cout<<"Enter your Degree(Between 0 and 100):";
    while (true)
    {
        if (!(cin >> Degree))
        {
            cout << "Please enter a number: ";
            cin.clear();
            cin.ignore(50, '\n');
        }
        else if (Degree < 0)
        {
            cout << "Please enter a positive number: ";
        }
        else if(Degree>100)
        {
            cout << "Degree must be less than or equal 100: ";
        }
        else
        {
            break;
        }
    }

    if(Degree>=85)
    {
        cout<<"A\n";
    }
    else if(Degree>=75 && Degree<85)
    {
        cout<<"B\n";
    }
    else if(Degree>=65 && Degree<75)
    {
        cout<<"C\n";
    }
    else if(Degree>=50 && Degree <65)
    {
        cout<<"D\n";
    }
    else
    {
        cout<<"Fail\n";
    }

    return 0;
}
