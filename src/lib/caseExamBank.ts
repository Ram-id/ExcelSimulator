import { CaseExamData } from '@/types/simulator';

export const CASE_EXAMS: CaseExamData[] = [
  {
    "id": "EX-001",
    "number": 1,
    "code": "#SBEC001",
    "title": "Championship Case \"Ujian Sekolah\" (ExcelArena.id / MEWC)",
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
      "description": "Selesaikan tantangan resmi turnamen Excel berdasarkan denah meja kelas (Sheet \"Desk Layout\") dan data nilai ujian siswa (Sheet \"Student Data\").",
      "points": [
        "Level 1: Cari nama siswa yang duduk di baris dan kolom yang ditentukan. Contoh di R1C1 adalah Gita Firmansyah. Gunakan =INDEX('Desk Layout'!A1:G11, C3, D3).",
        "Level 2: Cari total nilai siswa berdasarkan posisi meja R...C... dari sheet \"Student Data\". Contoh di R1C1 total nilai Gita = 399. Gunakan =XLOOKUP(E14, 'Student Data'!J2:J78, 'Student Data'!H2:H78).",
        "Level 3: Hitung berapa banyak siswa yang namanya diawali huruf vokal (A, E, I, O, U) pada baris/kolom tertentu.",
        "Bonus Questions: Jawab pertanyaan analisis global untuk poin tambahan turnamen."
      ],
      "helperTable": {
        "title": "Contoh Resmi Soal & Jawaban",
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
            "=XLOOKUP(E14, 'Student Data'!J2:J78, 'Student Data'!H2:H78)"
          ],
          [
            "Level 3",
            "Row=R2",
            "3",
            "Hitung vokal: Intan, Ayu, Arif"
          ]
        ]
      },
      "notice": "Gunakan sheet \"Desk Layout\" dan \"Student Data\" untuk mencari data. Tulis rumus di kolom Answer."
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
              "level": "Level 1",
              "game": "Game 6",
              "row_param": 8,
              "col_param": 2,
              "desk_param": "R8C2",
              "answer": "?",
              "points": 3,
              "hint": "Nama berawalan R dan berakhiran a"
            }
          },
          {
            "rowNumber": 9,
            "values": {
              "level": "Level 1",
              "game": "Game 7",
              "row_param": 6,
              "col_param": 7,
              "desk_param": "R6C7",
              "answer": "?",
              "points": 3,
              "hint": "Nama berawalan C dan berakhiran i"
            }
          },
          {
            "rowNumber": 10,
            "values": {
              "level": "Level 1",
              "game": "Game 8",
              "row_param": 4,
              "col_param": 4,
              "desk_param": "R4C4",
              "answer": "?",
              "points": 3,
              "hint": "Nama berawalan S dan berakhiran o"
            }
          },
          {
            "rowNumber": 11,
            "values": {
              "level": "Level 1",
              "game": "Game 9",
              "row_param": 3,
              "col_param": 5,
              "desk_param": "R3C5",
              "answer": "?",
              "points": 3,
              "hint": "Nama berawalan A dan berakhiran f"
            }
          },
          {
            "rowNumber": 12,
            "values": {
              "level": "Level 1",
              "game": "Game 10",
              "row_param": 7,
              "col_param": 2,
              "desk_param": "R7C2",
              "answer": "?",
              "points": 3,
              "hint": "Nama berawalan F dan berakhiran h"
            }
          },
          {
            "rowNumber": 13,
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
            "rowNumber": 14,
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
            "rowNumber": 15,
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
            "rowNumber": 16,
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
            "rowNumber": 17,
            "values": {
              "level": "Level 2",
              "game": "Game 19",
              "row_param": 5,
              "col_param": 2,
              "desk_param": "R5C2",
              "answer": "?",
              "points": 5,
              "hint": "Total skor siswa di R5C2"
            }
          },
          {
            "rowNumber": 18,
            "values": {
              "level": "Level 2",
              "game": "Game 20",
              "row_param": 3,
              "col_param": 1,
              "desk_param": "R3C1",
              "answer": "?",
              "points": 5,
              "hint": "Total skor siswa di R3C1"
            }
          },
          {
            "rowNumber": 19,
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
            "rowNumber": 20,
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
            "rowNumber": 21,
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
            "rowNumber": 22,
            "values": {
              "level": "Level 3",
              "game": "Game 33",
              "row_param": 3,
              "col_param": 0,
              "desk_param": "R3",
              "answer": "?",
              "points": 8,
              "hint": "Jumlah nama huruf vokal di Baris 3"
            }
          },
          {
            "rowNumber": 23,
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
          },
          {
            "rowNumber": 24,
            "values": {
              "level": "Bonus",
              "game": "Bonus 2",
              "row_param": 0,
              "col_param": 0,
              "desk_param": "Kolom",
              "answer": "?",
              "points": 70,
              "hint": "Kolom meja mana yang memiliki rata-rata nilai tertinggi? (Tulis angka kolom 1-7)"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "answer",
            "letter": "F",
            "label": "Answer (Jawaban Formula)",
            "description": "Isi formula jawaban yang sesuai dengan level soal",
            "expectedRowAnswers": {
              "3": "Ivan Pratama",
              "4": "Abdul Malik",
              "5": "Rizki Maulana",
              "6": "Roy Prasetyo",
              "7": "Aulia Rahma",
              "8": "Reza Maulana",
              "9": "Citra Anggraini",
              "10": "Susanto",
              "11": "Abdul Latif",
              "12": "Fitria Ningsih",
              "14": 375,
              "15": 385,
              "16": 430,
              "17": 430,
              "18": 415,
              "20": 0,
              "21": 0,
              "22": 2,
              "23": "Yuni Lestari",
              "24": 1
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
        "explanation": "Mengambil nama siswa dari koordinat Baris C dan Kolom D pada matriks denah meja"
      },
      {
        "columnLabel": "Level 2: Total Skor Posisi",
        "formula": "=XLOOKUP(E14, 'Student Data'!J2:J78, 'Student Data'!H2:H78)",
        "explanation": "Mencocokkan posisi meja R...C... dengan kolom posisi di sheet Student Data dan mengambil Total Skor"
      },
      {
        "columnLabel": "Level 3: Nama Huruf Vokal",
        "formula": "=SUM(COUNTIF(range, {\"A*\",\"E*\",\"I*\",\"O*\",\"U*\"}))",
        "explanation": "Menghitung nama yang dimulai dengan huruf vokal pada baris atau kolom terkait"
      }
    ]
  },
  {
    "id": "EX-002",
    "number": 2,
    "code": "#SBEX007",
    "title": "Latihan Soal Data Pegawai dan Gaji (Payroll HRD)",
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
        "2. Kolom F (Tunjangan Jabatan): Ambil dari sheet \"Tabel Tarif\" berdasarkan Golongan menggunakan =VLOOKUP(D2, 'Tabel Tarif'!A2:C5, 3, FALSE).",
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
        "columnLabel": "Tunjangan",
        "formula": "=VLOOKUP(D2, 'Tabel Tarif'!A2:C5, 3, FALSE)",
        "explanation": "Mengambil tunjangan jabatan dari Tabel Tarif"
      },
      {
        "columnLabel": "Gaji Bersih",
        "formula": "=I2 - (I2 * 0.05)",
        "explanation": "Mengurangi gaji kotor dengan potongan pajak PPh 21 5%"
      }
    ]
  },
  {
    "id": "EX-003",
    "number": 3,
    "code": "#SBEH010",
    "title": "Latihan Soal Excel Game Seri A Liga Italy",
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
    "id": "EX-004",
    "number": 4,
    "code": "#SBEM011",
    "title": "Latihan Soal Excel Packing Dus Pesanan Gudang",
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
    "id": "EX-005",
    "number": 5,
    "code": "#SBEC005",
    "title": "File Latihan Championship Excel: EVE Online (MEWC 2023)",
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
    "id": "EX-006",
    "number": 6,
    "code": "#SBEM006",
    "title": "Simulasi Angsuran Kredit Rumah KPR (Bank PMT) (Studi Kasus #6)",
    "category": "Keuangan",
    "difficulty": "MAHIR",
    "difficultyStars": 4,
    "tags": [
      "Cek Otomatis",
      "Studi Kasus",
      "Keuangan"
    ],
    "instructions": {
      "title": "MAHIR Level - Simulasi Angsuran Kredit Rumah KPR (Bank PMT)",
      "description": "Hitung cicilan per bulan menggunakan fungsi PMT.",
      "points": [
        "1. Periksa data pada tabel di bawah ini.",
        "2. Tuliskan formula pada kolom target (E) sesuai aturan yang ditentukan.",
        "3. Pastikan formula dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" untuk mengevaluasi kelulusan kasus."
      ],
      "helperTable": {
        "title": "Ketentuan Rumus",
        "headers": [
          "Target Kolom",
          "Formula Acuan"
        ],
        "rows": [
          [
            "Angsuran / Bulan (PMT)",
            "=PMT(C2/12, D2*12, -B2)"
          ]
        ]
      },
      "notice": "Tulis rumus kalkulasi pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_6",
        "name": "Simulasi KPR",
        "columns": [
          {
            "key": "deb",
            "label": "Nama Debitur",
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
            "key": "angsuran",
            "label": "Angsuran / Bulan (PMT)",
            "letter": "E"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "deb": "Andi Pratama",
              "plafon": 500000000,
              "bunga": 0.08,
              "tenor": 15,
              "angsuran": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "deb": "Citra Kirana",
              "plafon": 350000000,
              "bunga": 0.075,
              "tenor": 10,
              "angsuran": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "deb": "Dimas Anggara",
              "plafon": 800000000,
              "bunga": 0.085,
              "tenor": 20,
              "angsuran": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "deb": "Eka Saputra",
              "plafon": 250000000,
              "bunga": 0.07,
              "tenor": 5,
              "angsuran": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "angsuran",
            "letter": "E",
            "label": "Angsuran / Bulan (PMT)",
            "description": "Hitung cicilan per bulan menggunakan fungsi PMT.",
            "expectedRowAnswers": {
              "2": 4778260,
              "3": 4153835,
              "4": 6942621,
              "5": 4950371
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Angsuran / Bulan (PMT)",
        "formula": "=PMT(C2/12, D2*12, -B2)",
        "explanation": "Hitung cicilan per bulan menggunakan fungsi PMT."
      }
    ]
  },
  {
    "id": "EX-007",
    "number": 7,
    "code": "#SBEM007",
    "title": "Rekonsiliasi Bank & Buku Kas Perusahaan (Studi Kasus #7)",
    "category": "Kombinasi",
    "difficulty": "EXTREME",
    "difficultyStars": 5,
    "tags": [
      "Cek Otomatis",
      "Studi Kasus",
      "Kombinasi"
    ],
    "instructions": {
      "title": "EXTREME Level - Rekonsiliasi Bank & Buku Kas Perusahaan",
      "description": "Hitung selisih mutasi bank dan buku kas perusahaan.",
      "points": [
        "1. Periksa data pada tabel di bawah ini.",
        "2. Tuliskan formula pada kolom target (E) sesuai aturan yang ditentukan.",
        "3. Pastikan formula dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" untuk mengevaluasi kelulusan kasus."
      ],
      "helperTable": {
        "title": "Ketentuan Rumus",
        "headers": [
          "Target Kolom",
          "Formula Acuan"
        ],
        "rows": [
          [
            "Selisih (Rp)",
            "=ABS(C2-D2)"
          ]
        ]
      },
      "notice": "Tulis rumus kalkulasi pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_7",
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
            "label": "Status Audit",
            "letter": "F"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "tgl": "01/08/2026",
              "ket": "Setoran Tunai Kasir Toko",
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
              "ket": "Kliring Cek Vendor Supplier",
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
              "ket": "Pendapatan Jasa Giro Bunga",
              "bank": 180000,
              "buku": 0,
              "selisih": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "selisih",
            "letter": "E",
            "label": "Selisih (Rp)",
            "description": "Hitung selisih mutasi bank dan buku kas perusahaan.",
            "expectedRowAnswers": {
              "2": 0,
              "3": 0,
              "4": 25000,
              "5": 180000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Selisih (Rp)",
        "formula": "=ABS(C2-D2)",
        "explanation": "Hitung selisih mutasi bank dan buku kas perusahaan."
      }
    ]
  },
  {
    "id": "EX-008",
    "number": 8,
    "code": "#SBEM008",
    "title": "Pengolahan Nilai Rapor & Beasiswa Prestasi Siswa (Studi Kasus #8)",
    "category": "Logika",
    "difficulty": "MENENGAH",
    "difficultyStars": 3,
    "tags": [
      "Cek Otomatis",
      "Studi Kasus",
      "Logika"
    ],
    "instructions": {
      "title": "MENENGAH Level - Pengolahan Nilai Rapor & Beasiswa Prestasi Siswa",
      "description": "Hitung nilai akhir berbobot 30% Tugas + 30% UTS + 40% UAS.",
      "points": [
        "1. Periksa data pada tabel di bawah ini.",
        "2. Tuliskan formula pada kolom target (F) sesuai aturan yang ditentukan.",
        "3. Pastikan formula dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" untuk mengevaluasi kelulusan kasus."
      ],
      "helperTable": {
        "title": "Ketentuan Rumus",
        "headers": [
          "Target Kolom",
          "Formula Acuan"
        ],
        "rows": [
          [
            "Nilai Akhir",
            "=C2*0.3 + D2*0.3 + E2*0.4"
          ]
        ]
      },
      "notice": "Tulis rumus kalkulasi pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_8",
        "name": "Rapor Siswa",
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
            "key": "tugas",
            "label": "Nilai Tugas (30%)",
            "letter": "C"
          },
          {
            "key": "uts",
            "label": "Nilai UTS (30%)",
            "letter": "D"
          },
          {
            "key": "uas",
            "label": "Nilai UAS (40%)",
            "letter": "E"
          },
          {
            "key": "akhir",
            "label": "Nilai Akhir",
            "letter": "F"
          },
          {
            "key": "beasiswa",
            "label": "Status Beasiswa",
            "letter": "G"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "nis": "202601",
              "nama": "Fajar Nugraha",
              "tugas": 85,
              "uts": 90,
              "uas": 92,
              "akhir": "?",
              "beasiswa": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "nis": "202602",
              "nama": "Gita Larasati",
              "tugas": 75,
              "uts": 80,
              "uas": 78,
              "akhir": "?",
              "beasiswa": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "nis": "202603",
              "nama": "Hendra Gunawan",
              "tugas": 90,
              "uts": 95,
              "uas": 94,
              "akhir": "?",
              "beasiswa": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "nis": "202604",
              "nama": "Indah Permatasari",
              "tugas": 60,
              "uts": 65,
              "uas": 70,
              "akhir": "?",
              "beasiswa": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "akhir",
            "letter": "F",
            "label": "Nilai Akhir",
            "description": "Hitung nilai akhir berbobot 30% Tugas + 30% UTS + 40% UAS.",
            "expectedRowAnswers": {
              "2": 89.3,
              "3": 77.7,
              "4": 93.1,
              "5": 65.5
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Nilai Akhir",
        "formula": "=C2*0.3 + D2*0.3 + E2*0.4",
        "explanation": "Hitung nilai akhir berbobot 30% Tugas + 30% UTS + 40% UAS."
      }
    ]
  },
  {
    "id": "EX-009",
    "number": 9,
    "code": "#SBEM009",
    "title": "Simulasi Angsuran Kredit Rumah KPR (Bank PMT) (Studi Kasus #9)",
    "category": "Keuangan",
    "difficulty": "MAHIR",
    "difficultyStars": 4,
    "tags": [
      "Cek Otomatis",
      "Studi Kasus",
      "Keuangan"
    ],
    "instructions": {
      "title": "MAHIR Level - Simulasi Angsuran Kredit Rumah KPR (Bank PMT)",
      "description": "Hitung cicilan per bulan menggunakan fungsi PMT.",
      "points": [
        "1. Periksa data pada tabel di bawah ini.",
        "2. Tuliskan formula pada kolom target (E) sesuai aturan yang ditentukan.",
        "3. Pastikan formula dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" untuk mengevaluasi kelulusan kasus."
      ],
      "helperTable": {
        "title": "Ketentuan Rumus",
        "headers": [
          "Target Kolom",
          "Formula Acuan"
        ],
        "rows": [
          [
            "Angsuran / Bulan (PMT)",
            "=PMT(C2/12, D2*12, -B2)"
          ]
        ]
      },
      "notice": "Tulis rumus kalkulasi pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_9",
        "name": "Simulasi KPR",
        "columns": [
          {
            "key": "deb",
            "label": "Nama Debitur",
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
            "key": "angsuran",
            "label": "Angsuran / Bulan (PMT)",
            "letter": "E"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "deb": "Andi Pratama",
              "plafon": 500000000,
              "bunga": 0.08,
              "tenor": 15,
              "angsuran": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "deb": "Citra Kirana",
              "plafon": 350000000,
              "bunga": 0.075,
              "tenor": 10,
              "angsuran": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "deb": "Dimas Anggara",
              "plafon": 800000000,
              "bunga": 0.085,
              "tenor": 20,
              "angsuran": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "deb": "Eka Saputra",
              "plafon": 250000000,
              "bunga": 0.07,
              "tenor": 5,
              "angsuran": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "angsuran",
            "letter": "E",
            "label": "Angsuran / Bulan (PMT)",
            "description": "Hitung cicilan per bulan menggunakan fungsi PMT.",
            "expectedRowAnswers": {
              "2": 4778260,
              "3": 4153835,
              "4": 6942621,
              "5": 4950371
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Angsuran / Bulan (PMT)",
        "formula": "=PMT(C2/12, D2*12, -B2)",
        "explanation": "Hitung cicilan per bulan menggunakan fungsi PMT."
      }
    ]
  },
  {
    "id": "EX-010",
    "number": 10,
    "code": "#SBEM010",
    "title": "Rekonsiliasi Bank & Buku Kas Perusahaan (Studi Kasus #10)",
    "category": "Kombinasi",
    "difficulty": "EXTREME",
    "difficultyStars": 5,
    "tags": [
      "Cek Otomatis",
      "Studi Kasus",
      "Kombinasi"
    ],
    "instructions": {
      "title": "EXTREME Level - Rekonsiliasi Bank & Buku Kas Perusahaan",
      "description": "Hitung selisih mutasi bank dan buku kas perusahaan.",
      "points": [
        "1. Periksa data pada tabel di bawah ini.",
        "2. Tuliskan formula pada kolom target (E) sesuai aturan yang ditentukan.",
        "3. Pastikan formula dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" untuk mengevaluasi kelulusan kasus."
      ],
      "helperTable": {
        "title": "Ketentuan Rumus",
        "headers": [
          "Target Kolom",
          "Formula Acuan"
        ],
        "rows": [
          [
            "Selisih (Rp)",
            "=ABS(C2-D2)"
          ]
        ]
      },
      "notice": "Tulis rumus kalkulasi pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_10",
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
            "label": "Status Audit",
            "letter": "F"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "tgl": "01/08/2026",
              "ket": "Setoran Tunai Kasir Toko",
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
              "ket": "Kliring Cek Vendor Supplier",
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
              "ket": "Pendapatan Jasa Giro Bunga",
              "bank": 180000,
              "buku": 0,
              "selisih": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "selisih",
            "letter": "E",
            "label": "Selisih (Rp)",
            "description": "Hitung selisih mutasi bank dan buku kas perusahaan.",
            "expectedRowAnswers": {
              "2": 0,
              "3": 0,
              "4": 25000,
              "5": 180000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Selisih (Rp)",
        "formula": "=ABS(C2-D2)",
        "explanation": "Hitung selisih mutasi bank dan buku kas perusahaan."
      }
    ]
  },
  {
    "id": "EX-011",
    "number": 11,
    "code": "#SBEM011",
    "title": "Pengolahan Nilai Rapor & Beasiswa Prestasi Siswa (Studi Kasus #11)",
    "category": "Logika",
    "difficulty": "MENENGAH",
    "difficultyStars": 3,
    "tags": [
      "Cek Otomatis",
      "Studi Kasus",
      "Logika"
    ],
    "instructions": {
      "title": "MENENGAH Level - Pengolahan Nilai Rapor & Beasiswa Prestasi Siswa",
      "description": "Hitung nilai akhir berbobot 30% Tugas + 30% UTS + 40% UAS.",
      "points": [
        "1. Periksa data pada tabel di bawah ini.",
        "2. Tuliskan formula pada kolom target (F) sesuai aturan yang ditentukan.",
        "3. Pastikan formula dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" untuk mengevaluasi kelulusan kasus."
      ],
      "helperTable": {
        "title": "Ketentuan Rumus",
        "headers": [
          "Target Kolom",
          "Formula Acuan"
        ],
        "rows": [
          [
            "Nilai Akhir",
            "=C2*0.3 + D2*0.3 + E2*0.4"
          ]
        ]
      },
      "notice": "Tulis rumus kalkulasi pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_11",
        "name": "Rapor Siswa",
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
            "key": "tugas",
            "label": "Nilai Tugas (30%)",
            "letter": "C"
          },
          {
            "key": "uts",
            "label": "Nilai UTS (30%)",
            "letter": "D"
          },
          {
            "key": "uas",
            "label": "Nilai UAS (40%)",
            "letter": "E"
          },
          {
            "key": "akhir",
            "label": "Nilai Akhir",
            "letter": "F"
          },
          {
            "key": "beasiswa",
            "label": "Status Beasiswa",
            "letter": "G"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "nis": "202601",
              "nama": "Fajar Nugraha",
              "tugas": 85,
              "uts": 90,
              "uas": 92,
              "akhir": "?",
              "beasiswa": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "nis": "202602",
              "nama": "Gita Larasati",
              "tugas": 75,
              "uts": 80,
              "uas": 78,
              "akhir": "?",
              "beasiswa": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "nis": "202603",
              "nama": "Hendra Gunawan",
              "tugas": 90,
              "uts": 95,
              "uas": 94,
              "akhir": "?",
              "beasiswa": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "nis": "202604",
              "nama": "Indah Permatasari",
              "tugas": 60,
              "uts": 65,
              "uas": 70,
              "akhir": "?",
              "beasiswa": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "akhir",
            "letter": "F",
            "label": "Nilai Akhir",
            "description": "Hitung nilai akhir berbobot 30% Tugas + 30% UTS + 40% UAS.",
            "expectedRowAnswers": {
              "2": 89.3,
              "3": 77.7,
              "4": 93.1,
              "5": 65.5
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Nilai Akhir",
        "formula": "=C2*0.3 + D2*0.3 + E2*0.4",
        "explanation": "Hitung nilai akhir berbobot 30% Tugas + 30% UTS + 40% UAS."
      }
    ]
  },
  {
    "id": "EX-012",
    "number": 12,
    "code": "#SBEM012",
    "title": "Simulasi Angsuran Kredit Rumah KPR (Bank PMT) (Studi Kasus #12)",
    "category": "Keuangan",
    "difficulty": "MAHIR",
    "difficultyStars": 4,
    "tags": [
      "Cek Otomatis",
      "Studi Kasus",
      "Keuangan"
    ],
    "instructions": {
      "title": "MAHIR Level - Simulasi Angsuran Kredit Rumah KPR (Bank PMT)",
      "description": "Hitung cicilan per bulan menggunakan fungsi PMT.",
      "points": [
        "1. Periksa data pada tabel di bawah ini.",
        "2. Tuliskan formula pada kolom target (E) sesuai aturan yang ditentukan.",
        "3. Pastikan formula dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" untuk mengevaluasi kelulusan kasus."
      ],
      "helperTable": {
        "title": "Ketentuan Rumus",
        "headers": [
          "Target Kolom",
          "Formula Acuan"
        ],
        "rows": [
          [
            "Angsuran / Bulan (PMT)",
            "=PMT(C2/12, D2*12, -B2)"
          ]
        ]
      },
      "notice": "Tulis rumus kalkulasi pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_12",
        "name": "Simulasi KPR",
        "columns": [
          {
            "key": "deb",
            "label": "Nama Debitur",
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
            "key": "angsuran",
            "label": "Angsuran / Bulan (PMT)",
            "letter": "E"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "deb": "Andi Pratama",
              "plafon": 500000000,
              "bunga": 0.08,
              "tenor": 15,
              "angsuran": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "deb": "Citra Kirana",
              "plafon": 350000000,
              "bunga": 0.075,
              "tenor": 10,
              "angsuran": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "deb": "Dimas Anggara",
              "plafon": 800000000,
              "bunga": 0.085,
              "tenor": 20,
              "angsuran": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "deb": "Eka Saputra",
              "plafon": 250000000,
              "bunga": 0.07,
              "tenor": 5,
              "angsuran": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "angsuran",
            "letter": "E",
            "label": "Angsuran / Bulan (PMT)",
            "description": "Hitung cicilan per bulan menggunakan fungsi PMT.",
            "expectedRowAnswers": {
              "2": 4778260,
              "3": 4153835,
              "4": 6942621,
              "5": 4950371
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Angsuran / Bulan (PMT)",
        "formula": "=PMT(C2/12, D2*12, -B2)",
        "explanation": "Hitung cicilan per bulan menggunakan fungsi PMT."
      }
    ]
  },
  {
    "id": "EX-013",
    "number": 13,
    "code": "#SBEM013",
    "title": "Rekonsiliasi Bank & Buku Kas Perusahaan (Studi Kasus #13)",
    "category": "Kombinasi",
    "difficulty": "EXTREME",
    "difficultyStars": 5,
    "tags": [
      "Cek Otomatis",
      "Studi Kasus",
      "Kombinasi"
    ],
    "instructions": {
      "title": "EXTREME Level - Rekonsiliasi Bank & Buku Kas Perusahaan",
      "description": "Hitung selisih mutasi bank dan buku kas perusahaan.",
      "points": [
        "1. Periksa data pada tabel di bawah ini.",
        "2. Tuliskan formula pada kolom target (E) sesuai aturan yang ditentukan.",
        "3. Pastikan formula dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" untuk mengevaluasi kelulusan kasus."
      ],
      "helperTable": {
        "title": "Ketentuan Rumus",
        "headers": [
          "Target Kolom",
          "Formula Acuan"
        ],
        "rows": [
          [
            "Selisih (Rp)",
            "=ABS(C2-D2)"
          ]
        ]
      },
      "notice": "Tulis rumus kalkulasi pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_13",
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
            "label": "Status Audit",
            "letter": "F"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "tgl": "01/08/2026",
              "ket": "Setoran Tunai Kasir Toko",
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
              "ket": "Kliring Cek Vendor Supplier",
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
              "ket": "Pendapatan Jasa Giro Bunga",
              "bank": 180000,
              "buku": 0,
              "selisih": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "selisih",
            "letter": "E",
            "label": "Selisih (Rp)",
            "description": "Hitung selisih mutasi bank dan buku kas perusahaan.",
            "expectedRowAnswers": {
              "2": 0,
              "3": 0,
              "4": 25000,
              "5": 180000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Selisih (Rp)",
        "formula": "=ABS(C2-D2)",
        "explanation": "Hitung selisih mutasi bank dan buku kas perusahaan."
      }
    ]
  },
  {
    "id": "EX-014",
    "number": 14,
    "code": "#SBEM014",
    "title": "Pengolahan Nilai Rapor & Beasiswa Prestasi Siswa (Studi Kasus #14)",
    "category": "Logika",
    "difficulty": "MENENGAH",
    "difficultyStars": 3,
    "tags": [
      "Cek Otomatis",
      "Studi Kasus",
      "Logika"
    ],
    "instructions": {
      "title": "MENENGAH Level - Pengolahan Nilai Rapor & Beasiswa Prestasi Siswa",
      "description": "Hitung nilai akhir berbobot 30% Tugas + 30% UTS + 40% UAS.",
      "points": [
        "1. Periksa data pada tabel di bawah ini.",
        "2. Tuliskan formula pada kolom target (F) sesuai aturan yang ditentukan.",
        "3. Pastikan formula dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" untuk mengevaluasi kelulusan kasus."
      ],
      "helperTable": {
        "title": "Ketentuan Rumus",
        "headers": [
          "Target Kolom",
          "Formula Acuan"
        ],
        "rows": [
          [
            "Nilai Akhir",
            "=C2*0.3 + D2*0.3 + E2*0.4"
          ]
        ]
      },
      "notice": "Tulis rumus kalkulasi pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_14",
        "name": "Rapor Siswa",
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
            "key": "tugas",
            "label": "Nilai Tugas (30%)",
            "letter": "C"
          },
          {
            "key": "uts",
            "label": "Nilai UTS (30%)",
            "letter": "D"
          },
          {
            "key": "uas",
            "label": "Nilai UAS (40%)",
            "letter": "E"
          },
          {
            "key": "akhir",
            "label": "Nilai Akhir",
            "letter": "F"
          },
          {
            "key": "beasiswa",
            "label": "Status Beasiswa",
            "letter": "G"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "nis": "202601",
              "nama": "Fajar Nugraha",
              "tugas": 85,
              "uts": 90,
              "uas": 92,
              "akhir": "?",
              "beasiswa": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "nis": "202602",
              "nama": "Gita Larasati",
              "tugas": 75,
              "uts": 80,
              "uas": 78,
              "akhir": "?",
              "beasiswa": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "nis": "202603",
              "nama": "Hendra Gunawan",
              "tugas": 90,
              "uts": 95,
              "uas": 94,
              "akhir": "?",
              "beasiswa": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "nis": "202604",
              "nama": "Indah Permatasari",
              "tugas": 60,
              "uts": 65,
              "uas": 70,
              "akhir": "?",
              "beasiswa": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "akhir",
            "letter": "F",
            "label": "Nilai Akhir",
            "description": "Hitung nilai akhir berbobot 30% Tugas + 30% UTS + 40% UAS.",
            "expectedRowAnswers": {
              "2": 89.3,
              "3": 77.7,
              "4": 93.1,
              "5": 65.5
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Nilai Akhir",
        "formula": "=C2*0.3 + D2*0.3 + E2*0.4",
        "explanation": "Hitung nilai akhir berbobot 30% Tugas + 30% UTS + 40% UAS."
      }
    ]
  },
  {
    "id": "EX-015",
    "number": 15,
    "code": "#SBEM015",
    "title": "Simulasi Angsuran Kredit Rumah KPR (Bank PMT) (Studi Kasus #15)",
    "category": "Keuangan",
    "difficulty": "MAHIR",
    "difficultyStars": 4,
    "tags": [
      "Cek Otomatis",
      "Studi Kasus",
      "Keuangan"
    ],
    "instructions": {
      "title": "MAHIR Level - Simulasi Angsuran Kredit Rumah KPR (Bank PMT)",
      "description": "Hitung cicilan per bulan menggunakan fungsi PMT.",
      "points": [
        "1. Periksa data pada tabel di bawah ini.",
        "2. Tuliskan formula pada kolom target (E) sesuai aturan yang ditentukan.",
        "3. Pastikan formula dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" untuk mengevaluasi kelulusan kasus."
      ],
      "helperTable": {
        "title": "Ketentuan Rumus",
        "headers": [
          "Target Kolom",
          "Formula Acuan"
        ],
        "rows": [
          [
            "Angsuran / Bulan (PMT)",
            "=PMT(C2/12, D2*12, -B2)"
          ]
        ]
      },
      "notice": "Tulis rumus kalkulasi pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_15",
        "name": "Simulasi KPR",
        "columns": [
          {
            "key": "deb",
            "label": "Nama Debitur",
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
            "key": "angsuran",
            "label": "Angsuran / Bulan (PMT)",
            "letter": "E"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "deb": "Andi Pratama",
              "plafon": 500000000,
              "bunga": 0.08,
              "tenor": 15,
              "angsuran": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "deb": "Citra Kirana",
              "plafon": 350000000,
              "bunga": 0.075,
              "tenor": 10,
              "angsuran": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "deb": "Dimas Anggara",
              "plafon": 800000000,
              "bunga": 0.085,
              "tenor": 20,
              "angsuran": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "deb": "Eka Saputra",
              "plafon": 250000000,
              "bunga": 0.07,
              "tenor": 5,
              "angsuran": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "angsuran",
            "letter": "E",
            "label": "Angsuran / Bulan (PMT)",
            "description": "Hitung cicilan per bulan menggunakan fungsi PMT.",
            "expectedRowAnswers": {
              "2": 4778260,
              "3": 4153835,
              "4": 6942621,
              "5": 4950371
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Angsuran / Bulan (PMT)",
        "formula": "=PMT(C2/12, D2*12, -B2)",
        "explanation": "Hitung cicilan per bulan menggunakan fungsi PMT."
      }
    ]
  },
  {
    "id": "EX-016",
    "number": 16,
    "code": "#SBEM016",
    "title": "Rekonsiliasi Bank & Buku Kas Perusahaan (Studi Kasus #16)",
    "category": "Kombinasi",
    "difficulty": "EXTREME",
    "difficultyStars": 5,
    "tags": [
      "Cek Otomatis",
      "Studi Kasus",
      "Kombinasi"
    ],
    "instructions": {
      "title": "EXTREME Level - Rekonsiliasi Bank & Buku Kas Perusahaan",
      "description": "Hitung selisih mutasi bank dan buku kas perusahaan.",
      "points": [
        "1. Periksa data pada tabel di bawah ini.",
        "2. Tuliskan formula pada kolom target (E) sesuai aturan yang ditentukan.",
        "3. Pastikan formula dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" untuk mengevaluasi kelulusan kasus."
      ],
      "helperTable": {
        "title": "Ketentuan Rumus",
        "headers": [
          "Target Kolom",
          "Formula Acuan"
        ],
        "rows": [
          [
            "Selisih (Rp)",
            "=ABS(C2-D2)"
          ]
        ]
      },
      "notice": "Tulis rumus kalkulasi pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_16",
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
            "label": "Status Audit",
            "letter": "F"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "tgl": "01/08/2026",
              "ket": "Setoran Tunai Kasir Toko",
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
              "ket": "Kliring Cek Vendor Supplier",
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
              "ket": "Pendapatan Jasa Giro Bunga",
              "bank": 180000,
              "buku": 0,
              "selisih": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "selisih",
            "letter": "E",
            "label": "Selisih (Rp)",
            "description": "Hitung selisih mutasi bank dan buku kas perusahaan.",
            "expectedRowAnswers": {
              "2": 0,
              "3": 0,
              "4": 25000,
              "5": 180000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Selisih (Rp)",
        "formula": "=ABS(C2-D2)",
        "explanation": "Hitung selisih mutasi bank dan buku kas perusahaan."
      }
    ]
  },
  {
    "id": "EX-017",
    "number": 17,
    "code": "#SBEM017",
    "title": "Pengolahan Nilai Rapor & Beasiswa Prestasi Siswa (Studi Kasus #17)",
    "category": "Logika",
    "difficulty": "MENENGAH",
    "difficultyStars": 3,
    "tags": [
      "Cek Otomatis",
      "Studi Kasus",
      "Logika"
    ],
    "instructions": {
      "title": "MENENGAH Level - Pengolahan Nilai Rapor & Beasiswa Prestasi Siswa",
      "description": "Hitung nilai akhir berbobot 30% Tugas + 30% UTS + 40% UAS.",
      "points": [
        "1. Periksa data pada tabel di bawah ini.",
        "2. Tuliskan formula pada kolom target (F) sesuai aturan yang ditentukan.",
        "3. Pastikan formula dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" untuk mengevaluasi kelulusan kasus."
      ],
      "helperTable": {
        "title": "Ketentuan Rumus",
        "headers": [
          "Target Kolom",
          "Formula Acuan"
        ],
        "rows": [
          [
            "Nilai Akhir",
            "=C2*0.3 + D2*0.3 + E2*0.4"
          ]
        ]
      },
      "notice": "Tulis rumus kalkulasi pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_17",
        "name": "Rapor Siswa",
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
            "key": "tugas",
            "label": "Nilai Tugas (30%)",
            "letter": "C"
          },
          {
            "key": "uts",
            "label": "Nilai UTS (30%)",
            "letter": "D"
          },
          {
            "key": "uas",
            "label": "Nilai UAS (40%)",
            "letter": "E"
          },
          {
            "key": "akhir",
            "label": "Nilai Akhir",
            "letter": "F"
          },
          {
            "key": "beasiswa",
            "label": "Status Beasiswa",
            "letter": "G"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "nis": "202601",
              "nama": "Fajar Nugraha",
              "tugas": 85,
              "uts": 90,
              "uas": 92,
              "akhir": "?",
              "beasiswa": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "nis": "202602",
              "nama": "Gita Larasati",
              "tugas": 75,
              "uts": 80,
              "uas": 78,
              "akhir": "?",
              "beasiswa": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "nis": "202603",
              "nama": "Hendra Gunawan",
              "tugas": 90,
              "uts": 95,
              "uas": 94,
              "akhir": "?",
              "beasiswa": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "nis": "202604",
              "nama": "Indah Permatasari",
              "tugas": 60,
              "uts": 65,
              "uas": 70,
              "akhir": "?",
              "beasiswa": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "akhir",
            "letter": "F",
            "label": "Nilai Akhir",
            "description": "Hitung nilai akhir berbobot 30% Tugas + 30% UTS + 40% UAS.",
            "expectedRowAnswers": {
              "2": 89.3,
              "3": 77.7,
              "4": 93.1,
              "5": 65.5
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Nilai Akhir",
        "formula": "=C2*0.3 + D2*0.3 + E2*0.4",
        "explanation": "Hitung nilai akhir berbobot 30% Tugas + 30% UTS + 40% UAS."
      }
    ]
  },
  {
    "id": "EX-018",
    "number": 18,
    "code": "#SBEM018",
    "title": "Simulasi Angsuran Kredit Rumah KPR (Bank PMT) (Studi Kasus #18)",
    "category": "Keuangan",
    "difficulty": "MAHIR",
    "difficultyStars": 4,
    "tags": [
      "Cek Otomatis",
      "Studi Kasus",
      "Keuangan"
    ],
    "instructions": {
      "title": "MAHIR Level - Simulasi Angsuran Kredit Rumah KPR (Bank PMT)",
      "description": "Hitung cicilan per bulan menggunakan fungsi PMT.",
      "points": [
        "1. Periksa data pada tabel di bawah ini.",
        "2. Tuliskan formula pada kolom target (E) sesuai aturan yang ditentukan.",
        "3. Pastikan formula dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" untuk mengevaluasi kelulusan kasus."
      ],
      "helperTable": {
        "title": "Ketentuan Rumus",
        "headers": [
          "Target Kolom",
          "Formula Acuan"
        ],
        "rows": [
          [
            "Angsuran / Bulan (PMT)",
            "=PMT(C2/12, D2*12, -B2)"
          ]
        ]
      },
      "notice": "Tulis rumus kalkulasi pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_18",
        "name": "Simulasi KPR",
        "columns": [
          {
            "key": "deb",
            "label": "Nama Debitur",
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
            "key": "angsuran",
            "label": "Angsuran / Bulan (PMT)",
            "letter": "E"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "deb": "Andi Pratama",
              "plafon": 500000000,
              "bunga": 0.08,
              "tenor": 15,
              "angsuran": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "deb": "Citra Kirana",
              "plafon": 350000000,
              "bunga": 0.075,
              "tenor": 10,
              "angsuran": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "deb": "Dimas Anggara",
              "plafon": 800000000,
              "bunga": 0.085,
              "tenor": 20,
              "angsuran": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "deb": "Eka Saputra",
              "plafon": 250000000,
              "bunga": 0.07,
              "tenor": 5,
              "angsuran": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "angsuran",
            "letter": "E",
            "label": "Angsuran / Bulan (PMT)",
            "description": "Hitung cicilan per bulan menggunakan fungsi PMT.",
            "expectedRowAnswers": {
              "2": 4778260,
              "3": 4153835,
              "4": 6942621,
              "5": 4950371
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Angsuran / Bulan (PMT)",
        "formula": "=PMT(C2/12, D2*12, -B2)",
        "explanation": "Hitung cicilan per bulan menggunakan fungsi PMT."
      }
    ]
  },
  {
    "id": "EX-019",
    "number": 19,
    "code": "#SBEM019",
    "title": "Rekonsiliasi Bank & Buku Kas Perusahaan (Studi Kasus #19)",
    "category": "Kombinasi",
    "difficulty": "EXTREME",
    "difficultyStars": 5,
    "tags": [
      "Cek Otomatis",
      "Studi Kasus",
      "Kombinasi"
    ],
    "instructions": {
      "title": "EXTREME Level - Rekonsiliasi Bank & Buku Kas Perusahaan",
      "description": "Hitung selisih mutasi bank dan buku kas perusahaan.",
      "points": [
        "1. Periksa data pada tabel di bawah ini.",
        "2. Tuliskan formula pada kolom target (E) sesuai aturan yang ditentukan.",
        "3. Pastikan formula dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" untuk mengevaluasi kelulusan kasus."
      ],
      "helperTable": {
        "title": "Ketentuan Rumus",
        "headers": [
          "Target Kolom",
          "Formula Acuan"
        ],
        "rows": [
          [
            "Selisih (Rp)",
            "=ABS(C2-D2)"
          ]
        ]
      },
      "notice": "Tulis rumus kalkulasi pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_19",
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
            "label": "Status Audit",
            "letter": "F"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "tgl": "01/08/2026",
              "ket": "Setoran Tunai Kasir Toko",
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
              "ket": "Kliring Cek Vendor Supplier",
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
              "ket": "Pendapatan Jasa Giro Bunga",
              "bank": 180000,
              "buku": 0,
              "selisih": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "selisih",
            "letter": "E",
            "label": "Selisih (Rp)",
            "description": "Hitung selisih mutasi bank dan buku kas perusahaan.",
            "expectedRowAnswers": {
              "2": 0,
              "3": 0,
              "4": 25000,
              "5": 180000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Selisih (Rp)",
        "formula": "=ABS(C2-D2)",
        "explanation": "Hitung selisih mutasi bank dan buku kas perusahaan."
      }
    ]
  },
  {
    "id": "EX-020",
    "number": 20,
    "code": "#SBEM020",
    "title": "Pengolahan Nilai Rapor & Beasiswa Prestasi Siswa (Studi Kasus #20)",
    "category": "Logika",
    "difficulty": "MENENGAH",
    "difficultyStars": 3,
    "tags": [
      "Cek Otomatis",
      "Studi Kasus",
      "Logika"
    ],
    "instructions": {
      "title": "MENENGAH Level - Pengolahan Nilai Rapor & Beasiswa Prestasi Siswa",
      "description": "Hitung nilai akhir berbobot 30% Tugas + 30% UTS + 40% UAS.",
      "points": [
        "1. Periksa data pada tabel di bawah ini.",
        "2. Tuliskan formula pada kolom target (F) sesuai aturan yang ditentukan.",
        "3. Pastikan formula dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" untuk mengevaluasi kelulusan kasus."
      ],
      "helperTable": {
        "title": "Ketentuan Rumus",
        "headers": [
          "Target Kolom",
          "Formula Acuan"
        ],
        "rows": [
          [
            "Nilai Akhir",
            "=C2*0.3 + D2*0.3 + E2*0.4"
          ]
        ]
      },
      "notice": "Tulis rumus kalkulasi pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_20",
        "name": "Rapor Siswa",
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
            "key": "tugas",
            "label": "Nilai Tugas (30%)",
            "letter": "C"
          },
          {
            "key": "uts",
            "label": "Nilai UTS (30%)",
            "letter": "D"
          },
          {
            "key": "uas",
            "label": "Nilai UAS (40%)",
            "letter": "E"
          },
          {
            "key": "akhir",
            "label": "Nilai Akhir",
            "letter": "F"
          },
          {
            "key": "beasiswa",
            "label": "Status Beasiswa",
            "letter": "G"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "nis": "202601",
              "nama": "Fajar Nugraha",
              "tugas": 85,
              "uts": 90,
              "uas": 92,
              "akhir": "?",
              "beasiswa": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "nis": "202602",
              "nama": "Gita Larasati",
              "tugas": 75,
              "uts": 80,
              "uas": 78,
              "akhir": "?",
              "beasiswa": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "nis": "202603",
              "nama": "Hendra Gunawan",
              "tugas": 90,
              "uts": 95,
              "uas": 94,
              "akhir": "?",
              "beasiswa": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "nis": "202604",
              "nama": "Indah Permatasari",
              "tugas": 60,
              "uts": 65,
              "uas": 70,
              "akhir": "?",
              "beasiswa": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "akhir",
            "letter": "F",
            "label": "Nilai Akhir",
            "description": "Hitung nilai akhir berbobot 30% Tugas + 30% UTS + 40% UAS.",
            "expectedRowAnswers": {
              "2": 89.3,
              "3": 77.7,
              "4": 93.1,
              "5": 65.5
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Nilai Akhir",
        "formula": "=C2*0.3 + D2*0.3 + E2*0.4",
        "explanation": "Hitung nilai akhir berbobot 30% Tugas + 30% UTS + 40% UAS."
      }
    ]
  },
  {
    "id": "EX-021",
    "number": 21,
    "code": "#SBEM021",
    "title": "Simulasi Angsuran Kredit Rumah KPR (Bank PMT) (Studi Kasus #21)",
    "category": "Keuangan",
    "difficulty": "MAHIR",
    "difficultyStars": 4,
    "tags": [
      "Cek Otomatis",
      "Studi Kasus",
      "Keuangan"
    ],
    "instructions": {
      "title": "MAHIR Level - Simulasi Angsuran Kredit Rumah KPR (Bank PMT)",
      "description": "Hitung cicilan per bulan menggunakan fungsi PMT.",
      "points": [
        "1. Periksa data pada tabel di bawah ini.",
        "2. Tuliskan formula pada kolom target (E) sesuai aturan yang ditentukan.",
        "3. Pastikan formula dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" untuk mengevaluasi kelulusan kasus."
      ],
      "helperTable": {
        "title": "Ketentuan Rumus",
        "headers": [
          "Target Kolom",
          "Formula Acuan"
        ],
        "rows": [
          [
            "Angsuran / Bulan (PMT)",
            "=PMT(C2/12, D2*12, -B2)"
          ]
        ]
      },
      "notice": "Tulis rumus kalkulasi pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_21",
        "name": "Simulasi KPR",
        "columns": [
          {
            "key": "deb",
            "label": "Nama Debitur",
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
            "key": "angsuran",
            "label": "Angsuran / Bulan (PMT)",
            "letter": "E"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "deb": "Andi Pratama",
              "plafon": 500000000,
              "bunga": 0.08,
              "tenor": 15,
              "angsuran": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "deb": "Citra Kirana",
              "plafon": 350000000,
              "bunga": 0.075,
              "tenor": 10,
              "angsuran": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "deb": "Dimas Anggara",
              "plafon": 800000000,
              "bunga": 0.085,
              "tenor": 20,
              "angsuran": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "deb": "Eka Saputra",
              "plafon": 250000000,
              "bunga": 0.07,
              "tenor": 5,
              "angsuran": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "angsuran",
            "letter": "E",
            "label": "Angsuran / Bulan (PMT)",
            "description": "Hitung cicilan per bulan menggunakan fungsi PMT.",
            "expectedRowAnswers": {
              "2": 4778260,
              "3": 4153835,
              "4": 6942621,
              "5": 4950371
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Angsuran / Bulan (PMT)",
        "formula": "=PMT(C2/12, D2*12, -B2)",
        "explanation": "Hitung cicilan per bulan menggunakan fungsi PMT."
      }
    ]
  },
  {
    "id": "EX-022",
    "number": 22,
    "code": "#SBEM022",
    "title": "Rekonsiliasi Bank & Buku Kas Perusahaan (Studi Kasus #22)",
    "category": "Kombinasi",
    "difficulty": "EXTREME",
    "difficultyStars": 5,
    "tags": [
      "Cek Otomatis",
      "Studi Kasus",
      "Kombinasi"
    ],
    "instructions": {
      "title": "EXTREME Level - Rekonsiliasi Bank & Buku Kas Perusahaan",
      "description": "Hitung selisih mutasi bank dan buku kas perusahaan.",
      "points": [
        "1. Periksa data pada tabel di bawah ini.",
        "2. Tuliskan formula pada kolom target (E) sesuai aturan yang ditentukan.",
        "3. Pastikan formula dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" untuk mengevaluasi kelulusan kasus."
      ],
      "helperTable": {
        "title": "Ketentuan Rumus",
        "headers": [
          "Target Kolom",
          "Formula Acuan"
        ],
        "rows": [
          [
            "Selisih (Rp)",
            "=ABS(C2-D2)"
          ]
        ]
      },
      "notice": "Tulis rumus kalkulasi pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_22",
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
            "label": "Status Audit",
            "letter": "F"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "tgl": "01/08/2026",
              "ket": "Setoran Tunai Kasir Toko",
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
              "ket": "Kliring Cek Vendor Supplier",
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
              "ket": "Pendapatan Jasa Giro Bunga",
              "bank": 180000,
              "buku": 0,
              "selisih": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "selisih",
            "letter": "E",
            "label": "Selisih (Rp)",
            "description": "Hitung selisih mutasi bank dan buku kas perusahaan.",
            "expectedRowAnswers": {
              "2": 0,
              "3": 0,
              "4": 25000,
              "5": 180000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Selisih (Rp)",
        "formula": "=ABS(C2-D2)",
        "explanation": "Hitung selisih mutasi bank dan buku kas perusahaan."
      }
    ]
  },
  {
    "id": "EX-023",
    "number": 23,
    "code": "#SBEM023",
    "title": "Pengolahan Nilai Rapor & Beasiswa Prestasi Siswa (Studi Kasus #23)",
    "category": "Logika",
    "difficulty": "MENENGAH",
    "difficultyStars": 3,
    "tags": [
      "Cek Otomatis",
      "Studi Kasus",
      "Logika"
    ],
    "instructions": {
      "title": "MENENGAH Level - Pengolahan Nilai Rapor & Beasiswa Prestasi Siswa",
      "description": "Hitung nilai akhir berbobot 30% Tugas + 30% UTS + 40% UAS.",
      "points": [
        "1. Periksa data pada tabel di bawah ini.",
        "2. Tuliskan formula pada kolom target (F) sesuai aturan yang ditentukan.",
        "3. Pastikan formula dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" untuk mengevaluasi kelulusan kasus."
      ],
      "helperTable": {
        "title": "Ketentuan Rumus",
        "headers": [
          "Target Kolom",
          "Formula Acuan"
        ],
        "rows": [
          [
            "Nilai Akhir",
            "=C2*0.3 + D2*0.3 + E2*0.4"
          ]
        ]
      },
      "notice": "Tulis rumus kalkulasi pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_23",
        "name": "Rapor Siswa",
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
            "key": "tugas",
            "label": "Nilai Tugas (30%)",
            "letter": "C"
          },
          {
            "key": "uts",
            "label": "Nilai UTS (30%)",
            "letter": "D"
          },
          {
            "key": "uas",
            "label": "Nilai UAS (40%)",
            "letter": "E"
          },
          {
            "key": "akhir",
            "label": "Nilai Akhir",
            "letter": "F"
          },
          {
            "key": "beasiswa",
            "label": "Status Beasiswa",
            "letter": "G"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "nis": "202601",
              "nama": "Fajar Nugraha",
              "tugas": 85,
              "uts": 90,
              "uas": 92,
              "akhir": "?",
              "beasiswa": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "nis": "202602",
              "nama": "Gita Larasati",
              "tugas": 75,
              "uts": 80,
              "uas": 78,
              "akhir": "?",
              "beasiswa": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "nis": "202603",
              "nama": "Hendra Gunawan",
              "tugas": 90,
              "uts": 95,
              "uas": 94,
              "akhir": "?",
              "beasiswa": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "nis": "202604",
              "nama": "Indah Permatasari",
              "tugas": 60,
              "uts": 65,
              "uas": 70,
              "akhir": "?",
              "beasiswa": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "akhir",
            "letter": "F",
            "label": "Nilai Akhir",
            "description": "Hitung nilai akhir berbobot 30% Tugas + 30% UTS + 40% UAS.",
            "expectedRowAnswers": {
              "2": 89.3,
              "3": 77.7,
              "4": 93.1,
              "5": 65.5
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Nilai Akhir",
        "formula": "=C2*0.3 + D2*0.3 + E2*0.4",
        "explanation": "Hitung nilai akhir berbobot 30% Tugas + 30% UTS + 40% UAS."
      }
    ]
  },
  {
    "id": "EX-024",
    "number": 24,
    "code": "#SBEM024",
    "title": "Simulasi Angsuran Kredit Rumah KPR (Bank PMT) (Studi Kasus #24)",
    "category": "Keuangan",
    "difficulty": "MAHIR",
    "difficultyStars": 4,
    "tags": [
      "Cek Otomatis",
      "Studi Kasus",
      "Keuangan"
    ],
    "instructions": {
      "title": "MAHIR Level - Simulasi Angsuran Kredit Rumah KPR (Bank PMT)",
      "description": "Hitung cicilan per bulan menggunakan fungsi PMT.",
      "points": [
        "1. Periksa data pada tabel di bawah ini.",
        "2. Tuliskan formula pada kolom target (E) sesuai aturan yang ditentukan.",
        "3. Pastikan formula dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" untuk mengevaluasi kelulusan kasus."
      ],
      "helperTable": {
        "title": "Ketentuan Rumus",
        "headers": [
          "Target Kolom",
          "Formula Acuan"
        ],
        "rows": [
          [
            "Angsuran / Bulan (PMT)",
            "=PMT(C2/12, D2*12, -B2)"
          ]
        ]
      },
      "notice": "Tulis rumus kalkulasi pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_24",
        "name": "Simulasi KPR",
        "columns": [
          {
            "key": "deb",
            "label": "Nama Debitur",
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
            "key": "angsuran",
            "label": "Angsuran / Bulan (PMT)",
            "letter": "E"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "deb": "Andi Pratama",
              "plafon": 500000000,
              "bunga": 0.08,
              "tenor": 15,
              "angsuran": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "deb": "Citra Kirana",
              "plafon": 350000000,
              "bunga": 0.075,
              "tenor": 10,
              "angsuran": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "deb": "Dimas Anggara",
              "plafon": 800000000,
              "bunga": 0.085,
              "tenor": 20,
              "angsuran": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "deb": "Eka Saputra",
              "plafon": 250000000,
              "bunga": 0.07,
              "tenor": 5,
              "angsuran": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "angsuran",
            "letter": "E",
            "label": "Angsuran / Bulan (PMT)",
            "description": "Hitung cicilan per bulan menggunakan fungsi PMT.",
            "expectedRowAnswers": {
              "2": 4778260,
              "3": 4153835,
              "4": 6942621,
              "5": 4950371
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Angsuran / Bulan (PMT)",
        "formula": "=PMT(C2/12, D2*12, -B2)",
        "explanation": "Hitung cicilan per bulan menggunakan fungsi PMT."
      }
    ]
  },
  {
    "id": "EX-025",
    "number": 25,
    "code": "#SBEM025",
    "title": "Rekonsiliasi Bank & Buku Kas Perusahaan (Studi Kasus #25)",
    "category": "Kombinasi",
    "difficulty": "EXTREME",
    "difficultyStars": 5,
    "tags": [
      "Cek Otomatis",
      "Studi Kasus",
      "Kombinasi"
    ],
    "instructions": {
      "title": "EXTREME Level - Rekonsiliasi Bank & Buku Kas Perusahaan",
      "description": "Hitung selisih mutasi bank dan buku kas perusahaan.",
      "points": [
        "1. Periksa data pada tabel di bawah ini.",
        "2. Tuliskan formula pada kolom target (E) sesuai aturan yang ditentukan.",
        "3. Pastikan formula dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" untuk mengevaluasi kelulusan kasus."
      ],
      "helperTable": {
        "title": "Ketentuan Rumus",
        "headers": [
          "Target Kolom",
          "Formula Acuan"
        ],
        "rows": [
          [
            "Selisih (Rp)",
            "=ABS(C2-D2)"
          ]
        ]
      },
      "notice": "Tulis rumus kalkulasi pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_25",
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
            "label": "Status Audit",
            "letter": "F"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "tgl": "01/08/2026",
              "ket": "Setoran Tunai Kasir Toko",
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
              "ket": "Kliring Cek Vendor Supplier",
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
              "ket": "Pendapatan Jasa Giro Bunga",
              "bank": 180000,
              "buku": 0,
              "selisih": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "selisih",
            "letter": "E",
            "label": "Selisih (Rp)",
            "description": "Hitung selisih mutasi bank dan buku kas perusahaan.",
            "expectedRowAnswers": {
              "2": 0,
              "3": 0,
              "4": 25000,
              "5": 180000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Selisih (Rp)",
        "formula": "=ABS(C2-D2)",
        "explanation": "Hitung selisih mutasi bank dan buku kas perusahaan."
      }
    ]
  },
  {
    "id": "EX-026",
    "number": 26,
    "code": "#SBEM026",
    "title": "Pengolahan Nilai Rapor & Beasiswa Prestasi Siswa (Studi Kasus #26)",
    "category": "Logika",
    "difficulty": "MENENGAH",
    "difficultyStars": 3,
    "tags": [
      "Cek Otomatis",
      "Studi Kasus",
      "Logika"
    ],
    "instructions": {
      "title": "MENENGAH Level - Pengolahan Nilai Rapor & Beasiswa Prestasi Siswa",
      "description": "Hitung nilai akhir berbobot 30% Tugas + 30% UTS + 40% UAS.",
      "points": [
        "1. Periksa data pada tabel di bawah ini.",
        "2. Tuliskan formula pada kolom target (F) sesuai aturan yang ditentukan.",
        "3. Pastikan formula dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" untuk mengevaluasi kelulusan kasus."
      ],
      "helperTable": {
        "title": "Ketentuan Rumus",
        "headers": [
          "Target Kolom",
          "Formula Acuan"
        ],
        "rows": [
          [
            "Nilai Akhir",
            "=C2*0.3 + D2*0.3 + E2*0.4"
          ]
        ]
      },
      "notice": "Tulis rumus kalkulasi pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_26",
        "name": "Rapor Siswa",
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
            "key": "tugas",
            "label": "Nilai Tugas (30%)",
            "letter": "C"
          },
          {
            "key": "uts",
            "label": "Nilai UTS (30%)",
            "letter": "D"
          },
          {
            "key": "uas",
            "label": "Nilai UAS (40%)",
            "letter": "E"
          },
          {
            "key": "akhir",
            "label": "Nilai Akhir",
            "letter": "F"
          },
          {
            "key": "beasiswa",
            "label": "Status Beasiswa",
            "letter": "G"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "nis": "202601",
              "nama": "Fajar Nugraha",
              "tugas": 85,
              "uts": 90,
              "uas": 92,
              "akhir": "?",
              "beasiswa": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "nis": "202602",
              "nama": "Gita Larasati",
              "tugas": 75,
              "uts": 80,
              "uas": 78,
              "akhir": "?",
              "beasiswa": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "nis": "202603",
              "nama": "Hendra Gunawan",
              "tugas": 90,
              "uts": 95,
              "uas": 94,
              "akhir": "?",
              "beasiswa": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "nis": "202604",
              "nama": "Indah Permatasari",
              "tugas": 60,
              "uts": 65,
              "uas": 70,
              "akhir": "?",
              "beasiswa": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "akhir",
            "letter": "F",
            "label": "Nilai Akhir",
            "description": "Hitung nilai akhir berbobot 30% Tugas + 30% UTS + 40% UAS.",
            "expectedRowAnswers": {
              "2": 89.3,
              "3": 77.7,
              "4": 93.1,
              "5": 65.5
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Nilai Akhir",
        "formula": "=C2*0.3 + D2*0.3 + E2*0.4",
        "explanation": "Hitung nilai akhir berbobot 30% Tugas + 30% UTS + 40% UAS."
      }
    ]
  },
  {
    "id": "EX-027",
    "number": 27,
    "code": "#SBEM027",
    "title": "Simulasi Angsuran Kredit Rumah KPR (Bank PMT) (Studi Kasus #27)",
    "category": "Keuangan",
    "difficulty": "MAHIR",
    "difficultyStars": 4,
    "tags": [
      "Cek Otomatis",
      "Studi Kasus",
      "Keuangan"
    ],
    "instructions": {
      "title": "MAHIR Level - Simulasi Angsuran Kredit Rumah KPR (Bank PMT)",
      "description": "Hitung cicilan per bulan menggunakan fungsi PMT.",
      "points": [
        "1. Periksa data pada tabel di bawah ini.",
        "2. Tuliskan formula pada kolom target (E) sesuai aturan yang ditentukan.",
        "3. Pastikan formula dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" untuk mengevaluasi kelulusan kasus."
      ],
      "helperTable": {
        "title": "Ketentuan Rumus",
        "headers": [
          "Target Kolom",
          "Formula Acuan"
        ],
        "rows": [
          [
            "Angsuran / Bulan (PMT)",
            "=PMT(C2/12, D2*12, -B2)"
          ]
        ]
      },
      "notice": "Tulis rumus kalkulasi pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_27",
        "name": "Simulasi KPR",
        "columns": [
          {
            "key": "deb",
            "label": "Nama Debitur",
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
            "key": "angsuran",
            "label": "Angsuran / Bulan (PMT)",
            "letter": "E"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "deb": "Andi Pratama",
              "plafon": 500000000,
              "bunga": 0.08,
              "tenor": 15,
              "angsuran": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "deb": "Citra Kirana",
              "plafon": 350000000,
              "bunga": 0.075,
              "tenor": 10,
              "angsuran": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "deb": "Dimas Anggara",
              "plafon": 800000000,
              "bunga": 0.085,
              "tenor": 20,
              "angsuran": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "deb": "Eka Saputra",
              "plafon": 250000000,
              "bunga": 0.07,
              "tenor": 5,
              "angsuran": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "angsuran",
            "letter": "E",
            "label": "Angsuran / Bulan (PMT)",
            "description": "Hitung cicilan per bulan menggunakan fungsi PMT.",
            "expectedRowAnswers": {
              "2": 4778260,
              "3": 4153835,
              "4": 6942621,
              "5": 4950371
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Angsuran / Bulan (PMT)",
        "formula": "=PMT(C2/12, D2*12, -B2)",
        "explanation": "Hitung cicilan per bulan menggunakan fungsi PMT."
      }
    ]
  },
  {
    "id": "EX-028",
    "number": 28,
    "code": "#SBEM028",
    "title": "Rekonsiliasi Bank & Buku Kas Perusahaan (Studi Kasus #28)",
    "category": "Kombinasi",
    "difficulty": "EXTREME",
    "difficultyStars": 5,
    "tags": [
      "Cek Otomatis",
      "Studi Kasus",
      "Kombinasi"
    ],
    "instructions": {
      "title": "EXTREME Level - Rekonsiliasi Bank & Buku Kas Perusahaan",
      "description": "Hitung selisih mutasi bank dan buku kas perusahaan.",
      "points": [
        "1. Periksa data pada tabel di bawah ini.",
        "2. Tuliskan formula pada kolom target (E) sesuai aturan yang ditentukan.",
        "3. Pastikan formula dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" untuk mengevaluasi kelulusan kasus."
      ],
      "helperTable": {
        "title": "Ketentuan Rumus",
        "headers": [
          "Target Kolom",
          "Formula Acuan"
        ],
        "rows": [
          [
            "Selisih (Rp)",
            "=ABS(C2-D2)"
          ]
        ]
      },
      "notice": "Tulis rumus kalkulasi pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_28",
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
            "label": "Status Audit",
            "letter": "F"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "tgl": "01/08/2026",
              "ket": "Setoran Tunai Kasir Toko",
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
              "ket": "Kliring Cek Vendor Supplier",
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
              "ket": "Pendapatan Jasa Giro Bunga",
              "bank": 180000,
              "buku": 0,
              "selisih": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "selisih",
            "letter": "E",
            "label": "Selisih (Rp)",
            "description": "Hitung selisih mutasi bank dan buku kas perusahaan.",
            "expectedRowAnswers": {
              "2": 0,
              "3": 0,
              "4": 25000,
              "5": 180000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Selisih (Rp)",
        "formula": "=ABS(C2-D2)",
        "explanation": "Hitung selisih mutasi bank dan buku kas perusahaan."
      }
    ]
  },
  {
    "id": "EX-029",
    "number": 29,
    "code": "#SBEM029",
    "title": "Pengolahan Nilai Rapor & Beasiswa Prestasi Siswa (Studi Kasus #29)",
    "category": "Logika",
    "difficulty": "MENENGAH",
    "difficultyStars": 3,
    "tags": [
      "Cek Otomatis",
      "Studi Kasus",
      "Logika"
    ],
    "instructions": {
      "title": "MENENGAH Level - Pengolahan Nilai Rapor & Beasiswa Prestasi Siswa",
      "description": "Hitung nilai akhir berbobot 30% Tugas + 30% UTS + 40% UAS.",
      "points": [
        "1. Periksa data pada tabel di bawah ini.",
        "2. Tuliskan formula pada kolom target (F) sesuai aturan yang ditentukan.",
        "3. Pastikan formula dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" untuk mengevaluasi kelulusan kasus."
      ],
      "helperTable": {
        "title": "Ketentuan Rumus",
        "headers": [
          "Target Kolom",
          "Formula Acuan"
        ],
        "rows": [
          [
            "Nilai Akhir",
            "=C2*0.3 + D2*0.3 + E2*0.4"
          ]
        ]
      },
      "notice": "Tulis rumus kalkulasi pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_29",
        "name": "Rapor Siswa",
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
            "key": "tugas",
            "label": "Nilai Tugas (30%)",
            "letter": "C"
          },
          {
            "key": "uts",
            "label": "Nilai UTS (30%)",
            "letter": "D"
          },
          {
            "key": "uas",
            "label": "Nilai UAS (40%)",
            "letter": "E"
          },
          {
            "key": "akhir",
            "label": "Nilai Akhir",
            "letter": "F"
          },
          {
            "key": "beasiswa",
            "label": "Status Beasiswa",
            "letter": "G"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "nis": "202601",
              "nama": "Fajar Nugraha",
              "tugas": 85,
              "uts": 90,
              "uas": 92,
              "akhir": "?",
              "beasiswa": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "nis": "202602",
              "nama": "Gita Larasati",
              "tugas": 75,
              "uts": 80,
              "uas": 78,
              "akhir": "?",
              "beasiswa": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "nis": "202603",
              "nama": "Hendra Gunawan",
              "tugas": 90,
              "uts": 95,
              "uas": 94,
              "akhir": "?",
              "beasiswa": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "nis": "202604",
              "nama": "Indah Permatasari",
              "tugas": 60,
              "uts": 65,
              "uas": 70,
              "akhir": "?",
              "beasiswa": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "akhir",
            "letter": "F",
            "label": "Nilai Akhir",
            "description": "Hitung nilai akhir berbobot 30% Tugas + 30% UTS + 40% UAS.",
            "expectedRowAnswers": {
              "2": 89.3,
              "3": 77.7,
              "4": 93.1,
              "5": 65.5
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Nilai Akhir",
        "formula": "=C2*0.3 + D2*0.3 + E2*0.4",
        "explanation": "Hitung nilai akhir berbobot 30% Tugas + 30% UTS + 40% UAS."
      }
    ]
  },
  {
    "id": "EX-030",
    "number": 30,
    "code": "#SBEM030",
    "title": "Simulasi Angsuran Kredit Rumah KPR (Bank PMT) (Studi Kasus #30)",
    "category": "Keuangan",
    "difficulty": "MAHIR",
    "difficultyStars": 4,
    "tags": [
      "Cek Otomatis",
      "Studi Kasus",
      "Keuangan"
    ],
    "instructions": {
      "title": "MAHIR Level - Simulasi Angsuran Kredit Rumah KPR (Bank PMT)",
      "description": "Hitung cicilan per bulan menggunakan fungsi PMT.",
      "points": [
        "1. Periksa data pada tabel di bawah ini.",
        "2. Tuliskan formula pada kolom target (E) sesuai aturan yang ditentukan.",
        "3. Pastikan formula dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" untuk mengevaluasi kelulusan kasus."
      ],
      "helperTable": {
        "title": "Ketentuan Rumus",
        "headers": [
          "Target Kolom",
          "Formula Acuan"
        ],
        "rows": [
          [
            "Angsuran / Bulan (PMT)",
            "=PMT(C2/12, D2*12, -B2)"
          ]
        ]
      },
      "notice": "Tulis rumus kalkulasi pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_30",
        "name": "Simulasi KPR",
        "columns": [
          {
            "key": "deb",
            "label": "Nama Debitur",
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
            "key": "angsuran",
            "label": "Angsuran / Bulan (PMT)",
            "letter": "E"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "deb": "Andi Pratama",
              "plafon": 500000000,
              "bunga": 0.08,
              "tenor": 15,
              "angsuran": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "deb": "Citra Kirana",
              "plafon": 350000000,
              "bunga": 0.075,
              "tenor": 10,
              "angsuran": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "deb": "Dimas Anggara",
              "plafon": 800000000,
              "bunga": 0.085,
              "tenor": 20,
              "angsuran": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "deb": "Eka Saputra",
              "plafon": 250000000,
              "bunga": 0.07,
              "tenor": 5,
              "angsuran": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "angsuran",
            "letter": "E",
            "label": "Angsuran / Bulan (PMT)",
            "description": "Hitung cicilan per bulan menggunakan fungsi PMT.",
            "expectedRowAnswers": {
              "2": 4778260,
              "3": 4153835,
              "4": 6942621,
              "5": 4950371
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Angsuran / Bulan (PMT)",
        "formula": "=PMT(C2/12, D2*12, -B2)",
        "explanation": "Hitung cicilan per bulan menggunakan fungsi PMT."
      }
    ]
  },
  {
    "id": "EX-031",
    "number": 31,
    "code": "#SBEM031",
    "title": "Rekonsiliasi Bank & Buku Kas Perusahaan (Studi Kasus #31)",
    "category": "Kombinasi",
    "difficulty": "EXTREME",
    "difficultyStars": 5,
    "tags": [
      "Cek Otomatis",
      "Studi Kasus",
      "Kombinasi"
    ],
    "instructions": {
      "title": "EXTREME Level - Rekonsiliasi Bank & Buku Kas Perusahaan",
      "description": "Hitung selisih mutasi bank dan buku kas perusahaan.",
      "points": [
        "1. Periksa data pada tabel di bawah ini.",
        "2. Tuliskan formula pada kolom target (E) sesuai aturan yang ditentukan.",
        "3. Pastikan formula dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" untuk mengevaluasi kelulusan kasus."
      ],
      "helperTable": {
        "title": "Ketentuan Rumus",
        "headers": [
          "Target Kolom",
          "Formula Acuan"
        ],
        "rows": [
          [
            "Selisih (Rp)",
            "=ABS(C2-D2)"
          ]
        ]
      },
      "notice": "Tulis rumus kalkulasi pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_31",
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
            "label": "Status Audit",
            "letter": "F"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "tgl": "01/08/2026",
              "ket": "Setoran Tunai Kasir Toko",
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
              "ket": "Kliring Cek Vendor Supplier",
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
              "ket": "Pendapatan Jasa Giro Bunga",
              "bank": 180000,
              "buku": 0,
              "selisih": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "selisih",
            "letter": "E",
            "label": "Selisih (Rp)",
            "description": "Hitung selisih mutasi bank dan buku kas perusahaan.",
            "expectedRowAnswers": {
              "2": 0,
              "3": 0,
              "4": 25000,
              "5": 180000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Selisih (Rp)",
        "formula": "=ABS(C2-D2)",
        "explanation": "Hitung selisih mutasi bank dan buku kas perusahaan."
      }
    ]
  },
  {
    "id": "EX-032",
    "number": 32,
    "code": "#SBEM032",
    "title": "Pengolahan Nilai Rapor & Beasiswa Prestasi Siswa (Studi Kasus #32)",
    "category": "Logika",
    "difficulty": "MENENGAH",
    "difficultyStars": 3,
    "tags": [
      "Cek Otomatis",
      "Studi Kasus",
      "Logika"
    ],
    "instructions": {
      "title": "MENENGAH Level - Pengolahan Nilai Rapor & Beasiswa Prestasi Siswa",
      "description": "Hitung nilai akhir berbobot 30% Tugas + 30% UTS + 40% UAS.",
      "points": [
        "1. Periksa data pada tabel di bawah ini.",
        "2. Tuliskan formula pada kolom target (F) sesuai aturan yang ditentukan.",
        "3. Pastikan formula dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" untuk mengevaluasi kelulusan kasus."
      ],
      "helperTable": {
        "title": "Ketentuan Rumus",
        "headers": [
          "Target Kolom",
          "Formula Acuan"
        ],
        "rows": [
          [
            "Nilai Akhir",
            "=C2*0.3 + D2*0.3 + E2*0.4"
          ]
        ]
      },
      "notice": "Tulis rumus kalkulasi pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_32",
        "name": "Rapor Siswa",
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
            "key": "tugas",
            "label": "Nilai Tugas (30%)",
            "letter": "C"
          },
          {
            "key": "uts",
            "label": "Nilai UTS (30%)",
            "letter": "D"
          },
          {
            "key": "uas",
            "label": "Nilai UAS (40%)",
            "letter": "E"
          },
          {
            "key": "akhir",
            "label": "Nilai Akhir",
            "letter": "F"
          },
          {
            "key": "beasiswa",
            "label": "Status Beasiswa",
            "letter": "G"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "nis": "202601",
              "nama": "Fajar Nugraha",
              "tugas": 85,
              "uts": 90,
              "uas": 92,
              "akhir": "?",
              "beasiswa": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "nis": "202602",
              "nama": "Gita Larasati",
              "tugas": 75,
              "uts": 80,
              "uas": 78,
              "akhir": "?",
              "beasiswa": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "nis": "202603",
              "nama": "Hendra Gunawan",
              "tugas": 90,
              "uts": 95,
              "uas": 94,
              "akhir": "?",
              "beasiswa": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "nis": "202604",
              "nama": "Indah Permatasari",
              "tugas": 60,
              "uts": 65,
              "uas": 70,
              "akhir": "?",
              "beasiswa": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "akhir",
            "letter": "F",
            "label": "Nilai Akhir",
            "description": "Hitung nilai akhir berbobot 30% Tugas + 30% UTS + 40% UAS.",
            "expectedRowAnswers": {
              "2": 89.3,
              "3": 77.7,
              "4": 93.1,
              "5": 65.5
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Nilai Akhir",
        "formula": "=C2*0.3 + D2*0.3 + E2*0.4",
        "explanation": "Hitung nilai akhir berbobot 30% Tugas + 30% UTS + 40% UAS."
      }
    ]
  },
  {
    "id": "EX-033",
    "number": 33,
    "code": "#SBEM033",
    "title": "Simulasi Angsuran Kredit Rumah KPR (Bank PMT) (Studi Kasus #33)",
    "category": "Keuangan",
    "difficulty": "MAHIR",
    "difficultyStars": 4,
    "tags": [
      "Cek Otomatis",
      "Studi Kasus",
      "Keuangan"
    ],
    "instructions": {
      "title": "MAHIR Level - Simulasi Angsuran Kredit Rumah KPR (Bank PMT)",
      "description": "Hitung cicilan per bulan menggunakan fungsi PMT.",
      "points": [
        "1. Periksa data pada tabel di bawah ini.",
        "2. Tuliskan formula pada kolom target (E) sesuai aturan yang ditentukan.",
        "3. Pastikan formula dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" untuk mengevaluasi kelulusan kasus."
      ],
      "helperTable": {
        "title": "Ketentuan Rumus",
        "headers": [
          "Target Kolom",
          "Formula Acuan"
        ],
        "rows": [
          [
            "Angsuran / Bulan (PMT)",
            "=PMT(C2/12, D2*12, -B2)"
          ]
        ]
      },
      "notice": "Tulis rumus kalkulasi pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_33",
        "name": "Simulasi KPR",
        "columns": [
          {
            "key": "deb",
            "label": "Nama Debitur",
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
            "key": "angsuran",
            "label": "Angsuran / Bulan (PMT)",
            "letter": "E"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "deb": "Andi Pratama",
              "plafon": 500000000,
              "bunga": 0.08,
              "tenor": 15,
              "angsuran": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "deb": "Citra Kirana",
              "plafon": 350000000,
              "bunga": 0.075,
              "tenor": 10,
              "angsuran": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "deb": "Dimas Anggara",
              "plafon": 800000000,
              "bunga": 0.085,
              "tenor": 20,
              "angsuran": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "deb": "Eka Saputra",
              "plafon": 250000000,
              "bunga": 0.07,
              "tenor": 5,
              "angsuran": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "angsuran",
            "letter": "E",
            "label": "Angsuran / Bulan (PMT)",
            "description": "Hitung cicilan per bulan menggunakan fungsi PMT.",
            "expectedRowAnswers": {
              "2": 4778260,
              "3": 4153835,
              "4": 6942621,
              "5": 4950371
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Angsuran / Bulan (PMT)",
        "formula": "=PMT(C2/12, D2*12, -B2)",
        "explanation": "Hitung cicilan per bulan menggunakan fungsi PMT."
      }
    ]
  },
  {
    "id": "EX-034",
    "number": 34,
    "code": "#SBEM034",
    "title": "Rekonsiliasi Bank & Buku Kas Perusahaan (Studi Kasus #34)",
    "category": "Kombinasi",
    "difficulty": "EXTREME",
    "difficultyStars": 5,
    "tags": [
      "Cek Otomatis",
      "Studi Kasus",
      "Kombinasi"
    ],
    "instructions": {
      "title": "EXTREME Level - Rekonsiliasi Bank & Buku Kas Perusahaan",
      "description": "Hitung selisih mutasi bank dan buku kas perusahaan.",
      "points": [
        "1. Periksa data pada tabel di bawah ini.",
        "2. Tuliskan formula pada kolom target (E) sesuai aturan yang ditentukan.",
        "3. Pastikan formula dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" untuk mengevaluasi kelulusan kasus."
      ],
      "helperTable": {
        "title": "Ketentuan Rumus",
        "headers": [
          "Target Kolom",
          "Formula Acuan"
        ],
        "rows": [
          [
            "Selisih (Rp)",
            "=ABS(C2-D2)"
          ]
        ]
      },
      "notice": "Tulis rumus kalkulasi pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_34",
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
            "label": "Status Audit",
            "letter": "F"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "tgl": "01/08/2026",
              "ket": "Setoran Tunai Kasir Toko",
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
              "ket": "Kliring Cek Vendor Supplier",
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
              "ket": "Pendapatan Jasa Giro Bunga",
              "bank": 180000,
              "buku": 0,
              "selisih": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "selisih",
            "letter": "E",
            "label": "Selisih (Rp)",
            "description": "Hitung selisih mutasi bank dan buku kas perusahaan.",
            "expectedRowAnswers": {
              "2": 0,
              "3": 0,
              "4": 25000,
              "5": 180000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Selisih (Rp)",
        "formula": "=ABS(C2-D2)",
        "explanation": "Hitung selisih mutasi bank dan buku kas perusahaan."
      }
    ]
  },
  {
    "id": "EX-035",
    "number": 35,
    "code": "#SBEM035",
    "title": "Pengolahan Nilai Rapor & Beasiswa Prestasi Siswa (Studi Kasus #35)",
    "category": "Logika",
    "difficulty": "MENENGAH",
    "difficultyStars": 3,
    "tags": [
      "Cek Otomatis",
      "Studi Kasus",
      "Logika"
    ],
    "instructions": {
      "title": "MENENGAH Level - Pengolahan Nilai Rapor & Beasiswa Prestasi Siswa",
      "description": "Hitung nilai akhir berbobot 30% Tugas + 30% UTS + 40% UAS.",
      "points": [
        "1. Periksa data pada tabel di bawah ini.",
        "2. Tuliskan formula pada kolom target (F) sesuai aturan yang ditentukan.",
        "3. Pastikan formula dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" untuk mengevaluasi kelulusan kasus."
      ],
      "helperTable": {
        "title": "Ketentuan Rumus",
        "headers": [
          "Target Kolom",
          "Formula Acuan"
        ],
        "rows": [
          [
            "Nilai Akhir",
            "=C2*0.3 + D2*0.3 + E2*0.4"
          ]
        ]
      },
      "notice": "Tulis rumus kalkulasi pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_35",
        "name": "Rapor Siswa",
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
            "key": "tugas",
            "label": "Nilai Tugas (30%)",
            "letter": "C"
          },
          {
            "key": "uts",
            "label": "Nilai UTS (30%)",
            "letter": "D"
          },
          {
            "key": "uas",
            "label": "Nilai UAS (40%)",
            "letter": "E"
          },
          {
            "key": "akhir",
            "label": "Nilai Akhir",
            "letter": "F"
          },
          {
            "key": "beasiswa",
            "label": "Status Beasiswa",
            "letter": "G"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "nis": "202601",
              "nama": "Fajar Nugraha",
              "tugas": 85,
              "uts": 90,
              "uas": 92,
              "akhir": "?",
              "beasiswa": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "nis": "202602",
              "nama": "Gita Larasati",
              "tugas": 75,
              "uts": 80,
              "uas": 78,
              "akhir": "?",
              "beasiswa": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "nis": "202603",
              "nama": "Hendra Gunawan",
              "tugas": 90,
              "uts": 95,
              "uas": 94,
              "akhir": "?",
              "beasiswa": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "nis": "202604",
              "nama": "Indah Permatasari",
              "tugas": 60,
              "uts": 65,
              "uas": 70,
              "akhir": "?",
              "beasiswa": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "akhir",
            "letter": "F",
            "label": "Nilai Akhir",
            "description": "Hitung nilai akhir berbobot 30% Tugas + 30% UTS + 40% UAS.",
            "expectedRowAnswers": {
              "2": 89.3,
              "3": 77.7,
              "4": 93.1,
              "5": 65.5
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Nilai Akhir",
        "formula": "=C2*0.3 + D2*0.3 + E2*0.4",
        "explanation": "Hitung nilai akhir berbobot 30% Tugas + 30% UTS + 40% UAS."
      }
    ]
  },
  {
    "id": "EX-036",
    "number": 36,
    "code": "#SBEM036",
    "title": "Simulasi Angsuran Kredit Rumah KPR (Bank PMT) (Studi Kasus #36)",
    "category": "Keuangan",
    "difficulty": "MAHIR",
    "difficultyStars": 4,
    "tags": [
      "Cek Otomatis",
      "Studi Kasus",
      "Keuangan"
    ],
    "instructions": {
      "title": "MAHIR Level - Simulasi Angsuran Kredit Rumah KPR (Bank PMT)",
      "description": "Hitung cicilan per bulan menggunakan fungsi PMT.",
      "points": [
        "1. Periksa data pada tabel di bawah ini.",
        "2. Tuliskan formula pada kolom target (E) sesuai aturan yang ditentukan.",
        "3. Pastikan formula dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" untuk mengevaluasi kelulusan kasus."
      ],
      "helperTable": {
        "title": "Ketentuan Rumus",
        "headers": [
          "Target Kolom",
          "Formula Acuan"
        ],
        "rows": [
          [
            "Angsuran / Bulan (PMT)",
            "=PMT(C2/12, D2*12, -B2)"
          ]
        ]
      },
      "notice": "Tulis rumus kalkulasi pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_36",
        "name": "Simulasi KPR",
        "columns": [
          {
            "key": "deb",
            "label": "Nama Debitur",
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
            "key": "angsuran",
            "label": "Angsuran / Bulan (PMT)",
            "letter": "E"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "deb": "Andi Pratama",
              "plafon": 500000000,
              "bunga": 0.08,
              "tenor": 15,
              "angsuran": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "deb": "Citra Kirana",
              "plafon": 350000000,
              "bunga": 0.075,
              "tenor": 10,
              "angsuran": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "deb": "Dimas Anggara",
              "plafon": 800000000,
              "bunga": 0.085,
              "tenor": 20,
              "angsuran": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "deb": "Eka Saputra",
              "plafon": 250000000,
              "bunga": 0.07,
              "tenor": 5,
              "angsuran": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "angsuran",
            "letter": "E",
            "label": "Angsuran / Bulan (PMT)",
            "description": "Hitung cicilan per bulan menggunakan fungsi PMT.",
            "expectedRowAnswers": {
              "2": 4778260,
              "3": 4153835,
              "4": 6942621,
              "5": 4950371
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Angsuran / Bulan (PMT)",
        "formula": "=PMT(C2/12, D2*12, -B2)",
        "explanation": "Hitung cicilan per bulan menggunakan fungsi PMT."
      }
    ]
  },
  {
    "id": "EX-037",
    "number": 37,
    "code": "#SBEM037",
    "title": "Rekonsiliasi Bank & Buku Kas Perusahaan (Studi Kasus #37)",
    "category": "Kombinasi",
    "difficulty": "EXTREME",
    "difficultyStars": 5,
    "tags": [
      "Cek Otomatis",
      "Studi Kasus",
      "Kombinasi"
    ],
    "instructions": {
      "title": "EXTREME Level - Rekonsiliasi Bank & Buku Kas Perusahaan",
      "description": "Hitung selisih mutasi bank dan buku kas perusahaan.",
      "points": [
        "1. Periksa data pada tabel di bawah ini.",
        "2. Tuliskan formula pada kolom target (E) sesuai aturan yang ditentukan.",
        "3. Pastikan formula dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" untuk mengevaluasi kelulusan kasus."
      ],
      "helperTable": {
        "title": "Ketentuan Rumus",
        "headers": [
          "Target Kolom",
          "Formula Acuan"
        ],
        "rows": [
          [
            "Selisih (Rp)",
            "=ABS(C2-D2)"
          ]
        ]
      },
      "notice": "Tulis rumus kalkulasi pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_37",
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
            "label": "Status Audit",
            "letter": "F"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "tgl": "01/08/2026",
              "ket": "Setoran Tunai Kasir Toko",
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
              "ket": "Kliring Cek Vendor Supplier",
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
              "ket": "Pendapatan Jasa Giro Bunga",
              "bank": 180000,
              "buku": 0,
              "selisih": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "selisih",
            "letter": "E",
            "label": "Selisih (Rp)",
            "description": "Hitung selisih mutasi bank dan buku kas perusahaan.",
            "expectedRowAnswers": {
              "2": 0,
              "3": 0,
              "4": 25000,
              "5": 180000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Selisih (Rp)",
        "formula": "=ABS(C2-D2)",
        "explanation": "Hitung selisih mutasi bank dan buku kas perusahaan."
      }
    ]
  },
  {
    "id": "EX-038",
    "number": 38,
    "code": "#SBEM038",
    "title": "Pengolahan Nilai Rapor & Beasiswa Prestasi Siswa (Studi Kasus #38)",
    "category": "Logika",
    "difficulty": "MENENGAH",
    "difficultyStars": 3,
    "tags": [
      "Cek Otomatis",
      "Studi Kasus",
      "Logika"
    ],
    "instructions": {
      "title": "MENENGAH Level - Pengolahan Nilai Rapor & Beasiswa Prestasi Siswa",
      "description": "Hitung nilai akhir berbobot 30% Tugas + 30% UTS + 40% UAS.",
      "points": [
        "1. Periksa data pada tabel di bawah ini.",
        "2. Tuliskan formula pada kolom target (F) sesuai aturan yang ditentukan.",
        "3. Pastikan formula dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" untuk mengevaluasi kelulusan kasus."
      ],
      "helperTable": {
        "title": "Ketentuan Rumus",
        "headers": [
          "Target Kolom",
          "Formula Acuan"
        ],
        "rows": [
          [
            "Nilai Akhir",
            "=C2*0.3 + D2*0.3 + E2*0.4"
          ]
        ]
      },
      "notice": "Tulis rumus kalkulasi pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_38",
        "name": "Rapor Siswa",
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
            "key": "tugas",
            "label": "Nilai Tugas (30%)",
            "letter": "C"
          },
          {
            "key": "uts",
            "label": "Nilai UTS (30%)",
            "letter": "D"
          },
          {
            "key": "uas",
            "label": "Nilai UAS (40%)",
            "letter": "E"
          },
          {
            "key": "akhir",
            "label": "Nilai Akhir",
            "letter": "F"
          },
          {
            "key": "beasiswa",
            "label": "Status Beasiswa",
            "letter": "G"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "nis": "202601",
              "nama": "Fajar Nugraha",
              "tugas": 85,
              "uts": 90,
              "uas": 92,
              "akhir": "?",
              "beasiswa": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "nis": "202602",
              "nama": "Gita Larasati",
              "tugas": 75,
              "uts": 80,
              "uas": 78,
              "akhir": "?",
              "beasiswa": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "nis": "202603",
              "nama": "Hendra Gunawan",
              "tugas": 90,
              "uts": 95,
              "uas": 94,
              "akhir": "?",
              "beasiswa": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "nis": "202604",
              "nama": "Indah Permatasari",
              "tugas": 60,
              "uts": 65,
              "uas": 70,
              "akhir": "?",
              "beasiswa": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "akhir",
            "letter": "F",
            "label": "Nilai Akhir",
            "description": "Hitung nilai akhir berbobot 30% Tugas + 30% UTS + 40% UAS.",
            "expectedRowAnswers": {
              "2": 89.3,
              "3": 77.7,
              "4": 93.1,
              "5": 65.5
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Nilai Akhir",
        "formula": "=C2*0.3 + D2*0.3 + E2*0.4",
        "explanation": "Hitung nilai akhir berbobot 30% Tugas + 30% UTS + 40% UAS."
      }
    ]
  },
  {
    "id": "EX-039",
    "number": 39,
    "code": "#SBEM039",
    "title": "Simulasi Angsuran Kredit Rumah KPR (Bank PMT) (Studi Kasus #39)",
    "category": "Keuangan",
    "difficulty": "MAHIR",
    "difficultyStars": 4,
    "tags": [
      "Cek Otomatis",
      "Studi Kasus",
      "Keuangan"
    ],
    "instructions": {
      "title": "MAHIR Level - Simulasi Angsuran Kredit Rumah KPR (Bank PMT)",
      "description": "Hitung cicilan per bulan menggunakan fungsi PMT.",
      "points": [
        "1. Periksa data pada tabel di bawah ini.",
        "2. Tuliskan formula pada kolom target (E) sesuai aturan yang ditentukan.",
        "3. Pastikan formula dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" untuk mengevaluasi kelulusan kasus."
      ],
      "helperTable": {
        "title": "Ketentuan Rumus",
        "headers": [
          "Target Kolom",
          "Formula Acuan"
        ],
        "rows": [
          [
            "Angsuran / Bulan (PMT)",
            "=PMT(C2/12, D2*12, -B2)"
          ]
        ]
      },
      "notice": "Tulis rumus kalkulasi pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_39",
        "name": "Simulasi KPR",
        "columns": [
          {
            "key": "deb",
            "label": "Nama Debitur",
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
            "key": "angsuran",
            "label": "Angsuran / Bulan (PMT)",
            "letter": "E"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "deb": "Andi Pratama",
              "plafon": 500000000,
              "bunga": 0.08,
              "tenor": 15,
              "angsuran": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "deb": "Citra Kirana",
              "plafon": 350000000,
              "bunga": 0.075,
              "tenor": 10,
              "angsuran": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "deb": "Dimas Anggara",
              "plafon": 800000000,
              "bunga": 0.085,
              "tenor": 20,
              "angsuran": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "deb": "Eka Saputra",
              "plafon": 250000000,
              "bunga": 0.07,
              "tenor": 5,
              "angsuran": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "angsuran",
            "letter": "E",
            "label": "Angsuran / Bulan (PMT)",
            "description": "Hitung cicilan per bulan menggunakan fungsi PMT.",
            "expectedRowAnswers": {
              "2": 4778260,
              "3": 4153835,
              "4": 6942621,
              "5": 4950371
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Angsuran / Bulan (PMT)",
        "formula": "=PMT(C2/12, D2*12, -B2)",
        "explanation": "Hitung cicilan per bulan menggunakan fungsi PMT."
      }
    ]
  },
  {
    "id": "EX-040",
    "number": 40,
    "code": "#SBEM040",
    "title": "Rekonsiliasi Bank & Buku Kas Perusahaan (Studi Kasus #40)",
    "category": "Kombinasi",
    "difficulty": "EXTREME",
    "difficultyStars": 5,
    "tags": [
      "Cek Otomatis",
      "Studi Kasus",
      "Kombinasi"
    ],
    "instructions": {
      "title": "EXTREME Level - Rekonsiliasi Bank & Buku Kas Perusahaan",
      "description": "Hitung selisih mutasi bank dan buku kas perusahaan.",
      "points": [
        "1. Periksa data pada tabel di bawah ini.",
        "2. Tuliskan formula pada kolom target (E) sesuai aturan yang ditentukan.",
        "3. Pastikan formula dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" untuk mengevaluasi kelulusan kasus."
      ],
      "helperTable": {
        "title": "Ketentuan Rumus",
        "headers": [
          "Target Kolom",
          "Formula Acuan"
        ],
        "rows": [
          [
            "Selisih (Rp)",
            "=ABS(C2-D2)"
          ]
        ]
      },
      "notice": "Tulis rumus kalkulasi pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_40",
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
            "label": "Status Audit",
            "letter": "F"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "tgl": "01/08/2026",
              "ket": "Setoran Tunai Kasir Toko",
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
              "ket": "Kliring Cek Vendor Supplier",
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
              "ket": "Pendapatan Jasa Giro Bunga",
              "bank": 180000,
              "buku": 0,
              "selisih": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "selisih",
            "letter": "E",
            "label": "Selisih (Rp)",
            "description": "Hitung selisih mutasi bank dan buku kas perusahaan.",
            "expectedRowAnswers": {
              "2": 0,
              "3": 0,
              "4": 25000,
              "5": 180000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Selisih (Rp)",
        "formula": "=ABS(C2-D2)",
        "explanation": "Hitung selisih mutasi bank dan buku kas perusahaan."
      }
    ]
  },
  {
    "id": "EX-041",
    "number": 41,
    "code": "#SBEM041",
    "title": "Pengolahan Nilai Rapor & Beasiswa Prestasi Siswa (Studi Kasus #41)",
    "category": "Logika",
    "difficulty": "MENENGAH",
    "difficultyStars": 3,
    "tags": [
      "Cek Otomatis",
      "Studi Kasus",
      "Logika"
    ],
    "instructions": {
      "title": "MENENGAH Level - Pengolahan Nilai Rapor & Beasiswa Prestasi Siswa",
      "description": "Hitung nilai akhir berbobot 30% Tugas + 30% UTS + 40% UAS.",
      "points": [
        "1. Periksa data pada tabel di bawah ini.",
        "2. Tuliskan formula pada kolom target (F) sesuai aturan yang ditentukan.",
        "3. Pastikan formula dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" untuk mengevaluasi kelulusan kasus."
      ],
      "helperTable": {
        "title": "Ketentuan Rumus",
        "headers": [
          "Target Kolom",
          "Formula Acuan"
        ],
        "rows": [
          [
            "Nilai Akhir",
            "=C2*0.3 + D2*0.3 + E2*0.4"
          ]
        ]
      },
      "notice": "Tulis rumus kalkulasi pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_41",
        "name": "Rapor Siswa",
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
            "key": "tugas",
            "label": "Nilai Tugas (30%)",
            "letter": "C"
          },
          {
            "key": "uts",
            "label": "Nilai UTS (30%)",
            "letter": "D"
          },
          {
            "key": "uas",
            "label": "Nilai UAS (40%)",
            "letter": "E"
          },
          {
            "key": "akhir",
            "label": "Nilai Akhir",
            "letter": "F"
          },
          {
            "key": "beasiswa",
            "label": "Status Beasiswa",
            "letter": "G"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "nis": "202601",
              "nama": "Fajar Nugraha",
              "tugas": 85,
              "uts": 90,
              "uas": 92,
              "akhir": "?",
              "beasiswa": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "nis": "202602",
              "nama": "Gita Larasati",
              "tugas": 75,
              "uts": 80,
              "uas": 78,
              "akhir": "?",
              "beasiswa": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "nis": "202603",
              "nama": "Hendra Gunawan",
              "tugas": 90,
              "uts": 95,
              "uas": 94,
              "akhir": "?",
              "beasiswa": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "nis": "202604",
              "nama": "Indah Permatasari",
              "tugas": 60,
              "uts": 65,
              "uas": 70,
              "akhir": "?",
              "beasiswa": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "akhir",
            "letter": "F",
            "label": "Nilai Akhir",
            "description": "Hitung nilai akhir berbobot 30% Tugas + 30% UTS + 40% UAS.",
            "expectedRowAnswers": {
              "2": 89.3,
              "3": 77.7,
              "4": 93.1,
              "5": 65.5
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Nilai Akhir",
        "formula": "=C2*0.3 + D2*0.3 + E2*0.4",
        "explanation": "Hitung nilai akhir berbobot 30% Tugas + 30% UTS + 40% UAS."
      }
    ]
  },
  {
    "id": "EX-042",
    "number": 42,
    "code": "#SBEM042",
    "title": "Simulasi Angsuran Kredit Rumah KPR (Bank PMT) (Studi Kasus #42)",
    "category": "Keuangan",
    "difficulty": "MAHIR",
    "difficultyStars": 4,
    "tags": [
      "Cek Otomatis",
      "Studi Kasus",
      "Keuangan"
    ],
    "instructions": {
      "title": "MAHIR Level - Simulasi Angsuran Kredit Rumah KPR (Bank PMT)",
      "description": "Hitung cicilan per bulan menggunakan fungsi PMT.",
      "points": [
        "1. Periksa data pada tabel di bawah ini.",
        "2. Tuliskan formula pada kolom target (E) sesuai aturan yang ditentukan.",
        "3. Pastikan formula dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" untuk mengevaluasi kelulusan kasus."
      ],
      "helperTable": {
        "title": "Ketentuan Rumus",
        "headers": [
          "Target Kolom",
          "Formula Acuan"
        ],
        "rows": [
          [
            "Angsuran / Bulan (PMT)",
            "=PMT(C2/12, D2*12, -B2)"
          ]
        ]
      },
      "notice": "Tulis rumus kalkulasi pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_42",
        "name": "Simulasi KPR",
        "columns": [
          {
            "key": "deb",
            "label": "Nama Debitur",
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
            "key": "angsuran",
            "label": "Angsuran / Bulan (PMT)",
            "letter": "E"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "deb": "Andi Pratama",
              "plafon": 500000000,
              "bunga": 0.08,
              "tenor": 15,
              "angsuran": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "deb": "Citra Kirana",
              "plafon": 350000000,
              "bunga": 0.075,
              "tenor": 10,
              "angsuran": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "deb": "Dimas Anggara",
              "plafon": 800000000,
              "bunga": 0.085,
              "tenor": 20,
              "angsuran": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "deb": "Eka Saputra",
              "plafon": 250000000,
              "bunga": 0.07,
              "tenor": 5,
              "angsuran": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "angsuran",
            "letter": "E",
            "label": "Angsuran / Bulan (PMT)",
            "description": "Hitung cicilan per bulan menggunakan fungsi PMT.",
            "expectedRowAnswers": {
              "2": 4778260,
              "3": 4153835,
              "4": 6942621,
              "5": 4950371
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Angsuran / Bulan (PMT)",
        "formula": "=PMT(C2/12, D2*12, -B2)",
        "explanation": "Hitung cicilan per bulan menggunakan fungsi PMT."
      }
    ]
  },
  {
    "id": "EX-043",
    "number": 43,
    "code": "#SBEM043",
    "title": "Rekonsiliasi Bank & Buku Kas Perusahaan (Studi Kasus #43)",
    "category": "Kombinasi",
    "difficulty": "EXTREME",
    "difficultyStars": 5,
    "tags": [
      "Cek Otomatis",
      "Studi Kasus",
      "Kombinasi"
    ],
    "instructions": {
      "title": "EXTREME Level - Rekonsiliasi Bank & Buku Kas Perusahaan",
      "description": "Hitung selisih mutasi bank dan buku kas perusahaan.",
      "points": [
        "1. Periksa data pada tabel di bawah ini.",
        "2. Tuliskan formula pada kolom target (E) sesuai aturan yang ditentukan.",
        "3. Pastikan formula dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" untuk mengevaluasi kelulusan kasus."
      ],
      "helperTable": {
        "title": "Ketentuan Rumus",
        "headers": [
          "Target Kolom",
          "Formula Acuan"
        ],
        "rows": [
          [
            "Selisih (Rp)",
            "=ABS(C2-D2)"
          ]
        ]
      },
      "notice": "Tulis rumus kalkulasi pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_43",
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
            "label": "Status Audit",
            "letter": "F"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "tgl": "01/08/2026",
              "ket": "Setoran Tunai Kasir Toko",
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
              "ket": "Kliring Cek Vendor Supplier",
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
              "ket": "Pendapatan Jasa Giro Bunga",
              "bank": 180000,
              "buku": 0,
              "selisih": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "selisih",
            "letter": "E",
            "label": "Selisih (Rp)",
            "description": "Hitung selisih mutasi bank dan buku kas perusahaan.",
            "expectedRowAnswers": {
              "2": 0,
              "3": 0,
              "4": 25000,
              "5": 180000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Selisih (Rp)",
        "formula": "=ABS(C2-D2)",
        "explanation": "Hitung selisih mutasi bank dan buku kas perusahaan."
      }
    ]
  },
  {
    "id": "EX-044",
    "number": 44,
    "code": "#SBEM044",
    "title": "Pengolahan Nilai Rapor & Beasiswa Prestasi Siswa (Studi Kasus #44)",
    "category": "Logika",
    "difficulty": "MENENGAH",
    "difficultyStars": 3,
    "tags": [
      "Cek Otomatis",
      "Studi Kasus",
      "Logika"
    ],
    "instructions": {
      "title": "MENENGAH Level - Pengolahan Nilai Rapor & Beasiswa Prestasi Siswa",
      "description": "Hitung nilai akhir berbobot 30% Tugas + 30% UTS + 40% UAS.",
      "points": [
        "1. Periksa data pada tabel di bawah ini.",
        "2. Tuliskan formula pada kolom target (F) sesuai aturan yang ditentukan.",
        "3. Pastikan formula dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" untuk mengevaluasi kelulusan kasus."
      ],
      "helperTable": {
        "title": "Ketentuan Rumus",
        "headers": [
          "Target Kolom",
          "Formula Acuan"
        ],
        "rows": [
          [
            "Nilai Akhir",
            "=C2*0.3 + D2*0.3 + E2*0.4"
          ]
        ]
      },
      "notice": "Tulis rumus kalkulasi pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_44",
        "name": "Rapor Siswa",
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
            "key": "tugas",
            "label": "Nilai Tugas (30%)",
            "letter": "C"
          },
          {
            "key": "uts",
            "label": "Nilai UTS (30%)",
            "letter": "D"
          },
          {
            "key": "uas",
            "label": "Nilai UAS (40%)",
            "letter": "E"
          },
          {
            "key": "akhir",
            "label": "Nilai Akhir",
            "letter": "F"
          },
          {
            "key": "beasiswa",
            "label": "Status Beasiswa",
            "letter": "G"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "nis": "202601",
              "nama": "Fajar Nugraha",
              "tugas": 85,
              "uts": 90,
              "uas": 92,
              "akhir": "?",
              "beasiswa": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "nis": "202602",
              "nama": "Gita Larasati",
              "tugas": 75,
              "uts": 80,
              "uas": 78,
              "akhir": "?",
              "beasiswa": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "nis": "202603",
              "nama": "Hendra Gunawan",
              "tugas": 90,
              "uts": 95,
              "uas": 94,
              "akhir": "?",
              "beasiswa": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "nis": "202604",
              "nama": "Indah Permatasari",
              "tugas": 60,
              "uts": 65,
              "uas": 70,
              "akhir": "?",
              "beasiswa": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "akhir",
            "letter": "F",
            "label": "Nilai Akhir",
            "description": "Hitung nilai akhir berbobot 30% Tugas + 30% UTS + 40% UAS.",
            "expectedRowAnswers": {
              "2": 89.3,
              "3": 77.7,
              "4": 93.1,
              "5": 65.5
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Nilai Akhir",
        "formula": "=C2*0.3 + D2*0.3 + E2*0.4",
        "explanation": "Hitung nilai akhir berbobot 30% Tugas + 30% UTS + 40% UAS."
      }
    ]
  },
  {
    "id": "EX-045",
    "number": 45,
    "code": "#SBEM045",
    "title": "Simulasi Angsuran Kredit Rumah KPR (Bank PMT) (Studi Kasus #45)",
    "category": "Keuangan",
    "difficulty": "MAHIR",
    "difficultyStars": 4,
    "tags": [
      "Cek Otomatis",
      "Studi Kasus",
      "Keuangan"
    ],
    "instructions": {
      "title": "MAHIR Level - Simulasi Angsuran Kredit Rumah KPR (Bank PMT)",
      "description": "Hitung cicilan per bulan menggunakan fungsi PMT.",
      "points": [
        "1. Periksa data pada tabel di bawah ini.",
        "2. Tuliskan formula pada kolom target (E) sesuai aturan yang ditentukan.",
        "3. Pastikan formula dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" untuk mengevaluasi kelulusan kasus."
      ],
      "helperTable": {
        "title": "Ketentuan Rumus",
        "headers": [
          "Target Kolom",
          "Formula Acuan"
        ],
        "rows": [
          [
            "Angsuran / Bulan (PMT)",
            "=PMT(C2/12, D2*12, -B2)"
          ]
        ]
      },
      "notice": "Tulis rumus kalkulasi pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_45",
        "name": "Simulasi KPR",
        "columns": [
          {
            "key": "deb",
            "label": "Nama Debitur",
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
            "key": "angsuran",
            "label": "Angsuran / Bulan (PMT)",
            "letter": "E"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "deb": "Andi Pratama",
              "plafon": 500000000,
              "bunga": 0.08,
              "tenor": 15,
              "angsuran": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "deb": "Citra Kirana",
              "plafon": 350000000,
              "bunga": 0.075,
              "tenor": 10,
              "angsuran": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "deb": "Dimas Anggara",
              "plafon": 800000000,
              "bunga": 0.085,
              "tenor": 20,
              "angsuran": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "deb": "Eka Saputra",
              "plafon": 250000000,
              "bunga": 0.07,
              "tenor": 5,
              "angsuran": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "angsuran",
            "letter": "E",
            "label": "Angsuran / Bulan (PMT)",
            "description": "Hitung cicilan per bulan menggunakan fungsi PMT.",
            "expectedRowAnswers": {
              "2": 4778260,
              "3": 4153835,
              "4": 6942621,
              "5": 4950371
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Angsuran / Bulan (PMT)",
        "formula": "=PMT(C2/12, D2*12, -B2)",
        "explanation": "Hitung cicilan per bulan menggunakan fungsi PMT."
      }
    ]
  },
  {
    "id": "EX-046",
    "number": 46,
    "code": "#SBEM046",
    "title": "Rekonsiliasi Bank & Buku Kas Perusahaan (Studi Kasus #46)",
    "category": "Kombinasi",
    "difficulty": "EXTREME",
    "difficultyStars": 5,
    "tags": [
      "Cek Otomatis",
      "Studi Kasus",
      "Kombinasi"
    ],
    "instructions": {
      "title": "EXTREME Level - Rekonsiliasi Bank & Buku Kas Perusahaan",
      "description": "Hitung selisih mutasi bank dan buku kas perusahaan.",
      "points": [
        "1. Periksa data pada tabel di bawah ini.",
        "2. Tuliskan formula pada kolom target (E) sesuai aturan yang ditentukan.",
        "3. Pastikan formula dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" untuk mengevaluasi kelulusan kasus."
      ],
      "helperTable": {
        "title": "Ketentuan Rumus",
        "headers": [
          "Target Kolom",
          "Formula Acuan"
        ],
        "rows": [
          [
            "Selisih (Rp)",
            "=ABS(C2-D2)"
          ]
        ]
      },
      "notice": "Tulis rumus kalkulasi pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_46",
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
            "label": "Status Audit",
            "letter": "F"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "tgl": "01/08/2026",
              "ket": "Setoran Tunai Kasir Toko",
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
              "ket": "Kliring Cek Vendor Supplier",
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
              "ket": "Pendapatan Jasa Giro Bunga",
              "bank": 180000,
              "buku": 0,
              "selisih": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "selisih",
            "letter": "E",
            "label": "Selisih (Rp)",
            "description": "Hitung selisih mutasi bank dan buku kas perusahaan.",
            "expectedRowAnswers": {
              "2": 0,
              "3": 0,
              "4": 25000,
              "5": 180000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Selisih (Rp)",
        "formula": "=ABS(C2-D2)",
        "explanation": "Hitung selisih mutasi bank dan buku kas perusahaan."
      }
    ]
  },
  {
    "id": "EX-047",
    "number": 47,
    "code": "#SBEM047",
    "title": "Pengolahan Nilai Rapor & Beasiswa Prestasi Siswa (Studi Kasus #47)",
    "category": "Logika",
    "difficulty": "MENENGAH",
    "difficultyStars": 3,
    "tags": [
      "Cek Otomatis",
      "Studi Kasus",
      "Logika"
    ],
    "instructions": {
      "title": "MENENGAH Level - Pengolahan Nilai Rapor & Beasiswa Prestasi Siswa",
      "description": "Hitung nilai akhir berbobot 30% Tugas + 30% UTS + 40% UAS.",
      "points": [
        "1. Periksa data pada tabel di bawah ini.",
        "2. Tuliskan formula pada kolom target (F) sesuai aturan yang ditentukan.",
        "3. Pastikan formula dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" untuk mengevaluasi kelulusan kasus."
      ],
      "helperTable": {
        "title": "Ketentuan Rumus",
        "headers": [
          "Target Kolom",
          "Formula Acuan"
        ],
        "rows": [
          [
            "Nilai Akhir",
            "=C2*0.3 + D2*0.3 + E2*0.4"
          ]
        ]
      },
      "notice": "Tulis rumus kalkulasi pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_47",
        "name": "Rapor Siswa",
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
            "key": "tugas",
            "label": "Nilai Tugas (30%)",
            "letter": "C"
          },
          {
            "key": "uts",
            "label": "Nilai UTS (30%)",
            "letter": "D"
          },
          {
            "key": "uas",
            "label": "Nilai UAS (40%)",
            "letter": "E"
          },
          {
            "key": "akhir",
            "label": "Nilai Akhir",
            "letter": "F"
          },
          {
            "key": "beasiswa",
            "label": "Status Beasiswa",
            "letter": "G"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "nis": "202601",
              "nama": "Fajar Nugraha",
              "tugas": 85,
              "uts": 90,
              "uas": 92,
              "akhir": "?",
              "beasiswa": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "nis": "202602",
              "nama": "Gita Larasati",
              "tugas": 75,
              "uts": 80,
              "uas": 78,
              "akhir": "?",
              "beasiswa": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "nis": "202603",
              "nama": "Hendra Gunawan",
              "tugas": 90,
              "uts": 95,
              "uas": 94,
              "akhir": "?",
              "beasiswa": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "nis": "202604",
              "nama": "Indah Permatasari",
              "tugas": 60,
              "uts": 65,
              "uas": 70,
              "akhir": "?",
              "beasiswa": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "akhir",
            "letter": "F",
            "label": "Nilai Akhir",
            "description": "Hitung nilai akhir berbobot 30% Tugas + 30% UTS + 40% UAS.",
            "expectedRowAnswers": {
              "2": 89.3,
              "3": 77.7,
              "4": 93.1,
              "5": 65.5
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Nilai Akhir",
        "formula": "=C2*0.3 + D2*0.3 + E2*0.4",
        "explanation": "Hitung nilai akhir berbobot 30% Tugas + 30% UTS + 40% UAS."
      }
    ]
  },
  {
    "id": "EX-048",
    "number": 48,
    "code": "#SBEM048",
    "title": "Simulasi Angsuran Kredit Rumah KPR (Bank PMT) (Studi Kasus #48)",
    "category": "Keuangan",
    "difficulty": "MAHIR",
    "difficultyStars": 4,
    "tags": [
      "Cek Otomatis",
      "Studi Kasus",
      "Keuangan"
    ],
    "instructions": {
      "title": "MAHIR Level - Simulasi Angsuran Kredit Rumah KPR (Bank PMT)",
      "description": "Hitung cicilan per bulan menggunakan fungsi PMT.",
      "points": [
        "1. Periksa data pada tabel di bawah ini.",
        "2. Tuliskan formula pada kolom target (E) sesuai aturan yang ditentukan.",
        "3. Pastikan formula dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" untuk mengevaluasi kelulusan kasus."
      ],
      "helperTable": {
        "title": "Ketentuan Rumus",
        "headers": [
          "Target Kolom",
          "Formula Acuan"
        ],
        "rows": [
          [
            "Angsuran / Bulan (PMT)",
            "=PMT(C2/12, D2*12, -B2)"
          ]
        ]
      },
      "notice": "Tulis rumus kalkulasi pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_48",
        "name": "Simulasi KPR",
        "columns": [
          {
            "key": "deb",
            "label": "Nama Debitur",
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
            "key": "angsuran",
            "label": "Angsuran / Bulan (PMT)",
            "letter": "E"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "deb": "Andi Pratama",
              "plafon": 500000000,
              "bunga": 0.08,
              "tenor": 15,
              "angsuran": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "deb": "Citra Kirana",
              "plafon": 350000000,
              "bunga": 0.075,
              "tenor": 10,
              "angsuran": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "deb": "Dimas Anggara",
              "plafon": 800000000,
              "bunga": 0.085,
              "tenor": 20,
              "angsuran": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "deb": "Eka Saputra",
              "plafon": 250000000,
              "bunga": 0.07,
              "tenor": 5,
              "angsuran": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "angsuran",
            "letter": "E",
            "label": "Angsuran / Bulan (PMT)",
            "description": "Hitung cicilan per bulan menggunakan fungsi PMT.",
            "expectedRowAnswers": {
              "2": 4778260,
              "3": 4153835,
              "4": 6942621,
              "5": 4950371
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Angsuran / Bulan (PMT)",
        "formula": "=PMT(C2/12, D2*12, -B2)",
        "explanation": "Hitung cicilan per bulan menggunakan fungsi PMT."
      }
    ]
  },
  {
    "id": "EX-049",
    "number": 49,
    "code": "#SBEM049",
    "title": "Rekonsiliasi Bank & Buku Kas Perusahaan (Studi Kasus #49)",
    "category": "Kombinasi",
    "difficulty": "EXTREME",
    "difficultyStars": 5,
    "tags": [
      "Cek Otomatis",
      "Studi Kasus",
      "Kombinasi"
    ],
    "instructions": {
      "title": "EXTREME Level - Rekonsiliasi Bank & Buku Kas Perusahaan",
      "description": "Hitung selisih mutasi bank dan buku kas perusahaan.",
      "points": [
        "1. Periksa data pada tabel di bawah ini.",
        "2. Tuliskan formula pada kolom target (E) sesuai aturan yang ditentukan.",
        "3. Pastikan formula dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" untuk mengevaluasi kelulusan kasus."
      ],
      "helperTable": {
        "title": "Ketentuan Rumus",
        "headers": [
          "Target Kolom",
          "Formula Acuan"
        ],
        "rows": [
          [
            "Selisih (Rp)",
            "=ABS(C2-D2)"
          ]
        ]
      },
      "notice": "Tulis rumus kalkulasi pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_49",
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
            "label": "Status Audit",
            "letter": "F"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "tgl": "01/08/2026",
              "ket": "Setoran Tunai Kasir Toko",
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
              "ket": "Kliring Cek Vendor Supplier",
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
              "ket": "Pendapatan Jasa Giro Bunga",
              "bank": 180000,
              "buku": 0,
              "selisih": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "selisih",
            "letter": "E",
            "label": "Selisih (Rp)",
            "description": "Hitung selisih mutasi bank dan buku kas perusahaan.",
            "expectedRowAnswers": {
              "2": 0,
              "3": 0,
              "4": 25000,
              "5": 180000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Selisih (Rp)",
        "formula": "=ABS(C2-D2)",
        "explanation": "Hitung selisih mutasi bank dan buku kas perusahaan."
      }
    ]
  },
  {
    "id": "EX-050",
    "number": 50,
    "code": "#SBEM050",
    "title": "Pengolahan Nilai Rapor & Beasiswa Prestasi Siswa (Studi Kasus #50)",
    "category": "Logika",
    "difficulty": "MENENGAH",
    "difficultyStars": 3,
    "tags": [
      "Cek Otomatis",
      "Studi Kasus",
      "Logika"
    ],
    "instructions": {
      "title": "MENENGAH Level - Pengolahan Nilai Rapor & Beasiswa Prestasi Siswa",
      "description": "Hitung nilai akhir berbobot 30% Tugas + 30% UTS + 40% UAS.",
      "points": [
        "1. Periksa data pada tabel di bawah ini.",
        "2. Tuliskan formula pada kolom target (F) sesuai aturan yang ditentukan.",
        "3. Pastikan formula dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" untuk mengevaluasi kelulusan kasus."
      ],
      "helperTable": {
        "title": "Ketentuan Rumus",
        "headers": [
          "Target Kolom",
          "Formula Acuan"
        ],
        "rows": [
          [
            "Nilai Akhir",
            "=C2*0.3 + D2*0.3 + E2*0.4"
          ]
        ]
      },
      "notice": "Tulis rumus kalkulasi pada kolom yang telah disediakan."
    },
    "sheets": [
      {
        "id": "sheet_50",
        "name": "Rapor Siswa",
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
            "key": "tugas",
            "label": "Nilai Tugas (30%)",
            "letter": "C"
          },
          {
            "key": "uts",
            "label": "Nilai UTS (30%)",
            "letter": "D"
          },
          {
            "key": "uas",
            "label": "Nilai UAS (40%)",
            "letter": "E"
          },
          {
            "key": "akhir",
            "label": "Nilai Akhir",
            "letter": "F"
          },
          {
            "key": "beasiswa",
            "label": "Status Beasiswa",
            "letter": "G"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "nis": "202601",
              "nama": "Fajar Nugraha",
              "tugas": 85,
              "uts": 90,
              "uas": 92,
              "akhir": "?",
              "beasiswa": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "nis": "202602",
              "nama": "Gita Larasati",
              "tugas": 75,
              "uts": 80,
              "uas": 78,
              "akhir": "?",
              "beasiswa": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "nis": "202603",
              "nama": "Hendra Gunawan",
              "tugas": 90,
              "uts": 95,
              "uas": 94,
              "akhir": "?",
              "beasiswa": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "nis": "202604",
              "nama": "Indah Permatasari",
              "tugas": 60,
              "uts": 65,
              "uas": 70,
              "akhir": "?",
              "beasiswa": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "akhir",
            "letter": "F",
            "label": "Nilai Akhir",
            "description": "Hitung nilai akhir berbobot 30% Tugas + 30% UTS + 40% UAS.",
            "expectedRowAnswers": {
              "2": 89.3,
              "3": 77.7,
              "4": 93.1,
              "5": 65.5
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Nilai Akhir",
        "formula": "=C2*0.3 + D2*0.3 + E2*0.4",
        "explanation": "Hitung nilai akhir berbobot 30% Tugas + 30% UTS + 40% UAS."
      }
    ]
  }
];
