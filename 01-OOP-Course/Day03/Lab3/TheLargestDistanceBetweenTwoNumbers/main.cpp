#include <iostream>
#define Size 10
using namespace std;

void ReadArrayDataFromUser(int MyArray[])
{
    for(int i=0; i<Size; i++)
    {
        cout<<"Enter Array["<<i<<"]: ";
        while(true)
        {
            if (!(cin >> MyArray[i]))
            {
                cout << "Please enter a number: ";
                cin.clear();
                cin.ignore(50, '\n');
            }
            else
                break;
        }
    }
}

int GetTheLargestDistanceBetweenTwoNumbersInAnArray(int arr[])
{
    int LargestDistance = 0;

    for (int i = 0; i < Size; i++)
    {
        for (int j = i + 1; j < Size; j++)
        {
            if (arr[i] == arr[j])
            {
                int distance = j - i;
                if (distance > LargestDistance)
                    LargestDistance = distance;
            }
        }
    }
    return LargestDistance;
}

int main()
{
    int arr[Size]={};
    ReadArrayDataFromUser(arr);

    if(GetTheLargestDistanceBetweenTwoNumbersInAnArray(arr)==0)
        cout<<"\nNULL\n";
    else
    {
        cout<<"The Largest Distance Between Two Numbers In An Array Is: "<<GetTheLargestDistanceBetweenTwoNumbersInAnArray(arr);
    }
}
