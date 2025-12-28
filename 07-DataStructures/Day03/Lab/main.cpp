#include <iostream>
using namespace std;

int BinarySearch(int arr[], int size, int key)
{
    int start = 0, end = size - 1;
    while (start <= end)
    {
        int mid = (start + end) / 2;
        if (key == arr[mid])
        {
            return mid;
        }
        else if (key < arr[mid])
        {
            end = mid - 1;
        }
        else
        {
            start = mid + 1;
        }
    }
    return -1;
}

int RecursiveBinarySearch(int arr[], int key, int start, int end)
{
    if (start > end)
    {
        return -1;
    }
    int mid = (start + end) / 2;
    if (key == arr[mid])
    {
        return mid;
    }
    else if (key < arr[mid])
    {
        RecursiveBinarySearch(arr, key, start, mid - 1);
    }
    else
    {
        RecursiveBinarySearch(arr, key, mid + 1, end);
    }
}

int main()
{
    int arr[9] = {10, 20, 30, 40, 50, 60, 70, 80, 90};

    int index = BinarySearch(arr, 9, 50);
    cout << "Index: " << index << endl;
}