import { CaseExamData } from '@/types/simulator';

export const CASE_EXAMS: CaseExamData[] = [
  {
    "id": "EX-001",
    "number": 1,
    "code": "#SBEC001",
    "title": "Championship Turnamen \"Ujian Sekolah\" (MEWC / ExcelArena)",
    "category": "Kombinasi",
    "difficulty": "CHAMPIONSHIP",
    "difficultyStars": 5,
    "tags": [
      "ExcelArena",
      "MEWC 2023",
      "Turnamen",
      "Multi-Sheet"
    ],
    "instructions": {
      "title": "Championship Level - Turnamen \"Ujian Sekolah\" (Andi Setiadi)",
      "description": "Selesaikan tantangan resmi turnamen Excel berdasarkan denah meja kelas (Sheet \"Desk Layout\") dan data nilai ujian 77 siswa (Sheet \"Student Data\").",
      "points": [
        "Level 1: Cari nama siswa yang duduk di baris dan kolom yang ditentukan. Contoh di R1C1 adalah Gita Firmansyah. Gunakan formula =INDEX('Desk Layout'!A1:G11, C3, D3).",
        "Level 2: Hitung total nilai siswa berdasarkan posisi meja R...C... dari sheet \"Student Data\". Contoh di R1C1 nilai Gita = 399. Gunakan =XLOOKUP(E9, 'Student Data'!J2:J78, 'Student Data'!H2:H78).",
        "Level 3: Hitung berapa banyak siswa yang namanya diawali huruf vokal (A, E, I, O, U) pada baris/kolom tertentu.",
        "Bonus Questions: Jawab pertanyaan analisis global untuk poin tambahan turnamen."
      ],
      "helperTable": {
        "title": "Contoh Resmi Pengerjaan",
        "headers": [
          "Level",
          "Parameter",
          "Jawaban",
          "Saran Rumus"
        ],
        "rows": [
          [
            "Level 1",
            "Row=1, Col=1",
            "Gita Firmansyah",
            "=INDEX('Desk Layout'!A1:G11, 1, 1)"
          ],
          [
            "Level 2",
            "Desk=R1C1",
            "399",
            "=XLOOKUP(E9, 'Student Data'!J2:J78, 'Student Data'!H2:H78)"
          ],
          [
            "Level 3",
            "Row=R2",
            "3",
            "Hitung vokal: Intan, Ayu, Arif"
          ]
        ]
      },
      "notice": "Gunakan sheet \"Desk Layout\" dan \"Student Data\" untuk mencari data. Tulis rumus pada kolom Answer."
    },
    "sheets": [
      {
        "id": "sheet_questions",
        "name": "Questions",
        "columns": [
          {
            "key": "level",
            "label": "Tingkat Level",
            "letter": "A"
          },
          {
            "key": "game",
            "label": "Game #",
            "letter": "B"
          },
          {
            "key": "row_param",
            "label": "Row (R)",
            "letter": "C"
          },
          {
            "key": "col_param",
            "label": "Column (C)",
            "letter": "D"
          },
          {
            "key": "desk_param",
            "label": "Desk Posisi / Subjek",
            "letter": "E"
          },
          {
            "key": "answer",
            "label": "Answer (Jawaban Formula)",
            "letter": "F"
          },
          {
            "key": "points",
            "label": "Poin",
            "letter": "G"
          },
          {
            "key": "hint",
            "label": "Petunjuk / Catatan",
            "letter": "H"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "level": "Level 1",
              "game": "Contoh1",
              "row_param": 1,
              "col_param": 1,
              "desk_param": "R1C1",
              "answer": "Gita Firmansyah",
              "points": 0,
              "hint": "Di R1C1 adalah Gita Firmansyah"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "level": "Level 1",
              "game": "Game 1",
              "row_param": 3,
              "col_param": 7,
              "desk_param": "R3C7",
              "answer": "?",
              "points": 3,
              "hint": "Nama berawalan I dan berakhiran a"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "level": "Level 1",
              "game": "Game 2",
              "row_param": 8,
              "col_param": 7,
              "desk_param": "R8C7",
              "answer": "?",
              "points": 3,
              "hint": "Nama berawalan A dan berakhiran k"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "level": "Level 1",
              "game": "Game 3",
              "row_param": 4,
              "col_param": 2,
              "desk_param": "R4C2",
              "answer": "?",
              "points": 3,
              "hint": "Nama berawalan R dan berakhiran a"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "level": "Level 1",
              "game": "Game 4",
              "row_param": 5,
              "col_param": 6,
              "desk_param": "R5C6",
              "answer": "?",
              "points": 3,
              "hint": "Nama berawalan R dan berakhiran o"
            }
          },
          {
            "rowNumber": 7,
            "values": {
              "level": "Level 1",
              "game": "Game 5",
              "row_param": 4,
              "col_param": 6,
              "desk_param": "R4C6",
              "answer": "?",
              "points": 3,
              "hint": "Nama berawalan A dan berakhiran a"
            }
          },
          {
            "rowNumber": 8,
            "values": {
              "level": "Level 2",
              "game": "Contoh2",
              "row_param": 1,
              "col_param": 1,
              "desk_param": "R1C1",
              "answer": 399,
              "points": 0,
              "hint": "Gita Firmansyah (84+62+83+70+100 = 399)"
            }
          },
          {
            "rowNumber": 9,
            "values": {
              "level": "Level 2",
              "game": "Game 16",
              "row_param": 10,
              "col_param": 5,
              "desk_param": "R10C5",
              "answer": "?",
              "points": 5,
              "hint": "Total skor siswa di R10C5"
            }
          },
          {
            "rowNumber": 10,
            "values": {
              "level": "Level 2",
              "game": "Game 17",
              "row_param": 4,
              "col_param": 5,
              "desk_param": "R4C5",
              "answer": "?",
              "points": 5,
              "hint": "Total skor siswa di R4C5"
            }
          },
          {
            "rowNumber": 11,
            "values": {
              "level": "Level 2",
              "game": "Game 18",
              "row_param": 11,
              "col_param": 2,
              "desk_param": "R11C2",
              "answer": "?",
              "points": 5,
              "hint": "Total skor siswa di R11C2"
            }
          },
          {
            "rowNumber": 12,
            "values": {
              "level": "Level 3",
              "game": "Contoh3",
              "row_param": 2,
              "col_param": 0,
              "desk_param": "R2",
              "answer": 3,
              "points": 0,
              "hint": "Di Baris 2: Intan, Ayu, Arif (Total 3)"
            }
          },
          {
            "rowNumber": 13,
            "values": {
              "level": "Level 3",
              "game": "Game 31",
              "row_param": 11,
              "col_param": 0,
              "desk_param": "R11",
              "answer": "?",
              "points": 8,
              "hint": "Jumlah nama huruf vokal di Baris 11"
            }
          },
          {
            "rowNumber": 14,
            "values": {
              "level": "Level 3",
              "game": "Game 32",
              "row_param": 0,
              "col_param": 4,
              "desk_param": "C4",
              "answer": "?",
              "points": 8,
              "hint": "Jumlah nama huruf vokal di Kolom 4"
            }
          },
          {
            "rowNumber": 15,
            "values": {
              "level": "Bonus",
              "game": "Bonus 1",
              "row_param": 0,
              "col_param": 0,
              "desk_param": "Semua",
              "answer": "?",
              "points": 50,
              "hint": "Siapa siswa dengan total nilai tertinggi (#1) di kelas?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "answer",
            "letter": "F",
            "label": "Answer (Jawaban Formula)",
            "description": "Isi formula jawaban sesuai level soal",
            "expectedRowAnswers": {
              "3": "Ivan Pratama",
              "4": "Abdul Malik",
              "5": "Rizki Maulana",
              "6": "Roy Prasetyo",
              "7": "Aulia Rahma",
              "9": 375,
              "10": 385,
              "11": 430,
              "13": 0,
              "14": 0,
              "15": "Yuni Lestari"
            }
          }
        ]
      },
      {
        "id": "sheet_desk",
        "name": "Desk Layout",
        "columns": [
          {
            "key": "c1",
            "label": "Column 1 (C1)",
            "letter": "A"
          },
          {
            "key": "c2",
            "label": "Column 2 (C2)",
            "letter": "B"
          },
          {
            "key": "c3",
            "label": "Column 3 (C3)",
            "letter": "C"
          },
          {
            "key": "c4",
            "label": "Column 4 (C4)",
            "letter": "D"
          },
          {
            "key": "c5",
            "label": "Column 5 (C5)",
            "letter": "E"
          },
          {
            "key": "c6",
            "label": "Column 6 (C6)",
            "letter": "F"
          },
          {
            "key": "c7",
            "label": "Column 7 (C7)",
            "letter": "G"
          }
        ],
        "rows": [
          {
            "rowNumber": 1,
            "values": {
              "c1": "Gita Firmansyah",
              "c2": "Nabila Putri",
              "c3": "Fajar Hidayat",
              "c4": "Dimas Saputra",
              "c5": "Ayu Wandira",
              "c6": "Arif Rahman",
              "c7": "Maya Sari"
            }
          },
          {
            "rowNumber": 2,
            "values": {
              "c1": "Budi Santoso",
              "c2": "Siti Aminah",
              "c3": "Rudi Hermawan",
              "c4": "Dewi Lestari",
              "c5": "Ahmad Fauzi",
              "c6": "Fitriani",
              "c7": "Hendra Setiawan"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "c1": "Kartika Sari",
              "c2": "Soleh Hidayat",
              "c3": "Dian Pratama",
              "c4": "Wildan Maulana",
              "c5": "Abdul Latif",
              "c6": "Mutia Zahra",
              "c7": "Ivan Pratama"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "c1": "Putri Maharani",
              "c2": "Rizki Maulana",
              "c3": "Budi Sulistyo",
              "c4": "Susanto",
              "c5": "Galih Nugraha",
              "c6": "Aulia Rahma",
              "c7": "Bimo Prakoso"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "c1": "Yuni Lestari",
              "c2": "Mahfud Hidayat",
              "c3": "Rio Saputra",
              "c4": "Deni Saputra",
              "c5": "Nur Azizah",
              "c6": "Roy Prasetyo",
              "c7": "Intan Permata"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "c1": "Farhan Akbar",
              "c2": "Aldi Firmansyah",
              "c3": "Galih Priambodo",
              "c4": "Desi Aprilia",
              "c5": "Yudha Pratama",
              "c6": "Bagas Mahendra",
              "c7": "Citra Anggraini"
            }
          },
          {
            "rowNumber": 7,
            "values": {
              "c1": "Elsa Ramadhani",
              "c2": "Fitria Ningsih",
              "c3": "Siska Handayani",
              "c4": "Vina Melati",
              "c5": "Gilang Ramadhan",
              "c6": "Yuni Kartika",
              "c7": "Andi Pratama"
            }
          },
          {
            "rowNumber": 8,
            "values": {
              "c1": "Bayu Kurniawan",
              "c2": "Reza Maulana",
              "c3": "Adelia Putri",
              "c4": "Didik Supriyanto",
              "c5": "Riana Putri",
              "c6": "Cahyo Nugroho",
              "c7": "Abdul Malik"
            }
          },
          {
            "rowNumber": 9,
            "values": {
              "c1": "Niken Larasati",
              "c2": "Wahyu Aditya",
              "c3": "Indra Kurniawan",
              "c4": "Sunardi",
              "c5": "Agus Prasetyo",
              "c6": "Ratna Sari",
              "c7": "Doni Setiawan"
            }
          },
          {
            "rowNumber": 10,
            "values": {
              "c1": "Eko Purwanto",
              "c2": "Lilis Suryani",
              "c3": "Bambang Wijaya",
              "c4": "Mega Utami",
              "c5": "Tri Wahyuni",
              "c6": "Hendro Kusumo",
              "c7": "Anita Rahayu"
            }
          },
          {
            "rowNumber": 11,
            "values": {
              "c1": "Zulfikar",
              "c2": "Hanafi",
              "c3": "Qori Sandioriva",
              "c4": "Wulan Guritno",
              "c5": "Vicky Prasetyo",
              "c6": "Jessica Mila",
              "c7": "Kevin Sanjaya"
            }
          }
        ]
      },
      {
        "id": "sheet_students",
        "name": "Student Data",
        "columns": [
          {
            "key": "no",
            "label": "No",
            "letter": "A"
          },
          {
            "key": "nama",
            "label": "Nama Siswa",
            "letter": "B"
          },
          {
            "key": "mat",
            "label": "Matematika",
            "letter": "C"
          },
          {
            "key": "ipa",
            "label": "IPA",
            "letter": "D"
          },
          {
            "key": "bind",
            "label": "B.Indonesia",
            "letter": "E"
          },
          {
            "key": "bing",
            "label": "B.Inggris",
            "letter": "F"
          },
          {
            "key": "komp",
            "label": "Komputer",
            "letter": "G"
          },
          {
            "key": "total",
            "label": "Total Skor",
            "letter": "H"
          },
          {
            "key": "rata",
            "label": "Rata-Rata",
            "letter": "I"
          },
          {
            "key": "desk",
            "label": "Posisi Meja",
            "letter": "J"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "no": 1,
              "nama": "Gita Firmansyah",
              "mat": 84,
              "ipa": 62,
              "bind": 83,
              "bing": 70,
              "komp": 100,
              "total": 399,
              "rata": 79.8,
              "desk": "R1C1"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "nama": "Nabila Putri",
              "mat": 92,
              "ipa": 91,
              "bind": 79,
              "bing": 82,
              "komp": 91,
              "total": 435,
              "rata": 87,
              "desk": "R1C2"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "nama": "Fajar Hidayat",
              "mat": 94,
              "ipa": 62,
              "bind": 88,
              "bing": 69,
              "komp": 82,
              "total": 395,
              "rata": 79,
              "desk": "R1C3"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "nama": "Dimas Saputra",
              "mat": 87,
              "ipa": 66,
              "bind": 74,
              "bing": 97,
              "komp": 86,
              "total": 410,
              "rata": 82,
              "desk": "R1C4"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "nama": "Ayu Wandira",
              "mat": 75,
              "ipa": 75,
              "bind": 85,
              "bing": 70,
              "komp": 85,
              "total": 390,
              "rata": 78,
              "desk": "R1C5"
            }
          },
          {
            "rowNumber": 7,
            "values": {
              "no": 6,
              "nama": "Arif Rahman",
              "mat": 87,
              "ipa": 61,
              "bind": 99,
              "bing": 97,
              "komp": 81,
              "total": 425,
              "rata": 85,
              "desk": "R1C6"
            }
          },
          {
            "rowNumber": 8,
            "values": {
              "no": 7,
              "nama": "Maya Sari",
              "mat": 88,
              "ipa": 79,
              "bind": 81,
              "bing": 73,
              "komp": 99,
              "total": 420,
              "rata": 84,
              "desk": "R1C7"
            }
          },
          {
            "rowNumber": 9,
            "values": {
              "no": 8,
              "nama": "Budi Santoso",
              "mat": 68,
              "ipa": 89,
              "bind": 71,
              "bing": 98,
              "komp": 89,
              "total": 415,
              "rata": 83,
              "desk": "R2C1"
            }
          },
          {
            "rowNumber": 10,
            "values": {
              "no": 9,
              "nama": "Siti Aminah",
              "mat": 81,
              "ipa": 83,
              "bind": 87,
              "bing": 66,
              "komp": 93,
              "total": 410,
              "rata": 82,
              "desk": "R2C2"
            }
          },
          {
            "rowNumber": 11,
            "values": {
              "no": 10,
              "nama": "Rudi Hermawan",
              "mat": 75,
              "ipa": 85,
              "bind": 75,
              "bing": 70,
              "komp": 75,
              "total": 380,
              "rata": 76,
              "desk": "R2C3"
            }
          },
          {
            "rowNumber": 12,
            "values": {
              "no": 11,
              "nama": "Dewi Lestari",
              "mat": 74,
              "ipa": 87,
              "bind": 83,
              "bing": 94,
              "komp": 77,
              "total": 415,
              "rata": 83,
              "desk": "R2C4"
            }
          },
          {
            "rowNumber": 13,
            "values": {
              "no": 12,
              "nama": "Ahmad Fauzi",
              "mat": 93,
              "ipa": 74,
              "bind": 96,
              "bing": 93,
              "komp": 84,
              "total": 440,
              "rata": 88,
              "desk": "R2C5"
            }
          },
          {
            "rowNumber": 14,
            "values": {
              "no": 13,
              "nama": "Fitriani",
              "mat": 77,
              "ipa": 96,
              "bind": 74,
              "bing": 92,
              "komp": 86,
              "total": 425,
              "rata": 85,
              "desk": "R2C6"
            }
          },
          {
            "rowNumber": 15,
            "values": {
              "no": 14,
              "nama": "Hendra Setiawan",
              "mat": 84,
              "ipa": 92,
              "bind": 78,
              "bing": 99,
              "komp": 72,
              "total": 425,
              "rata": 85,
              "desk": "R2C7"
            }
          },
          {
            "rowNumber": 16,
            "values": {
              "no": 15,
              "nama": "Kartika Sari",
              "mat": 82,
              "ipa": 86,
              "bind": 94,
              "bing": 77,
              "komp": 76,
              "total": 415,
              "rata": 83,
              "desk": "R3C1"
            }
          },
          {
            "rowNumber": 17,
            "values": {
              "no": 16,
              "nama": "Soleh Hidayat",
              "mat": 97,
              "ipa": 71,
              "bind": 89,
              "bing": 67,
              "komp": 71,
              "total": 395,
              "rata": 79,
              "desk": "R3C2"
            }
          },
          {
            "rowNumber": 18,
            "values": {
              "no": 17,
              "nama": "Dian Pratama",
              "mat": 92,
              "ipa": 66,
              "bind": 74,
              "bing": 82,
              "komp": 86,
              "total": 400,
              "rata": 80,
              "desk": "R3C3"
            }
          },
          {
            "rowNumber": 19,
            "values": {
              "no": 18,
              "nama": "Wildan Maulana",
              "mat": 97,
              "ipa": 76,
              "bind": 94,
              "bing": 67,
              "komp": 76,
              "total": 410,
              "rata": 82,
              "desk": "R3C4"
            }
          },
          {
            "rowNumber": 20,
            "values": {
              "no": 19,
              "nama": "Abdul Latif",
              "mat": 86,
              "ipa": 78,
              "bind": 92,
              "bing": 86,
              "komp": 98,
              "total": 440,
              "rata": 88,
              "desk": "R3C5"
            }
          },
          {
            "rowNumber": 21,
            "values": {
              "no": 20,
              "nama": "Mutia Zahra",
              "mat": 66,
              "ipa": 88,
              "bind": 82,
              "bing": 76,
              "komp": 88,
              "total": 400,
              "rata": 80,
              "desk": "R3C6"
            }
          },
          {
            "rowNumber": 22,
            "values": {
              "no": 21,
              "nama": "Ivan Pratama",
              "mat": 85,
              "ipa": 90,
              "bind": 90,
              "bing": 75,
              "komp": 90,
              "total": 430,
              "rata": 86,
              "desk": "R3C7"
            }
          },
          {
            "rowNumber": 23,
            "values": {
              "no": 22,
              "nama": "Putri Maharani",
              "mat": 65,
              "ipa": 95,
              "bind": 85,
              "bing": 65,
              "komp": 85,
              "total": 395,
              "rata": 79,
              "desk": "R4C1"
            }
          },
          {
            "rowNumber": 24,
            "values": {
              "no": 23,
              "nama": "Rizki Maulana",
              "mat": 81,
              "ipa": 98,
              "bind": 72,
              "bing": 66,
              "komp": 78,
              "total": 395,
              "rata": 79,
              "desk": "R4C2"
            }
          },
          {
            "rowNumber": 25,
            "values": {
              "no": 24,
              "nama": "Budi Sulistyo",
              "mat": 81,
              "ipa": 78,
              "bind": 72,
              "bing": 66,
              "komp": 78,
              "total": 375,
              "rata": 75,
              "desk": "R4C3"
            }
          },
          {
            "rowNumber": 26,
            "values": {
              "no": 25,
              "nama": "Susanto",
              "mat": 69,
              "ipa": 87,
              "bind": 73,
              "bing": 74,
              "komp": 97,
              "total": 400,
              "rata": 80,
              "desk": "R4C4"
            }
          },
          {
            "rowNumber": 27,
            "values": {
              "no": 26,
              "nama": "Galih Nugraha",
              "mat": 67,
              "ipa": 71,
              "bind": 89,
              "bing": 87,
              "komp": 71,
              "total": 385,
              "rata": 77,
              "desk": "R4C5"
            }
          },
          {
            "rowNumber": 28,
            "values": {
              "no": 27,
              "nama": "Aulia Rahma",
              "mat": 83,
              "ipa": 99,
              "bind": 81,
              "bing": 88,
              "komp": 99,
              "total": 450,
              "rata": 90,
              "desk": "R4C6"
            }
          },
          {
            "rowNumber": 29,
            "values": {
              "no": 28,
              "nama": "Bimo Prakoso",
              "mat": 68,
              "ipa": 84,
              "bind": 86,
              "bing": 98,
              "komp": 74,
              "total": 410,
              "rata": 82,
              "desk": "R4C7"
            }
          },
          {
            "rowNumber": 30,
            "values": {
              "no": 29,
              "nama": "Yuni Lestari",
              "mat": 87,
              "ipa": 91,
              "bind": 99,
              "bing": 97,
              "komp": 81,
              "total": 455,
              "rata": 91,
              "desk": "R5C1"
            }
          },
          {
            "rowNumber": 31,
            "values": {
              "no": 30,
              "nama": "Mahfud Hidayat",
              "mat": 77,
              "ipa": 81,
              "bind": 99,
              "bing": 92,
              "komp": 81,
              "total": 430,
              "rata": 86,
              "desk": "R5C2"
            }
          },
          {
            "rowNumber": 32,
            "values": {
              "no": 31,
              "nama": "Rio Saputra",
              "mat": 96,
              "ipa": 68,
              "bind": 92,
              "bing": 91,
              "komp": 98,
              "total": 445,
              "rata": 89,
              "desk": "R5C3"
            }
          },
          {
            "rowNumber": 33,
            "values": {
              "no": 32,
              "nama": "Deni Saputra",
              "mat": 82,
              "ipa": 96,
              "bind": 74,
              "bing": 77,
              "komp": 86,
              "total": 415,
              "rata": 83,
              "desk": "R5C4"
            }
          },
          {
            "rowNumber": 34,
            "values": {
              "no": 33,
              "nama": "Nur Azizah",
              "mat": 96,
              "ipa": 78,
              "bind": 82,
              "bing": 91,
              "komp": 88,
              "total": 435,
              "rata": 87,
              "desk": "R5C5"
            }
          },
          {
            "rowNumber": 35,
            "values": {
              "no": 34,
              "nama": "Roy Prasetyo",
              "mat": 66,
              "ipa": 83,
              "bind": 77,
              "bing": 76,
              "komp": 83,
              "total": 385,
              "rata": 77,
              "desk": "R5C6"
            }
          },
          {
            "rowNumber": 36,
            "values": {
              "no": 35,
              "nama": "Intan Permata",
              "mat": 82,
              "ipa": 66,
              "bind": 94,
              "bing": 77,
              "komp": 76,
              "total": 395,
              "rata": 79,
              "desk": "R5C7"
            }
          },
          {
            "rowNumber": 37,
            "values": {
              "no": 36,
              "nama": "Farhan Akbar",
              "mat": 90,
              "ipa": 65,
              "bind": 95,
              "bing": 95,
              "komp": 95,
              "total": 440,
              "rata": 88,
              "desk": "R6C1"
            }
          },
          {
            "rowNumber": 38,
            "values": {
              "no": 37,
              "nama": "Aldi Firmansyah",
              "mat": 97,
              "ipa": 76,
              "bind": 74,
              "bing": 67,
              "komp": 86,
              "total": 400,
              "rata": 80,
              "desk": "R6C2"
            }
          },
          {
            "rowNumber": 39,
            "values": {
              "no": 38,
              "nama": "Galih Priambodo",
              "mat": 67,
              "ipa": 96,
              "bind": 74,
              "bing": 87,
              "komp": 86,
              "total": 410,
              "rata": 82,
              "desk": "R6C3"
            }
          },
          {
            "rowNumber": 40,
            "values": {
              "no": 39,
              "nama": "Desi Aprilia",
              "mat": 87,
              "ipa": 91,
              "bind": 99,
              "bing": 97,
              "komp": 81,
              "total": 455,
              "rata": 91,
              "desk": "R6C4"
            }
          },
          {
            "rowNumber": 41,
            "values": {
              "no": 40,
              "nama": "Yudha Pratama",
              "mat": 94,
              "ipa": 87,
              "bind": 93,
              "bing": 69,
              "komp": 87,
              "total": 430,
              "rata": 86,
              "desk": "R6C5"
            }
          },
          {
            "rowNumber": 42,
            "values": {
              "no": 41,
              "nama": "Bagas Mahendra",
              "mat": 70,
              "ipa": 80,
              "bind": 70,
              "bing": 85,
              "komp": 70,
              "total": 375,
              "rata": 75,
              "desk": "R6C6"
            }
          },
          {
            "rowNumber": 43,
            "values": {
              "no": 42,
              "nama": "Citra Anggraini",
              "mat": 98,
              "ipa": 99,
              "bind": 91,
              "bing": 78,
              "komp": 79,
              "total": 445,
              "rata": 89,
              "desk": "R6C7"
            }
          },
          {
            "rowNumber": 44,
            "values": {
              "no": 43,
              "nama": "Elsa Ramadhani",
              "mat": 77,
              "ipa": 66,
              "bind": 74,
              "bing": 92,
              "komp": 86,
              "total": 395,
              "rata": 79,
              "desk": "R7C1"
            }
          },
          {
            "rowNumber": 45,
            "values": {
              "no": 44,
              "nama": "Fitria Ningsih",
              "mat": 84,
              "ipa": 97,
              "bind": 73,
              "bing": 99,
              "komp": 97,
              "total": 450,
              "rata": 90,
              "desk": "R7C2"
            }
          },
          {
            "rowNumber": 46,
            "values": {
              "no": 45,
              "nama": "Siska Handayani",
              "mat": 78,
              "ipa": 84,
              "bind": 96,
              "bing": 68,
              "komp": 84,
              "total": 410,
              "rata": 82,
              "desk": "R7C3"
            }
          },
          {
            "rowNumber": 47,
            "values": {
              "no": 46,
              "nama": "Vina Melati",
              "mat": 74,
              "ipa": 72,
              "bind": 98,
              "bing": 94,
              "komp": 92,
              "total": 430,
              "rata": 86,
              "desk": "R7C4"
            }
          },
          {
            "rowNumber": 48,
            "values": {
              "no": 47,
              "nama": "Gilang Ramadhan",
              "mat": 97,
              "ipa": 96,
              "bind": 94,
              "bing": 67,
              "komp": 76,
              "total": 430,
              "rata": 86,
              "desk": "R7C5"
            }
          },
          {
            "rowNumber": 49,
            "values": {
              "no": 48,
              "nama": "Yuni Kartika",
              "mat": 69,
              "ipa": 62,
              "bind": 78,
              "bing": 74,
              "komp": 72,
              "total": 355,
              "rata": 71,
              "desk": "R7C6"
            }
          },
          {
            "rowNumber": 50,
            "values": {
              "no": 49,
              "nama": "Andi Pratama",
              "mat": 82,
              "ipa": 66,
              "bind": 94,
              "bing": 77,
              "komp": 76,
              "total": 395,
              "rata": 79,
              "desk": "R7C7"
            }
          },
          {
            "rowNumber": 51,
            "values": {
              "no": 50,
              "nama": "Bayu Kurniawan",
              "mat": 77,
              "ipa": 71,
              "bind": 79,
              "bing": 92,
              "komp": 91,
              "total": 410,
              "rata": 82,
              "desk": "R8C1"
            }
          },
          {
            "rowNumber": 52,
            "values": {
              "no": 51,
              "nama": "Reza Maulana",
              "mat": 77,
              "ipa": 61,
              "bind": 89,
              "bing": 92,
              "komp": 71,
              "total": 390,
              "rata": 78,
              "desk": "R8C2"
            }
          },
          {
            "rowNumber": 53,
            "values": {
              "no": 52,
              "nama": "Adelia Putri",
              "mat": 85,
              "ipa": 60,
              "bind": 80,
              "bing": 75,
              "komp": 80,
              "total": 380,
              "rata": 76,
              "desk": "R8C3"
            }
          },
          {
            "rowNumber": 54,
            "values": {
              "no": 53,
              "nama": "Didik Supriyanto",
              "mat": 78,
              "ipa": 69,
              "bind": 81,
              "bing": 68,
              "komp": 99,
              "total": 395,
              "rata": 79,
              "desk": "R8C4"
            }
          },
          {
            "rowNumber": 55,
            "values": {
              "no": 54,
              "nama": "Riana Putri",
              "mat": 75,
              "ipa": 85,
              "bind": 85,
              "bing": 70,
              "komp": 85,
              "total": 400,
              "rata": 80,
              "desk": "R8C5"
            }
          },
          {
            "rowNumber": 56,
            "values": {
              "no": 55,
              "nama": "Cahyo Nugroho",
              "mat": 95,
              "ipa": 80,
              "bind": 90,
              "bing": 80,
              "komp": 90,
              "total": 435,
              "rata": 87,
              "desk": "R8C6"
            }
          },
          {
            "rowNumber": 57,
            "values": {
              "no": 56,
              "nama": "Abdul Malik",
              "mat": 89,
              "ipa": 72,
              "bind": 88,
              "bing": 84,
              "komp": 82,
              "total": 415,
              "rata": 83,
              "desk": "R8C7"
            }
          },
          {
            "rowNumber": 58,
            "values": {
              "no": 57,
              "nama": "Niken Larasati",
              "mat": 85,
              "ipa": 70,
              "bind": 70,
              "bing": 75,
              "komp": 70,
              "total": 370,
              "rata": 74,
              "desk": "R9C1"
            }
          },
          {
            "rowNumber": 59,
            "values": {
              "no": 58,
              "nama": "Wahyu Aditya",
              "mat": 67,
              "ipa": 96,
              "bind": 94,
              "bing": 87,
              "komp": 76,
              "total": 420,
              "rata": 84,
              "desk": "R9C2"
            }
          },
          {
            "rowNumber": 60,
            "values": {
              "no": 59,
              "nama": "Indra Kurniawan",
              "mat": 75,
              "ipa": 80,
              "bind": 70,
              "bing": 70,
              "komp": 70,
              "total": 365,
              "rata": 73,
              "desk": "R9C3"
            }
          },
          {
            "rowNumber": 61,
            "values": {
              "no": 60,
              "nama": "Sunardi",
              "mat": 66,
              "ipa": 98,
              "bind": 92,
              "bing": 76,
              "komp": 98,
              "total": 430,
              "rata": 86,
              "desk": "R9C4"
            }
          },
          {
            "rowNumber": 62,
            "values": {
              "no": 61,
              "nama": "Agus Prasetyo",
              "mat": 87,
              "ipa": 91,
              "bind": 79,
              "bing": 97,
              "komp": 91,
              "total": 445,
              "rata": 89,
              "desk": "R9C5"
            }
          },
          {
            "rowNumber": 63,
            "values": {
              "no": 62,
              "nama": "Ratna Sari",
              "mat": 78,
              "ipa": 99,
              "bind": 71,
              "bing": 68,
              "komp": 89,
              "total": 405,
              "rata": 81,
              "desk": "R9C6"
            }
          },
          {
            "rowNumber": 64,
            "values": {
              "no": 63,
              "nama": "Doni Setiawan",
              "mat": 99,
              "ipa": 72,
              "bind": 78,
              "bing": 89,
              "komp": 72,
              "total": 410,
              "rata": 82,
              "desk": "R9C7"
            }
          },
          {
            "rowNumber": 65,
            "values": {
              "no": 64,
              "nama": "Eko Purwanto",
              "mat": 98,
              "ipa": 79,
              "bind": 91,
              "bing": 78,
              "komp": 79,
              "total": 425,
              "rata": 85,
              "desk": "R10C1"
            }
          },
          {
            "rowNumber": 66,
            "values": {
              "no": 65,
              "nama": "Lilis Suryani",
              "mat": 68,
              "ipa": 64,
              "bind": 96,
              "bing": 98,
              "komp": 84,
              "total": 410,
              "rata": 82,
              "desk": "R10C2"
            }
          },
          {
            "rowNumber": 67,
            "values": {
              "no": 66,
              "nama": "Bambang Wijaya",
              "mat": 70,
              "ipa": 85,
              "bind": 85,
              "bing": 85,
              "komp": 85,
              "total": 410,
              "rata": 82,
              "desk": "R10C3"
            }
          },
          {
            "rowNumber": 68,
            "values": {
              "no": 67,
              "nama": "Mega Utami",
              "mat": 77,
              "ipa": 76,
              "bind": 74,
              "bing": 92,
              "komp": 86,
              "total": 405,
              "rata": 81,
              "desk": "R10C4"
            }
          },
          {
            "rowNumber": 69,
            "values": {
              "no": 68,
              "nama": "Tri Wahyuni",
              "mat": 76,
              "ipa": 68,
              "bind": 72,
              "bing": 81,
              "komp": 78,
              "total": 375,
              "rata": 75,
              "desk": "R10C5"
            }
          },
          {
            "rowNumber": 70,
            "values": {
              "no": 69,
              "nama": "Hendro Kusumo",
              "mat": 89,
              "ipa": 62,
              "bind": 98,
              "bing": 84,
              "komp": 92,
              "total": 425,
              "rata": 85,
              "desk": "R10C6"
            }
          },
          {
            "rowNumber": 71,
            "values": {
              "no": 70,
              "nama": "Anita Rahayu",
              "mat": 73,
              "ipa": 69,
              "bind": 81,
              "bing": 83,
              "komp": 99,
              "total": 405,
              "rata": 81,
              "desk": "R10C7"
            }
          },
          {
            "rowNumber": 72,
            "values": {
              "no": 71,
              "nama": "Zulfikar",
              "mat": 85,
              "ipa": 60,
              "bind": 90,
              "bing": 75,
              "komp": 90,
              "total": 400,
              "rata": 80,
              "desk": "R11C1"
            }
          },
          {
            "rowNumber": 73,
            "values": {
              "no": 72,
              "nama": "Hanafi",
              "mat": 83,
              "ipa": 89,
              "bind": 91,
              "bing": 88,
              "komp": 79,
              "total": 430,
              "rata": 86,
              "desk": "R11C2"
            }
          },
          {
            "rowNumber": 74,
            "values": {
              "no": 73,
              "nama": "Qori Sandioriva",
              "mat": 88,
              "ipa": 89,
              "bind": 91,
              "bing": 73,
              "komp": 79,
              "total": 420,
              "rata": 84,
              "desk": "R11C3"
            }
          },
          {
            "rowNumber": 75,
            "values": {
              "no": 74,
              "nama": "Wulan Guritno",
              "mat": 65,
              "ipa": 85,
              "bind": 75,
              "bing": 65,
              "komp": 75,
              "total": 365,
              "rata": 73,
              "desk": "R11C4"
            }
          },
          {
            "rowNumber": 76,
            "values": {
              "no": 75,
              "nama": "Vicky Prasetyo",
              "mat": 80,
              "ipa": 85,
              "bind": 85,
              "bing": 90,
              "komp": 85,
              "total": 425,
              "rata": 85,
              "desk": "R11C5"
            }
          },
          {
            "rowNumber": 77,
            "values": {
              "no": 76,
              "nama": "Jessica Mila",
              "mat": 75,
              "ipa": 75,
              "bind": 85,
              "bing": 70,
              "komp": 85,
              "total": 390,
              "rata": 78,
              "desk": "R11C6"
            }
          },
          {
            "rowNumber": 78,
            "values": {
              "no": 77,
              "nama": "Kevin Sanjaya",
              "mat": 77,
              "ipa": 76,
              "bind": 94,
              "bing": 92,
              "komp": 76,
              "total": 415,
              "rata": 83,
              "desk": "R11C7"
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Level 1: Pencarian Nama",
        "formula": "=INDEX('Desk Layout'!A1:G11, C3, D3)",
        "explanation": "Mengambil nama siswa dari koordinat Baris C dan Kolom D pada denah meja"
      },
      {
        "columnLabel": "Level 2: Total Skor Posisi",
        "formula": "=XLOOKUP(E9, 'Student Data'!J2:J78, 'Student Data'!H2:H78)",
        "explanation": "Mencocokkan posisi meja R...C... dengan data nilai siswa"
      }
    ]
  },
  {
    "id": "EX-002",
    "number": 2,
    "code": "#SBEM002",
    "title": "Estimasi Biaya Renovasi Rumah & Pengadaan Material",
    "category": "Aritmatika",
    "difficulty": "PEMULA",
    "difficultyStars": 1,
    "tags": [
      "Konstruksi",
      "Anggaran",
      "Aritmatika"
    ],
    "instructions": {
      "title": "Pemula Level - Rencana Anggaran Biaya (RAB) Renovasi Rumah",
      "description": "Hitung kebutuhan dana renovasi: Biaya Material (Qty * Harga Satuan), Ongkos Jasa Tukang (15% dari Biaya Material), dan Total Biaya Pengadaan.",
      "points": [
        "1. Kolom E (Biaya Material Rp): Kalikan Kebutuhan Qty (kolom C) dengan Harga Satuan (kolom D) -> =C2*D2.",
        "2. Kolom F (Ongkos Tukang Rp): Hitung 15% dari Biaya Material -> =E2*0.15.",
        "3. Kolom G (Total Biaya Rp): Jumlahkan Biaya Material + Ongkos Tukang -> =E2+F2."
      ],
      "helperTable": {
        "title": "Rumus Kalkulasi RAB",
        "headers": [
          "Komponen",
          "Rumus"
        ],
        "rows": [
          [
            "Biaya Material",
            "=Qty * Harga Satuan"
          ],
          [
            "Ongkos Tukang",
            "=Biaya Material * 15%"
          ],
          [
            "Total Biaya",
            "=Biaya Material + Ongkos Tukang"
          ]
        ]
      },
      "notice": "Gunakan operator perkalian dan penjumlahan matematika pada sel-sel target."
    },
    "sheets": [
      {
        "id": "sheet_rab",
        "name": "RAB Renovasi",
        "columns": [
          {
            "key": "no",
            "label": "No",
            "letter": "A"
          },
          {
            "key": "material",
            "label": "Nama Material Bangunan",
            "letter": "B"
          },
          {
            "key": "qty",
            "label": "Kebutuhan Qty",
            "letter": "C"
          },
          {
            "key": "harga",
            "label": "Harga Satuan (Rp)",
            "letter": "D"
          },
          {
            "key": "biaya_mat",
            "label": "Biaya Material (Rp)",
            "letter": "E"
          },
          {
            "key": "jasa",
            "label": "Ongkos Tukang 15% (Rp)",
            "letter": "F"
          },
          {
            "key": "total",
            "label": "Total Estimasi (Rp)",
            "letter": "G"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "no": 1,
              "material": "Semen Gresik 50kg",
              "qty": 40,
              "harga": 68000,
              "biaya_mat": "?",
              "jasa": "?",
              "total": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "material": "Pasir Cor (Truk 6m3)",
              "qty": 3,
              "harga": 1850000,
              "biaya_mat": "?",
              "jasa": "?",
              "total": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "material": "Batu Bata Merah Oven",
              "qty": 3000,
              "harga": 900,
              "biaya_mat": "?",
              "jasa": "?",
              "total": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "material": "Cat Tembok Dulux 20L",
              "qty": 4,
              "harga": 1450000,
              "biaya_mat": "?",
              "jasa": "?",
              "total": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "material": "Keramik Granit 60x60 (Dus)",
              "qty": 25,
              "harga": 195000,
              "biaya_mat": "?",
              "jasa": "?",
              "total": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "biaya_mat",
            "letter": "E",
            "label": "Biaya Material",
            "description": "Qty * Harga Satuan",
            "expectedRowAnswers": {
              "2": 2720000,
              "3": 5550000,
              "4": 2700000,
              "5": 5800000,
              "6": 4875000
            }
          },
          {
            "key": "jasa",
            "letter": "F",
            "label": "Ongkos Tukang",
            "description": "Biaya Material * 0.15",
            "expectedRowAnswers": {
              "2": 408000,
              "3": 832500,
              "4": 405000,
              "5": 870000,
              "6": 731250
            }
          },
          {
            "key": "total",
            "letter": "G",
            "label": "Total Estimasi",
            "description": "Biaya Material + Ongkos Tukang",
            "expectedRowAnswers": {
              "2": 3128000,
              "3": 6382500,
              "4": 3105000,
              "5": 6670000,
              "6": 5606250
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Biaya Material",
        "formula": "=C2*D2",
        "explanation": "Mengalikan jumlah kebutuhan material dengan harga per satuan"
      },
      {
        "columnLabel": "Ongkos Tukang",
        "formula": "=E2*0.15",
        "explanation": "Menghitung 15% dari subtotal biaya material"
      },
      {
        "columnLabel": "Total Estimasi",
        "formula": "=E2+F2",
        "explanation": "Menjumlahkan total biaya material dengan biaya ongkos jasa"
      }
    ]
  },
  {
    "id": "EX-003",
    "number": 3,
    "code": "#SBEM003",
    "title": "Pencatatan Stok Masuk & Keluar Gudang Elektronik",
    "category": "Logika",
    "difficulty": "PEMULA",
    "difficultyStars": 2,
    "tags": [
      "Gudang",
      "Inventaris",
      "IF",
      "Stok"
    ],
    "instructions": {
      "title": "Pemula Level - Pengendalian Mutasi Stok & Reorder Point",
      "description": "Departemen Inventory Gudang memerlukan kalkulasi Stok Akhir barang dan Status Pengadaan (Reorder).",
      "points": [
        "1. Kolom F (Stok Akhir Unit): Stok Awal + Barang Masuk - Barang Keluar -> =C2+D2-E2.",
        "2. Kolom H (Status Reorder): Jika Stok Akhir <= Batas Minimum (kolom G) maka \"REORDER SEGERA\", jika tidak \"STOK AMAN\" -> =IF(F2<=G2, \"REORDER SEGERA\", \"STOK AMAN\")."
      ],
      "helperTable": {
        "title": "Ketentuan Mutasi Stok",
        "headers": [
          "Komponen",
          "Formula"
        ],
        "rows": [
          [
            "Stok Akhir",
            "=Stok Awal + Masuk - Keluar"
          ],
          [
            "Status Reorder",
            "=IF(Stok Akhir <= Minimum, \"REORDER SEGERA\", \"STOK AMAN\")"
          ]
        ]
      },
      "notice": "Gunakan fungsi aritmatika dan fungsi logika IF pada kolom target."
    },
    "sheets": [
      {
        "id": "sheet_stock",
        "name": "Mutasi Stok Gudang",
        "columns": [
          {
            "key": "sku",
            "label": "Kode SKU",
            "letter": "A"
          },
          {
            "key": "nama",
            "label": "Nama Barang Elektronik",
            "letter": "B"
          },
          {
            "key": "awal",
            "label": "Stok Awal",
            "letter": "C"
          },
          {
            "key": "masuk",
            "label": "Barang Masuk",
            "letter": "D"
          },
          {
            "key": "keluar",
            "label": "Barang Keluar",
            "letter": "E"
          },
          {
            "key": "akhir",
            "label": "Stok Akhir",
            "letter": "F"
          },
          {
            "key": "min",
            "label": "Batas Minimum",
            "letter": "G"
          },
          {
            "key": "status",
            "label": "Status Pengadaan",
            "letter": "H"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "sku": "ELK-TV50",
              "nama": "Smart TV 50 Inch 4K",
              "awal": 25,
              "masuk": 10,
              "keluar": 22,
              "akhir": "?",
              "min": 15,
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "sku": "ELK-KLS2",
              "nama": "Kulkas 2 Pintu Inverter",
              "awal": 18,
              "masuk": 8,
              "keluar": 6,
              "akhir": "?",
              "min": 10,
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "sku": "ELK-MC01",
              "nama": "Mesin Cuci Front Loading",
              "awal": 12,
              "masuk": 5,
              "keluar": 14,
              "akhir": "?",
              "min": 8,
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "sku": "ELK-AC10",
              "nama": "AC Split 1 PK Dual Inverter",
              "awal": 30,
              "masuk": 15,
              "keluar": 38,
              "akhir": "?",
              "min": 12,
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "sku": "ELK-MW20",
              "nama": "Microwave Grill 23L",
              "awal": 40,
              "masuk": 10,
              "keluar": 15,
              "akhir": "?",
              "min": 20,
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "akhir",
            "letter": "F",
            "label": "Stok Akhir",
            "description": "Awal + Masuk - Keluar",
            "expectedRowAnswers": {
              "2": 13,
              "3": 20,
              "4": 3,
              "5": 7,
              "6": 35
            }
          },
          {
            "key": "status",
            "letter": "H",
            "label": "Status Pengadaan",
            "description": "IF Stok Akhir <= Batas Minimum",
            "expectedRowAnswers": {
              "2": "REORDER SEGERA",
              "3": "STOK AMAN",
              "4": "REORDER SEGERA",
              "5": "REORDER SEGERA",
              "6": "STOK AMAN"
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Stok Akhir",
        "formula": "=C2+D2-E2",
        "explanation": "Menghitung sisa stok fisik setelah mutasi masuk dan keluar"
      },
      {
        "columnLabel": "Status Pengadaan",
        "formula": "=IF(F2<=G2, \"REORDER SEGERA\", \"STOK AMAN\")",
        "explanation": "Memeriksa apakah stok saat ini berada di bawah batas minimum pengadaan"
      }
    ]
  },
  {
    "id": "EX-004",
    "number": 4,
    "code": "#SBEX007",
    "title": "Data Pegawai & Gaji (Payroll HRD)",
    "category": "Lookup",
    "difficulty": "EXTREME",
    "difficultyStars": 4,
    "tags": [
      "HRD",
      "Payroll",
      "VLOOKUP",
      "IF"
    ],
    "instructions": {
      "title": "Extreme Level - Rekapitulasi Gaji & Tunjangan Pegawai",
      "description": "Departemen HRD memerlukan perhitungan lengkap Gaji Pokok, Tunjangan Jabatan, Uang Lembur, Potongan PPh 21, dan Gaji Bersih berdasarkan sheet acuan \"Tabel Tarif\".",
      "points": [
        "1. Kolom E (Gaji Pokok): Ambil dari sheet \"Tabel Tarif\" berdasarkan Golongan (kolom D) menggunakan =VLOOKUP(D2, 'Tabel Tarif'!A2:C5, 2, FALSE).",
        "2. Kolom F (Tunjangan): Ambil dari sheet \"Tabel Tarif\" berdasarkan Golongan menggunakan =VLOOKUP(D2, 'Tabel Tarif'!A2:C5, 3, FALSE).",
        "3. Kolom H (Uang Lembur): Jam Lembur * Rp 50.000 (=G2 * 50000).",
        "4. Kolom I (Gaji Kotor): Gaji Pokok + Tunjangan Jabatan + Uang Lembur (=E2 + F2 + H2).",
        "5. Kolom J (Potongan PPh 21 5%): 5% dari Gaji Kotor (=I2 * 0.05).",
        "6. Kolom K (Gaji Bersih): Gaji Kotor - Potongan PPh 21 (=I2 - J2)."
      ],
      "helperTable": {
        "title": "Ketentuan Rumus Gaji",
        "headers": [
          "Komponen",
          "Formula"
        ],
        "rows": [
          [
            "Gaji Pokok",
            "=VLOOKUP(D2, 'Tabel Tarif'!A2:C5, 2, FALSE)"
          ],
          [
            "Tunjangan",
            "=VLOOKUP(D2, 'Tabel Tarif'!A2:C5, 3, FALSE)"
          ],
          [
            "Uang Lembur",
            "=Jam Lembur * 50000"
          ],
          [
            "Gaji Bersih",
            "=Gaji Kotor - PPh 21"
          ]
        ]
      },
      "notice": "Gunakan sheet \"Tabel Tarif\" untuk referensi tarif gaji dan tunjangan."
    },
    "sheets": [
      {
        "id": "sheet_payroll",
        "name": "Rekap Gaji Pegawai",
        "columns": [
          {
            "key": "id",
            "label": "ID Pegawai",
            "letter": "A"
          },
          {
            "key": "nama",
            "label": "Nama Pegawai",
            "letter": "B"
          },
          {
            "key": "dept",
            "label": "Departemen",
            "letter": "C"
          },
          {
            "key": "gol",
            "label": "Golongan",
            "letter": "D"
          },
          {
            "key": "gapok",
            "label": "Gaji Pokok (Rp)",
            "letter": "E"
          },
          {
            "key": "tunjangan",
            "label": "Tunjangan (Rp)",
            "letter": "F"
          },
          {
            "key": "lembur_jam",
            "label": "Jam Lembur",
            "letter": "G"
          },
          {
            "key": "lembur_rp",
            "label": "Uang Lembur (Rp)",
            "letter": "H"
          },
          {
            "key": "gaji_kotor",
            "label": "Gaji Kotor (Rp)",
            "letter": "I"
          },
          {
            "key": "pph",
            "label": "PPh 21 5% (Rp)",
            "letter": "J"
          },
          {
            "key": "thp",
            "label": "Gaji Bersih (THP)",
            "letter": "K"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "id": "EMP-001",
              "nama": "Budi Santoso",
              "dept": "Keuangan",
              "gol": "IV",
              "gapok": "?",
              "tunjangan": "?",
              "lembur_jam": 10,
              "lembur_rp": "?",
              "gaji_kotor": "?",
              "pph": "?",
              "thp": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "id": "EMP-002",
              "nama": "Siti Aminah",
              "dept": "Pemasaran",
              "gol": "III",
              "gapok": "?",
              "tunjangan": "?",
              "lembur_jam": 5,
              "lembur_rp": "?",
              "gaji_kotor": "?",
              "pph": "?",
              "thp": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "id": "EMP-003",
              "nama": "Rudi Hermawan",
              "dept": "Teknologi IT",
              "gol": "IV",
              "gapok": "?",
              "tunjangan": "?",
              "lembur_jam": 12,
              "lembur_rp": "?",
              "gaji_kotor": "?",
              "pph": "?",
              "thp": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "id": "EMP-004",
              "nama": "Dewi Lestari",
              "dept": "Sumber Daya HRD",
              "gol": "II",
              "gapok": "?",
              "tunjangan": "?",
              "lembur_jam": 0,
              "lembur_rp": "?",
              "gaji_kotor": "?",
              "pph": "?",
              "thp": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "id": "EMP-005",
              "nama": "Ahmad Fauzi",
              "dept": "Operasional",
              "gol": "III",
              "gapok": "?",
              "tunjangan": "?",
              "lembur_jam": 8,
              "lembur_rp": "?",
              "gaji_kotor": "?",
              "pph": "?",
              "thp": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "gapok",
            "letter": "E",
            "label": "Gaji Pokok",
            "description": "Lookup dari Tabel Tarif",
            "expectedRowAnswers": {
              "2": 10000000,
              "3": 7500000,
              "4": 10000000,
              "5": 5000000,
              "6": 7500000
            }
          },
          {
            "key": "tunjangan",
            "letter": "F",
            "label": "Tunjangan",
            "description": "Lookup dari Tabel Tarif",
            "expectedRowAnswers": {
              "2": 3500000,
              "3": 2000000,
              "4": 3500000,
              "5": 1000000,
              "6": 2000000
            }
          },
          {
            "key": "lembur_rp",
            "letter": "H",
            "label": "Uang Lembur",
            "description": "Jam Lembur * 50000",
            "expectedRowAnswers": {
              "2": 500000,
              "3": 250000,
              "4": 600000,
              "5": 0,
              "6": 400000
            }
          },
          {
            "key": "gaji_kotor",
            "letter": "I",
            "label": "Gaji Kotor",
            "description": "Gapok + Tunjangan + Lembur",
            "expectedRowAnswers": {
              "2": 14000000,
              "3": 9750000,
              "4": 14100000,
              "5": 6000000,
              "6": 9900000
            }
          },
          {
            "key": "thp",
            "letter": "K",
            "label": "Gaji Bersih",
            "description": "Gaji Kotor - PPh 21 (5%)",
            "expectedRowAnswers": {
              "2": 13300000,
              "3": 9262500,
              "4": 13395000,
              "5": 5700000,
              "6": 9405000
            }
          }
        ]
      },
      {
        "id": "sheet_tarif",
        "name": "Tabel Tarif",
        "columns": [
          {
            "key": "gol",
            "label": "Golongan",
            "letter": "A"
          },
          {
            "key": "gapok",
            "label": "Gaji Pokok Standar (Rp)",
            "letter": "B"
          },
          {
            "key": "tunjangan",
            "label": "Tunjangan Jabatan (Rp)",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "gol": "I",
              "gapok": 3500000,
              "tunjangan": 500000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "gol": "II",
              "gapok": 5000000,
              "tunjangan": 1000000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "gol": "III",
              "gapok": 7500000,
              "tunjangan": 2000000
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "gol": "IV",
              "gapok": 10000000,
              "tunjangan": 3500000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Gaji Pokok",
        "formula": "=VLOOKUP(D2, 'Tabel Tarif'!A2:C5, 2, FALSE)",
        "explanation": "Mengambil gaji pokok dari Tabel Tarif berdasarkan golongan"
      },
      {
        "columnLabel": "Gaji Bersih",
        "formula": "=I2 - (I2 * 0.05)",
        "explanation": "Mengurangi gaji kotor dengan potongan pajak PPh 21 5%"
      }
    ]
  },
  {
    "id": "EX-005",
    "number": 5,
    "code": "#SBEH010",
    "title": "Game Seri A Liga Italy (Klasemen Sepak Bola)",
    "category": "Kombinasi",
    "difficulty": "MAHIR",
    "difficultyStars": 4,
    "tags": [
      "Sports",
      "Klasemen",
      "SUM",
      "IF"
    ],
    "instructions": {
      "title": "Hard Level - Kalkulasi Tabel Klasemen Seri A Liga Italy",
      "description": "Hitung statistik klasemen pertandingan sepak bola: Total Main (P), Selisih Gol (GD), dan Total Poin (Pts) berdasarkan jumlah Menang (W=3 poin), Seri (D=1 poin), dan Kalah (L=0 poin).",
      "points": [
        "1. Kolom F (P = Main): Jumlahkan pertandingan Menang + Seri + Kalah (=C2+D2+E2).",
        "2. Kolom I (GD = Selisih Gol): Gol Memasukkan (GF) dikurangi Gol Kemasukan (GA) (=G2-H2).",
        "3. Kolom J (Pts = Total Poin): (Menang * 3) + (Seri * 1) (=C2*3 + D2*1)."
      ],
      "helperTable": {
        "title": "Aturan Poin Sepak Bola",
        "headers": [
          "Hasil",
          "Poin"
        ],
        "rows": [
          [
            "Menang (W)",
            "3 Poin"
          ],
          [
            "Seri (D)",
            "1 Poin"
          ],
          [
            "Kalah (L)",
            "0 Poin"
          ],
          [
            "Selisih Gol (GD)",
            "GF - GA"
          ]
        ]
      },
      "notice": "Tulis rumus kalkulasi klasemen pada kolom P, GD, dan Pts."
    },
    "sheets": [
      {
        "id": "sheet_klasemen",
        "name": "Klasemen Seri A",
        "columns": [
          {
            "key": "pos",
            "label": "Pos",
            "letter": "A"
          },
          {
            "key": "klub",
            "label": "Klub Sepak Bola",
            "letter": "B"
          },
          {
            "key": "w",
            "label": "Menang (W)",
            "letter": "C"
          },
          {
            "key": "d",
            "label": "Seri (D)",
            "letter": "D"
          },
          {
            "key": "l",
            "label": "Kalah (L)",
            "letter": "E"
          },
          {
            "key": "p",
            "label": "Main (P)",
            "letter": "F"
          },
          {
            "key": "gf",
            "label": "Gol Masuk (GF)",
            "letter": "G"
          },
          {
            "key": "ga",
            "label": "Gol Kebobolan (GA)",
            "letter": "H"
          },
          {
            "key": "gd",
            "label": "Selisih Gol (GD)",
            "letter": "I"
          },
          {
            "key": "pts",
            "label": "Total Poin (Pts)",
            "letter": "J"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "pos": 1,
              "klub": "Inter Milan",
              "w": 28,
              "d": 5,
              "l": 3,
              "p": "?",
              "gf": 81,
              "ga": 19,
              "gd": "?",
              "pts": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "pos": 2,
              "klub": "AC Milan",
              "w": 22,
              "d": 8,
              "l": 6,
              "p": "?",
              "gf": 68,
              "ga": 39,
              "gd": "?",
              "pts": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "pos": 3,
              "klub": "Juventus",
              "w": 19,
              "d": 11,
              "l": 6,
              "p": "?",
              "gf": 52,
              "ga": 28,
              "gd": "?",
              "pts": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "pos": 4,
              "klub": "Atalanta",
              "w": 20,
              "d": 6,
              "l": 10,
              "p": "?",
              "gf": 67,
              "ga": 39,
              "gd": "?",
              "pts": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "pos": 5,
              "klub": "AS Roma",
              "w": 18,
              "d": 7,
              "l": 11,
              "p": "?",
              "gf": 63,
              "ga": 44,
              "gd": "?",
              "pts": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "p",
            "letter": "F",
            "label": "Main (P)",
            "description": "Menang + Seri + Kalah",
            "expectedRowAnswers": {
              "2": 36,
              "3": 36,
              "4": 36,
              "5": 36,
              "6": 36
            }
          },
          {
            "key": "gd",
            "letter": "I",
            "label": "Selisih Gol (GD)",
            "description": "GF - GA",
            "expectedRowAnswers": {
              "2": 62,
              "3": 29,
              "4": 24,
              "5": 28,
              "6": 19
            }
          },
          {
            "key": "pts",
            "letter": "J",
            "label": "Total Poin (Pts)",
            "description": "(W * 3) + (D * 1)",
            "expectedRowAnswers": {
              "2": 89,
              "3": 74,
              "4": 68,
              "5": 66,
              "6": 61
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Main (P)",
        "formula": "=C2+D2+E2",
        "explanation": "Menjumlahkan seluruh pertandingan yang telah dimainkan"
      },
      {
        "columnLabel": "Selisih Gol (GD)",
        "formula": "=G2-H2",
        "explanation": "Mengurangi gol memasukkan dengan gol kemasukan"
      },
      {
        "columnLabel": "Total Poin (Pts)",
        "formula": "=C2*3 + D2*1",
        "explanation": "Menghitung total poin (3 poin menang, 1 poin seri)"
      }
    ]
  },
  {
    "id": "EX-006",
    "number": 6,
    "code": "#SBEM011",
    "title": "Packing Dus Pesanan Gudang E-Commerce",
    "category": "Statistik",
    "difficulty": "MENENGAH",
    "difficultyStars": 3,
    "tags": [
      "Gudang",
      "E-Commerce",
      "Logistik"
    ],
    "instructions": {
      "title": "Medium Level - Manajemen Packing & Dimensi Barang Gudang",
      "description": "Tim logistik e-commerce memerlukan kalkulasi Volume Pesanan (cm3), Berat Volume (Kg), dan Rekomendasi Ukuran Dus.",
      "points": [
        "1. Kolom F (Volume Barang cm3): Panjang * Lebar * Tinggi * Qty (=B2*C2*D2*E2).",
        "2. Kolom G (Berat Volume Kg): Volume Total / 6000 (=F2/6000).",
        "3. Kolom H (Ukuran Dus): Jika Volume <= 5000 \"DUS KECIL\", jika <= 20000 \"DUS SEDANG\", jika tidak \"DUS BESAR\" (=IF(F2<=5000, \"DUS KECIL\", IF(F2<=20000, \"DUS SEDANG\", \"DUS BESAR\")))."
      ],
      "helperTable": {
        "title": "Standar Dimensi Ekspedisi",
        "headers": [
          "Kriteria Volume",
          "Ukuran Dus"
        ],
        "rows": [
          [
            "Volume <= 5.000 cm3",
            "DUS KECIL"
          ],
          [
            "Volume 5.001 - 20.000 cm3",
            "DUS SEDANG"
          ],
          [
            "Volume > 20.000 cm3",
            "DUS BESAR"
          ]
        ]
      },
      "notice": "Gunakan operator perkalian dan fungsi IF bertingkat."
    },
    "sheets": [
      {
        "id": "sheet_packing",
        "name": "Order Packing",
        "columns": [
          {
            "key": "item",
            "label": "Nama Produk",
            "letter": "A"
          },
          {
            "key": "p",
            "label": "Panjang (cm)",
            "letter": "B"
          },
          {
            "key": "l",
            "label": "Lebar (cm)",
            "letter": "C"
          },
          {
            "key": "t",
            "label": "Tinggi (cm)",
            "letter": "D"
          },
          {
            "key": "qty",
            "label": "Qty",
            "letter": "E"
          },
          {
            "key": "vol",
            "label": "Volume (cm3)",
            "letter": "F"
          },
          {
            "key": "berat_vol",
            "label": "Berat Vol (Kg)",
            "letter": "G"
          },
          {
            "key": "dus",
            "label": "Rekomendasi Dus",
            "letter": "H"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "item": "Sepatu Olahraga Running",
              "p": 30,
              "l": 20,
              "t": 10,
              "qty": 1,
              "vol": "?",
              "berat_vol": "?",
              "dus": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "item": "Kaos Polos Cotton (Pack 3)",
              "p": 20,
              "l": 15,
              "t": 5,
              "qty": 2,
              "vol": "?",
              "berat_vol": "?",
              "dus": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "item": "Helm Sepeda Dewasa",
              "p": 35,
              "l": 25,
              "t": 25,
              "qty": 1,
              "vol": "?",
              "berat_vol": "?",
              "dus": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "item": "Tumbler Minum Stainless",
              "p": 10,
              "l": 10,
              "t": 25,
              "qty": 1,
              "vol": "?",
              "berat_vol": "?",
              "dus": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "item": "Jaket Hoodie Waterproof",
              "p": 30,
              "l": 25,
              "t": 10,
              "qty": 2,
              "vol": "?",
              "berat_vol": "?",
              "dus": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "vol",
            "letter": "F",
            "label": "Volume (cm3)",
            "description": "P * L * T * Qty",
            "expectedRowAnswers": {
              "2": 6000,
              "3": 3000,
              "4": 21875,
              "5": 2500,
              "6": 15000
            }
          },
          {
            "key": "berat_vol",
            "letter": "G",
            "label": "Berat Vol (Kg)",
            "description": "Volume / 6000",
            "expectedRowAnswers": {
              "2": 1,
              "3": 0.5,
              "4": 3.65,
              "5": 0.42,
              "6": 2.5
            }
          },
          {
            "key": "dus",
            "letter": "H",
            "label": "Rekomendasi Dus",
            "description": "IF bertingkat ukuran dus",
            "expectedRowAnswers": {
              "2": "DUS SEDANG",
              "3": "DUS KECIL",
              "4": "DUS BESAR",
              "5": "DUS KECIL",
              "6": "DUS SEDANG"
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Volume (cm3)",
        "formula": "=B2*C2*D2*E2",
        "explanation": "Menghitung volume kubikasi pesanan"
      },
      {
        "columnLabel": "Rekomendasi Dus",
        "formula": "=IF(F2<=5000, \"DUS KECIL\", IF(F2<=20000, \"DUS SEDANG\", \"DUS BESAR\"))",
        "explanation": "Menentukan kategori dus berdasarkan volume total"
      }
    ]
  },
  {
    "id": "EX-007",
    "number": 7,
    "code": "#SBEC005",
    "title": "Championship Excel: EVE Online Refining (MEWC 2023)",
    "category": "Kombinasi",
    "difficulty": "CHAMPIONSHIP",
    "difficultyStars": 5,
    "tags": [
      "Championship",
      "MEWC 2023",
      "EVE Online",
      "Turnamen"
    ],
    "instructions": {
      "title": "Championship Level - Model Pemurnian Mineral EVE Online (MEWC)",
      "description": "Model pemurnian tambang asteroid ruang angkasa: Hitung Hasil Pemurnian Mineral (Tritanium, Pyerite) berdasarkan Efisiensi Stasiun dan Estimasi Pendapatan Penjualan di Pasar Jita 4-4.",
      "points": [
        "1. Kolom E (Tritanium Yield): Berat Ore (kolom C) * Efisiensi (kolom D) * 10 (=C2*D2*10).",
        "2. Kolom F (Pyerite Yield): Berat Ore * Efisiensi * 3 (=C2*D2*3).",
        "3. Kolom G (Total Nilai Jita ISK): (Tritanium * 4.2 ISK) + (Pyerite * 12.5 ISK) (=E2*4.2 + F2*12.5)."
      ],
      "helperTable": {
        "title": "Harga Komoditas Pasar Jita",
        "headers": [
          "Mineral",
          "Harga Pasar per Unit"
        ],
        "rows": [
          [
            "Tritanium",
            "4.2 ISK"
          ],
          [
            "Pyerite",
            "12.5 ISK"
          ],
          [
            "Mexallon",
            "45.0 ISK"
          ]
        ]
      },
      "notice": "Gunakan konstanta harga pasar pada formula kalkulasi."
    },
    "sheets": [
      {
        "id": "sheet_eve",
        "name": "Refining Operations",
        "columns": [
          {
            "key": "ore",
            "label": "Tipe Asteroid Ore",
            "letter": "A"
          },
          {
            "key": "lokasi",
            "label": "Lokasi Solar System",
            "letter": "B"
          },
          {
            "key": "batch",
            "label": "Volume Batch (m3)",
            "letter": "C"
          },
          {
            "key": "efisiensi",
            "label": "Efisiensi Stasiun (%)",
            "letter": "D"
          },
          {
            "key": "trit",
            "label": "Tritanium Yield",
            "letter": "E"
          },
          {
            "key": "pye",
            "label": "Pyerite Yield",
            "letter": "F"
          },
          {
            "key": "nilai_isk",
            "label": "Total Nilai Pasar (ISK)",
            "letter": "G"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "ore": "Veldspar High Quality",
              "lokasi": "Jita IV-4",
              "batch": 1000,
              "efisiensi": 0.85,
              "trit": "?",
              "pye": "?",
              "nilai_isk": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "ore": "Scordite Concentrated",
              "lokasi": "Amarr VIII",
              "batch": 1500,
              "efisiensi": 0.8,
              "trit": "?",
              "pye": "?",
              "nilai_isk": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "ore": "Pyroxeres Solid",
              "lokasi": "Dodixie IX",
              "batch": 800,
              "efisiensi": 0.88,
              "trit": "?",
              "pye": "?",
              "nilai_isk": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "ore": "Plagioclase Rich",
              "lokasi": "Rens VI",
              "batch": 2000,
              "efisiensi": 0.75,
              "trit": "?",
              "pye": "?",
              "nilai_isk": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "ore": "Kernite Resplendant",
              "lokasi": "Hek VIII",
              "batch": 1200,
              "efisiensi": 0.82,
              "trit": "?",
              "pye": "?",
              "nilai_isk": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "trit",
            "letter": "E",
            "label": "Tritanium Yield",
            "description": "Batch * Efisiensi * 10",
            "expectedRowAnswers": {
              "2": 8500,
              "3": 12000,
              "4": 7040,
              "5": 15000,
              "6": 9840
            }
          },
          {
            "key": "pye",
            "letter": "F",
            "label": "Pyerite Yield",
            "description": "Batch * Efisiensi * 3",
            "expectedRowAnswers": {
              "2": 2550,
              "3": 3600,
              "4": 2112,
              "5": 4500,
              "6": 2952
            }
          },
          {
            "key": "nilai_isk",
            "letter": "G",
            "label": "Total Nilai Pasar (ISK)",
            "description": "(Trit * 4.2) + (Pye * 12.5)",
            "expectedRowAnswers": {
              "2": 67575,
              "3": 95400,
              "4": 55968,
              "5": 119250,
              "6": 78228
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Tritanium Yield",
        "formula": "=C2*D2*10",
        "explanation": "Kalkulasi output mineral Tritanium dengan faktor efisiensi pemurnian"
      },
      {
        "columnLabel": "Total Nilai Pasar",
        "formula": "=(E2*4.2)+(F2*12.5)",
        "explanation": "Menghitung total pendapatan ISK dari harga pasar komoditas"
      }
    ]
  },
  {
    "id": "EX-008",
    "number": 8,
    "code": "#SBEM012",
    "title": "Tagihan Invoice & Kasir Retail Sembako (VLOOKUP & Diskon)",
    "category": "Lookup",
    "difficulty": "MENENGAH",
    "difficultyStars": 3,
    "tags": [
      "Kasir",
      "Retail",
      "VLOOKUP",
      "Invoice"
    ],
    "instructions": {
      "title": "Medium Level - Otomasi Tagihan Kasir & Lookup Daftar Harga",
      "description": "Sistem kasir minimarket memerlukan penarikan Nama Produk & Harga dari sheet \"Daftar Harga\", kalkulasi Subtotal, Diskon Member, dan Total Bayar.",
      "points": [
        "1. Kolom C (Nama Produk): Lookup dari sheet \"Daftar Harga\" berdasarkan Kode Barcode -> =VLOOKUP(B2, 'Daftar Harga'!A2:C6, 2, FALSE).",
        "2. Kolom E (Harga Satuan Rp): Lookup dari sheet \"Daftar Harga\" -> =VLOOKUP(B2, 'Daftar Harga'!A2:C6, 3, FALSE).",
        "3. Kolom F (Subtotal Rp): Qty * Harga Satuan -> =D2*E2.",
        "4. Kolom H (Total Bayar Rp): Subtotal - Diskon Member -> =F2-G2."
      ],
      "helperTable": {
        "title": "Daftar Barcode & Harga Standar",
        "headers": [
          "Barcode",
          "Nama Produk",
          "Harga"
        ],
        "rows": [
          [
            "BRC-01",
            "Minyak Goreng Sania 2L",
            "Rp 34.000"
          ],
          [
            "BRC-02",
            "Beras Ramos Super 5kg",
            "Rp 74.000"
          ],
          [
            "BRC-03",
            "Gula Kristal Putih 1kg",
            "Rp 17.500"
          ],
          [
            "BRC-04",
            "Susu Kental Manis Frisian",
            "Rp 12.000"
          ],
          [
            "BRC-05",
            "Kopi Kapal Api Special 165g",
            "Rp 15.000"
          ]
        ]
      },
      "notice": "Gunakan sheet \"Daftar Harga\" untuk rumus VLOOKUP."
    },
    "sheets": [
      {
        "id": "sheet_invoice",
        "name": "Invoice Transaksi",
        "columns": [
          {
            "key": "no",
            "label": "No",
            "letter": "A"
          },
          {
            "key": "barcode",
            "label": "Barcode",
            "letter": "B"
          },
          {
            "key": "nama_barang",
            "label": "Nama Produk",
            "letter": "C"
          },
          {
            "key": "qty",
            "label": "Qty Beli",
            "letter": "D"
          },
          {
            "key": "harga",
            "label": "Harga Satuan (Rp)",
            "letter": "E"
          },
          {
            "key": "subtotal",
            "label": "Subtotal (Rp)",
            "letter": "F"
          },
          {
            "key": "diskon",
            "label": "Diskon Member (Rp)",
            "letter": "G"
          },
          {
            "key": "total",
            "label": "Total Bayar (Rp)",
            "letter": "H"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "no": 1,
              "barcode": "BRC-01",
              "nama_barang": "?",
              "qty": 3,
              "harga": "?",
              "subtotal": "?",
              "diskon": 5000,
              "total": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "barcode": "BRC-02",
              "nama_barang": "?",
              "qty": 2,
              "harga": "?",
              "subtotal": "?",
              "diskon": 10000,
              "total": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "barcode": "BRC-03",
              "nama_barang": "?",
              "qty": 4,
              "harga": "?",
              "subtotal": "?",
              "diskon": 0,
              "total": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "barcode": "BRC-05",
              "nama_barang": "?",
              "qty": 5,
              "harga": "?",
              "subtotal": "?",
              "diskon": 3000,
              "total": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "nama_barang",
            "letter": "C",
            "label": "Nama Produk",
            "description": "Lookup Nama Produk dari Daftar Harga",
            "expectedRowAnswers": {
              "2": "Minyak Goreng Sania 2L",
              "3": "Beras Ramos Super 5kg",
              "4": "Gula Kristal Putih 1kg",
              "5": "Kopi Kapal Api Special 165g"
            }
          },
          {
            "key": "harga",
            "letter": "E",
            "label": "Harga Satuan",
            "description": "Lookup Harga Satuan dari Daftar Harga",
            "expectedRowAnswers": {
              "2": 34000,
              "3": 74000,
              "4": 17500,
              "5": 15000
            }
          },
          {
            "key": "subtotal",
            "letter": "F",
            "label": "Subtotal",
            "description": "Qty * Harga Satuan",
            "expectedRowAnswers": {
              "2": 102000,
              "3": 148000,
              "4": 70000,
              "5": 75000
            }
          },
          {
            "key": "total",
            "letter": "H",
            "label": "Total Bayar",
            "description": "Subtotal - Diskon Member",
            "expectedRowAnswers": {
              "2": 97000,
              "3": 138000,
              "4": 70000,
              "5": 72000
            }
          }
        ]
      },
      {
        "id": "sheet_harga",
        "name": "Daftar Harga",
        "columns": [
          {
            "key": "barcode",
            "label": "Kode Barcode",
            "letter": "A"
          },
          {
            "key": "nama",
            "label": "Nama Produk",
            "letter": "B"
          },
          {
            "key": "harga",
            "label": "Harga Satuan (Rp)",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "barcode": "BRC-01",
              "nama": "Minyak Goreng Sania 2L",
              "harga": 34000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "barcode": "BRC-02",
              "nama": "Beras Ramos Super 5kg",
              "harga": 74000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "barcode": "BRC-03",
              "nama": "Gula Kristal Putih 1kg",
              "harga": 17500
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "barcode": "BRC-04",
              "nama": "Susu Kental Manis Frisian",
              "harga": 12000
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "barcode": "BRC-05",
              "nama": "Kopi Kapal Api Special 165g",
              "harga": 15000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Nama Produk",
        "formula": "=VLOOKUP(B2, 'Daftar Harga'!A2:C6, 2, FALSE)",
        "explanation": "Mengambil nama produk dari sheet Daftar Harga"
      },
      {
        "columnLabel": "Harga Satuan",
        "formula": "=VLOOKUP(B2, 'Daftar Harga'!A2:C6, 3, FALSE)",
        "explanation": "Mengambil harga satuan dari sheet Daftar Harga"
      },
      {
        "columnLabel": "Total Bayar",
        "formula": "=F2-G2",
        "explanation": "Mengurangi subtotal dengan diskon member"
      }
    ]
  },
  {
    "id": "EX-009",
    "number": 9,
    "code": "#SBEM018",
    "title": "Master DATEDIF Masa Kerja & Status Senioritas Karyawan",
    "category": "Teks",
    "difficulty": "MENENGAH",
    "difficultyStars": 3,
    "tags": [
      "HRD",
      "DATEDIF",
      "Masa Kerja"
    ],
    "instructions": {
      "title": "Medium Level - Kalkulasi Masa Kerja Pegawai (Tahun & Bulan)",
      "description": "Departemen HRD memerlukan perhitungan lama masa kerja karyawan dari Tanggal Masuk (Join Date) ke Tanggal Evaluasi (Cut-off: 2026-08-01) menggunakan fungsi DATEDIF.",
      "points": [
        "1. Kolom E (Masa Kerja Tahun): Gunakan =DATEDIF(C2, D2, \"Y\").",
        "2. Kolom F (Masa Kerja Sisa Bulan): Gunakan =DATEDIF(C2, D2, \"YM\").",
        "3. Kolom G (Status Senioritas): Jika Masa Kerja Tahun >= 5 maka \"SENIOR\", jika tidak \"JUNIOR\" -> =IF(E2>=5, \"SENIOR\", \"JUNIOR\")."
      ],
      "helperTable": {
        "title": "Argumen Fungsi DATEDIF",
        "headers": [
          "Satuan",
          "Kode Unit"
        ],
        "rows": [
          [
            "Jumlah Tahun Penuh",
            "\"Y\""
          ],
          [
            "Jumlah Sisa Bulan",
            "\"YM\""
          ],
          [
            "Jumlah Hari Penuh",
            "\"D\""
          ]
        ]
      },
      "notice": "Gunakan fungsi DATEDIF(Start_Date, End_Date, Unit) dan IF."
    },
    "sheets": [
      {
        "id": "sheet_datedif",
        "name": "Masa Kerja Karyawan",
        "columns": [
          {
            "key": "nik",
            "label": "NIK",
            "letter": "A"
          },
          {
            "key": "nama",
            "label": "Nama Karyawan",
            "letter": "B"
          },
          {
            "key": "join",
            "label": "Tanggal Masuk",
            "letter": "C"
          },
          {
            "key": "eval",
            "label": "Tanggal Evaluasi",
            "letter": "D"
          },
          {
            "key": "thn",
            "label": "Masa Kerja (Tahun)",
            "letter": "E"
          },
          {
            "key": "bln",
            "label": "Sisa Masa (Bulan)",
            "letter": "F"
          },
          {
            "key": "senioritas",
            "label": "Status Senioritas",
            "letter": "G"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "nik": "KRY-01",
              "nama": "Bambang Wijaya",
              "join": "2016-03-15",
              "eval": "2026-08-01",
              "thn": "?",
              "bln": "?",
              "senioritas": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "nik": "KRY-02",
              "nama": "Lilis Suryani",
              "join": "2023-01-10",
              "eval": "2026-08-01",
              "thn": "?",
              "bln": "?",
              "senioritas": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "nik": "KRY-03",
              "nama": "Eko Purwanto",
              "join": "2019-09-01",
              "eval": "2026-08-01",
              "thn": "?",
              "bln": "?",
              "senioritas": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "nik": "KRY-04",
              "nama": "Ratna Sari",
              "join": "2024-05-20",
              "eval": "2026-08-01",
              "thn": "?",
              "bln": "?",
              "senioritas": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "nik": "KRY-05",
              "nama": "Tri Wahyuni",
              "join": "2018-12-01",
              "eval": "2026-08-01",
              "thn": "?",
              "bln": "?",
              "senioritas": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "thn",
            "letter": "E",
            "label": "Masa Kerja (Tahun)",
            "description": "DATEDIF(Join, Eval, \"Y\")",
            "expectedRowAnswers": {
              "2": 10,
              "3": 3,
              "4": 6,
              "5": 2,
              "6": 7
            }
          },
          {
            "key": "bln",
            "letter": "F",
            "label": "Sisa Masa (Bulan)",
            "description": "DATEDIF(Join, Eval, \"YM\")",
            "expectedRowAnswers": {
              "2": 4,
              "3": 6,
              "4": 11,
              "5": 2,
              "6": 8
            }
          },
          {
            "key": "senioritas",
            "letter": "G",
            "label": "Status Senioritas",
            "description": "IF(Tahun>=5, \"SENIOR\", \"JUNIOR\")",
            "expectedRowAnswers": {
              "2": "SENIOR",
              "3": "JUNIOR",
              "4": "SENIOR",
              "5": "JUNIOR",
              "6": "SENIOR"
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Masa Kerja (Tahun)",
        "formula": "=DATEDIF(C2, D2, \"Y\")",
        "explanation": "Menghitung selisih tahun penuh antara dua tanggal"
      },
      {
        "columnLabel": "Status Senioritas",
        "formula": "=IF(E2>=5, \"SENIOR\", \"JUNIOR\")",
        "explanation": "Menguji apakah masa kerja karyawan sudah mencapai minimal 5 tahun"
      }
    ]
  },
  {
    "id": "EX-010",
    "number": 10,
    "code": "#SBEM019",
    "title": "Perhitungan Komisi Sales Otomotif Multi-Tier",
    "category": "Logika",
    "difficulty": "MENENGAH",
    "difficultyStars": 3,
    "tags": [
      "Sales",
      "Komisi",
      "IF Bertingkat"
    ],
    "instructions": {
      "title": "Medium Level - Target Penjualan & Komisi Berjenjang Sales",
      "description": "Manajer Penjualan memerlukan kalkulasi Persentase Capaian Target, Rate Komisi (% Berjenjang), dan Total Bonus Komisi yang diterima sales.",
      "points": [
        "1. Kolom E (% Capaian): Realisasi Omset (kolom D) / Target Omset (kolom C) -> =D2/C2.",
        "2. Kolom F (% Rate Komisi): Jika Capaian >= 1.0 (100%) maka 0.05 (5%), jika Capaian >= 0.8 (80%) maka 0.03 (3%), jika di bawah 80% maka 0.01 (1%) -> =IF(E2>=1, 0.05, IF(E2>=0.8, 0.03, 0.01)).",
        "3. Kolom G (Nominal Komisi Rp): Realisasi Omset * % Rate Komisi -> =D2*F2."
      ],
      "helperTable": {
        "title": "Tabel Skema Komisi Sales",
        "headers": [
          "Capaian Target",
          "% Komisi"
        ],
        "rows": [
          [
            ">= 100% Target",
            "5% dari Omset"
          ],
          [
            "80% - 99% Target",
            "3% dari Omset"
          ],
          [
            "< 80% Target",
            "1% dari Omset"
          ]
        ]
      },
      "notice": "Gunakan pembagian untuk capaian dan fungsi IF bertingkat untuk rate komisi."
    },
    "sheets": [
      {
        "id": "sheet_komisi",
        "name": "Komisi Sales",
        "columns": [
          {
            "key": "id",
            "label": "ID Sales",
            "letter": "A"
          },
          {
            "key": "nama",
            "label": "Nama Sales Representative",
            "letter": "B"
          },
          {
            "key": "target",
            "label": "Target Omset (Rp)",
            "letter": "C"
          },
          {
            "key": "realisasi",
            "label": "Realisasi Omset (Rp)",
            "letter": "D"
          },
          {
            "key": "pct_capaian",
            "label": "% Capaian",
            "letter": "E"
          },
          {
            "key": "rate",
            "label": "% Rate Komisi",
            "letter": "F"
          },
          {
            "key": "komisi_rp",
            "label": "Nominal Komisi (Rp)",
            "letter": "G"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "id": "SLS-01",
              "nama": "Gilang Ramadhan",
              "target": 200000000,
              "realisasi": 240000000,
              "pct_capaian": "?",
              "rate": "?",
              "komisi_rp": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "id": "SLS-02",
              "nama": "Siska Handayani",
              "target": 200000000,
              "realisasi": 180000000,
              "pct_capaian": "?",
              "rate": "?",
              "komisi_rp": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "id": "SLS-03",
              "nama": "Doni Setiawan",
              "target": 150000000,
              "realisasi": 105000000,
              "pct_capaian": "?",
              "rate": "?",
              "komisi_rp": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "id": "SLS-04",
              "nama": "Niken Larasati",
              "target": 250000000,
              "realisasi": 275000000,
              "pct_capaian": "?",
              "rate": "?",
              "komisi_rp": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "pct_capaian",
            "letter": "E",
            "label": "% Capaian",
            "description": "Realisasi / Target",
            "expectedRowAnswers": {
              "2": 1.2,
              "3": 0.9,
              "4": 0.7,
              "5": 1.1
            }
          },
          {
            "key": "rate",
            "letter": "F",
            "label": "% Rate Komisi",
            "description": "IF(Capaian>=1, 0.05, IF(Capaian>=0.8, 0.03, 0.01))",
            "expectedRowAnswers": {
              "2": 0.05,
              "3": 0.03,
              "4": 0.01,
              "5": 0.05
            }
          },
          {
            "key": "komisi_rp",
            "letter": "G",
            "label": "Nominal Komisi",
            "description": "Realisasi * Rate",
            "expectedRowAnswers": {
              "2": 12000000,
              "3": 5400000,
              "4": 1050000,
              "5": 13750000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "% Capaian",
        "formula": "=D2/C2",
        "explanation": "Membagi realisasi penjualan dengan target yang ditetapkan"
      },
      {
        "columnLabel": "% Rate Komisi",
        "formula": "=IF(E2>=1, 0.05, IF(E2>=0.8, 0.03, 0.01))",
        "explanation": "Menentukan persentase rate komisi berjenjang"
      }
    ]
  },
  {
    "id": "EX-011",
    "number": 11,
    "code": "#SBEM021",
    "title": "Kalkulasi HPP & Margin Keuntungan Menu Restoran F&B",
    "category": "Aritmatika",
    "difficulty": "MENENGAH",
    "difficultyStars": 2,
    "tags": [
      "F&B",
      "Restoran",
      "HPP",
      "Margin"
    ],
    "instructions": {
      "title": "Medium Level - Analisis Margin Profit & Harga Jual Menu Cafe",
      "description": "Manajer Restoran F&B menghitung Laba Kotor per porsi (Harga Jual - Biaya Bahan HPP) dan Persentase Margin Laba (% Profit Margin).",
      "points": [
        "1. Kolom E (Laba Kotor Rp): Harga Jual (kolom D) - Biaya Bahan HPP (kolom C) -> =D2-C2.",
        "2. Kolom F (% Margin Laba): Laba Kotor / Harga Jual -> =E2/D2.",
        "3. Kolom G (Status Profitabilitas): Jika % Margin Laba >= 0.6 (60%) maka \"HIGH MARGIN\", jika tidak \"STANDARD MARGIN\" -> =IF(F2>=0.6, \"HIGH MARGIN\", \"STANDARD MARGIN\")."
      ],
      "helperTable": {
        "title": "Rumus Keuangan Restoran",
        "headers": [
          "Indikator",
          "Formula"
        ],
        "rows": [
          [
            "Laba Kotor",
            "=Harga Jual - Biaya Bahan HPP"
          ],
          [
            "% Margin Laba",
            "=Laba Kotor / Harga Jual"
          ],
          [
            "High Margin",
            ">= 60% Margin"
          ]
        ]
      },
      "notice": "Gunakan operator aritmatika dan fungsi IF."
    },
    "sheets": [
      {
        "id": "sheet_fnb",
        "name": "Menu & Margin Resto",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Menu",
            "letter": "A"
          },
          {
            "key": "nama_menu",
            "label": "Nama Menu Makanan / Minuman",
            "letter": "B"
          },
          {
            "key": "hpp",
            "label": "Biaya Bahan HPP (Rp)",
            "letter": "C"
          },
          {
            "key": "jual",
            "label": "Harga Jual Menu (Rp)",
            "letter": "D"
          },
          {
            "key": "laba",
            "label": "Laba Kotor (Rp)",
            "letter": "E"
          },
          {
            "key": "margin",
            "label": "% Margin Laba",
            "letter": "F"
          },
          {
            "key": "status_margin",
            "label": "Status Profitabilitas",
            "letter": "G"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "MN-01",
              "nama_menu": "Espresso Single Origin 30ml",
              "hpp": 4500,
              "jual": 25000,
              "laba": "?",
              "margin": "?",
              "status_margin": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "MN-02",
              "nama_menu": "Iced Caramel Macchiato 16oz",
              "hpp": 11000,
              "jual": 38000,
              "laba": "?",
              "margin": "?",
              "status_margin": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "MN-03",
              "nama_menu": "Sirloin Steak Meltique 200g",
              "hpp": 65000,
              "jual": 115000,
              "laba": "?",
              "margin": "?",
              "status_margin": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "kode": "MN-04",
              "nama_menu": "Spaghetti Carbonara Creamy",
              "hpp": 18000,
              "jual": 42000,
              "laba": "?",
              "margin": "?",
              "status_margin": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "laba",
            "letter": "E",
            "label": "Laba Kotor (Rp)",
            "description": "Harga Jual - HPP",
            "expectedRowAnswers": {
              "2": 20500,
              "3": 27000,
              "4": 50000,
              "5": 24000
            }
          },
          {
            "key": "margin",
            "letter": "F",
            "label": "% Margin Laba",
            "description": "Laba Kotor / Harga Jual",
            "expectedRowAnswers": {
              "2": 0.82,
              "3": 0.711,
              "4": 0.435,
              "5": 0.571
            }
          },
          {
            "key": "status_margin",
            "letter": "G",
            "label": "Status Profitabilitas",
            "description": "IF(Margin>=0.6, \"HIGH MARGIN\", \"STANDARD MARGIN\")",
            "expectedRowAnswers": {
              "2": "HIGH MARGIN",
              "3": "HIGH MARGIN",
              "4": "STANDARD MARGIN",
              "5": "STANDARD MARGIN"
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Laba Kotor",
        "formula": "=D2-C2",
        "explanation": "Mengurangi harga jual dengan biaya pokok bahan baku"
      },
      {
        "columnLabel": "% Margin Laba",
        "formula": "=E2/D2",
        "explanation": "Menghitung persentase margin keuntungan dari harga jual"
      }
    ]
  },
  {
    "id": "EX-012",
    "number": 12,
    "code": "#SBEM022",
    "title": "Pengolahan Nilai Rapor Siswa & Predikat Kelulusan",
    "category": "Statistik",
    "difficulty": "MENENGAH",
    "difficultyStars": 3,
    "tags": [
      "Sekolah",
      "Guru",
      "Nilai",
      "AVERAGE",
      "IF"
    ],
    "instructions": {
      "title": "Medium Level - Rekapitulasi Nilai Akademik Siswa",
      "description": "Guru kelas merekapitulasi Rata-rata Nilai 4 mata pelajaran, Predikat Kelulusan (A/B/C), dan Status Kelulusan (LULUS jika Rata-rata >= 75).",
      "points": [
        "1. Kolom G (Rata-rata Nilai): Hitung rata-rata nilai Matematika, IPA, B.Indo, B.Inggris -> =AVERAGE(C2:F2).",
        "2. Kolom H (Status Kelulusan): Jika Rata-rata >= 75 maka \"LULUS\", jika tidak \"REMIDI\" -> =IF(G2>=75, \"LULUS\", \"REMIDI\")."
      ],
      "helperTable": {
        "title": "Standar Kelulusan Kelas",
        "headers": [
          "Rata-Rata Nilai",
          "Status"
        ],
        "rows": [
          [
            ">= 75.0",
            "LULUS"
          ],
          [
            "< 75.0",
            "REMIDI"
          ]
        ]
      },
      "notice": "Gunakan fungsi AVERAGE dan IF."
    },
    "sheets": [
      {
        "id": "sheet_rapor",
        "name": "Rapor Akademik",
        "columns": [
          {
            "key": "nis",
            "label": "NIS",
            "letter": "A"
          },
          {
            "key": "nama",
            "label": "Nama Siswa",
            "letter": "B"
          },
          {
            "key": "mat",
            "label": "Matematika",
            "letter": "C"
          },
          {
            "key": "ipa",
            "label": "IPA",
            "letter": "D"
          },
          {
            "key": "indo",
            "label": "B. Indonesia",
            "letter": "E"
          },
          {
            "key": "inggris",
            "label": "B. Inggris",
            "letter": "F"
          },
          {
            "key": "rata",
            "label": "Rata-Rata",
            "letter": "G"
          },
          {
            "key": "status",
            "label": "Status Kelulusan",
            "letter": "H"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "nis": "2026-01",
              "nama": "Ahmad Fauzi Rahman",
              "mat": 88,
              "ipa": 82,
              "indo": 90,
              "inggris": 84,
              "rata": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "nis": "2026-02",
              "nama": "Citra Dewi Anggraini",
              "mat": 68,
              "ipa": 72,
              "indo": 74,
              "inggris": 70,
              "rata": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "nis": "2026-03",
              "nama": "Dimas Bagas Pratama",
              "mat": 92,
              "ipa": 95,
              "indo": 88,
              "inggris": 91,
              "rata": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "nis": "2026-04",
              "nama": "Fitria Nur Hidayati",
              "mat": 78,
              "ipa": 80,
              "indo": 85,
              "inggris": 79,
              "rata": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "rata",
            "letter": "G",
            "label": "Rata-Rata",
            "description": "AVERAGE(C2:F2)",
            "expectedRowAnswers": {
              "2": 86,
              "3": 71,
              "4": 91.5,
              "5": 80.5
            }
          },
          {
            "key": "status",
            "letter": "H",
            "label": "Status Kelulusan",
            "description": "IF(Rata>=75, \"LULUS\", \"REMIDI\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "REMIDI",
              "4": "LULUS",
              "5": "LULUS"
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Rata-Rata",
        "formula": "=AVERAGE(C2:F2)",
        "explanation": "Menghitung nilai rata-rata dari 4 mata pelajaran"
      },
      {
        "columnLabel": "Status Kelulusan",
        "formula": "=IF(G2>=75, \"LULUS\", \"REMIDI\")",
        "explanation": "Menguji apakah nilai rata-rata memenuhi KKM 75"
      }
    ]
  },
  {
    "id": "EX-013",
    "number": 13,
    "code": "#SBEH009",
    "title": "Simulasi Angsuran Kredit Rumah KPR Bank (PMT)",
    "category": "Keuangan",
    "difficulty": "MAHIR",
    "difficultyStars": 4,
    "tags": [
      "Perbankan",
      "KPR",
      "PMT",
      "Keuangan"
    ],
    "instructions": {
      "title": "Hard Level - Perhitungan Anuitas Cicilan Bulanan KPR",
      "description": "Analis kredit bank memerlukan kalkulasi Angsuran Bulanan Debitur KPR berdasarkan Plafon Pinjaman, Suku Bunga Efektif per Tahun, dan Jangka Waktu Tenor.",
      "points": [
        "1. Kolom F (Cicilan per Bulan Rp): Gunakan formula keuangan =PMT(BungaTahunan/12, TenorTahun*12, -PlafonPinjaman) -> =PMT(C2/12, D2*12, -B2).",
        "2. Kolom G (Total Pembayaran Rp): Cicilan Bulanan * (Tenor * 12) -> =F2*D2*12.",
        "3. Kolom H (Total Porsi Bunga Rp): Total Pembayaran - Plafon Pinjaman -> =G2-B2."
      ],
      "helperTable": {
        "title": "Sintaks Fungsi PMT Excel",
        "headers": [
          "Argumen",
          "Penjelasan"
        ],
        "rows": [
          [
            "Rate",
            "Bunga Tahunan / 12 bulan (C2/12)"
          ],
          [
            "Nper",
            "Jumlah Total Bulan Tenor (D2*12)"
          ],
          [
            "Pv",
            "-Plafon Pinjaman (-B2)"
          ]
        ]
      },
      "notice": "Gunakan tanda minus pada nilai plafon pinjaman di fungsi PMT agar hasil bernilai positif."
    },
    "sheets": [
      {
        "id": "sheet_kpr",
        "name": "Simulasi KPR Bank",
        "columns": [
          {
            "key": "no",
            "label": "No",
            "letter": "A"
          },
          {
            "key": "plafon",
            "label": "Plafon Pinjaman (Rp)",
            "letter": "B"
          },
          {
            "key": "bunga",
            "label": "Bunga Tahunan (%)",
            "letter": "C"
          },
          {
            "key": "tenor",
            "label": "Tenor (Tahun)",
            "letter": "D"
          },
          {
            "key": "debitur",
            "label": "Nama Debitur",
            "letter": "E"
          },
          {
            "key": "angsuran",
            "label": "Angsuran / Bulan (Rp)",
            "letter": "F"
          },
          {
            "key": "total_bayar",
            "label": "Total Pembayaran (Rp)",
            "letter": "G"
          },
          {
            "key": "bunga_total",
            "label": "Total Bunga (Rp)",
            "letter": "H"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "no": 1,
              "plafon": 500000000,
              "bunga": 0.08,
              "tenor": 15,
              "debitur": "Andi Pratama",
              "angsuran": "?",
              "total_bayar": "?",
              "bunga_total": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "plafon": 350000000,
              "bunga": 0.075,
              "tenor": 10,
              "debitur": "Citra Kirana",
              "angsuran": "?",
              "total_bayar": "?",
              "bunga_total": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "plafon": 800000000,
              "bunga": 0.085,
              "tenor": 20,
              "debitur": "Dimas Anggara",
              "angsuran": "?",
              "total_bayar": "?",
              "bunga_total": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "plafon": 250000000,
              "bunga": 0.07,
              "tenor": 5,
              "debitur": "Eka Saputra",
              "angsuran": "?",
              "total_bayar": "?",
              "bunga_total": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "angsuran",
            "letter": "F",
            "label": "Angsuran Bulanan",
            "description": "PMT(Bunga/12, Tenor*12, -Plafon)",
            "expectedRowAnswers": {
              "2": 4778260,
              "3": 4153835,
              "4": 6942621,
              "5": 4950371
            }
          },
          {
            "key": "total_bayar",
            "letter": "G",
            "label": "Total Pembayaran",
            "description": "Angsuran * Tenor * 12",
            "expectedRowAnswers": {
              "2": 860086800,
              "3": 498460200,
              "4": 1666229040,
              "5": 297022260
            }
          },
          {
            "key": "bunga_total",
            "letter": "H",
            "label": "Total Bunga",
            "description": "Total Pembayaran - Plafon",
            "expectedRowAnswers": {
              "2": 360086800,
              "3": 148460200,
              "4": 866229040,
              "5": 47022260
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Angsuran / Bulan",
        "formula": "=PMT(C2/12, D2*12, -B2)",
        "explanation": "Menghitung nilai angsuran anuitas bulanan tetap"
      },
      {
        "columnLabel": "Total Bunga",
        "formula": "=G2-B2",
        "explanation": "Menghitung total porsi bunga yang dibayarkan selama masa tenor"
      }
    ]
  },
  {
    "id": "EX-014",
    "number": 14,
    "code": "#SBEX010",
    "title": "Rekonsiliasi Mutasi Bank & Buku Kas Perusahaan",
    "category": "Kombinasi",
    "difficulty": "EXTREME",
    "difficultyStars": 5,
    "tags": [
      "Akuntansi",
      "Audit",
      "Rekonsiliasi",
      "Finance"
    ],
    "instructions": {
      "title": "Extreme Level - Audit Rekonsiliasi Selisih Kas Perusahaan",
      "description": "Bagian akuntansi keuangan melakukan audit pencocokan mutasi antara Rekening Koran Bank dan Buku Kas Internal untuk menemukan selisih.",
      "points": [
        "1. Kolom E (Selisih Rp): Nilai absolut selisih antara Mutasi Bank dan Buku Kas -> =ABS(C2-D2).",
        "2. Kolom F (Status Verifikasi): Jika Selisih = 0 \"MATCH / SESUAI\", jika tidak \"PERLU PENYESUAIAN\" -> =IF(E2=0, \"MATCH / SESUAI\", \"PERLU PENYESUAIAN\")."
      ],
      "helperTable": {
        "title": "Standar Audit Rekonsiliasi",
        "headers": [
          "Kondisi Selisih",
          "Status"
        ],
        "rows": [
          [
            "Selisih = 0",
            "MATCH / SESUAI"
          ],
          [
            "Selisih > 0",
            "PERLU PENYESUAIAN"
          ]
        ]
      },
      "notice": "Gunakan fungsi ABS untuk menghitung selisih positif dan IF untuk status audit."
    },
    "sheets": [
      {
        "id": "sheet_rekonsiliasi",
        "name": "Rekonsiliasi Kas",
        "columns": [
          {
            "key": "tgl",
            "label": "Tanggal",
            "letter": "A"
          },
          {
            "key": "ket",
            "label": "Keterangan Transaksi",
            "letter": "B"
          },
          {
            "key": "bank",
            "label": "Mutasi Bank (Rp)",
            "letter": "C"
          },
          {
            "key": "buku",
            "label": "Buku Kas (Rp)",
            "letter": "D"
          },
          {
            "key": "selisih",
            "label": "Selisih (Rp)",
            "letter": "E"
          },
          {
            "key": "status",
            "label": "Status Verifikasi",
            "letter": "F"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "tgl": "01/08/2026",
              "ket": "Setoran Tunai Omset Kasir Toko",
              "bank": 15000000,
              "buku": 15000000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "tgl": "03/08/2026",
              "ket": "Pembayaran Kliring Cek Vendor",
              "bank": 8500000,
              "buku": 8500000,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "tgl": "05/08/2026",
              "ket": "Biaya Administrasi Bank Bulanan",
              "bank": 25000,
              "buku": 0,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "tgl": "07/08/2026",
              "ket": "Pendapatan Bunga Jasa Giro",
              "bank": 180000,
              "buku": 0,
              "selisih": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "tgl": "10/08/2026",
              "ket": "Transfer Pembayaran Klien PT Jaya",
              "bank": 42000000,
              "buku": 42000000,
              "selisih": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "selisih",
            "letter": "E",
            "label": "Selisih",
            "description": "ABS(Bank - Buku)",
            "expectedRowAnswers": {
              "2": 0,
              "3": 0,
              "4": 25000,
              "5": 180000,
              "6": 0
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Verifikasi",
            "description": "IF(Selisih=0, \"MATCH / SESUAI\", \"PERLU PENYESUAIAN\")",
            "expectedRowAnswers": {
              "2": "MATCH / SESUAI",
              "3": "MATCH / SESUAI",
              "4": "PERLU PENYESUAIAN",
              "5": "PERLU PENYESUAIAN",
              "6": "MATCH / SESUAI"
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Selisih",
        "formula": "=ABS(C2-D2)",
        "explanation": "Menghitung nilai mutlak selisih mutasi antara kedua rekening"
      },
      {
        "columnLabel": "Status Verifikasi",
        "formula": "=IF(E2=0, \"MATCH / SESUAI\", \"PERLU PENYESUAIAN\")",
        "explanation": "Menguji apakah transaksi telah seimbang atau membutuhkan jurnal penyesuaian"
      }
    ]
  },
  {
    "id": "EX-015",
    "number": 15,
    "code": "#SBEM025",
    "title": "Tarif Kamar Hotel & Kalkulasi Tagihan Tamu Menginap",
    "category": "Lookup",
    "difficulty": "MENENGAH",
    "difficultyStars": 3,
    "tags": [
      "Perhotelan",
      "VLOOKUP",
      "Tagihan"
    ],
    "instructions": {
      "title": "Medium Level - Reservasi Kamar & Tagihan Hotel",
      "description": "Resepsionis hotel memerlukan penarikan Tarif Kamar per Malam dari sheet \"Master Tarif\", perhitungan Biaya Kamar (Tarif * Malam), Biaya Tambahan Extra Bed, dan Total Tagihan.",
      "points": [
        "1. Kolom D (Tarif per Malam Rp): Lookup dari sheet \"Master Tarif\" berdasarkan Tipe Kamar (kolom C) -> =VLOOKUP(C2, 'Master Tarif'!A2:B5, 2, FALSE).",
        "2. Kolom F (Biaya Kamar Rp): Tarif per Malam * Lama Malam (kolom E) -> =D2*E2.",
        "3. Kolom H (Total Tagihan Rp): Biaya Kamar + Biaya Extra Bed (kolom G) -> =F2+G2."
      ],
      "helperTable": {
        "title": "Tabel Tarif Kamar",
        "headers": [
          "Tipe Kamar",
          "Tarif per Malam"
        ],
        "rows": [
          [
            "Standard Room",
            "Rp 450.000"
          ],
          [
            "Deluxe Room",
            "Rp 750.000"
          ],
          [
            "Executive Suite",
            "Rp 1.250.000"
          ],
          [
            "Presidential Suite",
            "Rp 3.500.000"
          ]
        ]
      },
      "notice": "Gunakan sheet \"Master Tarif\" untuk rumus VLOOKUP."
    },
    "sheets": [
      {
        "id": "sheet_tamu",
        "name": "Reservasi Tamu",
        "columns": [
          {
            "key": "res_id",
            "label": "ID Booking",
            "letter": "A"
          },
          {
            "key": "tamu",
            "label": "Nama Tamu Hotel",
            "letter": "B"
          },
          {
            "key": "tipe",
            "label": "Tipe Kamar",
            "letter": "C"
          },
          {
            "key": "tarif",
            "label": "Tarif / Malam (Rp)",
            "letter": "D"
          },
          {
            "key": "malam",
            "label": "Lama (Malam)",
            "letter": "E"
          },
          {
            "key": "biaya_kamar",
            "label": "Biaya Kamar (Rp)",
            "letter": "F"
          },
          {
            "key": "extra",
            "label": "Extra Bed (Rp)",
            "letter": "G"
          },
          {
            "key": "total",
            "label": "Total Tagihan (Rp)",
            "letter": "H"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "res_id": "BK-101",
              "tamu": "Ir. Soekarno Wibowo",
              "tipe": "Deluxe Room",
              "tarif": "?",
              "malam": 3,
              "biaya_kamar": "?",
              "extra": 200000,
              "total": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "res_id": "BK-102",
              "tamu": "Dra. Megawati Santoso",
              "tipe": "Executive Suite",
              "tarif": "?",
              "malam": 2,
              "biaya_kamar": "?",
              "extra": 0,
              "total": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "res_id": "BK-103",
              "tamu": "Dr. Habibie Rahman",
              "tipe": "Presidential Suite",
              "tarif": "?",
              "malam": 4,
              "biaya_kamar": "?",
              "extra": 500000,
              "total": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "res_id": "BK-104",
              "tamu": "Kusuma Wardani, S.E.",
              "tipe": "Standard Room",
              "tarif": "?",
              "malam": 1,
              "biaya_kamar": "?",
              "extra": 0,
              "total": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "tarif",
            "letter": "D",
            "label": "Tarif per Malam",
            "description": "VLOOKUP dari Master Tarif",
            "expectedRowAnswers": {
              "2": 750000,
              "3": 1250000,
              "4": 3500000,
              "5": 450000
            }
          },
          {
            "key": "biaya_kamar",
            "letter": "F",
            "label": "Biaya Kamar",
            "description": "Tarif * Malam",
            "expectedRowAnswers": {
              "2": 2250000,
              "3": 2500000,
              "4": 14000000,
              "5": 450000
            }
          },
          {
            "key": "total",
            "letter": "H",
            "label": "Total Tagihan",
            "description": "Biaya Kamar + Extra Bed",
            "expectedRowAnswers": {
              "2": 2450000,
              "3": 2500000,
              "4": 14500000,
              "5": 450000
            }
          }
        ]
      },
      {
        "id": "sheet_master_hotel",
        "name": "Master Tarif",
        "columns": [
          {
            "key": "tipe",
            "label": "Tipe Kamar",
            "letter": "A"
          },
          {
            "key": "tarif",
            "label": "Tarif per Malam (Rp)",
            "letter": "B"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "tipe": "Standard Room",
              "tarif": 450000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "tipe": "Deluxe Room",
              "tarif": 750000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "tipe": "Executive Suite",
              "tarif": 1250000
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "tipe": "Presidential Suite",
              "tarif": 3500000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Tarif / Malam",
        "formula": "=VLOOKUP(C2, 'Master Tarif'!A2:B5, 2, FALSE)",
        "explanation": "Mengambil tarif harian dari tabel Master Tarif"
      },
      {
        "columnLabel": "Total Tagihan",
        "formula": "=F2+G2",
        "explanation": "Menjumlahkan biaya sewa kamar dengan biaya fasilitas tambahan"
      }
    ]
  }
];
