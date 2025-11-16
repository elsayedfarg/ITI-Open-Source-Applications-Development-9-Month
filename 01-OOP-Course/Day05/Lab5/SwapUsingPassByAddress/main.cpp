#include <iostream>

using namespace std;

void Swap(int *num1,int *num2)
{
    int temp=*num1;
    *num1=*num2;
    *num2=temp;
}

int main()
{
    int a=5,b=6;
    cout<<"Values before swap: "<<a<<" "<<b<<'\n';
    Swap(&a,&b);
    cout<<"Values after swap: "<<a<<" "<<b<<'\n';
}
