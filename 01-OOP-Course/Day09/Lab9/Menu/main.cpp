#include <iostream>
#include <termios.h>
#include <unistd.h>
#include <limits>
#include<string>
#include<stack>
using namespace std;


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

    // handle arrow keys
    if (buf == 27) // ESC
    {
        char seq[2];
        if (read(STDIN_FILENO, &seq[0], 1) == 0) buf = 27;
        if (read(STDIN_FILENO, &seq[1], 1) == 0) buf = 27;

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

void PrintOptions(char OptionsArray[][10],short CurrentOption)
{
    system("clear");
    for(short option=0; option<4; option++)
    {
        if(CurrentOption==option)
        {
            textattr(32);
            cout<<OptionsArray[option]<<'\n';
            textattr(0);
        }
        else
            cout<<OptionsArray[option]<<'\n';
    }
}

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

static stStudent StudentArray[2];
static int StudentCount = 0;
stack<stStudent>st;

void DoAction(short CurrentOption)
{
    system("clear");
    if (CurrentOption == 0)
    {
        cout << "\nReading new student list\n";

        for (int i = 0; i < 2; i++)
        {
            cout << "\nEnter student " << i + 1 << " Data\n\n";
            ReadtStudentData(StudentArray[i]);
            StudentCount++;
            st.push(StudentArray[i]);
        }
    }
    else if(CurrentOption == 1)
    {
        if(StudentCount==0)
        {
            cout<<"List is empty\n";
        }
        else
        {
            cout<<"\nDisplaying Users\n";
            for(int i=0;i<2;i++)
            {
                cout<<"id: "<<st.top().id<<" name: "<<st.top().name<<" age: "<<st.top().age<<'\n';
                st.pop();
            }
        }
    }
    else if(CurrentOption == 2)
    {
        if(StudentCount==0)
        {
            cout<<"List is empty\n";
        }
        else
        {
            cout<<"name: "<<st.top().name<<"\nid:"<<st.top().id<<"\nage:"<<st.top().age<<'\n';
        }
    }

    cin.ignore(numeric_limits<streamsize>::max(), '\n');// stop until i click any button
    cout<<"\nPress Any Key To Return To Main Menu\n";
    getch();
}


int main()
{
    char OptionsArr[4][10] = {"New", "Display", "Peak", "Exit"};

    char ch;
    short CurrentOption=0;
    do
    {
        PrintOptions(OptionsArr,CurrentOption);

        char ch=getch();
        int CharValue=ch;

        switch(CharValue)
        {
        case 72:
            CurrentOption--;
            if(CurrentOption<0)
                CurrentOption=3;
            PrintOptions(OptionsArr,CurrentOption);
            break;
        case 80:
            CurrentOption++;
            if(CurrentOption>3)
                CurrentOption=0;
            PrintOptions(OptionsArr,CurrentOption);
            break;
        case '\n'://(Enter) Key
            if (CurrentOption == 3)
            {
                system("clear");
                cout << "Exiting program...\n";
                return 0;
            }
            else
            {
                DoAction(CurrentOption);
                PrintOptions(OptionsArr,CurrentOption);
            }
            break;
        }
    }
    while(true);
}
