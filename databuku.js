// Pengolahan data toko buku "Pustaka Mhs"
const daftarBuku = [
  { judul: "Dasar Pemrograman Web", harga: 85000, stok: 12 },
  { judul: "Algoritma dan Logika", harga: 95000, stok: 0 },
  { judul: "Basis Data untuk Pemula", harga: 120000, stok: 5 },
  { judul: "Jaringan Komputer", harga: 110000, stok: 8 }
];
// Fungsi untuk memformat angka menjadi rupaiah
const formatRupiah = (angka) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(angka);

// Function untuk menghitung total nilai seluruh stok
function hitungTotalAset(buku) {
  let total = 0;
  for (let i = 0; i < buku.length; i++) {
    total += buku[i].harga * buku[i].stok;
  }
  return total;
}

// untuk mencetak setiap buku beserta keterangan stok
let jumlahHabis = 0;
for (let i = 0; i < daftarBuku.length; i++) {
  const b = daftarBuku[i];
  let keterangan;
  if (b.stok > 0) {
    keterangan = "(Tersedia)";
  } else {
    keterangan = "(Habis)";
    jumlahHabis++;
  }
  console.log(`${i + 1}. ${b.judul} - ${formatRupiah(b.harga)} - Stok: ${b.stok} ${keterangan}`);
}
// menampilkan total nilai aset dan jumlah buku yang habis
console.log("Total nilai aset: " + formatRupiah(hitungTotalAset(daftarBuku)));
console.log("Jumlah buku habis: " + jumlahHabis);