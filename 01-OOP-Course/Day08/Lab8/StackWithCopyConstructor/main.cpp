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

    // Copy Constructor
    Stack(Stack &st)
    {
        Top=st.Top;
        Size=st.Size;

        Arr=new int[Size];

        for(int i=0; i<=Top; i++)
        {
            Arr[i]=st.Arr[i];
        }

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

void MyFun(Stack s1)
{
    int x=0;
    while(s1.Pop(x)==1)
    {
        cout<<x<<" ";
    }
}

int main()
{
    cout<<"\n\nEnter stack size: ";
    int StackSize=ValidateInput();
    Stack s1(StackSize);

    for(int i=0; i<StackSize; i++)
    {
        cout<<"\nEnter a value to push in the stack: ";
        int num=ValidateInput('y');
        s1.Push(num);
    }

    cout << "\nOriginal Stack:\n";
    s1.Print();

    cout << "\n\nCopied Stack elements (popped inside MyFun):\n";
    MyFun(s1);

    cout << "\n\nOriginal Stack after MyFun:\n";
    s1.Print();
    return 0;
}
