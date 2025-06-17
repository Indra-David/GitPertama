// menu.js

const operasi = require('./rumus.js');


const readlineSync = require('readline-sync');


function jalankanKalkulator() {
    let angka1, angka2;
    let operator;

    // --- Mengambil Input dari Pengguna ---
    // Pastikan input adalah angka yang valid
    angka1 = parseFloat(readlineSync.question("Masukkan angka pertama: "));
    if (isNaN(angka1)) {
        console.log("Input tidak valid. Harap masukkan angka.");
        return; // Menghentikan fungsi jika input tidak valid
    }

    operator = readlineSync.question("Masukkan operator (+, -, *, /): ");

    angka2 = parseFloat(readlineSync.question("Masukkan angka kedua: "));
    if (isNaN(angka2)) {
        console.log("Input tidak valid. Harap masukkan angka.");
        return; // Menghentikan fungsi jika input tidak valid
    }

    let hasil;

    // --- Menggunakan switch case untuk memilih operasi ---
    switch (operator) {
        case '+':
            hasil = operasi.tambah(angka1, angka2);
            break;
        case '-':
            hasil = operasi.kurang(angka1, angka2);
            break;
        case '*':
            hasil = operasi.kali(angka1, angka2);
            break;
        case '/':
            hasil = operasi.bagi(angka1, angka2);
            break;
        default:
            hasil = "Operator tidak valid. Harap gunakan salah satu dari +, -, *, /.";
            break; // Penting untuk menambahkan break di default juga
    }

  
    console.log(`\nHasil: ${angka1} ${operator} ${angka2} = ${hasil}`);
}


jalankanKalkulator();