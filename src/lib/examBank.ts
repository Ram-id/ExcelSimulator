import { ExamData, ExamQuestion, TableColumn, TableRow } from '@/types/simulator';

export const EXAMS: ExamData[] = [
  {
    id: 'exam_ch1',
    title: 'Ujian Bab 1: Aritmatika Dasar',
    chapterId: 1,
    description: 'Uji kemampuan dasar Anda dalam penjumlahan, pengurangan, perkalian, dan pembagian di Excel.',
    totalPoints: 100,
    passingScore: 70,
    questions: [
      {
        id: 1,
        chapterId: 1,
        type: 'multiple_choice',
        question: 'Manakah simbol yang digunakan untuk melakukan operasi perkalian di Excel?',
        options: ['x', '*', '/', '#'],
        correctAnswer: '*',
        explanation: 'Di Excel, tanda bintang (*) digunakan untuk perkalian.',
        points: 20
      },
      {
        id: 2,
        chapterId: 1,
        type: 'multiple_choice',
        question: 'Setiap formula di Excel harus diawali dengan tanda apa?',
        options: ['+', '=', '@', '-'],
        correctAnswer: '=',
        explanation: 'Semua formula di Excel harus dimulai dengan tanda sama dengan (=).',
        points: 20
      },
      {
        id: 3,
        chapterId: 1,
        type: 'formula',
        question: 'Hitung total biaya belanja buah-buahan ini. Tulis formula untuk mengalikan Harga per Kg dengan Jumlah Kg untuk Apel.',
        columns: [
          { key: 'item', label: 'Buah', letter: 'A' },
          { key: 'price', label: 'Harga per Kg', letter: 'B' },
          { key: 'qty', label: 'Jumlah Kg', letter: 'C' },
          { key: 'total', label: 'Total Harga', letter: 'D' }
        ],
        rows: [
          { rowNumber: 1, values: { item: 'Buah', price: 'Harga per Kg', qty: 'Jumlah Kg', total: 'Total Harga' } },
          { rowNumber: 2, values: { item: 'Apel', price: 25000, qty: 3, total: '' } },
          { rowNumber: 3, values: { item: 'Jeruk', price: 15000, qty: 2, total: '' } }
        ],
        targetCell: 'D2',
        correctAnswer: 75000,
        acceptedFormulas: ['=B2*C2', '=C2*B2'],
        explanation: 'Untuk mendapatkan total harga Apel, kalikan harga per kg di B2 dengan jumlah kg di C2.',
        points: 20
      },
      {
        id: 4,
        chapterId: 1,
        type: 'formula',
        question: 'Hitung sisa uang saku bulanan Andi. Tulis formula untuk mengurangi Total Pengeluaran dari Uang Saku.',
        columns: [
          { key: 'desc', label: 'Keterangan', letter: 'A' },
          { key: 'amount', label: 'Jumlah (Rp)', letter: 'B' }
        ],
        rows: [
          { rowNumber: 1, values: { desc: 'Keterangan', amount: 'Jumlah (Rp)' } },
          { rowNumber: 2, values: { desc: 'Uang Saku', amount: 500000 } },
          { rowNumber: 3, values: { desc: 'Total Pengeluaran', amount: 350000 } },
          { rowNumber: 4, values: { desc: 'Sisa Uang', amount: '' } }
        ],
        targetCell: 'B4',
        correctAnswer: 150000,
        acceptedFormulas: ['=B2-B3'],
        explanation: 'Kurangi pengeluaran di B3 dari total uang saku di B2.',
        points: 20
      },
      {
        id: 5,
        chapterId: 1,
        type: 'fill_value',
        question: 'Jika sel A1 berisi angka 10 dan sel B1 berisi angka 5, berapa hasil dari formula =A1/B1 ?',
        correctAnswer: 2,
        explanation: 'Pembagian 10 dibagi 5 menghasilkan 2.',
        points: 20
      }
    ]
  },
  {
    id: 'exam_ch2',
    title: 'Ujian Bab 2: Statistik & Agregasi',
    chapterId: 2,
    description: 'Uji pemahaman Anda tentang fungsi SUM, AVERAGE, MIN, MAX, dan COUNT.',
    totalPoints: 100,
    passingScore: 70,
    questions: [
      {
        id: 6,
        chapterId: 2,
        type: 'multiple_choice',
        question: 'Fungsi apa yang digunakan untuk mencari nilai rata-rata dari sekumpulan data?',
        options: ['SUM', 'MAX', 'AVERAGE', 'COUNT'],
        correctAnswer: 'AVERAGE',
        explanation: 'Fungsi AVERAGE digunakan untuk menghitung nilai rata-rata aritmatika.',
        points: 20
      },
      {
        id: 7,
        chapterId: 2,
        type: 'multiple_choice',
        question: 'Fungsi COUNT digunakan untuk?',
        options: ['Menjumlahkan semua angka', 'Menghitung jumlah sel yang berisi angka', 'Mencari nilai tertinggi', 'Mencari nilai rata-rata'],
        correctAnswer: 'Menghitung jumlah sel yang berisi angka',
        explanation: 'COUNT hanya menghitung sel yang mengandung nilai numerik.',
        points: 20
      },
      {
        id: 8,
        chapterId: 2,
        type: 'formula',
        question: 'Hitung total gaji semua karyawan menggunakan fungsi yang tepat.',
        columns: [
          { key: 'name', label: 'Nama', letter: 'A' },
          { key: 'salary', label: 'Gaji', letter: 'B' }
        ],
        rows: [
          { rowNumber: 1, values: { name: 'Nama', salary: 'Gaji' } },
          { rowNumber: 2, values: { name: 'Budi', salary: 4000000 } },
          { rowNumber: 3, values: { name: 'Siti', salary: 4500000 } },
          { rowNumber: 4, values: { name: 'Joko', salary: 3500000 } },
          { rowNumber: 5, values: { name: 'Total Gaji', salary: '' } }
        ],
        targetCell: 'B5',
        correctAnswer: 12000000,
        acceptedFormulas: ['=SUM(B2:B4)'],
        explanation: 'Gunakan fungsi SUM untuk menjumlahkan rentang nilai gaji dari B2 hingga B4.',
        points: 20
      },
      {
        id: 9,
        chapterId: 2,
        type: 'formula',
        question: 'Berapa nilai ujian terendah di kelas ini? Gunakan fungsi yang sesuai.',
        columns: [
          { key: 'name', label: 'Nama', letter: 'A' },
          { key: 'score', label: 'Nilai', letter: 'B' }
        ],
        rows: [
          { rowNumber: 1, values: { name: 'Nama', score: 'Nilai' } },
          { rowNumber: 2, values: { name: 'Ali', score: 85 } },
          { rowNumber: 3, values: { name: 'Rina', score: 65 } },
          { rowNumber: 4, values: { name: 'Doni', score: 90 } },
          { rowNumber: 5, values: { name: 'Nilai Terendah', score: '' } }
        ],
        targetCell: 'B5',
        correctAnswer: 65,
        acceptedFormulas: ['=MIN(B2:B4)'],
        explanation: 'Gunakan fungsi MIN untuk mencari nilai terkecil pada rentang B2:B4.',
        points: 20
      },
      {
        id: 10,
        chapterId: 2,
        type: 'fill_value',
        question: 'Jika A1=5, A2=10, dan A3=Kosong, berapakah hasil dari =AVERAGE(A1:A3)?',
        correctAnswer: 7.5,
        explanation: 'Sel kosong diabaikan, sehingga rata-rata dihitung sebagai (5+10)/2 = 7.5.',
        points: 20
      }
    ]
  },
  {
    id: 'exam_ch3',
    title: 'Ujian Bab 3: Manipulasi Teks',
    chapterId: 3,
    description: 'Uji pemahaman Anda tentang fungsi teks seperti CONCATENATE, LEFT, RIGHT, MID, dan UPPER.',
    totalPoints: 100,
    passingScore: 70,
    questions: [
      {
        id: 11,
        chapterId: 3,
        type: 'multiple_choice',
        question: 'Fungsi mana yang bisa digunakan untuk menggabungkan dua teks atau lebih?',
        options: ['COMBINE', 'JOIN', 'CONCATENATE', 'MERGE'],
        correctAnswer: 'CONCATENATE',
        explanation: 'Fungsi CONCATENATE atau tanda ampersand (&) digunakan untuk menggabungkan teks.',
        points: 20
      },
      {
        id: 12,
        chapterId: 3,
        type: 'multiple_choice',
        question: 'Untuk mengubah semua huruf menjadi kapital, fungsi apa yang digunakan?',
        options: ['PROPER', 'CAPITAL', 'UPPER', 'LOWER'],
        correctAnswer: 'UPPER',
        explanation: 'UPPER mengubah semua huruf dalam teks menjadi huruf besar.',
        points: 20
      },
      {
        id: 13,
        chapterId: 3,
        type: 'formula',
        question: 'Gabungkan Nama Depan dan Nama Belakang untuk membentuk Nama Lengkap (tambahkan spasi di antaranya).',
        columns: [
          { key: 'first', label: 'Nama Depan', letter: 'A' },
          { key: 'last', label: 'Nama Belakang', letter: 'B' },
          { key: 'full', label: 'Nama Lengkap', letter: 'C' }
        ],
        rows: [
          { rowNumber: 1, values: { first: 'Nama Depan', last: 'Nama Belakang', full: 'Nama Lengkap' } },
          { rowNumber: 2, values: { first: 'Budi', last: 'Santoso', full: '' } }
        ],
        targetCell: 'C2',
        correctAnswer: 'Budi Santoso',
        acceptedFormulas: ['=CONCATENATE(A2, " ", B2)', '=A2&" "&B2', '=CONCAT(A2, " ", B2)'],
        explanation: 'Anda harus menggabungkan sel A2, spasi (" "), dan sel B2.',
        points: 20
      },
      {
        id: 14,
        chapterId: 3,
        type: 'formula',
        question: 'Ambil 3 karakter pertama dari Kode Produk untuk mendapatkan Kode Kategori.',
        columns: [
          { key: 'code', label: 'Kode Produk', letter: 'A' },
          { key: 'cat', label: 'Kode Kategori', letter: 'B' }
        ],
        rows: [
          { rowNumber: 1, values: { code: 'Kode Produk', cat: 'Kode Kategori' } },
          { rowNumber: 2, values: { code: 'ELK-9021', cat: '' } }
        ],
        targetCell: 'B2',
        correctAnswer: 'ELK',
        acceptedFormulas: ['=LEFT(A2, 3)'],
        explanation: 'Fungsi LEFT(teks, jumlah_karakter) mengambil karakter dari sisi kiri.',
        points: 20
      },
      {
        id: 15,
        chapterId: 3,
        type: 'fill_value',
        question: 'Berapa banyak karakter yang dihasilkan dari fungsi =LEN("Excel") ?',
        correctAnswer: 5,
        explanation: 'Kata "Excel" terdiri dari 5 karakter.',
        points: 20
      }
    ]
  },
  {
    id: 'exam_ch4',
    title: 'Ujian Bab 4: Logika & Keputusan',
    chapterId: 4,
    description: 'Uji kemampuan fungsi logika Anda, termasuk IF, AND, dan OR.',
    totalPoints: 100,
    passingScore: 70,
    questions: [
      {
        id: 16,
        chapterId: 4,
        type: 'multiple_choice',
        question: 'Struktur dasar fungsi IF adalah: =IF(kondisi, ..., ...). Apa argumen kedua dari fungsi IF?',
        options: ['Nilai jika kondisi SALAH', 'Kriteria pencarian', 'Rentang data', 'Nilai jika kondisi BENAR'],
        correctAnswer: 'Nilai jika kondisi BENAR',
        explanation: 'Strukturnya adalah =IF(logical_test, value_if_true, value_if_false).',
        points: 20
      },
      {
        id: 17,
        chapterId: 4,
        type: 'multiple_choice',
        question: 'Fungsi apa yang mengembalikan nilai TRUE HANYA JIKA semua argumennya bernilai TRUE?',
        options: ['OR', 'AND', 'IF', 'NOT'],
        correctAnswer: 'AND',
        explanation: 'Fungsi AND mengharuskan semua kondisi terpenuhi agar bernilai TRUE.',
        points: 20
      },
      {
        id: 18,
        chapterId: 4,
        type: 'formula',
        question: 'Tentukan Status kelulusan. Jika Nilai >= 75, maka "Lulus", jika tidak maka "Gagal".',
        columns: [
          { key: 'name', label: 'Nama', letter: 'A' },
          { key: 'score', label: 'Nilai', letter: 'B' },
          { key: 'status', label: 'Status', letter: 'C' }
        ],
        rows: [
          { rowNumber: 1, values: { name: 'Nama', score: 'Nilai', status: 'Status' } },
          { rowNumber: 2, values: { name: 'Dewi', score: 80, status: '' } }
        ],
        targetCell: 'C2',
        correctAnswer: 'Lulus',
        acceptedFormulas: ['=IF(B2>=75, "Lulus", "Gagal")', '=IF(B2>74, "Lulus", "Gagal")'],
        explanation: 'Fungsi IF menguji B2>=75, menghasilkan "Lulus" jika benar dan "Gagal" jika salah.',
        points: 20
      },
      {
        id: 19,
        chapterId: 4,
        type: 'formula',
        question: 'Berikan Diskon "Ya" jika Pelanggan adalah "VIP" ATAU Pembelian > 500000. Jika tidak, "Tidak".',
        columns: [
          { key: 'type', label: 'Tipe Pelanggan', letter: 'A' },
          { key: 'purchase', label: 'Total Pembelian', letter: 'B' },
          { key: 'discount', label: 'Dapat Diskon?', letter: 'C' }
        ],
        rows: [
          { rowNumber: 1, values: { type: 'Tipe Pelanggan', purchase: 'Total Pembelian', discount: 'Dapat Diskon?' } },
          { rowNumber: 2, values: { type: 'Reguler', purchase: 600000, discount: '' } }
        ],
        targetCell: 'C2',
        correctAnswer: 'Ya',
        acceptedFormulas: ['=IF(OR(A2="VIP", B2>500000), "Ya", "Tidak")', '=IF(OR(B2>500000, A2="VIP"), "Ya", "Tidak")'],
        explanation: 'Gunakan fungsi OR di dalam fungsi IF untuk mengecek dua kondisi di mana salah satu harus terpenuhi.',
        points: 20
      },
      {
        id: 20,
        chapterId: 4,
        type: 'fill_value',
        question: 'Jika =IF(10>5, 100, 200) dijalankan, berapakah hasilnya?',
        correctAnswer: 100,
        explanation: 'Kondisi 10>5 bernilai TRUE, sehingga nilai yang dikembalikan adalah 100.',
        points: 20
      }
    ]
  },
  {
    id: 'exam_ch5',
    title: 'Ujian Bab 5: Pencarian Data',
    chapterId: 5,
    description: 'Uji penguasaan Anda pada fungsi VLOOKUP, HLOOKUP, dan INDEX-MATCH.',
    totalPoints: 100,
    passingScore: 70,
    questions: [
      {
        id: 21,
        chapterId: 5,
        type: 'multiple_choice',
        question: 'Huruf "V" pada VLOOKUP singkatan dari apa?',
        options: ['Value', 'Vertical', 'Variable', 'Vector'],
        correctAnswer: 'Vertical',
        explanation: 'VLOOKUP mencari data secara vertikal, di kolom pertama dari suatu tabel.',
        points: 20
      },
      {
        id: 22,
        chapterId: 5,
        type: 'multiple_choice',
        question: 'Argumen keempat VLOOKUP adalah [range_lookup]. Apa yang harus diisi untuk pencarian persis sama (exact match)?',
        options: ['TRUE atau 1', 'FALSE atau 0', 'Kosongkan', 'ANY'],
        correctAnswer: 'FALSE atau 0',
        explanation: 'Gunakan FALSE atau 0 agar Excel mencari kecocokan yang persis sama.',
        points: 20
      },
      {
        id: 23,
        chapterId: 5,
        type: 'formula',
        question: 'Gunakan VLOOKUP untuk mencari Harga dari Kode Produk "B01" (sel A6) pada tabel harga.',
        columns: [
          { key: 'code', label: 'Kode', letter: 'A' },
          { key: 'price', label: 'Harga', letter: 'B' }
        ],
        rows: [
          { rowNumber: 1, values: { code: 'Kode', price: 'Harga' } },
          { rowNumber: 2, values: { code: 'A01', price: 10000 } },
          { rowNumber: 3, values: { code: 'B01', price: 20000 } },
          { rowNumber: 4, values: { code: 'C01', price: 30000 } },
          { rowNumber: 5, values: { code: '', price: '' } },
          { rowNumber: 6, values: { code: 'B01', price: '' } }
        ],
        targetCell: 'B6',
        correctAnswer: 20000,
        acceptedFormulas: ['=VLOOKUP(A6, A2:B4, 2, FALSE)', '=VLOOKUP("B01", A2:B4, 2, FALSE)', '=VLOOKUP(A6, A2:B4, 2, 0)'],
        explanation: 'VLOOKUP mencari "B01" di kolom A, dan mengembalikan kolom ke-2 yaitu 20000.',
        points: 20
      },
      {
        id: 24,
        chapterId: 5,
        type: 'formula',
        question: 'Gunakan fungsi HLOOKUP untuk mencari Diskon bulan Februari (sel C4) dari tabel Diskon Bulanan di atasnya.',
        columns: [
          { key: 'bulan', label: 'Bulan', letter: 'A' },
          { key: 'jan', label: 'Jan', letter: 'B' },
          { key: 'feb', label: 'Feb', letter: 'C' }
        ],
        rows: [
          { rowNumber: 1, values: { bulan: 'Bulan', jan: 'Jan', feb: 'Feb' } },
          { rowNumber: 2, values: { bulan: 'Diskon', jan: 10, feb: 15 } },
          { rowNumber: 3, values: { bulan: '', jan: '', feb: '' } },
          { rowNumber: 4, values: { bulan: 'Cari Feb', jan: '', feb: '' } }
        ],
        targetCell: 'C4',
        correctAnswer: 15,
        acceptedFormulas: ['=HLOOKUP("Feb", A1:C2, 2, FALSE)', '=HLOOKUP(C1, A1:C2, 2, FALSE)', '=HLOOKUP("Feb", A1:C2, 2, 0)'],
        explanation: 'HLOOKUP mencari secara horizontal di baris pertama dan mengambil data di baris ke-2.',
        points: 20
      },
      {
        id: 25,
        chapterId: 5,
        type: 'fill_value',
        question: 'Pada formula VLOOKUP(A2, C1:F10, 3, FALSE), kolom indeks keberapa yang akan dikembalikan hasilnya (A=1, B=2, dst dalam tabel C:F)? C adalah 1, D adalah 2. Kolom indeksnya bernilai?',
        correctAnswer: 3,
        explanation: 'Argumen ketiga adalah 3, berarti fungsi mengembalikan nilai di kolom ketiga dari rentang tabel referensi.',
        points: 20
      }
    ]
  },
  {
    id: 'exam_ch6',
    title: 'Ujian Bab 6: Analisis Bisnis',
    chapterId: 6,
    description: 'Uji kemampuan fungsi tingkat lanjut seperti COUNTIF, SUMIF, dan kalkulasi bisnis dasar.',
    totalPoints: 100,
    passingScore: 70,
    questions: [
      {
        id: 26,
        chapterId: 6,
        type: 'multiple_choice',
        question: 'Fungsi mana yang digunakan untuk menjumlahkan nilai sel jika memenuhi kriteria tertentu?',
        options: ['SUM', 'IFSUM', 'SUMIF', 'COUNTA'],
        correctAnswer: 'SUMIF',
        explanation: 'SUMIF digunakan untuk menjumlahkan data berdasarkan satu kriteria.',
        points: 20
      },
      {
        id: 27,
        chapterId: 6,
        type: 'multiple_choice',
        question: 'Jika ingin menghitung berapa kali kata "Lulus" muncul pada suatu kolom, fungsi apa yang tepat?',
        options: ['COUNT', 'COUNTA', 'COUNTIF', 'SUMIF'],
        correctAnswer: 'COUNTIF',
        explanation: 'COUNTIF menghitung jumlah sel yang memenuhi suatu kriteria teks/angka tertentu.',
        points: 20
      },
      {
        id: 28,
        chapterId: 6,
        type: 'formula',
        question: 'Hitung total Penjualan yang HANYA dilakukan di wilayah "Jakarta".',
        columns: [
          { key: 'region', label: 'Wilayah', letter: 'A' },
          { key: 'sales', label: 'Penjualan', letter: 'B' }
        ],
        rows: [
          { rowNumber: 1, values: { region: 'Wilayah', sales: 'Penjualan' } },
          { rowNumber: 2, values: { region: 'Jakarta', sales: 500 } },
          { rowNumber: 3, values: { region: 'Bandung', sales: 300 } },
          { rowNumber: 4, values: { region: 'Jakarta', sales: 700 } },
          { rowNumber: 5, values: { region: 'Total JKT', sales: '' } }
        ],
        targetCell: 'B5',
        correctAnswer: 1200,
        acceptedFormulas: ['=SUMIF(A2:A4, "Jakarta", B2:B4)', '=SUMIF(A2:A4, A2, B2:B4)'],
        explanation: 'SUMIF menjumlahkan kolom B hanya jika kolom A bernilai "Jakarta".',
        points: 20
      },
      {
        id: 29,
        chapterId: 6,
        type: 'formula',
        question: 'Hitung ada berapa transaksi yang jumlahnya LEBIH DARI 100.',
        columns: [
          { key: 'trx', label: 'ID Transaksi', letter: 'A' },
          { key: 'amount', label: 'Jumlah', letter: 'B' }
        ],
        rows: [
          { rowNumber: 1, values: { trx: 'ID Transaksi', amount: 'Jumlah' } },
          { rowNumber: 2, values: { trx: 'T1', amount: 50 } },
          { rowNumber: 3, values: { trx: 'T2', amount: 150 } },
          { rowNumber: 4, values: { trx: 'T3', amount: 200 } },
          { rowNumber: 5, values: { trx: 'Jml > 100', amount: '' } }
        ],
        targetCell: 'B5',
        correctAnswer: 2,
        acceptedFormulas: ['=COUNTIF(B2:B4, ">100")'],
        explanation: 'Gunakan COUNTIF dengan kriteria ">100" pada rentang jumlah transaksi.',
        points: 20
      },
      {
        id: 30,
        chapterId: 6,
        type: 'fill_value',
        question: 'Harga Beli Rp 10.000, Harga Jual Rp 15.000. Berapa Rupiah profit yang didapatkan untuk 1 barang?',
        correctAnswer: 5000,
        explanation: 'Profit = Harga Jual - Harga Beli (15.000 - 10.000 = 5.000).',
        points: 20
      }
    ]
  },
  {
    id: 'exam_final',
    title: 'Ujian Akhir Komprehensif',
    chapterId: 0,
    description: 'Evaluasi akhir mengukur semua kemampuan Anda dari dasar hingga fungsi bisnis Excel.',
    totalPoints: 200,
    passingScore: 140,
    questions: [
      {
        id: 41,
        chapterId: 0,
        type: 'multiple_choice',
        question: 'Simbol dolar ($) pada formula seperti $A$1 berfungsi untuk?',
        options: ['Format mata uang', 'Mengunci referensi sel (Absolute Reference)', 'Menandai error', 'Komentar formula'],
        correctAnswer: 'Mengunci referensi sel (Absolute Reference)',
        explanation: 'Tanda dolar mengunci referensi kolom dan/atau baris saat di-copy ke sel lain.',
        points: 20
      },
      {
        id: 42,
        chapterId: 0,
        type: 'multiple_choice',
        question: 'Jika muncul error #DIV/0!, apa penyebabnya?',
        options: ['Teks dimasukkan dalam fungsi hitung angka', 'Membagi sebuah angka dengan nol atau sel kosong', 'Kolom terlalu sempit', 'Fungsi tidak ditemukan'],
        correctAnswer: 'Membagi sebuah angka dengan nol atau sel kosong',
        explanation: 'Error tersebut berarti Division by Zero (pembagian dengan angka nol).',
        points: 20
      },
      {
        id: 43,
        chapterId: 0,
        type: 'formula',
        question: 'Hitung total pengeluaran untuk Biaya Listrik selama 3 bulan.',
        columns: [
          { key: 'month', label: 'Bulan', letter: 'A' },
          { key: 'cost', label: 'Listrik (Rp)', letter: 'B' }
        ],
        rows: [
          { rowNumber: 1, values: { month: 'Bulan', cost: 'Listrik (Rp)' } },
          { rowNumber: 2, values: { month: 'Jan', cost: 300000 } },
          { rowNumber: 3, values: { month: 'Feb', cost: 250000 } },
          { rowNumber: 4, values: { month: 'Mar', cost: 350000 } },
          { rowNumber: 5, values: { month: 'Total', cost: '' } }
        ],
        targetCell: 'B5',
        correctAnswer: 900000,
        acceptedFormulas: ['=SUM(B2:B4)'],
        explanation: 'Jumlahkan rentang B2:B4 dengan SUM.',
        points: 20
      },
      {
        id: 44,
        chapterId: 0,
        type: 'formula',
        question: 'Tentukan apakah stok barang "Cukup" (jika Stok >= 10) atau "Kurang" (jika Stok < 10).',
        columns: [
          { key: 'item', label: 'Barang', letter: 'A' },
          { key: 'stock', label: 'Stok', letter: 'B' },
          { key: 'status', label: 'Status', letter: 'C' }
        ],
        rows: [
          { rowNumber: 1, values: { item: 'Barang', stock: 'Stok', status: 'Status' } },
          { rowNumber: 2, values: { item: 'Buku', stock: 5, status: '' } }
        ],
        targetCell: 'C2',
        correctAnswer: 'Kurang',
        acceptedFormulas: ['=IF(B2>=10, "Cukup", "Kurang")', '=IF(B2<10, "Kurang", "Cukup")'],
        explanation: 'Fungsi IF menguji stok di B2 untuk menentukan status.',
        points: 20
      },
      {
        id: 45,
        chapterId: 0,
        type: 'formula',
        question: 'Gunakan VLOOKUP untuk mencari Tarif berdasarkan Golongan di sel A5 dari Tabel Tarif.',
        columns: [
          { key: 'gol', label: 'Golongan', letter: 'A' },
          { key: 'tarif', label: 'Tarif', letter: 'B' }
        ],
        rows: [
          { rowNumber: 1, values: { gol: 'Golongan', tarif: 'Tarif' } },
          { rowNumber: 2, values: { gol: 'A', tarif: 15000 } },
          { rowNumber: 3, values: { gol: 'B', tarif: 20000 } },
          { rowNumber: 4, values: { gol: '', tarif: '' } },
          { rowNumber: 5, values: { gol: 'B', tarif: '' } }
        ],
        targetCell: 'B5',
        correctAnswer: 20000,
        acceptedFormulas: ['=VLOOKUP(A5, A2:B3, 2, FALSE)', '=VLOOKUP("B", A2:B3, 2, FALSE)', '=VLOOKUP(A5, A2:B3, 2, 0)'],
        explanation: 'VLOOKUP mencari nilai Golongan di kolom A dan mengambil Tarif di kolom ke-2.',
        points: 20
      },
      {
        id: 46,
        chapterId: 0,
        type: 'formula',
        question: 'Gunakan SUMIF untuk menghitung total Pendapatan khusus untuk Kategori "Minuman".',
        columns: [
          { key: 'cat', label: 'Kategori', letter: 'A' },
          { key: 'rev', label: 'Pendapatan', letter: 'B' }
        ],
        rows: [
          { rowNumber: 1, values: { cat: 'Kategori', rev: 'Pendapatan' } },
          { rowNumber: 2, values: { cat: 'Makanan', rev: 50000 } },
          { rowNumber: 3, values: { cat: 'Minuman', rev: 25000 } },
          { rowNumber: 4, values: { cat: 'Minuman', rev: 30000 } },
          { rowNumber: 5, values: { cat: 'Total Mnm', rev: '' } }
        ],
        targetCell: 'B5',
        correctAnswer: 55000,
        acceptedFormulas: ['=SUMIF(A2:A4, "Minuman", B2:B4)'],
        explanation: 'Jumlahkan kolom Pendapatan bila Kategorinya "Minuman".',
        points: 20
      },
      {
        id: 47,
        chapterId: 0,
        type: 'formula',
        question: 'Gunakan fungsi teks untuk mengambil 4 karakter terakhir dari Nomor Seri untuk dijadikan Kode PIN.',
        columns: [
          { key: 'sn', label: 'No. Seri', letter: 'A' },
          { key: 'pin', label: 'Kode PIN', letter: 'B' }
        ],
        rows: [
          { rowNumber: 1, values: { sn: 'No. Seri', pin: 'Kode PIN' } },
          { rowNumber: 2, values: { sn: 'SNX-9938-1234', pin: '' } }
        ],
        targetCell: 'B2',
        correctAnswer: '1234',
        acceptedFormulas: ['=RIGHT(A2, 4)'],
        explanation: 'Fungsi RIGHT mengambil karakter dari ujung kanan teks.',
        points: 20
      },
      {
        id: 48,
        chapterId: 0,
        type: 'formula',
        question: 'Hitung nilai rata-rata ulangan siswa ini menggunakan fungsi yang tepat.',
        columns: [
          { key: 'mapel', label: 'Mata Pelajaran', letter: 'A' },
          { key: 'score', label: 'Nilai', letter: 'B' }
        ],
        rows: [
          { rowNumber: 1, values: { mapel: 'Mata Pelajaran', score: 'Nilai' } },
          { rowNumber: 2, values: { mapel: 'Matematika', score: 80 } },
          { rowNumber: 3, values: { mapel: 'IPA', score: 90 } },
          { rowNumber: 4, values: { mapel: 'IPS', score: 85 } },
          { rowNumber: 5, values: { mapel: 'Rata-rata', score: '' } }
        ],
        targetCell: 'B5',
        correctAnswer: 85,
        acceptedFormulas: ['=AVERAGE(B2:B4)'],
        explanation: 'Fungsi AVERAGE digunakan untuk merata-rata nilai.',
        points: 20
      },
      {
        id: 49,
        chapterId: 0,
        type: 'fill_value',
        question: 'Jika suatu sel diformat sebagai Percentage (Persentase) dan Anda mengetikkan angka 0.5 di dalamnya, nilai apa yang akan ditampilkan Excel?',
        correctAnswer: 50,
        explanation: 'Angka 0.5 setara dengan 50% di Excel.',
        points: 20
      },
      {
        id: 50,
        chapterId: 0,
        type: 'fill_value',
        question: 'Untuk =COUNT(A1:A5), jika ada 3 sel berisi angka, 1 sel berisi teks, dan 1 sel kosong, berapakah hasilnya?',
        correctAnswer: 3,
        explanation: 'Fungsi COUNT hanya menghitung sel yang mengandung angka.',
        points: 20
      }
    ]
  }
];
