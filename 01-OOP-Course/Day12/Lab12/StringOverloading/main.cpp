#include <iostream>
#include <cstring>
#include <cctype>
using namespace std;

class String
{
private:
    char* Str;
    int Length;

public:
    String()
    {
        Length = 0;
        Str = new char[1];
        Str[0] = '\0';
    }

    String(int size)
    {
        Length = size;
        Str = new char[Length + 1];
        Str[0] = '\0';
    }

    String(char* s)
    {
        Length = strlen(s);
        Str = new char[Length + 1];
        strcpy(Str, s);
    }

    String(String& s)
    {
        Length = s.Length;
        Str = new char[Length + 1];
        strcpy(Str, s.Str);
    }

    ~String()
    {
        delete[] Str;
    }

    String& operator=(String& s)
    {
        delete[] Str;
        Length = s.Length;
        Str = new char[Length + 1];
        strcpy(Str, s.Str);
        return *this;
    }

    String operator+(String& s)
    {
        String result;
        result.Length = Length + s.Length;
        delete[] result.Str;
        result.Str = new char[result.Length + 1];

        strcpy(result.Str, Str);
        strcat(result.Str, s.Str);

        return result;
    }

    bool operator>(String& s)
    {
        return strcmp(Str, s.Str) > 0;
    }
    bool operator<(String& s)
    {
        return strcmp(Str, s.Str) < 0;
    }
    bool operator>=(String& s)
    {
        return strcmp(Str, s.Str) >= 0;
    }
    bool operator<=(String& s)
    {
        return strcmp(Str, s.Str) <= 0;
    }

    void ToUpper()
    {
        for (int i = 0; i < Length; i++)
            Str[i] = toupper(Str[i]);
    }

    void ToLower()
    {
        for (int i = 0; i < Length; i++)
            Str[i] = tolower(Str[i]);
    }

    void Print()
    {
        cout << Str;
    }

    char* GetStr()
    {
        return Str;
    }
    int GetLength()
    {
        return Length;
    }
};

int main()
{
    String s;
    String s1(10);
    String s2("Sayed");
    String s3(s2);

    cout << "s2: ";
    s2.Print();
    cout << "\ns3 copy constructor call to s2): ";
    s3.Print();

    s1 = s2;
    cout << "\n\ns1 = s2: ";
    s1.Print();

    String s4(" Ahmed");
    String s5 = s2 + s4;
    cout << "\n\ns2 + s4: ";
    s5.Print();

    cout << "\n\nComparisons:\n";
    cout << "s2 > s4 ? " << (s2 > s4) << '\n';
    cout << "s2 < s4 ? " << (s2 < s4) << '\n';
    cout << "s2 >= s4 ? " << (s2 >= s4) << '\n';
    cout << "s2 <= s4 ? " << (s2 <= s4) << '\n';

    cout << "\nBefore ToUpper: ";
    s5.Print();
    s5.ToUpper();
    cout << "\nAfter ToUpper: ";
    s5.Print();
    s5.ToLower();
    cout << "\nAfter ToLower: ";
    s5.Print();

    return 0;
}
