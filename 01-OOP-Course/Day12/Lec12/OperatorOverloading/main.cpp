// Online C++ compiler to run C++ program online
#include <iostream>
using namespace std;

class Triangle
{
private:
    float width;
    float height;

public:
    Triangle(float a=0,float b=0)
    {
        width=a;
        height=b;
    }

    void getDate()
    {
        cout<<"\nEnter the width:\n";
        cin>>width;
        cout<<"\nEnter the height:\n";
        cin>>height;
    }

    void showData()
    {
        cout<<"Width: "<<width<<"\n"<<"Height: "<<height<<'\n';
    }

    // +   -  *   /
    Triangle operator + (Triangle t)
    {
        Triangle result;
        result.width=width+t.width;
        result.height=height+t.height;
        return result;
    }
};

int main() {
    Triangle t1,t2(1.5,3.5),t3;
    t1.getDate();
    t3=t1+t2;
    t3.showData();
}
