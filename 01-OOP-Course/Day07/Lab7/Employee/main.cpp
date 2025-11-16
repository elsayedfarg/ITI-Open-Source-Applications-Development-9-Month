#include <iostream>
#include <cstring>
using namespace std;

class Employee
{
private:
    int id;
    char name[10];
    int age;
    double salary;

public:
    Employee(int _id,char* _name)
    {
        id=_id;
        strcpy(name, _name);
    }

    Employee(int _id,char* _name,int _age):Employee(_id,_name)
    {
        age=_age;
    }

    Employee(int _id,char* _name,int _age,int _salary):Employee(_id,_name,_age)
    {
        salary=_salary;
    }

    void SetId(int _id)
    {
        if (cin.fail())
        {
            cout << "Invalid input for id. Setting to 0.\n";
            cin.clear();
            cin.ignore(10000, '\n');
            id = 0;
        }
        else if (_id < 0)
        {
            cout << "Invalid input for id (negative is not allowed). Setting to 0.\n";
            id = 0;
        }
        else
        {
            id = _id;
        }
    }

    int GetId()
    {
        return id;
    }

    void SetName(const char* _name)
    {
        strcpy(name, _name);
//        name[sizeof(name) - 1] = '\0';
    }

    char* GetName()
    {
        return name;
    }

    void SetAge(int _age)
    {
        if (cin.fail())
        {
            cout << "Invalid input for age. Setting to 18.\n";
            cin.clear();
            cin.ignore(10000, '\n');
            age = 18;
        }
        else if (_age < 0)
        {
            cout << "Invalid input for age (negative is not allowed). Setting to 18.\n";
            age = 18;
        }
        else if (_age < 18 || _age > 50)
        {
            cout << "Invalid input for age (must be between 18 and 50). Setting to 18.\n";
            age = 18;
        }
        else
        {
            age = _age;
        }
    }

    int GetAge()
    {
        return age;
    }

    void SetSalary(double _salary)
    {
        if (cin.fail())
        {
            cout << "Invalid input for salary. Setting to 5000.\n";
            cin.clear();
            cin.ignore(10000, '\n');
            salary = 5000;
        }
        else if (_salary < 0)
        {
            cout << "Invalid input for salary (negative is not allowed). Setting to 5000.\n";
            salary = 5000;
        }
        else if (_salary < 5000)
        {
            cout << "Invalid input for salary (must be 5000 or higher). Setting to 5000.\n";
            salary = 5000;
        }
        else
        {
            salary = _salary;
        }
    }

    double GetSalary()
    {
        return salary;
    }

    void PrintEmployee()
    {
        cout << "\n--- Employee Info ---\n";
        cout << "ID: " << id << endl;
        cout << "Name: " << name << endl;
        cout << "Age: " << age << endl;
        cout << "Salary: " << salary << endl;
    }
};

int main()
{
    Employee e(1,"sayed");
    int id, age;
    double salary;
    char name[10];

    cout << "Enter Employee ID: ";
    cin >> id;
    e.SetId(id);

    cout << "Enter Employee First Name (max 9 chars): ";
    cin >> name;
    e.SetName(name);

    cout << "Enter Employee Age: ";
    cin >> age;
    e.SetAge(age);

    cout << "Enter Employee Salary: ";
    cin >> salary;
    e.SetSalary(salary);

    e.PrintEmployee();

    return 0;
}
