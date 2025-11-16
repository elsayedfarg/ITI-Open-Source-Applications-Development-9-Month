#include <iostream>
#include <string.h>
using namespace std;

class Person
{
private:
    int id;
    char name[10];
    int age;
public:
    Person(int _id,char* _name,int _age)
    {
        id=_id;
        strcpy(name,_name);
        age=_age;
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

    void SetName(char *_name)
    {
        strcpy(name,_name);
    }

    void SetAge(int _age)
    {
        if (cin.fail())
        {
            cout << "Invalid input for id. Setting to 0.\n";
            cin.clear();
            cin.ignore(10000, '\n');
            age = 0;
        }
        else if (_age < 0)
        {
            cout << "Invalid input for id (negative is not allowed). Setting to 0.\n";
            age = 0;
        }
        else
        {
            age = _age;
        }
    }

    int GetId()
    {
        return id;
    }

    char* GetName()
    {
        return name;
    }

    int GetAge()
    {
        return age;
    }

    void Print()
    {
        cout<<id<<"::"<<name<<"::"<<age;
    }
};

class Employee:public Person
{
private:
    double salary;
public:
    Employee(int _id,char* _name,int _age,double _salary):Person(_id,_name,_age)
    {
        salary=_salary;
    }

    void SetSalary(int _salary)
    {
        salary=_salary;
    }

    double GetSalary()
    {
        return salary;
    }

    void Print()
    {
        Person::Print();
        cout<<"::"<<salary<<'\n';
    }
};

class Student:public Person
{
private:
    int grade;
public:
    Student(int _id,char* _name,int _age,int _grade):Person(_id,_name,_age)
    {
        grade=_grade;
    }
    void SetGrade(int _grade)
    {
        grade=_grade;
    }

    int GetGrade()
    {
        return grade;
    }

    void Print()
    {
        Person::Print();
        cout<<"::"<<grade<<'\n';
    }
};

int main()
{
    Student s(1,"sayed",22,4);
    s.Print();
}
