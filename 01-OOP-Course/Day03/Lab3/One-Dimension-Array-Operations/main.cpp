#include <iostream>
#define Size 5
using namespace std;

int ValidateInput()
{
    int Input=0;
    while (true)
    {
        if (!(cin >> Input))
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
    return Input;
}


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

void PrintArrayData(int MyArray[])
{
    for(int i=0; i<Size; i++)
    {
        cout<<"\nArray["<<i<<"]= "<<MyArray[i]<<" ";
    }
    cout<<"\n";
}

int GetArraySum(int MyArray[])
{
    int sum=0;
    for(int i=0; i<Size; i++)
    {
        sum+=MyArray[i];
    }
    return sum;
}

int GetMaxNumber(int MyArray[])
{
    int Max=MyArray[0];

    for(int i=0; i<Size; i++)
    {
        if(MyArray[i]>Max)
        {
            Max=MyArray[i];
        }
    }
    return Max;
}

int SearchForElement(int MyArray[],int Element)
{
    for(int i=0; i<Size; i++)
    {
        if(MyArray[i]==Element)
        {
            return i;
        }
    }
    return -1;
}

int main()
{
    int MyArray[Size]= {};

    ReadArrayDataFromUser(MyArray);

    PrintArrayData(MyArray);

    cout<<"\nSum = "<<GetArraySum(MyArray)<<'\n';

    cout<<"\nMax Number In Array Is: "<<GetMaxNumber(MyArray)<<'\n';

    int number=0;
    cout<<"\Enter element to search for it: ";
    number=ValidateInput();

    int index=SearchForElement(MyArray,number);
    if(index!=-1)
        cout<<"\nthe element found at index: "<<index<<'\n';
    else
        cout<<"\nElement not found\n";
}
