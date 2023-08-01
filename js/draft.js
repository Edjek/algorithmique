// 2023!
// Calcul factoriel
function factoriel(x) {
    let res = 1;
    for (let i = 1; i <= x; i++) {
        res = res * i;
    }
    return res;
}

console.log(factoriel(3));

// Recursivité
function Recursive(n) {
    if (n > 0) {
        return n + Recursive(n - 1);
    } else {
        return 0;
    }
}

console.log(Recursive(3));
