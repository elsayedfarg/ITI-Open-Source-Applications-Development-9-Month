#include <iostream>
using namespace std;

//===================================== Linear(Sequential Search) =====================================//
int LinearSearch(int arr[], int size, int key)
{
    for (int i = 0; i < size; i++)
    {
        if (arr[i] == key)
        {
            return i;
        }
    }
    return -1;
}

int RecursiveLinearSearch(int arr[], int size, int key, int i = 0)
{
    if (i == size)
        return -1;

    if (arr[i] == key)
        return i;

    return RecursiveLinearSearch(arr, size, key, i + 1);
}
//===================================== Linear(Sequential Search) =====================================//

//===================================== Binary Search =====================================//

int BinarySearch(int arr[], int size, int key)
{
    int start = 0;
    int end = size - 1;
    int mid = (start + end) / 2;

    while (start <= end)
    {
        mid = (start + end) / 2;
        if (arr[mid] == key)
            return mid;
        else if (arr[mid] < key)
            start = mid + 1;
        else
            end = mid - 1;
    }
    return -1;
}

int RecursiveBinarySearch(int arr[], int size, int key, int start, int end)
{
    int mid = (start + end) / 2;
    if (start > end)
        return -1;
    if (arr[mid] == key)
        return mid;
    else if (arr[mid] < key)
        return RecursiveBinarySearch(arr, size, key, mid + 1, end);
    else
        return RecursiveBinarySearch(arr, size, key, start, mid - 1);
}

//===================================== Binary Search =====================================//

//===================================== Hash Table =====================================//

//===================================== Hash Table =====================================//

int main()
{
    //===================================== Linear(Sequential Search) =====================================//
    // int arr[5] = {4, 2, 6, 16, 3};
    // int result = LinearSearch(arr, 5, 6);
    // if (result == -1)
    //     cout << "\nElement not found\n";
    // else
    //     cout << "\nElement found at index: " << result << '\n';

    // int RecursiveResult = RecursiveLinearSearch(arr, 5, 16);
    // if (RecursiveResult == -1)
    //     cout << "\nElement not found\n";
    // else
    //     cout << "\nElement found at index: " << RecursiveResult << '\n';
    //===================================== Linear(Sequential Search) =====================================//

    //===================================== Binary Search =====================================//
    // int arr[5] = {2, 4, 8, 10, 12};
    // int result = BinarySearch(arr, 5, 4);
    // if (result == -1)
    //     cout << "\nElement not found\n";
    // else
    //     cout << "\nElement found at index: " << result << '\n';

    // int arr[5] = {2, 4, 8, 10, 12};
    // int RecursiveResult = RecursiveBinarySearch(arr, 5, 12, 0, 4);
    // if (RecursiveResult == -1)
    //     cout << "\nElement not found\n";
    // else
    //     cout << "\nElement found at index: " << RecursiveResult << '\n';
    //===================================== Binary Search =====================================//

    //===================================== Hash Table =====================================//

    //===================================== Hash Table =====================================//
}