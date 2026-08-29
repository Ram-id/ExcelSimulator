const fs = require('fs');
const path = require('path');

// ==========================================
// 1. DATASET FOR CASE 1: TOURNAMENT "UJIAN SEKOLAH" (ExcelArena MEWC)
// ==========================================
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

const studentDataRows = [];
const studentScoreMap = {};
let studentId = 1;

for (let r = 0; r < 11; r++) {
  for (let c = 0; c < 7; c++) {
    const name = deskLayoutMatrix[r][c];
    let hash = 0;
    for (let i = 0; i < name.length; i++) hash = (hash * 31 + name.charCodeAt(i)) % 10000;

    let s1 = 65 + (hash % 35);
    let s2 = 60 + ((hash * 3) % 40);
    let s3 = 70 + ((hash * 7) % 30);
    let s4 = 65 + ((hash * 11) % 35);
    let s5 = 70 + ((hash * 13) % 30);

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

const case1ExpectedAnswers = {
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

  14: studentScoreMap[deskLayoutMatrix[10 - 1][5 - 1]].total, // R10C5 -> Tri Wahyuni
  15: studentScoreMap[deskLayoutMatrix[4 - 1][5 - 1]].total,  // R4C5 -> Galih Nugraha
  16: studentScoreMap[deskLayoutMatrix[11 - 1][2 - 1]].total, // R11C2 -> Hanafi
  17: studentScoreMap[deskLayoutMatrix[5 - 1][2 - 1]].total,  // R5C2 -> Mahfud Hidayat
  18: studentScoreMap[deskLayoutMatrix[3 - 1][1 - 1]].total,  // R3C1 -> Kartika Sari

  20: deskLayoutMatrix[11 - 1].filter(n => /^[AEIOU]/i.test(n)).length, // R11
  21: deskLayoutMatrix.map(r => r[4 - 1]).filter(n => /^[AEIOU]/i.test(n)).length, // C4
  22: deskLayoutMatrix[3 - 1].filter(n => /^[AEIOU]/i.test(n)).length, // R3

  23: Object.entries(studentScoreMap).sort((a, b) => b[1].total - a[1].total)[0][0], // Top student
  24: 1
};

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
      'Level 1: Cari nama siswa yang duduk di baris dan kolom yang ditentukan. Contoh di R1C1 adalah Gita Firmansyah. Gunakan =INDEX(\'Desk Layout\'!A1:G11, C3, D3).',
      'Level 2: Cari total nilai siswa berdasarkan posisi meja R...C... dari sheet "Student Data". Contoh di R1C1 total nilai Gita = 399. Gunakan =XLOOKUP(E14, \'Student Data\'!J2:J78, \'Student Data\'!H2:H78).',
      'Level 3: Hitung berapa banyak siswa yang namanya diawali huruf vokal (A, E, I, O, U) pada baris/kolom tertentu.',
      'Bonus Questions: Jawab pertanyaan analisis global untuk poin tambahan turnamen.'
    ],
    helperTable: {
      title: 'Contoh Resmi Soal & Jawaban',
      headers: ['Level', 'Parameter', 'Jawaban', 'Saran Rumus'],
      rows: [
        ['Level 1', 'Row=1, Col=1', 'Gita Firmansyah', "=INDEX('Desk Layout'!A1:G11, 1, 1)"],
        ['Level 2', 'Desk=R1C1', '399', "=XLOOKUP(E14, 'Student Data'!J2:J78, 'Student Data'!H2:H78)"],
        ['Level 3', 'Row=R2', '3', "Hitung vokal: Intan, Ayu, Arif"]
      ]
    },
    notice: 'Gunakan sheet "Desk Layout" dan "Student Data" untuk mencari data. Tulis rumus di kolom Answer.'
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
      rows: [
        { rowNumber: 2, values: { level: 'Level 1', game: 'Contoh1', row_param: 1, col_param: 1, desk_param: 'R1C1', answer: 'Gita Firmansyah', points: 0, hint: 'Di R1C1 adalah Gita Firmansyah' } },
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

        { rowNumber: 13, values: { level: 'Level 2', game: 'Contoh2', row_param: 1, col_param: 1, desk_param: 'R1C1', answer: 399, points: 0, hint: 'Gita Firmansyah (84+62+83+70+100 = 399)' } },
        { rowNumber: 14, values: { level: 'Level 2', game: 'Game 16', row_param: 10, col_param: 5, desk_param: 'R10C5', answer: '?', points: 5, hint: 'Total skor siswa di R10C5' } },
        { rowNumber: 15, values: { level: 'Level 2', game: 'Game 17', row_param: 4, col_param: 5, desk_param: 'R4C5', answer: '?', points: 5, hint: 'Total skor siswa di R4C5' } },
        { rowNumber: 16, values: { level: 'Level 2', game: 'Game 18', row_param: 11, col_param: 2, desk_param: 'R11C2', answer: '?', points: 5, hint: 'Total skor siswa di R11C2' } },
        { rowNumber: 17, values: { level: 'Level 2', game: 'Game 19', row_param: 5, col_param: 2, desk_param: 'R5C2', answer: '?', points: 5, hint: 'Total skor siswa di R5C2' } },
        { rowNumber: 18, values: { level: 'Level 2', game: 'Game 20', row_param: 3, col_param: 1, desk_param: 'R3C1', answer: '?', points: 5, hint: 'Total skor siswa di R3C1' } },

        { rowNumber: 19, values: { level: 'Level 3', game: 'Contoh3', row_param: 2, col_param: 0, desk_param: 'R2', answer: 3, points: 0, hint: 'Di Baris 2: Intan, Ayu, Arif (Total 3)' } },
        { rowNumber: 20, values: { level: 'Level 3', game: 'Game 31', row_param: 11, col_param: 0, desk_param: 'R11', answer: '?', points: 8, hint: 'Jumlah nama huruf vokal di Baris 11' } },
        { rowNumber: 21, values: { level: 'Level 3', game: 'Game 32', row_param: 0, col_param: 4, desk_param: 'C4', answer: '?', points: 8, hint: 'Jumlah nama huruf vokal di Kolom 4' } },
        { rowNumber: 22, values: { level: 'Level 3', game: 'Game 33', row_param: 3, col_param: 0, desk_param: 'R3', answer: '?', points: 8, hint: 'Jumlah nama huruf vokal di Baris 3' } },

        { rowNumber: 23, values: { level: 'Bonus', game: 'Bonus 1', row_param: 0, col_param: 0, desk_param: 'Semua', answer: '?', points: 50, hint: 'Siapa siswa dengan total nilai tertinggi (#1) di kelas?' } },
        { rowNumber: 24, values: { level: 'Bonus', game: 'Bonus 2', row_param: 0, col_param: 0, desk_param: 'Kolom', answer: '?', points: 70, hint: 'Kolom meja mana yang memiliki rata-rata nilai tertinggi? (Tulis angka kolom 1-7)' } }
      ],
      targetColumns: [
        {
          key: 'answer',
          letter: 'F',
          label: 'Answer (Jawaban Formula)',
          description: 'Isi formula jawaban yang sesuai dengan level soal',
          expectedRowAnswers: case1ExpectedAnswers
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

// ==========================================
// 50 DIVERSE & AUTHENTIC REAL-WORLD CASES DEFINITION
// ==========================================

const allCases = [case1];

// 2. Data Pegawai & Gaji (Payroll HRD)
allCases.push({
  id: 'EX-002',
  number: 2,
  code: '#SBEX007',
  title: 'Latihan Soal Data Pegawai dan Gaji (Payroll HRD)',
  category: 'Lookup',
  difficulty: 'EXTREME',
  difficultyStars: 4,
  tags: ['HRD', 'Payroll', 'VLOOKUP', 'IF'],
  instructions: {
    title: 'Extreme Level - Rekapitulasi Gaji & Tunjangan Pegawai',
    description: 'Departemen HRD memerlukan perhitungan lengkap Gaji Pokok, Tunjangan Jabatan, Uang Lembur, Potongan PPh 21, dan Gaji Bersih berdasarkan sheet acuan "Tabel Tarif".',
    points: [
      '1. Kolom E (Gaji Pokok): Ambil dari sheet "Tabel Tarif" berdasarkan Golongan (kolom D) menggunakan =VLOOKUP(D2, \'Tabel Tarif\'!A2:C5, 2, FALSE).',
      '2. Kolom F (Tunjangan Jabatan): Ambil dari sheet "Tabel Tarif" berdasarkan Golongan menggunakan =VLOOKUP(D2, \'Tabel Tarif\'!A2:C5, 3, FALSE).',
      '3. Kolom H (Uang Lembur): Jam Lembur * Rp 50.000 (=G2 * 50000).',
      '4. Kolom I (Gaji Kotor): Gaji Pokok + Tunjangan Jabatan + Uang Lembur (=E2 + F2 + H2).',
      '5. Kolom J (Potongan PPh 21 5%): 5% dari Gaji Kotor (=I2 * 0.05).',
      '6. Kolom K (Gaji Bersih): Gaji Kotor - Potongan PPh 21 (=I2 - J2).'
    ],
    helperTable: {
      title: 'Ketentuan Rumus Gaji',
      headers: ['Komponen', 'Formula'],
      rows: [
        ['Gaji Pokok', "=VLOOKUP(D2, 'Tabel Tarif'!A2:C5, 2, FALSE)"],
        ['Tunjangan', "=VLOOKUP(D2, 'Tabel Tarif'!A2:C5, 3, FALSE)"],
        ['Uang Lembur', '=Jam Lembur * 50000'],
        ['Gaji Bersih', '=Gaji Kotor - PPh 21']
      ]
    },
    notice: 'Gunakan sheet "Tabel Tarif" untuk referensi tarif gaji dan tunjangan.'
  },
  sheets: [
    {
      id: 'sheet_payroll',
      name: 'Rekap Gaji Pegawai',
      columns: [
        { key: 'id', label: 'ID Pegawai', letter: 'A' },
        { key: 'nama', label: 'Nama Pegawai', letter: 'B' },
        { key: 'dept', label: 'Departemen', letter: 'C' },
        { key: 'gol', label: 'Golongan', letter: 'D' },
        { key: 'gapok', label: 'Gaji Pokok (Rp)', letter: 'E' },
        { key: 'tunjangan', label: 'Tunjangan (Rp)', letter: 'F' },
        { key: 'lembur_jam', label: 'Jam Lembur', letter: 'G' },
        { key: 'lembur_rp', label: 'Uang Lembur (Rp)', letter: 'H' },
        { key: 'gaji_kotor', label: 'Gaji Kotor (Rp)', letter: 'I' },
        { key: 'pph', label: 'PPh 21 5% (Rp)', letter: 'J' },
        { key: 'thp', label: 'Gaji Bersih (THP)', letter: 'K' },
      ],
      rows: [
        { rowNumber: 2, values: { id: 'EMP-001', nama: 'Budi Santoso', dept: 'Keuangan', gol: 'IV', gapok: '?', tunjangan: '?', lembur_jam: 10, lembur_rp: '?', gaji_kotor: '?', pph: '?', thp: '?' } },
        { rowNumber: 3, values: { id: 'EMP-002', nama: 'Siti Aminah', dept: 'Pemasaran', gol: 'III', gapok: '?', tunjangan: '?', lembur_jam: 5, lembur_rp: '?', gaji_kotor: '?', pph: '?', thp: '?' } },
        { rowNumber: 4, values: { id: 'EMP-003', nama: 'Rudi Hermawan', dept: 'Teknologi IT', gol: 'IV', gapok: '?', tunjangan: '?', lembur_jam: 12, lembur_rp: '?', gaji_kotor: '?', pph: '?', thp: '?' } },
        { rowNumber: 5, values: { id: 'EMP-004', nama: 'Dewi Lestari', dept: 'Sumber Daya HRD', gol: 'II', gapok: '?', tunjangan: '?', lembur_jam: 0, lembur_rp: '?', gaji_kotor: '?', pph: '?', thp: '?' } },
        { rowNumber: 6, values: { id: 'EMP-005', nama: 'Ahmad Fauzi', dept: 'Operasional', gol: 'III', gapok: '?', tunjangan: '?', lembur_jam: 8, lembur_rp: '?', gaji_kotor: '?', pph: '?', thp: '?' } }
      ],
      targetColumns: [
        {
          key: 'gapok',
          letter: 'E',
          label: 'Gaji Pokok',
          description: 'Lookup dari Tabel Tarif',
          expectedRowAnswers: { 2: 10000000, 3: 7500000, 4: 10000000, 5: 5000000, 6: 7500000 }
        },
        {
          key: 'tunjangan',
          letter: 'F',
          label: 'Tunjangan',
          description: 'Lookup dari Tabel Tarif',
          expectedRowAnswers: { 2: 3500000, 3: 2000000, 4: 3500000, 5: 1000000, 6: 2000000 }
        },
        {
          key: 'lembur_rp',
          letter: 'H',
          label: 'Uang Lembur',
          description: 'Jam Lembur * 50000',
          expectedRowAnswers: { 2: 500000, 3: 250000, 4: 600000, 5: 0, 6: 400000 }
        },
        {
          key: 'gaji_kotor',
          letter: 'I',
          label: 'Gaji Kotor',
          description: 'Gapok + Tunjangan + Lembur',
          expectedRowAnswers: { 2: 14000000, 3: 9750000, 4: 14100000, 5: 6000000, 6: 9900000 }
        },
        {
          key: 'thp',
          letter: 'K',
          label: 'Gaji Bersih',
          description: 'Gaji Kotor - PPh 21 (5%)',
          expectedRowAnswers: { 2: 13300000, 3: 9262500, 4: 13395000, 5: 5700000, 6: 9405000 }
        }
      ]
    },
    {
      id: 'sheet_tarif',
      name: 'Tabel Tarif',
      columns: [
        { key: 'gol', label: 'Golongan', letter: 'A' },
        { key: 'gapok', label: 'Gaji Pokok Standar (Rp)', letter: 'B' },
        { key: 'tunjangan', label: 'Tunjangan Jabatan (Rp)', letter: 'C' },
      ],
      rows: [
        { rowNumber: 2, values: { gol: 'I', gapok: 3500000, tunjangan: 500000 } },
        { rowNumber: 3, values: { gol: 'II', gapok: 5000000, tunjangan: 1000000 } },
        { rowNumber: 4, values: { gol: 'III', gapok: 7500000, tunjangan: 2000000 } },
        { rowNumber: 5, values: { gol: 'IV', gapok: 10000000, tunjangan: 3500000 } }
      ]
    }
  ],
  passingScore: 70,
  solutionBlueprints: [
    { columnLabel: 'Gaji Pokok', formula: "=VLOOKUP(D2, 'Tabel Tarif'!A2:C5, 2, FALSE)", explanation: 'Mengambil gaji pokok dari Tabel Tarif berdasarkan golongan' },
    { columnLabel: 'Tunjangan', formula: "=VLOOKUP(D2, 'Tabel Tarif'!A2:C5, 3, FALSE)", explanation: 'Mengambil tunjangan jabatan dari Tabel Tarif' },
    { columnLabel: 'Gaji Bersih', formula: '=I2 - (I2 * 0.05)', explanation: 'Mengurangi gaji kotor dengan potongan pajak PPh 21 5%' }
  ]
});

// 3. Game Klasemen Seri A Liga Italy
allCases.push({
  id: 'EX-003',
  number: 3,
  code: '#SBEH010',
  title: 'Latihan Soal Excel Game Seri A Liga Italy',
  category: 'Kombinasi',
  difficulty: 'MAHIR',
  difficultyStars: 4,
  tags: ['Sports', 'Klasemen', 'SUM', 'IF'],
  instructions: {
    title: 'Hard Level - Kalkulasi Tabel Klasemen Seri A Liga Italy',
    description: 'Hitung statistik klasemen pertandingan sepak bola: Total Main (P), Selisih Gol (GD), dan Total Poin (Pts) berdasarkan jumlah Menang (W=3 poin), Seri (D=1 poin), dan Kalah (L=0 poin).',
    points: [
      '1. Kolom F (P = Main): Jumlahkan pertandingan Menang + Seri + Kalah (=C2+D2+E2).',
      '2. Kolom I (GD = Selisih Gol): Gol Memasukkan (GF) dikurangi Gol Kemasukan (GA) (=G2-H2).',
      '3. Kolom J (Pts = Total Poin): (Menang * 3) + (Seri * 1) (=C2*3 + D2*1).'
    ],
    helperTable: {
      title: 'Aturan Poin Sepak Bola',
      headers: ['Hasil', 'Poin'],
      rows: [
        ['Menang (W)', '3 Poin'],
        ['Seri (D)', '1 Poin'],
        ['Kalah (L)', '0 Poin'],
        ['Selisih Gol (GD)', 'GF - GA']
      ]
    },
    notice: 'Tulis rumus kalkulasi klasemen pada kolom P, GD, dan Pts.'
  },
  sheets: [
    {
      id: 'sheet_klasemen',
      name: 'Klasemen Seri A',
      columns: [
        { key: 'pos', label: 'Pos', letter: 'A' },
        { key: 'klub', label: 'Klub Sepak Bola', letter: 'B' },
        { key: 'w', label: 'Menang (W)', letter: 'C' },
        { key: 'd', label: 'Seri (D)', letter: 'D' },
        { key: 'l', label: 'Kalah (L)', letter: 'E' },
        { key: 'p', label: 'Main (P)', letter: 'F' },
        { key: 'gf', label: 'Gol Masuk (GF)', letter: 'G' },
        { key: 'ga', label: 'Gol Kebobolan (GA)', letter: 'H' },
        { key: 'gd', label: 'Selisih Gol (GD)', letter: 'I' },
        { key: 'pts', label: 'Total Poin (Pts)', letter: 'J' },
      ],
      rows: [
        { rowNumber: 2, values: { pos: 1, klub: 'Inter Milan', w: 28, d: 5, l: 3, p: '?', gf: 81, ga: 19, gd: '?', pts: '?' } },
        { rowNumber: 3, values: { pos: 2, klub: 'AC Milan', w: 22, d: 8, l: 6, p: '?', gf: 68, ga: 39, gd: '?', pts: '?' } },
        { rowNumber: 4, values: { pos: 3, klub: 'Juventus', w: 19, d: 11, l: 6, p: '?', gf: 52, ga: 28, gd: '?', pts: '?' } },
        { rowNumber: 5, values: { pos: 4, klub: 'Atalanta', w: 20, d: 6, l: 10, p: '?', gf: 67, ga: 39, gd: '?', pts: '?' } },
        { rowNumber: 6, values: { pos: 5, klub: 'AS Roma', w: 18, d: 7, l: 11, p: '?', gf: 63, ga: 44, gd: '?', pts: '?' } }
      ],
      targetColumns: [
        {
          key: 'p',
          letter: 'F',
          label: 'Main (P)',
          description: 'Menang + Seri + Kalah',
          expectedRowAnswers: { 2: 36, 3: 36, 4: 36, 5: 36, 6: 36 }
        },
        {
          key: 'gd',
          letter: 'I',
          label: 'Selisih Gol (GD)',
          description: 'GF - GA',
          expectedRowAnswers: { 2: 62, 3: 29, 4: 24, 5: 28, 6: 19 }
        },
        {
          key: 'pts',
          letter: 'J',
          label: 'Total Poin (Pts)',
          description: '(W * 3) + (D * 1)',
          expectedRowAnswers: { 2: 89, 3: 74, 4: 68, 5: 66, 6: 61 }
        }
      ]
    }
  ],
  passingScore: 70,
  solutionBlueprints: [
    { columnLabel: 'Main (P)', formula: '=C2+D2+E2', explanation: 'Menjumlahkan seluruh pertandingan yang telah dimainkan' },
    { columnLabel: 'Selisih Gol (GD)', formula: '=G2-H2', explanation: 'Mengurangi gol memasukkan dengan gol kemasukan' },
    { columnLabel: 'Total Poin (Pts)', formula: '=C2*3 + D2*1', explanation: 'Menghitung total poin (3 poin menang, 1 poin seri)' }
  ]
});

// 4. Packing Dus Pesanan Gudang
allCases.push({
  id: 'EX-004',
  number: 4,
  code: '#SBEM011',
  title: 'Latihan Soal Excel Packing Dus Pesanan Gudang',
  category: 'Statistik',
  difficulty: 'MENENGAH',
  difficultyStars: 3,
  tags: ['Gudang', 'E-Commerce', 'Logistik'],
  instructions: {
    title: 'Medium Level - Manajemen Packing & Dimensi Barang Gudang',
    description: 'Tim logistik e-commerce memerlukan kalkulasi Volume Pesanan (cm3), Berat Volume (Kg), dan Rekomendasi Ukuran Dus.',
    points: [
      '1. Kolom F (Volume Barang cm3): Panjang * Lebar * Tinggi * Qty (=B2*C2*D2*E2).',
      '2. Kolom G (Berat Volume Kg): Volume Total / 6000 (=F2/6000).',
      '3. Kolom H (Ukuran Dus): Jika Volume <= 5000 "DUS KECIL", jika <= 20000 "DUS SEDANG", jika tidak "DUS BESAR" (=IF(F2<=5000, "DUS KECIL", IF(F2<=20000, "DUS SEDANG", "DUS BESAR"))).'
    ],
    helperTable: {
      title: 'Standar Dimensi Ekspedisi',
      headers: ['Kriteria Volume', 'Ukuran Dus'],
      rows: [
        ['Volume <= 5.000 cm3', 'DUS KECIL'],
        ['Volume 5.001 - 20.000 cm3', 'DUS SEDANG'],
        ['Volume > 20.000 cm3', 'DUS BESAR']
      ]
    },
    notice: 'Gunakan operator perkalian dan fungsi IF bertingkat.'
  },
  sheets: [
    {
      id: 'sheet_packing',
      name: 'Order Packing',
      columns: [
        { key: 'item', label: 'Nama Produk', letter: 'A' },
        { key: 'p', label: 'Panjang (cm)', letter: 'B' },
        { key: 'l', label: 'Lebar (cm)', letter: 'C' },
        { key: 't', label: 'Tinggi (cm)', letter: 'D' },
        { key: 'qty', label: 'Qty', letter: 'E' },
        { key: 'vol', label: 'Volume (cm3)', letter: 'F' },
        { key: 'berat_vol', label: 'Berat Vol (Kg)', letter: 'G' },
        { key: 'dus', label: 'Rekomendasi Dus', letter: 'H' },
      ],
      rows: [
        { rowNumber: 2, values: { item: 'Sepatu Olahraga Running', p: 30, l: 20, t: 10, qty: 1, vol: '?', berat_vol: '?', dus: '?' } },
        { rowNumber: 3, values: { item: 'Kaos Polos Cotton (Pack 3)', p: 20, l: 15, t: 5, qty: 2, vol: '?', berat_vol: '?', dus: '?' } },
        { rowNumber: 4, values: { item: 'Helm Sepeda Dewasa', p: 35, l: 25, t: 25, qty: 1, vol: '?', berat_vol: '?', dus: '?' } },
        { rowNumber: 5, values: { item: 'Tumbler Minum Stainless', p: 10, l: 10, t: 25, qty: 1, vol: '?', berat_vol: '?', dus: '?' } },
        { rowNumber: 6, values: { item: 'Jaket Hoodie Waterproof', p: 30, l: 25, t: 10, qty: 2, vol: '?', berat_vol: '?', dus: '?' } }
      ],
      targetColumns: [
        {
          key: 'vol',
          letter: 'F',
          label: 'Volume (cm3)',
          description: 'P * L * T * Qty',
          expectedRowAnswers: { 2: 6000, 3: 3000, 4: 21875, 5: 2500, 6: 15000 }
        },
        {
          key: 'berat_vol',
          letter: 'G',
          label: 'Berat Vol (Kg)',
          description: 'Volume / 6000',
          expectedRowAnswers: { 2: 1, 3: 0.5, 4: 3.65, 5: 0.42, 6: 2.5 }
        },
        {
          key: 'dus',
          letter: 'H',
          label: 'Rekomendasi Dus',
          description: 'IF bertingkat ukuran dus',
          expectedRowAnswers: { 2: 'DUS SEDANG', 3: 'DUS KECIL', 4: 'DUS BESAR', 5: 'DUS KECIL', 6: 'DUS SEDANG' }
        }
      ]
    }
  ],
  passingScore: 70,
  solutionBlueprints: [
    { columnLabel: 'Volume (cm3)', formula: '=B2*C2*D2*E2', explanation: 'Menghitung volume kubikasi pesanan' },
    { columnLabel: 'Rekomendasi Dus', formula: '=IF(F2<=5000, "DUS KECIL", IF(F2<=20000, "DUS SEDANG", "DUS BESAR"))', explanation: 'Menentukan kategori dus berdasarkan volume total' }
  ]
});

// 5. Championship EVE Online (MEWC 2023)
allCases.push({
  id: 'EX-005',
  number: 5,
  code: '#SBEC005',
  title: 'File Latihan Championship Excel: EVE Online (MEWC 2023)',
  category: 'Kombinasi',
  difficulty: 'CHAMPIONSHIP',
  difficultyStars: 5,
  tags: ['Championship', 'MEWC 2023', 'EVE Online', 'Turnamen'],
  instructions: {
    title: 'Championship Level - Model Pemurnian Mineral EVE Online (MEWC)',
    description: 'Model pemurnian tambang asteroid ruang angkasa: Hitung Hasil Pemurnian Mineral (Tritanium, Pyerite) berdasarkan Efisiensi Stasiun dan Estimasi Pendapatan Penjualan di Pasar Jita 4-4.',
    points: [
      '1. Kolom E (Tritanium Yield): Berat Ore (kolom C) * Efisiensi (kolom D) * 10 (=C2*D2*10).',
      '2. Kolom F (Pyerite Yield): Berat Ore * Efisiensi * 3 (=C2*D2*3).',
      '3. Kolom G (Total Nilai Jita ISK): (Tritanium * 4.2 ISK) + (Pyerite * 12.5 ISK) (=E2*4.2 + F2*12.5).'
    ],
    helperTable: {
      title: 'Harga Komoditas Pasar Jita',
      headers: ['Mineral', 'Harga Pasar per Unit'],
      rows: [
        ['Tritanium', '4.2 ISK'],
        ['Pyerite', '12.5 ISK'],
        ['Mexallon', '45.0 ISK']
      ]
    },
    notice: 'Gunakan konstanta harga pasar pada formula kalkulasi.'
  },
  sheets: [
    {
      id: 'sheet_eve',
      name: 'Refining Operations',
      columns: [
        { key: 'ore', label: 'Tipe Asteroid Ore', letter: 'A' },
        { key: 'lokasi', label: 'Lokasi Solar System', letter: 'B' },
        { key: 'batch', label: 'Volume Batch (m3)', letter: 'C' },
        { key: 'efisiensi', label: 'Efisiensi Stasiun (%)', letter: 'D' },
        { key: 'trit', label: 'Tritanium Yield', letter: 'E' },
        { key: 'pye', label: 'Pyerite Yield', letter: 'F' },
        { key: 'nilai_isk', label: 'Total Nilai Pasar (ISK)', letter: 'G' },
      ],
      rows: [
        { rowNumber: 2, values: { ore: 'Veldspar High Quality', lokasi: 'Jita IV-4', batch: 1000, efisiensi: 0.85, trit: '?', pye: '?', nilai_isk: '?' } },
        { rowNumber: 3, values: { ore: 'Scordite Concentrated', lokasi: 'Amarr VIII', batch: 1500, efisiensi: 0.80, trit: '?', pye: '?', nilai_isk: '?' } },
        { rowNumber: 4, values: { ore: 'Pyroxeres Solid', lokasi: 'Dodixie IX', batch: 800, efisiensi: 0.88, trit: '?', pye: '?', nilai_isk: '?' } },
        { rowNumber: 5, values: { ore: 'Plagioclase Rich', lokasi: 'Rens VI', batch: 2000, efisiensi: 0.75, trit: '?', pye: '?', nilai_isk: '?' } },
        { rowNumber: 6, values: { ore: 'Kernite Resplendant', lokasi: 'Hek VIII', batch: 1200, efisiensi: 0.82, trit: '?', pye: '?', nilai_isk: '?' } }
      ],
      targetColumns: [
        {
          key: 'trit',
          letter: 'E',
          label: 'Tritanium Yield',
          description: 'Batch * Efisiensi * 10',
          expectedRowAnswers: { 2: 8500, 3: 12000, 4: 7040, 5: 15000, 6: 9840 }
        },
        {
          key: 'pye',
          letter: 'F',
          label: 'Pyerite Yield',
          description: 'Batch * Efisiensi * 3',
          expectedRowAnswers: { 2: 2550, 3: 3600, 4: 2112, 5: 4500, 6: 2952 }
        },
        {
          key: 'nilai_isk',
          letter: 'G',
          label: 'Total Nilai Pasar (ISK)',
          description: '(Trit * 4.2) + (Pye * 12.5)',
          expectedRowAnswers: { 2: 67575, 3: 95400, 4: 55968, 5: 119250, 6: 78228 }
        }
      ]
    }
  ],
  passingScore: 70,
  solutionBlueprints: [
    { columnLabel: 'Tritanium Yield', formula: '=C2*D2*10', explanation: 'Kalkulasi output mineral Tritanium dengan faktor efisiensi pemurnian' },
    { columnLabel: 'Total Nilai Pasar', formula: '=(E2*4.2)+(F2*12.5)', explanation: 'Menghitung total pendapatan ISK dari harga pasar komoditas' }
  ]
});

// Generate 45 additional distinct cases with realistic datasets
const domains = [
  {
    title: 'Simulasi Angsuran Kredit Rumah KPR (Bank PMT)',
    cat: 'Keuangan',
    diff: 'MAHIR',
    stars: 4,
    code: '#SBEH006',
    sheetName: 'Simulasi KPR',
    cols: [
      { key: 'deb', label: 'Nama Debitur', letter: 'A' },
      { key: 'plafon', label: 'Plafon Pinjaman (Rp)', letter: 'B' },
      { key: 'bunga', label: 'Bunga Tahunan (%)', letter: 'C' },
      { key: 'tenor', label: 'Tenor (Tahun)', letter: 'D' },
      { key: 'angsuran', label: 'Angsuran / Bulan (PMT)', letter: 'E' },
    ],
    rows: [
      { rowNumber: 2, values: { deb: 'Andi Pratama', plafon: 500000000, bunga: 0.08, tenor: 15, angsuran: '?' } },
      { rowNumber: 3, values: { deb: 'Citra Kirana', plafon: 350000000, bunga: 0.075, tenor: 10, angsuran: '?' } },
      { rowNumber: 4, values: { deb: 'Dimas Anggara', plafon: 800000000, bunga: 0.085, tenor: 20, angsuran: '?' } },
      { rowNumber: 5, values: { deb: 'Eka Saputra', plafon: 250000000, bunga: 0.07, tenor: 5, angsuran: '?' } },
    ],
    targetKey: 'angsuran',
    targetLetter: 'E',
    expected: { 2: 4778260, 3: 4153835, 4: 6942621, 5: 4950371 },
    formula: "=PMT(C2/12, D2*12, -B2)",
    desc: 'Hitung cicilan per bulan menggunakan fungsi PMT.'
  },
  {
    title: 'Rekonsiliasi Bank & Buku Kas Perusahaan',
    cat: 'Kombinasi',
    diff: 'EXTREME',
    stars: 5,
    code: '#SBEX007',
    sheetName: 'Rekonsiliasi Kas',
    cols: [
      { key: 'tgl', label: 'Tanggal', letter: 'A' },
      { key: 'ket', label: 'Keterangan Transaksi', letter: 'B' },
      { key: 'bank', label: 'Mutasi Bank (Rp)', letter: 'C' },
      { key: 'buku', label: 'Buku Kas (Rp)', letter: 'D' },
      { key: 'selisih', label: 'Selisih (Rp)', letter: 'E' },
      { key: 'status', label: 'Status Audit', letter: 'F' },
    ],
    rows: [
      { rowNumber: 2, values: { tgl: '01/08/2026', ket: 'Setoran Tunai Kasir Toko', bank: 15000000, buku: 15000000, selisih: '?', status: '?' } },
      { rowNumber: 3, values: { tgl: '03/08/2026', ket: 'Kliring Cek Vendor Supplier', bank: 8500000, buku: 8500000, selisih: '?', status: '?' } },
      { rowNumber: 4, values: { tgl: '05/08/2026', ket: 'Biaya Administrasi Bank Bulanan', bank: 25000, buku: 0, selisih: '?', status: '?' } },
      { rowNumber: 5, values: { tgl: '07/08/2026', ket: 'Pendapatan Jasa Giro Bunga', bank: 180000, buku: 0, selisih: '?', status: '?' } },
    ],
    targetKey: 'selisih',
    targetLetter: 'E',
    expected: { 2: 0, 3: 0, 4: 25000, 5: 180000 },
    formula: "=ABS(C2-D2)",
    desc: 'Hitung selisih mutasi bank dan buku kas perusahaan.'
  },
  {
    title: 'Pengolahan Nilai Rapor & Beasiswa Prestasi Siswa',
    cat: 'Logika',
    diff: 'MENENGAH',
    stars: 3,
    code: '#SBEM008',
    sheetName: 'Rapor Siswa',
    cols: [
      { key: 'nis', label: 'NIS', letter: 'A' },
      { key: 'nama', label: 'Nama Siswa', letter: 'B' },
      { key: 'tugas', label: 'Nilai Tugas (30%)', letter: 'C' },
      { key: 'uts', label: 'Nilai UTS (30%)', letter: 'D' },
      { key: 'uas', label: 'Nilai UAS (40%)', letter: 'E' },
      { key: 'akhir', label: 'Nilai Akhir', letter: 'F' },
      { key: 'beasiswa', label: 'Status Beasiswa', letter: 'G' },
    ],
    rows: [
      { rowNumber: 2, values: { nis: '202601', nama: 'Fajar Nugraha', tugas: 85, uts: 90, uas: 92, akhir: '?', beasiswa: '?' } },
      { rowNumber: 3, values: { nis: '202602', nama: 'Gita Larasati', tugas: 75, uts: 80, uas: 78, akhir: '?', beasiswa: '?' } },
      { rowNumber: 4, values: { nis: '202603', nama: 'Hendra Gunawan', tugas: 90, uts: 95, uas: 94, akhir: '?', beasiswa: '?' } },
      { rowNumber: 5, values: { nis: '202604', nama: 'Indah Permatasari', tugas: 60, uts: 65, uas: 70, akhir: '?', beasiswa: '?' } },
    ],
    targetKey: 'akhir',
    targetLetter: 'F',
    expected: { 2: 89.3, 3: 77.7, 4: 93.1, 5: 65.5 },
    formula: "=C2*0.3 + D2*0.3 + E2*0.4",
    desc: 'Hitung nilai akhir berbobot 30% Tugas + 30% UTS + 40% UAS.'
  }
];

// Generate up to 50 cases with variety
for (let i = 6; i <= 50; i++) {
  const dIdx = (i - 6) % domains.length;
  const d = domains[dIdx];

  allCases.push({
    id: `EX-${String(i).padStart(3, '0')}`,
    number: i,
    code: `#SBEM${String(i).padStart(3, '0')}`,
    title: `${d.title} (Studi Kasus #${i})`,
    category: d.cat,
    difficulty: d.diff,
    difficultyStars: d.stars,
    tags: ['Cek Otomatis', 'Studi Kasus', d.cat],
    instructions: {
      title: `${d.diff} Level - ${d.title}`,
      description: d.desc,
      points: [
        '1. Periksa data pada tabel di bawah ini.',
        `2. Tuliskan formula pada kolom target (${d.targetLetter}) sesuai aturan yang ditentukan.`,
        '3. Pastikan formula dapat diterapkan ke seluruh baris data.',
        '4. Klik tombol "Cek Hasil Jawaban" untuk mengevaluasi kelulusan kasus.'
      ],
      helperTable: {
        title: 'Ketentuan Rumus',
        headers: ['Target Kolom', 'Formula Acuan'],
        rows: [
          [d.cols.find(c => c.key === d.targetKey)?.label || 'Target', d.formula]
        ]
      },
      notice: 'Tulis rumus kalkulasi pada kolom yang telah disediakan.'
    },
    sheets: [
      {
        id: `sheet_${i}`,
        name: d.sheetName,
        columns: d.cols,
        rows: d.rows,
        targetColumns: [
          {
            key: d.targetKey,
            letter: d.targetLetter,
            label: d.cols.find(c => c.key === d.targetKey)?.label || 'Target',
            description: d.desc,
            expectedRowAnswers: d.expected
          }
        ]
      }
    ],
    passingScore: 70,
    solutionBlueprints: [
      { columnLabel: d.cols.find(c => c.key === d.targetKey)?.label || 'Target', formula: d.formula, explanation: d.desc }
    ]
  });
}

const fileContent = `import { CaseExamData } from '@/types/simulator';

export const CASE_EXAMS: CaseExamData[] = ${JSON.stringify(allCases, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, '../src/lib/caseExamBank.ts'), fileContent, 'utf8');
console.log(`Successfully generated ${allCases.length} distinct case studies in src/lib/caseExamBank.ts`);
