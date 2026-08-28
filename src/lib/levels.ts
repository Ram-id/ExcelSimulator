import { LevelData } from '@/types/simulator';

export const LEVELS: LevelData[] = [
  {
    id: 1,
    title: "Level 1: Dasar Penjumlahan (SUM)",
    category: "Fungsi Dasar",
    difficulty: "Mudah",
    scenario: "Kamu adalah manajer inventaris toko sepatu. Kamu perlu menghitung total keseluruhan stok sepatu yang tersisa di gudang.",
    objective: "Hitung total stok sepatu pada sel D5 menggunakan fungsi =SUM().",
    targetCell: "D5",
    targetRowNumber: 5,
    targetColKey: "stok",
    targetColLetter: "D",
    columns: [
      { key: "id", label: "ID Produk", letter: "A" },
      { key: "merek", label: "Merek", letter: "B" },
      { key: "model", label: "Model", letter: "C" },
      { key: "stok", label: "Stok", letter: "D" },
    ],
    rows: [
      { rowNumber: 2, values: { id: "VN-01", merek: "Vans", model: "Old Skool", stok: 20 } },
      { rowNumber: 3, values: { id: "PM-01", merek: "Puma", model: "Suede", stok: 15 } },
      { rowNumber: 4, values: { id: "VN-02", merek: "Vans", model: "Authentic", stok: 24 } },
    ],
    totalLabelRow: {
      label: "Total Stok:",
      colSpan: 3,
    },
    validFormulas: ["=SUM(D2:D4)", "=SUM(D2,D3,D4)", "=SUM(D2, D3, D4)"],
    acceptedAnswers: [59],
    hints: [
      "Rumus di Excel selalu diawali dengan tanda sama dengan (=).",
      "Gunakan fungsi SUM diikuti tanda kurung dan range sel: =SUM(D2:D4).",
      "Kamu juga bisa menuliskan sel satu per satu: =SUM(D2, D3, D4)."
    ],
    explanation: "Fungsi SUM digunakan untuk menjumlahkan semua angka dalam rentang sel tertentu. Contoh: =SUM(D2:D4) akan menjumlahkan nilai 20 + 15 + 24 = 59.",
    samplePlaceholder: "=SUM(D2:D4)"
  },
  {
    id: 2,
    title: "Level 2: Rata-Rata Penjualan (AVERAGE)",
    category: "Statistik Dasar",
    difficulty: "Mudah",
    scenario: "Tim keuangan ingin mengetahui rata-rata pendapatan harian kedai kopi selama 4 hari pertama minggu ini.",
    objective: "Hitung nilai rata-rata pendapatan pada sel D6 menggunakan fungsi =AVERAGE().",
    targetCell: "D6",
    targetRowNumber: 6,
    targetColKey: "pendapatan",
    targetColLetter: "D",
    columns: [
      { key: "hari", label: "Hari", letter: "A" },
      { key: "transaksi", label: "Jumlah Transaksi", letter: "B" },
      { key: "cup", label: "Cup Terjual", letter: "C" },
      { key: "pendapatan", label: "Pendapatan (Ribu Rp)", letter: "D" },
    ],
    rows: [
      { rowNumber: 2, values: { hari: "Senin", transaksi: 45, cup: 60, pendapatan: 1200 } },
      { rowNumber: 3, values: { hari: "Selasa", transaksi: 50, cup: 72, pendapatan: 1500 } },
      { rowNumber: 4, values: { hari: "Rabu", transaksi: 65, cup: 90, pendapatan: 1800 } },
      { rowNumber: 5, values: { hari: "Kamis", transaksi: 40, cup: 55, pendapatan: 1100 } },
    ],
    totalLabelRow: {
      label: "Rata-Rata Pendapatan:",
      colSpan: 3,
    },
    validFormulas: ["=AVERAGE(D2:D5)", "=AVERAGE(D2,D3,D4,D5)", "=AVERAGE(D2, D3, D4, D5)"],
    acceptedAnswers: [1400],
    hints: [
      "Gunakan fungsi AVERAGE untuk menghitung nilai rata-rata (mean).",
      "Range data pendapatan berada dari baris 2 sampai baris 5 pada kolom D (D2:D5).",
      "Format rumus: =AVERAGE(D2:D5)"
    ],
    explanation: "Fungsi AVERAGE menghitung rata-rata aritmetika dari sekumpulan angka. (1200 + 1500 + 1800 + 1100) / 4 = 1400.",
    samplePlaceholder: "=AVERAGE(D2:D5)"
  },
  {
    id: 3,
    title: "Level 3: Nilai Tertinggi & Terendah (MAX)",
    category: "Statistik Dasar",
    difficulty: "Mudah",
    scenario: "Divisi Penjualan ingin mengetahui skor performa tertinggi dari tenaga penjual bulan ini untuk memberikan reward.",
    objective: "Cari skor tertinggi pada sel C6 menggunakan rumus =MAX().",
    targetCell: "C6",
    targetRowNumber: 6,
    targetColKey: "skor",
    targetColLetter: "C",
    columns: [
      { key: "nik", label: "ID Karyawan", letter: "A" },
      { key: "nama", label: "Nama Sales", letter: "B" },
      { key: "skor", label: "Skor Performa", letter: "C" },
    ],
    rows: [
      { rowNumber: 2, values: { nik: "SLS-101", nama: "Budi Santoso", skor: 82 } },
      { rowNumber: 3, values: { nik: "SLS-102", nama: "Siti Rahma", skor: 95 } },
      { rowNumber: 4, values: { nik: "SLS-103", nama: "Andi Wijaya", skor: 78 } },
      { rowNumber: 5, values: { nik: "SLS-104", nama: "Dewi Lestari", skor: 89 } },
    ],
    totalLabelRow: {
      label: "Skor Tertinggi:",
      colSpan: 2,
    },
    validFormulas: ["=MAX(C2:C5)", "=MAX(C2,C3,C4,C5)", "=MAX(C2, C3, C4, C5)"],
    acceptedAnswers: [95],
    hints: [
      "Gunakan fungsi MAX untuk mencari nilai numerik paling besar.",
      "Rentang nilai skor berada pada kolom C dari baris 2 hingga baris 5.",
      "Ketik: =MAX(C2:C5)"
    ],
    explanation: "Fungsi MAX mengambil nilai terbesar dari daftar argumen yang diberikan. Di antara 82, 95, 78, dan 89, yang tertinggi adalah 95 (milik Siti Rahma).",
    samplePlaceholder: "=MAX(C2:C5)"
  },
  {
    id: 4,
    title: "Level 4: Menghitung dengan Kriteria (COUNTIF)",
    category: "Logika & Kriteria",
    difficulty: "Menengah",
    scenario: "Admin piutang ingin menghitung ada berapa transaksi yang status pembayarannya sudah 'LUNAS'.",
    objective: "Hitung jumlah transaksi berstatus 'LUNAS' pada sel C6 menggunakan rumus =COUNTIF().",
    targetCell: "C6",
    targetRowNumber: 6,
    targetColKey: "status",
    targetColLetter: "C",
    columns: [
      { key: "invoice", label: "No. Invoice", letter: "A" },
      { key: "klien", label: "Nama Klien", letter: "B" },
      { key: "status", label: "Status Bayar", letter: "C" },
    ],
    rows: [
      { rowNumber: 2, values: { invoice: "INV-001", klien: "PT Maju Jaya", status: "LUNAS" } },
      { rowNumber: 3, values: { invoice: "INV-002", klien: "CV Berkah", status: "PENDING" } },
      { rowNumber: 4, values: { invoice: "INV-003", klien: "Toko Sinar", status: "LUNAS" } },
      { rowNumber: 5, values: { invoice: "INV-004", klien: "UD Makmur", status: "LUNAS" } },
    ],
    totalLabelRow: {
      label: "Total Lunas:",
      colSpan: 2,
    },
    validFormulas: [
      '=COUNTIF(C2:C5,"LUNAS")',
      '=COUNTIF(C2:C5, "LUNAS")',
      "=COUNTIF(C2:C5,'LUNAS')",
      "=COUNTIF(C2:C5, 'LUNAS')"
    ],
    acceptedAnswers: [3],
    hints: [
      "Fungsi COUNTIF membutuhkan 2 argumen: rentang sel dan kriteria teks.",
      "Kriteria teks harus diapit tanda petik, contoh: \"LUNAS\".",
      "Ketik: =COUNTIF(C2:C5, \"LUNAS\")"
    ],
    explanation: "Fungsi COUNTIF(range, criteria) menghitung jumlah sel dalam rentang yang memenuhi kondisi tertentu. Dari 4 transaksi, ada 3 yang bernilai 'LUNAS'.",
    samplePlaceholder: '=COUNTIF(C2:C5, "LUNAS")'
  },
  {
    id: 5,
    title: "Level 5: Percabangan Logika (IF)",
    category: "Logika Lanjutan",
    difficulty: "Menengah",
    scenario: "Perusahaan memberikan status 'TARGET' jika capaian penjualan (C2) mencapai 100 unit atau lebih, jika tidak maka 'BELUM'.",
    objective: "Tentukan status sales pertama pada sel D2 menggunakan rumus =IF(C2>=100, \"TARGET\", \"BELUM\").",
    targetCell: "D2",
    targetRowNumber: 2,
    targetColKey: "status",
    targetColLetter: "D",
    columns: [
      { key: "nama", label: "Nama Sales", letter: "A" },
      { key: "wilayah", label: "Wilayah", letter: "B" },
      { key: "capaian", label: "Capaian (Unit)", letter: "C" },
      { key: "status", label: "Hasil Evaluasi", letter: "D" },
    ],
    rows: [
      { rowNumber: 2, values: { nama: "Rian Pratama", wilayah: "Jakarta", capaian: 120, status: "?" } },
      { rowNumber: 3, values: { nama: "Maya Indah", wilayah: "Bandung", capaian: 85, status: "BELUM" } },
      { rowNumber: 4, values: { nama: "Fajar Nugraha", wilayah: "Surabaya", capaian: 105, status: "TARGET" } },
    ],
    validFormulas: [
      '=IF(C2>=100,"TARGET","BELUM")',
      '=IF(C2>=100, "TARGET", "BELUM")',
      '=IF(C2>99, "TARGET", "BELUM")',
      '=IF(C2>99,"TARGET","BELUM")',
      '=IF(C2<100, "BELUM", "TARGET")',
      '=IF(C2<100,"BELUM","TARGET")'
    ],
    acceptedAnswers: ["TARGET"],
    hints: [
      "Fungsi IF memiliki format: =IF(tes_logika, nilai_jika_benar, nilai_jika_salah).",
      "Tes logika untuk mengecek apakah sel C2 minimal 100 adalah C2>=100.",
      "Ketik: =IF(C2>=100, \"TARGET\", \"BELUM\")"
    ],
    explanation: "Fungsi IF mengevaluasi kondisi. Karena capaian Rian adalah 120 (>= 100), maka kondisi bernilai TRUE dan menghasilkan output 'TARGET'.",
    samplePlaceholder: '=IF(C2>=100, "TARGET", "BELUM")'
  }
];
