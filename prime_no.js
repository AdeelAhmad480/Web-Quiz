function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    if (number <= 3) {
      return true;
    }
    if (number % 2 === 0 || number % 3 === 0) {
      return false;
    }
  
    let i = 5;
    while (i * i <= number) {
      if (number % i === 0 || number % (i + 2) === 0) {
        return false;
      }
      i += 6;
    }
  
    return true;
  }
  
  function findPrimesInRange(start, end) {
    const primes = [];
  
    for (let i = start; i <= end; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
  
    return primes;
  }
  
  const startRange = 1;
  const endRange = 100;
  
  const primeNumbers = findPrimesInRange(startRange, endRange);
  console.log("Prime numbers between " + startRange + " and " + endRange + ":");
  console.log(primeNumbers);