import { CaseExamData } from '@/types/simulator';

export const CASE_EXAMS: CaseExamData[] = [
  {
    "id": "EX-001",
    "number": 1,
    "code": "#SBEM001",
    "title": "Latihan Soal Subtotal & Diskon Kasir Minimarket",
    "category": "Aritmatika",
    "difficulty": "PEMULA",
    "difficultyStars": 1,
    "tags": [
      "Kasir",
      "Aritmatika",
      "Cek Otomatis"
    ],
    "instructions": {
      "title": "Pemula - Menghitung Tagihan Belanja Kasir",
      "description": "Sebuah minimarket memerlukan perhitungan Subtotal belanja pelanggan dan Total setelah Diskon.",
      "points": [
        "1. Hitung Subtotal pada kolom D dengan rumus perkalian: Qty * Harga Satuan (=B2*C2)",
        "2. Hitung Nilai Diskon pada kolom F dengan rumus: Subtotal * % Diskon (=D2*E2)",
        "3. Hitung Total Bayar pada kolom G dengan rumus: Subtotal - Nilai Diskon (=D2-F2)"
      ],
      "helperTable": {
        "title": "Tabel Ketentuan",
        "headers": [
          "Kolom",
          "Rumus Dasar"
        ],
        "rows": [
          [
            "Subtotal",
            "=Qty * Harga Satuan"
          ],
          [
            "Nilai Diskon",
            "=Subtotal * % Diskon"
          ],
          [
            "Total Bayar",
            "=Subtotal - Nilai Diskon"
          ]
        ]
      },
      "notice": "Gunakan operator matematika (+, -, *) pada setiap baris data."
    },
    "sheets": [
      {
        "id": "sheet1",
        "name": "XL-Test Kasir",
        "columns": [
          {
            "key": "barang",
            "label": "Nama Barang",
            "letter": "A"
          },
          {
            "key": "qty",
            "label": "Qty",
            "letter": "B"
          },
          {
            "key": "harga",
            "label": "Harga Satuan (Rp)",
            "letter": "C"
          },
          {
            "key": "subtotal",
            "label": "Subtotal (Rp)",
            "letter": "D"
          },
          {
            "key": "pct_diskon",
            "label": "% Diskon",
            "letter": "E"
          },
          {
            "key": "diskon",
            "label": "Nilai Diskon (Rp)",
            "letter": "F"
          },
          {
            "key": "total",
            "label": "Total Bayar (Rp)",
            "letter": "G"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "barang": "Minyak Goreng 2L",
              "qty": 3,
              "harga": 35000,
              "subtotal": "?",
              "pct_diskon": 0.1,
              "diskon": "?",
              "total": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "barang": "Beras Pandan Wangi 5Kg",
              "qty": 2,
              "harga": 72000,
              "subtotal": "?",
              "pct_diskon": 0.05,
              "diskon": "?",
              "total": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "barang": "Gula Pasir 1Kg",
              "qty": 5,
              "harga": 16000,
              "subtotal": "?",
              "pct_diskon": 0,
              "diskon": "?",
              "total": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "barang": "Susu UHT 1L",
              "qty": 4,
              "harga": 20000,
              "subtotal": "?",
              "pct_diskon": 0.15,
              "diskon": "?",
              "total": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "barang": "Kopi Bubuk 200g",
              "qty": 6,
              "harga": 12500,
              "subtotal": "?",
              "pct_diskon": 0.08,
              "diskon": "?",
              "total": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "subtotal",
            "letter": "D",
            "label": "Subtotal (Rp)",
            "description": "Qty * Harga",
            "expectedRowAnswers": {
              "2": 105000,
              "3": 144000,
              "4": 80000,
              "5": 80000,
              "6": 75000
            }
          },
          {
            "key": "diskon",
            "letter": "F",
            "label": "Nilai Diskon (Rp)",
            "description": "Subtotal * % Diskon",
            "expectedRowAnswers": {
              "2": 10500,
              "3": 7200,
              "4": 0,
              "5": 12000,
              "6": 6000
            }
          },
          {
            "key": "total",
            "letter": "G",
            "label": "Total Bayar (Rp)",
            "description": "Subtotal - Diskon",
            "expectedRowAnswers": {
              "2": 94500,
              "3": 136800,
              "4": 80000,
              "5": 68000,
              "6": 69000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Subtotal",
        "formula": "=B2*C2",
        "explanation": "Mengalikan Qty dengan Harga Satuan"
      },
      {
        "columnLabel": "Nilai Diskon",
        "formula": "=D2*E2",
        "explanation": "Mengalikan Subtotal dengan persentase diskon"
      },
      {
        "columnLabel": "Total Bayar",
        "formula": "=D2-F2",
        "explanation": "Mengurangi Subtotal dengan nilai diskon"
      }
    ]
  },
  {
    "id": "EX-002",
    "number": 2,
    "code": "#SBEP002",
    "title": "Laporan Laba Kotor Toko Roti",
    "category": "Aritmatika",
    "difficulty": "PEMULA",
    "difficultyStars": 1,
    "tags": [
      "Toko",
      "Laba Bersih",
      "Cek Otomatis",
      "Spreadsheet Kasus"
    ],
    "instructions": {
      "title": "PEMULA Level - Laporan Laba Kotor Toko Roti",
      "description": "Selesaikan lembar kerja kasus Laporan Laba Kotor Toko Roti. Kerjakan formula langsung di tabel data di bawah sesuai tujuan yang ditentukan.",
      "points": [
        "1. Periksa struktur kolom tabel dan pahami hubungan data antar kolom.",
        "2. Tulis rumus Excel yang dinamis pada sel-sel kolom target (bukan mengetik angka manual).",
        "3. Pastikan rumus dapat disalin ke seluruh baris yang bersangkutan.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas lembar kerja untuk memeriksa kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Rumus & Referensi",
        "headers": [
          "Kebutuhan",
          "Saran Fungsi"
        ],
        "rows": [
          [
            "Kalkulasi Angka",
            "Aritmatika (+, -, *, /)"
          ],
          [
            "Pencarian Data",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Uji Logika",
            "IF / IFS / AND / OR"
          ],
          [
            "Agregasi Data",
            "SUMIF / COUNTIF / AVERAGEIF"
          ]
        ]
      },
      "notice": "Dilarang mengubah struktur nama kolom asal. Isi rumus pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_main",
        "name": "XL-Test",
        "columns": [
          {
            "key": "item",
            "label": "Item / Deskripsi",
            "letter": "A"
          },
          {
            "key": "val1",
            "label": "Pemasukan / Target",
            "letter": "B"
          },
          {
            "key": "val2",
            "label": "Pengeluaran / Realisasi",
            "letter": "C"
          },
          {
            "key": "selisih",
            "label": "Selisih / Sisa (Rp)",
            "letter": "D"
          },
          {
            "key": "status",
            "label": "Persentase / Status",
            "letter": "E"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "item": "Divisi Pemasaran",
              "val1": 50000000,
              "val2": 38000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "item": "Divisi Operasional",
              "val1": 85000000,
              "val2": 72000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "item": "Divisi Teknologi IT",
              "val1": 60000000,
              "val2": 55000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "item": "Divisi Sumber Daya HRD",
              "val1": 30000000,
              "val2": 24000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "item": "Divisi Layanan Pelanggan",
              "val1": 25000000,
              "val2": 21000000,
              "selisih": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "selisih",
            "letter": "D",
            "label": "Selisih / Sisa (Rp)",
            "description": "Hitung selisih: =B2-C2",
            "expectedRowAnswers": {
              "2": 12000000,
              "3": 13000000,
              "4": 5000000,
              "5": 6000000,
              "6": 4000000
            }
          },
          {
            "key": "status",
            "letter": "E",
            "label": "Persentase Realisasi",
            "description": "Hitung persentase realisasi: =C2/B2",
            "expectedRowAnswers": {
              "2": 0.76,
              "3": 0.847,
              "4": 0.917,
              "5": 0.8,
              "6": 0.84
            }
          }
        ]
      },
      {
        "id": "sheet_ref",
        "name": "Daftar Referensi",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Acuan",
            "letter": "A"
          },
          {
            "key": "deskripsi",
            "label": "Deskripsi Kategori",
            "letter": "B"
          },
          {
            "key": "tarif",
            "label": "Nilai Acuan Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "deskripsi": "Golongan Utama A",
              "tarif": 5000000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "deskripsi": "Golongan Menengah B",
              "tarif": 3500000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "deskripsi": "Golongan Dasar C",
              "tarif": 2000000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Selisih (Rp)",
        "formula": "=B2-C2",
        "explanation": "Menghitung sisa anggaran dari target dikurangi realisasi"
      },
      {
        "columnLabel": "Persentase Realisasi",
        "formula": "=C2/B2",
        "explanation": "Membagi realisasi dengan target anggaran"
      }
    ]
  },
  {
    "id": "EX-003",
    "number": 3,
    "code": "#SBEP003",
    "title": "Kalkulasi Split Bill Makan Siang Kantor",
    "category": "Aritmatika",
    "difficulty": "PEMULA",
    "difficultyStars": 1,
    "tags": [
      "Keuangan",
      "Split Bill",
      "Cek Otomatis",
      "Spreadsheet Kasus"
    ],
    "instructions": {
      "title": "PEMULA Level - Kalkulasi Split Bill Makan Siang Kantor",
      "description": "Selesaikan lembar kerja kasus Kalkulasi Split Bill Makan Siang Kantor. Kerjakan formula langsung di tabel data di bawah sesuai tujuan yang ditentukan.",
      "points": [
        "1. Periksa struktur kolom tabel dan pahami hubungan data antar kolom.",
        "2. Tulis rumus Excel yang dinamis pada sel-sel kolom target (bukan mengetik angka manual).",
        "3. Pastikan rumus dapat disalin ke seluruh baris yang bersangkutan.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas lembar kerja untuk memeriksa kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Rumus & Referensi",
        "headers": [
          "Kebutuhan",
          "Saran Fungsi"
        ],
        "rows": [
          [
            "Kalkulasi Angka",
            "Aritmatika (+, -, *, /)"
          ],
          [
            "Pencarian Data",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Uji Logika",
            "IF / IFS / AND / OR"
          ],
          [
            "Agregasi Data",
            "SUMIF / COUNTIF / AVERAGEIF"
          ]
        ]
      },
      "notice": "Dilarang mengubah struktur nama kolom asal. Isi rumus pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_main",
        "name": "XL-Test",
        "columns": [
          {
            "key": "item",
            "label": "Item / Deskripsi",
            "letter": "A"
          },
          {
            "key": "val1",
            "label": "Pemasukan / Target",
            "letter": "B"
          },
          {
            "key": "val2",
            "label": "Pengeluaran / Realisasi",
            "letter": "C"
          },
          {
            "key": "selisih",
            "label": "Selisih / Sisa (Rp)",
            "letter": "D"
          },
          {
            "key": "status",
            "label": "Persentase / Status",
            "letter": "E"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "item": "Divisi Pemasaran",
              "val1": 50000000,
              "val2": 38000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "item": "Divisi Operasional",
              "val1": 85000000,
              "val2": 72000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "item": "Divisi Teknologi IT",
              "val1": 60000000,
              "val2": 55000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "item": "Divisi Sumber Daya HRD",
              "val1": 30000000,
              "val2": 24000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "item": "Divisi Layanan Pelanggan",
              "val1": 25000000,
              "val2": 21000000,
              "selisih": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "selisih",
            "letter": "D",
            "label": "Selisih / Sisa (Rp)",
            "description": "Hitung selisih: =B2-C2",
            "expectedRowAnswers": {
              "2": 12000000,
              "3": 13000000,
              "4": 5000000,
              "5": 6000000,
              "6": 4000000
            }
          },
          {
            "key": "status",
            "letter": "E",
            "label": "Persentase Realisasi",
            "description": "Hitung persentase realisasi: =C2/B2",
            "expectedRowAnswers": {
              "2": 0.76,
              "3": 0.847,
              "4": 0.917,
              "5": 0.8,
              "6": 0.84
            }
          }
        ]
      },
      {
        "id": "sheet_ref",
        "name": "Daftar Referensi",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Acuan",
            "letter": "A"
          },
          {
            "key": "deskripsi",
            "label": "Deskripsi Kategori",
            "letter": "B"
          },
          {
            "key": "tarif",
            "label": "Nilai Acuan Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "deskripsi": "Golongan Utama A",
              "tarif": 5000000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "deskripsi": "Golongan Menengah B",
              "tarif": 3500000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "deskripsi": "Golongan Dasar C",
              "tarif": 2000000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Selisih (Rp)",
        "formula": "=B2-C2",
        "explanation": "Menghitung sisa anggaran dari target dikurangi realisasi"
      },
      {
        "columnLabel": "Persentase Realisasi",
        "formula": "=C2/B2",
        "explanation": "Membagi realisasi dengan target anggaran"
      }
    ]
  },
  {
    "id": "EX-004",
    "number": 4,
    "code": "#SBEP004",
    "title": "Perhitungan Komisi Sales Otomotif",
    "category": "Aritmatika",
    "difficulty": "PEMULA",
    "difficultyStars": 1,
    "tags": [
      "Sales",
      "Komisi",
      "Cek Otomatis",
      "Spreadsheet Kasus"
    ],
    "instructions": {
      "title": "PEMULA Level - Perhitungan Komisi Sales Otomotif",
      "description": "Selesaikan lembar kerja kasus Perhitungan Komisi Sales Otomotif. Kerjakan formula langsung di tabel data di bawah sesuai tujuan yang ditentukan.",
      "points": [
        "1. Periksa struktur kolom tabel dan pahami hubungan data antar kolom.",
        "2. Tulis rumus Excel yang dinamis pada sel-sel kolom target (bukan mengetik angka manual).",
        "3. Pastikan rumus dapat disalin ke seluruh baris yang bersangkutan.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas lembar kerja untuk memeriksa kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Rumus & Referensi",
        "headers": [
          "Kebutuhan",
          "Saran Fungsi"
        ],
        "rows": [
          [
            "Kalkulasi Angka",
            "Aritmatika (+, -, *, /)"
          ],
          [
            "Pencarian Data",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Uji Logika",
            "IF / IFS / AND / OR"
          ],
          [
            "Agregasi Data",
            "SUMIF / COUNTIF / AVERAGEIF"
          ]
        ]
      },
      "notice": "Dilarang mengubah struktur nama kolom asal. Isi rumus pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_main",
        "name": "XL-Test",
        "columns": [
          {
            "key": "item",
            "label": "Item / Deskripsi",
            "letter": "A"
          },
          {
            "key": "val1",
            "label": "Pemasukan / Target",
            "letter": "B"
          },
          {
            "key": "val2",
            "label": "Pengeluaran / Realisasi",
            "letter": "C"
          },
          {
            "key": "selisih",
            "label": "Selisih / Sisa (Rp)",
            "letter": "D"
          },
          {
            "key": "status",
            "label": "Persentase / Status",
            "letter": "E"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "item": "Divisi Pemasaran",
              "val1": 50000000,
              "val2": 38000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "item": "Divisi Operasional",
              "val1": 85000000,
              "val2": 72000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "item": "Divisi Teknologi IT",
              "val1": 60000000,
              "val2": 55000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "item": "Divisi Sumber Daya HRD",
              "val1": 30000000,
              "val2": 24000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "item": "Divisi Layanan Pelanggan",
              "val1": 25000000,
              "val2": 21000000,
              "selisih": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "selisih",
            "letter": "D",
            "label": "Selisih / Sisa (Rp)",
            "description": "Hitung selisih: =B2-C2",
            "expectedRowAnswers": {
              "2": 12000000,
              "3": 13000000,
              "4": 5000000,
              "5": 6000000,
              "6": 4000000
            }
          },
          {
            "key": "status",
            "letter": "E",
            "label": "Persentase Realisasi",
            "description": "Hitung persentase realisasi: =C2/B2",
            "expectedRowAnswers": {
              "2": 0.76,
              "3": 0.847,
              "4": 0.917,
              "5": 0.8,
              "6": 0.84
            }
          }
        ]
      },
      {
        "id": "sheet_ref",
        "name": "Daftar Referensi",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Acuan",
            "letter": "A"
          },
          {
            "key": "deskripsi",
            "label": "Deskripsi Kategori",
            "letter": "B"
          },
          {
            "key": "tarif",
            "label": "Nilai Acuan Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "deskripsi": "Golongan Utama A",
              "tarif": 5000000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "deskripsi": "Golongan Menengah B",
              "tarif": 3500000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "deskripsi": "Golongan Dasar C",
              "tarif": 2000000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Selisih (Rp)",
        "formula": "=B2-C2",
        "explanation": "Menghitung sisa anggaran dari target dikurangi realisasi"
      },
      {
        "columnLabel": "Persentase Realisasi",
        "formula": "=C2/B2",
        "explanation": "Membagi realisasi dengan target anggaran"
      }
    ]
  },
  {
    "id": "EX-005",
    "number": 5,
    "code": "#SBEP005",
    "title": "Estimasi Biaya Renovasi Rumah",
    "category": "Aritmatika",
    "difficulty": "PEMULA",
    "difficultyStars": 1,
    "tags": [
      "Anggaran",
      "Material",
      "Cek Otomatis",
      "Spreadsheet Kasus"
    ],
    "instructions": {
      "title": "PEMULA Level - Estimasi Biaya Renovasi Rumah",
      "description": "Selesaikan lembar kerja kasus Estimasi Biaya Renovasi Rumah. Kerjakan formula langsung di tabel data di bawah sesuai tujuan yang ditentukan.",
      "points": [
        "1. Periksa struktur kolom tabel dan pahami hubungan data antar kolom.",
        "2. Tulis rumus Excel yang dinamis pada sel-sel kolom target (bukan mengetik angka manual).",
        "3. Pastikan rumus dapat disalin ke seluruh baris yang bersangkutan.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas lembar kerja untuk memeriksa kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Rumus & Referensi",
        "headers": [
          "Kebutuhan",
          "Saran Fungsi"
        ],
        "rows": [
          [
            "Kalkulasi Angka",
            "Aritmatika (+, -, *, /)"
          ],
          [
            "Pencarian Data",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Uji Logika",
            "IF / IFS / AND / OR"
          ],
          [
            "Agregasi Data",
            "SUMIF / COUNTIF / AVERAGEIF"
          ]
        ]
      },
      "notice": "Dilarang mengubah struktur nama kolom asal. Isi rumus pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_main",
        "name": "XL-Test",
        "columns": [
          {
            "key": "item",
            "label": "Item / Deskripsi",
            "letter": "A"
          },
          {
            "key": "val1",
            "label": "Pemasukan / Target",
            "letter": "B"
          },
          {
            "key": "val2",
            "label": "Pengeluaran / Realisasi",
            "letter": "C"
          },
          {
            "key": "selisih",
            "label": "Selisih / Sisa (Rp)",
            "letter": "D"
          },
          {
            "key": "status",
            "label": "Persentase / Status",
            "letter": "E"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "item": "Divisi Pemasaran",
              "val1": 50000000,
              "val2": 38000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "item": "Divisi Operasional",
              "val1": 85000000,
              "val2": 72000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "item": "Divisi Teknologi IT",
              "val1": 60000000,
              "val2": 55000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "item": "Divisi Sumber Daya HRD",
              "val1": 30000000,
              "val2": 24000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "item": "Divisi Layanan Pelanggan",
              "val1": 25000000,
              "val2": 21000000,
              "selisih": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "selisih",
            "letter": "D",
            "label": "Selisih / Sisa (Rp)",
            "description": "Hitung selisih: =B2-C2",
            "expectedRowAnswers": {
              "2": 12000000,
              "3": 13000000,
              "4": 5000000,
              "5": 6000000,
              "6": 4000000
            }
          },
          {
            "key": "status",
            "letter": "E",
            "label": "Persentase Realisasi",
            "description": "Hitung persentase realisasi: =C2/B2",
            "expectedRowAnswers": {
              "2": 0.76,
              "3": 0.847,
              "4": 0.917,
              "5": 0.8,
              "6": 0.84
            }
          }
        ]
      },
      {
        "id": "sheet_ref",
        "name": "Daftar Referensi",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Acuan",
            "letter": "A"
          },
          {
            "key": "deskripsi",
            "label": "Deskripsi Kategori",
            "letter": "B"
          },
          {
            "key": "tarif",
            "label": "Nilai Acuan Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "deskripsi": "Golongan Utama A",
              "tarif": 5000000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "deskripsi": "Golongan Menengah B",
              "tarif": 3500000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "deskripsi": "Golongan Dasar C",
              "tarif": 2000000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Selisih (Rp)",
        "formula": "=B2-C2",
        "explanation": "Menghitung sisa anggaran dari target dikurangi realisasi"
      },
      {
        "columnLabel": "Persentase Realisasi",
        "formula": "=C2/B2",
        "explanation": "Membagi realisasi dengan target anggaran"
      }
    ]
  },
  {
    "id": "EX-006",
    "number": 6,
    "code": "#SBEP006",
    "title": "Pencatatan Stok Masuk dan Keluar Gudang",
    "category": "Aritmatika",
    "difficulty": "PEMULA",
    "difficultyStars": 1,
    "tags": [
      "Gudang",
      "Inventaris",
      "Cek Otomatis",
      "Spreadsheet Kasus"
    ],
    "instructions": {
      "title": "PEMULA Level - Pencatatan Stok Masuk dan Keluar Gudang",
      "description": "Selesaikan lembar kerja kasus Pencatatan Stok Masuk dan Keluar Gudang. Kerjakan formula langsung di tabel data di bawah sesuai tujuan yang ditentukan.",
      "points": [
        "1. Periksa struktur kolom tabel dan pahami hubungan data antar kolom.",
        "2. Tulis rumus Excel yang dinamis pada sel-sel kolom target (bukan mengetik angka manual).",
        "3. Pastikan rumus dapat disalin ke seluruh baris yang bersangkutan.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas lembar kerja untuk memeriksa kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Rumus & Referensi",
        "headers": [
          "Kebutuhan",
          "Saran Fungsi"
        ],
        "rows": [
          [
            "Kalkulasi Angka",
            "Aritmatika (+, -, *, /)"
          ],
          [
            "Pencarian Data",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Uji Logika",
            "IF / IFS / AND / OR"
          ],
          [
            "Agregasi Data",
            "SUMIF / COUNTIF / AVERAGEIF"
          ]
        ]
      },
      "notice": "Dilarang mengubah struktur nama kolom asal. Isi rumus pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_main",
        "name": "XL-Test",
        "columns": [
          {
            "key": "item",
            "label": "Item / Deskripsi",
            "letter": "A"
          },
          {
            "key": "val1",
            "label": "Pemasukan / Target",
            "letter": "B"
          },
          {
            "key": "val2",
            "label": "Pengeluaran / Realisasi",
            "letter": "C"
          },
          {
            "key": "selisih",
            "label": "Selisih / Sisa (Rp)",
            "letter": "D"
          },
          {
            "key": "status",
            "label": "Persentase / Status",
            "letter": "E"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "item": "Divisi Pemasaran",
              "val1": 50000000,
              "val2": 38000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "item": "Divisi Operasional",
              "val1": 85000000,
              "val2": 72000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "item": "Divisi Teknologi IT",
              "val1": 60000000,
              "val2": 55000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "item": "Divisi Sumber Daya HRD",
              "val1": 30000000,
              "val2": 24000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "item": "Divisi Layanan Pelanggan",
              "val1": 25000000,
              "val2": 21000000,
              "selisih": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "selisih",
            "letter": "D",
            "label": "Selisih / Sisa (Rp)",
            "description": "Hitung selisih: =B2-C2",
            "expectedRowAnswers": {
              "2": 12000000,
              "3": 13000000,
              "4": 5000000,
              "5": 6000000,
              "6": 4000000
            }
          },
          {
            "key": "status",
            "letter": "E",
            "label": "Persentase Realisasi",
            "description": "Hitung persentase realisasi: =C2/B2",
            "expectedRowAnswers": {
              "2": 0.76,
              "3": 0.847,
              "4": 0.917,
              "5": 0.8,
              "6": 0.84
            }
          }
        ]
      },
      {
        "id": "sheet_ref",
        "name": "Daftar Referensi",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Acuan",
            "letter": "A"
          },
          {
            "key": "deskripsi",
            "label": "Deskripsi Kategori",
            "letter": "B"
          },
          {
            "key": "tarif",
            "label": "Nilai Acuan Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "deskripsi": "Golongan Utama A",
              "tarif": 5000000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "deskripsi": "Golongan Menengah B",
              "tarif": 3500000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "deskripsi": "Golongan Dasar C",
              "tarif": 2000000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Selisih (Rp)",
        "formula": "=B2-C2",
        "explanation": "Menghitung sisa anggaran dari target dikurangi realisasi"
      },
      {
        "columnLabel": "Persentase Realisasi",
        "formula": "=C2/B2",
        "explanation": "Membagi realisasi dengan target anggaran"
      }
    ]
  },
  {
    "id": "EX-007",
    "number": 7,
    "code": "#SBEP007",
    "title": "Perhitungan Upah Lembur Karyawan Harian",
    "category": "Aritmatika",
    "difficulty": "PEMULA",
    "difficultyStars": 2,
    "tags": [
      "HRD",
      "Payroll",
      "Cek Otomatis",
      "Spreadsheet Kasus"
    ],
    "instructions": {
      "title": "PEMULA Level - Perhitungan Upah Lembur Karyawan Harian",
      "description": "Selesaikan lembar kerja kasus Perhitungan Upah Lembur Karyawan Harian. Kerjakan formula langsung di tabel data di bawah sesuai tujuan yang ditentukan.",
      "points": [
        "1. Periksa struktur kolom tabel dan pahami hubungan data antar kolom.",
        "2. Tulis rumus Excel yang dinamis pada sel-sel kolom target (bukan mengetik angka manual).",
        "3. Pastikan rumus dapat disalin ke seluruh baris yang bersangkutan.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas lembar kerja untuk memeriksa kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Rumus & Referensi",
        "headers": [
          "Kebutuhan",
          "Saran Fungsi"
        ],
        "rows": [
          [
            "Kalkulasi Angka",
            "Aritmatika (+, -, *, /)"
          ],
          [
            "Pencarian Data",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Uji Logika",
            "IF / IFS / AND / OR"
          ],
          [
            "Agregasi Data",
            "SUMIF / COUNTIF / AVERAGEIF"
          ]
        ]
      },
      "notice": "Dilarang mengubah struktur nama kolom asal. Isi rumus pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_main",
        "name": "XL-Test",
        "columns": [
          {
            "key": "item",
            "label": "Item / Deskripsi",
            "letter": "A"
          },
          {
            "key": "val1",
            "label": "Pemasukan / Target",
            "letter": "B"
          },
          {
            "key": "val2",
            "label": "Pengeluaran / Realisasi",
            "letter": "C"
          },
          {
            "key": "selisih",
            "label": "Selisih / Sisa (Rp)",
            "letter": "D"
          },
          {
            "key": "status",
            "label": "Persentase / Status",
            "letter": "E"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "item": "Divisi Pemasaran",
              "val1": 50000000,
              "val2": 38000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "item": "Divisi Operasional",
              "val1": 85000000,
              "val2": 72000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "item": "Divisi Teknologi IT",
              "val1": 60000000,
              "val2": 55000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "item": "Divisi Sumber Daya HRD",
              "val1": 30000000,
              "val2": 24000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "item": "Divisi Layanan Pelanggan",
              "val1": 25000000,
              "val2": 21000000,
              "selisih": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "selisih",
            "letter": "D",
            "label": "Selisih / Sisa (Rp)",
            "description": "Hitung selisih: =B2-C2",
            "expectedRowAnswers": {
              "2": 12000000,
              "3": 13000000,
              "4": 5000000,
              "5": 6000000,
              "6": 4000000
            }
          },
          {
            "key": "status",
            "letter": "E",
            "label": "Persentase Realisasi",
            "description": "Hitung persentase realisasi: =C2/B2",
            "expectedRowAnswers": {
              "2": 0.76,
              "3": 0.847,
              "4": 0.917,
              "5": 0.8,
              "6": 0.84
            }
          }
        ]
      },
      {
        "id": "sheet_ref",
        "name": "Daftar Referensi",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Acuan",
            "letter": "A"
          },
          {
            "key": "deskripsi",
            "label": "Deskripsi Kategori",
            "letter": "B"
          },
          {
            "key": "tarif",
            "label": "Nilai Acuan Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "deskripsi": "Golongan Utama A",
              "tarif": 5000000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "deskripsi": "Golongan Menengah B",
              "tarif": 3500000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "deskripsi": "Golongan Dasar C",
              "tarif": 2000000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Selisih (Rp)",
        "formula": "=B2-C2",
        "explanation": "Menghitung sisa anggaran dari target dikurangi realisasi"
      },
      {
        "columnLabel": "Persentase Realisasi",
        "formula": "=C2/B2",
        "explanation": "Membagi realisasi dengan target anggaran"
      }
    ]
  },
  {
    "id": "EX-008",
    "number": 8,
    "code": "#SBEP008",
    "title": "Analisis Margin Keuntungan Menu Cafe",
    "category": "Aritmatika",
    "difficulty": "PEMULA",
    "difficultyStars": 2,
    "tags": [
      "F&B",
      "Margin",
      "Cek Otomatis",
      "Spreadsheet Kasus"
    ],
    "instructions": {
      "title": "PEMULA Level - Analisis Margin Keuntungan Menu Cafe",
      "description": "Selesaikan lembar kerja kasus Analisis Margin Keuntungan Menu Cafe. Kerjakan formula langsung di tabel data di bawah sesuai tujuan yang ditentukan.",
      "points": [
        "1. Periksa struktur kolom tabel dan pahami hubungan data antar kolom.",
        "2. Tulis rumus Excel yang dinamis pada sel-sel kolom target (bukan mengetik angka manual).",
        "3. Pastikan rumus dapat disalin ke seluruh baris yang bersangkutan.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas lembar kerja untuk memeriksa kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Rumus & Referensi",
        "headers": [
          "Kebutuhan",
          "Saran Fungsi"
        ],
        "rows": [
          [
            "Kalkulasi Angka",
            "Aritmatika (+, -, *, /)"
          ],
          [
            "Pencarian Data",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Uji Logika",
            "IF / IFS / AND / OR"
          ],
          [
            "Agregasi Data",
            "SUMIF / COUNTIF / AVERAGEIF"
          ]
        ]
      },
      "notice": "Dilarang mengubah struktur nama kolom asal. Isi rumus pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_main",
        "name": "XL-Test",
        "columns": [
          {
            "key": "item",
            "label": "Item / Deskripsi",
            "letter": "A"
          },
          {
            "key": "val1",
            "label": "Pemasukan / Target",
            "letter": "B"
          },
          {
            "key": "val2",
            "label": "Pengeluaran / Realisasi",
            "letter": "C"
          },
          {
            "key": "selisih",
            "label": "Selisih / Sisa (Rp)",
            "letter": "D"
          },
          {
            "key": "status",
            "label": "Persentase / Status",
            "letter": "E"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "item": "Divisi Pemasaran",
              "val1": 50000000,
              "val2": 38000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "item": "Divisi Operasional",
              "val1": 85000000,
              "val2": 72000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "item": "Divisi Teknologi IT",
              "val1": 60000000,
              "val2": 55000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "item": "Divisi Sumber Daya HRD",
              "val1": 30000000,
              "val2": 24000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "item": "Divisi Layanan Pelanggan",
              "val1": 25000000,
              "val2": 21000000,
              "selisih": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "selisih",
            "letter": "D",
            "label": "Selisih / Sisa (Rp)",
            "description": "Hitung selisih: =B2-C2",
            "expectedRowAnswers": {
              "2": 12000000,
              "3": 13000000,
              "4": 5000000,
              "5": 6000000,
              "6": 4000000
            }
          },
          {
            "key": "status",
            "letter": "E",
            "label": "Persentase Realisasi",
            "description": "Hitung persentase realisasi: =C2/B2",
            "expectedRowAnswers": {
              "2": 0.76,
              "3": 0.847,
              "4": 0.917,
              "5": 0.8,
              "6": 0.84
            }
          }
        ]
      },
      {
        "id": "sheet_ref",
        "name": "Daftar Referensi",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Acuan",
            "letter": "A"
          },
          {
            "key": "deskripsi",
            "label": "Deskripsi Kategori",
            "letter": "B"
          },
          {
            "key": "tarif",
            "label": "Nilai Acuan Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "deskripsi": "Golongan Utama A",
              "tarif": 5000000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "deskripsi": "Golongan Menengah B",
              "tarif": 3500000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "deskripsi": "Golongan Dasar C",
              "tarif": 2000000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Selisih (Rp)",
        "formula": "=B2-C2",
        "explanation": "Menghitung sisa anggaran dari target dikurangi realisasi"
      },
      {
        "columnLabel": "Persentase Realisasi",
        "formula": "=C2/B2",
        "explanation": "Membagi realisasi dengan target anggaran"
      }
    ]
  },
  {
    "id": "EX-009",
    "number": 9,
    "code": "#SBEP009",
    "title": "Rekapitulasi Total dan Rata-rata Ujian Siswa",
    "category": "Statistik",
    "difficulty": "PEMULA",
    "difficultyStars": 2,
    "tags": [
      "Guru",
      "SUM",
      "AVERAGE",
      "Cek Otomatis",
      "Spreadsheet Kasus"
    ],
    "instructions": {
      "title": "PEMULA Level - Rekapitulasi Total dan Rata-rata Ujian Siswa",
      "description": "Selesaikan lembar kerja kasus Rekapitulasi Total dan Rata-rata Ujian Siswa. Kerjakan formula langsung di tabel data di bawah sesuai tujuan yang ditentukan.",
      "points": [
        "1. Periksa struktur kolom tabel dan pahami hubungan data antar kolom.",
        "2. Tulis rumus Excel yang dinamis pada sel-sel kolom target (bukan mengetik angka manual).",
        "3. Pastikan rumus dapat disalin ke seluruh baris yang bersangkutan.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas lembar kerja untuk memeriksa kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Rumus & Referensi",
        "headers": [
          "Kebutuhan",
          "Saran Fungsi"
        ],
        "rows": [
          [
            "Kalkulasi Angka",
            "Aritmatika (+, -, *, /)"
          ],
          [
            "Pencarian Data",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Uji Logika",
            "IF / IFS / AND / OR"
          ],
          [
            "Agregasi Data",
            "SUMIF / COUNTIF / AVERAGEIF"
          ]
        ]
      },
      "notice": "Dilarang mengubah struktur nama kolom asal. Isi rumus pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_main",
        "name": "XL-Test",
        "columns": [
          {
            "key": "item",
            "label": "Item / Deskripsi",
            "letter": "A"
          },
          {
            "key": "val1",
            "label": "Pemasukan / Target",
            "letter": "B"
          },
          {
            "key": "val2",
            "label": "Pengeluaran / Realisasi",
            "letter": "C"
          },
          {
            "key": "selisih",
            "label": "Selisih / Sisa (Rp)",
            "letter": "D"
          },
          {
            "key": "status",
            "label": "Persentase / Status",
            "letter": "E"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "item": "Divisi Pemasaran",
              "val1": 50000000,
              "val2": 38000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "item": "Divisi Operasional",
              "val1": 85000000,
              "val2": 72000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "item": "Divisi Teknologi IT",
              "val1": 60000000,
              "val2": 55000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "item": "Divisi Sumber Daya HRD",
              "val1": 30000000,
              "val2": 24000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "item": "Divisi Layanan Pelanggan",
              "val1": 25000000,
              "val2": 21000000,
              "selisih": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "selisih",
            "letter": "D",
            "label": "Selisih / Sisa (Rp)",
            "description": "Hitung selisih: =B2-C2",
            "expectedRowAnswers": {
              "2": 12000000,
              "3": 13000000,
              "4": 5000000,
              "5": 6000000,
              "6": 4000000
            }
          },
          {
            "key": "status",
            "letter": "E",
            "label": "Persentase Realisasi",
            "description": "Hitung persentase realisasi: =C2/B2",
            "expectedRowAnswers": {
              "2": 0.76,
              "3": 0.847,
              "4": 0.917,
              "5": 0.8,
              "6": 0.84
            }
          }
        ]
      },
      {
        "id": "sheet_ref",
        "name": "Daftar Referensi",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Acuan",
            "letter": "A"
          },
          {
            "key": "deskripsi",
            "label": "Deskripsi Kategori",
            "letter": "B"
          },
          {
            "key": "tarif",
            "label": "Nilai Acuan Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "deskripsi": "Golongan Utama A",
              "tarif": 5000000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "deskripsi": "Golongan Menengah B",
              "tarif": 3500000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "deskripsi": "Golongan Dasar C",
              "tarif": 2000000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Selisih (Rp)",
        "formula": "=B2-C2",
        "explanation": "Menghitung sisa anggaran dari target dikurangi realisasi"
      },
      {
        "columnLabel": "Persentase Realisasi",
        "formula": "=C2/B2",
        "explanation": "Membagi realisasi dengan target anggaran"
      }
    ]
  },
  {
    "id": "EX-010",
    "number": 10,
    "code": "#SBEP010",
    "title": "Statistik Penjualan Harian Cabang Minimarket",
    "category": "Statistik",
    "difficulty": "PEMULA",
    "difficultyStars": 2,
    "tags": [
      "Retail",
      "MAX",
      "MIN",
      "Cek Otomatis",
      "Spreadsheet Kasus"
    ],
    "instructions": {
      "title": "PEMULA Level - Statistik Penjualan Harian Cabang Minimarket",
      "description": "Selesaikan lembar kerja kasus Statistik Penjualan Harian Cabang Minimarket. Kerjakan formula langsung di tabel data di bawah sesuai tujuan yang ditentukan.",
      "points": [
        "1. Periksa struktur kolom tabel dan pahami hubungan data antar kolom.",
        "2. Tulis rumus Excel yang dinamis pada sel-sel kolom target (bukan mengetik angka manual).",
        "3. Pastikan rumus dapat disalin ke seluruh baris yang bersangkutan.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas lembar kerja untuk memeriksa kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Rumus & Referensi",
        "headers": [
          "Kebutuhan",
          "Saran Fungsi"
        ],
        "rows": [
          [
            "Kalkulasi Angka",
            "Aritmatika (+, -, *, /)"
          ],
          [
            "Pencarian Data",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Uji Logika",
            "IF / IFS / AND / OR"
          ],
          [
            "Agregasi Data",
            "SUMIF / COUNTIF / AVERAGEIF"
          ]
        ]
      },
      "notice": "Dilarang mengubah struktur nama kolom asal. Isi rumus pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_main",
        "name": "XL-Test",
        "columns": [
          {
            "key": "item",
            "label": "Item / Deskripsi",
            "letter": "A"
          },
          {
            "key": "val1",
            "label": "Pemasukan / Target",
            "letter": "B"
          },
          {
            "key": "val2",
            "label": "Pengeluaran / Realisasi",
            "letter": "C"
          },
          {
            "key": "selisih",
            "label": "Selisih / Sisa (Rp)",
            "letter": "D"
          },
          {
            "key": "status",
            "label": "Persentase / Status",
            "letter": "E"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "item": "Divisi Pemasaran",
              "val1": 50000000,
              "val2": 38000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "item": "Divisi Operasional",
              "val1": 85000000,
              "val2": 72000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "item": "Divisi Teknologi IT",
              "val1": 60000000,
              "val2": 55000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "item": "Divisi Sumber Daya HRD",
              "val1": 30000000,
              "val2": 24000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "item": "Divisi Layanan Pelanggan",
              "val1": 25000000,
              "val2": 21000000,
              "selisih": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "selisih",
            "letter": "D",
            "label": "Selisih / Sisa (Rp)",
            "description": "Hitung selisih: =B2-C2",
            "expectedRowAnswers": {
              "2": 12000000,
              "3": 13000000,
              "4": 5000000,
              "5": 6000000,
              "6": 4000000
            }
          },
          {
            "key": "status",
            "letter": "E",
            "label": "Persentase Realisasi",
            "description": "Hitung persentase realisasi: =C2/B2",
            "expectedRowAnswers": {
              "2": 0.76,
              "3": 0.847,
              "4": 0.917,
              "5": 0.8,
              "6": 0.84
            }
          }
        ]
      },
      {
        "id": "sheet_ref",
        "name": "Daftar Referensi",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Acuan",
            "letter": "A"
          },
          {
            "key": "deskripsi",
            "label": "Deskripsi Kategori",
            "letter": "B"
          },
          {
            "key": "tarif",
            "label": "Nilai Acuan Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "deskripsi": "Golongan Utama A",
              "tarif": 5000000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "deskripsi": "Golongan Menengah B",
              "tarif": 3500000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "deskripsi": "Golongan Dasar C",
              "tarif": 2000000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Selisih (Rp)",
        "formula": "=B2-C2",
        "explanation": "Menghitung sisa anggaran dari target dikurangi realisasi"
      },
      {
        "columnLabel": "Persentase Realisasi",
        "formula": "=C2/B2",
        "explanation": "Membagi realisasi dengan target anggaran"
      }
    ]
  },
  {
    "id": "EX-011",
    "number": 11,
    "code": "#SBEM011",
    "title": "Latihan Soal Excel Packing Dus Pesanan",
    "category": "Statistik",
    "difficulty": "MENENGAH",
    "difficultyStars": 2,
    "tags": [
      "Gudang",
      "COUNTIF",
      "Cek Otomatis",
      "Spreadsheet Kasus"
    ],
    "instructions": {
      "title": "MENENGAH Level - Latihan Soal Excel Packing Dus Pesanan",
      "description": "Selesaikan lembar kerja kasus Latihan Soal Excel Packing Dus Pesanan. Kerjakan formula langsung di tabel data di bawah sesuai tujuan yang ditentukan.",
      "points": [
        "1. Periksa struktur kolom tabel dan pahami hubungan data antar kolom.",
        "2. Tulis rumus Excel yang dinamis pada sel-sel kolom target (bukan mengetik angka manual).",
        "3. Pastikan rumus dapat disalin ke seluruh baris yang bersangkutan.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas lembar kerja untuk memeriksa kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Rumus & Referensi",
        "headers": [
          "Kebutuhan",
          "Saran Fungsi"
        ],
        "rows": [
          [
            "Kalkulasi Angka",
            "Aritmatika (+, -, *, /)"
          ],
          [
            "Pencarian Data",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Uji Logika",
            "IF / IFS / AND / OR"
          ],
          [
            "Agregasi Data",
            "SUMIF / COUNTIF / AVERAGEIF"
          ]
        ]
      },
      "notice": "Dilarang mengubah struktur nama kolom asal. Isi rumus pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_main",
        "name": "XL-Test",
        "columns": [
          {
            "key": "item",
            "label": "Item / Deskripsi",
            "letter": "A"
          },
          {
            "key": "val1",
            "label": "Pemasukan / Target",
            "letter": "B"
          },
          {
            "key": "val2",
            "label": "Pengeluaran / Realisasi",
            "letter": "C"
          },
          {
            "key": "selisih",
            "label": "Selisih / Sisa (Rp)",
            "letter": "D"
          },
          {
            "key": "status",
            "label": "Persentase / Status",
            "letter": "E"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "item": "Divisi Pemasaran",
              "val1": 50000000,
              "val2": 38000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "item": "Divisi Operasional",
              "val1": 85000000,
              "val2": 72000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "item": "Divisi Teknologi IT",
              "val1": 60000000,
              "val2": 55000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "item": "Divisi Sumber Daya HRD",
              "val1": 30000000,
              "val2": 24000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "item": "Divisi Layanan Pelanggan",
              "val1": 25000000,
              "val2": 21000000,
              "selisih": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "selisih",
            "letter": "D",
            "label": "Selisih / Sisa (Rp)",
            "description": "Hitung selisih: =B2-C2",
            "expectedRowAnswers": {
              "2": 12000000,
              "3": 13000000,
              "4": 5000000,
              "5": 6000000,
              "6": 4000000
            }
          },
          {
            "key": "status",
            "letter": "E",
            "label": "Persentase Realisasi",
            "description": "Hitung persentase realisasi: =C2/B2",
            "expectedRowAnswers": {
              "2": 0.76,
              "3": 0.847,
              "4": 0.917,
              "5": 0.8,
              "6": 0.84
            }
          }
        ]
      },
      {
        "id": "sheet_ref",
        "name": "Daftar Referensi",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Acuan",
            "letter": "A"
          },
          {
            "key": "deskripsi",
            "label": "Deskripsi Kategori",
            "letter": "B"
          },
          {
            "key": "tarif",
            "label": "Nilai Acuan Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "deskripsi": "Golongan Utama A",
              "tarif": 5000000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "deskripsi": "Golongan Menengah B",
              "tarif": 3500000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "deskripsi": "Golongan Dasar C",
              "tarif": 2000000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Selisih (Rp)",
        "formula": "=B2-C2",
        "explanation": "Menghitung sisa anggaran dari target dikurangi realisasi"
      },
      {
        "columnLabel": "Persentase Realisasi",
        "formula": "=C2/B2",
        "explanation": "Membagi realisasi dengan target anggaran"
      }
    ]
  },
  {
    "id": "EX-012",
    "number": 12,
    "code": "#SBEM012",
    "title": "Rekapitulasi Omset Sales per Wilayah (SUMIF)",
    "category": "Statistik",
    "difficulty": "MENENGAH",
    "difficultyStars": 2,
    "tags": [
      "Sales",
      "SUMIF",
      "Cek Otomatis",
      "Spreadsheet Kasus"
    ],
    "instructions": {
      "title": "MENENGAH Level - Rekapitulasi Omset Sales per Wilayah (SUMIF)",
      "description": "Selesaikan lembar kerja kasus Rekapitulasi Omset Sales per Wilayah (SUMIF). Kerjakan formula langsung di tabel data di bawah sesuai tujuan yang ditentukan.",
      "points": [
        "1. Periksa struktur kolom tabel dan pahami hubungan data antar kolom.",
        "2. Tulis rumus Excel yang dinamis pada sel-sel kolom target (bukan mengetik angka manual).",
        "3. Pastikan rumus dapat disalin ke seluruh baris yang bersangkutan.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas lembar kerja untuk memeriksa kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Rumus & Referensi",
        "headers": [
          "Kebutuhan",
          "Saran Fungsi"
        ],
        "rows": [
          [
            "Kalkulasi Angka",
            "Aritmatika (+, -, *, /)"
          ],
          [
            "Pencarian Data",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Uji Logika",
            "IF / IFS / AND / OR"
          ],
          [
            "Agregasi Data",
            "SUMIF / COUNTIF / AVERAGEIF"
          ]
        ]
      },
      "notice": "Dilarang mengubah struktur nama kolom asal. Isi rumus pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_main",
        "name": "XL-Test",
        "columns": [
          {
            "key": "item",
            "label": "Item / Deskripsi",
            "letter": "A"
          },
          {
            "key": "val1",
            "label": "Pemasukan / Target",
            "letter": "B"
          },
          {
            "key": "val2",
            "label": "Pengeluaran / Realisasi",
            "letter": "C"
          },
          {
            "key": "selisih",
            "label": "Selisih / Sisa (Rp)",
            "letter": "D"
          },
          {
            "key": "status",
            "label": "Persentase / Status",
            "letter": "E"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "item": "Divisi Pemasaran",
              "val1": 50000000,
              "val2": 38000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "item": "Divisi Operasional",
              "val1": 85000000,
              "val2": 72000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "item": "Divisi Teknologi IT",
              "val1": 60000000,
              "val2": 55000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "item": "Divisi Sumber Daya HRD",
              "val1": 30000000,
              "val2": 24000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "item": "Divisi Layanan Pelanggan",
              "val1": 25000000,
              "val2": 21000000,
              "selisih": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "selisih",
            "letter": "D",
            "label": "Selisih / Sisa (Rp)",
            "description": "Hitung selisih: =B2-C2",
            "expectedRowAnswers": {
              "2": 12000000,
              "3": 13000000,
              "4": 5000000,
              "5": 6000000,
              "6": 4000000
            }
          },
          {
            "key": "status",
            "letter": "E",
            "label": "Persentase Realisasi",
            "description": "Hitung persentase realisasi: =C2/B2",
            "expectedRowAnswers": {
              "2": 0.76,
              "3": 0.847,
              "4": 0.917,
              "5": 0.8,
              "6": 0.84
            }
          }
        ]
      },
      {
        "id": "sheet_ref",
        "name": "Daftar Referensi",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Acuan",
            "letter": "A"
          },
          {
            "key": "deskripsi",
            "label": "Deskripsi Kategori",
            "letter": "B"
          },
          {
            "key": "tarif",
            "label": "Nilai Acuan Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "deskripsi": "Golongan Utama A",
              "tarif": 5000000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "deskripsi": "Golongan Menengah B",
              "tarif": 3500000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "deskripsi": "Golongan Dasar C",
              "tarif": 2000000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Selisih (Rp)",
        "formula": "=B2-C2",
        "explanation": "Menghitung sisa anggaran dari target dikurangi realisasi"
      },
      {
        "columnLabel": "Persentase Realisasi",
        "formula": "=C2/B2",
        "explanation": "Membagi realisasi dengan target anggaran"
      }
    ]
  },
  {
    "id": "EX-013",
    "number": 13,
    "code": "#SBEM013",
    "title": "Hitung Frekuensi Rating Kepuasan Pelanggan",
    "category": "Statistik",
    "difficulty": "MENENGAH",
    "difficultyStars": 2,
    "tags": [
      "CS",
      "COUNTIF",
      "Cek Otomatis",
      "Spreadsheet Kasus"
    ],
    "instructions": {
      "title": "MENENGAH Level - Hitung Frekuensi Rating Kepuasan Pelanggan",
      "description": "Selesaikan lembar kerja kasus Hitung Frekuensi Rating Kepuasan Pelanggan. Kerjakan formula langsung di tabel data di bawah sesuai tujuan yang ditentukan.",
      "points": [
        "1. Periksa struktur kolom tabel dan pahami hubungan data antar kolom.",
        "2. Tulis rumus Excel yang dinamis pada sel-sel kolom target (bukan mengetik angka manual).",
        "3. Pastikan rumus dapat disalin ke seluruh baris yang bersangkutan.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas lembar kerja untuk memeriksa kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Rumus & Referensi",
        "headers": [
          "Kebutuhan",
          "Saran Fungsi"
        ],
        "rows": [
          [
            "Kalkulasi Angka",
            "Aritmatika (+, -, *, /)"
          ],
          [
            "Pencarian Data",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Uji Logika",
            "IF / IFS / AND / OR"
          ],
          [
            "Agregasi Data",
            "SUMIF / COUNTIF / AVERAGEIF"
          ]
        ]
      },
      "notice": "Dilarang mengubah struktur nama kolom asal. Isi rumus pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_main",
        "name": "XL-Test",
        "columns": [
          {
            "key": "item",
            "label": "Item / Deskripsi",
            "letter": "A"
          },
          {
            "key": "val1",
            "label": "Pemasukan / Target",
            "letter": "B"
          },
          {
            "key": "val2",
            "label": "Pengeluaran / Realisasi",
            "letter": "C"
          },
          {
            "key": "selisih",
            "label": "Selisih / Sisa (Rp)",
            "letter": "D"
          },
          {
            "key": "status",
            "label": "Persentase / Status",
            "letter": "E"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "item": "Divisi Pemasaran",
              "val1": 50000000,
              "val2": 38000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "item": "Divisi Operasional",
              "val1": 85000000,
              "val2": 72000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "item": "Divisi Teknologi IT",
              "val1": 60000000,
              "val2": 55000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "item": "Divisi Sumber Daya HRD",
              "val1": 30000000,
              "val2": 24000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "item": "Divisi Layanan Pelanggan",
              "val1": 25000000,
              "val2": 21000000,
              "selisih": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "selisih",
            "letter": "D",
            "label": "Selisih / Sisa (Rp)",
            "description": "Hitung selisih: =B2-C2",
            "expectedRowAnswers": {
              "2": 12000000,
              "3": 13000000,
              "4": 5000000,
              "5": 6000000,
              "6": 4000000
            }
          },
          {
            "key": "status",
            "letter": "E",
            "label": "Persentase Realisasi",
            "description": "Hitung persentase realisasi: =C2/B2",
            "expectedRowAnswers": {
              "2": 0.76,
              "3": 0.847,
              "4": 0.917,
              "5": 0.8,
              "6": 0.84
            }
          }
        ]
      },
      {
        "id": "sheet_ref",
        "name": "Daftar Referensi",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Acuan",
            "letter": "A"
          },
          {
            "key": "deskripsi",
            "label": "Deskripsi Kategori",
            "letter": "B"
          },
          {
            "key": "tarif",
            "label": "Nilai Acuan Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "deskripsi": "Golongan Utama A",
              "tarif": 5000000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "deskripsi": "Golongan Menengah B",
              "tarif": 3500000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "deskripsi": "Golongan Dasar C",
              "tarif": 2000000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Selisih (Rp)",
        "formula": "=B2-C2",
        "explanation": "Menghitung sisa anggaran dari target dikurangi realisasi"
      },
      {
        "columnLabel": "Persentase Realisasi",
        "formula": "=C2/B2",
        "explanation": "Membagi realisasi dengan target anggaran"
      }
    ]
  },
  {
    "id": "EX-014",
    "number": 14,
    "code": "#SBEM014",
    "title": "Standardisasi Format Nama Lengkap Karyawan (PROPER)",
    "category": "Teks",
    "difficulty": "MENENGAH",
    "difficultyStars": 2,
    "tags": [
      "HRD",
      "Teks",
      "Cek Otomatis",
      "Spreadsheet Kasus"
    ],
    "instructions": {
      "title": "MENENGAH Level - Standardisasi Format Nama Lengkap Karyawan (PROPER)",
      "description": "Selesaikan lembar kerja kasus Standardisasi Format Nama Lengkap Karyawan (PROPER). Kerjakan formula langsung di tabel data di bawah sesuai tujuan yang ditentukan.",
      "points": [
        "1. Periksa struktur kolom tabel dan pahami hubungan data antar kolom.",
        "2. Tulis rumus Excel yang dinamis pada sel-sel kolom target (bukan mengetik angka manual).",
        "3. Pastikan rumus dapat disalin ke seluruh baris yang bersangkutan.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas lembar kerja untuk memeriksa kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Rumus & Referensi",
        "headers": [
          "Kebutuhan",
          "Saran Fungsi"
        ],
        "rows": [
          [
            "Kalkulasi Angka",
            "Aritmatika (+, -, *, /)"
          ],
          [
            "Pencarian Data",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Uji Logika",
            "IF / IFS / AND / OR"
          ],
          [
            "Agregasi Data",
            "SUMIF / COUNTIF / AVERAGEIF"
          ]
        ]
      },
      "notice": "Dilarang mengubah struktur nama kolom asal. Isi rumus pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_main",
        "name": "XL-Test",
        "columns": [
          {
            "key": "id",
            "label": "Kode ID Pegawai",
            "letter": "A"
          },
          {
            "key": "nama_raw",
            "label": "Nama Asal",
            "letter": "B"
          },
          {
            "key": "dept_code",
            "label": "Kode Dept",
            "letter": "C"
          },
          {
            "key": "nama_rapi",
            "label": "Nama Rapi (PROPER)",
            "letter": "D"
          },
          {
            "key": "email",
            "label": "Email Kantor",
            "letter": "E"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "id": "HR-2024-001",
              "nama_raw": "budi santoso",
              "dept_code": "?",
              "nama_rapi": "?",
              "email": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "id": "IT-2023-045",
              "nama_raw": "SITI AMINAH",
              "dept_code": "?",
              "nama_rapi": "?",
              "email": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "id": "FIN-2022-012",
              "nama_raw": "rudi hermawan",
              "dept_code": "?",
              "nama_rapi": "?",
              "email": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "id": "MKT-2024-089",
              "nama_raw": "DEWI LESTARI",
              "dept_code": "?",
              "nama_rapi": "?",
              "email": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "id": "OPS-2021-004",
              "nama_raw": "ahmad fauzi",
              "dept_code": "?",
              "nama_rapi": "?",
              "email": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "dept_code",
            "letter": "C",
            "label": "Kode Dept",
            "description": "Ekstrak kode departemen di depan kode ID (=LEFT(A2, 2) atau 3)",
            "expectedRowAnswers": {
              "2": "HR",
              "3": "IT",
              "4": "FIN",
              "5": "MKT",
              "6": "OPS"
            }
          },
          {
            "key": "nama_rapi",
            "letter": "D",
            "label": "Nama Rapi (PROPER)",
            "description": "Format nama menjadi huruf kapital di awal kata: =PROPER(B2)",
            "expectedRowAnswers": {
              "2": "Budi Santoso",
              "3": "Siti Aminah",
              "4": "Rudi Hermawan",
              "5": "Dewi Lestari",
              "6": "Ahmad Fauzi"
            }
          },
          {
            "key": "email",
            "letter": "E",
            "label": "Email Kantor",
            "description": "Gabungkan email: =LOWER(LEFT(B2,4)&\"@kantor.com\")",
            "expectedRowAnswers": {
              "2": "budi.santoso@kantor.com",
              "3": "siti.aminah@kantor.com",
              "4": "rudi.hermawan@kantor.com",
              "5": "dewi.lestari@kantor.com",
              "6": "ahmad.fauzi@kantor.com"
            }
          }
        ]
      },
      {
        "id": "sheet_ref",
        "name": "Daftar Referensi",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Acuan",
            "letter": "A"
          },
          {
            "key": "deskripsi",
            "label": "Deskripsi Kategori",
            "letter": "B"
          },
          {
            "key": "tarif",
            "label": "Nilai Acuan Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "deskripsi": "Golongan Utama A",
              "tarif": 5000000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "deskripsi": "Golongan Menengah B",
              "tarif": 3500000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "deskripsi": "Golongan Dasar C",
              "tarif": 2000000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Nama Rapi",
        "formula": "=PROPER(B2)",
        "explanation": "Mengubah format teks menjadi huruf kapital awal"
      },
      {
        "columnLabel": "Kode Dept",
        "formula": "=LEFT(A2, FIND(\"-\", A2)-1)",
        "explanation": "Mengambil karakter departemen sebelum tanda strip"
      }
    ]
  },
  {
    "id": "EX-015",
    "number": 15,
    "code": "#SBEM015",
    "title": "Ekstraksi Kode SKU dan Kategori Barang (LEFT/MID/RIGHT)",
    "category": "Teks",
    "difficulty": "MENENGAH",
    "difficultyStars": 3,
    "tags": [
      "Inventory",
      "Teks",
      "Cek Otomatis",
      "Spreadsheet Kasus"
    ],
    "instructions": {
      "title": "MENENGAH Level - Ekstraksi Kode SKU dan Kategori Barang (LEFT/MID/RIGHT)",
      "description": "Selesaikan lembar kerja kasus Ekstraksi Kode SKU dan Kategori Barang (LEFT/MID/RIGHT). Kerjakan formula langsung di tabel data di bawah sesuai tujuan yang ditentukan.",
      "points": [
        "1. Periksa struktur kolom tabel dan pahami hubungan data antar kolom.",
        "2. Tulis rumus Excel yang dinamis pada sel-sel kolom target (bukan mengetik angka manual).",
        "3. Pastikan rumus dapat disalin ke seluruh baris yang bersangkutan.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas lembar kerja untuk memeriksa kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Rumus & Referensi",
        "headers": [
          "Kebutuhan",
          "Saran Fungsi"
        ],
        "rows": [
          [
            "Kalkulasi Angka",
            "Aritmatika (+, -, *, /)"
          ],
          [
            "Pencarian Data",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Uji Logika",
            "IF / IFS / AND / OR"
          ],
          [
            "Agregasi Data",
            "SUMIF / COUNTIF / AVERAGEIF"
          ]
        ]
      },
      "notice": "Dilarang mengubah struktur nama kolom asal. Isi rumus pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_main",
        "name": "XL-Test",
        "columns": [
          {
            "key": "id",
            "label": "Kode ID Pegawai",
            "letter": "A"
          },
          {
            "key": "nama_raw",
            "label": "Nama Asal",
            "letter": "B"
          },
          {
            "key": "dept_code",
            "label": "Kode Dept",
            "letter": "C"
          },
          {
            "key": "nama_rapi",
            "label": "Nama Rapi (PROPER)",
            "letter": "D"
          },
          {
            "key": "email",
            "label": "Email Kantor",
            "letter": "E"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "id": "HR-2024-001",
              "nama_raw": "budi santoso",
              "dept_code": "?",
              "nama_rapi": "?",
              "email": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "id": "IT-2023-045",
              "nama_raw": "SITI AMINAH",
              "dept_code": "?",
              "nama_rapi": "?",
              "email": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "id": "FIN-2022-012",
              "nama_raw": "rudi hermawan",
              "dept_code": "?",
              "nama_rapi": "?",
              "email": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "id": "MKT-2024-089",
              "nama_raw": "DEWI LESTARI",
              "dept_code": "?",
              "nama_rapi": "?",
              "email": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "id": "OPS-2021-004",
              "nama_raw": "ahmad fauzi",
              "dept_code": "?",
              "nama_rapi": "?",
              "email": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "dept_code",
            "letter": "C",
            "label": "Kode Dept",
            "description": "Ekstrak kode departemen di depan kode ID (=LEFT(A2, 2) atau 3)",
            "expectedRowAnswers": {
              "2": "HR",
              "3": "IT",
              "4": "FIN",
              "5": "MKT",
              "6": "OPS"
            }
          },
          {
            "key": "nama_rapi",
            "letter": "D",
            "label": "Nama Rapi (PROPER)",
            "description": "Format nama menjadi huruf kapital di awal kata: =PROPER(B2)",
            "expectedRowAnswers": {
              "2": "Budi Santoso",
              "3": "Siti Aminah",
              "4": "Rudi Hermawan",
              "5": "Dewi Lestari",
              "6": "Ahmad Fauzi"
            }
          },
          {
            "key": "email",
            "letter": "E",
            "label": "Email Kantor",
            "description": "Gabungkan email: =LOWER(LEFT(B2,4)&\"@kantor.com\")",
            "expectedRowAnswers": {
              "2": "budi.santoso@kantor.com",
              "3": "siti.aminah@kantor.com",
              "4": "rudi.hermawan@kantor.com",
              "5": "dewi.lestari@kantor.com",
              "6": "ahmad.fauzi@kantor.com"
            }
          }
        ]
      },
      {
        "id": "sheet_ref",
        "name": "Daftar Referensi",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Acuan",
            "letter": "A"
          },
          {
            "key": "deskripsi",
            "label": "Deskripsi Kategori",
            "letter": "B"
          },
          {
            "key": "tarif",
            "label": "Nilai Acuan Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "deskripsi": "Golongan Utama A",
              "tarif": 5000000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "deskripsi": "Golongan Menengah B",
              "tarif": 3500000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "deskripsi": "Golongan Dasar C",
              "tarif": 2000000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Nama Rapi",
        "formula": "=PROPER(B2)",
        "explanation": "Mengubah format teks menjadi huruf kapital awal"
      },
      {
        "columnLabel": "Kode Dept",
        "formula": "=LEFT(A2, FIND(\"-\", A2)-1)",
        "explanation": "Mengambil karakter departemen sebelum tanda strip"
      }
    ]
  },
  {
    "id": "EX-016",
    "number": 16,
    "code": "#SBEM016",
    "title": "Pembuatan Email Korporat Otomatis (CONCAT & LOWER)",
    "category": "Teks",
    "difficulty": "MENENGAH",
    "difficultyStars": 3,
    "tags": [
      "IT",
      "Otomasi",
      "Cek Otomatis",
      "Spreadsheet Kasus"
    ],
    "instructions": {
      "title": "MENENGAH Level - Pembuatan Email Korporat Otomatis (CONCAT & LOWER)",
      "description": "Selesaikan lembar kerja kasus Pembuatan Email Korporat Otomatis (CONCAT & LOWER). Kerjakan formula langsung di tabel data di bawah sesuai tujuan yang ditentukan.",
      "points": [
        "1. Periksa struktur kolom tabel dan pahami hubungan data antar kolom.",
        "2. Tulis rumus Excel yang dinamis pada sel-sel kolom target (bukan mengetik angka manual).",
        "3. Pastikan rumus dapat disalin ke seluruh baris yang bersangkutan.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas lembar kerja untuk memeriksa kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Rumus & Referensi",
        "headers": [
          "Kebutuhan",
          "Saran Fungsi"
        ],
        "rows": [
          [
            "Kalkulasi Angka",
            "Aritmatika (+, -, *, /)"
          ],
          [
            "Pencarian Data",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Uji Logika",
            "IF / IFS / AND / OR"
          ],
          [
            "Agregasi Data",
            "SUMIF / COUNTIF / AVERAGEIF"
          ]
        ]
      },
      "notice": "Dilarang mengubah struktur nama kolom asal. Isi rumus pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_main",
        "name": "XL-Test",
        "columns": [
          {
            "key": "id",
            "label": "Kode ID Pegawai",
            "letter": "A"
          },
          {
            "key": "nama_raw",
            "label": "Nama Asal",
            "letter": "B"
          },
          {
            "key": "dept_code",
            "label": "Kode Dept",
            "letter": "C"
          },
          {
            "key": "nama_rapi",
            "label": "Nama Rapi (PROPER)",
            "letter": "D"
          },
          {
            "key": "email",
            "label": "Email Kantor",
            "letter": "E"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "id": "HR-2024-001",
              "nama_raw": "budi santoso",
              "dept_code": "?",
              "nama_rapi": "?",
              "email": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "id": "IT-2023-045",
              "nama_raw": "SITI AMINAH",
              "dept_code": "?",
              "nama_rapi": "?",
              "email": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "id": "FIN-2022-012",
              "nama_raw": "rudi hermawan",
              "dept_code": "?",
              "nama_rapi": "?",
              "email": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "id": "MKT-2024-089",
              "nama_raw": "DEWI LESTARI",
              "dept_code": "?",
              "nama_rapi": "?",
              "email": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "id": "OPS-2021-004",
              "nama_raw": "ahmad fauzi",
              "dept_code": "?",
              "nama_rapi": "?",
              "email": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "dept_code",
            "letter": "C",
            "label": "Kode Dept",
            "description": "Ekstrak kode departemen di depan kode ID (=LEFT(A2, 2) atau 3)",
            "expectedRowAnswers": {
              "2": "HR",
              "3": "IT",
              "4": "FIN",
              "5": "MKT",
              "6": "OPS"
            }
          },
          {
            "key": "nama_rapi",
            "letter": "D",
            "label": "Nama Rapi (PROPER)",
            "description": "Format nama menjadi huruf kapital di awal kata: =PROPER(B2)",
            "expectedRowAnswers": {
              "2": "Budi Santoso",
              "3": "Siti Aminah",
              "4": "Rudi Hermawan",
              "5": "Dewi Lestari",
              "6": "Ahmad Fauzi"
            }
          },
          {
            "key": "email",
            "letter": "E",
            "label": "Email Kantor",
            "description": "Gabungkan email: =LOWER(LEFT(B2,4)&\"@kantor.com\")",
            "expectedRowAnswers": {
              "2": "budi.santoso@kantor.com",
              "3": "siti.aminah@kantor.com",
              "4": "rudi.hermawan@kantor.com",
              "5": "dewi.lestari@kantor.com",
              "6": "ahmad.fauzi@kantor.com"
            }
          }
        ]
      },
      {
        "id": "sheet_ref",
        "name": "Daftar Referensi",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Acuan",
            "letter": "A"
          },
          {
            "key": "deskripsi",
            "label": "Deskripsi Kategori",
            "letter": "B"
          },
          {
            "key": "tarif",
            "label": "Nilai Acuan Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "deskripsi": "Golongan Utama A",
              "tarif": 5000000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "deskripsi": "Golongan Menengah B",
              "tarif": 3500000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "deskripsi": "Golongan Dasar C",
              "tarif": 2000000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Nama Rapi",
        "formula": "=PROPER(B2)",
        "explanation": "Mengubah format teks menjadi huruf kapital awal"
      },
      {
        "columnLabel": "Kode Dept",
        "formula": "=LEFT(A2, FIND(\"-\", A2)-1)",
        "explanation": "Mengambil karakter departemen sebelum tanda strip"
      }
    ]
  },
  {
    "id": "EX-017",
    "number": 17,
    "code": "#SBEM017",
    "title": "Pembersihan Spasi Ganda Data Customer (TRIM & LEN)",
    "category": "Teks",
    "difficulty": "MENENGAH",
    "difficultyStars": 3,
    "tags": [
      "Data Cleansing",
      "Cek Otomatis",
      "Spreadsheet Kasus"
    ],
    "instructions": {
      "title": "MENENGAH Level - Pembersihan Spasi Ganda Data Customer (TRIM & LEN)",
      "description": "Selesaikan lembar kerja kasus Pembersihan Spasi Ganda Data Customer (TRIM & LEN). Kerjakan formula langsung di tabel data di bawah sesuai tujuan yang ditentukan.",
      "points": [
        "1. Periksa struktur kolom tabel dan pahami hubungan data antar kolom.",
        "2. Tulis rumus Excel yang dinamis pada sel-sel kolom target (bukan mengetik angka manual).",
        "3. Pastikan rumus dapat disalin ke seluruh baris yang bersangkutan.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas lembar kerja untuk memeriksa kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Rumus & Referensi",
        "headers": [
          "Kebutuhan",
          "Saran Fungsi"
        ],
        "rows": [
          [
            "Kalkulasi Angka",
            "Aritmatika (+, -, *, /)"
          ],
          [
            "Pencarian Data",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Uji Logika",
            "IF / IFS / AND / OR"
          ],
          [
            "Agregasi Data",
            "SUMIF / COUNTIF / AVERAGEIF"
          ]
        ]
      },
      "notice": "Dilarang mengubah struktur nama kolom asal. Isi rumus pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_main",
        "name": "XL-Test",
        "columns": [
          {
            "key": "id",
            "label": "Kode ID Pegawai",
            "letter": "A"
          },
          {
            "key": "nama_raw",
            "label": "Nama Asal",
            "letter": "B"
          },
          {
            "key": "dept_code",
            "label": "Kode Dept",
            "letter": "C"
          },
          {
            "key": "nama_rapi",
            "label": "Nama Rapi (PROPER)",
            "letter": "D"
          },
          {
            "key": "email",
            "label": "Email Kantor",
            "letter": "E"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "id": "HR-2024-001",
              "nama_raw": "budi santoso",
              "dept_code": "?",
              "nama_rapi": "?",
              "email": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "id": "IT-2023-045",
              "nama_raw": "SITI AMINAH",
              "dept_code": "?",
              "nama_rapi": "?",
              "email": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "id": "FIN-2022-012",
              "nama_raw": "rudi hermawan",
              "dept_code": "?",
              "nama_rapi": "?",
              "email": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "id": "MKT-2024-089",
              "nama_raw": "DEWI LESTARI",
              "dept_code": "?",
              "nama_rapi": "?",
              "email": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "id": "OPS-2021-004",
              "nama_raw": "ahmad fauzi",
              "dept_code": "?",
              "nama_rapi": "?",
              "email": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "dept_code",
            "letter": "C",
            "label": "Kode Dept",
            "description": "Ekstrak kode departemen di depan kode ID (=LEFT(A2, 2) atau 3)",
            "expectedRowAnswers": {
              "2": "HR",
              "3": "IT",
              "4": "FIN",
              "5": "MKT",
              "6": "OPS"
            }
          },
          {
            "key": "nama_rapi",
            "letter": "D",
            "label": "Nama Rapi (PROPER)",
            "description": "Format nama menjadi huruf kapital di awal kata: =PROPER(B2)",
            "expectedRowAnswers": {
              "2": "Budi Santoso",
              "3": "Siti Aminah",
              "4": "Rudi Hermawan",
              "5": "Dewi Lestari",
              "6": "Ahmad Fauzi"
            }
          },
          {
            "key": "email",
            "letter": "E",
            "label": "Email Kantor",
            "description": "Gabungkan email: =LOWER(LEFT(B2,4)&\"@kantor.com\")",
            "expectedRowAnswers": {
              "2": "budi.santoso@kantor.com",
              "3": "siti.aminah@kantor.com",
              "4": "rudi.hermawan@kantor.com",
              "5": "dewi.lestari@kantor.com",
              "6": "ahmad.fauzi@kantor.com"
            }
          }
        ]
      },
      {
        "id": "sheet_ref",
        "name": "Daftar Referensi",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Acuan",
            "letter": "A"
          },
          {
            "key": "deskripsi",
            "label": "Deskripsi Kategori",
            "letter": "B"
          },
          {
            "key": "tarif",
            "label": "Nilai Acuan Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "deskripsi": "Golongan Utama A",
              "tarif": 5000000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "deskripsi": "Golongan Menengah B",
              "tarif": 3500000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "deskripsi": "Golongan Dasar C",
              "tarif": 2000000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Nama Rapi",
        "formula": "=PROPER(B2)",
        "explanation": "Mengubah format teks menjadi huruf kapital awal"
      },
      {
        "columnLabel": "Kode Dept",
        "formula": "=LEFT(A2, FIND(\"-\", A2)-1)",
        "explanation": "Mengambil karakter departemen sebelum tanda strip"
      }
    ]
  },
  {
    "id": "EX-018",
    "number": 18,
    "code": "#SBEM018",
    "title": "Latihan Soal Excel Master DATEDIF Masa Kerja",
    "category": "Keuangan",
    "difficulty": "MENENGAH",
    "difficultyStars": 3,
    "tags": [
      "HRD",
      "DATEDIF",
      "Cek Otomatis",
      "Spreadsheet Kasus"
    ],
    "instructions": {
      "title": "MENENGAH Level - Latihan Soal Excel Master DATEDIF Masa Kerja",
      "description": "Selesaikan lembar kerja kasus Latihan Soal Excel Master DATEDIF Masa Kerja. Kerjakan formula langsung di tabel data di bawah sesuai tujuan yang ditentukan.",
      "points": [
        "1. Periksa struktur kolom tabel dan pahami hubungan data antar kolom.",
        "2. Tulis rumus Excel yang dinamis pada sel-sel kolom target (bukan mengetik angka manual).",
        "3. Pastikan rumus dapat disalin ke seluruh baris yang bersangkutan.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas lembar kerja untuk memeriksa kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Rumus & Referensi",
        "headers": [
          "Kebutuhan",
          "Saran Fungsi"
        ],
        "rows": [
          [
            "Kalkulasi Angka",
            "Aritmatika (+, -, *, /)"
          ],
          [
            "Pencarian Data",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Uji Logika",
            "IF / IFS / AND / OR"
          ],
          [
            "Agregasi Data",
            "SUMIF / COUNTIF / AVERAGEIF"
          ]
        ]
      },
      "notice": "Dilarang mengubah struktur nama kolom asal. Isi rumus pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_main",
        "name": "XL-Test",
        "columns": [
          {
            "key": "no",
            "label": "No",
            "letter": "A"
          },
          {
            "key": "nama",
            "label": "Nama Karyawan / Peserta",
            "letter": "B"
          },
          {
            "key": "skor",
            "label": "Skor / Nilai",
            "letter": "C"
          },
          {
            "key": "golongan",
            "label": "Golongan / Kode",
            "letter": "D"
          },
          {
            "key": "tunjangan",
            "label": "Tunjangan / Gaji (Rp)",
            "letter": "E"
          },
          {
            "key": "status",
            "label": "Status Kelulusan / Predikat",
            "letter": "F"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "no": 1,
              "nama": "Andi Pratama",
              "skor": 85,
              "golongan": "III/A",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "nama": "Citra Kirana",
              "skor": 92,
              "golongan": "IV/A",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "nama": "Dimas Anggara",
              "skor": 64,
              "golongan": "II/B",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "nama": "Eka Saputra",
              "skor": 78,
              "golongan": "III/B",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "nama": "Fitri Handayani",
              "skor": 88,
              "golongan": "III/A",
              "tunjangan": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "tunjangan",
            "letter": "E",
            "label": "Tunjangan (Rp)",
            "description": "Hitung tunjangan berdasarkan golongan: II=2jt, III=3.5jt, IV=5jt",
            "expectedRowAnswers": {
              "2": 3500000,
              "3": 5000000,
              "4": 2000000,
              "5": 3500000,
              "6": 3500000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Kelulusan",
            "description": "Jika skor >= 70 LULUS, jika tidak TIDAK LULUS: =IF(C2>=70, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "TIDAK LULUS",
              "5": "LULUS",
              "6": "LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_ref",
        "name": "Daftar Referensi",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Acuan",
            "letter": "A"
          },
          {
            "key": "deskripsi",
            "label": "Deskripsi Kategori",
            "letter": "B"
          },
          {
            "key": "tarif",
            "label": "Nilai Acuan Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "deskripsi": "Golongan Utama A",
              "tarif": 5000000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "deskripsi": "Golongan Menengah B",
              "tarif": 3500000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "deskripsi": "Golongan Dasar C",
              "tarif": 2000000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Tunjangan",
        "formula": "=IF(LEFT(D2,2)=\"IV\", 5000000, IF(LEFT(D2,3)=\"III\", 3500000, 2000000))",
        "explanation": "Menentukan besaran tunjangan berdasarkan golongan"
      },
      {
        "columnLabel": "Status Kelulusan",
        "formula": "=IF(C2>=70, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelulusan nilai minimal 70"
      }
    ]
  },
  {
    "id": "EX-019",
    "number": 19,
    "code": "#SBEM019",
    "title": "Penentuan Status Kelulusan Ujian Sertifikasi (IF)",
    "category": "Logika",
    "difficulty": "MENENGAH",
    "difficultyStars": 3,
    "tags": [
      "Akademik",
      "IF",
      "Cek Otomatis",
      "Spreadsheet Kasus"
    ],
    "instructions": {
      "title": "MENENGAH Level - Penentuan Status Kelulusan Ujian Sertifikasi (IF)",
      "description": "Selesaikan lembar kerja kasus Penentuan Status Kelulusan Ujian Sertifikasi (IF). Kerjakan formula langsung di tabel data di bawah sesuai tujuan yang ditentukan.",
      "points": [
        "1. Periksa struktur kolom tabel dan pahami hubungan data antar kolom.",
        "2. Tulis rumus Excel yang dinamis pada sel-sel kolom target (bukan mengetik angka manual).",
        "3. Pastikan rumus dapat disalin ke seluruh baris yang bersangkutan.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas lembar kerja untuk memeriksa kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Rumus & Referensi",
        "headers": [
          "Kebutuhan",
          "Saran Fungsi"
        ],
        "rows": [
          [
            "Kalkulasi Angka",
            "Aritmatika (+, -, *, /)"
          ],
          [
            "Pencarian Data",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Uji Logika",
            "IF / IFS / AND / OR"
          ],
          [
            "Agregasi Data",
            "SUMIF / COUNTIF / AVERAGEIF"
          ]
        ]
      },
      "notice": "Dilarang mengubah struktur nama kolom asal. Isi rumus pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_main",
        "name": "XL-Test",
        "columns": [
          {
            "key": "no",
            "label": "No",
            "letter": "A"
          },
          {
            "key": "nama",
            "label": "Nama Karyawan / Peserta",
            "letter": "B"
          },
          {
            "key": "skor",
            "label": "Skor / Nilai",
            "letter": "C"
          },
          {
            "key": "golongan",
            "label": "Golongan / Kode",
            "letter": "D"
          },
          {
            "key": "tunjangan",
            "label": "Tunjangan / Gaji (Rp)",
            "letter": "E"
          },
          {
            "key": "status",
            "label": "Status Kelulusan / Predikat",
            "letter": "F"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "no": 1,
              "nama": "Andi Pratama",
              "skor": 85,
              "golongan": "III/A",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "nama": "Citra Kirana",
              "skor": 92,
              "golongan": "IV/A",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "nama": "Dimas Anggara",
              "skor": 64,
              "golongan": "II/B",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "nama": "Eka Saputra",
              "skor": 78,
              "golongan": "III/B",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "nama": "Fitri Handayani",
              "skor": 88,
              "golongan": "III/A",
              "tunjangan": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "tunjangan",
            "letter": "E",
            "label": "Tunjangan (Rp)",
            "description": "Hitung tunjangan berdasarkan golongan: II=2jt, III=3.5jt, IV=5jt",
            "expectedRowAnswers": {
              "2": 3500000,
              "3": 5000000,
              "4": 2000000,
              "5": 3500000,
              "6": 3500000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Kelulusan",
            "description": "Jika skor >= 70 LULUS, jika tidak TIDAK LULUS: =IF(C2>=70, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "TIDAK LULUS",
              "5": "LULUS",
              "6": "LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_ref",
        "name": "Daftar Referensi",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Acuan",
            "letter": "A"
          },
          {
            "key": "deskripsi",
            "label": "Deskripsi Kategori",
            "letter": "B"
          },
          {
            "key": "tarif",
            "label": "Nilai Acuan Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "deskripsi": "Golongan Utama A",
              "tarif": 5000000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "deskripsi": "Golongan Menengah B",
              "tarif": 3500000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "deskripsi": "Golongan Dasar C",
              "tarif": 2000000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Tunjangan",
        "formula": "=IF(LEFT(D2,2)=\"IV\", 5000000, IF(LEFT(D2,3)=\"III\", 3500000, 2000000))",
        "explanation": "Menentukan besaran tunjangan berdasarkan golongan"
      },
      {
        "columnLabel": "Status Kelulusan",
        "formula": "=IF(C2>=70, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelulusan nilai minimal 70"
      }
    ]
  },
  {
    "id": "EX-020",
    "number": 20,
    "code": "#SBEM020",
    "title": "Pemberian Bonus Target Bulanan Tim Marketing (IF)",
    "category": "Logika",
    "difficulty": "MENENGAH",
    "difficultyStars": 3,
    "tags": [
      "Marketing",
      "Bonus",
      "Cek Otomatis",
      "Spreadsheet Kasus"
    ],
    "instructions": {
      "title": "MENENGAH Level - Pemberian Bonus Target Bulanan Tim Marketing (IF)",
      "description": "Selesaikan lembar kerja kasus Pemberian Bonus Target Bulanan Tim Marketing (IF). Kerjakan formula langsung di tabel data di bawah sesuai tujuan yang ditentukan.",
      "points": [
        "1. Periksa struktur kolom tabel dan pahami hubungan data antar kolom.",
        "2. Tulis rumus Excel yang dinamis pada sel-sel kolom target (bukan mengetik angka manual).",
        "3. Pastikan rumus dapat disalin ke seluruh baris yang bersangkutan.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas lembar kerja untuk memeriksa kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Rumus & Referensi",
        "headers": [
          "Kebutuhan",
          "Saran Fungsi"
        ],
        "rows": [
          [
            "Kalkulasi Angka",
            "Aritmatika (+, -, *, /)"
          ],
          [
            "Pencarian Data",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Uji Logika",
            "IF / IFS / AND / OR"
          ],
          [
            "Agregasi Data",
            "SUMIF / COUNTIF / AVERAGEIF"
          ]
        ]
      },
      "notice": "Dilarang mengubah struktur nama kolom asal. Isi rumus pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_main",
        "name": "XL-Test",
        "columns": [
          {
            "key": "no",
            "label": "No",
            "letter": "A"
          },
          {
            "key": "nama",
            "label": "Nama Karyawan / Peserta",
            "letter": "B"
          },
          {
            "key": "skor",
            "label": "Skor / Nilai",
            "letter": "C"
          },
          {
            "key": "golongan",
            "label": "Golongan / Kode",
            "letter": "D"
          },
          {
            "key": "tunjangan",
            "label": "Tunjangan / Gaji (Rp)",
            "letter": "E"
          },
          {
            "key": "status",
            "label": "Status Kelulusan / Predikat",
            "letter": "F"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "no": 1,
              "nama": "Andi Pratama",
              "skor": 85,
              "golongan": "III/A",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "nama": "Citra Kirana",
              "skor": 92,
              "golongan": "IV/A",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "nama": "Dimas Anggara",
              "skor": 64,
              "golongan": "II/B",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "nama": "Eka Saputra",
              "skor": 78,
              "golongan": "III/B",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "nama": "Fitri Handayani",
              "skor": 88,
              "golongan": "III/A",
              "tunjangan": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "tunjangan",
            "letter": "E",
            "label": "Tunjangan (Rp)",
            "description": "Hitung tunjangan berdasarkan golongan: II=2jt, III=3.5jt, IV=5jt",
            "expectedRowAnswers": {
              "2": 3500000,
              "3": 5000000,
              "4": 2000000,
              "5": 3500000,
              "6": 3500000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Kelulusan",
            "description": "Jika skor >= 70 LULUS, jika tidak TIDAK LULUS: =IF(C2>=70, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "TIDAK LULUS",
              "5": "LULUS",
              "6": "LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_ref",
        "name": "Daftar Referensi",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Acuan",
            "letter": "A"
          },
          {
            "key": "deskripsi",
            "label": "Deskripsi Kategori",
            "letter": "B"
          },
          {
            "key": "tarif",
            "label": "Nilai Acuan Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "deskripsi": "Golongan Utama A",
              "tarif": 5000000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "deskripsi": "Golongan Menengah B",
              "tarif": 3500000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "deskripsi": "Golongan Dasar C",
              "tarif": 2000000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Tunjangan",
        "formula": "=IF(LEFT(D2,2)=\"IV\", 5000000, IF(LEFT(D2,3)=\"III\", 3500000, 2000000))",
        "explanation": "Menentukan besaran tunjangan berdasarkan golongan"
      },
      {
        "columnLabel": "Status Kelulusan",
        "formula": "=IF(C2>=70, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelulusan nilai minimal 70"
      }
    ]
  },
  {
    "id": "EX-021",
    "number": 21,
    "code": "#SBEM021",
    "title": "Validasi Batas Kredit Pelanggan Toko",
    "category": "Logika",
    "difficulty": "MENENGAH",
    "difficultyStars": 3,
    "tags": [
      "Finance",
      "Logika",
      "Cek Otomatis",
      "Spreadsheet Kasus"
    ],
    "instructions": {
      "title": "MENENGAH Level - Validasi Batas Kredit Pelanggan Toko",
      "description": "Selesaikan lembar kerja kasus Validasi Batas Kredit Pelanggan Toko. Kerjakan formula langsung di tabel data di bawah sesuai tujuan yang ditentukan.",
      "points": [
        "1. Periksa struktur kolom tabel dan pahami hubungan data antar kolom.",
        "2. Tulis rumus Excel yang dinamis pada sel-sel kolom target (bukan mengetik angka manual).",
        "3. Pastikan rumus dapat disalin ke seluruh baris yang bersangkutan.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas lembar kerja untuk memeriksa kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Rumus & Referensi",
        "headers": [
          "Kebutuhan",
          "Saran Fungsi"
        ],
        "rows": [
          [
            "Kalkulasi Angka",
            "Aritmatika (+, -, *, /)"
          ],
          [
            "Pencarian Data",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Uji Logika",
            "IF / IFS / AND / OR"
          ],
          [
            "Agregasi Data",
            "SUMIF / COUNTIF / AVERAGEIF"
          ]
        ]
      },
      "notice": "Dilarang mengubah struktur nama kolom asal. Isi rumus pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_main",
        "name": "XL-Test",
        "columns": [
          {
            "key": "no",
            "label": "No",
            "letter": "A"
          },
          {
            "key": "nama",
            "label": "Nama Karyawan / Peserta",
            "letter": "B"
          },
          {
            "key": "skor",
            "label": "Skor / Nilai",
            "letter": "C"
          },
          {
            "key": "golongan",
            "label": "Golongan / Kode",
            "letter": "D"
          },
          {
            "key": "tunjangan",
            "label": "Tunjangan / Gaji (Rp)",
            "letter": "E"
          },
          {
            "key": "status",
            "label": "Status Kelulusan / Predikat",
            "letter": "F"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "no": 1,
              "nama": "Andi Pratama",
              "skor": 85,
              "golongan": "III/A",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "nama": "Citra Kirana",
              "skor": 92,
              "golongan": "IV/A",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "nama": "Dimas Anggara",
              "skor": 64,
              "golongan": "II/B",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "nama": "Eka Saputra",
              "skor": 78,
              "golongan": "III/B",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "nama": "Fitri Handayani",
              "skor": 88,
              "golongan": "III/A",
              "tunjangan": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "tunjangan",
            "letter": "E",
            "label": "Tunjangan (Rp)",
            "description": "Hitung tunjangan berdasarkan golongan: II=2jt, III=3.5jt, IV=5jt",
            "expectedRowAnswers": {
              "2": 3500000,
              "3": 5000000,
              "4": 2000000,
              "5": 3500000,
              "6": 3500000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Kelulusan",
            "description": "Jika skor >= 70 LULUS, jika tidak TIDAK LULUS: =IF(C2>=70, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "TIDAK LULUS",
              "5": "LULUS",
              "6": "LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_ref",
        "name": "Daftar Referensi",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Acuan",
            "letter": "A"
          },
          {
            "key": "deskripsi",
            "label": "Deskripsi Kategori",
            "letter": "B"
          },
          {
            "key": "tarif",
            "label": "Nilai Acuan Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "deskripsi": "Golongan Utama A",
              "tarif": 5000000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "deskripsi": "Golongan Menengah B",
              "tarif": 3500000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "deskripsi": "Golongan Dasar C",
              "tarif": 2000000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Tunjangan",
        "formula": "=IF(LEFT(D2,2)=\"IV\", 5000000, IF(LEFT(D2,3)=\"III\", 3500000, 2000000))",
        "explanation": "Menentukan besaran tunjangan berdasarkan golongan"
      },
      {
        "columnLabel": "Status Kelulusan",
        "formula": "=IF(C2>=70, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelulusan nilai minimal 70"
      }
    ]
  },
  {
    "id": "EX-022",
    "number": 22,
    "code": "#SBEM022",
    "title": "Pencarian Tarif Kamar Hotel Berdasarkan Tipe (VLOOKUP)",
    "category": "Lookup",
    "difficulty": "MENENGAH",
    "difficultyStars": 3,
    "tags": [
      "Perhotelan",
      "VLOOKUP",
      "Cek Otomatis",
      "Spreadsheet Kasus"
    ],
    "instructions": {
      "title": "MENENGAH Level - Pencarian Tarif Kamar Hotel Berdasarkan Tipe (VLOOKUP)",
      "description": "Selesaikan lembar kerja kasus Pencarian Tarif Kamar Hotel Berdasarkan Tipe (VLOOKUP). Kerjakan formula langsung di tabel data di bawah sesuai tujuan yang ditentukan.",
      "points": [
        "1. Periksa struktur kolom tabel dan pahami hubungan data antar kolom.",
        "2. Tulis rumus Excel yang dinamis pada sel-sel kolom target (bukan mengetik angka manual).",
        "3. Pastikan rumus dapat disalin ke seluruh baris yang bersangkutan.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas lembar kerja untuk memeriksa kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Rumus & Referensi",
        "headers": [
          "Kebutuhan",
          "Saran Fungsi"
        ],
        "rows": [
          [
            "Kalkulasi Angka",
            "Aritmatika (+, -, *, /)"
          ],
          [
            "Pencarian Data",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Uji Logika",
            "IF / IFS / AND / OR"
          ],
          [
            "Agregasi Data",
            "SUMIF / COUNTIF / AVERAGEIF"
          ]
        ]
      },
      "notice": "Dilarang mengubah struktur nama kolom asal. Isi rumus pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_main",
        "name": "XL-Test",
        "columns": [
          {
            "key": "no",
            "label": "No",
            "letter": "A"
          },
          {
            "key": "nama",
            "label": "Nama Karyawan / Peserta",
            "letter": "B"
          },
          {
            "key": "skor",
            "label": "Skor / Nilai",
            "letter": "C"
          },
          {
            "key": "golongan",
            "label": "Golongan / Kode",
            "letter": "D"
          },
          {
            "key": "tunjangan",
            "label": "Tunjangan / Gaji (Rp)",
            "letter": "E"
          },
          {
            "key": "status",
            "label": "Status Kelulusan / Predikat",
            "letter": "F"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "no": 1,
              "nama": "Andi Pratama",
              "skor": 85,
              "golongan": "III/A",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "nama": "Citra Kirana",
              "skor": 92,
              "golongan": "IV/A",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "nama": "Dimas Anggara",
              "skor": 64,
              "golongan": "II/B",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "nama": "Eka Saputra",
              "skor": 78,
              "golongan": "III/B",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "nama": "Fitri Handayani",
              "skor": 88,
              "golongan": "III/A",
              "tunjangan": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "tunjangan",
            "letter": "E",
            "label": "Tunjangan (Rp)",
            "description": "Hitung tunjangan berdasarkan golongan: II=2jt, III=3.5jt, IV=5jt",
            "expectedRowAnswers": {
              "2": 3500000,
              "3": 5000000,
              "4": 2000000,
              "5": 3500000,
              "6": 3500000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Kelulusan",
            "description": "Jika skor >= 70 LULUS, jika tidak TIDAK LULUS: =IF(C2>=70, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "TIDAK LULUS",
              "5": "LULUS",
              "6": "LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_ref",
        "name": "Daftar Referensi",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Acuan",
            "letter": "A"
          },
          {
            "key": "deskripsi",
            "label": "Deskripsi Kategori",
            "letter": "B"
          },
          {
            "key": "tarif",
            "label": "Nilai Acuan Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "deskripsi": "Golongan Utama A",
              "tarif": 5000000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "deskripsi": "Golongan Menengah B",
              "tarif": 3500000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "deskripsi": "Golongan Dasar C",
              "tarif": 2000000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Tunjangan",
        "formula": "=IF(LEFT(D2,2)=\"IV\", 5000000, IF(LEFT(D2,3)=\"III\", 3500000, 2000000))",
        "explanation": "Menentukan besaran tunjangan berdasarkan golongan"
      },
      {
        "columnLabel": "Status Kelulusan",
        "formula": "=IF(C2>=70, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelulusan nilai minimal 70"
      }
    ]
  },
  {
    "id": "EX-023",
    "number": 23,
    "code": "#SBEM023",
    "title": "Master Daftar Harga Barang Sembako (VLOOKUP)",
    "category": "Lookup",
    "difficulty": "MENENGAH",
    "difficultyStars": 3,
    "tags": [
      "Retail",
      "Lookup",
      "Cek Otomatis",
      "Spreadsheet Kasus"
    ],
    "instructions": {
      "title": "MENENGAH Level - Master Daftar Harga Barang Sembako (VLOOKUP)",
      "description": "Selesaikan lembar kerja kasus Master Daftar Harga Barang Sembako (VLOOKUP). Kerjakan formula langsung di tabel data di bawah sesuai tujuan yang ditentukan.",
      "points": [
        "1. Periksa struktur kolom tabel dan pahami hubungan data antar kolom.",
        "2. Tulis rumus Excel yang dinamis pada sel-sel kolom target (bukan mengetik angka manual).",
        "3. Pastikan rumus dapat disalin ke seluruh baris yang bersangkutan.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas lembar kerja untuk memeriksa kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Rumus & Referensi",
        "headers": [
          "Kebutuhan",
          "Saran Fungsi"
        ],
        "rows": [
          [
            "Kalkulasi Angka",
            "Aritmatika (+, -, *, /)"
          ],
          [
            "Pencarian Data",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Uji Logika",
            "IF / IFS / AND / OR"
          ],
          [
            "Agregasi Data",
            "SUMIF / COUNTIF / AVERAGEIF"
          ]
        ]
      },
      "notice": "Dilarang mengubah struktur nama kolom asal. Isi rumus pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_main",
        "name": "XL-Test",
        "columns": [
          {
            "key": "no",
            "label": "No",
            "letter": "A"
          },
          {
            "key": "nama",
            "label": "Nama Karyawan / Peserta",
            "letter": "B"
          },
          {
            "key": "skor",
            "label": "Skor / Nilai",
            "letter": "C"
          },
          {
            "key": "golongan",
            "label": "Golongan / Kode",
            "letter": "D"
          },
          {
            "key": "tunjangan",
            "label": "Tunjangan / Gaji (Rp)",
            "letter": "E"
          },
          {
            "key": "status",
            "label": "Status Kelulusan / Predikat",
            "letter": "F"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "no": 1,
              "nama": "Andi Pratama",
              "skor": 85,
              "golongan": "III/A",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "nama": "Citra Kirana",
              "skor": 92,
              "golongan": "IV/A",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "nama": "Dimas Anggara",
              "skor": 64,
              "golongan": "II/B",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "nama": "Eka Saputra",
              "skor": 78,
              "golongan": "III/B",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "nama": "Fitri Handayani",
              "skor": 88,
              "golongan": "III/A",
              "tunjangan": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "tunjangan",
            "letter": "E",
            "label": "Tunjangan (Rp)",
            "description": "Hitung tunjangan berdasarkan golongan: II=2jt, III=3.5jt, IV=5jt",
            "expectedRowAnswers": {
              "2": 3500000,
              "3": 5000000,
              "4": 2000000,
              "5": 3500000,
              "6": 3500000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Kelulusan",
            "description": "Jika skor >= 70 LULUS, jika tidak TIDAK LULUS: =IF(C2>=70, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "TIDAK LULUS",
              "5": "LULUS",
              "6": "LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_ref",
        "name": "Daftar Referensi",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Acuan",
            "letter": "A"
          },
          {
            "key": "deskripsi",
            "label": "Deskripsi Kategori",
            "letter": "B"
          },
          {
            "key": "tarif",
            "label": "Nilai Acuan Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "deskripsi": "Golongan Utama A",
              "tarif": 5000000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "deskripsi": "Golongan Menengah B",
              "tarif": 3500000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "deskripsi": "Golongan Dasar C",
              "tarif": 2000000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Tunjangan",
        "formula": "=IF(LEFT(D2,2)=\"IV\", 5000000, IF(LEFT(D2,3)=\"III\", 3500000, 2000000))",
        "explanation": "Menentukan besaran tunjangan berdasarkan golongan"
      },
      {
        "columnLabel": "Status Kelulusan",
        "formula": "=IF(C2>=70, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelulusan nilai minimal 70"
      }
    ]
  },
  {
    "id": "EX-024",
    "number": 24,
    "code": "#SBEM024",
    "title": "Pencarian Data Pasien Rumah Sakit (XLOOKUP)",
    "category": "Lookup",
    "difficulty": "MENENGAH",
    "difficultyStars": 3,
    "tags": [
      "Kesehatan",
      "XLOOKUP",
      "Cek Otomatis",
      "Spreadsheet Kasus"
    ],
    "instructions": {
      "title": "MENENGAH Level - Pencarian Data Pasien Rumah Sakit (XLOOKUP)",
      "description": "Selesaikan lembar kerja kasus Pencarian Data Pasien Rumah Sakit (XLOOKUP). Kerjakan formula langsung di tabel data di bawah sesuai tujuan yang ditentukan.",
      "points": [
        "1. Periksa struktur kolom tabel dan pahami hubungan data antar kolom.",
        "2. Tulis rumus Excel yang dinamis pada sel-sel kolom target (bukan mengetik angka manual).",
        "3. Pastikan rumus dapat disalin ke seluruh baris yang bersangkutan.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas lembar kerja untuk memeriksa kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Rumus & Referensi",
        "headers": [
          "Kebutuhan",
          "Saran Fungsi"
        ],
        "rows": [
          [
            "Kalkulasi Angka",
            "Aritmatika (+, -, *, /)"
          ],
          [
            "Pencarian Data",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Uji Logika",
            "IF / IFS / AND / OR"
          ],
          [
            "Agregasi Data",
            "SUMIF / COUNTIF / AVERAGEIF"
          ]
        ]
      },
      "notice": "Dilarang mengubah struktur nama kolom asal. Isi rumus pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_main",
        "name": "XL-Test",
        "columns": [
          {
            "key": "no",
            "label": "No",
            "letter": "A"
          },
          {
            "key": "nama",
            "label": "Nama Karyawan / Peserta",
            "letter": "B"
          },
          {
            "key": "skor",
            "label": "Skor / Nilai",
            "letter": "C"
          },
          {
            "key": "golongan",
            "label": "Golongan / Kode",
            "letter": "D"
          },
          {
            "key": "tunjangan",
            "label": "Tunjangan / Gaji (Rp)",
            "letter": "E"
          },
          {
            "key": "status",
            "label": "Status Kelulusan / Predikat",
            "letter": "F"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "no": 1,
              "nama": "Andi Pratama",
              "skor": 85,
              "golongan": "III/A",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "nama": "Citra Kirana",
              "skor": 92,
              "golongan": "IV/A",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "nama": "Dimas Anggara",
              "skor": 64,
              "golongan": "II/B",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "nama": "Eka Saputra",
              "skor": 78,
              "golongan": "III/B",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "nama": "Fitri Handayani",
              "skor": 88,
              "golongan": "III/A",
              "tunjangan": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "tunjangan",
            "letter": "E",
            "label": "Tunjangan (Rp)",
            "description": "Hitung tunjangan berdasarkan golongan: II=2jt, III=3.5jt, IV=5jt",
            "expectedRowAnswers": {
              "2": 3500000,
              "3": 5000000,
              "4": 2000000,
              "5": 3500000,
              "6": 3500000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Kelulusan",
            "description": "Jika skor >= 70 LULUS, jika tidak TIDAK LULUS: =IF(C2>=70, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "TIDAK LULUS",
              "5": "LULUS",
              "6": "LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_ref",
        "name": "Daftar Referensi",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Acuan",
            "letter": "A"
          },
          {
            "key": "deskripsi",
            "label": "Deskripsi Kategori",
            "letter": "B"
          },
          {
            "key": "tarif",
            "label": "Nilai Acuan Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "deskripsi": "Golongan Utama A",
              "tarif": 5000000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "deskripsi": "Golongan Menengah B",
              "tarif": 3500000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "deskripsi": "Golongan Dasar C",
              "tarif": 2000000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Tunjangan",
        "formula": "=IF(LEFT(D2,2)=\"IV\", 5000000, IF(LEFT(D2,3)=\"III\", 3500000, 2000000))",
        "explanation": "Menentukan besaran tunjangan berdasarkan golongan"
      },
      {
        "columnLabel": "Status Kelulusan",
        "formula": "=IF(C2>=70, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelulusan nilai minimal 70"
      }
    ]
  },
  {
    "id": "EX-025",
    "number": 25,
    "code": "#SBEM025",
    "title": "Analisis Ranking Penjual Terbaik Toko Online (LARGE/RANK)",
    "category": "Statistik",
    "difficulty": "MENENGAH",
    "difficultyStars": 3,
    "tags": [
      "E-Commerce",
      "Cek Otomatis",
      "Spreadsheet Kasus"
    ],
    "instructions": {
      "title": "MENENGAH Level - Analisis Ranking Penjual Terbaik Toko Online (LARGE/RANK)",
      "description": "Selesaikan lembar kerja kasus Analisis Ranking Penjual Terbaik Toko Online (LARGE/RANK). Kerjakan formula langsung di tabel data di bawah sesuai tujuan yang ditentukan.",
      "points": [
        "1. Periksa struktur kolom tabel dan pahami hubungan data antar kolom.",
        "2. Tulis rumus Excel yang dinamis pada sel-sel kolom target (bukan mengetik angka manual).",
        "3. Pastikan rumus dapat disalin ke seluruh baris yang bersangkutan.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas lembar kerja untuk memeriksa kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Rumus & Referensi",
        "headers": [
          "Kebutuhan",
          "Saran Fungsi"
        ],
        "rows": [
          [
            "Kalkulasi Angka",
            "Aritmatika (+, -, *, /)"
          ],
          [
            "Pencarian Data",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Uji Logika",
            "IF / IFS / AND / OR"
          ],
          [
            "Agregasi Data",
            "SUMIF / COUNTIF / AVERAGEIF"
          ]
        ]
      },
      "notice": "Dilarang mengubah struktur nama kolom asal. Isi rumus pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_main",
        "name": "XL-Test",
        "columns": [
          {
            "key": "item",
            "label": "Item / Deskripsi",
            "letter": "A"
          },
          {
            "key": "val1",
            "label": "Pemasukan / Target",
            "letter": "B"
          },
          {
            "key": "val2",
            "label": "Pengeluaran / Realisasi",
            "letter": "C"
          },
          {
            "key": "selisih",
            "label": "Selisih / Sisa (Rp)",
            "letter": "D"
          },
          {
            "key": "status",
            "label": "Persentase / Status",
            "letter": "E"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "item": "Divisi Pemasaran",
              "val1": 50000000,
              "val2": 38000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "item": "Divisi Operasional",
              "val1": 85000000,
              "val2": 72000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "item": "Divisi Teknologi IT",
              "val1": 60000000,
              "val2": 55000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "item": "Divisi Sumber Daya HRD",
              "val1": 30000000,
              "val2": 24000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "item": "Divisi Layanan Pelanggan",
              "val1": 25000000,
              "val2": 21000000,
              "selisih": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "selisih",
            "letter": "D",
            "label": "Selisih / Sisa (Rp)",
            "description": "Hitung selisih: =B2-C2",
            "expectedRowAnswers": {
              "2": 12000000,
              "3": 13000000,
              "4": 5000000,
              "5": 6000000,
              "6": 4000000
            }
          },
          {
            "key": "status",
            "letter": "E",
            "label": "Persentase Realisasi",
            "description": "Hitung persentase realisasi: =C2/B2",
            "expectedRowAnswers": {
              "2": 0.76,
              "3": 0.847,
              "4": 0.917,
              "5": 0.8,
              "6": 0.84
            }
          }
        ]
      },
      {
        "id": "sheet_ref",
        "name": "Daftar Referensi",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Acuan",
            "letter": "A"
          },
          {
            "key": "deskripsi",
            "label": "Deskripsi Kategori",
            "letter": "B"
          },
          {
            "key": "tarif",
            "label": "Nilai Acuan Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "deskripsi": "Golongan Utama A",
              "tarif": 5000000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "deskripsi": "Golongan Menengah B",
              "tarif": 3500000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "deskripsi": "Golongan Dasar C",
              "tarif": 2000000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Selisih (Rp)",
        "formula": "=B2-C2",
        "explanation": "Menghitung sisa anggaran dari target dikurangi realisasi"
      },
      {
        "columnLabel": "Persentase Realisasi",
        "formula": "=C2/B2",
        "explanation": "Membagi realisasi dengan target anggaran"
      }
    ]
  },
  {
    "id": "EX-026",
    "number": 26,
    "code": "#SBEM026",
    "title": "Penetapan Grade Nilai Siswa A/B/C/D (IFS Bertingkat)",
    "category": "Logika",
    "difficulty": "MAHIR",
    "difficultyStars": 3,
    "tags": [
      "Pendidikan",
      "IFS",
      "Cek Otomatis",
      "Spreadsheet Kasus"
    ],
    "instructions": {
      "title": "MAHIR Level - Penetapan Grade Nilai Siswa A/B/C/D (IFS Bertingkat)",
      "description": "Selesaikan lembar kerja kasus Penetapan Grade Nilai Siswa A/B/C/D (IFS Bertingkat). Kerjakan formula langsung di tabel data di bawah sesuai tujuan yang ditentukan.",
      "points": [
        "1. Periksa struktur kolom tabel dan pahami hubungan data antar kolom.",
        "2. Tulis rumus Excel yang dinamis pada sel-sel kolom target (bukan mengetik angka manual).",
        "3. Pastikan rumus dapat disalin ke seluruh baris yang bersangkutan.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas lembar kerja untuk memeriksa kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Rumus & Referensi",
        "headers": [
          "Kebutuhan",
          "Saran Fungsi"
        ],
        "rows": [
          [
            "Kalkulasi Angka",
            "Aritmatika (+, -, *, /)"
          ],
          [
            "Pencarian Data",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Uji Logika",
            "IF / IFS / AND / OR"
          ],
          [
            "Agregasi Data",
            "SUMIF / COUNTIF / AVERAGEIF"
          ]
        ]
      },
      "notice": "Dilarang mengubah struktur nama kolom asal. Isi rumus pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_main",
        "name": "XL-Test",
        "columns": [
          {
            "key": "no",
            "label": "No",
            "letter": "A"
          },
          {
            "key": "nama",
            "label": "Nama Karyawan / Peserta",
            "letter": "B"
          },
          {
            "key": "skor",
            "label": "Skor / Nilai",
            "letter": "C"
          },
          {
            "key": "golongan",
            "label": "Golongan / Kode",
            "letter": "D"
          },
          {
            "key": "tunjangan",
            "label": "Tunjangan / Gaji (Rp)",
            "letter": "E"
          },
          {
            "key": "status",
            "label": "Status Kelulusan / Predikat",
            "letter": "F"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "no": 1,
              "nama": "Andi Pratama",
              "skor": 85,
              "golongan": "III/A",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "nama": "Citra Kirana",
              "skor": 92,
              "golongan": "IV/A",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "nama": "Dimas Anggara",
              "skor": 64,
              "golongan": "II/B",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "nama": "Eka Saputra",
              "skor": 78,
              "golongan": "III/B",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "nama": "Fitri Handayani",
              "skor": 88,
              "golongan": "III/A",
              "tunjangan": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "tunjangan",
            "letter": "E",
            "label": "Tunjangan (Rp)",
            "description": "Hitung tunjangan berdasarkan golongan: II=2jt, III=3.5jt, IV=5jt",
            "expectedRowAnswers": {
              "2": 3500000,
              "3": 5000000,
              "4": 2000000,
              "5": 3500000,
              "6": 3500000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Kelulusan",
            "description": "Jika skor >= 70 LULUS, jika tidak TIDAK LULUS: =IF(C2>=70, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "TIDAK LULUS",
              "5": "LULUS",
              "6": "LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_ref",
        "name": "Daftar Referensi",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Acuan",
            "letter": "A"
          },
          {
            "key": "deskripsi",
            "label": "Deskripsi Kategori",
            "letter": "B"
          },
          {
            "key": "tarif",
            "label": "Nilai Acuan Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "deskripsi": "Golongan Utama A",
              "tarif": 5000000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "deskripsi": "Golongan Menengah B",
              "tarif": 3500000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "deskripsi": "Golongan Dasar C",
              "tarif": 2000000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Tunjangan",
        "formula": "=IF(LEFT(D2,2)=\"IV\", 5000000, IF(LEFT(D2,3)=\"III\", 3500000, 2000000))",
        "explanation": "Menentukan besaran tunjangan berdasarkan golongan"
      },
      {
        "columnLabel": "Status Kelulusan",
        "formula": "=IF(C2>=70, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelulusan nilai minimal 70"
      }
    ]
  },
  {
    "id": "EX-027",
    "number": 27,
    "code": "#SBEM027",
    "title": "Kalkulasi Tarif Pajak Penghasilan PPh 21 Berjenjang",
    "category": "Logika",
    "difficulty": "MAHIR",
    "difficultyStars": 4,
    "tags": [
      "Pajak",
      "Finance",
      "Cek Otomatis",
      "Spreadsheet Kasus"
    ],
    "instructions": {
      "title": "MAHIR Level - Kalkulasi Tarif Pajak Penghasilan PPh 21 Berjenjang",
      "description": "Selesaikan lembar kerja kasus Kalkulasi Tarif Pajak Penghasilan PPh 21 Berjenjang. Kerjakan formula langsung di tabel data di bawah sesuai tujuan yang ditentukan.",
      "points": [
        "1. Periksa struktur kolom tabel dan pahami hubungan data antar kolom.",
        "2. Tulis rumus Excel yang dinamis pada sel-sel kolom target (bukan mengetik angka manual).",
        "3. Pastikan rumus dapat disalin ke seluruh baris yang bersangkutan.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas lembar kerja untuk memeriksa kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Rumus & Referensi",
        "headers": [
          "Kebutuhan",
          "Saran Fungsi"
        ],
        "rows": [
          [
            "Kalkulasi Angka",
            "Aritmatika (+, -, *, /)"
          ],
          [
            "Pencarian Data",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Uji Logika",
            "IF / IFS / AND / OR"
          ],
          [
            "Agregasi Data",
            "SUMIF / COUNTIF / AVERAGEIF"
          ]
        ]
      },
      "notice": "Dilarang mengubah struktur nama kolom asal. Isi rumus pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_main",
        "name": "XL-Test",
        "columns": [
          {
            "key": "no",
            "label": "No",
            "letter": "A"
          },
          {
            "key": "nama",
            "label": "Nama Karyawan / Peserta",
            "letter": "B"
          },
          {
            "key": "skor",
            "label": "Skor / Nilai",
            "letter": "C"
          },
          {
            "key": "golongan",
            "label": "Golongan / Kode",
            "letter": "D"
          },
          {
            "key": "tunjangan",
            "label": "Tunjangan / Gaji (Rp)",
            "letter": "E"
          },
          {
            "key": "status",
            "label": "Status Kelulusan / Predikat",
            "letter": "F"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "no": 1,
              "nama": "Andi Pratama",
              "skor": 85,
              "golongan": "III/A",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "nama": "Citra Kirana",
              "skor": 92,
              "golongan": "IV/A",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "nama": "Dimas Anggara",
              "skor": 64,
              "golongan": "II/B",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "nama": "Eka Saputra",
              "skor": 78,
              "golongan": "III/B",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "nama": "Fitri Handayani",
              "skor": 88,
              "golongan": "III/A",
              "tunjangan": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "tunjangan",
            "letter": "E",
            "label": "Tunjangan (Rp)",
            "description": "Hitung tunjangan berdasarkan golongan: II=2jt, III=3.5jt, IV=5jt",
            "expectedRowAnswers": {
              "2": 3500000,
              "3": 5000000,
              "4": 2000000,
              "5": 3500000,
              "6": 3500000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Kelulusan",
            "description": "Jika skor >= 70 LULUS, jika tidak TIDAK LULUS: =IF(C2>=70, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "TIDAK LULUS",
              "5": "LULUS",
              "6": "LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_ref",
        "name": "Daftar Referensi",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Acuan",
            "letter": "A"
          },
          {
            "key": "deskripsi",
            "label": "Deskripsi Kategori",
            "letter": "B"
          },
          {
            "key": "tarif",
            "label": "Nilai Acuan Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "deskripsi": "Golongan Utama A",
              "tarif": 5000000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "deskripsi": "Golongan Menengah B",
              "tarif": 3500000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "deskripsi": "Golongan Dasar C",
              "tarif": 2000000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Tunjangan",
        "formula": "=IF(LEFT(D2,2)=\"IV\", 5000000, IF(LEFT(D2,3)=\"III\", 3500000, 2000000))",
        "explanation": "Menentukan besaran tunjangan berdasarkan golongan"
      },
      {
        "columnLabel": "Status Kelulusan",
        "formula": "=IF(C2>=70, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelulusan nilai minimal 70"
      }
    ]
  },
  {
    "id": "EX-028",
    "number": 28,
    "code": "#SBEM028",
    "title": "Penentuan Diskon Bertingkat Member Platinum/Gold/Silver",
    "category": "Logika",
    "difficulty": "MAHIR",
    "difficultyStars": 4,
    "tags": [
      "CRM",
      "Member",
      "Cek Otomatis",
      "Spreadsheet Kasus"
    ],
    "instructions": {
      "title": "MAHIR Level - Penentuan Diskon Bertingkat Member Platinum/Gold/Silver",
      "description": "Selesaikan lembar kerja kasus Penentuan Diskon Bertingkat Member Platinum/Gold/Silver. Kerjakan formula langsung di tabel data di bawah sesuai tujuan yang ditentukan.",
      "points": [
        "1. Periksa struktur kolom tabel dan pahami hubungan data antar kolom.",
        "2. Tulis rumus Excel yang dinamis pada sel-sel kolom target (bukan mengetik angka manual).",
        "3. Pastikan rumus dapat disalin ke seluruh baris yang bersangkutan.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas lembar kerja untuk memeriksa kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Rumus & Referensi",
        "headers": [
          "Kebutuhan",
          "Saran Fungsi"
        ],
        "rows": [
          [
            "Kalkulasi Angka",
            "Aritmatika (+, -, *, /)"
          ],
          [
            "Pencarian Data",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Uji Logika",
            "IF / IFS / AND / OR"
          ],
          [
            "Agregasi Data",
            "SUMIF / COUNTIF / AVERAGEIF"
          ]
        ]
      },
      "notice": "Dilarang mengubah struktur nama kolom asal. Isi rumus pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_main",
        "name": "XL-Test",
        "columns": [
          {
            "key": "no",
            "label": "No",
            "letter": "A"
          },
          {
            "key": "nama",
            "label": "Nama Karyawan / Peserta",
            "letter": "B"
          },
          {
            "key": "skor",
            "label": "Skor / Nilai",
            "letter": "C"
          },
          {
            "key": "golongan",
            "label": "Golongan / Kode",
            "letter": "D"
          },
          {
            "key": "tunjangan",
            "label": "Tunjangan / Gaji (Rp)",
            "letter": "E"
          },
          {
            "key": "status",
            "label": "Status Kelulusan / Predikat",
            "letter": "F"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "no": 1,
              "nama": "Andi Pratama",
              "skor": 85,
              "golongan": "III/A",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "nama": "Citra Kirana",
              "skor": 92,
              "golongan": "IV/A",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "nama": "Dimas Anggara",
              "skor": 64,
              "golongan": "II/B",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "nama": "Eka Saputra",
              "skor": 78,
              "golongan": "III/B",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "nama": "Fitri Handayani",
              "skor": 88,
              "golongan": "III/A",
              "tunjangan": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "tunjangan",
            "letter": "E",
            "label": "Tunjangan (Rp)",
            "description": "Hitung tunjangan berdasarkan golongan: II=2jt, III=3.5jt, IV=5jt",
            "expectedRowAnswers": {
              "2": 3500000,
              "3": 5000000,
              "4": 2000000,
              "5": 3500000,
              "6": 3500000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Kelulusan",
            "description": "Jika skor >= 70 LULUS, jika tidak TIDAK LULUS: =IF(C2>=70, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "TIDAK LULUS",
              "5": "LULUS",
              "6": "LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_ref",
        "name": "Daftar Referensi",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Acuan",
            "letter": "A"
          },
          {
            "key": "deskripsi",
            "label": "Deskripsi Kategori",
            "letter": "B"
          },
          {
            "key": "tarif",
            "label": "Nilai Acuan Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "deskripsi": "Golongan Utama A",
              "tarif": 5000000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "deskripsi": "Golongan Menengah B",
              "tarif": 3500000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "deskripsi": "Golongan Dasar C",
              "tarif": 2000000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Tunjangan",
        "formula": "=IF(LEFT(D2,2)=\"IV\", 5000000, IF(LEFT(D2,3)=\"III\", 3500000, 2000000))",
        "explanation": "Menentukan besaran tunjangan berdasarkan golongan"
      },
      {
        "columnLabel": "Status Kelulusan",
        "formula": "=IF(C2>=70, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelulusan nilai minimal 70"
      }
    ]
  },
  {
    "id": "EX-029",
    "number": 29,
    "code": "#SBEM029",
    "title": "Rekap Gaji Pokok & Tunjangan Jabatan (VLOOKUP Akurat)",
    "category": "Lookup",
    "difficulty": "MAHIR",
    "difficultyStars": 4,
    "tags": [
      "Payroll",
      "VLOOKUP",
      "Cek Otomatis",
      "Spreadsheet Kasus"
    ],
    "instructions": {
      "title": "MAHIR Level - Rekap Gaji Pokok & Tunjangan Jabatan (VLOOKUP Akurat)",
      "description": "Selesaikan lembar kerja kasus Rekap Gaji Pokok & Tunjangan Jabatan (VLOOKUP Akurat). Kerjakan formula langsung di tabel data di bawah sesuai tujuan yang ditentukan.",
      "points": [
        "1. Periksa struktur kolom tabel dan pahami hubungan data antar kolom.",
        "2. Tulis rumus Excel yang dinamis pada sel-sel kolom target (bukan mengetik angka manual).",
        "3. Pastikan rumus dapat disalin ke seluruh baris yang bersangkutan.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas lembar kerja untuk memeriksa kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Rumus & Referensi",
        "headers": [
          "Kebutuhan",
          "Saran Fungsi"
        ],
        "rows": [
          [
            "Kalkulasi Angka",
            "Aritmatika (+, -, *, /)"
          ],
          [
            "Pencarian Data",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Uji Logika",
            "IF / IFS / AND / OR"
          ],
          [
            "Agregasi Data",
            "SUMIF / COUNTIF / AVERAGEIF"
          ]
        ]
      },
      "notice": "Dilarang mengubah struktur nama kolom asal. Isi rumus pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_main",
        "name": "XL-Test",
        "columns": [
          {
            "key": "no",
            "label": "No",
            "letter": "A"
          },
          {
            "key": "nama",
            "label": "Nama Karyawan / Peserta",
            "letter": "B"
          },
          {
            "key": "skor",
            "label": "Skor / Nilai",
            "letter": "C"
          },
          {
            "key": "golongan",
            "label": "Golongan / Kode",
            "letter": "D"
          },
          {
            "key": "tunjangan",
            "label": "Tunjangan / Gaji (Rp)",
            "letter": "E"
          },
          {
            "key": "status",
            "label": "Status Kelulusan / Predikat",
            "letter": "F"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "no": 1,
              "nama": "Andi Pratama",
              "skor": 85,
              "golongan": "III/A",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "nama": "Citra Kirana",
              "skor": 92,
              "golongan": "IV/A",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "nama": "Dimas Anggara",
              "skor": 64,
              "golongan": "II/B",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "nama": "Eka Saputra",
              "skor": 78,
              "golongan": "III/B",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "nama": "Fitri Handayani",
              "skor": 88,
              "golongan": "III/A",
              "tunjangan": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "tunjangan",
            "letter": "E",
            "label": "Tunjangan (Rp)",
            "description": "Hitung tunjangan berdasarkan golongan: II=2jt, III=3.5jt, IV=5jt",
            "expectedRowAnswers": {
              "2": 3500000,
              "3": 5000000,
              "4": 2000000,
              "5": 3500000,
              "6": 3500000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Kelulusan",
            "description": "Jika skor >= 70 LULUS, jika tidak TIDAK LULUS: =IF(C2>=70, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "TIDAK LULUS",
              "5": "LULUS",
              "6": "LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_ref",
        "name": "Daftar Referensi",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Acuan",
            "letter": "A"
          },
          {
            "key": "deskripsi",
            "label": "Deskripsi Kategori",
            "letter": "B"
          },
          {
            "key": "tarif",
            "label": "Nilai Acuan Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "deskripsi": "Golongan Utama A",
              "tarif": 5000000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "deskripsi": "Golongan Menengah B",
              "tarif": 3500000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "deskripsi": "Golongan Dasar C",
              "tarif": 2000000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Tunjangan",
        "formula": "=IF(LEFT(D2,2)=\"IV\", 5000000, IF(LEFT(D2,3)=\"III\", 3500000, 2000000))",
        "explanation": "Menentukan besaran tunjangan berdasarkan golongan"
      },
      {
        "columnLabel": "Status Kelulusan",
        "formula": "=IF(C2>=70, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelulusan nilai minimal 70"
      }
    ]
  },
  {
    "id": "EX-030",
    "number": 30,
    "code": "#SBEM030",
    "title": "Pencarian Gaji Berdasarkan Kode Departemen (XLOOKUP Exact)",
    "category": "Lookup",
    "difficulty": "MAHIR",
    "difficultyStars": 4,
    "tags": [
      "HRD",
      "XLOOKUP",
      "Cek Otomatis",
      "Spreadsheet Kasus"
    ],
    "instructions": {
      "title": "MAHIR Level - Pencarian Gaji Berdasarkan Kode Departemen (XLOOKUP Exact)",
      "description": "Selesaikan lembar kerja kasus Pencarian Gaji Berdasarkan Kode Departemen (XLOOKUP Exact). Kerjakan formula langsung di tabel data di bawah sesuai tujuan yang ditentukan.",
      "points": [
        "1. Periksa struktur kolom tabel dan pahami hubungan data antar kolom.",
        "2. Tulis rumus Excel yang dinamis pada sel-sel kolom target (bukan mengetik angka manual).",
        "3. Pastikan rumus dapat disalin ke seluruh baris yang bersangkutan.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas lembar kerja untuk memeriksa kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Rumus & Referensi",
        "headers": [
          "Kebutuhan",
          "Saran Fungsi"
        ],
        "rows": [
          [
            "Kalkulasi Angka",
            "Aritmatika (+, -, *, /)"
          ],
          [
            "Pencarian Data",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Uji Logika",
            "IF / IFS / AND / OR"
          ],
          [
            "Agregasi Data",
            "SUMIF / COUNTIF / AVERAGEIF"
          ]
        ]
      },
      "notice": "Dilarang mengubah struktur nama kolom asal. Isi rumus pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_main",
        "name": "XL-Test",
        "columns": [
          {
            "key": "no",
            "label": "No",
            "letter": "A"
          },
          {
            "key": "nama",
            "label": "Nama Karyawan / Peserta",
            "letter": "B"
          },
          {
            "key": "skor",
            "label": "Skor / Nilai",
            "letter": "C"
          },
          {
            "key": "golongan",
            "label": "Golongan / Kode",
            "letter": "D"
          },
          {
            "key": "tunjangan",
            "label": "Tunjangan / Gaji (Rp)",
            "letter": "E"
          },
          {
            "key": "status",
            "label": "Status Kelulusan / Predikat",
            "letter": "F"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "no": 1,
              "nama": "Andi Pratama",
              "skor": 85,
              "golongan": "III/A",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "nama": "Citra Kirana",
              "skor": 92,
              "golongan": "IV/A",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "nama": "Dimas Anggara",
              "skor": 64,
              "golongan": "II/B",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "nama": "Eka Saputra",
              "skor": 78,
              "golongan": "III/B",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "nama": "Fitri Handayani",
              "skor": 88,
              "golongan": "III/A",
              "tunjangan": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "tunjangan",
            "letter": "E",
            "label": "Tunjangan (Rp)",
            "description": "Hitung tunjangan berdasarkan golongan: II=2jt, III=3.5jt, IV=5jt",
            "expectedRowAnswers": {
              "2": 3500000,
              "3": 5000000,
              "4": 2000000,
              "5": 3500000,
              "6": 3500000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Kelulusan",
            "description": "Jika skor >= 70 LULUS, jika tidak TIDAK LULUS: =IF(C2>=70, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "TIDAK LULUS",
              "5": "LULUS",
              "6": "LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_ref",
        "name": "Daftar Referensi",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Acuan",
            "letter": "A"
          },
          {
            "key": "deskripsi",
            "label": "Deskripsi Kategori",
            "letter": "B"
          },
          {
            "key": "tarif",
            "label": "Nilai Acuan Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "deskripsi": "Golongan Utama A",
              "tarif": 5000000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "deskripsi": "Golongan Menengah B",
              "tarif": 3500000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "deskripsi": "Golongan Dasar C",
              "tarif": 2000000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Tunjangan",
        "formula": "=IF(LEFT(D2,2)=\"IV\", 5000000, IF(LEFT(D2,3)=\"III\", 3500000, 2000000))",
        "explanation": "Menentukan besaran tunjangan berdasarkan golongan"
      },
      {
        "columnLabel": "Status Kelulusan",
        "formula": "=IF(C2>=70, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelulusan nilai minimal 70"
      }
    ]
  },
  {
    "id": "EX-031",
    "number": 31,
    "code": "#SBEM031",
    "title": "Pencarian Data Dua Arah Baris & Kolom (INDEX + MATCH)",
    "category": "Lookup",
    "difficulty": "MAHIR",
    "difficultyStars": 4,
    "tags": [
      "Matriks",
      "INDEX",
      "Cek Otomatis",
      "Spreadsheet Kasus"
    ],
    "instructions": {
      "title": "MAHIR Level - Pencarian Data Dua Arah Baris & Kolom (INDEX + MATCH)",
      "description": "Selesaikan lembar kerja kasus Pencarian Data Dua Arah Baris & Kolom (INDEX + MATCH). Kerjakan formula langsung di tabel data di bawah sesuai tujuan yang ditentukan.",
      "points": [
        "1. Periksa struktur kolom tabel dan pahami hubungan data antar kolom.",
        "2. Tulis rumus Excel yang dinamis pada sel-sel kolom target (bukan mengetik angka manual).",
        "3. Pastikan rumus dapat disalin ke seluruh baris yang bersangkutan.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas lembar kerja untuk memeriksa kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Rumus & Referensi",
        "headers": [
          "Kebutuhan",
          "Saran Fungsi"
        ],
        "rows": [
          [
            "Kalkulasi Angka",
            "Aritmatika (+, -, *, /)"
          ],
          [
            "Pencarian Data",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Uji Logika",
            "IF / IFS / AND / OR"
          ],
          [
            "Agregasi Data",
            "SUMIF / COUNTIF / AVERAGEIF"
          ]
        ]
      },
      "notice": "Dilarang mengubah struktur nama kolom asal. Isi rumus pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_main",
        "name": "XL-Test",
        "columns": [
          {
            "key": "no",
            "label": "No",
            "letter": "A"
          },
          {
            "key": "nama",
            "label": "Nama Karyawan / Peserta",
            "letter": "B"
          },
          {
            "key": "skor",
            "label": "Skor / Nilai",
            "letter": "C"
          },
          {
            "key": "golongan",
            "label": "Golongan / Kode",
            "letter": "D"
          },
          {
            "key": "tunjangan",
            "label": "Tunjangan / Gaji (Rp)",
            "letter": "E"
          },
          {
            "key": "status",
            "label": "Status Kelulusan / Predikat",
            "letter": "F"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "no": 1,
              "nama": "Andi Pratama",
              "skor": 85,
              "golongan": "III/A",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "nama": "Citra Kirana",
              "skor": 92,
              "golongan": "IV/A",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "nama": "Dimas Anggara",
              "skor": 64,
              "golongan": "II/B",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "nama": "Eka Saputra",
              "skor": 78,
              "golongan": "III/B",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "nama": "Fitri Handayani",
              "skor": 88,
              "golongan": "III/A",
              "tunjangan": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "tunjangan",
            "letter": "E",
            "label": "Tunjangan (Rp)",
            "description": "Hitung tunjangan berdasarkan golongan: II=2jt, III=3.5jt, IV=5jt",
            "expectedRowAnswers": {
              "2": 3500000,
              "3": 5000000,
              "4": 2000000,
              "5": 3500000,
              "6": 3500000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Kelulusan",
            "description": "Jika skor >= 70 LULUS, jika tidak TIDAK LULUS: =IF(C2>=70, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "TIDAK LULUS",
              "5": "LULUS",
              "6": "LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_ref",
        "name": "Daftar Referensi",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Acuan",
            "letter": "A"
          },
          {
            "key": "deskripsi",
            "label": "Deskripsi Kategori",
            "letter": "B"
          },
          {
            "key": "tarif",
            "label": "Nilai Acuan Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "deskripsi": "Golongan Utama A",
              "tarif": 5000000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "deskripsi": "Golongan Menengah B",
              "tarif": 3500000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "deskripsi": "Golongan Dasar C",
              "tarif": 2000000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Tunjangan",
        "formula": "=IF(LEFT(D2,2)=\"IV\", 5000000, IF(LEFT(D2,3)=\"III\", 3500000, 2000000))",
        "explanation": "Menentukan besaran tunjangan berdasarkan golongan"
      },
      {
        "columnLabel": "Status Kelulusan",
        "formula": "=IF(C2>=70, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelulusan nilai minimal 70"
      }
    ]
  },
  {
    "id": "EX-032",
    "number": 32,
    "code": "#SBEM032",
    "title": "Rekap Total Penjualan Multi-Kriteria Cabang & Kategori (SUMIFS)",
    "category": "Statistik",
    "difficulty": "MAHIR",
    "difficultyStars": 4,
    "tags": [
      "Finance",
      "SUMIFS",
      "Cek Otomatis",
      "Spreadsheet Kasus"
    ],
    "instructions": {
      "title": "MAHIR Level - Rekap Total Penjualan Multi-Kriteria Cabang & Kategori (SUMIFS)",
      "description": "Selesaikan lembar kerja kasus Rekap Total Penjualan Multi-Kriteria Cabang & Kategori (SUMIFS). Kerjakan formula langsung di tabel data di bawah sesuai tujuan yang ditentukan.",
      "points": [
        "1. Periksa struktur kolom tabel dan pahami hubungan data antar kolom.",
        "2. Tulis rumus Excel yang dinamis pada sel-sel kolom target (bukan mengetik angka manual).",
        "3. Pastikan rumus dapat disalin ke seluruh baris yang bersangkutan.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas lembar kerja untuk memeriksa kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Rumus & Referensi",
        "headers": [
          "Kebutuhan",
          "Saran Fungsi"
        ],
        "rows": [
          [
            "Kalkulasi Angka",
            "Aritmatika (+, -, *, /)"
          ],
          [
            "Pencarian Data",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Uji Logika",
            "IF / IFS / AND / OR"
          ],
          [
            "Agregasi Data",
            "SUMIF / COUNTIF / AVERAGEIF"
          ]
        ]
      },
      "notice": "Dilarang mengubah struktur nama kolom asal. Isi rumus pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_main",
        "name": "XL-Test",
        "columns": [
          {
            "key": "item",
            "label": "Item / Deskripsi",
            "letter": "A"
          },
          {
            "key": "val1",
            "label": "Pemasukan / Target",
            "letter": "B"
          },
          {
            "key": "val2",
            "label": "Pengeluaran / Realisasi",
            "letter": "C"
          },
          {
            "key": "selisih",
            "label": "Selisih / Sisa (Rp)",
            "letter": "D"
          },
          {
            "key": "status",
            "label": "Persentase / Status",
            "letter": "E"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "item": "Divisi Pemasaran",
              "val1": 50000000,
              "val2": 38000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "item": "Divisi Operasional",
              "val1": 85000000,
              "val2": 72000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "item": "Divisi Teknologi IT",
              "val1": 60000000,
              "val2": 55000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "item": "Divisi Sumber Daya HRD",
              "val1": 30000000,
              "val2": 24000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "item": "Divisi Layanan Pelanggan",
              "val1": 25000000,
              "val2": 21000000,
              "selisih": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "selisih",
            "letter": "D",
            "label": "Selisih / Sisa (Rp)",
            "description": "Hitung selisih: =B2-C2",
            "expectedRowAnswers": {
              "2": 12000000,
              "3": 13000000,
              "4": 5000000,
              "5": 6000000,
              "6": 4000000
            }
          },
          {
            "key": "status",
            "letter": "E",
            "label": "Persentase Realisasi",
            "description": "Hitung persentase realisasi: =C2/B2",
            "expectedRowAnswers": {
              "2": 0.76,
              "3": 0.847,
              "4": 0.917,
              "5": 0.8,
              "6": 0.84
            }
          }
        ]
      },
      {
        "id": "sheet_ref",
        "name": "Daftar Referensi",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Acuan",
            "letter": "A"
          },
          {
            "key": "deskripsi",
            "label": "Deskripsi Kategori",
            "letter": "B"
          },
          {
            "key": "tarif",
            "label": "Nilai Acuan Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "deskripsi": "Golongan Utama A",
              "tarif": 5000000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "deskripsi": "Golongan Menengah B",
              "tarif": 3500000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "deskripsi": "Golongan Dasar C",
              "tarif": 2000000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Selisih (Rp)",
        "formula": "=B2-C2",
        "explanation": "Menghitung sisa anggaran dari target dikurangi realisasi"
      },
      {
        "columnLabel": "Persentase Realisasi",
        "formula": "=C2/B2",
        "explanation": "Membagi realisasi dengan target anggaran"
      }
    ]
  },
  {
    "id": "EX-033",
    "number": 33,
    "code": "#SBEM033",
    "title": "Hitung Jumlah Transaksi Berhasil per Kasir (COUNTIFS)",
    "category": "Statistik",
    "difficulty": "MAHIR",
    "difficultyStars": 4,
    "tags": [
      "Audit",
      "COUNTIFS",
      "Cek Otomatis",
      "Spreadsheet Kasus"
    ],
    "instructions": {
      "title": "MAHIR Level - Hitung Jumlah Transaksi Berhasil per Kasir (COUNTIFS)",
      "description": "Selesaikan lembar kerja kasus Hitung Jumlah Transaksi Berhasil per Kasir (COUNTIFS). Kerjakan formula langsung di tabel data di bawah sesuai tujuan yang ditentukan.",
      "points": [
        "1. Periksa struktur kolom tabel dan pahami hubungan data antar kolom.",
        "2. Tulis rumus Excel yang dinamis pada sel-sel kolom target (bukan mengetik angka manual).",
        "3. Pastikan rumus dapat disalin ke seluruh baris yang bersangkutan.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas lembar kerja untuk memeriksa kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Rumus & Referensi",
        "headers": [
          "Kebutuhan",
          "Saran Fungsi"
        ],
        "rows": [
          [
            "Kalkulasi Angka",
            "Aritmatika (+, -, *, /)"
          ],
          [
            "Pencarian Data",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Uji Logika",
            "IF / IFS / AND / OR"
          ],
          [
            "Agregasi Data",
            "SUMIF / COUNTIF / AVERAGEIF"
          ]
        ]
      },
      "notice": "Dilarang mengubah struktur nama kolom asal. Isi rumus pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_main",
        "name": "XL-Test",
        "columns": [
          {
            "key": "item",
            "label": "Item / Deskripsi",
            "letter": "A"
          },
          {
            "key": "val1",
            "label": "Pemasukan / Target",
            "letter": "B"
          },
          {
            "key": "val2",
            "label": "Pengeluaran / Realisasi",
            "letter": "C"
          },
          {
            "key": "selisih",
            "label": "Selisih / Sisa (Rp)",
            "letter": "D"
          },
          {
            "key": "status",
            "label": "Persentase / Status",
            "letter": "E"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "item": "Divisi Pemasaran",
              "val1": 50000000,
              "val2": 38000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "item": "Divisi Operasional",
              "val1": 85000000,
              "val2": 72000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "item": "Divisi Teknologi IT",
              "val1": 60000000,
              "val2": 55000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "item": "Divisi Sumber Daya HRD",
              "val1": 30000000,
              "val2": 24000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "item": "Divisi Layanan Pelanggan",
              "val1": 25000000,
              "val2": 21000000,
              "selisih": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "selisih",
            "letter": "D",
            "label": "Selisih / Sisa (Rp)",
            "description": "Hitung selisih: =B2-C2",
            "expectedRowAnswers": {
              "2": 12000000,
              "3": 13000000,
              "4": 5000000,
              "5": 6000000,
              "6": 4000000
            }
          },
          {
            "key": "status",
            "letter": "E",
            "label": "Persentase Realisasi",
            "description": "Hitung persentase realisasi: =C2/B2",
            "expectedRowAnswers": {
              "2": 0.76,
              "3": 0.847,
              "4": 0.917,
              "5": 0.8,
              "6": 0.84
            }
          }
        ]
      },
      {
        "id": "sheet_ref",
        "name": "Daftar Referensi",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Acuan",
            "letter": "A"
          },
          {
            "key": "deskripsi",
            "label": "Deskripsi Kategori",
            "letter": "B"
          },
          {
            "key": "tarif",
            "label": "Nilai Acuan Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "deskripsi": "Golongan Utama A",
              "tarif": 5000000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "deskripsi": "Golongan Menengah B",
              "tarif": 3500000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "deskripsi": "Golongan Dasar C",
              "tarif": 2000000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Selisih (Rp)",
        "formula": "=B2-C2",
        "explanation": "Menghitung sisa anggaran dari target dikurangi realisasi"
      },
      {
        "columnLabel": "Persentase Realisasi",
        "formula": "=C2/B2",
        "explanation": "Membagi realisasi dengan target anggaran"
      }
    ]
  },
  {
    "id": "EX-034",
    "number": 34,
    "code": "#SBEM034",
    "title": "Simulasi Angsuran Kredit Rumah KPR (PMT)",
    "category": "Keuangan",
    "difficulty": "MAHIR",
    "difficultyStars": 4,
    "tags": [
      "Perbankan",
      "PMT",
      "Cek Otomatis",
      "Spreadsheet Kasus"
    ],
    "instructions": {
      "title": "MAHIR Level - Simulasi Angsuran Kredit Rumah KPR (PMT)",
      "description": "Selesaikan lembar kerja kasus Simulasi Angsuran Kredit Rumah KPR (PMT). Kerjakan formula langsung di tabel data di bawah sesuai tujuan yang ditentukan.",
      "points": [
        "1. Periksa struktur kolom tabel dan pahami hubungan data antar kolom.",
        "2. Tulis rumus Excel yang dinamis pada sel-sel kolom target (bukan mengetik angka manual).",
        "3. Pastikan rumus dapat disalin ke seluruh baris yang bersangkutan.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas lembar kerja untuk memeriksa kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Rumus & Referensi",
        "headers": [
          "Kebutuhan",
          "Saran Fungsi"
        ],
        "rows": [
          [
            "Kalkulasi Angka",
            "Aritmatika (+, -, *, /)"
          ],
          [
            "Pencarian Data",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Uji Logika",
            "IF / IFS / AND / OR"
          ],
          [
            "Agregasi Data",
            "SUMIF / COUNTIF / AVERAGEIF"
          ]
        ]
      },
      "notice": "Dilarang mengubah struktur nama kolom asal. Isi rumus pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_main",
        "name": "XL-Test",
        "columns": [
          {
            "key": "no",
            "label": "No",
            "letter": "A"
          },
          {
            "key": "nama",
            "label": "Nama Karyawan / Peserta",
            "letter": "B"
          },
          {
            "key": "skor",
            "label": "Skor / Nilai",
            "letter": "C"
          },
          {
            "key": "golongan",
            "label": "Golongan / Kode",
            "letter": "D"
          },
          {
            "key": "tunjangan",
            "label": "Tunjangan / Gaji (Rp)",
            "letter": "E"
          },
          {
            "key": "status",
            "label": "Status Kelulusan / Predikat",
            "letter": "F"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "no": 1,
              "nama": "Andi Pratama",
              "skor": 85,
              "golongan": "III/A",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "nama": "Citra Kirana",
              "skor": 92,
              "golongan": "IV/A",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "nama": "Dimas Anggara",
              "skor": 64,
              "golongan": "II/B",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "nama": "Eka Saputra",
              "skor": 78,
              "golongan": "III/B",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "nama": "Fitri Handayani",
              "skor": 88,
              "golongan": "III/A",
              "tunjangan": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "tunjangan",
            "letter": "E",
            "label": "Tunjangan (Rp)",
            "description": "Hitung tunjangan berdasarkan golongan: II=2jt, III=3.5jt, IV=5jt",
            "expectedRowAnswers": {
              "2": 3500000,
              "3": 5000000,
              "4": 2000000,
              "5": 3500000,
              "6": 3500000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Kelulusan",
            "description": "Jika skor >= 70 LULUS, jika tidak TIDAK LULUS: =IF(C2>=70, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "TIDAK LULUS",
              "5": "LULUS",
              "6": "LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_ref",
        "name": "Daftar Referensi",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Acuan",
            "letter": "A"
          },
          {
            "key": "deskripsi",
            "label": "Deskripsi Kategori",
            "letter": "B"
          },
          {
            "key": "tarif",
            "label": "Nilai Acuan Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "deskripsi": "Golongan Utama A",
              "tarif": 5000000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "deskripsi": "Golongan Menengah B",
              "tarif": 3500000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "deskripsi": "Golongan Dasar C",
              "tarif": 2000000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Tunjangan",
        "formula": "=IF(LEFT(D2,2)=\"IV\", 5000000, IF(LEFT(D2,3)=\"III\", 3500000, 2000000))",
        "explanation": "Menentukan besaran tunjangan berdasarkan golongan"
      },
      {
        "columnLabel": "Status Kelulusan",
        "formula": "=IF(C2>=70, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelulusan nilai minimal 70"
      }
    ]
  },
  {
    "id": "EX-035",
    "number": 35,
    "code": "#SBEM035",
    "title": "Perhitungan Bunga dan Pokok Pinjaman Finansial",
    "category": "Keuangan",
    "difficulty": "MAHIR",
    "difficultyStars": 4,
    "tags": [
      "Koperasi",
      "Bunga",
      "Cek Otomatis",
      "Spreadsheet Kasus"
    ],
    "instructions": {
      "title": "MAHIR Level - Perhitungan Bunga dan Pokok Pinjaman Finansial",
      "description": "Selesaikan lembar kerja kasus Perhitungan Bunga dan Pokok Pinjaman Finansial. Kerjakan formula langsung di tabel data di bawah sesuai tujuan yang ditentukan.",
      "points": [
        "1. Periksa struktur kolom tabel dan pahami hubungan data antar kolom.",
        "2. Tulis rumus Excel yang dinamis pada sel-sel kolom target (bukan mengetik angka manual).",
        "3. Pastikan rumus dapat disalin ke seluruh baris yang bersangkutan.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas lembar kerja untuk memeriksa kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Rumus & Referensi",
        "headers": [
          "Kebutuhan",
          "Saran Fungsi"
        ],
        "rows": [
          [
            "Kalkulasi Angka",
            "Aritmatika (+, -, *, /)"
          ],
          [
            "Pencarian Data",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Uji Logika",
            "IF / IFS / AND / OR"
          ],
          [
            "Agregasi Data",
            "SUMIF / COUNTIF / AVERAGEIF"
          ]
        ]
      },
      "notice": "Dilarang mengubah struktur nama kolom asal. Isi rumus pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_main",
        "name": "XL-Test",
        "columns": [
          {
            "key": "no",
            "label": "No",
            "letter": "A"
          },
          {
            "key": "nama",
            "label": "Nama Karyawan / Peserta",
            "letter": "B"
          },
          {
            "key": "skor",
            "label": "Skor / Nilai",
            "letter": "C"
          },
          {
            "key": "golongan",
            "label": "Golongan / Kode",
            "letter": "D"
          },
          {
            "key": "tunjangan",
            "label": "Tunjangan / Gaji (Rp)",
            "letter": "E"
          },
          {
            "key": "status",
            "label": "Status Kelulusan / Predikat",
            "letter": "F"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "no": 1,
              "nama": "Andi Pratama",
              "skor": 85,
              "golongan": "III/A",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "nama": "Citra Kirana",
              "skor": 92,
              "golongan": "IV/A",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "nama": "Dimas Anggara",
              "skor": 64,
              "golongan": "II/B",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "nama": "Eka Saputra",
              "skor": 78,
              "golongan": "III/B",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "nama": "Fitri Handayani",
              "skor": 88,
              "golongan": "III/A",
              "tunjangan": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "tunjangan",
            "letter": "E",
            "label": "Tunjangan (Rp)",
            "description": "Hitung tunjangan berdasarkan golongan: II=2jt, III=3.5jt, IV=5jt",
            "expectedRowAnswers": {
              "2": 3500000,
              "3": 5000000,
              "4": 2000000,
              "5": 3500000,
              "6": 3500000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Kelulusan",
            "description": "Jika skor >= 70 LULUS, jika tidak TIDAK LULUS: =IF(C2>=70, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "TIDAK LULUS",
              "5": "LULUS",
              "6": "LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_ref",
        "name": "Daftar Referensi",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Acuan",
            "letter": "A"
          },
          {
            "key": "deskripsi",
            "label": "Deskripsi Kategori",
            "letter": "B"
          },
          {
            "key": "tarif",
            "label": "Nilai Acuan Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "deskripsi": "Golongan Utama A",
              "tarif": 5000000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "deskripsi": "Golongan Menengah B",
              "tarif": 3500000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "deskripsi": "Golongan Dasar C",
              "tarif": 2000000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Tunjangan",
        "formula": "=IF(LEFT(D2,2)=\"IV\", 5000000, IF(LEFT(D2,3)=\"III\", 3500000, 2000000))",
        "explanation": "Menentukan besaran tunjangan berdasarkan golongan"
      },
      {
        "columnLabel": "Status Kelulusan",
        "formula": "=IF(C2>=70, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelulusan nilai minimal 70"
      }
    ]
  },
  {
    "id": "EX-036",
    "number": 36,
    "code": "#SBEM036",
    "title": "Penggabungan Alamat Surat Menyurat Lengkap (TEXTJOIN)",
    "category": "Teks",
    "difficulty": "MAHIR",
    "difficultyStars": 4,
    "tags": [
      "Administrasi",
      "Cek Otomatis",
      "Spreadsheet Kasus"
    ],
    "instructions": {
      "title": "MAHIR Level - Penggabungan Alamat Surat Menyurat Lengkap (TEXTJOIN)",
      "description": "Selesaikan lembar kerja kasus Penggabungan Alamat Surat Menyurat Lengkap (TEXTJOIN). Kerjakan formula langsung di tabel data di bawah sesuai tujuan yang ditentukan.",
      "points": [
        "1. Periksa struktur kolom tabel dan pahami hubungan data antar kolom.",
        "2. Tulis rumus Excel yang dinamis pada sel-sel kolom target (bukan mengetik angka manual).",
        "3. Pastikan rumus dapat disalin ke seluruh baris yang bersangkutan.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas lembar kerja untuk memeriksa kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Rumus & Referensi",
        "headers": [
          "Kebutuhan",
          "Saran Fungsi"
        ],
        "rows": [
          [
            "Kalkulasi Angka",
            "Aritmatika (+, -, *, /)"
          ],
          [
            "Pencarian Data",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Uji Logika",
            "IF / IFS / AND / OR"
          ],
          [
            "Agregasi Data",
            "SUMIF / COUNTIF / AVERAGEIF"
          ]
        ]
      },
      "notice": "Dilarang mengubah struktur nama kolom asal. Isi rumus pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_main",
        "name": "XL-Test",
        "columns": [
          {
            "key": "id",
            "label": "Kode ID Pegawai",
            "letter": "A"
          },
          {
            "key": "nama_raw",
            "label": "Nama Asal",
            "letter": "B"
          },
          {
            "key": "dept_code",
            "label": "Kode Dept",
            "letter": "C"
          },
          {
            "key": "nama_rapi",
            "label": "Nama Rapi (PROPER)",
            "letter": "D"
          },
          {
            "key": "email",
            "label": "Email Kantor",
            "letter": "E"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "id": "HR-2024-001",
              "nama_raw": "budi santoso",
              "dept_code": "?",
              "nama_rapi": "?",
              "email": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "id": "IT-2023-045",
              "nama_raw": "SITI AMINAH",
              "dept_code": "?",
              "nama_rapi": "?",
              "email": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "id": "FIN-2022-012",
              "nama_raw": "rudi hermawan",
              "dept_code": "?",
              "nama_rapi": "?",
              "email": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "id": "MKT-2024-089",
              "nama_raw": "DEWI LESTARI",
              "dept_code": "?",
              "nama_rapi": "?",
              "email": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "id": "OPS-2021-004",
              "nama_raw": "ahmad fauzi",
              "dept_code": "?",
              "nama_rapi": "?",
              "email": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "dept_code",
            "letter": "C",
            "label": "Kode Dept",
            "description": "Ekstrak kode departemen di depan kode ID (=LEFT(A2, 2) atau 3)",
            "expectedRowAnswers": {
              "2": "HR",
              "3": "IT",
              "4": "FIN",
              "5": "MKT",
              "6": "OPS"
            }
          },
          {
            "key": "nama_rapi",
            "letter": "D",
            "label": "Nama Rapi (PROPER)",
            "description": "Format nama menjadi huruf kapital di awal kata: =PROPER(B2)",
            "expectedRowAnswers": {
              "2": "Budi Santoso",
              "3": "Siti Aminah",
              "4": "Rudi Hermawan",
              "5": "Dewi Lestari",
              "6": "Ahmad Fauzi"
            }
          },
          {
            "key": "email",
            "letter": "E",
            "label": "Email Kantor",
            "description": "Gabungkan email: =LOWER(LEFT(B2,4)&\"@kantor.com\")",
            "expectedRowAnswers": {
              "2": "budi.santoso@kantor.com",
              "3": "siti.aminah@kantor.com",
              "4": "rudi.hermawan@kantor.com",
              "5": "dewi.lestari@kantor.com",
              "6": "ahmad.fauzi@kantor.com"
            }
          }
        ]
      },
      {
        "id": "sheet_ref",
        "name": "Daftar Referensi",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Acuan",
            "letter": "A"
          },
          {
            "key": "deskripsi",
            "label": "Deskripsi Kategori",
            "letter": "B"
          },
          {
            "key": "tarif",
            "label": "Nilai Acuan Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "deskripsi": "Golongan Utama A",
              "tarif": 5000000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "deskripsi": "Golongan Menengah B",
              "tarif": 3500000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "deskripsi": "Golongan Dasar C",
              "tarif": 2000000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Nama Rapi",
        "formula": "=PROPER(B2)",
        "explanation": "Mengubah format teks menjadi huruf kapital awal"
      },
      {
        "columnLabel": "Kode Dept",
        "formula": "=LEFT(A2, FIND(\"-\", A2)-1)",
        "explanation": "Mengambil karakter departemen sebelum tanda strip"
      }
    ]
  },
  {
    "id": "EX-037",
    "number": 37,
    "code": "#SBEM037",
    "title": "Klasifikasi Status Reorder Stok Gudang (IF + VLOOKUP)",
    "category": "Kombinasi",
    "difficulty": "MAHIR",
    "difficultyStars": 4,
    "tags": [
      "Supply Chain",
      "Cek Otomatis",
      "Spreadsheet Kasus"
    ],
    "instructions": {
      "title": "MAHIR Level - Klasifikasi Status Reorder Stok Gudang (IF + VLOOKUP)",
      "description": "Selesaikan lembar kerja kasus Klasifikasi Status Reorder Stok Gudang (IF + VLOOKUP). Kerjakan formula langsung di tabel data di bawah sesuai tujuan yang ditentukan.",
      "points": [
        "1. Periksa struktur kolom tabel dan pahami hubungan data antar kolom.",
        "2. Tulis rumus Excel yang dinamis pada sel-sel kolom target (bukan mengetik angka manual).",
        "3. Pastikan rumus dapat disalin ke seluruh baris yang bersangkutan.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas lembar kerja untuk memeriksa kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Rumus & Referensi",
        "headers": [
          "Kebutuhan",
          "Saran Fungsi"
        ],
        "rows": [
          [
            "Kalkulasi Angka",
            "Aritmatika (+, -, *, /)"
          ],
          [
            "Pencarian Data",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Uji Logika",
            "IF / IFS / AND / OR"
          ],
          [
            "Agregasi Data",
            "SUMIF / COUNTIF / AVERAGEIF"
          ]
        ]
      },
      "notice": "Dilarang mengubah struktur nama kolom asal. Isi rumus pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_main",
        "name": "XL-Test",
        "columns": [
          {
            "key": "no",
            "label": "No",
            "letter": "A"
          },
          {
            "key": "nama",
            "label": "Nama Karyawan / Peserta",
            "letter": "B"
          },
          {
            "key": "skor",
            "label": "Skor / Nilai",
            "letter": "C"
          },
          {
            "key": "golongan",
            "label": "Golongan / Kode",
            "letter": "D"
          },
          {
            "key": "tunjangan",
            "label": "Tunjangan / Gaji (Rp)",
            "letter": "E"
          },
          {
            "key": "status",
            "label": "Status Kelulusan / Predikat",
            "letter": "F"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "no": 1,
              "nama": "Andi Pratama",
              "skor": 85,
              "golongan": "III/A",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "nama": "Citra Kirana",
              "skor": 92,
              "golongan": "IV/A",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "nama": "Dimas Anggara",
              "skor": 64,
              "golongan": "II/B",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "nama": "Eka Saputra",
              "skor": 78,
              "golongan": "III/B",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "nama": "Fitri Handayani",
              "skor": 88,
              "golongan": "III/A",
              "tunjangan": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "tunjangan",
            "letter": "E",
            "label": "Tunjangan (Rp)",
            "description": "Hitung tunjangan berdasarkan golongan: II=2jt, III=3.5jt, IV=5jt",
            "expectedRowAnswers": {
              "2": 3500000,
              "3": 5000000,
              "4": 2000000,
              "5": 3500000,
              "6": 3500000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Kelulusan",
            "description": "Jika skor >= 70 LULUS, jika tidak TIDAK LULUS: =IF(C2>=70, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "TIDAK LULUS",
              "5": "LULUS",
              "6": "LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_ref",
        "name": "Daftar Referensi",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Acuan",
            "letter": "A"
          },
          {
            "key": "deskripsi",
            "label": "Deskripsi Kategori",
            "letter": "B"
          },
          {
            "key": "tarif",
            "label": "Nilai Acuan Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "deskripsi": "Golongan Utama A",
              "tarif": 5000000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "deskripsi": "Golongan Menengah B",
              "tarif": 3500000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "deskripsi": "Golongan Dasar C",
              "tarif": 2000000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Tunjangan",
        "formula": "=IF(LEFT(D2,2)=\"IV\", 5000000, IF(LEFT(D2,3)=\"III\", 3500000, 2000000))",
        "explanation": "Menentukan besaran tunjangan berdasarkan golongan"
      },
      {
        "columnLabel": "Status Kelulusan",
        "formula": "=IF(C2>=70, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelulusan nilai minimal 70"
      }
    ]
  },
  {
    "id": "EX-038",
    "number": 38,
    "code": "#SBEM038",
    "title": "Latihan Soal Data Pegawai dan Gaji (anagram)",
    "category": "Kombinasi",
    "difficulty": "MAHIR",
    "difficultyStars": 4,
    "tags": [
      "HRD",
      "Gaji",
      "Cek Otomatis",
      "Spreadsheet Kasus"
    ],
    "instructions": {
      "title": "MAHIR Level - Latihan Soal Data Pegawai dan Gaji (anagram)",
      "description": "Selesaikan lembar kerja kasus Latihan Soal Data Pegawai dan Gaji (anagram). Kerjakan formula langsung di tabel data di bawah sesuai tujuan yang ditentukan.",
      "points": [
        "1. Periksa struktur kolom tabel dan pahami hubungan data antar kolom.",
        "2. Tulis rumus Excel yang dinamis pada sel-sel kolom target (bukan mengetik angka manual).",
        "3. Pastikan rumus dapat disalin ke seluruh baris yang bersangkutan.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas lembar kerja untuk memeriksa kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Rumus & Referensi",
        "headers": [
          "Kebutuhan",
          "Saran Fungsi"
        ],
        "rows": [
          [
            "Kalkulasi Angka",
            "Aritmatika (+, -, *, /)"
          ],
          [
            "Pencarian Data",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Uji Logika",
            "IF / IFS / AND / OR"
          ],
          [
            "Agregasi Data",
            "SUMIF / COUNTIF / AVERAGEIF"
          ]
        ]
      },
      "notice": "Dilarang mengubah struktur nama kolom asal. Isi rumus pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_main",
        "name": "XL-Test",
        "columns": [
          {
            "key": "no",
            "label": "No",
            "letter": "A"
          },
          {
            "key": "nama",
            "label": "Nama Karyawan / Peserta",
            "letter": "B"
          },
          {
            "key": "skor",
            "label": "Skor / Nilai",
            "letter": "C"
          },
          {
            "key": "golongan",
            "label": "Golongan / Kode",
            "letter": "D"
          },
          {
            "key": "tunjangan",
            "label": "Tunjangan / Gaji (Rp)",
            "letter": "E"
          },
          {
            "key": "status",
            "label": "Status Kelulusan / Predikat",
            "letter": "F"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "no": 1,
              "nama": "Andi Pratama",
              "skor": 85,
              "golongan": "III/A",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "nama": "Citra Kirana",
              "skor": 92,
              "golongan": "IV/A",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "nama": "Dimas Anggara",
              "skor": 64,
              "golongan": "II/B",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "nama": "Eka Saputra",
              "skor": 78,
              "golongan": "III/B",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "nama": "Fitri Handayani",
              "skor": 88,
              "golongan": "III/A",
              "tunjangan": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "tunjangan",
            "letter": "E",
            "label": "Tunjangan (Rp)",
            "description": "Hitung tunjangan berdasarkan golongan: II=2jt, III=3.5jt, IV=5jt",
            "expectedRowAnswers": {
              "2": 3500000,
              "3": 5000000,
              "4": 2000000,
              "5": 3500000,
              "6": 3500000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Kelulusan",
            "description": "Jika skor >= 70 LULUS, jika tidak TIDAK LULUS: =IF(C2>=70, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "TIDAK LULUS",
              "5": "LULUS",
              "6": "LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_ref",
        "name": "Daftar Referensi",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Acuan",
            "letter": "A"
          },
          {
            "key": "deskripsi",
            "label": "Deskripsi Kategori",
            "letter": "B"
          },
          {
            "key": "tarif",
            "label": "Nilai Acuan Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "deskripsi": "Golongan Utama A",
              "tarif": 5000000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "deskripsi": "Golongan Menengah B",
              "tarif": 3500000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "deskripsi": "Golongan Dasar C",
              "tarif": 2000000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Tunjangan",
        "formula": "=IF(LEFT(D2,2)=\"IV\", 5000000, IF(LEFT(D2,3)=\"III\", 3500000, 2000000))",
        "explanation": "Menentukan besaran tunjangan berdasarkan golongan"
      },
      {
        "columnLabel": "Status Kelulusan",
        "formula": "=IF(C2>=70, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelulusan nilai minimal 70"
      }
    ]
  },
  {
    "id": "EX-039",
    "number": 39,
    "code": "#SBEE039",
    "title": "Extreme Level - Mencari Nama Berdasarkan Kata & Alamat Sel (INDEX/MATCH)",
    "category": "Lookup",
    "difficulty": "EXTREME",
    "difficultyStars": 4,
    "tags": [
      "MEWC",
      "Lookup Extreme",
      "Cek Otomatis",
      "Spreadsheet Kasus"
    ],
    "instructions": {
      "title": "EXTREME Level - Extreme Level - Mencari Nama Berdasarkan Kata & Alamat Sel (INDEX/MATCH)",
      "description": "Selesaikan lembar kerja kasus Extreme Level - Mencari Nama Berdasarkan Kata & Alamat Sel (INDEX/MATCH). Kerjakan formula langsung di tabel data di bawah sesuai tujuan yang ditentukan.",
      "points": [
        "1. Periksa struktur kolom tabel dan pahami hubungan data antar kolom.",
        "2. Tulis rumus Excel yang dinamis pada sel-sel kolom target (bukan mengetik angka manual).",
        "3. Pastikan rumus dapat disalin ke seluruh baris yang bersangkutan.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas lembar kerja untuk memeriksa kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Rumus & Referensi",
        "headers": [
          "Kebutuhan",
          "Saran Fungsi"
        ],
        "rows": [
          [
            "Kalkulasi Angka",
            "Aritmatika (+, -, *, /)"
          ],
          [
            "Pencarian Data",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Uji Logika",
            "IF / IFS / AND / OR"
          ],
          [
            "Agregasi Data",
            "SUMIF / COUNTIF / AVERAGEIF"
          ]
        ]
      },
      "notice": "Dilarang mengubah struktur nama kolom asal. Isi rumus pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_main",
        "name": "XL-Test",
        "columns": [
          {
            "key": "no",
            "label": "No",
            "letter": "A"
          },
          {
            "key": "nama",
            "label": "Nama Karyawan / Peserta",
            "letter": "B"
          },
          {
            "key": "skor",
            "label": "Skor / Nilai",
            "letter": "C"
          },
          {
            "key": "golongan",
            "label": "Golongan / Kode",
            "letter": "D"
          },
          {
            "key": "tunjangan",
            "label": "Tunjangan / Gaji (Rp)",
            "letter": "E"
          },
          {
            "key": "status",
            "label": "Status Kelulusan / Predikat",
            "letter": "F"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "no": 1,
              "nama": "Andi Pratama",
              "skor": 85,
              "golongan": "III/A",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "nama": "Citra Kirana",
              "skor": 92,
              "golongan": "IV/A",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "nama": "Dimas Anggara",
              "skor": 64,
              "golongan": "II/B",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "nama": "Eka Saputra",
              "skor": 78,
              "golongan": "III/B",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "nama": "Fitri Handayani",
              "skor": 88,
              "golongan": "III/A",
              "tunjangan": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "tunjangan",
            "letter": "E",
            "label": "Tunjangan (Rp)",
            "description": "Hitung tunjangan berdasarkan golongan: II=2jt, III=3.5jt, IV=5jt",
            "expectedRowAnswers": {
              "2": 3500000,
              "3": 5000000,
              "4": 2000000,
              "5": 3500000,
              "6": 3500000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Kelulusan",
            "description": "Jika skor >= 70 LULUS, jika tidak TIDAK LULUS: =IF(C2>=70, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "TIDAK LULUS",
              "5": "LULUS",
              "6": "LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_ref",
        "name": "Daftar Referensi",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Acuan",
            "letter": "A"
          },
          {
            "key": "deskripsi",
            "label": "Deskripsi Kategori",
            "letter": "B"
          },
          {
            "key": "tarif",
            "label": "Nilai Acuan Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "deskripsi": "Golongan Utama A",
              "tarif": 5000000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "deskripsi": "Golongan Menengah B",
              "tarif": 3500000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "deskripsi": "Golongan Dasar C",
              "tarif": 2000000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Tunjangan",
        "formula": "=IF(LEFT(D2,2)=\"IV\", 5000000, IF(LEFT(D2,3)=\"III\", 3500000, 2000000))",
        "explanation": "Menentukan besaran tunjangan berdasarkan golongan"
      },
      {
        "columnLabel": "Status Kelulusan",
        "formula": "=IF(C2>=70, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelulusan nilai minimal 70"
      }
    ]
  },
  {
    "id": "EX-040",
    "number": 40,
    "code": "#SBEE040",
    "title": "Latihan Soal Excel Game Seri A Liga Italy",
    "category": "Kombinasi",
    "difficulty": "EXTREME",
    "difficultyStars": 5,
    "tags": [
      "Sports",
      "Klasemen",
      "Cek Otomatis",
      "Spreadsheet Kasus"
    ],
    "instructions": {
      "title": "EXTREME Level - Latihan Soal Excel Game Seri A Liga Italy",
      "description": "Selesaikan lembar kerja kasus Latihan Soal Excel Game Seri A Liga Italy. Kerjakan formula langsung di tabel data di bawah sesuai tujuan yang ditentukan.",
      "points": [
        "1. Periksa struktur kolom tabel dan pahami hubungan data antar kolom.",
        "2. Tulis rumus Excel yang dinamis pada sel-sel kolom target (bukan mengetik angka manual).",
        "3. Pastikan rumus dapat disalin ke seluruh baris yang bersangkutan.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas lembar kerja untuk memeriksa kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Rumus & Referensi",
        "headers": [
          "Kebutuhan",
          "Saran Fungsi"
        ],
        "rows": [
          [
            "Kalkulasi Angka",
            "Aritmatika (+, -, *, /)"
          ],
          [
            "Pencarian Data",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Uji Logika",
            "IF / IFS / AND / OR"
          ],
          [
            "Agregasi Data",
            "SUMIF / COUNTIF / AVERAGEIF"
          ]
        ]
      },
      "notice": "Dilarang mengubah struktur nama kolom asal. Isi rumus pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_main",
        "name": "XL-Test",
        "columns": [
          {
            "key": "no",
            "label": "No",
            "letter": "A"
          },
          {
            "key": "nama",
            "label": "Nama Karyawan / Peserta",
            "letter": "B"
          },
          {
            "key": "skor",
            "label": "Skor / Nilai",
            "letter": "C"
          },
          {
            "key": "golongan",
            "label": "Golongan / Kode",
            "letter": "D"
          },
          {
            "key": "tunjangan",
            "label": "Tunjangan / Gaji (Rp)",
            "letter": "E"
          },
          {
            "key": "status",
            "label": "Status Kelulusan / Predikat",
            "letter": "F"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "no": 1,
              "nama": "Andi Pratama",
              "skor": 85,
              "golongan": "III/A",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "nama": "Citra Kirana",
              "skor": 92,
              "golongan": "IV/A",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "nama": "Dimas Anggara",
              "skor": 64,
              "golongan": "II/B",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "nama": "Eka Saputra",
              "skor": 78,
              "golongan": "III/B",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "nama": "Fitri Handayani",
              "skor": 88,
              "golongan": "III/A",
              "tunjangan": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "tunjangan",
            "letter": "E",
            "label": "Tunjangan (Rp)",
            "description": "Hitung tunjangan berdasarkan golongan: II=2jt, III=3.5jt, IV=5jt",
            "expectedRowAnswers": {
              "2": 3500000,
              "3": 5000000,
              "4": 2000000,
              "5": 3500000,
              "6": 3500000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Kelulusan",
            "description": "Jika skor >= 70 LULUS, jika tidak TIDAK LULUS: =IF(C2>=70, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "TIDAK LULUS",
              "5": "LULUS",
              "6": "LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_ref",
        "name": "Daftar Referensi",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Acuan",
            "letter": "A"
          },
          {
            "key": "deskripsi",
            "label": "Deskripsi Kategori",
            "letter": "B"
          },
          {
            "key": "tarif",
            "label": "Nilai Acuan Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "deskripsi": "Golongan Utama A",
              "tarif": 5000000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "deskripsi": "Golongan Menengah B",
              "tarif": 3500000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "deskripsi": "Golongan Dasar C",
              "tarif": 2000000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Tunjangan",
        "formula": "=IF(LEFT(D2,2)=\"IV\", 5000000, IF(LEFT(D2,3)=\"III\", 3500000, 2000000))",
        "explanation": "Menentukan besaran tunjangan berdasarkan golongan"
      },
      {
        "columnLabel": "Status Kelulusan",
        "formula": "=IF(C2>=70, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelulusan nilai minimal 70"
      }
    ]
  },
  {
    "id": "EX-041",
    "number": 41,
    "code": "#SBEE041",
    "title": "Tabel Amortisasi Pelunasan Pinjaman 12 Bulan",
    "category": "Keuangan",
    "difficulty": "EXTREME",
    "difficultyStars": 5,
    "tags": [
      "Bank",
      "Amortisasi",
      "Cek Otomatis",
      "Spreadsheet Kasus"
    ],
    "instructions": {
      "title": "EXTREME Level - Tabel Amortisasi Pelunasan Pinjaman 12 Bulan",
      "description": "Selesaikan lembar kerja kasus Tabel Amortisasi Pelunasan Pinjaman 12 Bulan. Kerjakan formula langsung di tabel data di bawah sesuai tujuan yang ditentukan.",
      "points": [
        "1. Periksa struktur kolom tabel dan pahami hubungan data antar kolom.",
        "2. Tulis rumus Excel yang dinamis pada sel-sel kolom target (bukan mengetik angka manual).",
        "3. Pastikan rumus dapat disalin ke seluruh baris yang bersangkutan.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas lembar kerja untuk memeriksa kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Rumus & Referensi",
        "headers": [
          "Kebutuhan",
          "Saran Fungsi"
        ],
        "rows": [
          [
            "Kalkulasi Angka",
            "Aritmatika (+, -, *, /)"
          ],
          [
            "Pencarian Data",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Uji Logika",
            "IF / IFS / AND / OR"
          ],
          [
            "Agregasi Data",
            "SUMIF / COUNTIF / AVERAGEIF"
          ]
        ]
      },
      "notice": "Dilarang mengubah struktur nama kolom asal. Isi rumus pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_main",
        "name": "XL-Test",
        "columns": [
          {
            "key": "no",
            "label": "No",
            "letter": "A"
          },
          {
            "key": "nama",
            "label": "Nama Karyawan / Peserta",
            "letter": "B"
          },
          {
            "key": "skor",
            "label": "Skor / Nilai",
            "letter": "C"
          },
          {
            "key": "golongan",
            "label": "Golongan / Kode",
            "letter": "D"
          },
          {
            "key": "tunjangan",
            "label": "Tunjangan / Gaji (Rp)",
            "letter": "E"
          },
          {
            "key": "status",
            "label": "Status Kelulusan / Predikat",
            "letter": "F"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "no": 1,
              "nama": "Andi Pratama",
              "skor": 85,
              "golongan": "III/A",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "nama": "Citra Kirana",
              "skor": 92,
              "golongan": "IV/A",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "nama": "Dimas Anggara",
              "skor": 64,
              "golongan": "II/B",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "nama": "Eka Saputra",
              "skor": 78,
              "golongan": "III/B",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "nama": "Fitri Handayani",
              "skor": 88,
              "golongan": "III/A",
              "tunjangan": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "tunjangan",
            "letter": "E",
            "label": "Tunjangan (Rp)",
            "description": "Hitung tunjangan berdasarkan golongan: II=2jt, III=3.5jt, IV=5jt",
            "expectedRowAnswers": {
              "2": 3500000,
              "3": 5000000,
              "4": 2000000,
              "5": 3500000,
              "6": 3500000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Kelulusan",
            "description": "Jika skor >= 70 LULUS, jika tidak TIDAK LULUS: =IF(C2>=70, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "TIDAK LULUS",
              "5": "LULUS",
              "6": "LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_ref",
        "name": "Daftar Referensi",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Acuan",
            "letter": "A"
          },
          {
            "key": "deskripsi",
            "label": "Deskripsi Kategori",
            "letter": "B"
          },
          {
            "key": "tarif",
            "label": "Nilai Acuan Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "deskripsi": "Golongan Utama A",
              "tarif": 5000000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "deskripsi": "Golongan Menengah B",
              "tarif": 3500000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "deskripsi": "Golongan Dasar C",
              "tarif": 2000000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Tunjangan",
        "formula": "=IF(LEFT(D2,2)=\"IV\", 5000000, IF(LEFT(D2,3)=\"III\", 3500000, 2000000))",
        "explanation": "Menentukan besaran tunjangan berdasarkan golongan"
      },
      {
        "columnLabel": "Status Kelulusan",
        "formula": "=IF(C2>=70, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelulusan nilai minimal 70"
      }
    ]
  },
  {
    "id": "EX-042",
    "number": 42,
    "code": "#SBEE042",
    "title": "Validasi & Rekonsiliasi Transaksi Bank vs Buku Kas",
    "category": "Kombinasi",
    "difficulty": "EXTREME",
    "difficultyStars": 5,
    "tags": [
      "Akuntansi",
      "Audit",
      "Cek Otomatis",
      "Spreadsheet Kasus"
    ],
    "instructions": {
      "title": "EXTREME Level - Validasi & Rekonsiliasi Transaksi Bank vs Buku Kas",
      "description": "Selesaikan lembar kerja kasus Validasi & Rekonsiliasi Transaksi Bank vs Buku Kas. Kerjakan formula langsung di tabel data di bawah sesuai tujuan yang ditentukan.",
      "points": [
        "1. Periksa struktur kolom tabel dan pahami hubungan data antar kolom.",
        "2. Tulis rumus Excel yang dinamis pada sel-sel kolom target (bukan mengetik angka manual).",
        "3. Pastikan rumus dapat disalin ke seluruh baris yang bersangkutan.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas lembar kerja untuk memeriksa kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Rumus & Referensi",
        "headers": [
          "Kebutuhan",
          "Saran Fungsi"
        ],
        "rows": [
          [
            "Kalkulasi Angka",
            "Aritmatika (+, -, *, /)"
          ],
          [
            "Pencarian Data",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Uji Logika",
            "IF / IFS / AND / OR"
          ],
          [
            "Agregasi Data",
            "SUMIF / COUNTIF / AVERAGEIF"
          ]
        ]
      },
      "notice": "Dilarang mengubah struktur nama kolom asal. Isi rumus pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_main",
        "name": "XL-Test",
        "columns": [
          {
            "key": "no",
            "label": "No",
            "letter": "A"
          },
          {
            "key": "nama",
            "label": "Nama Karyawan / Peserta",
            "letter": "B"
          },
          {
            "key": "skor",
            "label": "Skor / Nilai",
            "letter": "C"
          },
          {
            "key": "golongan",
            "label": "Golongan / Kode",
            "letter": "D"
          },
          {
            "key": "tunjangan",
            "label": "Tunjangan / Gaji (Rp)",
            "letter": "E"
          },
          {
            "key": "status",
            "label": "Status Kelulusan / Predikat",
            "letter": "F"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "no": 1,
              "nama": "Andi Pratama",
              "skor": 85,
              "golongan": "III/A",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "nama": "Citra Kirana",
              "skor": 92,
              "golongan": "IV/A",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "nama": "Dimas Anggara",
              "skor": 64,
              "golongan": "II/B",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "nama": "Eka Saputra",
              "skor": 78,
              "golongan": "III/B",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "nama": "Fitri Handayani",
              "skor": 88,
              "golongan": "III/A",
              "tunjangan": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "tunjangan",
            "letter": "E",
            "label": "Tunjangan (Rp)",
            "description": "Hitung tunjangan berdasarkan golongan: II=2jt, III=3.5jt, IV=5jt",
            "expectedRowAnswers": {
              "2": 3500000,
              "3": 5000000,
              "4": 2000000,
              "5": 3500000,
              "6": 3500000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Kelulusan",
            "description": "Jika skor >= 70 LULUS, jika tidak TIDAK LULUS: =IF(C2>=70, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "TIDAK LULUS",
              "5": "LULUS",
              "6": "LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_ref",
        "name": "Daftar Referensi",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Acuan",
            "letter": "A"
          },
          {
            "key": "deskripsi",
            "label": "Deskripsi Kategori",
            "letter": "B"
          },
          {
            "key": "tarif",
            "label": "Nilai Acuan Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "deskripsi": "Golongan Utama A",
              "tarif": 5000000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "deskripsi": "Golongan Menengah B",
              "tarif": 3500000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "deskripsi": "Golongan Dasar C",
              "tarif": 2000000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Tunjangan",
        "formula": "=IF(LEFT(D2,2)=\"IV\", 5000000, IF(LEFT(D2,3)=\"III\", 3500000, 2000000))",
        "explanation": "Menentukan besaran tunjangan berdasarkan golongan"
      },
      {
        "columnLabel": "Status Kelulusan",
        "formula": "=IF(C2>=70, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelulusan nilai minimal 70"
      }
    ]
  },
  {
    "id": "EX-043",
    "number": 43,
    "code": "#SBEE043",
    "title": "Pencarian Multi-Sheet Inventaris 3 Gudang Wilayah",
    "category": "Lookup",
    "difficulty": "EXTREME",
    "difficultyStars": 5,
    "tags": [
      "Logistik",
      "Multi-Sheet",
      "Cek Otomatis",
      "Spreadsheet Kasus"
    ],
    "instructions": {
      "title": "EXTREME Level - Pencarian Multi-Sheet Inventaris 3 Gudang Wilayah",
      "description": "Selesaikan lembar kerja kasus Pencarian Multi-Sheet Inventaris 3 Gudang Wilayah. Kerjakan formula langsung di tabel data di bawah sesuai tujuan yang ditentukan.",
      "points": [
        "1. Periksa struktur kolom tabel dan pahami hubungan data antar kolom.",
        "2. Tulis rumus Excel yang dinamis pada sel-sel kolom target (bukan mengetik angka manual).",
        "3. Pastikan rumus dapat disalin ke seluruh baris yang bersangkutan.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas lembar kerja untuk memeriksa kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Rumus & Referensi",
        "headers": [
          "Kebutuhan",
          "Saran Fungsi"
        ],
        "rows": [
          [
            "Kalkulasi Angka",
            "Aritmatika (+, -, *, /)"
          ],
          [
            "Pencarian Data",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Uji Logika",
            "IF / IFS / AND / OR"
          ],
          [
            "Agregasi Data",
            "SUMIF / COUNTIF / AVERAGEIF"
          ]
        ]
      },
      "notice": "Dilarang mengubah struktur nama kolom asal. Isi rumus pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_main",
        "name": "XL-Test",
        "columns": [
          {
            "key": "no",
            "label": "No",
            "letter": "A"
          },
          {
            "key": "nama",
            "label": "Nama Karyawan / Peserta",
            "letter": "B"
          },
          {
            "key": "skor",
            "label": "Skor / Nilai",
            "letter": "C"
          },
          {
            "key": "golongan",
            "label": "Golongan / Kode",
            "letter": "D"
          },
          {
            "key": "tunjangan",
            "label": "Tunjangan / Gaji (Rp)",
            "letter": "E"
          },
          {
            "key": "status",
            "label": "Status Kelulusan / Predikat",
            "letter": "F"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "no": 1,
              "nama": "Andi Pratama",
              "skor": 85,
              "golongan": "III/A",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "nama": "Citra Kirana",
              "skor": 92,
              "golongan": "IV/A",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "nama": "Dimas Anggara",
              "skor": 64,
              "golongan": "II/B",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "nama": "Eka Saputra",
              "skor": 78,
              "golongan": "III/B",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "nama": "Fitri Handayani",
              "skor": 88,
              "golongan": "III/A",
              "tunjangan": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "tunjangan",
            "letter": "E",
            "label": "Tunjangan (Rp)",
            "description": "Hitung tunjangan berdasarkan golongan: II=2jt, III=3.5jt, IV=5jt",
            "expectedRowAnswers": {
              "2": 3500000,
              "3": 5000000,
              "4": 2000000,
              "5": 3500000,
              "6": 3500000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Kelulusan",
            "description": "Jika skor >= 70 LULUS, jika tidak TIDAK LULUS: =IF(C2>=70, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "TIDAK LULUS",
              "5": "LULUS",
              "6": "LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_ref",
        "name": "Daftar Referensi",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Acuan",
            "letter": "A"
          },
          {
            "key": "deskripsi",
            "label": "Deskripsi Kategori",
            "letter": "B"
          },
          {
            "key": "tarif",
            "label": "Nilai Acuan Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "deskripsi": "Golongan Utama A",
              "tarif": 5000000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "deskripsi": "Golongan Menengah B",
              "tarif": 3500000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "deskripsi": "Golongan Dasar C",
              "tarif": 2000000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Tunjangan",
        "formula": "=IF(LEFT(D2,2)=\"IV\", 5000000, IF(LEFT(D2,3)=\"III\", 3500000, 2000000))",
        "explanation": "Menentukan besaran tunjangan berdasarkan golongan"
      },
      {
        "columnLabel": "Status Kelulusan",
        "formula": "=IF(C2>=70, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelulusan nilai minimal 70"
      }
    ]
  },
  {
    "id": "EX-044",
    "number": 44,
    "code": "#SBEE044",
    "title": "Kalkulasi KPI Performa Karyawan dengan Bobot Penilaian",
    "category": "Statistik",
    "difficulty": "EXTREME",
    "difficultyStars": 5,
    "tags": [
      "HRD",
      "KPI",
      "Cek Otomatis",
      "Spreadsheet Kasus"
    ],
    "instructions": {
      "title": "EXTREME Level - Kalkulasi KPI Performa Karyawan dengan Bobot Penilaian",
      "description": "Selesaikan lembar kerja kasus Kalkulasi KPI Performa Karyawan dengan Bobot Penilaian. Kerjakan formula langsung di tabel data di bawah sesuai tujuan yang ditentukan.",
      "points": [
        "1. Periksa struktur kolom tabel dan pahami hubungan data antar kolom.",
        "2. Tulis rumus Excel yang dinamis pada sel-sel kolom target (bukan mengetik angka manual).",
        "3. Pastikan rumus dapat disalin ke seluruh baris yang bersangkutan.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas lembar kerja untuk memeriksa kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Rumus & Referensi",
        "headers": [
          "Kebutuhan",
          "Saran Fungsi"
        ],
        "rows": [
          [
            "Kalkulasi Angka",
            "Aritmatika (+, -, *, /)"
          ],
          [
            "Pencarian Data",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Uji Logika",
            "IF / IFS / AND / OR"
          ],
          [
            "Agregasi Data",
            "SUMIF / COUNTIF / AVERAGEIF"
          ]
        ]
      },
      "notice": "Dilarang mengubah struktur nama kolom asal. Isi rumus pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_main",
        "name": "XL-Test",
        "columns": [
          {
            "key": "item",
            "label": "Item / Deskripsi",
            "letter": "A"
          },
          {
            "key": "val1",
            "label": "Pemasukan / Target",
            "letter": "B"
          },
          {
            "key": "val2",
            "label": "Pengeluaran / Realisasi",
            "letter": "C"
          },
          {
            "key": "selisih",
            "label": "Selisih / Sisa (Rp)",
            "letter": "D"
          },
          {
            "key": "status",
            "label": "Persentase / Status",
            "letter": "E"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "item": "Divisi Pemasaran",
              "val1": 50000000,
              "val2": 38000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "item": "Divisi Operasional",
              "val1": 85000000,
              "val2": 72000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "item": "Divisi Teknologi IT",
              "val1": 60000000,
              "val2": 55000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "item": "Divisi Sumber Daya HRD",
              "val1": 30000000,
              "val2": 24000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "item": "Divisi Layanan Pelanggan",
              "val1": 25000000,
              "val2": 21000000,
              "selisih": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "selisih",
            "letter": "D",
            "label": "Selisih / Sisa (Rp)",
            "description": "Hitung selisih: =B2-C2",
            "expectedRowAnswers": {
              "2": 12000000,
              "3": 13000000,
              "4": 5000000,
              "5": 6000000,
              "6": 4000000
            }
          },
          {
            "key": "status",
            "letter": "E",
            "label": "Persentase Realisasi",
            "description": "Hitung persentase realisasi: =C2/B2",
            "expectedRowAnswers": {
              "2": 0.76,
              "3": 0.847,
              "4": 0.917,
              "5": 0.8,
              "6": 0.84
            }
          }
        ]
      },
      {
        "id": "sheet_ref",
        "name": "Daftar Referensi",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Acuan",
            "letter": "A"
          },
          {
            "key": "deskripsi",
            "label": "Deskripsi Kategori",
            "letter": "B"
          },
          {
            "key": "tarif",
            "label": "Nilai Acuan Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "deskripsi": "Golongan Utama A",
              "tarif": 5000000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "deskripsi": "Golongan Menengah B",
              "tarif": 3500000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "deskripsi": "Golongan Dasar C",
              "tarif": 2000000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Selisih (Rp)",
        "formula": "=B2-C2",
        "explanation": "Menghitung sisa anggaran dari target dikurangi realisasi"
      },
      {
        "columnLabel": "Persentase Realisasi",
        "formula": "=C2/B2",
        "explanation": "Membagi realisasi dengan target anggaran"
      }
    ]
  },
  {
    "id": "EX-045",
    "number": 45,
    "code": "#SBEE045",
    "title": "Otomasi Pembuatan Invoice & Faktur Pajak Perusahaan",
    "category": "Kombinasi",
    "difficulty": "EXTREME",
    "difficultyStars": 5,
    "tags": [
      "Billing",
      "Invoice",
      "Cek Otomatis",
      "Spreadsheet Kasus"
    ],
    "instructions": {
      "title": "EXTREME Level - Otomasi Pembuatan Invoice & Faktur Pajak Perusahaan",
      "description": "Selesaikan lembar kerja kasus Otomasi Pembuatan Invoice & Faktur Pajak Perusahaan. Kerjakan formula langsung di tabel data di bawah sesuai tujuan yang ditentukan.",
      "points": [
        "1. Periksa struktur kolom tabel dan pahami hubungan data antar kolom.",
        "2. Tulis rumus Excel yang dinamis pada sel-sel kolom target (bukan mengetik angka manual).",
        "3. Pastikan rumus dapat disalin ke seluruh baris yang bersangkutan.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas lembar kerja untuk memeriksa kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Rumus & Referensi",
        "headers": [
          "Kebutuhan",
          "Saran Fungsi"
        ],
        "rows": [
          [
            "Kalkulasi Angka",
            "Aritmatika (+, -, *, /)"
          ],
          [
            "Pencarian Data",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Uji Logika",
            "IF / IFS / AND / OR"
          ],
          [
            "Agregasi Data",
            "SUMIF / COUNTIF / AVERAGEIF"
          ]
        ]
      },
      "notice": "Dilarang mengubah struktur nama kolom asal. Isi rumus pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_main",
        "name": "XL-Test",
        "columns": [
          {
            "key": "no",
            "label": "No",
            "letter": "A"
          },
          {
            "key": "nama",
            "label": "Nama Karyawan / Peserta",
            "letter": "B"
          },
          {
            "key": "skor",
            "label": "Skor / Nilai",
            "letter": "C"
          },
          {
            "key": "golongan",
            "label": "Golongan / Kode",
            "letter": "D"
          },
          {
            "key": "tunjangan",
            "label": "Tunjangan / Gaji (Rp)",
            "letter": "E"
          },
          {
            "key": "status",
            "label": "Status Kelulusan / Predikat",
            "letter": "F"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "no": 1,
              "nama": "Andi Pratama",
              "skor": 85,
              "golongan": "III/A",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "nama": "Citra Kirana",
              "skor": 92,
              "golongan": "IV/A",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "nama": "Dimas Anggara",
              "skor": 64,
              "golongan": "II/B",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "nama": "Eka Saputra",
              "skor": 78,
              "golongan": "III/B",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "nama": "Fitri Handayani",
              "skor": 88,
              "golongan": "III/A",
              "tunjangan": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "tunjangan",
            "letter": "E",
            "label": "Tunjangan (Rp)",
            "description": "Hitung tunjangan berdasarkan golongan: II=2jt, III=3.5jt, IV=5jt",
            "expectedRowAnswers": {
              "2": 3500000,
              "3": 5000000,
              "4": 2000000,
              "5": 3500000,
              "6": 3500000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Kelulusan",
            "description": "Jika skor >= 70 LULUS, jika tidak TIDAK LULUS: =IF(C2>=70, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "TIDAK LULUS",
              "5": "LULUS",
              "6": "LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_ref",
        "name": "Daftar Referensi",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Acuan",
            "letter": "A"
          },
          {
            "key": "deskripsi",
            "label": "Deskripsi Kategori",
            "letter": "B"
          },
          {
            "key": "tarif",
            "label": "Nilai Acuan Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "deskripsi": "Golongan Utama A",
              "tarif": 5000000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "deskripsi": "Golongan Menengah B",
              "tarif": 3500000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "deskripsi": "Golongan Dasar C",
              "tarif": 2000000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Tunjangan",
        "formula": "=IF(LEFT(D2,2)=\"IV\", 5000000, IF(LEFT(D2,3)=\"III\", 3500000, 2000000))",
        "explanation": "Menentukan besaran tunjangan berdasarkan golongan"
      },
      {
        "columnLabel": "Status Kelulusan",
        "formula": "=IF(C2>=70, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelulusan nilai minimal 70"
      }
    ]
  },
  {
    "id": "EX-046",
    "number": 46,
    "code": "#SBEC046",
    "title": "File Latihan Championship Excel: EVE Online (MEWC 2023)",
    "category": "Kombinasi",
    "difficulty": "CHAMPIONSHIP",
    "difficultyStars": 5,
    "tags": [
      "Championship",
      "MEWC",
      "Cek Otomatis",
      "Spreadsheet Kasus"
    ],
    "instructions": {
      "title": "CHAMPIONSHIP Level - File Latihan Championship Excel: EVE Online (MEWC 2023)",
      "description": "Selesaikan lembar kerja kasus File Latihan Championship Excel: EVE Online (MEWC 2023). Kerjakan formula langsung di tabel data di bawah sesuai tujuan yang ditentukan.",
      "points": [
        "1. Periksa struktur kolom tabel dan pahami hubungan data antar kolom.",
        "2. Tulis rumus Excel yang dinamis pada sel-sel kolom target (bukan mengetik angka manual).",
        "3. Pastikan rumus dapat disalin ke seluruh baris yang bersangkutan.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas lembar kerja untuk memeriksa kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Rumus & Referensi",
        "headers": [
          "Kebutuhan",
          "Saran Fungsi"
        ],
        "rows": [
          [
            "Kalkulasi Angka",
            "Aritmatika (+, -, *, /)"
          ],
          [
            "Pencarian Data",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Uji Logika",
            "IF / IFS / AND / OR"
          ],
          [
            "Agregasi Data",
            "SUMIF / COUNTIF / AVERAGEIF"
          ]
        ]
      },
      "notice": "Dilarang mengubah struktur nama kolom asal. Isi rumus pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_main",
        "name": "XL-Test",
        "columns": [
          {
            "key": "no",
            "label": "No",
            "letter": "A"
          },
          {
            "key": "nama",
            "label": "Nama Karyawan / Peserta",
            "letter": "B"
          },
          {
            "key": "skor",
            "label": "Skor / Nilai",
            "letter": "C"
          },
          {
            "key": "golongan",
            "label": "Golongan / Kode",
            "letter": "D"
          },
          {
            "key": "tunjangan",
            "label": "Tunjangan / Gaji (Rp)",
            "letter": "E"
          },
          {
            "key": "status",
            "label": "Status Kelulusan / Predikat",
            "letter": "F"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "no": 1,
              "nama": "Andi Pratama",
              "skor": 85,
              "golongan": "III/A",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "nama": "Citra Kirana",
              "skor": 92,
              "golongan": "IV/A",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "nama": "Dimas Anggara",
              "skor": 64,
              "golongan": "II/B",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "nama": "Eka Saputra",
              "skor": 78,
              "golongan": "III/B",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "nama": "Fitri Handayani",
              "skor": 88,
              "golongan": "III/A",
              "tunjangan": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "tunjangan",
            "letter": "E",
            "label": "Tunjangan (Rp)",
            "description": "Hitung tunjangan berdasarkan golongan: II=2jt, III=3.5jt, IV=5jt",
            "expectedRowAnswers": {
              "2": 3500000,
              "3": 5000000,
              "4": 2000000,
              "5": 3500000,
              "6": 3500000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Kelulusan",
            "description": "Jika skor >= 70 LULUS, jika tidak TIDAK LULUS: =IF(C2>=70, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "TIDAK LULUS",
              "5": "LULUS",
              "6": "LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_ref",
        "name": "Daftar Referensi",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Acuan",
            "letter": "A"
          },
          {
            "key": "deskripsi",
            "label": "Deskripsi Kategori",
            "letter": "B"
          },
          {
            "key": "tarif",
            "label": "Nilai Acuan Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "deskripsi": "Golongan Utama A",
              "tarif": 5000000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "deskripsi": "Golongan Menengah B",
              "tarif": 3500000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "deskripsi": "Golongan Dasar C",
              "tarif": 2000000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Tunjangan",
        "formula": "=IF(LEFT(D2,2)=\"IV\", 5000000, IF(LEFT(D2,3)=\"III\", 3500000, 2000000))",
        "explanation": "Menentukan besaran tunjangan berdasarkan golongan"
      },
      {
        "columnLabel": "Status Kelulusan",
        "formula": "=IF(C2>=70, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelulusan nilai minimal 70"
      }
    ]
  },
  {
    "id": "EX-047",
    "number": 47,
    "code": "#SBEC047",
    "title": "Championship Level: Model Valuasi Finansial Startup",
    "category": "Kombinasi",
    "difficulty": "CHAMPIONSHIP",
    "difficultyStars": 5,
    "tags": [
      "Financial Model",
      "Cek Otomatis",
      "Spreadsheet Kasus"
    ],
    "instructions": {
      "title": "CHAMPIONSHIP Level - Championship Level: Model Valuasi Finansial Startup",
      "description": "Selesaikan lembar kerja kasus Championship Level: Model Valuasi Finansial Startup. Kerjakan formula langsung di tabel data di bawah sesuai tujuan yang ditentukan.",
      "points": [
        "1. Periksa struktur kolom tabel dan pahami hubungan data antar kolom.",
        "2. Tulis rumus Excel yang dinamis pada sel-sel kolom target (bukan mengetik angka manual).",
        "3. Pastikan rumus dapat disalin ke seluruh baris yang bersangkutan.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas lembar kerja untuk memeriksa kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Rumus & Referensi",
        "headers": [
          "Kebutuhan",
          "Saran Fungsi"
        ],
        "rows": [
          [
            "Kalkulasi Angka",
            "Aritmatika (+, -, *, /)"
          ],
          [
            "Pencarian Data",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Uji Logika",
            "IF / IFS / AND / OR"
          ],
          [
            "Agregasi Data",
            "SUMIF / COUNTIF / AVERAGEIF"
          ]
        ]
      },
      "notice": "Dilarang mengubah struktur nama kolom asal. Isi rumus pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_main",
        "name": "XL-Test",
        "columns": [
          {
            "key": "no",
            "label": "No",
            "letter": "A"
          },
          {
            "key": "nama",
            "label": "Nama Karyawan / Peserta",
            "letter": "B"
          },
          {
            "key": "skor",
            "label": "Skor / Nilai",
            "letter": "C"
          },
          {
            "key": "golongan",
            "label": "Golongan / Kode",
            "letter": "D"
          },
          {
            "key": "tunjangan",
            "label": "Tunjangan / Gaji (Rp)",
            "letter": "E"
          },
          {
            "key": "status",
            "label": "Status Kelulusan / Predikat",
            "letter": "F"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "no": 1,
              "nama": "Andi Pratama",
              "skor": 85,
              "golongan": "III/A",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "nama": "Citra Kirana",
              "skor": 92,
              "golongan": "IV/A",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "nama": "Dimas Anggara",
              "skor": 64,
              "golongan": "II/B",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "nama": "Eka Saputra",
              "skor": 78,
              "golongan": "III/B",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "nama": "Fitri Handayani",
              "skor": 88,
              "golongan": "III/A",
              "tunjangan": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "tunjangan",
            "letter": "E",
            "label": "Tunjangan (Rp)",
            "description": "Hitung tunjangan berdasarkan golongan: II=2jt, III=3.5jt, IV=5jt",
            "expectedRowAnswers": {
              "2": 3500000,
              "3": 5000000,
              "4": 2000000,
              "5": 3500000,
              "6": 3500000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Kelulusan",
            "description": "Jika skor >= 70 LULUS, jika tidak TIDAK LULUS: =IF(C2>=70, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "TIDAK LULUS",
              "5": "LULUS",
              "6": "LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_ref",
        "name": "Daftar Referensi",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Acuan",
            "letter": "A"
          },
          {
            "key": "deskripsi",
            "label": "Deskripsi Kategori",
            "letter": "B"
          },
          {
            "key": "tarif",
            "label": "Nilai Acuan Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "deskripsi": "Golongan Utama A",
              "tarif": 5000000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "deskripsi": "Golongan Menengah B",
              "tarif": 3500000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "deskripsi": "Golongan Dasar C",
              "tarif": 2000000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Tunjangan",
        "formula": "=IF(LEFT(D2,2)=\"IV\", 5000000, IF(LEFT(D2,3)=\"III\", 3500000, 2000000))",
        "explanation": "Menentukan besaran tunjangan berdasarkan golongan"
      },
      {
        "columnLabel": "Status Kelulusan",
        "formula": "=IF(C2>=70, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelulusan nilai minimal 70"
      }
    ]
  },
  {
    "id": "EX-048",
    "number": 48,
    "code": "#SBEC048",
    "title": "Championship Level: Optimasi Rute Pengiriman Logistik",
    "category": "Kombinasi",
    "difficulty": "CHAMPIONSHIP",
    "difficultyStars": 5,
    "tags": [
      "Supply Chain",
      "Matrix",
      "Cek Otomatis",
      "Spreadsheet Kasus"
    ],
    "instructions": {
      "title": "CHAMPIONSHIP Level - Championship Level: Optimasi Rute Pengiriman Logistik",
      "description": "Selesaikan lembar kerja kasus Championship Level: Optimasi Rute Pengiriman Logistik. Kerjakan formula langsung di tabel data di bawah sesuai tujuan yang ditentukan.",
      "points": [
        "1. Periksa struktur kolom tabel dan pahami hubungan data antar kolom.",
        "2. Tulis rumus Excel yang dinamis pada sel-sel kolom target (bukan mengetik angka manual).",
        "3. Pastikan rumus dapat disalin ke seluruh baris yang bersangkutan.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas lembar kerja untuk memeriksa kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Rumus & Referensi",
        "headers": [
          "Kebutuhan",
          "Saran Fungsi"
        ],
        "rows": [
          [
            "Kalkulasi Angka",
            "Aritmatika (+, -, *, /)"
          ],
          [
            "Pencarian Data",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Uji Logika",
            "IF / IFS / AND / OR"
          ],
          [
            "Agregasi Data",
            "SUMIF / COUNTIF / AVERAGEIF"
          ]
        ]
      },
      "notice": "Dilarang mengubah struktur nama kolom asal. Isi rumus pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_main",
        "name": "XL-Test",
        "columns": [
          {
            "key": "no",
            "label": "No",
            "letter": "A"
          },
          {
            "key": "nama",
            "label": "Nama Karyawan / Peserta",
            "letter": "B"
          },
          {
            "key": "skor",
            "label": "Skor / Nilai",
            "letter": "C"
          },
          {
            "key": "golongan",
            "label": "Golongan / Kode",
            "letter": "D"
          },
          {
            "key": "tunjangan",
            "label": "Tunjangan / Gaji (Rp)",
            "letter": "E"
          },
          {
            "key": "status",
            "label": "Status Kelulusan / Predikat",
            "letter": "F"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "no": 1,
              "nama": "Andi Pratama",
              "skor": 85,
              "golongan": "III/A",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "nama": "Citra Kirana",
              "skor": 92,
              "golongan": "IV/A",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "nama": "Dimas Anggara",
              "skor": 64,
              "golongan": "II/B",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "nama": "Eka Saputra",
              "skor": 78,
              "golongan": "III/B",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "nama": "Fitri Handayani",
              "skor": 88,
              "golongan": "III/A",
              "tunjangan": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "tunjangan",
            "letter": "E",
            "label": "Tunjangan (Rp)",
            "description": "Hitung tunjangan berdasarkan golongan: II=2jt, III=3.5jt, IV=5jt",
            "expectedRowAnswers": {
              "2": 3500000,
              "3": 5000000,
              "4": 2000000,
              "5": 3500000,
              "6": 3500000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Kelulusan",
            "description": "Jika skor >= 70 LULUS, jika tidak TIDAK LULUS: =IF(C2>=70, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "TIDAK LULUS",
              "5": "LULUS",
              "6": "LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_ref",
        "name": "Daftar Referensi",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Acuan",
            "letter": "A"
          },
          {
            "key": "deskripsi",
            "label": "Deskripsi Kategori",
            "letter": "B"
          },
          {
            "key": "tarif",
            "label": "Nilai Acuan Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "deskripsi": "Golongan Utama A",
              "tarif": 5000000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "deskripsi": "Golongan Menengah B",
              "tarif": 3500000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "deskripsi": "Golongan Dasar C",
              "tarif": 2000000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Tunjangan",
        "formula": "=IF(LEFT(D2,2)=\"IV\", 5000000, IF(LEFT(D2,3)=\"III\", 3500000, 2000000))",
        "explanation": "Menentukan besaran tunjangan berdasarkan golongan"
      },
      {
        "columnLabel": "Status Kelulusan",
        "formula": "=IF(C2>=70, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelulusan nilai minimal 70"
      }
    ]
  },
  {
    "id": "EX-049",
    "number": 49,
    "code": "#SBEC049",
    "title": "Championship Level: Analisis Sensitivitas Laba Multi-Variabel",
    "category": "Kombinasi",
    "difficulty": "CHAMPIONSHIP",
    "difficultyStars": 5,
    "tags": [
      "CFO",
      "Analysis",
      "Cek Otomatis",
      "Spreadsheet Kasus"
    ],
    "instructions": {
      "title": "CHAMPIONSHIP Level - Championship Level: Analisis Sensitivitas Laba Multi-Variabel",
      "description": "Selesaikan lembar kerja kasus Championship Level: Analisis Sensitivitas Laba Multi-Variabel. Kerjakan formula langsung di tabel data di bawah sesuai tujuan yang ditentukan.",
      "points": [
        "1. Periksa struktur kolom tabel dan pahami hubungan data antar kolom.",
        "2. Tulis rumus Excel yang dinamis pada sel-sel kolom target (bukan mengetik angka manual).",
        "3. Pastikan rumus dapat disalin ke seluruh baris yang bersangkutan.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas lembar kerja untuk memeriksa kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Rumus & Referensi",
        "headers": [
          "Kebutuhan",
          "Saran Fungsi"
        ],
        "rows": [
          [
            "Kalkulasi Angka",
            "Aritmatika (+, -, *, /)"
          ],
          [
            "Pencarian Data",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Uji Logika",
            "IF / IFS / AND / OR"
          ],
          [
            "Agregasi Data",
            "SUMIF / COUNTIF / AVERAGEIF"
          ]
        ]
      },
      "notice": "Dilarang mengubah struktur nama kolom asal. Isi rumus pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_main",
        "name": "XL-Test",
        "columns": [
          {
            "key": "no",
            "label": "No",
            "letter": "A"
          },
          {
            "key": "nama",
            "label": "Nama Karyawan / Peserta",
            "letter": "B"
          },
          {
            "key": "skor",
            "label": "Skor / Nilai",
            "letter": "C"
          },
          {
            "key": "golongan",
            "label": "Golongan / Kode",
            "letter": "D"
          },
          {
            "key": "tunjangan",
            "label": "Tunjangan / Gaji (Rp)",
            "letter": "E"
          },
          {
            "key": "status",
            "label": "Status Kelulusan / Predikat",
            "letter": "F"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "no": 1,
              "nama": "Andi Pratama",
              "skor": 85,
              "golongan": "III/A",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "nama": "Citra Kirana",
              "skor": 92,
              "golongan": "IV/A",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "nama": "Dimas Anggara",
              "skor": 64,
              "golongan": "II/B",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "nama": "Eka Saputra",
              "skor": 78,
              "golongan": "III/B",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "nama": "Fitri Handayani",
              "skor": 88,
              "golongan": "III/A",
              "tunjangan": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "tunjangan",
            "letter": "E",
            "label": "Tunjangan (Rp)",
            "description": "Hitung tunjangan berdasarkan golongan: II=2jt, III=3.5jt, IV=5jt",
            "expectedRowAnswers": {
              "2": 3500000,
              "3": 5000000,
              "4": 2000000,
              "5": 3500000,
              "6": 3500000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Kelulusan",
            "description": "Jika skor >= 70 LULUS, jika tidak TIDAK LULUS: =IF(C2>=70, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "TIDAK LULUS",
              "5": "LULUS",
              "6": "LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_ref",
        "name": "Daftar Referensi",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Acuan",
            "letter": "A"
          },
          {
            "key": "deskripsi",
            "label": "Deskripsi Kategori",
            "letter": "B"
          },
          {
            "key": "tarif",
            "label": "Nilai Acuan Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "deskripsi": "Golongan Utama A",
              "tarif": 5000000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "deskripsi": "Golongan Menengah B",
              "tarif": 3500000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "deskripsi": "Golongan Dasar C",
              "tarif": 2000000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Tunjangan",
        "formula": "=IF(LEFT(D2,2)=\"IV\", 5000000, IF(LEFT(D2,3)=\"III\", 3500000, 2000000))",
        "explanation": "Menentukan besaran tunjangan berdasarkan golongan"
      },
      {
        "columnLabel": "Status Kelulusan",
        "formula": "=IF(C2>=70, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelulusan nilai minimal 70"
      }
    ]
  },
  {
    "id": "EX-050",
    "number": 50,
    "code": "#SBEC050",
    "title": "Championship Master: Dashboard Eksekutif Lengkap Perusahaan",
    "category": "Kombinasi",
    "difficulty": "CHAMPIONSHIP",
    "difficultyStars": 5,
    "tags": [
      "Executive",
      "Master",
      "Cek Otomatis",
      "Spreadsheet Kasus"
    ],
    "instructions": {
      "title": "CHAMPIONSHIP Level - Championship Master: Dashboard Eksekutif Lengkap Perusahaan",
      "description": "Selesaikan lembar kerja kasus Championship Master: Dashboard Eksekutif Lengkap Perusahaan. Kerjakan formula langsung di tabel data di bawah sesuai tujuan yang ditentukan.",
      "points": [
        "1. Periksa struktur kolom tabel dan pahami hubungan data antar kolom.",
        "2. Tulis rumus Excel yang dinamis pada sel-sel kolom target (bukan mengetik angka manual).",
        "3. Pastikan rumus dapat disalin ke seluruh baris yang bersangkutan.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas lembar kerja untuk memeriksa kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Rumus & Referensi",
        "headers": [
          "Kebutuhan",
          "Saran Fungsi"
        ],
        "rows": [
          [
            "Kalkulasi Angka",
            "Aritmatika (+, -, *, /)"
          ],
          [
            "Pencarian Data",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Uji Logika",
            "IF / IFS / AND / OR"
          ],
          [
            "Agregasi Data",
            "SUMIF / COUNTIF / AVERAGEIF"
          ]
        ]
      },
      "notice": "Dilarang mengubah struktur nama kolom asal. Isi rumus pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_main",
        "name": "XL-Test",
        "columns": [
          {
            "key": "no",
            "label": "No",
            "letter": "A"
          },
          {
            "key": "nama",
            "label": "Nama Karyawan / Peserta",
            "letter": "B"
          },
          {
            "key": "skor",
            "label": "Skor / Nilai",
            "letter": "C"
          },
          {
            "key": "golongan",
            "label": "Golongan / Kode",
            "letter": "D"
          },
          {
            "key": "tunjangan",
            "label": "Tunjangan / Gaji (Rp)",
            "letter": "E"
          },
          {
            "key": "status",
            "label": "Status Kelulusan / Predikat",
            "letter": "F"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "no": 1,
              "nama": "Andi Pratama",
              "skor": 85,
              "golongan": "III/A",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "nama": "Citra Kirana",
              "skor": 92,
              "golongan": "IV/A",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "nama": "Dimas Anggara",
              "skor": 64,
              "golongan": "II/B",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "nama": "Eka Saputra",
              "skor": 78,
              "golongan": "III/B",
              "tunjangan": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "nama": "Fitri Handayani",
              "skor": 88,
              "golongan": "III/A",
              "tunjangan": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "tunjangan",
            "letter": "E",
            "label": "Tunjangan (Rp)",
            "description": "Hitung tunjangan berdasarkan golongan: II=2jt, III=3.5jt, IV=5jt",
            "expectedRowAnswers": {
              "2": 3500000,
              "3": 5000000,
              "4": 2000000,
              "5": 3500000,
              "6": 3500000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Kelulusan",
            "description": "Jika skor >= 70 LULUS, jika tidak TIDAK LULUS: =IF(C2>=70, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "TIDAK LULUS",
              "5": "LULUS",
              "6": "LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_ref",
        "name": "Daftar Referensi",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Acuan",
            "letter": "A"
          },
          {
            "key": "deskripsi",
            "label": "Deskripsi Kategori",
            "letter": "B"
          },
          {
            "key": "tarif",
            "label": "Nilai Acuan Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "deskripsi": "Golongan Utama A",
              "tarif": 5000000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "deskripsi": "Golongan Menengah B",
              "tarif": 3500000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "deskripsi": "Golongan Dasar C",
              "tarif": 2000000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Tunjangan",
        "formula": "=IF(LEFT(D2,2)=\"IV\", 5000000, IF(LEFT(D2,3)=\"III\", 3500000, 2000000))",
        "explanation": "Menentukan besaran tunjangan berdasarkan golongan"
      },
      {
        "columnLabel": "Status Kelulusan",
        "formula": "=IF(C2>=70, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelulusan nilai minimal 70"
      }
    ]
  }
];
