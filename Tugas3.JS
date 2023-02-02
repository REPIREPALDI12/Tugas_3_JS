function data(x) {
    console.log(`Nama: ${x}`);
    x = `${x} REPI`;
    return x;
}
const anggota = data('REPALDI');
console.log(`Nama lengkap: ${anggota}`);