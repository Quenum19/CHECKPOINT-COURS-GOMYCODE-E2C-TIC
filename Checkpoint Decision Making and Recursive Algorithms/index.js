// Vérification d'une année bissextile
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return `${year} est une année bissextile.`;
    } else {
        return `${year} n'est pas une année bissextile.`;
    }
}

// Détermination du prix du billet
function ticketPrice(age) {
    if (age <= 12) {
        return "Le prix du billet est de 10 $.";
    } else if (age >= 13 && age <= 17) {
        return "Le prix du billet est de 15 $.";
    } else {
        return "Le prix du billet est de 20 $.";
    }
}

// Séquence de Fibonacci
function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Vérificateur de palindrome
function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    if (str.length <= 1) return true;
    if (str[0] !== str[str.length - 1]) return false;
    return isPalindrome(str.slice(1, -1));
}

// Exemples d'utilisation
console.log(isLeapYear(2024));
console.log(ticketPrice(15));
console.log(fibonacci(6));
console.log(isPalindrome("A man, a plan, a canal, Panama"));
