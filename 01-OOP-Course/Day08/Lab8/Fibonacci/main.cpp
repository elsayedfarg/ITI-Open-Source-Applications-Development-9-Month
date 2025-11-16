#include <iostream>

using namespace std;

void PrintFibonacci(int prev1, int prev2, int index, int stopIndex)
{
//    for(int i=1; i<=stopIndex/*index*/; i++)
//    {
//        result=prev1+prev2;
//        cout<<result<<"   ";
//        prev2=prev1;
//        prev1=result;
//    }

    if (index >= stopIndex)
        return;

    int result = prev1 + prev2;
    cout << result << "   ";

    PrintFibonacci(result, prev1, index + 1, stopIndex);
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
    if (index == 0)
        cout << "1\n";
    else if (index == 1)
        cout << "1   1\n";
    else
    {
        cout << "1   1   ";
        PrintFibonacci(1, 1, 2, index + 1);
    }

    return 0;

}
