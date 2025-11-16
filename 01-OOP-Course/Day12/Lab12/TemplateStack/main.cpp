#include <iostream>
using namespace std;

template<class T>
class Stack
{
private:
    int Size;
    int Top;
    T *Arr;

public:
    Stack(int _size = 5)
    {
        Top = -1;
        Size = _size;
        Arr = new T[Size];
    }

    // Copy Constructor
    Stack(const Stack &st)
    {
        Top = st.Top;
        Size = st.Size;
        Arr = new T[Size];
        for (int i = 0; i <= Top; i++)
        {
            Arr[i] = st.Arr[i];
        }
    }

    ~Stack()
    {
        delete[] Arr;
    }

    void Push(T value)
    {
        if (Top < Size - 1)
        {
            Top++;
            Arr[Top] = value;
        }
        else
        {
            cout << "\nStack is full\n";
        }
    }

    bool Pop(T &x)
    {
        if (Top > -1)
        {
            x = Arr[Top];
            Top--;
            return true;
        }
        else
        {
            cout << "\nStack is empty\n";
            return false;
        }
    }

    void Print() const
    {
        int temp = Top;
        while (temp >= 0)
        {
            cout << Arr[temp--] << '\n';
        }
    }
};

int ValidateInput(char IsStackValue = 'n')
{
    int Input = 0;
    while (true)
    {
        if (!(cin >> Input))
        {
            cout << "Please enter a number: ";
            cin.clear();
            cin.ignore(50, '\n');
        }
        else if (Input < 0 && IsStackValue == 'n')
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

template<class T>
void MyFun(Stack<T> s1)
{
    T x;
    while (s1.Pop(x))
    {
        cout << x << " ";
    }
}

int main()
{
    cout << "\n\nEnter stack size: ";
    int StackSize = ValidateInput();
    Stack<int> s1(StackSize);

    for (int i = 0; i < StackSize; i++)
    {
        cout << "\nEnter a value to push in the stack: ";
        int num = ValidateInput('y');
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
