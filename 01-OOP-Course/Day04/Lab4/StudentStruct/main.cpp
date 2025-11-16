#include <iostream>

using namespace std;

struct stStudent
{
    int id;
    char name[10]= {};
    int age;
};

void ReadtStudentData(stStudent &student)
{
    cout<<"Id: ";
    cin>>student.id;

    cout<<"name: ";
    cin>>student.name;

    cout<<"age: ";
    cin>>student.age;
}

void PrintStudentData(stStudent student)
{
    cout<<"ID: "<<student.id<<'\n';
    cout<<"Name: "<<student.name<<'\n';
    cout<<"Age: "<<student.age<<'\n';
}

int main()
{
    stStudent StudentArray[3];

    for(int i=0; i<3; i++)
    {
        cout<<"Enter student "<<i+1<<" Data\n\n";
        ReadtStudentData(StudentArray[i]);
    }

    for(int i=0; i<3; i++)
    {
        cout<<"Student "<<i+1<<" Data\n\n";
        PrintStudentData(StudentArray[i]);
    }
}
