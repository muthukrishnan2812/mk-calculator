function calc(a, b, operator){
    switch(operator){
        case 'add':
            return a + b; // Added missing semicolon
        case 'sub':
            return a - b; // Added missing semicolon
        case 'mul': // Added missing colon
            return a * b; // Added missing semicolon
        case 'div':
            return a / b; // Added missing semicolon
        default:
            return 'invalid number'; // Changed 'invalid number' to be more contextually accurate
    }
}
export default calc;
