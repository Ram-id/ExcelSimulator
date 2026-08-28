import { LevelData, TrackData } from '@/types/simulator';

export const TRACKS: TrackData[] = [
  {
    id: 'aritmatika',
    number: 1,
    title: 'Aritmatika Dasar',
    description: 'Fondasi Excel: Operasi tambah, kurang, kali, dan bagi antar sel.',
    iconName: 'Calculator',
    levelIds: [1, 2, 3, 4]
  },
  {
    id: 'agregasi',
    number: 2,
    title: 'Agregasi & Statistik',
    description: 'Fungsi esensial untuk mengolah kumpulan angka (SUM, AVERAGE, MAX, MIN, COUNTA).',
    iconName: 'BarChart3',
    levelIds: [5, 6, 7, 8]
  },
  {
    id: 'teks',
    number: 3,
    title: 'Olah Teks (String)',
    description: 'Merapikan, menggabungkan, dan mengekstrak data teks otomatis.',
    iconName: 'Type',
    levelIds: [9, 10, 11]
  },
  {
    id: 'logika',
    number: 4,
    title: 'Logika & Keputusan',
    description: 'Membuat spreadsheet pintar dengan pengujian kondisi (IF, COUNTIF, SUMIF).',
    iconName: 'Cpu',
    levelIds: [12, 13, 14]
  },
  {
    id: 'lookup',
    number: 5,
    title: 'Pencarian (Lookup)',
    description: 'Mencocokkan dan menarik data antar tabel (VLOOKUP & XLOOKUP).',
    iconName: 'Search',
    levelIds: [15, 16]
  }
];

