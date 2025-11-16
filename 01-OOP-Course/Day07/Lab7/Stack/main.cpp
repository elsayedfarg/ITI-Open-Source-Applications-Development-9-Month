#include <iostream>
using namespace std;

class Stack
{
private:
    int Size;
    int Top;
    int *Arr;
public:

    Stack(int _size=5)
    {
        Top=-1;
        Size=_size;
        Arr=new int[Size];
    }

    ~Stack()
    {
        delete [] Arr;
    }

    void Push(int value)
    {
        if(Top<Size-1)
        {
            Top++;
            Arr[Top]=value;
        }
        else
        {
            cout<<"\nStack is full\n";
        }
    }

    int Pop(int &x)
    {
        if(Top>-1)
        {
            x=Arr[Top];
            Top--;
            return 1;
        }
        else
        {
            cout<<"\nStack is empty\n";
            return -1;

        }
    }

    void Print()
    {
        int temp=Top;
        while(temp>=0)
        {
            cout<<Arr[temp--]<<'\n';
        }
    }
};

int ValidateInput(char IsStackValue='n')
{
    int Input=0;
    while (true)
    {
        if (!(cin >> Input))
        {
            cout << "Please enter a number: ";
            cin.clear();
            cin.ignore(50, '\n');
        }
        else if (Input < 0 && IsStackValue=='n')
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
    cout<<"\n\nEnter stack size: ";
    int StackSize=ValidateInput();
    Stack *s1=new Stack(StackSize);

    for(int i=0; i<StackSize; i++)
    {
        cout<<"\nEnter a value to push in the stack: ";
        int num=ValidateInput('y');
        s1->Push(num);
    }

    s1->Print();

    s1->Push(6);

    int x=0;
    for(int i=0; i<=StackSize; i++)
    {
        if(s1->Pop(x)==1)
        {
            cout<<'\n'<<x<<" Deleted\n";
        }
    }
    return 0;
}
