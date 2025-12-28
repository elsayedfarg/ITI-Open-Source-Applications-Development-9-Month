#include <iostream>
using namespace std;

class Queue
{
private:
    int front, rear, capacity, *arr;

public:
    Queue(int cap = 5)
    {
        front = -1;
        rear = -1;
        capacity = cap;
        arr = new int[capacity];
    }

    ~Queue()
    {
        delete[] arr;
    }

    bool isEmpty()
    {
        return (front == -1 && rear == -1);
    }

    bool isFull()
    {
        return (front == rear + 1 || (front == 0 && rear == capacity - 1));
    }

    void Enqueue(int value)
    {
        if (isFull())
        {
            cout << "Queue is Full\n";
            return;
        }
        if (isEmpty())
        {
            front = rear = 0;
        }
        else if (rear == capacity - 1)
        {
            rear = 0;
        }
        else
        {
            rear++;
        }
        arr[rear] = value;
    }

    void Dequeue()
    {
        if (isEmpty())
        {
            cout << "Queue is Empty\n";
            return;
        }
        if (front == rear)
        {
            front = rear = -1;
        }
        else if (front == capacity - 1)
        {
            front = 0;
        }
        else
        {
            front++;
        }
    }

    void display()
    {
        if (isEmpty())
        {
            cout << "Queue is Empty\n";
            return;
        }
        int i = front;
        while (true)
        {
            cout << arr[i] << " ";
            if (i == rear)
                break;
            i = (i + 1) % capacity;
        }
        cout << endl;
    }
};

int main()
{
    Queue q(5);
    q.Enqueue(10);
    q.Enqueue(20);
    q.Enqueue(30);
    q.Enqueue(40);
    q.Enqueue(50);

    q.display();

    q.Enqueue(60);

    q.Dequeue();
    q.display();
    q.Dequeue();
    q.display();
    q.Dequeue();
    q.display();
    return 0;
}
