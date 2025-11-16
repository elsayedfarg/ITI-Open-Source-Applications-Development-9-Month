#include <iostream>
#include <cstring>
using namespace std;

class BankAccount
{
private:
    int id;
    char name[10];
    double balance;

public:
    void SetId(int _id)
    {
        if (cin.fail())
        {
            cout << "Invalid input for ID. Setting to 0.\n";
            cin.clear();
            cin.ignore(10000, '\n');
            id = 0;
        }
        else if (_id < 0)
        {
            cout << "Invalid input for ID (negative not allowed). Setting to 0.\n";
            id = 0;
        }
        else
        {
            id = _id;
        }
    }

    int GetId()
    {
        return id;
    }

    void SetName(const char* _name)
    {
        strncpy(name, _name, sizeof(name) - 1);
        name[sizeof(name) - 1] = '\0';
    }

    char* GetName()
    {
        return name;
    }

    void SetBalance(double _balance)
    {
        if (cin.fail())
        {
            cout << "Invalid input for balance. Setting to 0.\n";
            cin.clear();
            cin.ignore(10000, '\n');
            balance = 0;
        }
        else if (_balance < 0)
        {
            cout << "Invalid input for balance (negative not allowed). Setting to 0.\n";
            balance = 0;
        }
        else
        {
            balance = _balance;
        }
    }

    double GetBalance()
    {
        return balance;
    }

    void Deposit(double _amount)
    {
        if (cin.fail())
        {
            cout << "Invalid input for deposit.\n";
            cin.clear();
            cin.ignore(10000, '\n');
            return;
        }
        else if (_amount <= 0)
        {
            cout << "Deposit amount must be positive.\n";
            return;
        }
        else
        {
            balance += _amount;
            cout << "Deposited successfully New balance: " << balance << endl;
        }
    }

    void Withdraw(double _amount)
    {
        if (cin.fail())
        {
            cout << "Invalid input for withdraw.\n";
            cin.clear();
            cin.ignore(10000, '\n');
            return;
        }
        else if (_amount <= 0)
        {
            cout << "Withdraw amount must be positive.\n";
            return;
        }
        else if (_amount > balance)
        {
            cout << "Insufficient balance Current balance: " << balance << endl;
            return;
        }
        else
        {
            balance -= _amount;
            cout << "Withdrawn successfully Remaining balance: " << balance << endl;
        }
    }

    void PrintAccount()
    {
        cout << "\n--- Bank Account Info ---\n";
        cout << "ID: " << id << endl;
        cout << "Name: " << name << endl;
        cout << "Balance: " << balance << endl;
    }
};

int main()
{
    BankAccount acc;
    int id;
    char name[10];
    double balance;

    cout << "Enter Account ID: ";
    cin >> id;
    acc.SetId(id);

    cout << "Enter Account Name (max 9 chars): ";
    cin >> name;
    acc.SetName(name);

    cout << "Enter Initial Balance: ";
    cin >> balance;
    acc.SetBalance(balance);

    acc.PrintAccount();

    double amount;
    cout << "\nEnter deposit amount: ";
    cin >> amount;
    acc.Deposit(amount);

    cout << "\nEnter withdrawal amount: ";
    cin >> amount;
    acc.Withdraw(amount);

    cout << "\nFinal account details:";
    acc.PrintAccount();

    return 0;
}
