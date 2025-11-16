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

    Stack(const Stack& s)
    {
        Size = s.Size;
        Top = s.Top;

        Arr = new int[Size];
        for (int i = 0; i <= Top; i++)
        {
            Arr[i] = s.Arr[i];
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

    // 1- = operator
    Stack& operator =(Stack& s)
    {
        Size=s.Size;
        Top=s.Top;

//        delete []Arr; //if the array size is different
        Arr=new int[Size];

        for(int i=0; i<=Top; i++)
        {
            Arr[i]=s.Arr[i];
        }
        return *this;
    }

    // 2- + operator
    Stack operator+(const Stack& s)
    {
        Stack result(Size + s.Size);

//        s1 -> 10, 20, 30   top=2
//        s2 -> 40, 50       top=1
        result.Top = Top + s.Top + 1;// top starts at -1

        for (int i = 0; i <= Top; i++)
        {
            result.Arr[i] = Arr[i];// this
        }

        for (int j = 0; j <= s.Top; j++)
        {
            result.Arr[Top + 1 + j] = s.Arr[j];
        }

        return result;
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
    cout << "\n\nEnter stack size: ";
    int StackSize = ValidateInput();
    Stack s1(StackSize);

    for (int i = 0; i < StackSize; i++)
    {
        cout << "\nEnter a value to push in the stack: ";
        int num = ValidateInput('y');
        s1.Push(num);
    }

    cout << "\nOriginal stack (s1):\n";
    s1.Print();

    cout << "\n\n=============================== Overloading ==================================\n\n";

    // 1- = operator
    Stack s2(StackSize);
    s2 = s1;

    cout << "Copied stack (s2 after s2 = s1):\n";
    s2.Print();

    int poppedValue;
    s1.Pop(poppedValue);
    cout << "\nAfter popping from s1:\n";
    cout << "s1:\n";
    s1.Print();
    cout << "s2 (unchanged):\n";
    s2.Print();

    // 2- + operator
    Stack s3(StackSize);
    for (int i = 0; i < StackSize; i++)
    {
        cout << "\nEnter a value to push in s3: ";
        int num = ValidateInput('y');
        s3.Push(num);
    }

    cout << "\nStack s3:\n";
    s3.Print();

    cout << "\n put s2 + s3 into s4:\n";
    Stack s4 = s2 + s3;

    cout << "\nResulting stack (s4):\n";
    s4.Print();

    return 0;
}
