#include <iostream>

using namespace std;

int main()
{
    int base=0,exponent=0;
    cout<<"Enter the base: ";
    cin>>base;

    int result=1;
    cout<<"Enter the exponent: ";
    cin>>exponent;
    for(int i=0; i<exponent; i++)
    {
        result*=base;
    }
    cout<<"Reuslt is: "<<result;
    return 0;
}
