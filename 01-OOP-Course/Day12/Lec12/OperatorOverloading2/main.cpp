// Online C++ compiler to run C++ program online
#include <iostream>
using namespace std;

class Unary
{
private:
    int x,y;
public:
    Unary(int i=0,int j=0)
    {
        x=i;
        y=j;
    }

    void show()
    {
        cout<<"x: "<<x<<"       y: "<<y<<'\n';
    }

    Unary operator++()
    {
        ++x;
        ++y;
        return *this;
    }

    Unary operator++(int)
    {
        Unary u=*this;
        x++;
        y++;
        return u;
    }

    Unary operator -()
    {
        x=-x;
        y=-y;
        return *this;
    }

    bool operator !()
    {
        return (x==0&&y==0);
    }

    Unary operator +=(Unary b2)
    {
        x+=b2.x;
        y+=b2.y;
        return *this;
    }
};

int main()
{
    Unary u(10,20),u2,u3,x(1,1);
    ++u;

    u2=u++;

    u.show();
    u2.show();

    u3=-u;

    u3.show();

    if(!x)
    {
        cout<<"true\n";
    }
    else
    {
        cout<<"false\n";
    }

    u+=u2;
    u.show();
}
