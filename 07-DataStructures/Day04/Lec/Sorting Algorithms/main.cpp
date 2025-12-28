#include <iostream>
using namespace std;

void Print(int arr[], int size)
{
    for (int i = 0; i < size; i++)
    {
        cout << arr[i] << " ";
    }
    cout << '\n';
}

//===================================== Selection Sort =====================================//
void SelectionSort(int arr[], int size)
{
    int minIndex = 0;
    for (int i = 0; i < size - 1; i++)
    {
        minIndex = i;
        for (int j = i + 1; j < size; j++)
        {
            if (arr[j] < arr[minIndex])
            {
                minIndex = j;
            }
        }
        swap(arr[minIndex], arr[i]);
    }
}
//===================================== Selection Sort =====================================//

//===================================== Bubble Sort =====================================//

void BubbleSort(int arr[], int size)
{
    for (int i = 0; i < size - 1; i++)
    {
        for (int j = 0; j < size - i - 1; j++)
        {
            if (arr[j] > arr[j + 1])
            {
                swap(arr[j], arr[j + 1]);
            }
        }
    }
}

//===================================== Bubble Sort =====================================//

//===================================== Insertion Sort =====================================//

void InsertionSort(int arr[], int size)
{
    int key, j;
    for (int i = 1; i < size; i++)
    {
        key = arr[i];
        j = i - 1;
        while (j >= 0 && arr[j] > key)
        {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}

//===================================== Insertion Sort =====================================//

//===================================== Merge Sort =====================================//

void Merge(int arr[], int left, int middle, int right)
{
    int n1 = middle - left + 1;
    int n2 = right - middle;

    int *l = new int[n1];
    int *r = new int[n2];

    // Copy data to temporary arrays
    for (int i = 0; i < n1; i++)
        l[i] = arr[left + i];
    for (int j = 0; j < n2; j++)
        r[j] = arr[middle + 1 + j];

    int i = 0, j = 0, k = left;

    // Merge the arrays
    while (i < n1 && j < n2)
    {
        if (l[i] <= r[j])
            arr[k++] = l[i++];
        else
            arr[k++] = r[j++];
    }

    // Copy remaining elements
    while (i < n1)
        arr[k++] = l[i++];
    while (j < n2)
        arr[k++] = r[j++];

    delete[] l;
    delete[] r;
}

void MergeSort(int arr[], int left, int right)
{
    if (left < right)
    {
        int middle = left + (right - left) / 2;
        MergeSort(arr, left, middle);
        MergeSort(arr, middle + 1, right);
        Merge(arr, left, middle, right);
    }
}

//===================================== Merge Sort =====================================//

//===================================== Quick Sort =====================================//

//===================================== Quick Sort =====================================//

int main()
{
    //===================================== Selection Sort =====================================//
    // int arr[6] = {60, 40, 50, 30, 10, 20};
    // Print(arr, 6);
    // SelectionSort(arr, 6);
    // Print(arr, 6);
    //===================================== Selection Sort =====================================//

    //===================================== Bubble Sort =====================================//
    // int arr[6] = {60, 40, 50, 30, 10, 20};
    // Print(arr, 6);
    // BubbleSort(arr, 6);
    // Print(arr, 6);
    //===================================== Bubble Sort =====================================//

    //===================================== Insertion Sort =====================================//
    // int arr[6] = {60, 40, 50, 30, 10, 20};
    // Print(arr, 6);
    // InsertionSort(arr, 6);
    // Print(arr, 6);
    //===================================== Insertion Sort =====================================//

    //===================================== Merge Sort =====================================//
    // int arr[6] = {60, 40, 50, 30, 10, 20};
    // Print(arr, 6);
    // MergeSort(arr, 0, 5);
    // Print(arr, 6);
    //===================================== Merge Sort =====================================//

    //===================================== Quick Sort =====================================//
    // int arr[6] = {60, 40, 50, 30, 10, 20};
    // Print(arr, 6);
    // MergeSort(arr, 0, 5);
    // Print(arr, 6);
    //===================================== Quick Sort =====================================//
}