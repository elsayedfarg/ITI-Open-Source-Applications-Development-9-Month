#include <iostream>

using namespace std;

long ComputeFactorial(int number)
{
    int result=number;
    for(int i=1;i<number;i++)
    {
        result*=i;
    }
    return result;
}

int main()
{
    cout<<ComputeFactorial(5);
    return 0;
}
