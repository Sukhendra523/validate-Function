function validateField(value, type) {
    switch (type) {
        case 'amount':
            return /^\d+(\.\d{1,2})?$/.test(value) 
                ? { valid: true }
                : { valid: false, error: 'Invalid input. Please enter a valid amount with up to 2 decimal places.' };
        
        case 'alphaNumericSpecial':
            return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]+$/.test(value) 
                ? { valid: true }
                : { valid: false, error: 'Invalid input. Only special characters not allowed alone. Include letters and numbers too.' };
        
        case 'numeric':
            return /^\d+$/.test(value) 
                ? { valid: true }
                : { valid: false, error: 'Invalid input. Please enter only numeric characters.' };
        
        case 'percentage':
            return /^(100(\.00?)?|\d{1,2}(\.\d{1,2})?)$/.test(value) 
                ? { valid: true }
                : { valid: false, error: 'Invalid input. Please enter a percentage with up to 2 decimal places.' };
        
        case 'checkbox':
            return value ? { valid: true } : { valid: false, error: 'Please select at least one option.' };
        
        case 'dropdown':
            return value ? { valid: true } : { valid: false, error: 'Please select an option from the drop-down menu.' };
        
        case 'alphaSpecial':
            return /^[A-Za-z@$!%*?&#]+$/.test(value) 
                ? { valid: true }
                : { valid: false, error: 'Invalid input. Only alpha or special characters allowed.' };
        
        case 'alphaNumeric':
            return /^[A-Za-z0-9]+$/.test(value) 
                ? { valid: true }
                : { valid: false, error: 'Invalid input. Please enter a combination of alphabetic and numeric characters only.' };
        
        case 'alphaColonNumber':
            return /^[A-Za-z]+:[A-Za-z0-9]+$/.test(value) 
                ? { valid: true }
                : { valid: false, error: 'Invalid format. Enter only Alpha : Alpha or Alpha : number.' };
        
        case 'timeFormat':
            return /^([01]?\d|2[0-3]):[0-5]\d$/.test(value) 
                ? { valid: true }
                : { valid: false, error: 'Invalid input. Please enter correct time format - 24 hrs or 12 hours.' };
        
        case 'alphaOnly':
            return /^[A-Za-z]+$/.test(value) 
                ? { valid: true }
                : { valid: false, error: 'Invalid input. Please enter only Alpha characters.' };
        
        case 'romanNumerals':
            return /^[IVXLCDM]+$/.test(value) 
                ? { valid: true }
                : { valid: false, error: 'Invalid input. Please enter only Roman numerals.' };
        
        case 'percentageAmount':
            return /^(100(\.00?)?|\d{1,2}(\.\d{1,2})?) \d+(\.\d{1,2})?$/.test(value) 
                ? { valid: true }
                : { valid: false, error: 'Invalid input. Please enter both a percentage and an amount (up to two decimal places).' };
        
        case 'numericDot':
            return /^\d+(\.\d+)?$/.test(value) 
                ? { valid: true }
                : { valid: false, error: 'Invalid input. Alphabets not allowed.' };
        
        case 'percentageStrict':
            return /^(100|\d{1,2}(\.\d{1,2})?)$/.test(value) && value >= 0 && value <= 100 
                ? { valid: true }
                : { valid: false, error: 'Invalid input. Please enter a percentage between 0 and 100.' };
        
        case 'numericHyphen':
            return /^\d+-\d+$/.test(value) 
                ? { valid: true }
                : { valid: false, error: 'Invalid input. Please enter only numeric and -.' };
        
        case 'date':
            return /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/.test(value) 
                ? { valid: true }
                : { valid: false, error: 'Invalid input. Please enter a valid date in the format MM/DD/YYYY.' };
        
        default:
            return { valid: false, error: 'Unknown validation type.' };
    }
}

// Example Usage
console.log(validateField('25.50', 'amount')); // { valid: true }
console.log(validateField('Test@123', 'alphaNumericSpecial')); // { valid: true }
console.log(validateField('12345', 'numeric')); // { valid: true }
console.log(validateField('99.99', 'percentage')); // { valid: true }
console.log(validateField('', 'checkbox')); // { valid: false, error: 'Please select at least one option.' }
console.log(validateField('', 'dropdown')); // { valid: false, error: 'Please select an option from the drop-down menu.' }
console.log(validateField('ABC:123', 'alphaColonNumber')); // { valid: true }
console.log(validateField('12/31/2024', 'date')); // { valid: true }
console.log(validateField('31/12/2024', 'date')); // { valid: false, error: 'Invalid input. Please enter a valid date in the format MM/DD/YYYY.' }
