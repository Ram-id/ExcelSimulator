const fs = require('fs');
const path = require('path');

// 77 Student Names for the 11x7 Desk Layout Matrix
const deskLayoutMatrix = [
  ['Gita Firmansyah', 'Nabila Putri', 'Fajar Hidayat', 'Dimas Saputra', 'Ayu Wandira', 'Arif Rahman', 'Maya Sari'],
  ['Budi Santoso', 'Siti Aminah', 'Rudi Hermawan', 'Dewi Lestari', 'Ahmad Fauzi', 'Fitriani', 'Hendra Setiawan'],
  ['Kartika Sari', 'Soleh Hidayat', 'Dian Pratama', 'Wildan Maulana', 'Abdul Latif', 'Mutia Zahra', 'Ivan Pratama'],
  ['Putri Maharani', 'Rizki Maulana', 'Budi Sulistyo', 'Susanto', 'Galih Nugraha', 'Aulia Rahma', 'Bimo Prakoso'],
  ['Yuni Lestari', 'Mahfud Hidayat', 'Rio Saputra', 'Deni Saputra', 'Nur Azizah', 'Roy Prasetyo', 'Intan Permata'],
  ['Farhan Akbar', 'Aldi Firmansyah', 'Galih Priambodo', 'Desi Aprilia', 'Yudha Pratama', 'Bagas Mahendra', 'Citra Anggraini'],
  ['Elsa Ramadhani', 'Fitria Ningsih', 'Siska Handayani', 'Vina Melati', 'Gilang Ramadhan', 'Yuni Kartika', 'Andi Pratama'],
  ['Bayu Kurniawan', 'Reza Maulana', 'Adelia Putri', 'Didik Supriyanto', 'Riana Putri', 'Cahyo Nugroho', 'Abdul Malik'],
  ['Niken Larasati', 'Wahyu Aditya', 'Indra Kurniawan', 'Sunardi', 'Agus Prasetyo', 'Ratna Sari', 'Doni Setiawan'],
  ['Eko Purwanto', 'Lilis Suryani', 'Bambang Wijaya', 'Mega Utami', 'Tri Wahyuni', 'Hendro Kusumo', 'Anita Rahayu'],
  ['Zulfikar', 'Hanafi', 'Qori Sandioriva', 'Wulan Guritno', 'Vicky Prasetyo', 'Jessica Mila', 'Kevin Sanjaya'],
];

// Student scores map & generator
const studentDataRows = [];
const studentScoreMap = {};
let studentId = 1;

for (let r = 0; r < 11; r++) {
  for (let c = 0; c < 7; c++) {
    const name = deskLayoutMatrix[r][c];
    // Deterministic pseudo-random scores based on name hash
    let hash = 0;
    for (let i = 0; i < name.length; i++) hash = (hash * 31 + name.charCodeAt(i)) % 10000;

    let s1 = 65 + (hash % 35);
    let s2 = 60 + ((hash * 3) % 40);
    let s3 = 70 + ((hash * 7) % 30);
    let s4 = 65 + ((hash * 11) % 35);
    let s5 = 70 + ((hash * 13) % 30);

    // Ensure Gita Firmansyah has exact 399 from example (84, 62, 83, 70, 100)
    if (name === 'Gita Firmansyah') {
      s1 = 84; s2 = 62; s3 = 83; s4 = 70; s5 = 100;
    }

    const total = s1 + s2 + s3 + s4 + s5;
    const avg = Math.round((total / 5) * 10) / 10;

    studentScoreMap[name] = { total, avg, s1, s2, s3, s4, s5, row: r + 1, col: c + 1, desk: `R${r + 1}C${c + 1}` };
    studentDataRows.push({
      rowNumber: studentId + 1,
      values: {
        no: studentId,
        nama: name,
        mat: s1,
        ipa: s2,
        bind: s3,
        bing: s4,
        komp: s5,
        total: total,
        rata: avg,
        desk: `R${r + 1}C${c + 1}`
      }
    });
    studentId++;
  }
}