export const LEVELS: LevelData[] = [
  // ==========================================
  // TRACK 1: ARITMATIKA DASAR
  // ==========================================
  {
    id: 1,
    trackId: 'aritmatika',
    title: "Level 1: Penjumlahan Sederhana (+)",
    category: "Aritmatika Dasar",
    difficulty: "Mudah",
    scenario: "Kamu sedang mencatat pengeluaran harian. Pada hari Senin, kamu mengeluarkan uang untuk Makan (B2) dan Transportasi (C2).",
    objective: "Hitung total pengeluaran hari Senin pada sel D2 dengan menjumlahkan sel B2 dan C2.",
    theory: {
      concept: "Di Excel, semua rumus diawali tanda sama dengan (=). Untuk menjumlahkan dua sel secara langsung, gunakan simbol tanda tambah (+).",
      whyItMatters: "Ini adalah keterampilan paling mendasar untuk menghitung kalkulasi harian secara dinamis.",
      syntax: "=sel1 + sel2",
      example: "=B2 + C2"
    },
    targetCell: "D2",
    targetRowNumber: 2,
    targetColKey: "total",
    targetColLetter: "D",
    columns: [
      { key: "hari", label: "Hari", letter: "A" },
      { key: "makan", label: "Biaya Makan (Rp)", letter: "B" },
      { key: "transport", label: "Biaya Transport (Rp)", letter: "C" },
      { key: "total", label: "Total Harian (Rp)", letter: "D" },
    ],
    rows: [
      { rowNumber: 2, values: { hari: "Senin", makan: 25000, transport: 15000, total: "?" } },
      { rowNumber: 3, values: { hari: "Selasa", makan: 30000, transport: 15000, total: 45000 } },
      { rowNumber: 4, values: { hari: "Rabu", makan: 22000, transport: 15000, total: 37000 } },
    ],
    validFormulas: ["=B2+C2", "=C2+B2", "=SUM(B2:C2)", "=SUM(B2,C2)"],
    acceptedAnswers: [40000],
    hints: [
      "Awali rumus dengan tanda sama dengan (=).",
      "Ketik sel biaya makan (B2), tambahkan simbol +, lalu ketik sel biaya transport (C2).",
      "Format rumus: =B2+C2"
    ],
    explanation: "Rumus =B2+C2 akan menjumlahkan Rp25.000 + Rp15.000 sehingga menghasilkan total Rp40.000.",
    samplePlaceholder: "=B2+C2"
  },
  {
    id: 2,
    trackId: 'aritmatika',
    title: "Level 2: Perkalian Belanja (*)",
    category: "Aritmatika Dasar",
    difficulty: "Mudah",
    scenario: "Kamu sedang belanja sembako. Kamu membeli Beras sebanyak 5 Kg (B2) dengan harga satuan Rp14.000 per Kg (C2).",
    objective: "Hitung subtotal belanja beras pada sel D2 dengan mengalikan Jumlah (B2) dan Harga Satuan (C2).",
    theory: {
      concept: "Simbol perkalian di Excel menggunakan tanda bintang (*), bukan huruf 'x'.",
      whyItMatters: "Digunakan di hampir setiap nota kasir, invoice penjualan, dan laporan belanja.",
      syntax: "=sel1 * sel2",
      example: "=B2 * C2"
    },
    targetCell: "D2",
    targetRowNumber: 2,
    targetColKey: "subtotal",
    targetColLetter: "D",
    columns: [
      { key: "barang", label: "Nama Barang", letter: "A" },
      { key: "jumlah", label: "Jumlah (Kg/Pcs)", letter: "B" },
      { key: "harga", label: "Harga Satuan (Rp)", letter: "C" },
      { key: "subtotal", label: "Subtotal (Rp)", letter: "D" },
    ],
    rows: [
      { rowNumber: 2, values: { barang: "Beras Rojolele", jumlah: 5, harga: 14000, subtotal: "?" } },
      { rowNumber: 3, values: { barang: "Minyak Goreng", jumlah: 2, harga: 16000, subtotal: 32000 } },
      { rowNumber: 4, values: { barang: "Telur Ayam", jumlah: 3, harga: 28000, subtotal: 84000 } },
    ],
    validFormulas: ["=B2*C2", "=C2*B2", "=PRODUCT(B2:C2)", "=PRODUCT(B2,C2)"],
    acceptedAnswers: [70000],
    hints: [
      "Gunakan tanda bintang (*) untuk operasi perkalian.",
      "Ketik: =B2*C2",
      "Hasilnya adalah perkalian 5 x 14.000."
    ],
    explanation: "Rumus =B2*C2 mengalikan 5 kg x Rp14.000 = Rp70.000.",
    samplePlaceholder: "=B2*C2"
  },
  {
    id: 3,
    trackId: 'aritmatika',
    title: "Level 3: Pengurangan Anggaran (-)",
    category: "Aritmatika Dasar",
    difficulty: "Mudah",
    scenario: "Kamu ingin mengetahui sisa uang tabungan bulanan. Gaji pemasukanmu adalah Rp4.500.000 (B2) dan total pengeluaranmu adalah Rp3.200.000 (C2).",
    objective: "Hitung sisa tabungan pada sel D2 dengan mengurangi Pemasukan (B2) dengan Pengeluaran (C2).",
    theory: {
      concept: "Operasi pengurangan di Excel menggunakan tanda minus (-).",
      whyItMatters: "Penting untuk budgeting, menghitung laba rugi (Pemasukan - Modal), atau mencari selisih waktu/angka.",
      syntax: "=sel1 - sel2",
      example: "=B2 - C2"
    },
    targetCell: "D2",
    targetRowNumber: 2,
    targetColKey: "sisa",
    targetColLetter: "D",
    columns: [
      { key: "bulan", label: "Bulan", letter: "A" },
      { key: "masuk", label: "Pemasukan (Rp)", letter: "B" },
      { key: "keluar", label: "Pengeluaran (Rp)", letter: "C" },
      { key: "sisa", label: "Sisa Tabungan (Rp)", letter: "D" },
    ],
    rows: [
      { rowNumber: 2, values: { bulan: "Januari", masuk: 4500000, keluar: 3200000, sisa: "?" } },
      { rowNumber: 3, values: { bulan: "Februari", masuk: 4500000, keluar: 2900000, sisa: 1600000 } },
      { rowNumber: 4, values: { bulan: "Maret", masuk: 5000000, keluar: 3100000, sisa: 1900000 } },
    ],
    validFormulas: ["=B2-C2"],
    acceptedAnswers: [1300000],
    hints: [
      "Gunakan tanda minus (-) untuk pengurangan.",
      "Ketik: =B2-C2",
      "Pemasukan B2 (4.500.000) dikurangi Pengeluaran C2 (3.200.000)."
    ],
    explanation: "Rumus =B2-C2 menghasilkan sisa uang tabungan sebesar Rp1.300.000.",
    samplePlaceholder: "=B2-C2"
  },
  {
    id: 4,
    trackId: 'aritmatika',
    title: "Level 4: Pembagian Tagihan (/)",
    category: "Aritmatika Dasar",
    difficulty: "Mudah",
    scenario: "Kamu dan 4 temanmu (Total 5 orang) makan bersama di restoran dengan total tagihan Rp250.000 (B2).",
    objective: "Hitung biaya yang harus dibayar per orang pada sel D2 dengan membagi Total Tagihan (B2) dengan Jumlah Orang (C2).",
    theory: {
      concept: "Operasi pembagian di Excel menggunakan garis miring (/).",
      whyItMatters: "Biasa digunakan untuk menghitung split bill, harga rata-rata unit, dan menghitung persentase.",
      syntax: "=sel1 / sel2",
      example: "=B2 / C2"
    },
    targetCell: "D2",
    targetRowNumber: 2,
    targetColKey: "perOrang",
    targetColLetter: "D",
    columns: [
      { key: "acara", label: "Kegiatan", letter: "A" },
      { key: "tagihan", label: "Total Tagihan (Rp)", letter: "B" },
      { key: "orang", label: "Jumlah Orang", letter: "C" },
      { key: "perOrang", label: "Bayar Per Orang (Rp)", letter: "D" },
    ],
    rows: [
      { rowNumber: 2, values: { acara: "Makan Malam", tagihan: 250000, orang: 5, perOrang: "?" } },
      { rowNumber: 3, values: { acara: "Sewa Lapangan", tagihan: 180000, orang: 6, perOrang: 30000 } },
      { rowNumber: 4, values: { acara: "Beli Kado", tagihan: 200000, orang: 4, perOrang: 50000 } },
    ],
    validFormulas: ["=B2/C2"],
    acceptedAnswers: [50000],
    hints: [
      "Gunakan tanda garis miring (/) untuk pembagian.",
      "Ketik: =B2/C2",
      "Total Tagihan B2 dibagi Jumlah Orang C2."
    ],
    explanation: "Rumus =B2/C2 membagi Rp250.000 dengan 5 orang = Rp50.000 per orang.",
    samplePlaceholder: "=B2/C2"
  },

  // ==========================================
  // TRACK 2: AGREGASI & STATISTIK ESENSIAL
  // ==========================================
  {
    id: 5,
    trackId: 'agregasi',
    title: "Level 5: Menjumlah Cepat (SUM)",
    category: "Agregasi & Statistik",
    difficulty: "Mudah",
    scenario: "Kamu menyusun anggaran kebutuhan anak kost bulanan (Sewa Kost, Uang Makan, Listrik, Internet, Transportasi).",
    objective: "Hitung total seluruh pengeluaran bulanan pada sel C7 menggunakan rumus =SUM().",
    theory: {
      concept: "Fungsi SUM menjumlahkan rentang nilai dalam satu baris/kolom sekaligus tanpa perlu mengetik tanda + berkali-kali.",
      whyItMatters: "Fungsi Excel nomor 1 yang paling sering digunakan di dunia.",
      syntax: "=SUM(rentang_sel)",
      example: "=SUM(C2:C6)"
    },
    targetCell: "C7",
    targetRowNumber: 7,
    targetColKey: "biaya",
    targetColLetter: "C",
    columns: [
      { key: "no", label: "No", letter: "A" },
      { key: "pos", label: "Pos Pengeluaran", letter: "B" },
      { key: "biaya", label: "Anggaran (Rp)", letter: "C" },
    ],
    rows: [
      { rowNumber: 2, values: { no: 1, pos: "Sewa Kost", biaya: 900000 } },
      { rowNumber: 3, values: { no: 2, pos: "Makan & Minum", biaya: 1000000 } },
      { rowNumber: 4, values: { no: 3, pos: "Token Listrik", biaya: 150000 } },
      { rowNumber: 5, values: { no: 4, pos: "Paket Internet", biaya: 150000 } },
      { rowNumber: 6, values: { no: 5, pos: "Bensin Transport", biaya: 300000 } },
    ],
    totalLabelRow: {
      label: "Total Seluruh Anggaran:",
      colSpan: 2,
    },
    validFormulas: [
      "=SUM(C2:C6)",
      "=SUM(C2,C3,C4,C5,C6)",
      "=SUM(C2, C3, C4, C5, C6)"
    ],
    acceptedAnswers: [2500000],
    hints: [
      "Gunakan fungsi =SUM() dengan rentang dari C2 sampai C6.",
      "Tanda titik dua (:) artinya 'sampai'.",
      "Ketik: =SUM(C2:C6)"
    ],
    explanation: "Fungsi =SUM(C2:C6) menjumlahkan Rp900.000 + Rp1.000.000 + Rp150.000 + Rp150.000 + Rp300.000 = Rp2.500.000.",
    samplePlaceholder: "=SUM(C2:C6)"
  },
  {
    id: 6,
    trackId: 'agregasi',
    title: "Level 6: Rata-Rata Nilai (AVERAGE)",
    category: "Agregasi & Statistik",
    difficulty: "Mudah",
    scenario: "Guru ingin mengetahui nilai rata-rata ujian siswa bernama Adit dari 4 mata pelajaran (Matematika, B. Indonesia, IPA, B. Inggris).",
    objective: "Hitung nilai rata-rata pada sel C6 menggunakan rumus =AVERAGE().",
    theory: {
      concept: "Fungsi AVERAGE menjumlahkan seluruh angka dalam rentang lalu membaginya dengan banyaknya data secara otomatis.",
      whyItMatters: "Mengetahui performa tengah dari nilai raport, rata-rata penjualan harian, atau rata-rata suhu.",
      syntax: "=AVERAGE(rentang_sel)",
      example: "=AVERAGE(C2:C5)"
    },
    targetCell: "C6",
    targetRowNumber: 6,
    targetColKey: "nilai",
    targetColLetter: "C",
    columns: [
      { key: "no", label: "No", letter: "A" },
      { key: "mapel", label: "Mata Pelajaran", letter: "B" },
      { key: "nilai", label: "Nilai Ujian", letter: "C" },
    ],
    rows: [
      { rowNumber: 2, values: { no: 1, mapel: "Matematika", nilai: 80 } },
      { rowNumber: 3, values: { no: 2, mapel: "B. Indonesia", nilai: 90 } },
      { rowNumber: 4, values: { no: 3, mapel: "Ilmu Pengetahuan Alam (IPA)", nilai: 85 } },
      { rowNumber: 5, values: { no: 4, mapel: "Bahasa Inggris", nilai: 85 } },
    ],
    totalLabelRow: {
      label: "Rata-Rata Nilai Rapor:",
      colSpan: 2,
    },
    validFormulas: [
      "=AVERAGE(C2:C5)",
      "=AVERAGE(C2,C3,C4,C5)",
      "=AVERAGE(C2, C3, C4, C5)"
    ],
    acceptedAnswers: [85],
    hints: [
      "Gunakan fungsi =AVERAGE() diikuti rentang nilai dari baris 2 hingga 5.",
      "Ketik: =AVERAGE(C2:C5)",
      "Rumus ini akan menghitung (80 + 90 + 85 + 85) / 4."
    ],
    explanation: "Fungsi =AVERAGE(C2:C5) menghasilkan rata-rata 85.",
    samplePlaceholder: "=AVERAGE(C2:C5)"
  },
  {
    id: 7,
    trackId: 'agregasi',
    title: "Level 7: Nilai Terbesar (MAX)",
    category: "Agregasi & Statistik",
    difficulty: "Mudah",
    scenario: "Kamu memiliki riwayat tagihan listrik rumah dari bulan Januari hingga Juni dan ingin mencari bulan dengan tagihan termahal.",
    objective: "Cari tagihan listrik tertinggi pada sel B8 menggunakan rumus =MAX().",
    theory: {
      concept: "Fungsi MAX mengambil nilai angka paling tinggi dalam sebuah kelompok sel. Lawannya adalah MIN untuk mencari nilai terendah.",
      whyItMatters: "Memudahkan mencari rekor tertinggi, pengeluaran terbesar, atau penjualan puncak.",
      syntax: "=MAX(rentang_sel)",
      example: "=MAX(B2:B7)"
    },
    targetCell: "B8",
    targetRowNumber: 8,
    targetColKey: "tagihan",
    targetColLetter: "B",
    columns: [
      { key: "bulan", label: "Bulan", letter: "A" },
      { key: "tagihan", label: "Tagihan Listrik (Rp)", letter: "B" },
    ],
    rows: [
      { rowNumber: 2, values: { bulan: "Januari", tagihan: 180000 } },
      { rowNumber: 3, values: { bulan: "Februari", tagihan: 210000 } },
      { rowNumber: 4, values: { bulan: "Maret", tagihan: 350000 } },
      { rowNumber: 5, values: { bulan: "April", tagihan: 195000 } },
      { rowNumber: 6, values: { bulan: "Mei", tagihan: 240000 } },
      { rowNumber: 7, values: { bulan: "Juni", tagihan: 220000 } },
    ],
    totalLabelRow: {
      label: "Tagihan Termahal:",
      colSpan: 1,
    },
    validFormulas: ["=MAX(B2:B7)", "=MAX(B2,B3,B4,B5,B6,B7)", "=MAX(B2, B3, B4, B5, B6, B7)"],
    acceptedAnswers: [350000],
    hints: [
      "Gunakan fungsi =MAX().",
      "Rentang tagihan berada di kolom B dari baris 2 sampai 7.",
      "Ketik: =MAX(B2:B7)"
    ],
    explanation: "Fungsi =MAX(B2:B7) menemukan angka tertinggi yaitu Rp350.000 pada bulan Maret.",
    samplePlaceholder: "=MAX(B2:B7)"
  },
  {
    id: 8,
    trackId: 'agregasi',
    title: "Level 8: Menghitung Data Teks (COUNTA)",
    category: "Agregasi & Statistik",
    difficulty: "Mudah",
    scenario: "Wali kelas ingin menghitung total jumlah siswa yang terdaftar di daftar absensi (sel B2 sampai B6).",
    objective: "Hitung total nama siswa yang terisi pada sel B7 menggunakan rumus =COUNTA().",
    theory: {
      concept: "Fungsi COUNT hanya menghitung sel angka. Untuk menghitung sel yang berisi teks atau nama orang, gunakan fungsi COUNTA (Count All).",
      whyItMatters: "Penting saat mendata kehadiran, jumlah peserta, atau inventaris non-angka.",
      syntax: "=COUNTA(rentang_sel)",
      example: "=COUNTA(B2:B6)"
    },
    targetCell: "B7",
    targetRowNumber: 7,
    targetColKey: "nama",
    targetColLetter: "B",
    columns: [
      { key: "no", label: "No", letter: "A" },
      { key: "nama", label: "Nama Siswa", letter: "B" },
      { key: "status", label: "Keterangan", letter: "C" },
    ],
    rows: [
      { rowNumber: 2, values: { no: 1, nama: "Budi Santoso", status: "Hadir" } },
      { rowNumber: 3, values: { no: 2, nama: "Siti Rahma", status: "Hadir" } },
      { rowNumber: 4, values: { no: 3, nama: "Andi Wijaya", status: "Hadir" } },
      { rowNumber: 5, values: { no: 4, nama: "Dewi Lestari", status: "Izin" } },
      { rowNumber: 6, values: { no: 5, nama: "Eko Prasetyo", status: "Hadir" } },
    ],
    totalLabelRow: {
      label: "Total Siswa Terdaftar:",
      colSpan: 1,
    },
    validFormulas: ["=COUNTA(B2:B6)", "=COUNTA(B2,B3,B4,B5,B6)", "=COUNTA(B2, B3, B4, B5, B6)"],
    acceptedAnswers: [5],
    hints: [
      "Gunakan fungsi COUNTA karena data di kolom B berupa teks (nama orang).",
      "Rentang sel nama adalah B2 sampai B6.",
      "Ketik: =COUNTA(B2:B6)"
    ],
    explanation: "Fungsi =COUNTA(B2:B6) menghitung ada 5 sel yang tidak kosong di kolom nama.",
    samplePlaceholder: "=COUNTA(B2:B6)"
  },

  // ==========================================
  // TRACK 3: OLAH TEKS & STRING
  // ==========================================
  {
    id: 9,
    trackId: 'teks',
    title: "Level 9: Merapikan Format Huruf (PROPER)",
    category: "Olah Teks",
    difficulty: "Mudah",
    scenario: "Form pendaftaran menghasilkan nama dengan huruf kecil semua ('budi santoso'). Kamu perlu mengubahnya menjadi format nama rapi berhuruf kapital di awal kata.",
    objective: "Ubah nama pada sel A2 menjadi format rapi pada sel B2 menggunakan rumus =PROPER().",
    theory: {
      concept: "Fungsi PROPER mengubah huruf awal setiap kata menjadi huruf besar (kapital) dan huruf lainnya menjadi kecil.",
      whyItMatters: "Sangat menghemat waktu saat membersihkan database nama pelanggan atau alamat.",
      syntax: "=PROPER(teks_atau_sel)",
      example: "=PROPER(A2)"
    },
    targetCell: "B2",
    targetRowNumber: 2,
    targetColKey: "rapi",
    targetColLetter: "B",
    columns: [
      { key: "mentah", label: "Nama Mentah (Input User)", letter: "A" },
      { key: "rapi", label: "Nama Rapi (Hasil Formula)", letter: "B" },
    ],
    rows: [
      { rowNumber: 2, values: { mentah: "budi santoso", rapi: "?" } },
      { rowNumber: 3, values: { mentah: "SITI RAHMAWATI", rapi: "Siti Rahmawati" } },
      { rowNumber: 4, values: { mentah: "dEwI lEsTaRi", rapi: "Dewi Lestari" } },
    ],
    validFormulas: ["=PROPER(A2)"],
    acceptedAnswers: ["Budi Santoso"],
    hints: [
      "Gunakan fungsi =PROPER() dengan argumen sel A2.",
      "Ketik: =PROPER(A2)"
    ],
    explanation: "Fungsi =PROPER(A2) mengubah 'budi santoso' menjadi 'Budi Santoso'.",
    samplePlaceholder: "=PROPER(A2)"
  },
  {
    id: 10,
    trackId: 'teks',
    title: "Level 10: Menggabungkan Teks (Simbol &)",
    category: "Olah Teks",
    difficulty: "Menengah",
    scenario: "Data karyawan memiliki Nama Depan di kolom A dan Nama Belakang di kolom B. Kamu ingin menggabungkannya menjadi Nama Lengkap dengan spasi pemisah.",
    objective: "Gabungkan Nama Depan (A2) dan Nama Belakang (B2) dengan spasi pada sel C2 menggunakan simbol &.",
    theory: {
      concept: "Simbol ampersand (&) digunakan untuk menggabungkan teks. Untuk menyisipkan spasi di antara kata, tambahkan \" \".",
      whyItMatters: "Standar industri untuk membuat nama lengkap, alamat lengkap, atau format kode custom.",
      syntax: '=sel1 & " " & sel2',
      example: '=A2 & " " & B2'
    },
    targetCell: "C2",
    targetRowNumber: 2,
    targetColKey: "lengkap",
    targetColLetter: "C",
    columns: [
      { key: "depan", label: "Nama Depan", letter: "A" },
      { key: "belakang", label: "Nama Belakang", letter: "B" },
      { key: "lengkap", label: "Nama Lengkap", letter: "C" },
    ],
    rows: [
      { rowNumber: 2, values: { depan: "Ahmad", belakang: "Dahlan", lengkap: "?" } },
      { rowNumber: 3, values: { depan: "Rini", belakang: "Susanti", lengkap: "Rini Susanti" } },
      { rowNumber: 4, values: { depan: "Fajar", belakang: "Hidayat", lengkap: "Fajar Hidayat" } },
    ],
    validFormulas: [
      '=A2&" "&B2',
      '=A2 & " " & B2',
      '=CONCAT(A2, " ", B2)',
      '=CONCATENATE(A2, " ", B2)'
    ],
    acceptedAnswers: ["Ahmad Dahlan"],
    hints: [
      "Gunakan rumus =A2 & \" \" & B2.",
      "Tanda \" \" (petik spasi petik) penting agar nama depan dan belakang tidak menempel.",
      "Ketik: =A2 & \" \" & B2"
    ],
    explanation: "Rumus =A2 & \" \" & B2 menggabungkan 'Ahmad' + ' ' + 'Dahlan' = 'Ahmad Dahlan'.",
    samplePlaceholder: '=A2 & " " & B2'
  },
  {
    id: 11,
    trackId: 'teks',
    title: "Level 11: Mengambil Karakter Kiri (LEFT)",
    category: "Olah Teks",
    difficulty: "Menengah",
    scenario: "ID Anggota memiliki format 'JKT-0891'. Kamu ingin mengekstrak 3 huruf pertama ('JKT') untuk mengetahui kode kota cabang.",
    objective: "Ambil 3 karakter pertama dari ID Anggota (A2) pada sel B2 menggunakan rumus =LEFT().",
    theory: {
      concept: "Fungsi LEFT(teks, jumlah_karakter) mengambil sejumlah karakter dimulai dari sisi paling kiri.",
      whyItMatters: "Biasa dipakai untuk memisahkan kode wilayah, tahun dari NIK, atau prefiks kode barang.",
      syntax: "=LEFT(sel, jumlah_karakter)",
      example: "=LEFT(A2, 3)"
    },
    targetCell: "B2",
    targetRowNumber: 2,
    targetColKey: "cabang",
    targetColLetter: "B",
    columns: [
      { key: "id", label: "ID Anggota", letter: "A" },
      { key: "cabang", label: "Kode Kota (3 Digit)", letter: "B" },
      { key: "nama", label: "Nama Anggota", letter: "C" },
    ],
    rows: [
      { rowNumber: 2, values: { id: "JKT-0891", cabang: "?", nama: "Dimas Anggara" } },
      { rowNumber: 3, values: { id: "BDG-0122", cabang: "BDG", nama: "Siska Amelia" } },
      { rowNumber: 4, values: { id: "SBY-0455", cabang: "SBY", nama: "Rahmat Hidayat" } },
    ],
    validFormulas: ["=LEFT(A2,3)", "=LEFT(A2, 3)"],
    acceptedAnswers: ["JKT"],
    hints: [
      "Gunakan fungsi =LEFT().",
      "Argumen pertama adalah sel A2, dan argumen kedua adalah angka 3 (jumlah karakter).",
      "Ketik: =LEFT(A2, 3)"
    ],
    explanation: "Fungsi =LEFT(A2, 3) mengambil 3 huruf pertama dari 'JKT-0891' yaitu 'JKT'.",
    samplePlaceholder: "=LEFT(A2, 3)"
  },

  // ==========================================
  // TRACK 4: LOGIKA & KEPUTUSAN (CONDITIONAL)
  // ==========================================
  {
    id: 12,
    trackId: 'logika',
    title: "Level 12: Pengambilan Keputusan (IF)",
    category: "Logika & Keputusan",
    difficulty: "Menengah",
    scenario: "Batas KKM kelulusan ujian matematika adalah 75. Jika nilai siswa (C2) minimal 75 maka berikan status 'LULUS', jika di bawah 75 maka 'REMIDI'.",
    objective: "Tentukan status kelulusan siswa pada sel D2 menggunakan rumus =IF().",
    theory: {
      concept: "Fungsi IF menguji suatu kondisi logika. Jika benar maka menghasilkan nilai pertama, jika salah menghasilkan nilai kedua.",
      whyItMatters: "Rumus paling krusial untuk otomatisasi keputusan bisnis, kelulusan, dan status verifikasi.",
      syntax: '=IF(kondisi, "nilai_jika_benar", "nilai_jika_salah")',
      example: '=IF(C2>=75, "LULUS", "REMIDI")'
    },
    targetCell: "D2",
    targetRowNumber: 2,
    targetColKey: "status",
    targetColLetter: "D",
    columns: [
      { key: "no", label: "No", letter: "A" },
      { key: "nama", label: "Nama Siswa", letter: "B" },
      { key: "nilai", label: "Nilai Ujian", letter: "C" },
      { key: "status", label: "Status Kelulusan", letter: "D" },
    ],
    rows: [
      { rowNumber: 2, values: { no: 1, nama: "Budi Santoso", nilai: 82, status: "?" } },
      { rowNumber: 3, values: { no: 2, nama: "Doni Pratama", nilai: 68, status: "REMIDI" } },
      { rowNumber: 4, values: { no: 3, nama: "Rani Safitri", nilai: 90, status: "LULUS" } },
    ],
    validFormulas: [
      '=IF(C2>=75,"LULUS","REMIDI")',
      '=IF(C2>=75, "LULUS", "REMIDI")',
      '=IF(C2>74, "LULUS", "REMIDI")',
      '=IF(C2<75, "REMIDI", "LULUS")'
    ],
    acceptedAnswers: ["LULUS"],
    hints: [
      "Format: =IF(C2>=75, \"LULUS\", \"REMIDI\").",
      "Teks LULUS dan REMIDI wajib diapit tanda kutip ganda (\").",
      "Ketik: =IF(C2>=75, \"LULUS\", \"REMIDI\")"
    ],
    explanation: "Karena nilai Budi adalah 82 (yang mana >= 75), maka formula menghasilkan output 'LULUS'.",
    samplePlaceholder: '=IF(C2>=75, "LULUS", "REMIDI")'
  },
  {
    id: 13,
    trackId: 'logika',
    title: "Level 13: Hitung dengan Syarat (COUNTIF)",
    category: "Logika & Keputusan",
    difficulty: "Menengah",
    scenario: "Wali kelas ingin menghitung total berapa siswa yang hadir (berstatus 'Hadir') dari daftar absensi harian di kolom C.",
    objective: "Hitung jumlah kehadiran berstatus 'Hadir' pada sel C7 menggunakan rumus =COUNTIF().",
    theory: {
      concept: "Fungsi COUNTIF menghitung jumlah sel dalam rentang yang cocok dengan kriteria tertentu.",
      whyItMatters: "Biasa digunakan untuk menghitung jumlah transaksi lunas, total presensi hadir, atau produk yang lolos QC.",
      syntax: '=COUNTIF(rentang, "kriteria")',
      example: '=COUNTIF(C2:C6, "Hadir")'
    },
    targetCell: "C7",
    targetRowNumber: 7,
    targetColKey: "status",
    targetColLetter: "C",
    columns: [
      { key: "no", label: "No", letter: "A" },
      { key: "nama", label: "Nama Siswa", letter: "B" },
      { key: "status", label: "Kehadiran", letter: "C" },
    ],
    rows: [
      { rowNumber: 2, values: { no: 1, nama: "Budi Santoso", status: "Hadir" } },
      { rowNumber: 3, values: { no: 2, nama: "Siti Rahma", status: "Hadir" } },
      { rowNumber: 4, values: { no: 3, nama: "Andi Wijaya", status: "Sakit" } },
      { rowNumber: 5, values: { no: 4, nama: "Dewi Lestari", status: "Hadir" } },
      { rowNumber: 6, values: { no: 5, nama: "Eko Prasetyo", status: "Hadir" } },
    ],
    totalLabelRow: {
      label: "Total yang Hadir:",
      colSpan: 2,
    },
    validFormulas: [
      '=COUNTIF(C2:C6,"Hadir")',
      '=COUNTIF(C2:C6, "Hadir")',
      '=COUNTIF(C2:C6,"HADIR")',
      '=COUNTIF(C2:C6, "HADIR")'
    ],
    acceptedAnswers: [4],
    hints: [
      "Rentang data berada pada C2:C6.",
      "Kriteria teks yang dicari adalah \"Hadir\".",
      "Ketik: =COUNTIF(C2:C6, \"Hadir\")"
    ],
    explanation: "Fungsi =COUNTIF(C2:C6, \"Hadir\") menghitung dari 5 siswa, terdapat 4 siswa yang berstatus 'Hadir'.",
    samplePlaceholder: '=COUNTIF(C2:C6, "Hadir")'
  },
  {
    id: 14,
    trackId: 'logika',
    title: "Level 14: Jumlahkan Berdasarkan Syarat (SUMIF)",
    category: "Logika & Keputusan",
    difficulty: "Menengah",
    scenario: "Kamu memiliki catatan pengeluaran harian dengan berbagai kategori (Makanan, Transport, Hiburan). Kamu ingin menghitung total uang yang keluar khusus untuk kategori 'Makanan'.",
    objective: "Hitung total pengeluaran khusus kategori 'Makanan' pada sel C8 menggunakan rumus =SUMIF().",
    theory: {
      concept: "Fungsi SUMIF menjumlahkan angka di kolom tertentu jika kolom kriterianya cocok dengan syarat yang ditentukan.",
      whyItMatters: "Sangat ampuh untuk membuat rekap keuangan per divisi, total omset per produk, atau pengeluaran per pos.",
      syntax: '=SUMIF(rentang_kategori, "kriteria", rentang_jumlah)',
      example: '=SUMIF(B2:B7, "Makanan", C2:C7)'
    },
    targetCell: "C8",
    targetRowNumber: 8,
    targetColKey: "biaya",
    targetColLetter: "C",
    columns: [
      { key: "tgl", label: "Tanggal", letter: "A" },
      { key: "kategori", label: "Kategori", letter: "B" },
      { key: "biaya", label: "Nominal (Rp)", letter: "C" },
    ],
    rows: [
      { rowNumber: 2, values: { tgl: "01/08", kategori: "Makanan", biaya: 25000 } },
      { rowNumber: 3, values: { tgl: "01/08", kategori: "Transport", biaya: 15000 } },
      { rowNumber: 4, values: { tgl: "02/08", kategori: "Makanan", biaya: 35000 } },
      { rowNumber: 5, values: { tgl: "02/08", kategori: "Hiburan", biaya: 50000 } },
      { rowNumber: 6, values: { tgl: "03/08", kategori: "Makanan", biaya: 35000 } },
      { rowNumber: 7, values: { tgl: "03/08", kategori: "Transport", biaya: 20000 } },
    ],
    totalLabelRow: {
      label: "Total Khusus Kategori Makanan:",
      colSpan: 2,
    },
    validFormulas: [
      '=SUMIF(B2:B7,"Makanan",C2:C7)',
      '=SUMIF(B2:B7, "Makanan", C2:C7)',
      '=SUMIF(B2:B7,"MAKANAN",C2:C7)',
      '=SUMIF(B2:B7, "MAKANAN", C2:C7)'
    ],
    acceptedAnswers: [95000],
    hints: [
      "Argumen 1: Rentang kategori (B2:B7).",
      "Argumen 2: Kriteria (\"Makanan\").",
      "Argumen 3: Rentang nominal yang ingin dijumlahkan (C2:C7).",
      "Ketik: =SUMIF(B2:B7, \"Makanan\", C2:C7)"
    ],
    explanation: "Fungsi =SUMIF(B2:B7, \"Makanan\", C2:C7) menjumlahkan nominal baris makanan: Rp25.000 + Rp35.000 + Rp35.000 = Rp95.000.",
    samplePlaceholder: '=SUMIF(B2:B7, "Makanan", C2:C7)'
  },

  // ==========================================
  // TRACK 5: PENCARIAN & REFERENSI (LOOKUP)
  // ==========================================
  {
    id: 15,
    trackId: 'lookup',
    title: "Level 15: Pencarian Harga Otomatis (VLOOKUP)",
    category: "Lookup & Referensi",
    difficulty: "Lanjutan",
    scenario: "Di meja kasir, pembeli membeli barang dengan Kode 'BRG-02'. Kamu perlu menarik Harga Satuan secara otomatis dari Tabel Daftar Harga Master (E2:G4).",
    objective: "Tarik harga satuan barang pada sel C2 menggunakan rumus =VLOOKUP().",
    theory: {
      concept: "VLOOKUP mencari nilai di kolom paling kiri dari tabel referensi, lalu mengambil nilai pada kolom ke-N di baris yang sama. Tambahkan FALSE di akhir untuk pencarian persis (Exact Match).",
      whyItMatters: "Keterampilan paling banyak ditanyakan dalam tes kerja admin, accounting, dan data analyst.",
      syntax: "=VLOOKUP(nilai_dicari, tabel_referensi, nomor_kolom, FALSE)",
      example: "=VLOOKUP(A2, E2:G4, 3, FALSE)"
    },
    targetCell: "C2",
    targetRowNumber: 2,
    targetColKey: "harga",
    targetColLetter: "C",
    columns: [
      { key: "kode", label: "Kode Transaksi", letter: "A" },
      { key: "nama", label: "Nama Barang", letter: "B" },
      { key: "harga", label: "Harga Satuan (Rp)", letter: "C" },
      { key: "refKode", label: "[Ref] Kode", letter: "D" },
      { key: "refBarang", label: "[Ref] Barang", letter: "E" },
      { key: "refHarga", label: "[Ref] Harga", letter: "F" },
    ],
    rows: [
      { rowNumber: 2, values: { kode: "BRG-02", nama: "Gula Pasir 1Kg", harga: "?", refKode: "BRG-01", refBarang: "Beras 5Kg", refHarga: 70000 } },
      { rowNumber: 3, values: { kode: "BRG-01", nama: "Beras 5Kg", harga: 70000, refKode: "BRG-02", refBarang: "Gula Pasir 1Kg", refHarga: 16000 } },
      { rowNumber: 4, values: { kode: "BRG-03", nama: "Minyak 2L", harga: 32000, refKode: "BRG-03", refBarang: "Minyak 2L", refHarga: 32000 } },
    ],
    validFormulas: [
      "=VLOOKUP(A2,D2:F4,3,FALSE)",
      "=VLOOKUP(A2, D2:F4, 3, FALSE)",
      "=VLOOKUP(A2,D2:F4,3,0)",
      "=VLOOKUP(A2, D2:F4, 3, 0)"
    ],
    acceptedAnswers: [16000],
    hints: [
      "Nilai yang dicari: A2 ('BRG-02').",
      "Tabel referensi master: D2:F4 (Kolom D=Kode, E=Barang, F=Harga).",
      "Nomor kolom harga adalah kolom ke-3 dari tabel referensi.",
      "Ketik: =VLOOKUP(A2, D2:F4, 3, FALSE)"
    ],
    explanation: "Fungsi =VLOOKUP(A2, D2:F4, 3, FALSE) mencari 'BRG-02' di tabel referensi dan mengambil nilai kolom ke-3 yaitu Rp16.000.",
    samplePlaceholder: "=VLOOKUP(A2, D2:F4, 3, FALSE)"
  },
  {
    id: 16,
    trackId: 'lookup',
    title: "Level 16: Pencarian Modern (XLOOKUP)",
    category: "Lookup & Referensi",
    difficulty: "Lanjutan",
    scenario: "Kamu ingin mencari Nomor Telepon Darurat dari staf bernama 'Siti Rahma' (A2) yang terdaftar di database kontak staf (Kolom D=Nama, Kolom E=Telepon).",
    objective: "Ambil nomor telepon pada sel B2 menggunakan rumus modern =XLOOKUP().",
    theory: {
      concept: "XLOOKUP adalah generasi terbaru pengganti VLOOKUP. Cara kerjanya lebih intuitif: XLOOKUP(nilai_dicari, kolom_pencarian, kolom_hasil).",
      whyItMatters: "Tidak perlu menghitung indeks kolom manual dan tidak mudah error saat struktur tabel bergeser.",
      syntax: "=XLOOKUP(nilai_dicari, rentang_kunci, rentang_hasil)",
      example: "=XLOOKUP(A2, D2:D4, E2:E4)"
    },
    targetCell: "B2",
    targetRowNumber: 2,
    targetColKey: "telp",
    targetColLetter: "B",
    columns: [
      { key: "cariNama", label: "Nama Dicari", letter: "A" },
      { key: "telp", label: "No Telepon Hasil", letter: "B" },
      { key: "dbNo", label: "[DB] ID", letter: "C" },
      { key: "dbNama", label: "[DB] Nama Staf", letter: "D" },
      { key: "dbTelp", label: "[DB] No Kontak", letter: "E" },
    ],
    rows: [
      { rowNumber: 2, values: { cariNama: "Siti Rahma", telp: "?", dbNo: 101, dbNama: "Budi Santoso", dbTelp: "0812-3456-7890" } },
      { rowNumber: 3, values: { cariNama: "Budi Santoso", telp: "0812-3456-7890", dbNo: 102, dbNama: "Siti Rahma", dbTelp: "0819-8765-4321" } },
      { rowNumber: 4, values: { cariNama: "Andi Wijaya", telp: "0857-1122-3344", dbNo: 103, dbNama: "Andi Wijaya", dbTelp: "0857-1122-3344" } },
    ],
    validFormulas: [
      "=XLOOKUP(A2,D2:D4,E2:E4)",
      "=XLOOKUP(A2, D2:D4, E2:E4)"
    ],
    acceptedAnswers: ["0819-8765-4321"],
    hints: [
      "Argumen 1: Nama yang dicari (A2).",
      "Argumen 2: Rentang daftar nama di database (D2:D4).",
      "Argumen 3: Rentang daftar nomor kontak di database (E2:E4).",
      "Ketik: =XLOOKUP(A2, D2:D4, E2:E4)"
    ],
    explanation: "Fungsi =XLOOKUP(A2, D2:D4, E2:E4) mencocokkan 'Siti Rahma' pada D2:D4 dan mengambil nomor kontak '0819-8765-4321' dari E2:E4.",
    samplePlaceholder: "=XLOOKUP(A2, D2:D4, E2:E4)"
  }
];
