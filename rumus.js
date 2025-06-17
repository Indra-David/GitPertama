// rumus.js


function tambah(a, b) {
    return a + b;
}


function kurang(a, b) {
    return a - b;
}


function kali(a, b) {
    return a * b;
}


function bagi(a, b) {
    if (b === 0) {
        return "Error: Pembagian dengan nol tidak diizinkan.";
    }
    return a / b;
}


module.exports = {
    tambah,
    kurang,
    kali,
    bagi
};