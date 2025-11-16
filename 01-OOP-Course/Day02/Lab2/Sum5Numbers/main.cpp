#include <iostream>

using namespace std;

int main()
{
    int number=0;
    int sum=0;
    for(int i=0; i<5; i++)
    {
        cout<<"Enter Number "<<i+1<<" : ";
        cin>>number;
        sum+=number;
    }
    cout<<"Sum = "<<sum;
    return 0;
}
