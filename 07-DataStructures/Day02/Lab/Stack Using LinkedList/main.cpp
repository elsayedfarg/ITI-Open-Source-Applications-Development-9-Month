#include <iostream>

using namespace std;

struct stData
{
    int id = 0;
    string name = "";
    int age = 18;
};

struct stNode
{
    stData data;
    stNode *prev = nullptr;
};

class Stack
{
private:
    stNode *tos;

public:
    Stack() : tos(nullptr) {}
    stNode *CreateNode(int id, string name, int age)
    {
        stNode *newNode = new stNode();
        newNode->data.id = id;
        newNode->data.name = name;
        newNode->data.age = age;
        return newNode;
    }

    bool isEMpty()
    {
        return tos == nullptr;
    }

    bool isFull()
    {
        stNode *temp = new stNode();
        if (temp == nullptr)
            return true;
        delete temp;
        return false;
    }

    void Push(int id, string name, int age)
    {
        if (isFull())
        {
            cout << "Stack Overflow" << endl;
            return;
        }
        stNode *newNode = CreateNode(id, name, age);
        newNode->prev = tos;
        tos = newNode;
    }

    void Pop()
    {
        if (isEMpty())
        {
            cout << "Stack Underflow" << endl;
            return;
        }
        stNode *temp = tos;
        tos = tos->prev;
        delete temp;
    }

    void Display()
    {
        stNode *current = tos;
        while (current != nullptr)
        {
            cout << "ID: " << current->data.id << ", Name: " << current->data.name << ", Age: " << current->data.age << endl;
            current = current->prev;
        }
    }
};

int main()
{
    Stack s;
    s.Push(1, "sayed", 25);
    s.Push(2, "mohamed", 30);
    s.Display();
    s.Pop();
    s.Pop();
    s.Pop();
    return 0;
}