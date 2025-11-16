#include <iostream>

using namespace std;

int main()
{
//    int* row0=new int[4];
//    int* row1=new int[4];
//    int* row2=new int[4];
    int **TwoD=new int*[3];

    for(int i=0;i<3;i++)
    {
        TwoD[i]=new int[4];
    }

    for(short FirstArray=0;FirstArray<3;FirstArray++)
    {
        for(short SecondArray=0;SecondArray<4;SecondArray++)
        {
            cout<<"Enter Arr["<<FirstArray<<"]["<<SecondArray<<"] : ";
            cin>>TwoD[FirstArray][SecondArray];
        }
    }

    for(short i=0;i<3;i++)
    {
        delete [] TwoD[i];
    }
    delete []TwoD;
}
