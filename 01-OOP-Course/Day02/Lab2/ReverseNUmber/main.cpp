#include <iostream>

using namespace std;

int main()
{
//    cout<<1237%10<<'\n';// 7
//    cout<<1237/10<<'\n';// 123

    int num1=0,num2=0,remainder=0;

    cout<<"Enter a number: ";
    cin>>num1;
    while(num1>0)
    {
        remainder=num1%10;//7
        num1/=10;//123
        num2=num2*10+remainder;
    }
    cout<<num2;
    return 0;
}