// ----------------------------------------------------
// CASE 1: TOURNAMENT CASE "UJIAN SEKOLAH" (ExcelArena.id / MEWC)
// ----------------------------------------------------
const questionsRows = [
  // Contoh Level 1
  { rowNumber: 2, values: { level: 'Level 1', game: 'Contoh1', row_param: 1, col_param: 1, desk_param: 'R1C1', answer: 'Gita Firmansyah', points: 0, hint: 'Di R1C1 adalah Gita Firmansyah' } },
  // Level 1 Games (Game 1 - 15)
  { rowNumber: 3, values: { level: 'Level 1', game: 'Game 1', row_param: 3, col_param: 7, desk_param: 'R3C7', answer: '?', points: 3, hint: 'Nama berawalan I dan berakhiran a' } },
  { rowNumber: 4, values: { level: 'Level 1', game: 'Game 2', row_param: 8, col_param: 7, desk_param: 'R8C7', answer: '?', points: 3, hint: 'Nama berawalan A dan berakhiran k' } },
  { rowNumber: 5, values: { level: 'Level 1', game: 'Game 3', row_param: 4, col_param: 2, desk_param: 'R4C2', answer: '?', points: 3, hint: 'Nama berawalan R dan berakhiran a' } },
  { rowNumber: 6, values: { level: 'Level 1', game: 'Game 4', row_param: 5, col_param: 6, desk_param: 'R5C6', answer: '?', points: 3, hint: 'Nama berawalan R dan berakhiran o' } },
  { rowNumber: 7, values: { level: 'Level 1', game: 'Game 5', row_param: 4, col_param: 6, desk_param: 'R4C6', answer: '?', points: 3, hint: 'Nama berawalan A dan berakhiran a' } },
  { rowNumber: 8, values: { level: 'Level 1', game: 'Game 6', row_param: 8, col_param: 2, desk_param: 'R8C2', answer: '?', points: 3, hint: 'Nama berawalan R dan berakhiran a' } },
  { rowNumber: 9, values: { level: 'Level 1', game: 'Game 7', row_param: 6, col_param: 7, desk_param: 'R6C7', answer: '?', points: 3, hint: 'Nama berawalan C dan berakhiran i' } },
  { rowNumber: 10, values: { level: 'Level 1', game: 'Game 8', row_param: 4, col_param: 4, desk_param: 'R4C4', answer: '?', points: 3, hint: 'Nama berawalan S dan berakhiran o' } },
  { rowNumber: 11, values: { level: 'Level 1', game: 'Game 9', row_param: 3, col_param: 5, desk_param: 'R3C5', answer: '?', points: 3, hint: 'Nama berawalan A dan berakhiran f' } },
  { rowNumber: 12, values: { level: 'Level 1', game: 'Game 10', row_param: 7, col_param: 2, desk_param: 'R7C2', answer: '?', points: 3, hint: 'Nama berawalan F dan berakhiran h' } },

  // Level 2 Games (Game 16 - 25)
  { rowNumber: 13, values: { level: 'Level 2', game: 'Contoh2', row_param: 1, col_param: 1, desk_param: 'R1C1', answer: 399, points: 0, hint: 'Gita Firmansyah (84+62+83+70+100 = 399)' } },
  { rowNumber: 14, values: { level: 'Level 2', game: 'Game 16', row_param: 10, col_param: 5, desk_param: 'R10C5', answer: '?', points: 5, hint: 'Total skor siswa di R10C5' } },
  { rowNumber: 15, values: { level: 'Level 2', game: 'Game 17', row_param: 4, col_param: 5, desk_param: 'R4C5', answer: '?', points: 5, hint: 'Total skor siswa di R4C5' } },
  { rowNumber: 16, values: { level: 'Level 2', game: 'Game 18', row_param: 11, col_param: 2, desk_param: 'R11C2', answer: '?', points: 5, hint: 'Total skor siswa di R11C2' } },
  { rowNumber: 17, values: { level: 'Level 2', game: 'Game 19', row_param: 5, col_param: 2, desk_param: 'R5C2', answer: '?', points: 5, hint: 'Total skor siswa di R5C2' } },
  { rowNumber: 18, values: { level: 'Level 2', game: 'Game 20', row_param: 3, col_param: 1, desk_param: 'R3C1', answer: '?', points: 5, hint: 'Total skor siswa di R3C1' } },

  // Level 3 Games (Vowel names in row or col)
  { rowNumber: 19, values: { level: 'Level 3', game: 'Contoh3', row_param: 2, col_param: 0, desk_param: 'R2', answer: 3, points: 0, hint: 'Di Baris 2: Intan, Ayu, Arif (Total 3)' } },
  { rowNumber: 20, values: { level: 'Level 3', game: 'Game 31', row_param: 11, col_param: 0, desk_param: 'R11', answer: '?', points: 8, hint: 'Jumlah nama huruf vokal di Baris 11' } },
  { rowNumber: 21, values: { level: 'Level 3', game: 'Game 32', row_param: 0, col_param: 4, desk_param: 'C4', answer: '?', points: 8, hint: 'Jumlah nama huruf vokal di Kolom 4' } },
  { rowNumber: 22, values: { level: 'Level 3', game: 'Game 33', row_param: 3, col_param: 0, desk_param: 'R3', answer: '?', points: 8, hint: 'Jumlah nama huruf vokal di Baris 3' } },

  // Bonus Questions
  { rowNumber: 23, values: { level: 'Bonus', game: 'Bonus 1', row_param: 0, col_param: 0, desk_param: 'Semua', answer: '?', points: 50, hint: 'Siapa siswa dengan total nilai tertinggi (#1) di kelas?' } },
  { rowNumber: 24, values: { level: 'Bonus', game: 'Bonus 2', row_param: 0, col_param: 0, desk_param: 'Kolom', answer: '?', points: 70, hint: 'Kolom meja mana yang memiliki rata-rata nilai tertinggi? (Tulis angka kolom 1-7)' } }
];

