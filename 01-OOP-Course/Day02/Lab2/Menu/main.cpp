#include <iostream>
#include <cstdlib>
#include <string>
#include <limits>

using namespace std;

void ClearScreen()
{
    system("clear");
}

void Pause()
{
    cout << "\nPress Enter to return to the main menu...";
    cin.ignore();
    cin.get();
}

void DisplayChoices()
{
    cout<<"1) Fibonacci\n";
    cout<<"2) Factorial\n";
    cout<<"3) Reverse\n";
    cout<<"4) Summation\n";
    cout<<"5) Grade\n";
    cout<<"6) Exponent\n";
    cout<<"7) EvenOrOdd\n";
    cout<<"8) CountStringWordsAndLetters\n";
    cout<<"9) Exit\n";
}

int ValidateInput()
{
    int Input=0;
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

//===============================================  Fibonacci ===============================================//

void PrintFibonacci(int index)
{
    int prev1=1,prev2=0,result=0;
    cout<<"\n\nFibonacci Series : ";
    cout<<"1   ";
    for(int i=1; i<=index; i++)
    {
        result=prev1+prev2;
        cout<<result<<"   ";
        prev2=prev1;
        prev1=result;
    }
    cout<<'\n';
}

void DisplayFibonacciScreen()
{
    ClearScreen();
    int index=0;
    cout<<"Enter the stop index: ";
    index=ValidateInput();
    PrintFibonacci(index);
    Pause();
}

//===============================================  Fibonacci ===============================================//

//===============================================  Factorial ===============================================//

void PrintFactorial(int number)
{
    long long result=number;
    for(int i=1; i<number; i++)
    {
        result*=i;
    }
    cout<<'\n'<<number<<" Factorial is: "<<result<<'\n';
}

void DisplayFactorialScreen()
{
    ClearScreen();
    cout<<"Enter a number to compute its factorial: ";
    int number=ValidateInput();
    PrintFactorial(number);
    Pause();
}

//===============================================  Factorial ===============================================//

//===============================================  Reverse ===============================================//

void PrintReversedNumber(int number)
{
    // 1237
    int remainder=0,num2=0;
    while(number>0)
    {
        remainder=number%10;//7
        number/=10;//123
        num2=num2*10+remainder;
    }
    cout<<num2;
}

void DisplayReverseNumberScreen()
{
    ClearScreen();
    cout<<"Enter a number to reverse it: ";
    int number=ValidateInput();
    PrintReversedNumber(number);
    Pause();
}

//===============================================  Reverse ===============================================//

//===============================================  Summation ===============================================//

void DisplaySummationScreen()
{
    ClearScreen();
    int number=0;
    int sum=0;
    for(int i=0; i<5; i++)
    {
        cout<<"Enter Number "<<i+1<<" : ";
        number=ValidateInput();
        sum+=number;
    }
    cout<<"Sum = "<<sum;
    Pause();
}

//===============================================  Summation ===============================================//

//===============================================  Grade ===============================================//

void DisplayGradeScreen()
{
    ClearScreen();
    int Degree=0;
    cout<<"Enter your Degree(Between 0 and 100):";
    while (true)
    {
        if (!(cin >> Degree))
        {
            cout << "Please enter a number: ";
            cin.clear();
            cin.ignore(50, '\n');
        }
        else if (Degree < 0)
        {
            cout << "Please enter a positive number: ";
        }
        else if(Degree>100)
        {
            cout << "Degree must be less than or equal 100: ";
        }
        else
        {
            break;
        }
    }

    if(Degree>=85)
    {
        cout<<"A\n";
    }
    else if(Degree>=75 && Degree<85)
    {
        cout<<"B\n";
    }
    else if(Degree>=65 && Degree<75)
    {
        cout<<"C\n";
    }
    else if(Degree>=50 && Degree <65)
    {
        cout<<"D\n";
    }
    else
    {
        cout<<"Fail\n";
    }
    Pause();
}

//===============================================  Grade ===============================================//

//===============================================  Exponent ===============================================//

void DisplayExponentScreen()
{
    ClearScreen();
    int base=0,exponent=0;
    int result=1;
    cout<<"Enter the base: ";
    base=ValidateInput();

    cout<<"Enter the exponent: ";
    exponent=ValidateInput();
    for(int i=0; i<exponent; i++)
    {
        result*=base;
    }
    cout<<"Reuslt is: "<<result;
    Pause();
}

//===============================================  Exponent ===============================================//

void PrintEvenOrOdd(int number)
{
    if(number%2==0)
        cout<<"\nEven\n";
    else
        cout<<"\nOdd\n";
}

void DisplayEvenOrOddScreen()
{
    ClearScreen();
    cout<<"Enter a number to check even or odd: ";
    int number=ValidateInput();

    PrintEvenOrOdd(number);
    Pause();
}

string ReadString()
{
    string s1 = "";
    cout << "Enter Your String:\n";
    cin.ignore(numeric_limits<streamsize>::max(), '\n');
    getline(cin, s1);
    return s1;
}

void PrintEachLetterInWord(string word,int &numberOfLetters)
{
    cout<<"\nWord Letters\n";
    for(int i=0; i<word.length(); i++)
    {
        cout<<word[i]<<"    ";
        numberOfLetters++;
    }
    cout<<'\n';
}

void PrintEachWordInString(string str)
{
    int numberOfWords=0;
    int numberOfLetters=0;
    string delimiter=" ";
    int pos=0;
    string word="";
    while((pos=str.find(delimiter))!=string::npos)
    {
        word=str.substr(0,pos);
        if(word!="")
        {
            cout<<"Word Is: "<<word<<'\n';
            numberOfWords++;
            PrintEachLetterInWord(word,numberOfLetters);
            cout<<'\n';
        }
        str.erase(0,pos+delimiter.length());
    }
    if(str!="")
    {
        numberOfWords++;
        cout<<"Word Is: "<<str<<'\n';
        PrintEachLetterInWord(str,numberOfLetters);
        cout<<'\n';
    }
    cout<<"\n Total number of words = "<<numberOfWords<<'\n';
    cout<<"\n Total number of letters = "<<numberOfLetters<<'\n';
}

void DisplayCountStringWordsAndLettersScreen()
{
    ClearScreen();
    string str=ReadString();
    cout<<'\n';
    PrintEachWordInString(str);
    Pause();
}

int main()
{
    short choice=0;
    do
    {
        ClearScreen();
        DisplayChoices();
        cout<<"\nEnter your choice: ";
        if (!(cin >> choice))
        {
            cout << "Please enter a number: ";
            cin.clear();
            cin.ignore(50, '\n');
            continue;
        }

        switch(choice)
        {
        case 1:
            DisplayFibonacciScreen();
            break;
        case 2:
            DisplayFactorialScreen();
            break;
        case 3:
            DisplayReverseNumberScreen();
            break;
        case 4:
            DisplaySummationScreen();
            break;
        case 5:
            DisplayGradeScreen();
            break;
        case 6:
            DisplayExponentScreen();
            break;
        case 7:
            DisplayEvenOrOddScreen();
            break;
        case 8:
            DisplayCountStringWordsAndLettersScreen();
            break;
        case 9:
            ClearScreen();
            cout << "Exiting program...\n";
            break;
        default:
            ClearScreen();
            cout << "Please enter a correct choice.\n";
            Pause();
        }
    }
    while (choice != 9);
}
