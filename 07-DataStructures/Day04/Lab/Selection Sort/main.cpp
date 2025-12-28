#include <iostream>
using namespace std;

int FindMinIndex(int arr[], int size, int startPoint)
{
    int minIndex = startPoint;
    for (int i = startPoint + 1; i < size; i++)
    {
        if (arr[i] < arr[minIndex])
        {
            minIndex = i;
        }
    }
    return minIndex;
}

void SelectionSort(int arr[], int size)
{
    for (int i = 0; i < size - 1; i++)
    {
        int minIndex = FindMinIndex(arr, size, i);
        swap(arr[i], arr[minIndex]);
    }
}

int main()
{
    int arr[5] = {2, 4, 1, 3, 0};

    SelectionSort(arr, 5);

    for (int i = 0; i < 5; i++)
        cout << arr[i] << " ";
}