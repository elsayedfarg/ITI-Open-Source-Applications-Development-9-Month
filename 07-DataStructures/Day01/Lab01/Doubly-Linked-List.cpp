#include <iostream>
#include <termios.h>
#include <unistd.h>
#include <limits>
#include <string>
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
    stNode *next = nullptr;
    stNode *prev = nullptr;
};

class DoublyLinkedList
{
private:
    stNode *head;
    stNode *tail;
    int numberOfNodes;

public:
    DoublyLinkedList() : head(nullptr), tail(nullptr), numberOfNodes(0) {}

    stNode *CreateNode(int id, string name, int age)
    {
        stNode *newNode = new stNode();
        newNode->data.id = id;
        newNode->data.name = name;
        newNode->data.age = age;
        return newNode;
    }

    void AppendNode(int id, string name, int age)
    {
        stNode *newNode = CreateNode(id, name, age);
        if (head == nullptr)
        {
            head = tail = newNode;
        }
        else
        {
            tail->next = newNode;
            newNode->prev = tail;
            tail = newNode;
        }
        numberOfNodes++;
    }

    int CountNodes()
    {
        return numberOfNodes;
    }

    void DisplayAllNodes()
    {
        stNode *temp = head;
        while (temp != nullptr)
        {
            cout << "ID: " << temp->data.id << '\n';
            cout << "Name: " << temp->data.name << '\n';
            cout << "Age: " << temp->data.age << '\n';
            temp = temp->next;
        }
        cout << "\n\n";
    }

    void DisplayAllNodesReversed()
    {
        stNode *temp = tail;
        cout << "---- Reversed List ----\n";
        while (temp != nullptr)
        {
            cout << "ID: " << temp->data.id << '\n';
            cout << "Name: " << temp->data.name << '\n';
            cout << "Age: " << temp->data.age << '\n';
            temp = temp->prev;
        }
        cout << "\n\n";
    }

    stNode *SearchById(int id)
    {
        stNode *temp = head;
        while (temp)
        {
            if (id == temp->data.id)
            {
                return temp;
            }
            temp = temp->next;
        }
        return nullptr;
    }

    stNode *SearchByName(string &name)
    {
        stNode *temp = head;
        while (temp)
        {
            if (name == temp->data.name)
            {
                return temp;
            }
            temp = temp->next;
        }
        return nullptr;
    }

    void InsertBefore(int newId, string newName, int newAge, int nodeIdToInsertBefore)
    {
        stNode *nodeToInsertBefore = SearchById(nodeIdToInsertBefore);

        if (nodeToInsertBefore == nullptr)
            return;

        stNode *newNode = CreateNode(newId, newName, newAge);

        newNode->next = nodeToInsertBefore;
        newNode->prev = nodeToInsertBefore->prev;
        // nodeToInsertBefore->prev->next = newNode; //this will cause a problem if we are on the head

        if (nodeToInsertBefore->prev != nullptr)
        {
            nodeToInsertBefore->prev->next = newNode;
        }
        else
        {
            head = newNode;
        }

        nodeToInsertBefore->prev = newNode;

        numberOfNodes++;
    }

    void DeleteById(int id)
    {
        stNode *nodeToRemove = SearchById(id);

        if (nodeToRemove == nullptr)
            return;

        if (head == tail)
        {
            head = tail = nullptr;
        }
        else if (nodeToRemove == tail)
        {
            tail = tail->prev;
            tail->next = nullptr;
        }
        else if (nodeToRemove == head)
        {
            head = head->next;
            head->prev = nullptr;
        }
        else
        {
            nodeToRemove->prev->next = nodeToRemove->next;
            nodeToRemove->next->prev = nodeToRemove->prev;
        }

        delete nodeToRemove;
        numberOfNodes--;
    }

    void DeleteByName(string name)
    {
        stNode *nodeToRemove = SearchByName(name);
        if (nodeToRemove == nullptr)
            return;

        if (head == tail)
        {
            head = tail = nullptr;
        }
        else if (nodeToRemove == tail)
        {
            tail = tail->prev;
            tail->next = nullptr;
        }
        else if (nodeToRemove == head)
        {
            head = head->next;
            head->prev = nullptr;
        }
        else
        {
            nodeToRemove->prev->next = nodeToRemove->next;
            nodeToRemove->next->prev = nodeToRemove->prev;
        }

        delete nodeToRemove;
        numberOfNodes--;
    }

    void DeleteAllNodes()
    {
        stNode *temp = head;

        while (temp != nullptr)
        {
            stNode *nextNode = temp->next;
            delete temp;
            temp = nextNode;
        }
        head = tail = nullptr;
        numberOfNodes = 0;
    }
};

