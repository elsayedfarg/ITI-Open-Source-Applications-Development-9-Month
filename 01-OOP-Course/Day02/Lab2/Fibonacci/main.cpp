#include <iostream>

using namespace std;

void PrintFibonacci(int stopIndex)
{
    int prev1=1;
    int prev2=0;

    int result=0;

    cout<<"1   ";
    for(int i=1; i<=stopIndex/*index*/; i++)
    {
        result=prev1+prev2;
        cout<<result<<"   ";
        prev2=prev1;
        prev1=result;
    }
}

int main()
{
    //1   1   2   3   5   8  13
    //0   1   2   3   4   5  6

    int index=0;
    cout<<"Enter the stop index: ";
    while (true)
    {
        if (!(cin >> index))
        {
            cout << "Please enter a number: ";
            cin.clear();
            cin.ignore(50, '\n');
        }
        else if (index < 0)
        {
            cout << "Please enter a positive number: ";
        }
        else
        {
            break;
        }
    }
    PrintFibonacci(index);
}
