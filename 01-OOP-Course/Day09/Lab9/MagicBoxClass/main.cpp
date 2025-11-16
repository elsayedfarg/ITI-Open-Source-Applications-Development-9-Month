#include <iostream>

using namespace std;

void gotoxy(int row, int col)
{
    cout << "\033[" << row << ";" << col << "H";
}

class MagicBox
{
private:
    int Size;
    int Row;
    int Col;
    int Spacing;
public:
    MagicBox(int _size)
    {
        Size=_size;
        Row=1;
        Col=(Size/2)+1;
        Spacing=3;
        Size=3;
    }

    void PrintMagicBox()
    {
        for (int num = 1; num <= Size * Size; num++)
        {
            if(num>1 && (num-1)%Size!=0)
            {
                Row-= 1;
                Col-= 1;

            }
            else if(num>1 && (num-1)%Size==0)
            {
                Row+=1;
            }
            if (Row < 1)
                Row = Size;
            if(Col<1)
                Col=Size;

            gotoxy(Row, Col*Spacing);
            cout << num;
        }
    }
};

int main()
{
    MagicBox m(3);

    m.PrintMagicBox();
}
