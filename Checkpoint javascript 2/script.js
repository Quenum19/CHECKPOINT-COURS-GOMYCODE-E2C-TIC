// 1. Fonctions de manipulation de chaînes
// a. Inverser une chaîne

function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString("Bonjour"));

// b. Compter les caractères

function countCharacters(str) {
  return str.length;
}

console.log(countCharacters("Bonjour")); 

// c. Mettre les mots en majuscule

function capitalizeWords(sentence) {
  return sentence
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

console.log(capitalizeWords("bonjour tout le monde"));
________________________________________

// 2. Fonctions de tableau
// a. Rechercher le maximum et le minimum

function findMax(arr) {
  return Math.max(...arr);
}

function findMin(arr) {
  return Math.min(...arr);
}

console.log(findMax([1, 2, 3, 4, 5])); // 5
console.log(findMin([1, 2, 3, 4, 5])); // 1

// b. Somme d'un tableau

function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

console.log(sumArray([1, 2, 3, 4, 5]));

// c. Filtrer le tableau

function filterArray(arr, pairs) {
  return arr.filter(pairs);
}

// Exemple : Filtrer les nombres pairs
console.log(filterArray([1, 2, 3, 4, 5], num => num % 2 === 0));

________________________________________

// 3. Fonctions mathématiques
// a. Factorielle

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); 

// b. Vérification des nombres premiers

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrime(7));
console.log(isPrime(10));

// c. Suite de Fibonacci

function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib.slice(0, n);
}

console.log(fibonacci(10));