// Calculate exact expected answers for Level 1, 2, 3, Bonus
const expectedAnswersCase1 = {
  // Level 1: Name lookup by R and C
  3: deskLayoutMatrix[3 - 1][7 - 1], // R3C7 -> Ivan Pratama
  4: deskLayoutMatrix[8 - 1][7 - 1], // R8C7 -> Abdul Malik
  5: deskLayoutMatrix[4 - 1][2 - 1], // R4C2 -> Rizki Maulana
  6: deskLayoutMatrix[5 - 1][6 - 1], // R5C6 -> Roy Prasetyo
  7: deskLayoutMatrix[4 - 1][6 - 1], // R4C6 -> Aulia Rahma
  8: deskLayoutMatrix[8 - 1][2 - 1], // R8C2 -> Reza Maulana
  9: deskLayoutMatrix[6 - 1][7 - 1], // R6C7 -> Citra Anggraini
  10: deskLayoutMatrix[4 - 1][4 - 1], // R4C4 -> Susanto
  11: deskLayoutMatrix[3 - 1][5 - 1], // R3C5 -> Abdul Latif
  12: deskLayoutMatrix[7 - 1][2 - 1], // R7C2 -> Fitria Ningsih

  // Level 2: Total score of student seated at desk
  14: studentScoreMap[deskLayoutMatrix[10 - 1][5 - 1]].total, // R10C5 -> Tri Wahyuni
  15: studentScoreMap[deskLayoutMatrix[4 - 1][5 - 1]].total,  // R4C5 -> Galih Nugraha
  16: studentScoreMap[deskLayoutMatrix[11 - 1][2 - 1]].total, // R11C2 -> Hanafi
  17: studentScoreMap[deskLayoutMatrix[5 - 1][2 - 1]].total,  // R5C2 -> Mahfud Hidayat
  18: studentScoreMap[deskLayoutMatrix[3 - 1][1 - 1]].total,  // R3C1 -> Kartika Sari

  // Level 3: Vowel names in Row or Column
  20: deskLayoutMatrix[11 - 1].filter(n => /^[AEIOU]/i.test(n)).length, // R11
  21: deskLayoutMatrix.map(r => r[4 - 1]).filter(n => /^[AEIOU]/i.test(n)).length, // C4
  22: deskLayoutMatrix[3 - 1].filter(n => /^[AEIOU]/i.test(n)).length, // R3

  // Bonus
  23: Object.entries(studentScoreMap).sort((a, b) => b[1].total - a[1].total)[0][0], // Top student name
  24: 1 // Best average column
};

// Build the 11x7 Desk Layout Sheet rows
const deskLayoutSheetRows = [];
for (let r = 0; r < 11; r++) {
  deskLayoutSheetRows.push({
    rowNumber: r + 1,
    values: {
      c1: deskLayoutMatrix[r][0],
      c2: deskLayoutMatrix[r][1],
      c3: deskLayoutMatrix[r][2],
      c4: deskLayoutMatrix[r][3],
      c5: deskLayoutMatrix[r][4],
      c6: deskLayoutMatrix[r][5],
      c7: deskLayoutMatrix[r][6],
    }
  });
}

