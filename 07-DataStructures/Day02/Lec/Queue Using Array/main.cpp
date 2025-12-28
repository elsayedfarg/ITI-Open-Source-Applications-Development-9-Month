#include <iostream>
using namespace std;

const int capacity = 5;

struct stQueue
{
    int arr[capacity];
    int front = -1;
    int rear = -1;

    bool isEmpty()
    {
        return front == -1;
    }

    bool isFull()
    {
        return rear == capacity - 1;
    }

    void Enqueue(int value)
    {
        if (isFull())
        {
            cout << "\nQueue is full. Cannot add more items.\n";
            return;
        }
        else if (isEmpty())
            front = rear = 0;
        else
            rear++;

        arr[rear] = value;
    }

    void Dequeue()
    {
        if (isEmpty())
        {
            cout << "\nQueue is empty. Cannot remove items.\n";
            return;
        }
        else if (front == rear)
            front = rear = -1;
        else
            front++;
    }

    int frontValue()
    {
        if (isEmpty())
        {
            cout << "\nQueue is empty. Cannot get front value.\n";
            return -1;
        }
        return arr[front];
    }
};

int main()
{
    stQueue q;
    q.Enqueue(10);
    q.Enqueue(20);
    cout << "Front: " << q.frontValue() << endl;
    q.Dequeue();
    cout << "Front: " << q.frontValue() << endl;
    return 0;
}