// ----------------- Terminal & Menu Helpers -----------------
void textattr(int color)
{
    cout << "\033[" << color << "m";
}

char getch()
{
    char buf = 0;
    struct termios old = {0};
    if (tcgetattr(STDIN_FILENO, &old) < 0)
        perror("tcgetattr");
    old.c_lflag &= ~ICANON;
    old.c_lflag &= ~ECHO;
    if (tcsetattr(STDIN_FILENO, TCSANOW, &old) < 0)
        perror("tcsetattr");
    if (read(STDIN_FILENO, &buf, 1) < 0)
        perror("read");

    if (buf == 27)
    { // arrow keys
        char seq[2];
        if (read(STDIN_FILENO, &seq[0], 1) == 0)
            buf = 27;
        if (read(STDIN_FILENO, &seq[1], 1) == 0)
            buf = 27;
        if (seq[0] == '[')
        {
            switch (seq[1])
            {
            case 'A':
                buf = 72;
                break; // up
            case 'B':
                buf = 80;
                break; // down
            case 'C':
                buf = 77;
                break; // right
            case 'D':
                buf = 75;
                break; // left
            default:
                buf = 0;
                break;
            }
        }
    }

    old.c_lflag |= ICANON;
    old.c_lflag |= ECHO;
    if (tcsetattr(STDIN_FILENO, TCSADRAIN, &old) < 0)
        perror("tcsetattr");
    return buf;
}

void PrintOptions(const string options[], short current, int n)
{
    system("clear");
    for (int i = 0; i < n; i++)
    {
        if (i == current)
        {
            textattr(32);
            cout << options[i] << '\n';
            textattr(0);
        }
        else
            cout << options[i] << '\n';
    }
}

// ----------------- Input Helpers -----------------
int GetPositiveInt(const string &prompt)
{
    int val;
    while (true)
    {
        cout << prompt;
        if (cin >> val && val >= 0)
            break;
        cout << "Invalid input. Please enter a positive number.\n";
        cin.clear();
        cin.ignore(numeric_limits<streamsize>::max(), '\n');
    }
    cin.ignore(numeric_limits<streamsize>::max(), '\n');
    return val;
}

string GetNonEmptyString(const string &prompt)
{
    string val;
    while (true)
    {
        cout << prompt;
        getline(cin, val);
        if (!val.empty())
            break;
        cout << "Input cannot be empty.\n";
    }
    return val;
}

void PrintOptions(char OptionsArray[][10], short CurrentOption)
{
    system("clear");
    for (short option = 0; option < 7; option++)
    {
        if (CurrentOption == option)
        {
            textattr(32);
            cout << OptionsArray[option] << '\n';
            textattr(0);
        }
        else
            cout << OptionsArray[option] << '\n';
    }
}

void DoAction(short option, DoublyLinkedList &list)
{
    system("clear");
    int id, age, existingId;
    string name;

    switch (option)
    {
    case 0: // Add Node
        id = GetPositiveInt("Enter Node ID: ");
        name = GetNonEmptyString("Enter Node Name: ");
        age = GetPositiveInt("Enter Node Age: ");
        list.AppendNode(id, name, age);
        break;
    case 1: // Display List
        list.DisplayAllNodes();
        break;
    case 2: // Display Reversed
        list.DisplayAllNodesReversed();
        break;
    case 3: // Delete by ID
        id = GetPositiveInt("Enter ID to delete: ");
        list.DeleteById(id);
        break;
    case 4: // Count Nodes
        cout << "Total nodes: " << list.CountNodes() << "\n";
        break;
    case 5: // Delete All
        list.DeleteAllNodes();
        cout << "All nodes deleted.\n";
        break;
    }
    cout << "\nPress Any Key To Return To Main Menu\n";
    getch();
}

// ----------------- Main Menu -----------------
int main()
{
    string options[] = {"Add Node", "Display List", "Display Reversed", "Delete by ID", "Count Nodes", "Delete All", "Exit"};
    const int nOptions = 7;
    short current = 0;
    DoublyLinkedList list;

    while (true)
    {
        PrintOptions(options, current, nOptions);
        char ch = getch();
        switch (ch)
        {
        case 72:
            current--;
            if (current < 0)
                current = nOptions - 1;
            PrintOptions(options, current, nOptions);
            break; // up
        case 80:
            current++;
            if (current >= nOptions)
                current = 0;
            PrintOptions(options, current, nOptions);
            break; // down
        case '\n':
            if (current == nOptions - 1)
            {
                system("clear");
                cout << "Exiting...\n";
                return 0;
            }
            DoAction(current, list);
            PrintOptions(options, current, nOptions);
            break;
        }
    }
}