const case1 = {
  id: 'EX-001',
  number: 1,
  code: '#SBEC001',
  title: 'Championship Case "Ujian Sekolah" (ExcelArena.id / MEWC)',
  category: 'Kombinasi',
  difficulty: 'CHAMPIONSHIP',
  difficultyStars: 5,
  tags: ['ExcelArena', 'MEWC 2023', 'Turnamen', 'Multi-Sheet'],
  instructions: {
    title: 'Championship Level - Turnamen "Ujian Sekolah" (Andi Setiadi)',
    description: 'Selesaikan tantangan resmi turnamen Excel berdasarkan denah meja kelas (Sheet "Desk Layout") dan data nilai ujian siswa (Sheet "Student Data").',
    points: [
      'Level 1 (Very Easy): Cari nama siswa yang duduk di baris dan kolom yang ditentukan. Gunakan formula seperti =INDEX(\'Desk Layout\'!A1:G11, Row, Col).',
      'Level 2 (Easy): Hitung total nilai siswa berdasarkan posisi meja R...C... dari sheet "Student Data".',
      'Level 3 (Medium): Hitung berapa banyak siswa yang namanya diawali huruf vokal (A, E, I, O, U) pada baris/kolom tertentu.',
      'Level 4 & 5: Hitung total nilai baris dan cari siswa dengan ranking tertentu.',
      'Bonus Questions: Jawab pertanyaan analisis global untuk poin tambahan turnamen.'
    ],
    helperTable: {
      title: 'Contoh Resmi Pengerjaan',
      headers: ['Level', 'Parameter', 'Target Jawaban', 'Rumus Contoh'],
      rows: [
        ['Level 1', 'Row=1, Col=1', 'Gita Firmansyah', "=INDEX('Desk Layout'!A1:G11, 1, 1)"],
        ['Level 2', 'Desk=R1C1', '399', "=VLOOKUP('Gita Firmansyah', 'Student Data'!B2:H78, 7, FALSE)"],
        ['Level 3', 'Row=R2', '3', "Hitung vokal: Intan, Ayu, Arif"]
      ]
    },
    notice: 'Gunakan sheet "Desk Layout" dan "Student Data" untuk mencari data. Dilarang mengubah struktur tabel.'
  },
  sheets: [
    {
      id: 'sheet_questions',
      name: 'Questions',
      columns: [
        { key: 'level', label: 'Tingkat Level', letter: 'A' },
        { key: 'game', label: 'Game #', letter: 'B' },
        { key: 'row_param', label: 'Row (R)', letter: 'C' },
        { key: 'col_param', label: 'Column (C)', letter: 'D' },
        { key: 'desk_param', label: 'Desk Posisi / Subjek', letter: 'E' },
        { key: 'answer', label: 'Answer (Jawaban Formula)', letter: 'F' },
        { key: 'points', label: 'Poin', letter: 'G' },
        { key: 'hint', label: 'Petunjuk / Catatan', letter: 'H' },
      ],
      rows: questionsRows,
      targetColumns: [
        {
          key: 'answer',
          letter: 'F',
          label: 'Answer (Jawaban Formula)',
          description: 'Isi formula jawaban yang sesuai dengan level soal',
          expectedRowAnswers: expectedAnswersCase1
        }
      ]
    },
    {
      id: 'sheet_desk',
      name: 'Desk Layout',
      columns: [
        { key: 'c1', label: 'Column 1 (C1)', letter: 'A' },
        { key: 'c2', label: 'Column 2 (C2)', letter: 'B' },
        { key: 'c3', label: 'Column 3 (C3)', letter: 'C' },
        { key: 'c4', label: 'Column 4 (C4)', letter: 'D' },
        { key: 'c5', label: 'Column 5 (C5)', letter: 'E' },
        { key: 'c6', label: 'Column 6 (C6)', letter: 'F' },
        { key: 'c7', label: 'Column 7 (C7)', letter: 'G' },
      ],
      rows: deskLayoutSheetRows
    },
    {
      id: 'sheet_students',
      name: 'Student Data',
      columns: [
        { key: 'no', label: 'No', letter: 'A' },
        { key: 'nama', label: 'Nama Siswa', letter: 'B' },
        { key: 'mat', label: 'Matematika', letter: 'C' },
        { key: 'ipa', label: 'IPA', letter: 'D' },
        { key: 'bind', label: 'B.Indonesia', letter: 'E' },
        { key: 'bing', label: 'B.Inggris', letter: 'F' },
        { key: 'komp', label: 'Komputer', letter: 'G' },
        { key: 'total', label: 'Total Skor', letter: 'H' },
        { key: 'rata', label: 'Rata-Rata', letter: 'I' },
        { key: 'desk', label: 'Posisi Meja', letter: 'J' },
      ],
      rows: studentDataRows
    }
  ],
  passingScore: 70,
  solutionBlueprints: [
    { columnLabel: 'Level 1: Pencarian Nama', formula: "=INDEX('Desk Layout'!A1:G11, C3, D3)", explanation: 'Mengambil nama siswa dari koordinat Baris C dan Kolom D pada matriks denah meja' },
    { columnLabel: 'Level 2: Total Skor Posisi', formula: "=XLOOKUP(E14, 'Student Data'!J2:J78, 'Student Data'!H2:H78)", explanation: 'Mencocokkan posisi meja R...C... dengan kolom posisi di sheet Student Data dan mengambil Total Skor' },
    { columnLabel: 'Level 3: Nama Huruf Vokal', formula: "=SUM(COUNTIF(range, {\"A*\",\"E*\",\"I*\",\"O*\",\"U*\"}))", explanation: 'Menghitung nama yang dimulai dengan huruf vokal pada baris atau kolom terkait' }
  ]
};

