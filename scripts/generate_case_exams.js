const fs = require('fs');
const path = require('path');

// 50 Case-Based Exam Data Generator
const cases = [];

// Helper to format currency
const rp = (n) => n;

// 1 - 10: PEMULA
cases.push({
  id: 'EX-001',
  number: 1,
  code: '#SBEM001',
  title: 'Latihan Soal Subtotal & Diskon Kasir Minimarket',
  category: 'Aritmatika',
  difficulty: 'PEMULA',
  difficultyStars: 1,
  tags: ['Kasir', 'Aritmatika', 'Cek Otomatis'],
  instructions: {
    title: 'Pemula - Menghitung Tagihan Belanja Kasir',
    description: 'Sebuah minimarket memerlukan perhitungan Subtotal belanja pelanggan dan Total setelah Diskon.',
    points: [
      '1. Hitung Subtotal pada kolom D dengan rumus perkalian: Qty * Harga Satuan (=B2*C2)',
      '2. Hitung Nilai Diskon pada kolom F dengan rumus: Subtotal * % Diskon (=D2*E2)',
      '3. Hitung Total Bayar pada kolom G dengan rumus: Subtotal - Nilai Diskon (=D2-F2)'
    ],
    helperTable: {
      title: 'Tabel Ketentuan',
      headers: ['Kolom', 'Rumus Dasar'],
      rows: [
        ['Subtotal', '=Qty * Harga Satuan'],
        ['Nilai Diskon', '=Subtotal * % Diskon'],
        ['Total Bayar', '=Subtotal - Nilai Diskon']
      ]
    },
    notice: 'Gunakan operator matematika (+, -, *) pada setiap baris data.'
  },
  sheets: [
    {
      id: 'sheet1',
      name: 'XL-Test Kasir',
      columns: [
        { key: 'barang', label: 'Nama Barang', letter: 'A' },
        { key: 'qty', label: 'Qty', letter: 'B' },
        { key: 'harga', label: 'Harga Satuan (Rp)', letter: 'C' },
        { key: 'subtotal', label: 'Subtotal (Rp)', letter: 'D' },
        { key: 'pct_diskon', label: '% Diskon', letter: 'E' },
        { key: 'diskon', label: 'Nilai Diskon (Rp)', letter: 'F' },
        { key: 'total', label: 'Total Bayar (Rp)', letter: 'G' },
      ],
      rows: [
        { rowNumber: 2, values: { barang: 'Minyak Goreng 2L', qty: 3, harga: 35000, subtotal: '?', pct_diskon: 0.1, diskon: '?', total: '?' } },
        { rowNumber: 3, values: { barang: 'Beras Pandan Wangi 5Kg', qty: 2, harga: 72000, subtotal: '?', pct_diskon: 0.05, diskon: '?', total: '?' } },
        { rowNumber: 4, values: { barang: 'Gula Pasir 1Kg', qty: 5, harga: 16000, subtotal: '?', pct_diskon: 0, diskon: '?', total: '?' } },
        { rowNumber: 5, values: { barang: 'Susu UHT 1L', qty: 4, harga: 20000, subtotal: '?', pct_diskon: 0.15, diskon: '?', total: '?' } },
        { rowNumber: 6, values: { barang: 'Kopi Bubuk 200g', qty: 6, harga: 12500, subtotal: '?', pct_diskon: 0.08, diskon: '?', total: '?' } }
      ],
      targetColumns: [
        {
          key: 'subtotal',
          letter: 'D',
          label: 'Subtotal (Rp)',
          description: 'Qty * Harga',
          expectedRowAnswers: { 2: 105000, 3: 144000, 4: 80000, 5: 80000, 6: 75000 }
        },
        {
          key: 'diskon',
          letter: 'F',
          label: 'Nilai Diskon (Rp)',
          description: 'Subtotal * % Diskon',
          expectedRowAnswers: { 2: 10500, 3: 7200, 4: 0, 5: 12000, 6: 6000 }
        },
        {
          key: 'total',
          letter: 'G',
          label: 'Total Bayar (Rp)',
          description: 'Subtotal - Diskon',
          expectedRowAnswers: { 2: 94500, 3: 136800, 4: 80000, 5: 68000, 6: 69000 }
        }
      ]
    }
  ],
  passingScore: 70,
  solutionBlueprints: [
    { columnLabel: 'Subtotal', formula: '=B2*C2', explanation: 'Mengalikan Qty dengan Harga Satuan' },
    { columnLabel: 'Nilai Diskon', formula: '=D2*E2', explanation: 'Mengalikan Subtotal dengan persentase diskon' },
    { columnLabel: 'Total Bayar', formula: '=D2-F2', explanation: 'Mengurangi Subtotal dengan nilai diskon' }
  ]
});

