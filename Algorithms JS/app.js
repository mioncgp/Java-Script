// Big O Rule Book
// Rule #1: Worst Case
// Rule #2: Remove Constants
// Rule #3: Different terms for inputs
// Rule #4: Drop Non Dominants

// When calculating Big O we always think about the worst case - Rule N1
// When calculating Big O we drop consonants because when input scales they do not really matter - Rule N2
// When calculating Bug O always pay attention to inputs. Example: a function has 2 parameters(arguments)
// and inside of the function there are two loops for each input, Big O will be n + n or O(n + n)
// If a function has nested loops Big O becomes O(n * n) or O(n^2). O(n^2) - Quadratic Time Rule N3
//  We worry about the most important dominant term and scalability. In case of O(n + n^2) we drop n as it a non-dominant and when the input scales it would not matter
// if a situation is O(n^3) it most likely to turn out that the code is inefficient

// The heap and the stack
// The heap is usually where we store variables 
// The stack is where we usueally keep track of our function calls
//  What causes Space complexity:
// - Variables
// - DS
// - Functions calls
// - Allocations