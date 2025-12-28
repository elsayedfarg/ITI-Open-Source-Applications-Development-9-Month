#include <iostream>
using namespace std;

struct stData
{
    int id = 0;
    string name = "";
    int age = 1;
};

struct stNode
{
    stData data;
    stNode *next = nullptr;
};

class Queue
{
private:
    stNode *front, *tail;

public:
    Queue() : front(nullptr), tail(nullptr) {}

    stNode *CreateNode(int id, string name, int age)
    {
        stNode *newNode = new stNode();
        newNode->data.id = id;
        newNode->data.name = name;
        newNode->data.age = age;
        return newNode;
    }

    void Enqueue(int id, string name, int age)
    {
        stNode *newNode = CreateNode(id, name, age);
        if (front == nullptr)
        {
            front = newNode;
            tail = newNode;
        }
        else
        {
            tail->next = newNode;
            newNode->next = nullptr;
            tail = newNode;
        }
    }
    void Dequeue()
    {
        if (front == nullptr)
        {
            tail = nullptr;
            cout << "Queue is empty, cannot dequeue." << endl;
            return;
        }
        stNode *temp = new stNode();
        temp = front;
        front = front->next;
        delete temp;
    }
    void DisplayQueue()
    {
        stNode *temp = front;
        while (temp != nullptr)
        {
            cout << "ID: " << temp->data.id << ", Name: " << temp->data.name << ", Age: " << temp->data.age << endl;
            temp = temp->next;
        }
    }
};

int main()
{
    Queue q;
    q.Enqueue(1, "Sayed", 30);
    q.Enqueue(2, "Mohamed", 25);
    q.DisplayQueue();
    q.Dequeue();
    q.Dequeue();
    q.Dequeue();
    q.DisplayQueue();
    return 0;
}