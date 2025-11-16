#include <iostream>
#include <string>

using namespace std;

string ReadString()
{
    string s1="";
    cout<<"Enter Your String:\n";
    getline(cin,s1);
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

int main()
{
    string str=ReadString();
    cout<<'\n';
    PrintEachWordInString(str);
}
