#include <iostream>

using namespace std;

template <class t>

void Swap(t &num1,t &num2)
{
    t temp=num1;
    num1=num2;
    num2=temp;
}

int main()
{
    float a=5.6,b=6.4;
    cout<<"Values before swap: "<<a<<" "<<b<<'\n';
    Swap(a,b);
    cout<<"Values after swap: "<<a<<" "<<b<<'\n';
}
