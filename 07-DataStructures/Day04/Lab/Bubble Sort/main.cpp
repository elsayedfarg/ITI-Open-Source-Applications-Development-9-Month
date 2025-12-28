#include <iostream>
using namespace std;

void BubbleSort(int arr[], int size)
{
    int counter = 0;
    for (int i = 0; i < size - 1; i++)
    {
        for (int j = 0; j < size - i; j++)
        {
            if (arr[j] > arr[j + 1])
            {
                swap(arr[j], arr[j + 1]);
            }
        }
    }
}

int main()
{
    int arr[5] = {10, 8, 9, 4, 2};
    BubbleSort(arr, 5);

    for (int i = 0; i < 5; i++)
    {
        cout << arr[i] << " ";
    }
}