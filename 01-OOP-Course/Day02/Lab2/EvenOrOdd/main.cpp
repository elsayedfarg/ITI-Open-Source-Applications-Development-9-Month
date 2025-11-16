#include <iostream>

using namespace std;

bool IsEven(int number)
{
    return number%2==0? true:false;
}

int main()
{
    int number=0;
    cout<<"Enter a number: ";
    while (true)
    {
        if (!(cin >> number))
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

    if(IsEven(number))
        cout<<"Even\n";
    else
        cout<<"Odd\n";

    return 0;
}
