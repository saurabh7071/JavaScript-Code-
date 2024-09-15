#include <iostream>
using namespace std;

// Define reusable a for digits
string a[5] = {
    "   ", // 0
    " _ ", // 1
    "  |", // 2
    "|  ", // 3
    "| |"  // 4
};

// Define a for each digit
string digits[10][5] = {
    {a[1], a[4], a[0], a[4], a[1]}, // for 0
    {a[0], a[2], a[0], a[2], a[0]}, // for 1
    {a[1], a[2], a[1], a[3], a[1]}, // for 2
    {a[1], a[2], a[1], a[2], a[1]}, // for 3
    {a[0], a[4], a[1], a[2], a[0]}, // for 4
    {a[1], a[3], a[1], a[2], a[1]}, // for 5
    {a[1], a[3], a[1], a[4], a[1]}, // for 6
    {a[1], a[2], a[0], a[2], a[0]}, // for 7
    {a[1], a[4], a[1], a[4], a[1]}, // for 8
    {a[1], a[4], a[1], a[2], a[1]}  // for 9 
};

int main() {
    string num;
    cout << "Enter a number: ";
    // taking the number as input in a string 
    cin >> num;
    
    // Going through the a of each digit
    for(int i = 0; i < 5; i++) {
        // Extracting each digit and printing its corresponding a
        for(int j = 0; j < num.length(); j++) {
            // Converting the character digit to an integer
            int digit = num[j] - '0';
            // Printing the segment and giving spaces between a 
            cout << digits[digit][i] << " ";
        }
        cout << endl;
    }
    return 0;
}