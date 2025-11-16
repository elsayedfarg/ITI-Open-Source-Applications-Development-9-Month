#include <iostream>
using namespace std;

void textattr(int color)
{
    static const int ansi_map[16] =
    {
        30,34,32,36,31,35,33,37,90,94,92,96,91,95,93,97
    };
    if (color < 0) color = 0;
    if (color > 15) color = 15;
    cout << "\033[" << ansi_map[color] << "m";
}


void ReadArrayDataFromUser(int MyArray[3][3], int rows, int cols)
{
    for (int i = 0; i < rows; i++)
    {
        for (int j = 0; j < cols; j++)
        {
            cout << "Enter Array[" << i << "][" << j << "]: ";
            while (true)
            {
                if (!(cin >> MyArray[i][j]))
                {
                    cout << "Please enter a number: ";
                    cin.clear();
                    cin.ignore(50, '\n');
                }
                else
                    break;
            }
        }
    }
}

void printArrayWithRowSumsAndColumnAverages(int MyArray[3][3], int rows, int cols)
{
    cout << "\n\n";

    float columnSums[cols] = {0};

    // Print MyArray rows with their sums
    for (int i = 0; i < rows; i++)
    {
        int rowSum = 0;

        for (int j = 0; j < cols; j++)
        {
            cout << MyArray[i][j] << " ";
            rowSum += MyArray[i][j];
            columnSums[j] += MyArray[i][j];
        }

        textattr(14);
        cout << "| Sum = " << rowSum;
        textattr(7);
        cout << '\n';
    }

    // Print column averages
    cout << "\nColumn averages: ";
    textattr(11);
    for (int j = 0; j < cols; j++)
    {
        cout << columnSums[j] / rows << " ";
    }
    textattr(7);

    cout << "\n";
}

int main()
{
    int arr[3][3]= {};
    ReadArrayDataFromUser(arr,3,3);
    printArrayWithRowSumsAndColumnAverages(arr,3,3);

}
