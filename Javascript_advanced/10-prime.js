function countPrimeNumbers() {
    let count = 0;

    for (let i = 2; i <= 100; i++) {
        let isPrime = true;

        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            count++;
        }
    }
    return count;
}

function executeMultipleTimes(times) {
    let primeNumbers;
    const startTime = performance.now();

    for (let i = 0; i < times; i++) {
        primeNumbers = countPrimeNumbers();
    }

    const endTime = performance.now();

    const totalTime = (endTime - startTime);

    console.log("There are " + primeNumbers + " prime numbers from 2 to 100.");
    console.log("They will be calculated " + times + " times.");
    console.log("Execution time of calculating prime numbers " + times + " times was " + totalTime + " milliseconds.");
}

executeMultipleTimes(100);
