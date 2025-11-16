#include <iostream>
using namespace std;

class Queue
{
private:
    int *Arr;
    int Size;
    int Front;
    int Back;

public:
    Queue(int _size=5)
    {
        Size=_size;
        Arr=new int[Size];
        Front=-1;
        Back=-1;
    }

    ~Queue()
    {
        delete [] Arr;
    }

    bool IsEmpty()
    {
        return Front==-1;
    }

    bool IsFull()
    {
        return Back==Size-1;
    }


    void Enqueue(int value)
    {
        if(IsFull())
        {
            cout<<"\nQueue is full you can not add more elements\n";
        }

        else
        {
            if(IsEmpty())
            {
                Front=0;
            }
            Back++;
            Arr[Back]=value;
        }
    }

    int Dequeue(int &x)
    {
        if(Front>Back || Front==-1)
        {
            cout<<"\nQueue Is Empty\n";
            return -1;
        }
        else
        {
            x=Arr[Front];

            Front++;

            return 1;
        }

    }

    void Print()
    {
        int temp=Front;
        while(temp<=Back)
        {
            cout<<Arr[temp++]<<'\n';
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
    cout<<"\n\nEnter queue size: ";
    int QueueSize=ValidateInput();
    Queue *q1=new Queue(QueueSize);

    for(int i=0; i<QueueSize; i++)
    {
        cout<<"\nEnter a value to push in the queue: ";
        int num=ValidateInput('y');
        q1->Enqueue(num);
    }

    q1->Print();

    q1->Enqueue(6);

    int x=0;
    for(int i=0; i<=QueueSize; i++)
    {
        if(q1->Dequeue(x)==1)
        {
            cout<<'\n'<<x<<" Deleted\n";
        }
    }
}