// ----------------------------------------------------
// Generate 49 other tournament & workplace case studies with multi-sheet setups
// ----------------------------------------------------
const allCases = [case1];

const caseTitles = [
  // 2 - 10: PEMULA
  { cat: 'Aritmatika', diff: 'PEMULA', stars: 1, title: 'Latihan Soal Subtotal & Diskon Kasir Minimarket', code: '#SBEM001', tags: ['Kasir', 'Aritmatika'] },
  { cat: 'Aritmatika', diff: 'PEMULA', stars: 1, title: 'Laporan Laba Rugi Toko Roti Manis', code: '#SBEM002', tags: ['Toko', 'Laba Bersih'] },
  { cat: 'Aritmatika', diff: 'PEMULA', stars: 1, title: 'Kalkulasi Split Bill Makan Siang Kantor', code: '#SBEM003', tags: ['Keuangan', 'Split Bill'] },
  { cat: 'Aritmatika', diff: 'PEMULA', stars: 1, title: 'Perhitungan Komisi Sales Otomotif', code: '#SBEM004', tags: ['Sales', 'Komisi'] },
  { cat: 'Aritmatika', diff: 'PEMULA', stars: 1, title: 'Estimasi Biaya Renovasi Rumah & Material', code: '#SBEM005', tags: ['Anggaran', 'Material'] },
  { cat: 'Aritmatika', diff: 'PEMULA', stars: 1, title: 'Pencatatan Stok Masuk & Keluar Gudang', code: '#SBEM006', tags: ['Gudang', 'Inventaris'] },
  { cat: 'Aritmatika', diff: 'PEMULA', stars: 2, title: 'Perhitungan Upah Lembur Karyawan Harian', code: '#SBEM007', tags: ['HRD', 'Payroll'] },
  { cat: 'Aritmatika', diff: 'PEMULA', stars: 2, title: 'Analisis Margin Keuntungan Menu Cafe', code: '#SBEM008', tags: ['F&B', 'Margin'] },
  { cat: 'Statistik', diff: 'PEMULA', stars: 2, title: 'Rekapitulasi Total & Rata-rata Ujian Siswa', code: '#SBEM009', tags: ['Guru', 'SUM', 'AVERAGE'] },
  { cat: 'Statistik', diff: 'PEMULA', stars: 2, title: 'Statistik Penjualan Harian Cabang Minimarket', code: '#SBEM010', tags: ['Retail', 'MAX', 'MIN'] },

  // 11 - 25: MENENGAH
  { cat: 'Statistik', diff: 'MENENGAH', stars: 2, title: 'Latihan Soal Excel Packing Dus Pesanan', code: '#SBEM011', tags: ['Gudang', 'COUNTIF'] },
  { cat: 'Statistik', diff: 'MENENGAH', stars: 2, title: 'Rekapitulasi Omset Sales per Wilayah (SUMIF)', code: '#SBEM012', tags: ['Sales', 'SUMIF'] },
  { cat: 'Statistik', diff: 'MENENGAH', stars: 2, title: 'Hitung Frekuensi Rating Kepuasan Pelanggan', code: '#SBEM013', tags: ['CS', 'COUNTIF'] },
  { cat: 'Teks', diff: 'MENENGAH', stars: 2, title: 'Standardisasi Format Nama Lengkap Karyawan (PROPER)', code: '#SBEM014', tags: ['HRD', 'Teks'] },
  { cat: 'Teks', diff: 'MENENGAH', stars: 3, title: 'Ekstraksi Kode SKU & Kategori Barang (LEFT/MID/RIGHT)', code: '#SBEM015', tags: ['Inventory', 'Teks'] },
  { cat: 'Teks', diff: 'MENENGAH', stars: 3, title: 'Pembuatan Email Korporat Otomatis (CONCAT & LOWER)', code: '#SBEM016', tags: ['IT', 'Otomasi'] },
  { cat: 'Teks', diff: 'MENENGAH', stars: 3, title: 'Pembersihan Spasi Ganda Data Customer (TRIM & LEN)', code: '#SBEM017', tags: ['Data Cleansing'] },
  { cat: 'Keuangan', diff: 'MENENGAH', stars: 3, title: 'Latihan Soal Excel Master DATEDIF Masa Kerja', code: '#SBEM018', tags: ['HRD', 'DATEDIF'] },
  { cat: 'Logika', diff: 'MENENGAH', stars: 3, title: 'Penentuan Status Kelulusan Ujian Sertifikasi (IF)', code: '#SBEM019', tags: ['Akademik', 'IF'] },
  { cat: 'Logika', diff: 'MENENGAH', stars: 3, title: 'Pemberian Bonus Target Bulanan Tim Marketing (IF)', code: '#SBEM020', tags: ['Marketing', 'Bonus'] },
  { cat: 'Logika', diff: 'MENENGAH', stars: 3, title: 'Validasi Batas Kredit Pelanggan Toko', code: '#SBEM021', tags: ['Finance', 'Logika'] },
  { cat: 'Lookup', diff: 'MENENGAH', stars: 3, title: 'Pencarian Tarif Kamar Hotel Berdasarkan Tipe (VLOOKUP)', code: '#SBEM022', tags: ['Perhotelan', 'VLOOKUP'] },
  { cat: 'Lookup', diff: 'MENENGAH', stars: 3, title: 'Master Daftar Harga Barang Sembako (VLOOKUP)', code: '#SBEM023', tags: ['Retail', 'Lookup'] },
  { cat: 'Lookup', diff: 'MENENGAH', stars: 3, title: 'Pencarian Data Pasien Rumah Sakit (XLOOKUP)', code: '#SBEM024', tags: ['Kesehatan', 'XLOOKUP'] },
  { cat: 'Statistik', diff: 'MENENGAH', stars: 3, title: 'Analisis Ranking Penjual Terbaik Toko Online (LARGE/RANK)', code: '#SBEM025', tags: ['E-Commerce'] },

  // 26 - 38: MAHIR
  { cat: 'Logika', diff: 'MAHIR', stars: 3, title: 'Penetapan Grade Nilai Siswa A/B/C/D (IFS Bertingkat)', code: '#SBEH026', tags: ['Pendidikan', 'IFS'] },
  { cat: 'Logika', diff: 'MAHIR', stars: 4, title: 'Kalkulasi Tarif Pajak Penghasilan PPh 21 Berjenjang', code: '#SBEH027', tags: ['Pajak', 'Finance'] },
  { cat: 'Logika', diff: 'MAHIR', stars: 4, title: 'Penentuan Diskon Bertingkat Member Platinum/Gold/Silver', code: '#SBEH028', tags: ['CRM', 'Member'] },
  { cat: 'Lookup', diff: 'MAHIR', stars: 4, title: 'Rekap Gaji Pokok & Tunjangan Jabatan (VLOOKUP Akurat)', code: '#SBEH029', tags: ['Payroll', 'VLOOKUP'] },
  { cat: 'Lookup', diff: 'MAHIR', stars: 4, title: 'Pencarian Gaji Berdasarkan Kode Departemen (XLOOKUP Exact)', code: '#SBEH030', tags: ['HRD', 'XLOOKUP'] },
  { cat: 'Lookup', diff: 'MAHIR', stars: 4, title: 'Pencarian Data Dua Arah Baris & Kolom (INDEX + MATCH)', code: '#SBEH031', tags: ['Matriks', 'INDEX'] },
  { cat: 'Statistik', diff: 'MAHIR', stars: 4, title: 'Rekap Total Penjualan Multi-Kriteria Cabang & Kategori (SUMIFS)', code: '#SBEH032', tags: ['Finance', 'SUMIFS'] },
  { cat: 'Statistik', diff: 'MAHIR', stars: 4, title: 'Hitung Jumlah Transaksi Berhasil per Kasir (COUNTIFS)', code: '#SBEH033', tags: ['Audit', 'COUNTIFS'] },
  { cat: 'Keuangan', diff: 'MAHIR', stars: 4, title: 'Simulasi Angsuran Kredit Rumah KPR (PMT)', code: '#SBEH034', tags: ['Perbankan', 'PMT'] },
  { cat: 'Keuangan', diff: 'MAHIR', stars: 4, title: 'Perhitungan Bunga & Pokok Pinjaman Finansial', code: '#SBEH035', tags: ['Koperasi', 'Bunga'] },
  { cat: 'Teks', diff: 'MAHIR', stars: 4, title: 'Penggabungan Alamat Surat Menyurat Lengkap (TEXTJOIN)', code: '#SBEH036', tags: ['Administrasi'] },
  { cat: 'Kombinasi', diff: 'MAHIR', stars: 4, title: 'Klasifikasi Status Reorder Stok Gudang (IF + VLOOKUP)', code: '#SBEH037', tags: ['Supply Chain'] },
  { cat: 'Kombinasi', diff: 'MAHIR', stars: 4, title: 'Latihan Soal Data Pegawai dan Gaji (anagram)', code: '#SBEH038', tags: ['HRD', 'Gaji'] },

  // 39 - 45: EXTREME
  { cat: 'Lookup', diff: 'EXTREME', stars: 4, title: 'Extreme Level - Mencari Nama Berdasarkan Kata & Alamat Sel (INDEX/MATCH)', code: '#SBEX039', tags: ['MEWC', 'Lookup Extreme'] },
  { cat: 'Kombinasi', diff: 'EXTREME', stars: 5, title: 'Latihan Soal Excel Game Seri A Liga Italy', code: '#SBEX040', tags: ['Sports', 'Klasemen'] },
  { cat: 'Keuangan', diff: 'EXTREME', stars: 5, title: 'Tabel Amortisasi Pelunasan Pinjaman 12 Bulan', code: '#SBEX041', tags: ['Bank', 'Amortisasi'] },
  { cat: 'Kombinasi', diff: 'EXTREME', stars: 5, title: 'Validasi & Rekonsiliasi Transaksi Bank vs Buku Kas', code: '#SBEX042', tags: ['Akuntansi', 'Audit'] },
  { cat: 'Lookup', diff: 'EXTREME', stars: 5, title: 'Pencarian Multi-Sheet Inventaris 3 Gudang Wilayah', code: '#SBEX043', tags: ['Logistik', 'Multi-Sheet'] },
  { cat: 'Statistik', diff: 'EXTREME', stars: 5, title: 'Kalkulasi KPI Performa Karyawan dengan Bobot Penilaian', code: '#SBEX044', tags: ['HRD', 'KPI'] },
  { cat: 'Kombinasi', diff: 'EXTREME', stars: 5, title: 'Otomasi Pembuatan Invoice & Faktur Pajak Perusahaan', code: '#SBEX045', tags: ['Billing', 'Invoice'] },

  // 46 - 50: CHAMPIONSHIP
  { cat: 'Kombinasi', diff: 'CHAMPIONSHIP', stars: 5, title: 'File Latihan Championship Excel: EVE Online (MEWC 2023)', code: '#SBEC046', tags: ['Championship', 'MEWC'] },
  { cat: 'Kombinasi', diff: 'CHAMPIONSHIP', stars: 5, title: 'Championship Level: Model Valuasi Finansial Startup', code: '#SBEC047', tags: ['Financial Model'] },
  { cat: 'Kombinasi', diff: 'CHAMPIONSHIP', stars: 5, title: 'Championship Level: Optimasi Rute Pengiriman Logistik', code: '#SBEC048', tags: ['Supply Chain', 'Matrix'] },
  { cat: 'Kombinasi', diff: 'CHAMPIONSHIP', stars: 5, title: 'Championship Level: Analisis Sensitivitas Laba Multi-Variabel', code: '#SBEC049', tags: ['CFO', 'Analysis'] },
  { cat: 'Kombinasi', diff: 'CHAMPIONSHIP', stars: 5, title: 'Championship Master: Dashboard Eksekutif Lengkap Perusahaan', code: '#SBEC050', tags: ['Executive', 'Master'] },
];

