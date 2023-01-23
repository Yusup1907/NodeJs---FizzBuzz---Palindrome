function fizzbuzz(num: number) {
    if (num === 0) {
        return 0;
    }
    if (num % 3 === 0 && num % 5 === 0) {
        return "fizzbuzz";
    }
    if (num % 3 === 0) {
        return "fizz";
    }
    if (num % 5 === 0) {
        return "buzz";
    }

    return num;
}

function runFizzbuzz(num: number) {
    for (let i = 0; i <= num; i++) {
        console.log(`number: ${i}: ${fizzbuzz(i)}`);
    }
}

runFizzbuzz(16);

export default fizzbuzz;