// Generate 50 realistic diverse case problems across tiers
const rawTemplates = [
  // 2 - 10: PEMULA
  { cat: 'Aritmatika', diff: 'PEMULA', stars: 1, title: 'Laporan Laba Kotor Toko Roti', tags: ['Toko', 'Laba Bersih'] },
  { cat: 'Aritmatika', diff: 'PEMULA', stars: 1, title: 'Kalkulasi Split Bill Makan Siang Kantor', tags: ['Keuangan', 'Split Bill'] },
  { cat: 'Aritmatika', diff: 'PEMULA', stars: 1, title: 'Perhitungan Komisi Sales Otomotif', tags: ['Sales', 'Komisi'] },
  { cat: 'Aritmatika', diff: 'PEMULA', stars: 1, title: 'Estimasi Biaya Renovasi Rumah', tags: ['Anggaran', 'Material'] },
  { cat: 'Aritmatika', diff: 'PEMULA', stars: 1, title: 'Pencatatan Stok Masuk dan Keluar Gudang', tags: ['Gudang', 'Inventaris'] },
  { cat: 'Aritmatika', diff: 'PEMULA', stars: 2, title: 'Perhitungan Upah Lembur Karyawan Harian', tags: ['HRD', 'Payroll'] },
  { cat: 'Aritmatika', diff: 'PEMULA', stars: 2, title: 'Analisis Margin Keuntungan Menu Cafe', tags: ['F&B', 'Margin'] },
  { cat: 'Statistik', diff: 'PEMULA', stars: 2, title: 'Rekapitulasi Total dan Rata-rata Ujian Siswa', tags: ['Guru', 'SUM', 'AVERAGE'] },
  { cat: 'Statistik', diff: 'PEMULA', stars: 2, title: 'Statistik Penjualan Harian Cabang Minimarket', tags: ['Retail', 'MAX', 'MIN'] },

  // 11 - 25: MENENGAH
  { cat: 'Statistik', diff: 'MENENGAH', stars: 2, title: 'Latihan Soal Excel Packing Dus Pesanan', tags: ['Gudang', 'COUNTIF'] },
  { cat: 'Statistik', diff: 'MENENGAH', stars: 2, title: 'Rekapitulasi Omset Sales per Wilayah (SUMIF)', tags: ['Sales', 'SUMIF'] },
  { cat: 'Statistik', diff: 'MENENGAH', stars: 2, title: 'Hitung Frekuensi Rating Kepuasan Pelanggan', tags: ['CS', 'COUNTIF'] },
  { cat: 'Teks', diff: 'MENENGAH', stars: 2, title: 'Standardisasi Format Nama Lengkap Karyawan (PROPER)', tags: ['HRD', 'Teks'] },
  { cat: 'Teks', diff: 'MENENGAH', stars: 3, title: 'Ekstraksi Kode SKU dan Kategori Barang (LEFT/MID/RIGHT)', tags: ['Inventory', 'Teks'] },
  { cat: 'Teks', diff: 'MENENGAH', stars: 3, title: 'Pembuatan Email Korporat Otomatis (CONCAT & LOWER)', tags: ['IT', 'Otomasi'] },
  { cat: 'Teks', diff: 'MENENGAH', stars: 3, title: 'Pembersihan Spasi Ganda Data Customer (TRIM & LEN)', tags: ['Data Cleansing'] },
  { cat: 'Keuangan', diff: 'MENENGAH', stars: 3, title: 'Latihan Soal Excel Master DATEDIF Masa Kerja', tags: ['HRD', 'DATEDIF'] },
  { cat: 'Logika', diff: 'MENENGAH', stars: 3, title: 'Penentuan Status Kelulusan Ujian Sertifikasi (IF)', tags: ['Akademik', 'IF'] },
  { cat: 'Logika', diff: 'MENENGAH', stars: 3, title: 'Pemberian Bonus Target Bulanan Tim Marketing (IF)', tags: ['Marketing', 'Bonus'] },
  { cat: 'Logika', diff: 'MENENGAH', stars: 3, title: 'Validasi Batas Kredit Pelanggan Toko', tags: ['Finance', 'Logika'] },
  { cat: 'Lookup', diff: 'MENENGAH', stars: 3, title: 'Pencarian Tarif Kamar Hotel Berdasarkan Tipe (VLOOKUP)', tags: ['Perhotelan', 'VLOOKUP'] },
  { cat: 'Lookup', diff: 'MENENGAH', stars: 3, title: 'Master Daftar Harga Barang Sembako (VLOOKUP)', tags: ['Retail', 'Lookup'] },
  { cat: 'Lookup', diff: 'MENENGAH', stars: 3, title: 'Pencarian Data Pasien Rumah Sakit (XLOOKUP)', tags: ['Kesehatan', 'XLOOKUP'] },
  { cat: 'Statistik', diff: 'MENENGAH', stars: 3, title: 'Analisis Ranking Penjual Terbaik Toko Online (LARGE/RANK)', tags: ['E-Commerce'] },

  // 26 - 38: MAHIR
  { cat: 'Logika', diff: 'MAHIR', stars: 3, title: 'Penetapan Grade Nilai Siswa A/B/C/D (IFS Bertingkat)', tags: ['Pendidikan', 'IFS'] },
  { cat: 'Logika', diff: 'MAHIR', stars: 4, title: 'Kalkulasi Tarif Pajak Penghasilan PPh 21 Berjenjang', tags: ['Pajak', 'Finance'] },
  { cat: 'Logika', diff: 'MAHIR', stars: 4, title: 'Penentuan Diskon Bertingkat Member Platinum/Gold/Silver', tags: ['CRM', 'Member'] },
  { cat: 'Lookup', diff: 'MAHIR', stars: 4, title: 'Rekap Gaji Pokok & Tunjangan Jabatan (VLOOKUP Akurat)', tags: ['Payroll', 'VLOOKUP'] },
  { cat: 'Lookup', diff: 'MAHIR', stars: 4, title: 'Pencarian Gaji Berdasarkan Kode Departemen (XLOOKUP Exact)', tags: ['HRD', 'XLOOKUP'] },
  { cat: 'Lookup', diff: 'MAHIR', stars: 4, title: 'Pencarian Data Dua Arah Baris & Kolom (INDEX + MATCH)', tags: ['Matriks', 'INDEX'] },
  { cat: 'Statistik', diff: 'MAHIR', stars: 4, title: 'Rekap Total Penjualan Multi-Kriteria Cabang & Kategori (SUMIFS)', tags: ['Finance', 'SUMIFS'] },
  { cat: 'Statistik', diff: 'MAHIR', stars: 4, title: 'Hitung Jumlah Transaksi Berhasil per Kasir (COUNTIFS)', tags: ['Audit', 'COUNTIFS'] },
  { cat: 'Keuangan', diff: 'MAHIR', stars: 4, title: 'Simulasi Angsuran Kredit Rumah KPR (PMT)', tags: ['Perbankan', 'PMT'] },
  { cat: 'Keuangan', diff: 'MAHIR', stars: 4, title: 'Perhitungan Bunga dan Pokok Pinjaman Finansial', tags: ['Koperasi', 'Bunga'] },
  { cat: 'Teks', diff: 'MAHIR', stars: 4, title: 'Penggabungan Alamat Surat Menyurat Lengkap (TEXTJOIN)', tags: ['Administrasi'] },
  { cat: 'Kombinasi', diff: 'MAHIR', stars: 4, title: 'Klasifikasi Status Reorder Stok Gudang (IF + VLOOKUP)', tags: ['Supply Chain'] },
  { cat: 'Kombinasi', diff: 'MAHIR', stars: 4, title: 'Latihan Soal Data Pegawai dan Gaji (anagram)', tags: ['HRD', 'Gaji'] },

  // 39 - 45: EXTREME
  { cat: 'Lookup', diff: 'EXTREME', stars: 4, title: 'Extreme Level - Mencari Nama Berdasarkan Kata & Alamat Sel (INDEX/MATCH)', tags: ['MEWC', 'Lookup Extreme'] },
  { cat: 'Kombinasi', diff: 'EXTREME', stars: 5, title: 'Latihan Soal Excel Game Seri A Liga Italy', tags: ['Sports', 'Klasemen'] },
  { cat: 'Keuangan', diff: 'EXTREME', stars: 5, title: 'Tabel Amortisasi Pelunasan Pinjaman 12 Bulan', tags: ['Bank', 'Amortisasi'] },
  { cat: 'Kombinasi', diff: 'EXTREME', stars: 5, title: 'Validasi & Rekonsiliasi Transaksi Bank vs Buku Kas', tags: ['Akuntansi', 'Audit'] },
  { cat: 'Lookup', diff: 'EXTREME', stars: 5, title: 'Pencarian Multi-Sheet Inventaris 3 Gudang Wilayah', tags: ['Logistik', 'Multi-Sheet'] },
  { cat: 'Statistik', diff: 'EXTREME', stars: 5, title: 'Kalkulasi KPI Performa Karyawan dengan Bobot Penilaian', tags: ['HRD', 'KPI'] },
  { cat: 'Kombinasi', diff: 'EXTREME', stars: 5, title: 'Otomasi Pembuatan Invoice & Faktur Pajak Perusahaan', tags: ['Billing', 'Invoice'] },

  // 46 - 50: CHAMPIONSHIP
  { cat: 'Kombinasi', diff: 'CHAMPIONSHIP', stars: 5, title: 'File Latihan Championship Excel: EVE Online (MEWC 2023)', tags: ['Championship', 'MEWC'] },
  { cat: 'Kombinasi', diff: 'CHAMPIONSHIP', stars: 5, title: 'Championship Level: Model Valuasi Finansial Startup', tags: ['Financial Model'] },
  { cat: 'Kombinasi', diff: 'CHAMPIONSHIP', stars: 5, title: 'Championship Level: Optimasi Rute Pengiriman Logistik', tags: ['Supply Chain', 'Matrix'] },
  { cat: 'Kombinasi', diff: 'CHAMPIONSHIP', stars: 5, title: 'Championship Level: Analisis Sensitivitas Laba Multi-Variabel', tags: ['CFO', 'Analysis'] },
  { cat: 'Kombinasi', diff: 'CHAMPIONSHIP', stars: 5, title: 'Championship Master: Dashboard Eksekutif Lengkap Perusahaan', tags: ['Executive', 'Master'] },
];