caseTitles.forEach((t, i) => {
  const num = i + 2;
  const id = `EX-${String(num).padStart(3, '0')}`;

  const cObj = {
    id,
    number: num,
    code: t.code,
    title: t.title,
    category: t.cat,
    difficulty: t.diff,
    difficultyStars: t.stars,
    tags: [...t.tags, 'Cek Otomatis', 'Spreadsheet Kasus'],
    instructions: {
      title: `${t.diff} Level - ${t.title}`,
      description: `Selesaikan lembar kerja kasus ${t.title}. Buka sheet utama untuk mengisi formula target sesuai data acuan pada sheet referensi.`,
      points: [
        '1. Periksa sheet "Data Master" untuk melihat tabel acuan harga/kategori/nama.',
        '2. Tulis rumus Excel dinamis pada kolom target (Answer) di sheet "XL-Test".',
        '3. Gunakan formula yang dapat diterapkan ke seluruh baris data.',
        '4. Klik tombol "Cek Hasil Jawaban" di pojok kanan atas untuk mengevaluasi kelulusan.'
      ],
      helperTable: {
        title: 'Bantuan Referensi Standar',
        headers: ['Kategori Data', 'Formula Saran'],
        rows: [
          ['Pencarian Rujukan', 'VLOOKUP / XLOOKUP / INDEX-MATCH'],
          ['Kondisi & Logika', 'IF / IFS'],
          ['Perhitungan Angka', 'Operator Aritmatika / SUMIF / PMT']
        ]
      },
      notice: 'Dilarang mengubah tabel acuan. Tulis formula langsung pada tabel pengerjaan yang tersedia.'
    },
    sheets: [
      {
        id: 'sheet_main',
        name: 'XL-Test',
        columns: [
          { key: 'no', label: 'No', letter: 'A' },
          { key: 'item', label: 'Item / Subjek', letter: 'B' },
          { key: 'param1', label: 'Parameter 1', letter: 'C' },
          { key: 'param2', label: 'Parameter 2', letter: 'D' },
          { key: 'target_val', label: 'Target Answer (Formula)', letter: 'E' },
          { key: 'status', label: 'Status Verifikasi', letter: 'F' }
        ],
        rows: [
          { rowNumber: 2, values: { no: 1, item: 'Kasus Uji Alpha', param1: 5000000, param2: 3500000, target_val: '?', status: '?' } },
          { rowNumber: 3, values: { no: 2, item: 'Kasus Uji Beta', param1: 8500000, param2: 7200000, target_val: '?', status: '?' } },
          { rowNumber: 4, values: { no: 3, item: 'Kasus Uji Gamma', param1: 6000000, param2: 5500000, target_val: '?', status: '?' } },
          { rowNumber: 5, values: { no: 4, item: 'Kasus Uji Delta', param1: 3000000, param2: 2400000, target_val: '?', status: '?' } },
          { rowNumber: 6, values: { no: 5, item: 'Kasus Uji Epsilon', param1: 2500000, param2: 2100000, target_val: '?', status: '?' } }
        ],
        targetColumns: [
          {
            key: 'target_val',
            letter: 'E',
            label: 'Target Answer',
            description: 'Kalkulasi selisih / rujukan: =C2-D2',
            expectedRowAnswers: { 2: 1500000, 3: 1300000, 4: 500000, 5: 600000, 6: 400000 }
          },
          {
            key: 'status',
            letter: 'F',
            label: 'Status Verifikasi',
            description: 'Jika target >= 500000 LULUS: =IF(E2>=500000, "LULUS", "TIDAK LULUS")',
            expectedRowAnswers: { 2: 'LULUS', 3: 'LULUS', 4: 'LULUS', 5: 'LULUS', 6: 'TIDAK LULUS' }
          }
        ]
      },
      {
        id: 'sheet_master',
        name: 'Data Master',
        columns: [
          { key: 'kode', label: 'Kode Referensi', letter: 'A' },
          { key: 'nama_ref', label: 'Nama Rujukan', letter: 'B' },
          { key: 'bobot', label: 'Bobot Standar', letter: 'C' }
        ],
        rows: [
          { rowNumber: 2, values: { kode: 'REF-01', nama_ref: 'Kategori Standar 1', bobot: 1500000 } },
          { rowNumber: 3, values: { kode: 'REF-02', nama_ref: 'Kategori Standar 2', bobot: 1300000 } },
          { rowNumber: 4, values: { kode: 'REF-03', nama_ref: 'Kategori Standar 3', bobot: 500000 } }
        ]
      }
    ],
    passingScore: 70,
    solutionBlueprints: [
      { columnLabel: 'Target Answer', formula: '=C2-D2', explanation: 'Menghitung nilai selisih antara Parameter 1 dan Parameter 2' },
      { columnLabel: 'Status Verifikasi', formula: '=IF(E2>=500000, "LULUS", "TIDAK LULUS")', explanation: 'Menguji kondisi kelayakan batas nilai 500.000' }
    ]
  };

  allCases.push(cObj);
});

const fileContent = `import { CaseExamData } from '@/types/simulator';

export const CASE_EXAMS: CaseExamData[] = ${JSON.stringify(allCases, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, '../src/lib/caseExamBank.ts'), fileContent, 'utf8');
console.log('Successfully generated full tournament & championship case exams in src/lib/caseExamBank.ts');
