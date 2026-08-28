import { CheatSheetItem } from '@/types/simulator';

export const CHEAT_SHEET_ITEMS: CheatSheetItem[] = [
  // Aritmatika Dasar
  {
    id: "tambah",
    category: "Aritmatika Dasar",
    name: "Penjumlahan Manual (+)",
    syntax: "=sel1 + sel2",
    description: "Menjumlahkan nilai dua atau lebih sel secara langsung.",
    example: "=B2 + C2",
    useCase: "Menghitung total pengeluaran harian (Ongkos + Makan).",
    tips: "Gunakan untuk operasi sederhana. Untuk menjumlahkan rentang baris yang panjang, gunakan fungsi SUM."
  },
  {
    id: "kurang",
    category: "Aritmatika Dasar",
    name: "Pengurangan (-)",
    syntax: "=sel1 - sel2",
    description: "Mengurangkan nilai suatu sel dengan sel lainnya.",
    example: "=B2 - C2",
    useCase: "Menghitung sisa tabungan (Pemasukan - Pengeluaran).",
    tips: "Pastikan sel yang dikurangi memiliki format angka, bukan teks."
  },
  {
    id: "kali",
    category: "Aritmatika Dasar",
    name: "Perkalian (*)",
    syntax: "=sel1 * sel2",
    description: "Mengalikan dua nilai atau kuantitas dengan harga satuan.",
    example: "=B2 * C2",
    useCase: "Menghitung subtotal belanja (Jumlah Barang x Harga Satuan).",
    tips: "Simbol perkalian di Excel menggunakan tanda bintang (*), bukan huruf x."
  },
  {
    id: "bagi",
    category: "Aritmatika Dasar",
    name: "Pembagian (/)",
    syntax: "=sel1 / sel2",
    description: "Membagi nilai suatu sel atau menghitung rasio/persentase.",
    example: "=B2 / C2",
    useCase: "Menghitung harga rata-rata per porsi atau rasio persentase.",
    tips: "Simbol pembagian menggunakan garis miring (/)."
  },

  // Agregasi & Statistik
  {
    id: "sum",
    category: "Agregasi & Statistik",
    name: "SUM",
    syntax: "=SUM(number1, [number2], ...)",
    description: "Menjumlahkan seluruh angka dalam rentang sel yang dipilih.",
    example: "=SUM(C2:C6)",
    useCase: "Menghitung total seluruh anggaran pengeluaran bulanan.",
    tips: "Titik dua (:) berarti 'sampai dengan', contoh C2:C6 artinya dari C2 sampai C6."
  },
  {
    id: "average",
    category: "Agregasi & Statistik",
    name: "AVERAGE",
    syntax: "=AVERAGE(number1, [number2], ...)",
    description: "Menghitung nilai rata-rata (mean) dari sekumpulan sel numerik.",
    example: "=AVERAGE(C2:C5)",
    useCase: "Menghitung rata-rata nilai rapor ujian siswa.",
    tips: "Sel yang kosong atau berisi teks otomatis diabaikan dari perhitungan."
  },
  {
    id: "max",
    category: "Agregasi & Statistik",
    name: "MAX",
    syntax: "=MAX(number1, [number2], ...)",
    description: "Mencari angka terbesar/tertinggi dari rentang data.",
    example: "=MAX(B2:B7)",
    useCase: "Mencari tagihan listrik paling tinggi atau skor ujian terbaik.",
    tips: "Cocok dipadukan dengan MIN untuk mengetahui rentang nilai."
  },
  {
    id: "min",
    category: "Agregasi & Statistik",
    name: "MIN",
    syntax: "=MIN(number1, [number2], ...)",
    description: "Mencari angka terkecil/terendah dari rentang data.",
    example: "=MIN(B2:B7)",
    useCase: "Mencari pengeluaran terkecil atau waktu tempuh tercepat.",
    tips: "Hanya mengevaluasi data berbentuk angka."
  },
  {
    id: "count",
    category: "Agregasi & Statistik",
    name: "COUNT",
    syntax: "=COUNT(value1, [value2], ...)",
    description: "Menghitung jumlah sel yang HANYA berisi angka.",
    example: "=COUNT(C2:C10)",
    useCase: "Menghitung berapa siswa yang sudah memiliki nilai ujian.",
    tips: "Jika ingin menghitung sel berisi teks (nama orang, status), gunakan COUNTA."
  },
  {
    id: "counta",
    category: "Agregasi & Statistik",
    name: "COUNTA",
    syntax: "=COUNTA(value1, [value2], ...)",
    description: "Menghitung jumlah sel yang TIDAK KOSONG (berisi angka maupun teks).",
    example: "=COUNTA(B2:B6)",
    useCase: "Menghitung jumlah peserta yang terdaftar pada absensi.",
    tips: "Huruf 'A' di COUNTA artinya 'Count All' (semua yang terisi)."
  },

  // Olah Teks
  {
    id: "proper",
    category: "Olah Teks",
    name: "PROPER",
    syntax: "=PROPER(text)",
    description: "Mengubah huruf pertama setiap kata menjadi kapital, dan sisanya huruf kecil.",
    example: "=PROPER(A2)",
    useCase: "Merapikan penulisan nama orang (misal 'budi santoso' -> 'Budi Santoso').",
    tips: "Sangat berguna untuk membersihkan data input yang tidak beraturan."
  },
  {
    id: "upper",
    category: "Olah Teks",
    name: "UPPER",
    syntax: "=UPPER(text)",
    description: "Mengubah semua karakter dalam teks menjadi HURUF BESAR (KAPITAL).",
    example: "=UPPER(A2)",
    useCase: "Menstandarkan kode produk, plat nomor kendaraan, atau singkatan.",
    tips: "Gunakan LOWER jika ingin mengubah menjadi huruf kecil semua."
  },
  {
    id: "concat",
    category: "Olah Teks",
    name: "CONCAT / Simbol &",
    syntax: '=A2 & " " & B2 atau =CONCAT(A2, " ", B2)',
    description: "Menggabungkan dua atau lebih teks dari sel yang berbeda menjadi satu.",
    example: '=A2 & " " & B2',
    useCase: "Menggabungkan Nama Depan (Kolom A) dan Nama Belakang (Kolom B).",
    tips: 'Jangan lupa sisipkan spasi di antara tanda petik (" ") agar kata tidak menempel.'
  },
  {
    id: "left",
    category: "Olah Teks",
    name: "LEFT",
    syntax: "=LEFT(text, [num_chars])",
    description: "Mengambil sejumlah karakter tertentu dimulai dari sisi paling kiri teks.",
    example: "=LEFT(A2, 3)",
    useCase: "Mengambil 3 karakter pertama kode cabang dari ID karyawan (misal: 'JKT-01' -> 'JKT').",
    tips: "Gunakan RIGHT untuk mengambil dari sisi kanan, atau MID untuk mengambil dari tengah."
  },

  // Logika & Conditional
  {
    id: "if",
    category: "Logika & Keputusan",
    name: "IF",
    syntax: "=IF(logical_test, value_if_true, value_if_false)",
    description: "Menguji sebuah kondisi; menghasilkan satu nilai jika benar (TRUE) dan nilai lain jika salah (FALSE).",
    example: '=IF(C2>=75, "LULUS", "REMIDI")',
    useCase: "Menentukan kelulusan siswa berdasarkan batas KKM.",
    tips: "Teks hasil wajib diapit tanda kutip ganda (\"...\"). Angka tidak memerlukan kutip."
  },
  {
    id: "countif",
    category: "Logika & Keputusan",
    name: "COUNTIF",
    syntax: "=COUNTIF(range, criteria)",
    description: "Menghitung berapa banyak sel dalam sebuah rentang yang memenuhi satu syarat tertentu.",
    example: '=COUNTIF(C2:C7, "HADIR")',
    useCase: "Menghitung berapa kali seorang karyawan hadir dalam 1 bulan.",
    tips: "Kriteria teks seperti \"HADIR\" atau \">=75\" harus diapit tanda petik."
  },
  {
    id: "sumif",
    category: "Logika & Keputusan",
    name: "SUMIF",
    syntax: "=SUMIF(range, criteria, [sum_range])",
    description: "Menjumlahkan nilai-nilai dalam sebuah rentang sel yang hanya memenuhi kriteria tertentu.",
    example: '=SUMIF(B2:B7, "Makanan", C2:C7)',
    useCase: "Menghitung total pengeluaran khusus untuk kategori 'Makanan'.",
    tips: "Argumen pertama adalah rentang kategori, argumen kedua kriteria, argumen ketiga rentang angka yang dijumlahkan."
  },

  // Lookup & Referensi
  {
    id: "vlookup",
    category: "Lookup & Referensi",
    name: "VLOOKUP",
    syntax: "=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])",
    description: "Mencari nilai pada kolom paling kiri sebuah tabel, lalu mengambil data pada kolom ke-N di baris yang sama.",
    example: "=VLOOKUP(A2, E2:G6, 3, FALSE)",
    useCase: "Kasir toko: mencari harga barang otomatis berdasarkan Kode Barang.",
    tips: "Gunakan FALSE (atau 0) di akhir agar pencarian bersifat persis (Exact Match)."
  },
  {
    id: "xlookup",
    category: "Lookup & Referensi",
    name: "XLOOKUP",
    syntax: "=XLOOKUP(lookup_value, lookup_array, return_array)",
    description: "Fungsi pencarian modern pengganti VLOOKUP yang lebih fleksibel dan mudah digunakan.",
    example: "=XLOOKUP(A2, D2:D6, E2:E6)",
    useCase: "Mencari nomor telepon darurat karyawan berdasarkan nama.",
    tips: "XLOOKUP bisa mencari ke kiri maupun ke kanan tanpa perlu menghitung nomor kolom manual."
  }
];
