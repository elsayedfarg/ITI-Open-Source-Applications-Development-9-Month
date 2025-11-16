#include <iostream>
#include <stack>
using namespace std;

int precedence(char ch)
{
    if (ch == '*' || ch == '/')
        return 2;
    else if (ch == '+' || ch == '-')
        return 1;
    else
        return 0;
}

int ApplyOperation(int a, int b, char op)
{
    if(op=='+') return a+b;
    else if(op=='-') return a-b;
    else if(op=='*') return a*b;
    else if(op=='/') return a/b;
    else return 0;
}

int main()
{
    stack<int> operands;
    stack<char> operators;

    string expression;
    cout << "\nEnter the expression\n";
    getline(cin, expression); // 3+4*(2+5*1)/3

    for (int i = 0; i < expression.size(); i++)
    {
        char ch = expression[i];

        if (ch >= '0' && ch <= '9')
        {
            operands.push(ch - '0');
        }
        else if (ch == '(')
        {
            operators.push(ch);
        }
        else if (ch == ')')
        {
            while (!operators.empty() && operators.top() != '(')
            {
                int num2 = operands.top();
                operands.pop();
                int num1 = operands.top();
                operands.pop();
                char op = operators.top();
                operators.pop();
                operands.push(ApplyOperation(num1, num2, op));
            }
            if (!operators.empty() && operators.top() == '(')
                operators.pop();
        }
        else if (ch == '+' || ch == '-' || ch == '*' || ch == '/')
        {
            while (!operators.empty() && precedence(operators.top()) >= precedence(ch) && operators.top() != '(')
            {
                int num2 = operands.top();
                operands.pop();
                int num1 = operands.top();
                operands.pop();
                char op = operators.top();
                operators.pop();
                operands.push(ApplyOperation(num1, num2, op));
            }
            operators.push(ch);
        }
    }

    while (!operators.empty())
    {
        int num2 = operands.top();
        operands.pop();
        int num1 = operands.top();
        operands.pop();
        char op = operators.top();
        operators.pop();
        operands.push(ApplyOperation(num1, num2, op));
    }

    cout << "Result: " << operands.top() << endl;
    return 0;
}
