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

int main()
{
    int s;
    cout<<"Enter the size of the array: ";
    s=ValidateInput();

    int * arr=new int[s];

    if(arr!=NULL)
    {
        for(int i=0; i<s; i++)
        {
            cout<<"Enter arr["<<i<<"] : ";
            cin>>arr[i];
        }

        for(int i=0; i<s; i++)
        {
            cout<<"arr["<<i<<"] = ";
            cout<<arr[i]<<'\n';
        }
        delete[] arr;
    }
}
