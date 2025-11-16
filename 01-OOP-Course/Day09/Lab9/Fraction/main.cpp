#include <iostream>
#include <math.h>

using namespace std;
class Fraction
{
private:
    int num1;
    int num2;
public:
    Fraction(int _num1=0,int _num2=0)
    {
        num1=_num1;
        num2=_num2;
    }

    float ComputeGCD()
    {
        //12 8
        int result=min(num1,num2);

        while(result>0)
        {
            if(num1%result==0&&num2%result==0)
            {
                return result;
            }
            result--;
        }
        return result;
    }

    float AddTwoFractions(float n,float m)
    {
        return n+m;
    }

};

int main()
{
    Fraction f(12,8);

    cout<<"\nGCD: "<<f.ComputeGCD()<<'\n';

    cout<<"\nFraction sum = "<<f.AddTwoFractions(2.5,2.5)<<'\n';


}
