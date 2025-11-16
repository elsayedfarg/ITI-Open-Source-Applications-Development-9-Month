#include <iostream>

using namespace std;

void gotoxy(int row, int col)
{
    cout << "\033[" << row << ";" << col << "H";
}

void PrintMagicBox(int Size)
{
    int row = 1;
    int col = (Size / 2) + 1;
    int spacing = 3;

    for (int num = 1; num <= Size * Size; num++)
    {
        if(num>1 && (num-1)%Size!=0)
        {
            row-= 1;
            col-= 1;

        }
        else if(num>1 && (num-1)%Size==0)
        {
            row+=1;
        }
        if (row < 1)
            row = Size;
        if(col<1)
            col=Size;

        gotoxy(row, col*spacing);
        cout << num;

    }
}

int main()
{
    PrintMagicBox(3);
}