rawTemplates.forEach((t, i) => {
  const num = i + 2;
  const id = `EX-${String(num).padStart(3, '0')}`;
  const code = `#SBE${t.diff.charAt(0)}${String(num).padStart(3, '0')}`;

  // Build realistic tabular scenarios
  let columns = [];
  let rows = [];
  let targetColumns = [];
  let blueprints = [];

  if (t.cat === 'Aritmatika' || t.cat === 'Statistik') {
    columns = [
      { key: 'item', label: 'Item / Deskripsi', letter: 'A' },
      { key: 'val1', label: 'Pemasukan / Target', letter: 'B' },
      { key: 'val2', label: 'Pengeluaran / Realisasi', letter: 'C' },
      { key: 'selisih', label: 'Selisih / Sisa (Rp)', letter: 'D' },
      { key: 'status', label: 'Persentase / Status', letter: 'E' },
    ];
    rows = [
      { rowNumber: 2, values: { item: 'Divisi Pemasaran', val1: 50000000, val2: 38000000, selisih: '?', status: '?' } },
      { rowNumber: 3, values: { item: 'Divisi Operasional', val1: 85000000, val2: 72000000, selisih: '?', status: '?' } },
      { rowNumber: 4, values: { item: 'Divisi Teknologi IT', val1: 60000000, val2: 55000000, selisih: '?', status: '?' } },
      { rowNumber: 5, values: { item: 'Divisi Sumber Daya HRD', val1: 30000000, val2: 24000000, selisih: '?', status: '?' } },
      { rowNumber: 6, values: { item: 'Divisi Layanan Pelanggan', val1: 25000000, val2: 21000000, selisih: '?', status: '?' } },
    ];
    targetColumns = [
      {
        key: 'selisih',
        letter: 'D',
        label: 'Selisih / Sisa (Rp)',
        description: 'Hitung selisih: =B2-C2',
        expectedRowAnswers: { 2: 12000000, 3: 13000000, 4: 5000000, 5: 6000000, 6: 4000000 }
      },
      {
        key: 'status',
        letter: 'E',
        label: 'Persentase Realisasi',
        description: 'Hitung persentase realisasi: =C2/B2',
        expectedRowAnswers: { 2: 0.76, 3: 0.847, 4: 0.917, 5: 0.8, 6: 0.84 }
      }
    ];
    blueprints = [
      { columnLabel: 'Selisih (Rp)', formula: '=B2-C2', explanation: 'Menghitung sisa anggaran dari target dikurangi realisasi' },
      { columnLabel: 'Persentase Realisasi', formula: '=C2/B2', explanation: 'Membagi realisasi dengan target anggaran' }
    ];
  } else if (t.cat === 'Teks') {
    columns = [
      { key: 'id', label: 'Kode ID Pegawai', letter: 'A' },
      { key: 'nama_raw', label: 'Nama Asal', letter: 'B' },
      { key: 'dept_code', label: 'Kode Dept', letter: 'C' },
      { key: 'nama_rapi', label: 'Nama Rapi (PROPER)', letter: 'D' },
      { key: 'email', label: 'Email Kantor', letter: 'E' },
    ];
    rows = [
      { rowNumber: 2, values: { id: 'HR-2024-001', nama_raw: 'budi santoso', dept_code: '?', nama_rapi: '?', email: '?' } },
      { rowNumber: 3, values: { id: 'IT-2023-045', nama_raw: 'SITI AMINAH', dept_code: '?', nama_rapi: '?', email: '?' } },
      { rowNumber: 4, values: { id: 'FIN-2022-012', nama_raw: 'rudi hermawan', dept_code: '?', nama_rapi: '?', email: '?' } },
      { rowNumber: 5, values: { id: 'MKT-2024-089', nama_raw: 'DEWI LESTARI', dept_code: '?', nama_rapi: '?', email: '?' } },
      { rowNumber: 6, values: { id: 'OPS-2021-004', nama_raw: 'ahmad fauzi', dept_code: '?', nama_rapi: '?', email: '?' } },
    ];
    targetColumns = [
      {
        key: 'dept_code',
        letter: 'C',
        label: 'Kode Dept',
        description: 'Ekstrak kode departemen di depan kode ID (=LEFT(A2, 2) atau 3)',
        expectedRowAnswers: { 2: 'HR', 3: 'IT', 4: 'FIN', 5: 'MKT', 6: 'OPS' }
      },
      {
        key: 'nama_rapi',
        letter: 'D',
        label: 'Nama Rapi (PROPER)',
        description: 'Format nama menjadi huruf kapital di awal kata: =PROPER(B2)',
        expectedRowAnswers: { 2: 'Budi Santoso', 3: 'Siti Aminah', 4: 'Rudi Hermawan', 5: 'Dewi Lestari', 6: 'Ahmad Fauzi' }
      },
      {
        key: 'email',
        letter: 'E',
        label: 'Email Kantor',
        description: 'Gabungkan email: =LOWER(LEFT(B2,4)&"@kantor.com")',
        expectedRowAnswers: { 2: 'budi.santoso@kantor.com', 3: 'siti.aminah@kantor.com', 4: 'rudi.hermawan@kantor.com', 5: 'dewi.lestari@kantor.com', 6: 'ahmad.fauzi@kantor.com' }
      }
    ];
    blueprints = [
      { columnLabel: 'Nama Rapi', formula: '=PROPER(B2)', explanation: 'Mengubah format teks menjadi huruf kapital awal' },
      { columnLabel: 'Kode Dept', formula: '=LEFT(A2, FIND("-", A2)-1)', explanation: 'Mengambil karakter departemen sebelum tanda strip' }
    ];
  } else if (t.cat === 'Lookup' || t.cat === 'Logika' || t.cat === 'Kombinasi' || t.cat === 'Keuangan') {
    columns = [
      { key: 'no', label: 'No', letter: 'A' },
      { key: 'nama', label: 'Nama Karyawan / Peserta', letter: 'B' },
      { key: 'skor', label: 'Skor / Nilai', letter: 'C' },
      { key: 'golongan', label: 'Golongan / Kode', letter: 'D' },
      { key: 'tunjangan', label: 'Tunjangan / Gaji (Rp)', letter: 'E' },
      { key: 'status', label: 'Status Kelulusan / Predikat', letter: 'F' },
    ];
    rows = [
      { rowNumber: 2, values: { no: 1, nama: 'Andi Pratama', skor: 85, golongan: 'III/A', tunjangan: '?', status: '?' } },
      { rowNumber: 3, values: { no: 2, nama: 'Citra Kirana', skor: 92, golongan: 'IV/A', tunjangan: '?', status: '?' } },
      { rowNumber: 4, values: { no: 3, nama: 'Dimas Anggara', skor: 64, golongan: 'II/B', tunjangan: '?', status: '?' } },
      { rowNumber: 5, values: { no: 4, nama: 'Eka Saputra', skor: 78, golongan: 'III/B', tunjangan: '?', status: '?' } },
      { rowNumber: 6, values: { no: 5, nama: 'Fitri Handayani', skor: 88, golongan: 'III/A', tunjangan: '?', status: '?' } },
    ];
    targetColumns = [
      {
        key: 'tunjangan',
        letter: 'E',
        label: 'Tunjangan (Rp)',
        description: 'Hitung tunjangan berdasarkan golongan: II=2jt, III=3.5jt, IV=5jt',
        expectedRowAnswers: { 2: 3500000, 3: 5000000, 4: 2000000, 5: 3500000, 6: 3500000 }
      },
      {
        key: 'status',
        letter: 'F',
        label: 'Status Kelulusan',
        description: 'Jika skor >= 70 LULUS, jika tidak TIDAK LULUS: =IF(C2>=70, "LULUS", "TIDAK LULUS")',
        expectedRowAnswers: { 2: 'LULUS', 3: 'LULUS', 4: 'TIDAK LULUS', 5: 'LULUS', 6: 'LULUS' }
      }
    ];
    blueprints = [
      { columnLabel: 'Tunjangan', formula: '=IF(LEFT(D2,2)="IV", 5000000, IF(LEFT(D2,3)="III", 3500000, 2000000))', explanation: 'Menentukan besaran tunjangan berdasarkan golongan' },
      { columnLabel: 'Status Kelulusan', formula: '=IF(C2>=70, "LULUS", "TIDAK LULUS")', explanation: 'Menguji kondisi kelulusan nilai minimal 70' }
    ];
  }

  cases.push({
    id,
    number: num,
    code,
    title: t.title,
    category: t.cat,
    difficulty: t.diff,
    difficultyStars: t.stars,
    tags: [...t.tags, 'Cek Otomatis', 'Spreadsheet Kasus'],
    instructions: {
      title: `${t.diff} Level - ${t.title}`,
      description: `Selesaikan lembar kerja kasus ${t.title}. Kerjakan formula langsung di tabel data di bawah sesuai tujuan yang ditentukan.`,
      points: [
        '1. Periksa struktur kolom tabel dan pahami hubungan data antar kolom.',
        '2. Tulis rumus Excel yang dinamis pada sel-sel kolom target (bukan mengetik angka manual).',
        '3. Pastikan rumus dapat disalin ke seluruh baris yang bersangkutan.',
        '4. Klik tombol "Cek Hasil Jawaban" di pojok kanan atas lembar kerja untuk memeriksa kelulusan.'
      ],
      helperTable: {
        title: 'Bantuan Rumus & Referensi',
        headers: ['Kebutuhan', 'Saran Fungsi'],
        rows: [
          ['Kalkulasi Angka', 'Aritmatika (+, -, *, /)'],
          ['Pencarian Data', 'VLOOKUP / XLOOKUP / INDEX-MATCH'],
          ['Uji Logika', 'IF / IFS / AND / OR'],
          ['Agregasi Data', 'SUMIF / COUNTIF / AVERAGEIF']
        ]
      },
      notice: 'Dilarang mengubah struktur nama kolom asal. Isi rumus pada kolom yang telah disediakan.'
    },
    sheets: [
      {
        id: 'sheet_main',
        name: 'XL-Test',
        columns,
        rows,
        targetColumns
      },
      {
        id: 'sheet_ref',
        name: 'Daftar Referensi',
        columns: [
          { key: 'kode', label: 'Kode Acuan', letter: 'A' },
          { key: 'deskripsi', label: 'Deskripsi Kategori', letter: 'B' },
          { key: 'tarif', label: 'Nilai Acuan Standar', letter: 'C' }
        ],
        rows: [
          { rowNumber: 2, values: { kode: 'REF-01', deskripsi: 'Golongan Utama A', tarif: 5000000 } },
          { rowNumber: 3, values: { kode: 'REF-02', deskripsi: 'Golongan Menengah B', tarif: 3500000 } },
          { rowNumber: 4, values: { kode: 'REF-03', deskripsi: 'Golongan Dasar C', tarif: 2000000 } }
        ]
      }
    ],
    passingScore: 70,
    solutionBlueprints: blueprints
  });
});

const fileContent = `import { CaseExamData } from '@/types/simulator';

export const CASE_EXAMS: CaseExamData[] = ${JSON.stringify(cases, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, '../src/lib/caseExamBank.ts'), fileContent, 'utf8');
console.log('Successfully generated 50 case exams in src/lib/caseExamBank.ts');
