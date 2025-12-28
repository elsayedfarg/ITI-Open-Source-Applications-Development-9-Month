#include <iostream>
using namespace std;

int ValidateInput()
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
        else if (Input < 0)
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

struct stData
{
    int id = 0;
    string name = "";
    int age = 1;
};

struct stNode
{
    stNode *next = nullptr;
    stData data;
};

class LinkedList
{
private:
    stNode *head = nullptr;
    stNode *createNode(int id, string name, int age)
    {
        stNode *newNode = new stNode();
        newNode->data.id = id;
        newNode->data.name = name;
        newNode->data.age = age;
        newNode->next = nullptr;
        return newNode;
    }

public:
    bool isEmpty()
    {
        return head == nullptr;
    }

    void insertAtFirst(int id, string name, int age)
    {
        stNode *newNode = createNode(id, name, age);
        if (isEmpty())
        {
            head = newNode;
        }
        else
        {
            newNode->next = head;
            head = newNode;
        }
    }

    int Count()
    {
        if (isEmpty())
            return 0;
        else
        {
            int counter = 0;
            for (stNode *temp = head; temp != nullptr; temp = temp->next)
                counter++;

            return counter;
        }
    }

    bool isFound(int id)
    {
        for (stNode *temp = head; temp != nullptr; temp = temp->next)
        {
            if (id == temp->data.id)
                return true;
        }
        return false;
    }

    void Display()
    {
        if (isEmpty())
        {
            cout << "\nList is empty\n";
            return;
        }

        for (stNode *temp = head; temp != nullptr; temp = temp->next)
        {
            cout << "\nNode Data:\n";
            cout << "ID   : " << temp->data.id << '\n';
            cout << "Name : " << temp->data.name << '\n';
            cout << "Age  : " << temp->data.age << '\n';
        }
    }

    void insertBefore(int oldId, int id, string name, int age)
    {
        // Case 1: Empty list
        if (isEmpty())
        {
            cout << "\nList is empty\n";
            return;
        }

        // Case 2: Insert before head
        if (head->data.id == oldId)
        {
            insertAtFirst(id, name, age);
            return;
        }

        // Case 3: Insert before any other node
        stNode *temp = head;
        while (temp->next != nullptr && temp->next->data.id != oldId)
        {
            temp = temp->next;
        }
        // Case 4: oldId not found
        if (temp->next == nullptr)
        {
            cout << "\nItem not found\n";
            return;
        }
        stNode *newNode = createNode(id, name, age);
        newNode->next = temp->next;
        temp->next = newNode;
    }

    void append(int id, string name, int age)
    {
        stNode *newNode = createNode(id, name, age);

        // Case 1: empty list
        if (isEmpty())
        {
            head = newNode;
            return;
        }

        // Case 2: non-empty list, traverse to the last node
        stNode *temp = head;
        while (temp->next != nullptr)
        {
            temp = temp->next;
        }

        temp->next = newNode;
    }

    void deleteItem(int id)
    {
        if (isEmpty())
        {
            cout << "\nList is empty\n";
            return;
        }

        stNode *delptr = head;
        if (head->data.id == id)
        {
            head = head->next;
            delete delptr;
            cout << "\nItem deleted successfully\n";
            return;
        }
        else
        {
            stNode *temp = nullptr;
            delptr = head;
            while (delptr->data.id != id)
            {
                temp = delptr;
                delptr = delptr->next;
            }
            temp->next = delptr->next;
            cout << "\nItem deleted successfully\n";
            delete delptr;
        }
    }
};

void addNode(LinkedList &ll)
{
    int id, age;
    string name;

    cout << "\nEnter node data\n";
    cout << "ID: ";
    id = ValidateInput();

    cout << "Name: ";
    getline(cin >> ws, name);

    cout << "Age: ";
    age = ValidateInput();

    ll.insertAtFirst(id, name, age);
}

int main()
{
    LinkedList ll;
    if (ll.isEmpty())
        cout << "\nYour list is empty\n";
    else
    {
        cout << "\nThe list contains " << ll.Count() << " items\n";
    }

    addNode(ll);
    ll.Display();

    addNode(ll);
    ll.Display();

    addNode(ll);
    ll.Display();

    cout << "\nThe list contains " << ll.Count() << " items\n";

    int id = 0;
    cout << "Enter an item id to search for it: ";
    id = ValidateInput();
    if (ll.isFound(id))
        cout << "\nItem Found\n";
    else
        cout << "\nItem not found\n";

    cout << "Enter an item id to insert new item before it:";
    int oldId = ValidateInput();

    int age;
    string name;

    cout << "\nEnter new node data\n";
    cout << "ID: ";
    id = ValidateInput();

    cout << "Name: ";
    getline(cin >> ws, name);

    cout << "Age: ";
    age = ValidateInput();

    ll.insertBefore(oldId, id, name, age);

    ll.Display();

    cout << "\nEnter new node data to append it\n";
    cout << "ID: ";
    id = ValidateInput();

    cout << "Name: ";
    getline(cin >> ws, name);

    cout << "Age: ";
    age = ValidateInput();
    ll.append(id, name, age);

    ll.Display();

    cout << "Enter an item id to delete it from the list: ";
    cin >> id;
    ll.deleteItem(id);

    ll.Display();
}