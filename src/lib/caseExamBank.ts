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
        "Level 1 (Very Easy): Cari nama siswa yang duduk di baris dan kolom yang ditentukan. Gunakan formula seperti =INDEX('Desk Layout'!A1:G11, Row, Col).",
        "Level 2 (Easy): Hitung total nilai siswa berdasarkan posisi meja R...C... dari sheet \"Student Data\".",
        "Level 3 (Medium): Hitung berapa banyak siswa yang namanya diawali huruf vokal (A, E, I, O, U) pada baris/kolom tertentu.",
        "Level 4 & 5: Hitung total nilai baris dan cari siswa dengan ranking tertentu.",
        "Bonus Questions: Jawab pertanyaan analisis global untuk poin tambahan turnamen."
      ],
      "helperTable": {
        "title": "Contoh Resmi Pengerjaan",
        "headers": [
          "Level",
          "Parameter",
          "Target Jawaban",
          "Rumus Contoh"
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
            "=VLOOKUP('Gita Firmansyah', 'Student Data'!B2:H78, 7, FALSE)"
          ],
          [
            "Level 3",
            "Row=R2",
            "3",
            "Hitung vokal: Intan, Ayu, Arif"
          ]
        ]
      },
      "notice": "Gunakan sheet \"Desk Layout\" dan \"Student Data\" untuk mencari data. Dilarang mengubah struktur tabel."
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
    "code": "#SBEM001",
    "title": "Latihan Soal Subtotal & Diskon Kasir Minimarket",
    "category": "Aritmatika",
    "difficulty": "PEMULA",
    "difficultyStars": 1,
    "tags": [
      "Kasir",
      "Aritmatika",
      "Cek Otomatis",
      "Spreadsheet Kasus"
    ],
    "instructions": {
      "title": "PEMULA Level - Latihan Soal Subtotal & Diskon Kasir Minimarket",
      "description": "Selesaikan lembar kerja kasus Latihan Soal Subtotal & Diskon Kasir Minimarket. Buka sheet utama untuk mengisi formula target sesuai data acuan pada sheet referensi.",
      "points": [
        "1. Periksa sheet \"Data Master\" untuk melihat tabel acuan harga/kategori/nama.",
        "2. Tulis rumus Excel dinamis pada kolom target (Answer) di sheet \"XL-Test\".",
        "3. Gunakan formula yang dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas untuk mengevaluasi kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Referensi Standar",
        "headers": [
          "Kategori Data",
          "Formula Saran"
        ],
        "rows": [
          [
            "Pencarian Rujukan",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Kondisi & Logika",
            "IF / IFS"
          ],
          [
            "Perhitungan Angka",
            "Operator Aritmatika / SUMIF / PMT"
          ]
        ]
      },
      "notice": "Dilarang mengubah tabel acuan. Tulis formula langsung pada tabel pengerjaan yang tersedia."
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
            "key": "item",
            "label": "Item / Subjek",
            "letter": "B"
          },
          {
            "key": "param1",
            "label": "Parameter 1",
            "letter": "C"
          },
          {
            "key": "param2",
            "label": "Parameter 2",
            "letter": "D"
          },
          {
            "key": "target_val",
            "label": "Target Answer (Formula)",
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
              "no": 1,
              "item": "Kasus Uji Alpha",
              "param1": 5000000,
              "param2": 3500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "item": "Kasus Uji Beta",
              "param1": 8500000,
              "param2": 7200000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "item": "Kasus Uji Gamma",
              "param1": 6000000,
              "param2": 5500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "item": "Kasus Uji Delta",
              "param1": 3000000,
              "param2": 2400000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "item": "Kasus Uji Epsilon",
              "param1": 2500000,
              "param2": 2100000,
              "target_val": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "target_val",
            "letter": "E",
            "label": "Target Answer",
            "description": "Kalkulasi selisih / rujukan: =C2-D2",
            "expectedRowAnswers": {
              "2": 1500000,
              "3": 1300000,
              "4": 500000,
              "5": 600000,
              "6": 400000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Verifikasi",
            "description": "Jika target >= 500000 LULUS: =IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "LULUS",
              "5": "LULUS",
              "6": "TIDAK LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_master",
        "name": "Data Master",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Referensi",
            "letter": "A"
          },
          {
            "key": "nama_ref",
            "label": "Nama Rujukan",
            "letter": "B"
          },
          {
            "key": "bobot",
            "label": "Bobot Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "nama_ref": "Kategori Standar 1",
              "bobot": 1500000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "nama_ref": "Kategori Standar 2",
              "bobot": 1300000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "nama_ref": "Kategori Standar 3",
              "bobot": 500000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Target Answer",
        "formula": "=C2-D2",
        "explanation": "Menghitung nilai selisih antara Parameter 1 dan Parameter 2"
      },
      {
        "columnLabel": "Status Verifikasi",
        "formula": "=IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelayakan batas nilai 500.000"
      }
    ]
  },
  {
    "id": "EX-003",
    "number": 3,
    "code": "#SBEM002",
    "title": "Laporan Laba Rugi Toko Roti Manis",
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
      "title": "PEMULA Level - Laporan Laba Rugi Toko Roti Manis",
      "description": "Selesaikan lembar kerja kasus Laporan Laba Rugi Toko Roti Manis. Buka sheet utama untuk mengisi formula target sesuai data acuan pada sheet referensi.",
      "points": [
        "1. Periksa sheet \"Data Master\" untuk melihat tabel acuan harga/kategori/nama.",
        "2. Tulis rumus Excel dinamis pada kolom target (Answer) di sheet \"XL-Test\".",
        "3. Gunakan formula yang dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas untuk mengevaluasi kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Referensi Standar",
        "headers": [
          "Kategori Data",
          "Formula Saran"
        ],
        "rows": [
          [
            "Pencarian Rujukan",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Kondisi & Logika",
            "IF / IFS"
          ],
          [
            "Perhitungan Angka",
            "Operator Aritmatika / SUMIF / PMT"
          ]
        ]
      },
      "notice": "Dilarang mengubah tabel acuan. Tulis formula langsung pada tabel pengerjaan yang tersedia."
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
            "key": "item",
            "label": "Item / Subjek",
            "letter": "B"
          },
          {
            "key": "param1",
            "label": "Parameter 1",
            "letter": "C"
          },
          {
            "key": "param2",
            "label": "Parameter 2",
            "letter": "D"
          },
          {
            "key": "target_val",
            "label": "Target Answer (Formula)",
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
              "no": 1,
              "item": "Kasus Uji Alpha",
              "param1": 5000000,
              "param2": 3500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "item": "Kasus Uji Beta",
              "param1": 8500000,
              "param2": 7200000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "item": "Kasus Uji Gamma",
              "param1": 6000000,
              "param2": 5500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "item": "Kasus Uji Delta",
              "param1": 3000000,
              "param2": 2400000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "item": "Kasus Uji Epsilon",
              "param1": 2500000,
              "param2": 2100000,
              "target_val": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "target_val",
            "letter": "E",
            "label": "Target Answer",
            "description": "Kalkulasi selisih / rujukan: =C2-D2",
            "expectedRowAnswers": {
              "2": 1500000,
              "3": 1300000,
              "4": 500000,
              "5": 600000,
              "6": 400000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Verifikasi",
            "description": "Jika target >= 500000 LULUS: =IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "LULUS",
              "5": "LULUS",
              "6": "TIDAK LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_master",
        "name": "Data Master",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Referensi",
            "letter": "A"
          },
          {
            "key": "nama_ref",
            "label": "Nama Rujukan",
            "letter": "B"
          },
          {
            "key": "bobot",
            "label": "Bobot Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "nama_ref": "Kategori Standar 1",
              "bobot": 1500000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "nama_ref": "Kategori Standar 2",
              "bobot": 1300000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "nama_ref": "Kategori Standar 3",
              "bobot": 500000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Target Answer",
        "formula": "=C2-D2",
        "explanation": "Menghitung nilai selisih antara Parameter 1 dan Parameter 2"
      },
      {
        "columnLabel": "Status Verifikasi",
        "formula": "=IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelayakan batas nilai 500.000"
      }
    ]
  },
  {
    "id": "EX-004",
    "number": 4,
    "code": "#SBEM003",
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
      "description": "Selesaikan lembar kerja kasus Kalkulasi Split Bill Makan Siang Kantor. Buka sheet utama untuk mengisi formula target sesuai data acuan pada sheet referensi.",
      "points": [
        "1. Periksa sheet \"Data Master\" untuk melihat tabel acuan harga/kategori/nama.",
        "2. Tulis rumus Excel dinamis pada kolom target (Answer) di sheet \"XL-Test\".",
        "3. Gunakan formula yang dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas untuk mengevaluasi kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Referensi Standar",
        "headers": [
          "Kategori Data",
          "Formula Saran"
        ],
        "rows": [
          [
            "Pencarian Rujukan",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Kondisi & Logika",
            "IF / IFS"
          ],
          [
            "Perhitungan Angka",
            "Operator Aritmatika / SUMIF / PMT"
          ]
        ]
      },
      "notice": "Dilarang mengubah tabel acuan. Tulis formula langsung pada tabel pengerjaan yang tersedia."
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
            "key": "item",
            "label": "Item / Subjek",
            "letter": "B"
          },
          {
            "key": "param1",
            "label": "Parameter 1",
            "letter": "C"
          },
          {
            "key": "param2",
            "label": "Parameter 2",
            "letter": "D"
          },
          {
            "key": "target_val",
            "label": "Target Answer (Formula)",
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
              "no": 1,
              "item": "Kasus Uji Alpha",
              "param1": 5000000,
              "param2": 3500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "item": "Kasus Uji Beta",
              "param1": 8500000,
              "param2": 7200000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "item": "Kasus Uji Gamma",
              "param1": 6000000,
              "param2": 5500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "item": "Kasus Uji Delta",
              "param1": 3000000,
              "param2": 2400000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "item": "Kasus Uji Epsilon",
              "param1": 2500000,
              "param2": 2100000,
              "target_val": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "target_val",
            "letter": "E",
            "label": "Target Answer",
            "description": "Kalkulasi selisih / rujukan: =C2-D2",
            "expectedRowAnswers": {
              "2": 1500000,
              "3": 1300000,
              "4": 500000,
              "5": 600000,
              "6": 400000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Verifikasi",
            "description": "Jika target >= 500000 LULUS: =IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "LULUS",
              "5": "LULUS",
              "6": "TIDAK LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_master",
        "name": "Data Master",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Referensi",
            "letter": "A"
          },
          {
            "key": "nama_ref",
            "label": "Nama Rujukan",
            "letter": "B"
          },
          {
            "key": "bobot",
            "label": "Bobot Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "nama_ref": "Kategori Standar 1",
              "bobot": 1500000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "nama_ref": "Kategori Standar 2",
              "bobot": 1300000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "nama_ref": "Kategori Standar 3",
              "bobot": 500000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Target Answer",
        "formula": "=C2-D2",
        "explanation": "Menghitung nilai selisih antara Parameter 1 dan Parameter 2"
      },
      {
        "columnLabel": "Status Verifikasi",
        "formula": "=IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelayakan batas nilai 500.000"
      }
    ]
  },
  {
    "id": "EX-005",
    "number": 5,
    "code": "#SBEM004",
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
      "description": "Selesaikan lembar kerja kasus Perhitungan Komisi Sales Otomotif. Buka sheet utama untuk mengisi formula target sesuai data acuan pada sheet referensi.",
      "points": [
        "1. Periksa sheet \"Data Master\" untuk melihat tabel acuan harga/kategori/nama.",
        "2. Tulis rumus Excel dinamis pada kolom target (Answer) di sheet \"XL-Test\".",
        "3. Gunakan formula yang dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas untuk mengevaluasi kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Referensi Standar",
        "headers": [
          "Kategori Data",
          "Formula Saran"
        ],
        "rows": [
          [
            "Pencarian Rujukan",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Kondisi & Logika",
            "IF / IFS"
          ],
          [
            "Perhitungan Angka",
            "Operator Aritmatika / SUMIF / PMT"
          ]
        ]
      },
      "notice": "Dilarang mengubah tabel acuan. Tulis formula langsung pada tabel pengerjaan yang tersedia."
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
            "key": "item",
            "label": "Item / Subjek",
            "letter": "B"
          },
          {
            "key": "param1",
            "label": "Parameter 1",
            "letter": "C"
          },
          {
            "key": "param2",
            "label": "Parameter 2",
            "letter": "D"
          },
          {
            "key": "target_val",
            "label": "Target Answer (Formula)",
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
              "no": 1,
              "item": "Kasus Uji Alpha",
              "param1": 5000000,
              "param2": 3500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "item": "Kasus Uji Beta",
              "param1": 8500000,
              "param2": 7200000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "item": "Kasus Uji Gamma",
              "param1": 6000000,
              "param2": 5500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "item": "Kasus Uji Delta",
              "param1": 3000000,
              "param2": 2400000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "item": "Kasus Uji Epsilon",
              "param1": 2500000,
              "param2": 2100000,
              "target_val": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "target_val",
            "letter": "E",
            "label": "Target Answer",
            "description": "Kalkulasi selisih / rujukan: =C2-D2",
            "expectedRowAnswers": {
              "2": 1500000,
              "3": 1300000,
              "4": 500000,
              "5": 600000,
              "6": 400000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Verifikasi",
            "description": "Jika target >= 500000 LULUS: =IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "LULUS",
              "5": "LULUS",
              "6": "TIDAK LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_master",
        "name": "Data Master",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Referensi",
            "letter": "A"
          },
          {
            "key": "nama_ref",
            "label": "Nama Rujukan",
            "letter": "B"
          },
          {
            "key": "bobot",
            "label": "Bobot Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "nama_ref": "Kategori Standar 1",
              "bobot": 1500000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "nama_ref": "Kategori Standar 2",
              "bobot": 1300000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "nama_ref": "Kategori Standar 3",
              "bobot": 500000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Target Answer",
        "formula": "=C2-D2",
        "explanation": "Menghitung nilai selisih antara Parameter 1 dan Parameter 2"
      },
      {
        "columnLabel": "Status Verifikasi",
        "formula": "=IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelayakan batas nilai 500.000"
      }
    ]
  },
  {
    "id": "EX-006",
    "number": 6,
    "code": "#SBEM005",
    "title": "Estimasi Biaya Renovasi Rumah & Material",
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
      "title": "PEMULA Level - Estimasi Biaya Renovasi Rumah & Material",
      "description": "Selesaikan lembar kerja kasus Estimasi Biaya Renovasi Rumah & Material. Buka sheet utama untuk mengisi formula target sesuai data acuan pada sheet referensi.",
      "points": [
        "1. Periksa sheet \"Data Master\" untuk melihat tabel acuan harga/kategori/nama.",
        "2. Tulis rumus Excel dinamis pada kolom target (Answer) di sheet \"XL-Test\".",
        "3. Gunakan formula yang dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas untuk mengevaluasi kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Referensi Standar",
        "headers": [
          "Kategori Data",
          "Formula Saran"
        ],
        "rows": [
          [
            "Pencarian Rujukan",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Kondisi & Logika",
            "IF / IFS"
          ],
          [
            "Perhitungan Angka",
            "Operator Aritmatika / SUMIF / PMT"
          ]
        ]
      },
      "notice": "Dilarang mengubah tabel acuan. Tulis formula langsung pada tabel pengerjaan yang tersedia."
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
            "key": "item",
            "label": "Item / Subjek",
            "letter": "B"
          },
          {
            "key": "param1",
            "label": "Parameter 1",
            "letter": "C"
          },
          {
            "key": "param2",
            "label": "Parameter 2",
            "letter": "D"
          },
          {
            "key": "target_val",
            "label": "Target Answer (Formula)",
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
              "no": 1,
              "item": "Kasus Uji Alpha",
              "param1": 5000000,
              "param2": 3500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "item": "Kasus Uji Beta",
              "param1": 8500000,
              "param2": 7200000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "item": "Kasus Uji Gamma",
              "param1": 6000000,
              "param2": 5500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "item": "Kasus Uji Delta",
              "param1": 3000000,
              "param2": 2400000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "item": "Kasus Uji Epsilon",
              "param1": 2500000,
              "param2": 2100000,
              "target_val": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "target_val",
            "letter": "E",
            "label": "Target Answer",
            "description": "Kalkulasi selisih / rujukan: =C2-D2",
            "expectedRowAnswers": {
              "2": 1500000,
              "3": 1300000,
              "4": 500000,
              "5": 600000,
              "6": 400000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Verifikasi",
            "description": "Jika target >= 500000 LULUS: =IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "LULUS",
              "5": "LULUS",
              "6": "TIDAK LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_master",
        "name": "Data Master",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Referensi",
            "letter": "A"
          },
          {
            "key": "nama_ref",
            "label": "Nama Rujukan",
            "letter": "B"
          },
          {
            "key": "bobot",
            "label": "Bobot Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "nama_ref": "Kategori Standar 1",
              "bobot": 1500000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "nama_ref": "Kategori Standar 2",
              "bobot": 1300000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "nama_ref": "Kategori Standar 3",
              "bobot": 500000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Target Answer",
        "formula": "=C2-D2",
        "explanation": "Menghitung nilai selisih antara Parameter 1 dan Parameter 2"
      },
      {
        "columnLabel": "Status Verifikasi",
        "formula": "=IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelayakan batas nilai 500.000"
      }
    ]
  },
  {
    "id": "EX-007",
    "number": 7,
    "code": "#SBEM006",
    "title": "Pencatatan Stok Masuk & Keluar Gudang",
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
      "title": "PEMULA Level - Pencatatan Stok Masuk & Keluar Gudang",
      "description": "Selesaikan lembar kerja kasus Pencatatan Stok Masuk & Keluar Gudang. Buka sheet utama untuk mengisi formula target sesuai data acuan pada sheet referensi.",
      "points": [
        "1. Periksa sheet \"Data Master\" untuk melihat tabel acuan harga/kategori/nama.",
        "2. Tulis rumus Excel dinamis pada kolom target (Answer) di sheet \"XL-Test\".",
        "3. Gunakan formula yang dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas untuk mengevaluasi kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Referensi Standar",
        "headers": [
          "Kategori Data",
          "Formula Saran"
        ],
        "rows": [
          [
            "Pencarian Rujukan",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Kondisi & Logika",
            "IF / IFS"
          ],
          [
            "Perhitungan Angka",
            "Operator Aritmatika / SUMIF / PMT"
          ]
        ]
      },
      "notice": "Dilarang mengubah tabel acuan. Tulis formula langsung pada tabel pengerjaan yang tersedia."
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
            "key": "item",
            "label": "Item / Subjek",
            "letter": "B"
          },
          {
            "key": "param1",
            "label": "Parameter 1",
            "letter": "C"
          },
          {
            "key": "param2",
            "label": "Parameter 2",
            "letter": "D"
          },
          {
            "key": "target_val",
            "label": "Target Answer (Formula)",
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
              "no": 1,
              "item": "Kasus Uji Alpha",
              "param1": 5000000,
              "param2": 3500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "item": "Kasus Uji Beta",
              "param1": 8500000,
              "param2": 7200000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "item": "Kasus Uji Gamma",
              "param1": 6000000,
              "param2": 5500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "item": "Kasus Uji Delta",
              "param1": 3000000,
              "param2": 2400000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "item": "Kasus Uji Epsilon",
              "param1": 2500000,
              "param2": 2100000,
              "target_val": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "target_val",
            "letter": "E",
            "label": "Target Answer",
            "description": "Kalkulasi selisih / rujukan: =C2-D2",
            "expectedRowAnswers": {
              "2": 1500000,
              "3": 1300000,
              "4": 500000,
              "5": 600000,
              "6": 400000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Verifikasi",
            "description": "Jika target >= 500000 LULUS: =IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "LULUS",
              "5": "LULUS",
              "6": "TIDAK LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_master",
        "name": "Data Master",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Referensi",
            "letter": "A"
          },
          {
            "key": "nama_ref",
            "label": "Nama Rujukan",
            "letter": "B"
          },
          {
            "key": "bobot",
            "label": "Bobot Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "nama_ref": "Kategori Standar 1",
              "bobot": 1500000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "nama_ref": "Kategori Standar 2",
              "bobot": 1300000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "nama_ref": "Kategori Standar 3",
              "bobot": 500000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Target Answer",
        "formula": "=C2-D2",
        "explanation": "Menghitung nilai selisih antara Parameter 1 dan Parameter 2"
      },
      {
        "columnLabel": "Status Verifikasi",
        "formula": "=IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelayakan batas nilai 500.000"
      }
    ]
  },
  {
    "id": "EX-008",
    "number": 8,
    "code": "#SBEM007",
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
      "description": "Selesaikan lembar kerja kasus Perhitungan Upah Lembur Karyawan Harian. Buka sheet utama untuk mengisi formula target sesuai data acuan pada sheet referensi.",
      "points": [
        "1. Periksa sheet \"Data Master\" untuk melihat tabel acuan harga/kategori/nama.",
        "2. Tulis rumus Excel dinamis pada kolom target (Answer) di sheet \"XL-Test\".",
        "3. Gunakan formula yang dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas untuk mengevaluasi kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Referensi Standar",
        "headers": [
          "Kategori Data",
          "Formula Saran"
        ],
        "rows": [
          [
            "Pencarian Rujukan",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Kondisi & Logika",
            "IF / IFS"
          ],
          [
            "Perhitungan Angka",
            "Operator Aritmatika / SUMIF / PMT"
          ]
        ]
      },
      "notice": "Dilarang mengubah tabel acuan. Tulis formula langsung pada tabel pengerjaan yang tersedia."
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
            "key": "item",
            "label": "Item / Subjek",
            "letter": "B"
          },
          {
            "key": "param1",
            "label": "Parameter 1",
            "letter": "C"
          },
          {
            "key": "param2",
            "label": "Parameter 2",
            "letter": "D"
          },
          {
            "key": "target_val",
            "label": "Target Answer (Formula)",
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
              "no": 1,
              "item": "Kasus Uji Alpha",
              "param1": 5000000,
              "param2": 3500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "item": "Kasus Uji Beta",
              "param1": 8500000,
              "param2": 7200000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "item": "Kasus Uji Gamma",
              "param1": 6000000,
              "param2": 5500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "item": "Kasus Uji Delta",
              "param1": 3000000,
              "param2": 2400000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "item": "Kasus Uji Epsilon",
              "param1": 2500000,
              "param2": 2100000,
              "target_val": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "target_val",
            "letter": "E",
            "label": "Target Answer",
            "description": "Kalkulasi selisih / rujukan: =C2-D2",
            "expectedRowAnswers": {
              "2": 1500000,
              "3": 1300000,
              "4": 500000,
              "5": 600000,
              "6": 400000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Verifikasi",
            "description": "Jika target >= 500000 LULUS: =IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "LULUS",
              "5": "LULUS",
              "6": "TIDAK LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_master",
        "name": "Data Master",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Referensi",
            "letter": "A"
          },
          {
            "key": "nama_ref",
            "label": "Nama Rujukan",
            "letter": "B"
          },
          {
            "key": "bobot",
            "label": "Bobot Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "nama_ref": "Kategori Standar 1",
              "bobot": 1500000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "nama_ref": "Kategori Standar 2",
              "bobot": 1300000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "nama_ref": "Kategori Standar 3",
              "bobot": 500000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Target Answer",
        "formula": "=C2-D2",
        "explanation": "Menghitung nilai selisih antara Parameter 1 dan Parameter 2"
      },
      {
        "columnLabel": "Status Verifikasi",
        "formula": "=IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelayakan batas nilai 500.000"
      }
    ]
  },
  {
    "id": "EX-009",
    "number": 9,
    "code": "#SBEM008",
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
      "description": "Selesaikan lembar kerja kasus Analisis Margin Keuntungan Menu Cafe. Buka sheet utama untuk mengisi formula target sesuai data acuan pada sheet referensi.",
      "points": [
        "1. Periksa sheet \"Data Master\" untuk melihat tabel acuan harga/kategori/nama.",
        "2. Tulis rumus Excel dinamis pada kolom target (Answer) di sheet \"XL-Test\".",
        "3. Gunakan formula yang dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas untuk mengevaluasi kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Referensi Standar",
        "headers": [
          "Kategori Data",
          "Formula Saran"
        ],
        "rows": [
          [
            "Pencarian Rujukan",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Kondisi & Logika",
            "IF / IFS"
          ],
          [
            "Perhitungan Angka",
            "Operator Aritmatika / SUMIF / PMT"
          ]
        ]
      },
      "notice": "Dilarang mengubah tabel acuan. Tulis formula langsung pada tabel pengerjaan yang tersedia."
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
            "key": "item",
            "label": "Item / Subjek",
            "letter": "B"
          },
          {
            "key": "param1",
            "label": "Parameter 1",
            "letter": "C"
          },
          {
            "key": "param2",
            "label": "Parameter 2",
            "letter": "D"
          },
          {
            "key": "target_val",
            "label": "Target Answer (Formula)",
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
              "no": 1,
              "item": "Kasus Uji Alpha",
              "param1": 5000000,
              "param2": 3500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "item": "Kasus Uji Beta",
              "param1": 8500000,
              "param2": 7200000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "item": "Kasus Uji Gamma",
              "param1": 6000000,
              "param2": 5500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "item": "Kasus Uji Delta",
              "param1": 3000000,
              "param2": 2400000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "item": "Kasus Uji Epsilon",
              "param1": 2500000,
              "param2": 2100000,
              "target_val": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "target_val",
            "letter": "E",
            "label": "Target Answer",
            "description": "Kalkulasi selisih / rujukan: =C2-D2",
            "expectedRowAnswers": {
              "2": 1500000,
              "3": 1300000,
              "4": 500000,
              "5": 600000,
              "6": 400000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Verifikasi",
            "description": "Jika target >= 500000 LULUS: =IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "LULUS",
              "5": "LULUS",
              "6": "TIDAK LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_master",
        "name": "Data Master",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Referensi",
            "letter": "A"
          },
          {
            "key": "nama_ref",
            "label": "Nama Rujukan",
            "letter": "B"
          },
          {
            "key": "bobot",
            "label": "Bobot Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "nama_ref": "Kategori Standar 1",
              "bobot": 1500000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "nama_ref": "Kategori Standar 2",
              "bobot": 1300000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "nama_ref": "Kategori Standar 3",
              "bobot": 500000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Target Answer",
        "formula": "=C2-D2",
        "explanation": "Menghitung nilai selisih antara Parameter 1 dan Parameter 2"
      },
      {
        "columnLabel": "Status Verifikasi",
        "formula": "=IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelayakan batas nilai 500.000"
      }
    ]
  },
  {
    "id": "EX-010",
    "number": 10,
    "code": "#SBEM009",
    "title": "Rekapitulasi Total & Rata-rata Ujian Siswa",
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
      "title": "PEMULA Level - Rekapitulasi Total & Rata-rata Ujian Siswa",
      "description": "Selesaikan lembar kerja kasus Rekapitulasi Total & Rata-rata Ujian Siswa. Buka sheet utama untuk mengisi formula target sesuai data acuan pada sheet referensi.",
      "points": [
        "1. Periksa sheet \"Data Master\" untuk melihat tabel acuan harga/kategori/nama.",
        "2. Tulis rumus Excel dinamis pada kolom target (Answer) di sheet \"XL-Test\".",
        "3. Gunakan formula yang dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas untuk mengevaluasi kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Referensi Standar",
        "headers": [
          "Kategori Data",
          "Formula Saran"
        ],
        "rows": [
          [
            "Pencarian Rujukan",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Kondisi & Logika",
            "IF / IFS"
          ],
          [
            "Perhitungan Angka",
            "Operator Aritmatika / SUMIF / PMT"
          ]
        ]
      },
      "notice": "Dilarang mengubah tabel acuan. Tulis formula langsung pada tabel pengerjaan yang tersedia."
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
            "key": "item",
            "label": "Item / Subjek",
            "letter": "B"
          },
          {
            "key": "param1",
            "label": "Parameter 1",
            "letter": "C"
          },
          {
            "key": "param2",
            "label": "Parameter 2",
            "letter": "D"
          },
          {
            "key": "target_val",
            "label": "Target Answer (Formula)",
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
              "no": 1,
              "item": "Kasus Uji Alpha",
              "param1": 5000000,
              "param2": 3500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "item": "Kasus Uji Beta",
              "param1": 8500000,
              "param2": 7200000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "item": "Kasus Uji Gamma",
              "param1": 6000000,
              "param2": 5500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "item": "Kasus Uji Delta",
              "param1": 3000000,
              "param2": 2400000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "item": "Kasus Uji Epsilon",
              "param1": 2500000,
              "param2": 2100000,
              "target_val": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "target_val",
            "letter": "E",
            "label": "Target Answer",
            "description": "Kalkulasi selisih / rujukan: =C2-D2",
            "expectedRowAnswers": {
              "2": 1500000,
              "3": 1300000,
              "4": 500000,
              "5": 600000,
              "6": 400000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Verifikasi",
            "description": "Jika target >= 500000 LULUS: =IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "LULUS",
              "5": "LULUS",
              "6": "TIDAK LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_master",
        "name": "Data Master",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Referensi",
            "letter": "A"
          },
          {
            "key": "nama_ref",
            "label": "Nama Rujukan",
            "letter": "B"
          },
          {
            "key": "bobot",
            "label": "Bobot Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "nama_ref": "Kategori Standar 1",
              "bobot": 1500000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "nama_ref": "Kategori Standar 2",
              "bobot": 1300000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "nama_ref": "Kategori Standar 3",
              "bobot": 500000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Target Answer",
        "formula": "=C2-D2",
        "explanation": "Menghitung nilai selisih antara Parameter 1 dan Parameter 2"
      },
      {
        "columnLabel": "Status Verifikasi",
        "formula": "=IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelayakan batas nilai 500.000"
      }
    ]
  },
  {
    "id": "EX-011",
    "number": 11,
    "code": "#SBEM010",
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
      "description": "Selesaikan lembar kerja kasus Statistik Penjualan Harian Cabang Minimarket. Buka sheet utama untuk mengisi formula target sesuai data acuan pada sheet referensi.",
      "points": [
        "1. Periksa sheet \"Data Master\" untuk melihat tabel acuan harga/kategori/nama.",
        "2. Tulis rumus Excel dinamis pada kolom target (Answer) di sheet \"XL-Test\".",
        "3. Gunakan formula yang dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas untuk mengevaluasi kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Referensi Standar",
        "headers": [
          "Kategori Data",
          "Formula Saran"
        ],
        "rows": [
          [
            "Pencarian Rujukan",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Kondisi & Logika",
            "IF / IFS"
          ],
          [
            "Perhitungan Angka",
            "Operator Aritmatika / SUMIF / PMT"
          ]
        ]
      },
      "notice": "Dilarang mengubah tabel acuan. Tulis formula langsung pada tabel pengerjaan yang tersedia."
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
            "key": "item",
            "label": "Item / Subjek",
            "letter": "B"
          },
          {
            "key": "param1",
            "label": "Parameter 1",
            "letter": "C"
          },
          {
            "key": "param2",
            "label": "Parameter 2",
            "letter": "D"
          },
          {
            "key": "target_val",
            "label": "Target Answer (Formula)",
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
              "no": 1,
              "item": "Kasus Uji Alpha",
              "param1": 5000000,
              "param2": 3500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "item": "Kasus Uji Beta",
              "param1": 8500000,
              "param2": 7200000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "item": "Kasus Uji Gamma",
              "param1": 6000000,
              "param2": 5500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "item": "Kasus Uji Delta",
              "param1": 3000000,
              "param2": 2400000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "item": "Kasus Uji Epsilon",
              "param1": 2500000,
              "param2": 2100000,
              "target_val": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "target_val",
            "letter": "E",
            "label": "Target Answer",
            "description": "Kalkulasi selisih / rujukan: =C2-D2",
            "expectedRowAnswers": {
              "2": 1500000,
              "3": 1300000,
              "4": 500000,
              "5": 600000,
              "6": 400000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Verifikasi",
            "description": "Jika target >= 500000 LULUS: =IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "LULUS",
              "5": "LULUS",
              "6": "TIDAK LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_master",
        "name": "Data Master",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Referensi",
            "letter": "A"
          },
          {
            "key": "nama_ref",
            "label": "Nama Rujukan",
            "letter": "B"
          },
          {
            "key": "bobot",
            "label": "Bobot Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "nama_ref": "Kategori Standar 1",
              "bobot": 1500000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "nama_ref": "Kategori Standar 2",
              "bobot": 1300000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "nama_ref": "Kategori Standar 3",
              "bobot": 500000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Target Answer",
        "formula": "=C2-D2",
        "explanation": "Menghitung nilai selisih antara Parameter 1 dan Parameter 2"
      },
      {
        "columnLabel": "Status Verifikasi",
        "formula": "=IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelayakan batas nilai 500.000"
      }
    ]
  },
  {
    "id": "EX-012",
    "number": 12,
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
      "description": "Selesaikan lembar kerja kasus Latihan Soal Excel Packing Dus Pesanan. Buka sheet utama untuk mengisi formula target sesuai data acuan pada sheet referensi.",
      "points": [
        "1. Periksa sheet \"Data Master\" untuk melihat tabel acuan harga/kategori/nama.",
        "2. Tulis rumus Excel dinamis pada kolom target (Answer) di sheet \"XL-Test\".",
        "3. Gunakan formula yang dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas untuk mengevaluasi kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Referensi Standar",
        "headers": [
          "Kategori Data",
          "Formula Saran"
        ],
        "rows": [
          [
            "Pencarian Rujukan",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Kondisi & Logika",
            "IF / IFS"
          ],
          [
            "Perhitungan Angka",
            "Operator Aritmatika / SUMIF / PMT"
          ]
        ]
      },
      "notice": "Dilarang mengubah tabel acuan. Tulis formula langsung pada tabel pengerjaan yang tersedia."
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
            "key": "item",
            "label": "Item / Subjek",
            "letter": "B"
          },
          {
            "key": "param1",
            "label": "Parameter 1",
            "letter": "C"
          },
          {
            "key": "param2",
            "label": "Parameter 2",
            "letter": "D"
          },
          {
            "key": "target_val",
            "label": "Target Answer (Formula)",
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
              "no": 1,
              "item": "Kasus Uji Alpha",
              "param1": 5000000,
              "param2": 3500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "item": "Kasus Uji Beta",
              "param1": 8500000,
              "param2": 7200000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "item": "Kasus Uji Gamma",
              "param1": 6000000,
              "param2": 5500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "item": "Kasus Uji Delta",
              "param1": 3000000,
              "param2": 2400000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "item": "Kasus Uji Epsilon",
              "param1": 2500000,
              "param2": 2100000,
              "target_val": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "target_val",
            "letter": "E",
            "label": "Target Answer",
            "description": "Kalkulasi selisih / rujukan: =C2-D2",
            "expectedRowAnswers": {
              "2": 1500000,
              "3": 1300000,
              "4": 500000,
              "5": 600000,
              "6": 400000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Verifikasi",
            "description": "Jika target >= 500000 LULUS: =IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "LULUS",
              "5": "LULUS",
              "6": "TIDAK LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_master",
        "name": "Data Master",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Referensi",
            "letter": "A"
          },
          {
            "key": "nama_ref",
            "label": "Nama Rujukan",
            "letter": "B"
          },
          {
            "key": "bobot",
            "label": "Bobot Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "nama_ref": "Kategori Standar 1",
              "bobot": 1500000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "nama_ref": "Kategori Standar 2",
              "bobot": 1300000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "nama_ref": "Kategori Standar 3",
              "bobot": 500000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Target Answer",
        "formula": "=C2-D2",
        "explanation": "Menghitung nilai selisih antara Parameter 1 dan Parameter 2"
      },
      {
        "columnLabel": "Status Verifikasi",
        "formula": "=IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelayakan batas nilai 500.000"
      }
    ]
  },
  {
    "id": "EX-013",
    "number": 13,
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
      "description": "Selesaikan lembar kerja kasus Rekapitulasi Omset Sales per Wilayah (SUMIF). Buka sheet utama untuk mengisi formula target sesuai data acuan pada sheet referensi.",
      "points": [
        "1. Periksa sheet \"Data Master\" untuk melihat tabel acuan harga/kategori/nama.",
        "2. Tulis rumus Excel dinamis pada kolom target (Answer) di sheet \"XL-Test\".",
        "3. Gunakan formula yang dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas untuk mengevaluasi kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Referensi Standar",
        "headers": [
          "Kategori Data",
          "Formula Saran"
        ],
        "rows": [
          [
            "Pencarian Rujukan",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Kondisi & Logika",
            "IF / IFS"
          ],
          [
            "Perhitungan Angka",
            "Operator Aritmatika / SUMIF / PMT"
          ]
        ]
      },
      "notice": "Dilarang mengubah tabel acuan. Tulis formula langsung pada tabel pengerjaan yang tersedia."
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
            "key": "item",
            "label": "Item / Subjek",
            "letter": "B"
          },
          {
            "key": "param1",
            "label": "Parameter 1",
            "letter": "C"
          },
          {
            "key": "param2",
            "label": "Parameter 2",
            "letter": "D"
          },
          {
            "key": "target_val",
            "label": "Target Answer (Formula)",
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
              "no": 1,
              "item": "Kasus Uji Alpha",
              "param1": 5000000,
              "param2": 3500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "item": "Kasus Uji Beta",
              "param1": 8500000,
              "param2": 7200000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "item": "Kasus Uji Gamma",
              "param1": 6000000,
              "param2": 5500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "item": "Kasus Uji Delta",
              "param1": 3000000,
              "param2": 2400000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "item": "Kasus Uji Epsilon",
              "param1": 2500000,
              "param2": 2100000,
              "target_val": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "target_val",
            "letter": "E",
            "label": "Target Answer",
            "description": "Kalkulasi selisih / rujukan: =C2-D2",
            "expectedRowAnswers": {
              "2": 1500000,
              "3": 1300000,
              "4": 500000,
              "5": 600000,
              "6": 400000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Verifikasi",
            "description": "Jika target >= 500000 LULUS: =IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "LULUS",
              "5": "LULUS",
              "6": "TIDAK LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_master",
        "name": "Data Master",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Referensi",
            "letter": "A"
          },
          {
            "key": "nama_ref",
            "label": "Nama Rujukan",
            "letter": "B"
          },
          {
            "key": "bobot",
            "label": "Bobot Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "nama_ref": "Kategori Standar 1",
              "bobot": 1500000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "nama_ref": "Kategori Standar 2",
              "bobot": 1300000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "nama_ref": "Kategori Standar 3",
              "bobot": 500000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Target Answer",
        "formula": "=C2-D2",
        "explanation": "Menghitung nilai selisih antara Parameter 1 dan Parameter 2"
      },
      {
        "columnLabel": "Status Verifikasi",
        "formula": "=IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelayakan batas nilai 500.000"
      }
    ]
  },
  {
    "id": "EX-014",
    "number": 14,
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
      "description": "Selesaikan lembar kerja kasus Hitung Frekuensi Rating Kepuasan Pelanggan. Buka sheet utama untuk mengisi formula target sesuai data acuan pada sheet referensi.",
      "points": [
        "1. Periksa sheet \"Data Master\" untuk melihat tabel acuan harga/kategori/nama.",
        "2. Tulis rumus Excel dinamis pada kolom target (Answer) di sheet \"XL-Test\".",
        "3. Gunakan formula yang dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas untuk mengevaluasi kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Referensi Standar",
        "headers": [
          "Kategori Data",
          "Formula Saran"
        ],
        "rows": [
          [
            "Pencarian Rujukan",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Kondisi & Logika",
            "IF / IFS"
          ],
          [
            "Perhitungan Angka",
            "Operator Aritmatika / SUMIF / PMT"
          ]
        ]
      },
      "notice": "Dilarang mengubah tabel acuan. Tulis formula langsung pada tabel pengerjaan yang tersedia."
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
            "key": "item",
            "label": "Item / Subjek",
            "letter": "B"
          },
          {
            "key": "param1",
            "label": "Parameter 1",
            "letter": "C"
          },
          {
            "key": "param2",
            "label": "Parameter 2",
            "letter": "D"
          },
          {
            "key": "target_val",
            "label": "Target Answer (Formula)",
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
              "no": 1,
              "item": "Kasus Uji Alpha",
              "param1": 5000000,
              "param2": 3500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "item": "Kasus Uji Beta",
              "param1": 8500000,
              "param2": 7200000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "item": "Kasus Uji Gamma",
              "param1": 6000000,
              "param2": 5500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "item": "Kasus Uji Delta",
              "param1": 3000000,
              "param2": 2400000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "item": "Kasus Uji Epsilon",
              "param1": 2500000,
              "param2": 2100000,
              "target_val": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "target_val",
            "letter": "E",
            "label": "Target Answer",
            "description": "Kalkulasi selisih / rujukan: =C2-D2",
            "expectedRowAnswers": {
              "2": 1500000,
              "3": 1300000,
              "4": 500000,
              "5": 600000,
              "6": 400000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Verifikasi",
            "description": "Jika target >= 500000 LULUS: =IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "LULUS",
              "5": "LULUS",
              "6": "TIDAK LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_master",
        "name": "Data Master",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Referensi",
            "letter": "A"
          },
          {
            "key": "nama_ref",
            "label": "Nama Rujukan",
            "letter": "B"
          },
          {
            "key": "bobot",
            "label": "Bobot Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "nama_ref": "Kategori Standar 1",
              "bobot": 1500000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "nama_ref": "Kategori Standar 2",
              "bobot": 1300000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "nama_ref": "Kategori Standar 3",
              "bobot": 500000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Target Answer",
        "formula": "=C2-D2",
        "explanation": "Menghitung nilai selisih antara Parameter 1 dan Parameter 2"
      },
      {
        "columnLabel": "Status Verifikasi",
        "formula": "=IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelayakan batas nilai 500.000"
      }
    ]
  },
  {
    "id": "EX-015",
    "number": 15,
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
      "description": "Selesaikan lembar kerja kasus Standardisasi Format Nama Lengkap Karyawan (PROPER). Buka sheet utama untuk mengisi formula target sesuai data acuan pada sheet referensi.",
      "points": [
        "1. Periksa sheet \"Data Master\" untuk melihat tabel acuan harga/kategori/nama.",
        "2. Tulis rumus Excel dinamis pada kolom target (Answer) di sheet \"XL-Test\".",
        "3. Gunakan formula yang dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas untuk mengevaluasi kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Referensi Standar",
        "headers": [
          "Kategori Data",
          "Formula Saran"
        ],
        "rows": [
          [
            "Pencarian Rujukan",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Kondisi & Logika",
            "IF / IFS"
          ],
          [
            "Perhitungan Angka",
            "Operator Aritmatika / SUMIF / PMT"
          ]
        ]
      },
      "notice": "Dilarang mengubah tabel acuan. Tulis formula langsung pada tabel pengerjaan yang tersedia."
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
            "key": "item",
            "label": "Item / Subjek",
            "letter": "B"
          },
          {
            "key": "param1",
            "label": "Parameter 1",
            "letter": "C"
          },
          {
            "key": "param2",
            "label": "Parameter 2",
            "letter": "D"
          },
          {
            "key": "target_val",
            "label": "Target Answer (Formula)",
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
              "no": 1,
              "item": "Kasus Uji Alpha",
              "param1": 5000000,
              "param2": 3500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "item": "Kasus Uji Beta",
              "param1": 8500000,
              "param2": 7200000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "item": "Kasus Uji Gamma",
              "param1": 6000000,
              "param2": 5500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "item": "Kasus Uji Delta",
              "param1": 3000000,
              "param2": 2400000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "item": "Kasus Uji Epsilon",
              "param1": 2500000,
              "param2": 2100000,
              "target_val": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "target_val",
            "letter": "E",
            "label": "Target Answer",
            "description": "Kalkulasi selisih / rujukan: =C2-D2",
            "expectedRowAnswers": {
              "2": 1500000,
              "3": 1300000,
              "4": 500000,
              "5": 600000,
              "6": 400000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Verifikasi",
            "description": "Jika target >= 500000 LULUS: =IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "LULUS",
              "5": "LULUS",
              "6": "TIDAK LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_master",
        "name": "Data Master",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Referensi",
            "letter": "A"
          },
          {
            "key": "nama_ref",
            "label": "Nama Rujukan",
            "letter": "B"
          },
          {
            "key": "bobot",
            "label": "Bobot Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "nama_ref": "Kategori Standar 1",
              "bobot": 1500000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "nama_ref": "Kategori Standar 2",
              "bobot": 1300000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "nama_ref": "Kategori Standar 3",
              "bobot": 500000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Target Answer",
        "formula": "=C2-D2",
        "explanation": "Menghitung nilai selisih antara Parameter 1 dan Parameter 2"
      },
      {
        "columnLabel": "Status Verifikasi",
        "formula": "=IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelayakan batas nilai 500.000"
      }
    ]
  },
  {
    "id": "EX-016",
    "number": 16,
    "code": "#SBEM015",
    "title": "Ekstraksi Kode SKU & Kategori Barang (LEFT/MID/RIGHT)",
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
      "title": "MENENGAH Level - Ekstraksi Kode SKU & Kategori Barang (LEFT/MID/RIGHT)",
      "description": "Selesaikan lembar kerja kasus Ekstraksi Kode SKU & Kategori Barang (LEFT/MID/RIGHT). Buka sheet utama untuk mengisi formula target sesuai data acuan pada sheet referensi.",
      "points": [
        "1. Periksa sheet \"Data Master\" untuk melihat tabel acuan harga/kategori/nama.",
        "2. Tulis rumus Excel dinamis pada kolom target (Answer) di sheet \"XL-Test\".",
        "3. Gunakan formula yang dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas untuk mengevaluasi kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Referensi Standar",
        "headers": [
          "Kategori Data",
          "Formula Saran"
        ],
        "rows": [
          [
            "Pencarian Rujukan",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Kondisi & Logika",
            "IF / IFS"
          ],
          [
            "Perhitungan Angka",
            "Operator Aritmatika / SUMIF / PMT"
          ]
        ]
      },
      "notice": "Dilarang mengubah tabel acuan. Tulis formula langsung pada tabel pengerjaan yang tersedia."
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
            "key": "item",
            "label": "Item / Subjek",
            "letter": "B"
          },
          {
            "key": "param1",
            "label": "Parameter 1",
            "letter": "C"
          },
          {
            "key": "param2",
            "label": "Parameter 2",
            "letter": "D"
          },
          {
            "key": "target_val",
            "label": "Target Answer (Formula)",
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
              "no": 1,
              "item": "Kasus Uji Alpha",
              "param1": 5000000,
              "param2": 3500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "item": "Kasus Uji Beta",
              "param1": 8500000,
              "param2": 7200000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "item": "Kasus Uji Gamma",
              "param1": 6000000,
              "param2": 5500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "item": "Kasus Uji Delta",
              "param1": 3000000,
              "param2": 2400000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "item": "Kasus Uji Epsilon",
              "param1": 2500000,
              "param2": 2100000,
              "target_val": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "target_val",
            "letter": "E",
            "label": "Target Answer",
            "description": "Kalkulasi selisih / rujukan: =C2-D2",
            "expectedRowAnswers": {
              "2": 1500000,
              "3": 1300000,
              "4": 500000,
              "5": 600000,
              "6": 400000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Verifikasi",
            "description": "Jika target >= 500000 LULUS: =IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "LULUS",
              "5": "LULUS",
              "6": "TIDAK LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_master",
        "name": "Data Master",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Referensi",
            "letter": "A"
          },
          {
            "key": "nama_ref",
            "label": "Nama Rujukan",
            "letter": "B"
          },
          {
            "key": "bobot",
            "label": "Bobot Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "nama_ref": "Kategori Standar 1",
              "bobot": 1500000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "nama_ref": "Kategori Standar 2",
              "bobot": 1300000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "nama_ref": "Kategori Standar 3",
              "bobot": 500000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Target Answer",
        "formula": "=C2-D2",
        "explanation": "Menghitung nilai selisih antara Parameter 1 dan Parameter 2"
      },
      {
        "columnLabel": "Status Verifikasi",
        "formula": "=IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelayakan batas nilai 500.000"
      }
    ]
  },
  {
    "id": "EX-017",
    "number": 17,
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
      "description": "Selesaikan lembar kerja kasus Pembuatan Email Korporat Otomatis (CONCAT & LOWER). Buka sheet utama untuk mengisi formula target sesuai data acuan pada sheet referensi.",
      "points": [
        "1. Periksa sheet \"Data Master\" untuk melihat tabel acuan harga/kategori/nama.",
        "2. Tulis rumus Excel dinamis pada kolom target (Answer) di sheet \"XL-Test\".",
        "3. Gunakan formula yang dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas untuk mengevaluasi kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Referensi Standar",
        "headers": [
          "Kategori Data",
          "Formula Saran"
        ],
        "rows": [
          [
            "Pencarian Rujukan",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Kondisi & Logika",
            "IF / IFS"
          ],
          [
            "Perhitungan Angka",
            "Operator Aritmatika / SUMIF / PMT"
          ]
        ]
      },
      "notice": "Dilarang mengubah tabel acuan. Tulis formula langsung pada tabel pengerjaan yang tersedia."
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
            "key": "item",
            "label": "Item / Subjek",
            "letter": "B"
          },
          {
            "key": "param1",
            "label": "Parameter 1",
            "letter": "C"
          },
          {
            "key": "param2",
            "label": "Parameter 2",
            "letter": "D"
          },
          {
            "key": "target_val",
            "label": "Target Answer (Formula)",
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
              "no": 1,
              "item": "Kasus Uji Alpha",
              "param1": 5000000,
              "param2": 3500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "item": "Kasus Uji Beta",
              "param1": 8500000,
              "param2": 7200000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "item": "Kasus Uji Gamma",
              "param1": 6000000,
              "param2": 5500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "item": "Kasus Uji Delta",
              "param1": 3000000,
              "param2": 2400000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "item": "Kasus Uji Epsilon",
              "param1": 2500000,
              "param2": 2100000,
              "target_val": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "target_val",
            "letter": "E",
            "label": "Target Answer",
            "description": "Kalkulasi selisih / rujukan: =C2-D2",
            "expectedRowAnswers": {
              "2": 1500000,
              "3": 1300000,
              "4": 500000,
              "5": 600000,
              "6": 400000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Verifikasi",
            "description": "Jika target >= 500000 LULUS: =IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "LULUS",
              "5": "LULUS",
              "6": "TIDAK LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_master",
        "name": "Data Master",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Referensi",
            "letter": "A"
          },
          {
            "key": "nama_ref",
            "label": "Nama Rujukan",
            "letter": "B"
          },
          {
            "key": "bobot",
            "label": "Bobot Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "nama_ref": "Kategori Standar 1",
              "bobot": 1500000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "nama_ref": "Kategori Standar 2",
              "bobot": 1300000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "nama_ref": "Kategori Standar 3",
              "bobot": 500000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Target Answer",
        "formula": "=C2-D2",
        "explanation": "Menghitung nilai selisih antara Parameter 1 dan Parameter 2"
      },
      {
        "columnLabel": "Status Verifikasi",
        "formula": "=IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelayakan batas nilai 500.000"
      }
    ]
  },
  {
    "id": "EX-018",
    "number": 18,
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
      "description": "Selesaikan lembar kerja kasus Pembersihan Spasi Ganda Data Customer (TRIM & LEN). Buka sheet utama untuk mengisi formula target sesuai data acuan pada sheet referensi.",
      "points": [
        "1. Periksa sheet \"Data Master\" untuk melihat tabel acuan harga/kategori/nama.",
        "2. Tulis rumus Excel dinamis pada kolom target (Answer) di sheet \"XL-Test\".",
        "3. Gunakan formula yang dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas untuk mengevaluasi kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Referensi Standar",
        "headers": [
          "Kategori Data",
          "Formula Saran"
        ],
        "rows": [
          [
            "Pencarian Rujukan",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Kondisi & Logika",
            "IF / IFS"
          ],
          [
            "Perhitungan Angka",
            "Operator Aritmatika / SUMIF / PMT"
          ]
        ]
      },
      "notice": "Dilarang mengubah tabel acuan. Tulis formula langsung pada tabel pengerjaan yang tersedia."
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
            "key": "item",
            "label": "Item / Subjek",
            "letter": "B"
          },
          {
            "key": "param1",
            "label": "Parameter 1",
            "letter": "C"
          },
          {
            "key": "param2",
            "label": "Parameter 2",
            "letter": "D"
          },
          {
            "key": "target_val",
            "label": "Target Answer (Formula)",
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
              "no": 1,
              "item": "Kasus Uji Alpha",
              "param1": 5000000,
              "param2": 3500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "item": "Kasus Uji Beta",
              "param1": 8500000,
              "param2": 7200000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "item": "Kasus Uji Gamma",
              "param1": 6000000,
              "param2": 5500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "item": "Kasus Uji Delta",
              "param1": 3000000,
              "param2": 2400000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "item": "Kasus Uji Epsilon",
              "param1": 2500000,
              "param2": 2100000,
              "target_val": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "target_val",
            "letter": "E",
            "label": "Target Answer",
            "description": "Kalkulasi selisih / rujukan: =C2-D2",
            "expectedRowAnswers": {
              "2": 1500000,
              "3": 1300000,
              "4": 500000,
              "5": 600000,
              "6": 400000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Verifikasi",
            "description": "Jika target >= 500000 LULUS: =IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "LULUS",
              "5": "LULUS",
              "6": "TIDAK LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_master",
        "name": "Data Master",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Referensi",
            "letter": "A"
          },
          {
            "key": "nama_ref",
            "label": "Nama Rujukan",
            "letter": "B"
          },
          {
            "key": "bobot",
            "label": "Bobot Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "nama_ref": "Kategori Standar 1",
              "bobot": 1500000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "nama_ref": "Kategori Standar 2",
              "bobot": 1300000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "nama_ref": "Kategori Standar 3",
              "bobot": 500000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Target Answer",
        "formula": "=C2-D2",
        "explanation": "Menghitung nilai selisih antara Parameter 1 dan Parameter 2"
      },
      {
        "columnLabel": "Status Verifikasi",
        "formula": "=IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelayakan batas nilai 500.000"
      }
    ]
  },
  {
    "id": "EX-019",
    "number": 19,
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
      "description": "Selesaikan lembar kerja kasus Latihan Soal Excel Master DATEDIF Masa Kerja. Buka sheet utama untuk mengisi formula target sesuai data acuan pada sheet referensi.",
      "points": [
        "1. Periksa sheet \"Data Master\" untuk melihat tabel acuan harga/kategori/nama.",
        "2. Tulis rumus Excel dinamis pada kolom target (Answer) di sheet \"XL-Test\".",
        "3. Gunakan formula yang dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas untuk mengevaluasi kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Referensi Standar",
        "headers": [
          "Kategori Data",
          "Formula Saran"
        ],
        "rows": [
          [
            "Pencarian Rujukan",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Kondisi & Logika",
            "IF / IFS"
          ],
          [
            "Perhitungan Angka",
            "Operator Aritmatika / SUMIF / PMT"
          ]
        ]
      },
      "notice": "Dilarang mengubah tabel acuan. Tulis formula langsung pada tabel pengerjaan yang tersedia."
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
            "key": "item",
            "label": "Item / Subjek",
            "letter": "B"
          },
          {
            "key": "param1",
            "label": "Parameter 1",
            "letter": "C"
          },
          {
            "key": "param2",
            "label": "Parameter 2",
            "letter": "D"
          },
          {
            "key": "target_val",
            "label": "Target Answer (Formula)",
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
              "no": 1,
              "item": "Kasus Uji Alpha",
              "param1": 5000000,
              "param2": 3500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "item": "Kasus Uji Beta",
              "param1": 8500000,
              "param2": 7200000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "item": "Kasus Uji Gamma",
              "param1": 6000000,
              "param2": 5500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "item": "Kasus Uji Delta",
              "param1": 3000000,
              "param2": 2400000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "item": "Kasus Uji Epsilon",
              "param1": 2500000,
              "param2": 2100000,
              "target_val": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "target_val",
            "letter": "E",
            "label": "Target Answer",
            "description": "Kalkulasi selisih / rujukan: =C2-D2",
            "expectedRowAnswers": {
              "2": 1500000,
              "3": 1300000,
              "4": 500000,
              "5": 600000,
              "6": 400000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Verifikasi",
            "description": "Jika target >= 500000 LULUS: =IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "LULUS",
              "5": "LULUS",
              "6": "TIDAK LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_master",
        "name": "Data Master",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Referensi",
            "letter": "A"
          },
          {
            "key": "nama_ref",
            "label": "Nama Rujukan",
            "letter": "B"
          },
          {
            "key": "bobot",
            "label": "Bobot Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "nama_ref": "Kategori Standar 1",
              "bobot": 1500000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "nama_ref": "Kategori Standar 2",
              "bobot": 1300000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "nama_ref": "Kategori Standar 3",
              "bobot": 500000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Target Answer",
        "formula": "=C2-D2",
        "explanation": "Menghitung nilai selisih antara Parameter 1 dan Parameter 2"
      },
      {
        "columnLabel": "Status Verifikasi",
        "formula": "=IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelayakan batas nilai 500.000"
      }
    ]
  },
  {
    "id": "EX-020",
    "number": 20,
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
      "description": "Selesaikan lembar kerja kasus Penentuan Status Kelulusan Ujian Sertifikasi (IF). Buka sheet utama untuk mengisi formula target sesuai data acuan pada sheet referensi.",
      "points": [
        "1. Periksa sheet \"Data Master\" untuk melihat tabel acuan harga/kategori/nama.",
        "2. Tulis rumus Excel dinamis pada kolom target (Answer) di sheet \"XL-Test\".",
        "3. Gunakan formula yang dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas untuk mengevaluasi kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Referensi Standar",
        "headers": [
          "Kategori Data",
          "Formula Saran"
        ],
        "rows": [
          [
            "Pencarian Rujukan",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Kondisi & Logika",
            "IF / IFS"
          ],
          [
            "Perhitungan Angka",
            "Operator Aritmatika / SUMIF / PMT"
          ]
        ]
      },
      "notice": "Dilarang mengubah tabel acuan. Tulis formula langsung pada tabel pengerjaan yang tersedia."
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
            "key": "item",
            "label": "Item / Subjek",
            "letter": "B"
          },
          {
            "key": "param1",
            "label": "Parameter 1",
            "letter": "C"
          },
          {
            "key": "param2",
            "label": "Parameter 2",
            "letter": "D"
          },
          {
            "key": "target_val",
            "label": "Target Answer (Formula)",
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
              "no": 1,
              "item": "Kasus Uji Alpha",
              "param1": 5000000,
              "param2": 3500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "item": "Kasus Uji Beta",
              "param1": 8500000,
              "param2": 7200000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "item": "Kasus Uji Gamma",
              "param1": 6000000,
              "param2": 5500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "item": "Kasus Uji Delta",
              "param1": 3000000,
              "param2": 2400000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "item": "Kasus Uji Epsilon",
              "param1": 2500000,
              "param2": 2100000,
              "target_val": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "target_val",
            "letter": "E",
            "label": "Target Answer",
            "description": "Kalkulasi selisih / rujukan: =C2-D2",
            "expectedRowAnswers": {
              "2": 1500000,
              "3": 1300000,
              "4": 500000,
              "5": 600000,
              "6": 400000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Verifikasi",
            "description": "Jika target >= 500000 LULUS: =IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "LULUS",
              "5": "LULUS",
              "6": "TIDAK LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_master",
        "name": "Data Master",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Referensi",
            "letter": "A"
          },
          {
            "key": "nama_ref",
            "label": "Nama Rujukan",
            "letter": "B"
          },
          {
            "key": "bobot",
            "label": "Bobot Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "nama_ref": "Kategori Standar 1",
              "bobot": 1500000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "nama_ref": "Kategori Standar 2",
              "bobot": 1300000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "nama_ref": "Kategori Standar 3",
              "bobot": 500000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Target Answer",
        "formula": "=C2-D2",
        "explanation": "Menghitung nilai selisih antara Parameter 1 dan Parameter 2"
      },
      {
        "columnLabel": "Status Verifikasi",
        "formula": "=IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelayakan batas nilai 500.000"
      }
    ]
  },
  {
    "id": "EX-021",
    "number": 21,
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
      "description": "Selesaikan lembar kerja kasus Pemberian Bonus Target Bulanan Tim Marketing (IF). Buka sheet utama untuk mengisi formula target sesuai data acuan pada sheet referensi.",
      "points": [
        "1. Periksa sheet \"Data Master\" untuk melihat tabel acuan harga/kategori/nama.",
        "2. Tulis rumus Excel dinamis pada kolom target (Answer) di sheet \"XL-Test\".",
        "3. Gunakan formula yang dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas untuk mengevaluasi kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Referensi Standar",
        "headers": [
          "Kategori Data",
          "Formula Saran"
        ],
        "rows": [
          [
            "Pencarian Rujukan",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Kondisi & Logika",
            "IF / IFS"
          ],
          [
            "Perhitungan Angka",
            "Operator Aritmatika / SUMIF / PMT"
          ]
        ]
      },
      "notice": "Dilarang mengubah tabel acuan. Tulis formula langsung pada tabel pengerjaan yang tersedia."
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
            "key": "item",
            "label": "Item / Subjek",
            "letter": "B"
          },
          {
            "key": "param1",
            "label": "Parameter 1",
            "letter": "C"
          },
          {
            "key": "param2",
            "label": "Parameter 2",
            "letter": "D"
          },
          {
            "key": "target_val",
            "label": "Target Answer (Formula)",
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
              "no": 1,
              "item": "Kasus Uji Alpha",
              "param1": 5000000,
              "param2": 3500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "item": "Kasus Uji Beta",
              "param1": 8500000,
              "param2": 7200000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "item": "Kasus Uji Gamma",
              "param1": 6000000,
              "param2": 5500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "item": "Kasus Uji Delta",
              "param1": 3000000,
              "param2": 2400000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "item": "Kasus Uji Epsilon",
              "param1": 2500000,
              "param2": 2100000,
              "target_val": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "target_val",
            "letter": "E",
            "label": "Target Answer",
            "description": "Kalkulasi selisih / rujukan: =C2-D2",
            "expectedRowAnswers": {
              "2": 1500000,
              "3": 1300000,
              "4": 500000,
              "5": 600000,
              "6": 400000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Verifikasi",
            "description": "Jika target >= 500000 LULUS: =IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "LULUS",
              "5": "LULUS",
              "6": "TIDAK LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_master",
        "name": "Data Master",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Referensi",
            "letter": "A"
          },
          {
            "key": "nama_ref",
            "label": "Nama Rujukan",
            "letter": "B"
          },
          {
            "key": "bobot",
            "label": "Bobot Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "nama_ref": "Kategori Standar 1",
              "bobot": 1500000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "nama_ref": "Kategori Standar 2",
              "bobot": 1300000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "nama_ref": "Kategori Standar 3",
              "bobot": 500000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Target Answer",
        "formula": "=C2-D2",
        "explanation": "Menghitung nilai selisih antara Parameter 1 dan Parameter 2"
      },
      {
        "columnLabel": "Status Verifikasi",
        "formula": "=IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelayakan batas nilai 500.000"
      }
    ]
  },
  {
    "id": "EX-022",
    "number": 22,
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
      "description": "Selesaikan lembar kerja kasus Validasi Batas Kredit Pelanggan Toko. Buka sheet utama untuk mengisi formula target sesuai data acuan pada sheet referensi.",
      "points": [
        "1. Periksa sheet \"Data Master\" untuk melihat tabel acuan harga/kategori/nama.",
        "2. Tulis rumus Excel dinamis pada kolom target (Answer) di sheet \"XL-Test\".",
        "3. Gunakan formula yang dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas untuk mengevaluasi kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Referensi Standar",
        "headers": [
          "Kategori Data",
          "Formula Saran"
        ],
        "rows": [
          [
            "Pencarian Rujukan",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Kondisi & Logika",
            "IF / IFS"
          ],
          [
            "Perhitungan Angka",
            "Operator Aritmatika / SUMIF / PMT"
          ]
        ]
      },
      "notice": "Dilarang mengubah tabel acuan. Tulis formula langsung pada tabel pengerjaan yang tersedia."
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
            "key": "item",
            "label": "Item / Subjek",
            "letter": "B"
          },
          {
            "key": "param1",
            "label": "Parameter 1",
            "letter": "C"
          },
          {
            "key": "param2",
            "label": "Parameter 2",
            "letter": "D"
          },
          {
            "key": "target_val",
            "label": "Target Answer (Formula)",
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
              "no": 1,
              "item": "Kasus Uji Alpha",
              "param1": 5000000,
              "param2": 3500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "item": "Kasus Uji Beta",
              "param1": 8500000,
              "param2": 7200000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "item": "Kasus Uji Gamma",
              "param1": 6000000,
              "param2": 5500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "item": "Kasus Uji Delta",
              "param1": 3000000,
              "param2": 2400000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "item": "Kasus Uji Epsilon",
              "param1": 2500000,
              "param2": 2100000,
              "target_val": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "target_val",
            "letter": "E",
            "label": "Target Answer",
            "description": "Kalkulasi selisih / rujukan: =C2-D2",
            "expectedRowAnswers": {
              "2": 1500000,
              "3": 1300000,
              "4": 500000,
              "5": 600000,
              "6": 400000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Verifikasi",
            "description": "Jika target >= 500000 LULUS: =IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "LULUS",
              "5": "LULUS",
              "6": "TIDAK LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_master",
        "name": "Data Master",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Referensi",
            "letter": "A"
          },
          {
            "key": "nama_ref",
            "label": "Nama Rujukan",
            "letter": "B"
          },
          {
            "key": "bobot",
            "label": "Bobot Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "nama_ref": "Kategori Standar 1",
              "bobot": 1500000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "nama_ref": "Kategori Standar 2",
              "bobot": 1300000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "nama_ref": "Kategori Standar 3",
              "bobot": 500000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Target Answer",
        "formula": "=C2-D2",
        "explanation": "Menghitung nilai selisih antara Parameter 1 dan Parameter 2"
      },
      {
        "columnLabel": "Status Verifikasi",
        "formula": "=IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelayakan batas nilai 500.000"
      }
    ]
  },
  {
    "id": "EX-023",
    "number": 23,
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
      "description": "Selesaikan lembar kerja kasus Pencarian Tarif Kamar Hotel Berdasarkan Tipe (VLOOKUP). Buka sheet utama untuk mengisi formula target sesuai data acuan pada sheet referensi.",
      "points": [
        "1. Periksa sheet \"Data Master\" untuk melihat tabel acuan harga/kategori/nama.",
        "2. Tulis rumus Excel dinamis pada kolom target (Answer) di sheet \"XL-Test\".",
        "3. Gunakan formula yang dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas untuk mengevaluasi kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Referensi Standar",
        "headers": [
          "Kategori Data",
          "Formula Saran"
        ],
        "rows": [
          [
            "Pencarian Rujukan",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Kondisi & Logika",
            "IF / IFS"
          ],
          [
            "Perhitungan Angka",
            "Operator Aritmatika / SUMIF / PMT"
          ]
        ]
      },
      "notice": "Dilarang mengubah tabel acuan. Tulis formula langsung pada tabel pengerjaan yang tersedia."
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
            "key": "item",
            "label": "Item / Subjek",
            "letter": "B"
          },
          {
            "key": "param1",
            "label": "Parameter 1",
            "letter": "C"
          },
          {
            "key": "param2",
            "label": "Parameter 2",
            "letter": "D"
          },
          {
            "key": "target_val",
            "label": "Target Answer (Formula)",
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
              "no": 1,
              "item": "Kasus Uji Alpha",
              "param1": 5000000,
              "param2": 3500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "item": "Kasus Uji Beta",
              "param1": 8500000,
              "param2": 7200000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "item": "Kasus Uji Gamma",
              "param1": 6000000,
              "param2": 5500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "item": "Kasus Uji Delta",
              "param1": 3000000,
              "param2": 2400000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "item": "Kasus Uji Epsilon",
              "param1": 2500000,
              "param2": 2100000,
              "target_val": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "target_val",
            "letter": "E",
            "label": "Target Answer",
            "description": "Kalkulasi selisih / rujukan: =C2-D2",
            "expectedRowAnswers": {
              "2": 1500000,
              "3": 1300000,
              "4": 500000,
              "5": 600000,
              "6": 400000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Verifikasi",
            "description": "Jika target >= 500000 LULUS: =IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "LULUS",
              "5": "LULUS",
              "6": "TIDAK LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_master",
        "name": "Data Master",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Referensi",
            "letter": "A"
          },
          {
            "key": "nama_ref",
            "label": "Nama Rujukan",
            "letter": "B"
          },
          {
            "key": "bobot",
            "label": "Bobot Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "nama_ref": "Kategori Standar 1",
              "bobot": 1500000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "nama_ref": "Kategori Standar 2",
              "bobot": 1300000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "nama_ref": "Kategori Standar 3",
              "bobot": 500000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Target Answer",
        "formula": "=C2-D2",
        "explanation": "Menghitung nilai selisih antara Parameter 1 dan Parameter 2"
      },
      {
        "columnLabel": "Status Verifikasi",
        "formula": "=IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelayakan batas nilai 500.000"
      }
    ]
  },
  {
    "id": "EX-024",
    "number": 24,
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
      "description": "Selesaikan lembar kerja kasus Master Daftar Harga Barang Sembako (VLOOKUP). Buka sheet utama untuk mengisi formula target sesuai data acuan pada sheet referensi.",
      "points": [
        "1. Periksa sheet \"Data Master\" untuk melihat tabel acuan harga/kategori/nama.",
        "2. Tulis rumus Excel dinamis pada kolom target (Answer) di sheet \"XL-Test\".",
        "3. Gunakan formula yang dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas untuk mengevaluasi kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Referensi Standar",
        "headers": [
          "Kategori Data",
          "Formula Saran"
        ],
        "rows": [
          [
            "Pencarian Rujukan",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Kondisi & Logika",
            "IF / IFS"
          ],
          [
            "Perhitungan Angka",
            "Operator Aritmatika / SUMIF / PMT"
          ]
        ]
      },
      "notice": "Dilarang mengubah tabel acuan. Tulis formula langsung pada tabel pengerjaan yang tersedia."
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
            "key": "item",
            "label": "Item / Subjek",
            "letter": "B"
          },
          {
            "key": "param1",
            "label": "Parameter 1",
            "letter": "C"
          },
          {
            "key": "param2",
            "label": "Parameter 2",
            "letter": "D"
          },
          {
            "key": "target_val",
            "label": "Target Answer (Formula)",
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
              "no": 1,
              "item": "Kasus Uji Alpha",
              "param1": 5000000,
              "param2": 3500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "item": "Kasus Uji Beta",
              "param1": 8500000,
              "param2": 7200000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "item": "Kasus Uji Gamma",
              "param1": 6000000,
              "param2": 5500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "item": "Kasus Uji Delta",
              "param1": 3000000,
              "param2": 2400000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "item": "Kasus Uji Epsilon",
              "param1": 2500000,
              "param2": 2100000,
              "target_val": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "target_val",
            "letter": "E",
            "label": "Target Answer",
            "description": "Kalkulasi selisih / rujukan: =C2-D2",
            "expectedRowAnswers": {
              "2": 1500000,
              "3": 1300000,
              "4": 500000,
              "5": 600000,
              "6": 400000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Verifikasi",
            "description": "Jika target >= 500000 LULUS: =IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "LULUS",
              "5": "LULUS",
              "6": "TIDAK LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_master",
        "name": "Data Master",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Referensi",
            "letter": "A"
          },
          {
            "key": "nama_ref",
            "label": "Nama Rujukan",
            "letter": "B"
          },
          {
            "key": "bobot",
            "label": "Bobot Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "nama_ref": "Kategori Standar 1",
              "bobot": 1500000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "nama_ref": "Kategori Standar 2",
              "bobot": 1300000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "nama_ref": "Kategori Standar 3",
              "bobot": 500000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Target Answer",
        "formula": "=C2-D2",
        "explanation": "Menghitung nilai selisih antara Parameter 1 dan Parameter 2"
      },
      {
        "columnLabel": "Status Verifikasi",
        "formula": "=IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelayakan batas nilai 500.000"
      }
    ]
  },
  {
    "id": "EX-025",
    "number": 25,
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
      "description": "Selesaikan lembar kerja kasus Pencarian Data Pasien Rumah Sakit (XLOOKUP). Buka sheet utama untuk mengisi formula target sesuai data acuan pada sheet referensi.",
      "points": [
        "1. Periksa sheet \"Data Master\" untuk melihat tabel acuan harga/kategori/nama.",
        "2. Tulis rumus Excel dinamis pada kolom target (Answer) di sheet \"XL-Test\".",
        "3. Gunakan formula yang dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas untuk mengevaluasi kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Referensi Standar",
        "headers": [
          "Kategori Data",
          "Formula Saran"
        ],
        "rows": [
          [
            "Pencarian Rujukan",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Kondisi & Logika",
            "IF / IFS"
          ],
          [
            "Perhitungan Angka",
            "Operator Aritmatika / SUMIF / PMT"
          ]
        ]
      },
      "notice": "Dilarang mengubah tabel acuan. Tulis formula langsung pada tabel pengerjaan yang tersedia."
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
            "key": "item",
            "label": "Item / Subjek",
            "letter": "B"
          },
          {
            "key": "param1",
            "label": "Parameter 1",
            "letter": "C"
          },
          {
            "key": "param2",
            "label": "Parameter 2",
            "letter": "D"
          },
          {
            "key": "target_val",
            "label": "Target Answer (Formula)",
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
              "no": 1,
              "item": "Kasus Uji Alpha",
              "param1": 5000000,
              "param2": 3500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "item": "Kasus Uji Beta",
              "param1": 8500000,
              "param2": 7200000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "item": "Kasus Uji Gamma",
              "param1": 6000000,
              "param2": 5500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "item": "Kasus Uji Delta",
              "param1": 3000000,
              "param2": 2400000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "item": "Kasus Uji Epsilon",
              "param1": 2500000,
              "param2": 2100000,
              "target_val": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "target_val",
            "letter": "E",
            "label": "Target Answer",
            "description": "Kalkulasi selisih / rujukan: =C2-D2",
            "expectedRowAnswers": {
              "2": 1500000,
              "3": 1300000,
              "4": 500000,
              "5": 600000,
              "6": 400000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Verifikasi",
            "description": "Jika target >= 500000 LULUS: =IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "LULUS",
              "5": "LULUS",
              "6": "TIDAK LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_master",
        "name": "Data Master",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Referensi",
            "letter": "A"
          },
          {
            "key": "nama_ref",
            "label": "Nama Rujukan",
            "letter": "B"
          },
          {
            "key": "bobot",
            "label": "Bobot Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "nama_ref": "Kategori Standar 1",
              "bobot": 1500000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "nama_ref": "Kategori Standar 2",
              "bobot": 1300000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "nama_ref": "Kategori Standar 3",
              "bobot": 500000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Target Answer",
        "formula": "=C2-D2",
        "explanation": "Menghitung nilai selisih antara Parameter 1 dan Parameter 2"
      },
      {
        "columnLabel": "Status Verifikasi",
        "formula": "=IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelayakan batas nilai 500.000"
      }
    ]
  },
  {
    "id": "EX-026",
    "number": 26,
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
      "description": "Selesaikan lembar kerja kasus Analisis Ranking Penjual Terbaik Toko Online (LARGE/RANK). Buka sheet utama untuk mengisi formula target sesuai data acuan pada sheet referensi.",
      "points": [
        "1. Periksa sheet \"Data Master\" untuk melihat tabel acuan harga/kategori/nama.",
        "2. Tulis rumus Excel dinamis pada kolom target (Answer) di sheet \"XL-Test\".",
        "3. Gunakan formula yang dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas untuk mengevaluasi kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Referensi Standar",
        "headers": [
          "Kategori Data",
          "Formula Saran"
        ],
        "rows": [
          [
            "Pencarian Rujukan",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Kondisi & Logika",
            "IF / IFS"
          ],
          [
            "Perhitungan Angka",
            "Operator Aritmatika / SUMIF / PMT"
          ]
        ]
      },
      "notice": "Dilarang mengubah tabel acuan. Tulis formula langsung pada tabel pengerjaan yang tersedia."
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
            "key": "item",
            "label": "Item / Subjek",
            "letter": "B"
          },
          {
            "key": "param1",
            "label": "Parameter 1",
            "letter": "C"
          },
          {
            "key": "param2",
            "label": "Parameter 2",
            "letter": "D"
          },
          {
            "key": "target_val",
            "label": "Target Answer (Formula)",
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
              "no": 1,
              "item": "Kasus Uji Alpha",
              "param1": 5000000,
              "param2": 3500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "item": "Kasus Uji Beta",
              "param1": 8500000,
              "param2": 7200000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "item": "Kasus Uji Gamma",
              "param1": 6000000,
              "param2": 5500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "item": "Kasus Uji Delta",
              "param1": 3000000,
              "param2": 2400000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "item": "Kasus Uji Epsilon",
              "param1": 2500000,
              "param2": 2100000,
              "target_val": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "target_val",
            "letter": "E",
            "label": "Target Answer",
            "description": "Kalkulasi selisih / rujukan: =C2-D2",
            "expectedRowAnswers": {
              "2": 1500000,
              "3": 1300000,
              "4": 500000,
              "5": 600000,
              "6": 400000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Verifikasi",
            "description": "Jika target >= 500000 LULUS: =IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "LULUS",
              "5": "LULUS",
              "6": "TIDAK LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_master",
        "name": "Data Master",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Referensi",
            "letter": "A"
          },
          {
            "key": "nama_ref",
            "label": "Nama Rujukan",
            "letter": "B"
          },
          {
            "key": "bobot",
            "label": "Bobot Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "nama_ref": "Kategori Standar 1",
              "bobot": 1500000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "nama_ref": "Kategori Standar 2",
              "bobot": 1300000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "nama_ref": "Kategori Standar 3",
              "bobot": 500000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Target Answer",
        "formula": "=C2-D2",
        "explanation": "Menghitung nilai selisih antara Parameter 1 dan Parameter 2"
      },
      {
        "columnLabel": "Status Verifikasi",
        "formula": "=IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelayakan batas nilai 500.000"
      }
    ]
  },
  {
    "id": "EX-027",
    "number": 27,
    "code": "#SBEH026",
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
      "description": "Selesaikan lembar kerja kasus Penetapan Grade Nilai Siswa A/B/C/D (IFS Bertingkat). Buka sheet utama untuk mengisi formula target sesuai data acuan pada sheet referensi.",
      "points": [
        "1. Periksa sheet \"Data Master\" untuk melihat tabel acuan harga/kategori/nama.",
        "2. Tulis rumus Excel dinamis pada kolom target (Answer) di sheet \"XL-Test\".",
        "3. Gunakan formula yang dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas untuk mengevaluasi kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Referensi Standar",
        "headers": [
          "Kategori Data",
          "Formula Saran"
        ],
        "rows": [
          [
            "Pencarian Rujukan",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Kondisi & Logika",
            "IF / IFS"
          ],
          [
            "Perhitungan Angka",
            "Operator Aritmatika / SUMIF / PMT"
          ]
        ]
      },
      "notice": "Dilarang mengubah tabel acuan. Tulis formula langsung pada tabel pengerjaan yang tersedia."
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
            "key": "item",
            "label": "Item / Subjek",
            "letter": "B"
          },
          {
            "key": "param1",
            "label": "Parameter 1",
            "letter": "C"
          },
          {
            "key": "param2",
            "label": "Parameter 2",
            "letter": "D"
          },
          {
            "key": "target_val",
            "label": "Target Answer (Formula)",
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
              "no": 1,
              "item": "Kasus Uji Alpha",
              "param1": 5000000,
              "param2": 3500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "item": "Kasus Uji Beta",
              "param1": 8500000,
              "param2": 7200000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "item": "Kasus Uji Gamma",
              "param1": 6000000,
              "param2": 5500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "item": "Kasus Uji Delta",
              "param1": 3000000,
              "param2": 2400000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "item": "Kasus Uji Epsilon",
              "param1": 2500000,
              "param2": 2100000,
              "target_val": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "target_val",
            "letter": "E",
            "label": "Target Answer",
            "description": "Kalkulasi selisih / rujukan: =C2-D2",
            "expectedRowAnswers": {
              "2": 1500000,
              "3": 1300000,
              "4": 500000,
              "5": 600000,
              "6": 400000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Verifikasi",
            "description": "Jika target >= 500000 LULUS: =IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "LULUS",
              "5": "LULUS",
              "6": "TIDAK LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_master",
        "name": "Data Master",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Referensi",
            "letter": "A"
          },
          {
            "key": "nama_ref",
            "label": "Nama Rujukan",
            "letter": "B"
          },
          {
            "key": "bobot",
            "label": "Bobot Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "nama_ref": "Kategori Standar 1",
              "bobot": 1500000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "nama_ref": "Kategori Standar 2",
              "bobot": 1300000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "nama_ref": "Kategori Standar 3",
              "bobot": 500000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Target Answer",
        "formula": "=C2-D2",
        "explanation": "Menghitung nilai selisih antara Parameter 1 dan Parameter 2"
      },
      {
        "columnLabel": "Status Verifikasi",
        "formula": "=IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelayakan batas nilai 500.000"
      }
    ]
  },
  {
    "id": "EX-028",
    "number": 28,
    "code": "#SBEH027",
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
      "description": "Selesaikan lembar kerja kasus Kalkulasi Tarif Pajak Penghasilan PPh 21 Berjenjang. Buka sheet utama untuk mengisi formula target sesuai data acuan pada sheet referensi.",
      "points": [
        "1. Periksa sheet \"Data Master\" untuk melihat tabel acuan harga/kategori/nama.",
        "2. Tulis rumus Excel dinamis pada kolom target (Answer) di sheet \"XL-Test\".",
        "3. Gunakan formula yang dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas untuk mengevaluasi kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Referensi Standar",
        "headers": [
          "Kategori Data",
          "Formula Saran"
        ],
        "rows": [
          [
            "Pencarian Rujukan",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Kondisi & Logika",
            "IF / IFS"
          ],
          [
            "Perhitungan Angka",
            "Operator Aritmatika / SUMIF / PMT"
          ]
        ]
      },
      "notice": "Dilarang mengubah tabel acuan. Tulis formula langsung pada tabel pengerjaan yang tersedia."
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
            "key": "item",
            "label": "Item / Subjek",
            "letter": "B"
          },
          {
            "key": "param1",
            "label": "Parameter 1",
            "letter": "C"
          },
          {
            "key": "param2",
            "label": "Parameter 2",
            "letter": "D"
          },
          {
            "key": "target_val",
            "label": "Target Answer (Formula)",
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
              "no": 1,
              "item": "Kasus Uji Alpha",
              "param1": 5000000,
              "param2": 3500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "item": "Kasus Uji Beta",
              "param1": 8500000,
              "param2": 7200000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "item": "Kasus Uji Gamma",
              "param1": 6000000,
              "param2": 5500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "item": "Kasus Uji Delta",
              "param1": 3000000,
              "param2": 2400000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "item": "Kasus Uji Epsilon",
              "param1": 2500000,
              "param2": 2100000,
              "target_val": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "target_val",
            "letter": "E",
            "label": "Target Answer",
            "description": "Kalkulasi selisih / rujukan: =C2-D2",
            "expectedRowAnswers": {
              "2": 1500000,
              "3": 1300000,
              "4": 500000,
              "5": 600000,
              "6": 400000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Verifikasi",
            "description": "Jika target >= 500000 LULUS: =IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "LULUS",
              "5": "LULUS",
              "6": "TIDAK LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_master",
        "name": "Data Master",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Referensi",
            "letter": "A"
          },
          {
            "key": "nama_ref",
            "label": "Nama Rujukan",
            "letter": "B"
          },
          {
            "key": "bobot",
            "label": "Bobot Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "nama_ref": "Kategori Standar 1",
              "bobot": 1500000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "nama_ref": "Kategori Standar 2",
              "bobot": 1300000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "nama_ref": "Kategori Standar 3",
              "bobot": 500000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Target Answer",
        "formula": "=C2-D2",
        "explanation": "Menghitung nilai selisih antara Parameter 1 dan Parameter 2"
      },
      {
        "columnLabel": "Status Verifikasi",
        "formula": "=IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelayakan batas nilai 500.000"
      }
    ]
  },
  {
    "id": "EX-029",
    "number": 29,
    "code": "#SBEH028",
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
      "description": "Selesaikan lembar kerja kasus Penentuan Diskon Bertingkat Member Platinum/Gold/Silver. Buka sheet utama untuk mengisi formula target sesuai data acuan pada sheet referensi.",
      "points": [
        "1. Periksa sheet \"Data Master\" untuk melihat tabel acuan harga/kategori/nama.",
        "2. Tulis rumus Excel dinamis pada kolom target (Answer) di sheet \"XL-Test\".",
        "3. Gunakan formula yang dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas untuk mengevaluasi kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Referensi Standar",
        "headers": [
          "Kategori Data",
          "Formula Saran"
        ],
        "rows": [
          [
            "Pencarian Rujukan",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Kondisi & Logika",
            "IF / IFS"
          ],
          [
            "Perhitungan Angka",
            "Operator Aritmatika / SUMIF / PMT"
          ]
        ]
      },
      "notice": "Dilarang mengubah tabel acuan. Tulis formula langsung pada tabel pengerjaan yang tersedia."
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
            "key": "item",
            "label": "Item / Subjek",
            "letter": "B"
          },
          {
            "key": "param1",
            "label": "Parameter 1",
            "letter": "C"
          },
          {
            "key": "param2",
            "label": "Parameter 2",
            "letter": "D"
          },
          {
            "key": "target_val",
            "label": "Target Answer (Formula)",
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
              "no": 1,
              "item": "Kasus Uji Alpha",
              "param1": 5000000,
              "param2": 3500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "item": "Kasus Uji Beta",
              "param1": 8500000,
              "param2": 7200000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "item": "Kasus Uji Gamma",
              "param1": 6000000,
              "param2": 5500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "item": "Kasus Uji Delta",
              "param1": 3000000,
              "param2": 2400000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "item": "Kasus Uji Epsilon",
              "param1": 2500000,
              "param2": 2100000,
              "target_val": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "target_val",
            "letter": "E",
            "label": "Target Answer",
            "description": "Kalkulasi selisih / rujukan: =C2-D2",
            "expectedRowAnswers": {
              "2": 1500000,
              "3": 1300000,
              "4": 500000,
              "5": 600000,
              "6": 400000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Verifikasi",
            "description": "Jika target >= 500000 LULUS: =IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "LULUS",
              "5": "LULUS",
              "6": "TIDAK LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_master",
        "name": "Data Master",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Referensi",
            "letter": "A"
          },
          {
            "key": "nama_ref",
            "label": "Nama Rujukan",
            "letter": "B"
          },
          {
            "key": "bobot",
            "label": "Bobot Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "nama_ref": "Kategori Standar 1",
              "bobot": 1500000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "nama_ref": "Kategori Standar 2",
              "bobot": 1300000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "nama_ref": "Kategori Standar 3",
              "bobot": 500000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Target Answer",
        "formula": "=C2-D2",
        "explanation": "Menghitung nilai selisih antara Parameter 1 dan Parameter 2"
      },
      {
        "columnLabel": "Status Verifikasi",
        "formula": "=IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelayakan batas nilai 500.000"
      }
    ]
  },
  {
    "id": "EX-030",
    "number": 30,
    "code": "#SBEH029",
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
      "description": "Selesaikan lembar kerja kasus Rekap Gaji Pokok & Tunjangan Jabatan (VLOOKUP Akurat). Buka sheet utama untuk mengisi formula target sesuai data acuan pada sheet referensi.",
      "points": [
        "1. Periksa sheet \"Data Master\" untuk melihat tabel acuan harga/kategori/nama.",
        "2. Tulis rumus Excel dinamis pada kolom target (Answer) di sheet \"XL-Test\".",
        "3. Gunakan formula yang dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas untuk mengevaluasi kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Referensi Standar",
        "headers": [
          "Kategori Data",
          "Formula Saran"
        ],
        "rows": [
          [
            "Pencarian Rujukan",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Kondisi & Logika",
            "IF / IFS"
          ],
          [
            "Perhitungan Angka",
            "Operator Aritmatika / SUMIF / PMT"
          ]
        ]
      },
      "notice": "Dilarang mengubah tabel acuan. Tulis formula langsung pada tabel pengerjaan yang tersedia."
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
            "key": "item",
            "label": "Item / Subjek",
            "letter": "B"
          },
          {
            "key": "param1",
            "label": "Parameter 1",
            "letter": "C"
          },
          {
            "key": "param2",
            "label": "Parameter 2",
            "letter": "D"
          },
          {
            "key": "target_val",
            "label": "Target Answer (Formula)",
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
              "no": 1,
              "item": "Kasus Uji Alpha",
              "param1": 5000000,
              "param2": 3500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "item": "Kasus Uji Beta",
              "param1": 8500000,
              "param2": 7200000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "item": "Kasus Uji Gamma",
              "param1": 6000000,
              "param2": 5500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "item": "Kasus Uji Delta",
              "param1": 3000000,
              "param2": 2400000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "item": "Kasus Uji Epsilon",
              "param1": 2500000,
              "param2": 2100000,
              "target_val": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "target_val",
            "letter": "E",
            "label": "Target Answer",
            "description": "Kalkulasi selisih / rujukan: =C2-D2",
            "expectedRowAnswers": {
              "2": 1500000,
              "3": 1300000,
              "4": 500000,
              "5": 600000,
              "6": 400000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Verifikasi",
            "description": "Jika target >= 500000 LULUS: =IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "LULUS",
              "5": "LULUS",
              "6": "TIDAK LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_master",
        "name": "Data Master",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Referensi",
            "letter": "A"
          },
          {
            "key": "nama_ref",
            "label": "Nama Rujukan",
            "letter": "B"
          },
          {
            "key": "bobot",
            "label": "Bobot Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "nama_ref": "Kategori Standar 1",
              "bobot": 1500000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "nama_ref": "Kategori Standar 2",
              "bobot": 1300000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "nama_ref": "Kategori Standar 3",
              "bobot": 500000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Target Answer",
        "formula": "=C2-D2",
        "explanation": "Menghitung nilai selisih antara Parameter 1 dan Parameter 2"
      },
      {
        "columnLabel": "Status Verifikasi",
        "formula": "=IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelayakan batas nilai 500.000"
      }
    ]
  },
  {
    "id": "EX-031",
    "number": 31,
    "code": "#SBEH030",
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
      "description": "Selesaikan lembar kerja kasus Pencarian Gaji Berdasarkan Kode Departemen (XLOOKUP Exact). Buka sheet utama untuk mengisi formula target sesuai data acuan pada sheet referensi.",
      "points": [
        "1. Periksa sheet \"Data Master\" untuk melihat tabel acuan harga/kategori/nama.",
        "2. Tulis rumus Excel dinamis pada kolom target (Answer) di sheet \"XL-Test\".",
        "3. Gunakan formula yang dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas untuk mengevaluasi kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Referensi Standar",
        "headers": [
          "Kategori Data",
          "Formula Saran"
        ],
        "rows": [
          [
            "Pencarian Rujukan",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Kondisi & Logika",
            "IF / IFS"
          ],
          [
            "Perhitungan Angka",
            "Operator Aritmatika / SUMIF / PMT"
          ]
        ]
      },
      "notice": "Dilarang mengubah tabel acuan. Tulis formula langsung pada tabel pengerjaan yang tersedia."
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
            "key": "item",
            "label": "Item / Subjek",
            "letter": "B"
          },
          {
            "key": "param1",
            "label": "Parameter 1",
            "letter": "C"
          },
          {
            "key": "param2",
            "label": "Parameter 2",
            "letter": "D"
          },
          {
            "key": "target_val",
            "label": "Target Answer (Formula)",
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
              "no": 1,
              "item": "Kasus Uji Alpha",
              "param1": 5000000,
              "param2": 3500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "item": "Kasus Uji Beta",
              "param1": 8500000,
              "param2": 7200000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "item": "Kasus Uji Gamma",
              "param1": 6000000,
              "param2": 5500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "item": "Kasus Uji Delta",
              "param1": 3000000,
              "param2": 2400000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "item": "Kasus Uji Epsilon",
              "param1": 2500000,
              "param2": 2100000,
              "target_val": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "target_val",
            "letter": "E",
            "label": "Target Answer",
            "description": "Kalkulasi selisih / rujukan: =C2-D2",
            "expectedRowAnswers": {
              "2": 1500000,
              "3": 1300000,
              "4": 500000,
              "5": 600000,
              "6": 400000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Verifikasi",
            "description": "Jika target >= 500000 LULUS: =IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "LULUS",
              "5": "LULUS",
              "6": "TIDAK LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_master",
        "name": "Data Master",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Referensi",
            "letter": "A"
          },
          {
            "key": "nama_ref",
            "label": "Nama Rujukan",
            "letter": "B"
          },
          {
            "key": "bobot",
            "label": "Bobot Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "nama_ref": "Kategori Standar 1",
              "bobot": 1500000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "nama_ref": "Kategori Standar 2",
              "bobot": 1300000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "nama_ref": "Kategori Standar 3",
              "bobot": 500000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Target Answer",
        "formula": "=C2-D2",
        "explanation": "Menghitung nilai selisih antara Parameter 1 dan Parameter 2"
      },
      {
        "columnLabel": "Status Verifikasi",
        "formula": "=IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelayakan batas nilai 500.000"
      }
    ]
  },
  {
    "id": "EX-032",
    "number": 32,
    "code": "#SBEH031",
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
      "description": "Selesaikan lembar kerja kasus Pencarian Data Dua Arah Baris & Kolom (INDEX + MATCH). Buka sheet utama untuk mengisi formula target sesuai data acuan pada sheet referensi.",
      "points": [
        "1. Periksa sheet \"Data Master\" untuk melihat tabel acuan harga/kategori/nama.",
        "2. Tulis rumus Excel dinamis pada kolom target (Answer) di sheet \"XL-Test\".",
        "3. Gunakan formula yang dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas untuk mengevaluasi kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Referensi Standar",
        "headers": [
          "Kategori Data",
          "Formula Saran"
        ],
        "rows": [
          [
            "Pencarian Rujukan",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Kondisi & Logika",
            "IF / IFS"
          ],
          [
            "Perhitungan Angka",
            "Operator Aritmatika / SUMIF / PMT"
          ]
        ]
      },
      "notice": "Dilarang mengubah tabel acuan. Tulis formula langsung pada tabel pengerjaan yang tersedia."
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
            "key": "item",
            "label": "Item / Subjek",
            "letter": "B"
          },
          {
            "key": "param1",
            "label": "Parameter 1",
            "letter": "C"
          },
          {
            "key": "param2",
            "label": "Parameter 2",
            "letter": "D"
          },
          {
            "key": "target_val",
            "label": "Target Answer (Formula)",
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
              "no": 1,
              "item": "Kasus Uji Alpha",
              "param1": 5000000,
              "param2": 3500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "item": "Kasus Uji Beta",
              "param1": 8500000,
              "param2": 7200000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "item": "Kasus Uji Gamma",
              "param1": 6000000,
              "param2": 5500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "item": "Kasus Uji Delta",
              "param1": 3000000,
              "param2": 2400000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "item": "Kasus Uji Epsilon",
              "param1": 2500000,
              "param2": 2100000,
              "target_val": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "target_val",
            "letter": "E",
            "label": "Target Answer",
            "description": "Kalkulasi selisih / rujukan: =C2-D2",
            "expectedRowAnswers": {
              "2": 1500000,
              "3": 1300000,
              "4": 500000,
              "5": 600000,
              "6": 400000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Verifikasi",
            "description": "Jika target >= 500000 LULUS: =IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "LULUS",
              "5": "LULUS",
              "6": "TIDAK LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_master",
        "name": "Data Master",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Referensi",
            "letter": "A"
          },
          {
            "key": "nama_ref",
            "label": "Nama Rujukan",
            "letter": "B"
          },
          {
            "key": "bobot",
            "label": "Bobot Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "nama_ref": "Kategori Standar 1",
              "bobot": 1500000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "nama_ref": "Kategori Standar 2",
              "bobot": 1300000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "nama_ref": "Kategori Standar 3",
              "bobot": 500000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Target Answer",
        "formula": "=C2-D2",
        "explanation": "Menghitung nilai selisih antara Parameter 1 dan Parameter 2"
      },
      {
        "columnLabel": "Status Verifikasi",
        "formula": "=IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelayakan batas nilai 500.000"
      }
    ]
  },
  {
    "id": "EX-033",
    "number": 33,
    "code": "#SBEH032",
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
      "description": "Selesaikan lembar kerja kasus Rekap Total Penjualan Multi-Kriteria Cabang & Kategori (SUMIFS). Buka sheet utama untuk mengisi formula target sesuai data acuan pada sheet referensi.",
      "points": [
        "1. Periksa sheet \"Data Master\" untuk melihat tabel acuan harga/kategori/nama.",
        "2. Tulis rumus Excel dinamis pada kolom target (Answer) di sheet \"XL-Test\".",
        "3. Gunakan formula yang dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas untuk mengevaluasi kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Referensi Standar",
        "headers": [
          "Kategori Data",
          "Formula Saran"
        ],
        "rows": [
          [
            "Pencarian Rujukan",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Kondisi & Logika",
            "IF / IFS"
          ],
          [
            "Perhitungan Angka",
            "Operator Aritmatika / SUMIF / PMT"
          ]
        ]
      },
      "notice": "Dilarang mengubah tabel acuan. Tulis formula langsung pada tabel pengerjaan yang tersedia."
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
            "key": "item",
            "label": "Item / Subjek",
            "letter": "B"
          },
          {
            "key": "param1",
            "label": "Parameter 1",
            "letter": "C"
          },
          {
            "key": "param2",
            "label": "Parameter 2",
            "letter": "D"
          },
          {
            "key": "target_val",
            "label": "Target Answer (Formula)",
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
              "no": 1,
              "item": "Kasus Uji Alpha",
              "param1": 5000000,
              "param2": 3500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "item": "Kasus Uji Beta",
              "param1": 8500000,
              "param2": 7200000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "item": "Kasus Uji Gamma",
              "param1": 6000000,
              "param2": 5500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "item": "Kasus Uji Delta",
              "param1": 3000000,
              "param2": 2400000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "item": "Kasus Uji Epsilon",
              "param1": 2500000,
              "param2": 2100000,
              "target_val": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "target_val",
            "letter": "E",
            "label": "Target Answer",
            "description": "Kalkulasi selisih / rujukan: =C2-D2",
            "expectedRowAnswers": {
              "2": 1500000,
              "3": 1300000,
              "4": 500000,
              "5": 600000,
              "6": 400000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Verifikasi",
            "description": "Jika target >= 500000 LULUS: =IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "LULUS",
              "5": "LULUS",
              "6": "TIDAK LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_master",
        "name": "Data Master",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Referensi",
            "letter": "A"
          },
          {
            "key": "nama_ref",
            "label": "Nama Rujukan",
            "letter": "B"
          },
          {
            "key": "bobot",
            "label": "Bobot Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "nama_ref": "Kategori Standar 1",
              "bobot": 1500000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "nama_ref": "Kategori Standar 2",
              "bobot": 1300000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "nama_ref": "Kategori Standar 3",
              "bobot": 500000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Target Answer",
        "formula": "=C2-D2",
        "explanation": "Menghitung nilai selisih antara Parameter 1 dan Parameter 2"
      },
      {
        "columnLabel": "Status Verifikasi",
        "formula": "=IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelayakan batas nilai 500.000"
      }
    ]
  },
  {
    "id": "EX-034",
    "number": 34,
    "code": "#SBEH033",
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
      "description": "Selesaikan lembar kerja kasus Hitung Jumlah Transaksi Berhasil per Kasir (COUNTIFS). Buka sheet utama untuk mengisi formula target sesuai data acuan pada sheet referensi.",
      "points": [
        "1. Periksa sheet \"Data Master\" untuk melihat tabel acuan harga/kategori/nama.",
        "2. Tulis rumus Excel dinamis pada kolom target (Answer) di sheet \"XL-Test\".",
        "3. Gunakan formula yang dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas untuk mengevaluasi kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Referensi Standar",
        "headers": [
          "Kategori Data",
          "Formula Saran"
        ],
        "rows": [
          [
            "Pencarian Rujukan",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Kondisi & Logika",
            "IF / IFS"
          ],
          [
            "Perhitungan Angka",
            "Operator Aritmatika / SUMIF / PMT"
          ]
        ]
      },
      "notice": "Dilarang mengubah tabel acuan. Tulis formula langsung pada tabel pengerjaan yang tersedia."
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
            "key": "item",
            "label": "Item / Subjek",
            "letter": "B"
          },
          {
            "key": "param1",
            "label": "Parameter 1",
            "letter": "C"
          },
          {
            "key": "param2",
            "label": "Parameter 2",
            "letter": "D"
          },
          {
            "key": "target_val",
            "label": "Target Answer (Formula)",
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
              "no": 1,
              "item": "Kasus Uji Alpha",
              "param1": 5000000,
              "param2": 3500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "item": "Kasus Uji Beta",
              "param1": 8500000,
              "param2": 7200000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "item": "Kasus Uji Gamma",
              "param1": 6000000,
              "param2": 5500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "item": "Kasus Uji Delta",
              "param1": 3000000,
              "param2": 2400000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "item": "Kasus Uji Epsilon",
              "param1": 2500000,
              "param2": 2100000,
              "target_val": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "target_val",
            "letter": "E",
            "label": "Target Answer",
            "description": "Kalkulasi selisih / rujukan: =C2-D2",
            "expectedRowAnswers": {
              "2": 1500000,
              "3": 1300000,
              "4": 500000,
              "5": 600000,
              "6": 400000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Verifikasi",
            "description": "Jika target >= 500000 LULUS: =IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "LULUS",
              "5": "LULUS",
              "6": "TIDAK LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_master",
        "name": "Data Master",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Referensi",
            "letter": "A"
          },
          {
            "key": "nama_ref",
            "label": "Nama Rujukan",
            "letter": "B"
          },
          {
            "key": "bobot",
            "label": "Bobot Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "nama_ref": "Kategori Standar 1",
              "bobot": 1500000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "nama_ref": "Kategori Standar 2",
              "bobot": 1300000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "nama_ref": "Kategori Standar 3",
              "bobot": 500000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Target Answer",
        "formula": "=C2-D2",
        "explanation": "Menghitung nilai selisih antara Parameter 1 dan Parameter 2"
      },
      {
        "columnLabel": "Status Verifikasi",
        "formula": "=IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelayakan batas nilai 500.000"
      }
    ]
  },
  {
    "id": "EX-035",
    "number": 35,
    "code": "#SBEH034",
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
      "description": "Selesaikan lembar kerja kasus Simulasi Angsuran Kredit Rumah KPR (PMT). Buka sheet utama untuk mengisi formula target sesuai data acuan pada sheet referensi.",
      "points": [
        "1. Periksa sheet \"Data Master\" untuk melihat tabel acuan harga/kategori/nama.",
        "2. Tulis rumus Excel dinamis pada kolom target (Answer) di sheet \"XL-Test\".",
        "3. Gunakan formula yang dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas untuk mengevaluasi kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Referensi Standar",
        "headers": [
          "Kategori Data",
          "Formula Saran"
        ],
        "rows": [
          [
            "Pencarian Rujukan",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Kondisi & Logika",
            "IF / IFS"
          ],
          [
            "Perhitungan Angka",
            "Operator Aritmatika / SUMIF / PMT"
          ]
        ]
      },
      "notice": "Dilarang mengubah tabel acuan. Tulis formula langsung pada tabel pengerjaan yang tersedia."
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
            "key": "item",
            "label": "Item / Subjek",
            "letter": "B"
          },
          {
            "key": "param1",
            "label": "Parameter 1",
            "letter": "C"
          },
          {
            "key": "param2",
            "label": "Parameter 2",
            "letter": "D"
          },
          {
            "key": "target_val",
            "label": "Target Answer (Formula)",
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
              "no": 1,
              "item": "Kasus Uji Alpha",
              "param1": 5000000,
              "param2": 3500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "item": "Kasus Uji Beta",
              "param1": 8500000,
              "param2": 7200000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "item": "Kasus Uji Gamma",
              "param1": 6000000,
              "param2": 5500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "item": "Kasus Uji Delta",
              "param1": 3000000,
              "param2": 2400000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "item": "Kasus Uji Epsilon",
              "param1": 2500000,
              "param2": 2100000,
              "target_val": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "target_val",
            "letter": "E",
            "label": "Target Answer",
            "description": "Kalkulasi selisih / rujukan: =C2-D2",
            "expectedRowAnswers": {
              "2": 1500000,
              "3": 1300000,
              "4": 500000,
              "5": 600000,
              "6": 400000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Verifikasi",
            "description": "Jika target >= 500000 LULUS: =IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "LULUS",
              "5": "LULUS",
              "6": "TIDAK LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_master",
        "name": "Data Master",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Referensi",
            "letter": "A"
          },
          {
            "key": "nama_ref",
            "label": "Nama Rujukan",
            "letter": "B"
          },
          {
            "key": "bobot",
            "label": "Bobot Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "nama_ref": "Kategori Standar 1",
              "bobot": 1500000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "nama_ref": "Kategori Standar 2",
              "bobot": 1300000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "nama_ref": "Kategori Standar 3",
              "bobot": 500000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Target Answer",
        "formula": "=C2-D2",
        "explanation": "Menghitung nilai selisih antara Parameter 1 dan Parameter 2"
      },
      {
        "columnLabel": "Status Verifikasi",
        "formula": "=IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelayakan batas nilai 500.000"
      }
    ]
  },
  {
    "id": "EX-036",
    "number": 36,
    "code": "#SBEH035",
    "title": "Perhitungan Bunga & Pokok Pinjaman Finansial",
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
      "title": "MAHIR Level - Perhitungan Bunga & Pokok Pinjaman Finansial",
      "description": "Selesaikan lembar kerja kasus Perhitungan Bunga & Pokok Pinjaman Finansial. Buka sheet utama untuk mengisi formula target sesuai data acuan pada sheet referensi.",
      "points": [
        "1. Periksa sheet \"Data Master\" untuk melihat tabel acuan harga/kategori/nama.",
        "2. Tulis rumus Excel dinamis pada kolom target (Answer) di sheet \"XL-Test\".",
        "3. Gunakan formula yang dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas untuk mengevaluasi kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Referensi Standar",
        "headers": [
          "Kategori Data",
          "Formula Saran"
        ],
        "rows": [
          [
            "Pencarian Rujukan",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Kondisi & Logika",
            "IF / IFS"
          ],
          [
            "Perhitungan Angka",
            "Operator Aritmatika / SUMIF / PMT"
          ]
        ]
      },
      "notice": "Dilarang mengubah tabel acuan. Tulis formula langsung pada tabel pengerjaan yang tersedia."
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
            "key": "item",
            "label": "Item / Subjek",
            "letter": "B"
          },
          {
            "key": "param1",
            "label": "Parameter 1",
            "letter": "C"
          },
          {
            "key": "param2",
            "label": "Parameter 2",
            "letter": "D"
          },
          {
            "key": "target_val",
            "label": "Target Answer (Formula)",
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
              "no": 1,
              "item": "Kasus Uji Alpha",
              "param1": 5000000,
              "param2": 3500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "item": "Kasus Uji Beta",
              "param1": 8500000,
              "param2": 7200000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "item": "Kasus Uji Gamma",
              "param1": 6000000,
              "param2": 5500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "item": "Kasus Uji Delta",
              "param1": 3000000,
              "param2": 2400000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "item": "Kasus Uji Epsilon",
              "param1": 2500000,
              "param2": 2100000,
              "target_val": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "target_val",
            "letter": "E",
            "label": "Target Answer",
            "description": "Kalkulasi selisih / rujukan: =C2-D2",
            "expectedRowAnswers": {
              "2": 1500000,
              "3": 1300000,
              "4": 500000,
              "5": 600000,
              "6": 400000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Verifikasi",
            "description": "Jika target >= 500000 LULUS: =IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "LULUS",
              "5": "LULUS",
              "6": "TIDAK LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_master",
        "name": "Data Master",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Referensi",
            "letter": "A"
          },
          {
            "key": "nama_ref",
            "label": "Nama Rujukan",
            "letter": "B"
          },
          {
            "key": "bobot",
            "label": "Bobot Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "nama_ref": "Kategori Standar 1",
              "bobot": 1500000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "nama_ref": "Kategori Standar 2",
              "bobot": 1300000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "nama_ref": "Kategori Standar 3",
              "bobot": 500000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Target Answer",
        "formula": "=C2-D2",
        "explanation": "Menghitung nilai selisih antara Parameter 1 dan Parameter 2"
      },
      {
        "columnLabel": "Status Verifikasi",
        "formula": "=IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelayakan batas nilai 500.000"
      }
    ]
  },
  {
    "id": "EX-037",
    "number": 37,
    "code": "#SBEH036",
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
      "description": "Selesaikan lembar kerja kasus Penggabungan Alamat Surat Menyurat Lengkap (TEXTJOIN). Buka sheet utama untuk mengisi formula target sesuai data acuan pada sheet referensi.",
      "points": [
        "1. Periksa sheet \"Data Master\" untuk melihat tabel acuan harga/kategori/nama.",
        "2. Tulis rumus Excel dinamis pada kolom target (Answer) di sheet \"XL-Test\".",
        "3. Gunakan formula yang dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas untuk mengevaluasi kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Referensi Standar",
        "headers": [
          "Kategori Data",
          "Formula Saran"
        ],
        "rows": [
          [
            "Pencarian Rujukan",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Kondisi & Logika",
            "IF / IFS"
          ],
          [
            "Perhitungan Angka",
            "Operator Aritmatika / SUMIF / PMT"
          ]
        ]
      },
      "notice": "Dilarang mengubah tabel acuan. Tulis formula langsung pada tabel pengerjaan yang tersedia."
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
            "key": "item",
            "label": "Item / Subjek",
            "letter": "B"
          },
          {
            "key": "param1",
            "label": "Parameter 1",
            "letter": "C"
          },
          {
            "key": "param2",
            "label": "Parameter 2",
            "letter": "D"
          },
          {
            "key": "target_val",
            "label": "Target Answer (Formula)",
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
              "no": 1,
              "item": "Kasus Uji Alpha",
              "param1": 5000000,
              "param2": 3500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "item": "Kasus Uji Beta",
              "param1": 8500000,
              "param2": 7200000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "item": "Kasus Uji Gamma",
              "param1": 6000000,
              "param2": 5500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "item": "Kasus Uji Delta",
              "param1": 3000000,
              "param2": 2400000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "item": "Kasus Uji Epsilon",
              "param1": 2500000,
              "param2": 2100000,
              "target_val": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "target_val",
            "letter": "E",
            "label": "Target Answer",
            "description": "Kalkulasi selisih / rujukan: =C2-D2",
            "expectedRowAnswers": {
              "2": 1500000,
              "3": 1300000,
              "4": 500000,
              "5": 600000,
              "6": 400000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Verifikasi",
            "description": "Jika target >= 500000 LULUS: =IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "LULUS",
              "5": "LULUS",
              "6": "TIDAK LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_master",
        "name": "Data Master",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Referensi",
            "letter": "A"
          },
          {
            "key": "nama_ref",
            "label": "Nama Rujukan",
            "letter": "B"
          },
          {
            "key": "bobot",
            "label": "Bobot Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "nama_ref": "Kategori Standar 1",
              "bobot": 1500000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "nama_ref": "Kategori Standar 2",
              "bobot": 1300000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "nama_ref": "Kategori Standar 3",
              "bobot": 500000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Target Answer",
        "formula": "=C2-D2",
        "explanation": "Menghitung nilai selisih antara Parameter 1 dan Parameter 2"
      },
      {
        "columnLabel": "Status Verifikasi",
        "formula": "=IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelayakan batas nilai 500.000"
      }
    ]
  },
  {
    "id": "EX-038",
    "number": 38,
    "code": "#SBEH037",
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
      "description": "Selesaikan lembar kerja kasus Klasifikasi Status Reorder Stok Gudang (IF + VLOOKUP). Buka sheet utama untuk mengisi formula target sesuai data acuan pada sheet referensi.",
      "points": [
        "1. Periksa sheet \"Data Master\" untuk melihat tabel acuan harga/kategori/nama.",
        "2. Tulis rumus Excel dinamis pada kolom target (Answer) di sheet \"XL-Test\".",
        "3. Gunakan formula yang dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas untuk mengevaluasi kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Referensi Standar",
        "headers": [
          "Kategori Data",
          "Formula Saran"
        ],
        "rows": [
          [
            "Pencarian Rujukan",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Kondisi & Logika",
            "IF / IFS"
          ],
          [
            "Perhitungan Angka",
            "Operator Aritmatika / SUMIF / PMT"
          ]
        ]
      },
      "notice": "Dilarang mengubah tabel acuan. Tulis formula langsung pada tabel pengerjaan yang tersedia."
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
            "key": "item",
            "label": "Item / Subjek",
            "letter": "B"
          },
          {
            "key": "param1",
            "label": "Parameter 1",
            "letter": "C"
          },
          {
            "key": "param2",
            "label": "Parameter 2",
            "letter": "D"
          },
          {
            "key": "target_val",
            "label": "Target Answer (Formula)",
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
              "no": 1,
              "item": "Kasus Uji Alpha",
              "param1": 5000000,
              "param2": 3500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "item": "Kasus Uji Beta",
              "param1": 8500000,
              "param2": 7200000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "item": "Kasus Uji Gamma",
              "param1": 6000000,
              "param2": 5500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "item": "Kasus Uji Delta",
              "param1": 3000000,
              "param2": 2400000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "item": "Kasus Uji Epsilon",
              "param1": 2500000,
              "param2": 2100000,
              "target_val": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "target_val",
            "letter": "E",
            "label": "Target Answer",
            "description": "Kalkulasi selisih / rujukan: =C2-D2",
            "expectedRowAnswers": {
              "2": 1500000,
              "3": 1300000,
              "4": 500000,
              "5": 600000,
              "6": 400000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Verifikasi",
            "description": "Jika target >= 500000 LULUS: =IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "LULUS",
              "5": "LULUS",
              "6": "TIDAK LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_master",
        "name": "Data Master",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Referensi",
            "letter": "A"
          },
          {
            "key": "nama_ref",
            "label": "Nama Rujukan",
            "letter": "B"
          },
          {
            "key": "bobot",
            "label": "Bobot Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "nama_ref": "Kategori Standar 1",
              "bobot": 1500000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "nama_ref": "Kategori Standar 2",
              "bobot": 1300000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "nama_ref": "Kategori Standar 3",
              "bobot": 500000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Target Answer",
        "formula": "=C2-D2",
        "explanation": "Menghitung nilai selisih antara Parameter 1 dan Parameter 2"
      },
      {
        "columnLabel": "Status Verifikasi",
        "formula": "=IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelayakan batas nilai 500.000"
      }
    ]
  },
  {
    "id": "EX-039",
    "number": 39,
    "code": "#SBEH038",
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
      "description": "Selesaikan lembar kerja kasus Latihan Soal Data Pegawai dan Gaji (anagram). Buka sheet utama untuk mengisi formula target sesuai data acuan pada sheet referensi.",
      "points": [
        "1. Periksa sheet \"Data Master\" untuk melihat tabel acuan harga/kategori/nama.",
        "2. Tulis rumus Excel dinamis pada kolom target (Answer) di sheet \"XL-Test\".",
        "3. Gunakan formula yang dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas untuk mengevaluasi kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Referensi Standar",
        "headers": [
          "Kategori Data",
          "Formula Saran"
        ],
        "rows": [
          [
            "Pencarian Rujukan",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Kondisi & Logika",
            "IF / IFS"
          ],
          [
            "Perhitungan Angka",
            "Operator Aritmatika / SUMIF / PMT"
          ]
        ]
      },
      "notice": "Dilarang mengubah tabel acuan. Tulis formula langsung pada tabel pengerjaan yang tersedia."
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
            "key": "item",
            "label": "Item / Subjek",
            "letter": "B"
          },
          {
            "key": "param1",
            "label": "Parameter 1",
            "letter": "C"
          },
          {
            "key": "param2",
            "label": "Parameter 2",
            "letter": "D"
          },
          {
            "key": "target_val",
            "label": "Target Answer (Formula)",
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
              "no": 1,
              "item": "Kasus Uji Alpha",
              "param1": 5000000,
              "param2": 3500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "item": "Kasus Uji Beta",
              "param1": 8500000,
              "param2": 7200000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "item": "Kasus Uji Gamma",
              "param1": 6000000,
              "param2": 5500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "item": "Kasus Uji Delta",
              "param1": 3000000,
              "param2": 2400000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "item": "Kasus Uji Epsilon",
              "param1": 2500000,
              "param2": 2100000,
              "target_val": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "target_val",
            "letter": "E",
            "label": "Target Answer",
            "description": "Kalkulasi selisih / rujukan: =C2-D2",
            "expectedRowAnswers": {
              "2": 1500000,
              "3": 1300000,
              "4": 500000,
              "5": 600000,
              "6": 400000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Verifikasi",
            "description": "Jika target >= 500000 LULUS: =IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "LULUS",
              "5": "LULUS",
              "6": "TIDAK LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_master",
        "name": "Data Master",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Referensi",
            "letter": "A"
          },
          {
            "key": "nama_ref",
            "label": "Nama Rujukan",
            "letter": "B"
          },
          {
            "key": "bobot",
            "label": "Bobot Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "nama_ref": "Kategori Standar 1",
              "bobot": 1500000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "nama_ref": "Kategori Standar 2",
              "bobot": 1300000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "nama_ref": "Kategori Standar 3",
              "bobot": 500000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Target Answer",
        "formula": "=C2-D2",
        "explanation": "Menghitung nilai selisih antara Parameter 1 dan Parameter 2"
      },
      {
        "columnLabel": "Status Verifikasi",
        "formula": "=IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelayakan batas nilai 500.000"
      }
    ]
  },
  {
    "id": "EX-040",
    "number": 40,
    "code": "#SBEX039",
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
      "description": "Selesaikan lembar kerja kasus Extreme Level - Mencari Nama Berdasarkan Kata & Alamat Sel (INDEX/MATCH). Buka sheet utama untuk mengisi formula target sesuai data acuan pada sheet referensi.",
      "points": [
        "1. Periksa sheet \"Data Master\" untuk melihat tabel acuan harga/kategori/nama.",
        "2. Tulis rumus Excel dinamis pada kolom target (Answer) di sheet \"XL-Test\".",
        "3. Gunakan formula yang dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas untuk mengevaluasi kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Referensi Standar",
        "headers": [
          "Kategori Data",
          "Formula Saran"
        ],
        "rows": [
          [
            "Pencarian Rujukan",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Kondisi & Logika",
            "IF / IFS"
          ],
          [
            "Perhitungan Angka",
            "Operator Aritmatika / SUMIF / PMT"
          ]
        ]
      },
      "notice": "Dilarang mengubah tabel acuan. Tulis formula langsung pada tabel pengerjaan yang tersedia."
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
            "key": "item",
            "label": "Item / Subjek",
            "letter": "B"
          },
          {
            "key": "param1",
            "label": "Parameter 1",
            "letter": "C"
          },
          {
            "key": "param2",
            "label": "Parameter 2",
            "letter": "D"
          },
          {
            "key": "target_val",
            "label": "Target Answer (Formula)",
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
              "no": 1,
              "item": "Kasus Uji Alpha",
              "param1": 5000000,
              "param2": 3500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "item": "Kasus Uji Beta",
              "param1": 8500000,
              "param2": 7200000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "item": "Kasus Uji Gamma",
              "param1": 6000000,
              "param2": 5500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "item": "Kasus Uji Delta",
              "param1": 3000000,
              "param2": 2400000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "item": "Kasus Uji Epsilon",
              "param1": 2500000,
              "param2": 2100000,
              "target_val": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "target_val",
            "letter": "E",
            "label": "Target Answer",
            "description": "Kalkulasi selisih / rujukan: =C2-D2",
            "expectedRowAnswers": {
              "2": 1500000,
              "3": 1300000,
              "4": 500000,
              "5": 600000,
              "6": 400000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Verifikasi",
            "description": "Jika target >= 500000 LULUS: =IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "LULUS",
              "5": "LULUS",
              "6": "TIDAK LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_master",
        "name": "Data Master",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Referensi",
            "letter": "A"
          },
          {
            "key": "nama_ref",
            "label": "Nama Rujukan",
            "letter": "B"
          },
          {
            "key": "bobot",
            "label": "Bobot Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "nama_ref": "Kategori Standar 1",
              "bobot": 1500000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "nama_ref": "Kategori Standar 2",
              "bobot": 1300000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "nama_ref": "Kategori Standar 3",
              "bobot": 500000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Target Answer",
        "formula": "=C2-D2",
        "explanation": "Menghitung nilai selisih antara Parameter 1 dan Parameter 2"
      },
      {
        "columnLabel": "Status Verifikasi",
        "formula": "=IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelayakan batas nilai 500.000"
      }
    ]
  },
  {
    "id": "EX-041",
    "number": 41,
    "code": "#SBEX040",
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
      "description": "Selesaikan lembar kerja kasus Latihan Soal Excel Game Seri A Liga Italy. Buka sheet utama untuk mengisi formula target sesuai data acuan pada sheet referensi.",
      "points": [
        "1. Periksa sheet \"Data Master\" untuk melihat tabel acuan harga/kategori/nama.",
        "2. Tulis rumus Excel dinamis pada kolom target (Answer) di sheet \"XL-Test\".",
        "3. Gunakan formula yang dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas untuk mengevaluasi kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Referensi Standar",
        "headers": [
          "Kategori Data",
          "Formula Saran"
        ],
        "rows": [
          [
            "Pencarian Rujukan",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Kondisi & Logika",
            "IF / IFS"
          ],
          [
            "Perhitungan Angka",
            "Operator Aritmatika / SUMIF / PMT"
          ]
        ]
      },
      "notice": "Dilarang mengubah tabel acuan. Tulis formula langsung pada tabel pengerjaan yang tersedia."
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
            "key": "item",
            "label": "Item / Subjek",
            "letter": "B"
          },
          {
            "key": "param1",
            "label": "Parameter 1",
            "letter": "C"
          },
          {
            "key": "param2",
            "label": "Parameter 2",
            "letter": "D"
          },
          {
            "key": "target_val",
            "label": "Target Answer (Formula)",
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
              "no": 1,
              "item": "Kasus Uji Alpha",
              "param1": 5000000,
              "param2": 3500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "item": "Kasus Uji Beta",
              "param1": 8500000,
              "param2": 7200000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "item": "Kasus Uji Gamma",
              "param1": 6000000,
              "param2": 5500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "item": "Kasus Uji Delta",
              "param1": 3000000,
              "param2": 2400000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "item": "Kasus Uji Epsilon",
              "param1": 2500000,
              "param2": 2100000,
              "target_val": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "target_val",
            "letter": "E",
            "label": "Target Answer",
            "description": "Kalkulasi selisih / rujukan: =C2-D2",
            "expectedRowAnswers": {
              "2": 1500000,
              "3": 1300000,
              "4": 500000,
              "5": 600000,
              "6": 400000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Verifikasi",
            "description": "Jika target >= 500000 LULUS: =IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "LULUS",
              "5": "LULUS",
              "6": "TIDAK LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_master",
        "name": "Data Master",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Referensi",
            "letter": "A"
          },
          {
            "key": "nama_ref",
            "label": "Nama Rujukan",
            "letter": "B"
          },
          {
            "key": "bobot",
            "label": "Bobot Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "nama_ref": "Kategori Standar 1",
              "bobot": 1500000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "nama_ref": "Kategori Standar 2",
              "bobot": 1300000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "nama_ref": "Kategori Standar 3",
              "bobot": 500000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Target Answer",
        "formula": "=C2-D2",
        "explanation": "Menghitung nilai selisih antara Parameter 1 dan Parameter 2"
      },
      {
        "columnLabel": "Status Verifikasi",
        "formula": "=IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelayakan batas nilai 500.000"
      }
    ]
  },
  {
    "id": "EX-042",
    "number": 42,
    "code": "#SBEX041",
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
      "description": "Selesaikan lembar kerja kasus Tabel Amortisasi Pelunasan Pinjaman 12 Bulan. Buka sheet utama untuk mengisi formula target sesuai data acuan pada sheet referensi.",
      "points": [
        "1. Periksa sheet \"Data Master\" untuk melihat tabel acuan harga/kategori/nama.",
        "2. Tulis rumus Excel dinamis pada kolom target (Answer) di sheet \"XL-Test\".",
        "3. Gunakan formula yang dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas untuk mengevaluasi kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Referensi Standar",
        "headers": [
          "Kategori Data",
          "Formula Saran"
        ],
        "rows": [
          [
            "Pencarian Rujukan",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Kondisi & Logika",
            "IF / IFS"
          ],
          [
            "Perhitungan Angka",
            "Operator Aritmatika / SUMIF / PMT"
          ]
        ]
      },
      "notice": "Dilarang mengubah tabel acuan. Tulis formula langsung pada tabel pengerjaan yang tersedia."
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
            "key": "item",
            "label": "Item / Subjek",
            "letter": "B"
          },
          {
            "key": "param1",
            "label": "Parameter 1",
            "letter": "C"
          },
          {
            "key": "param2",
            "label": "Parameter 2",
            "letter": "D"
          },
          {
            "key": "target_val",
            "label": "Target Answer (Formula)",
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
              "no": 1,
              "item": "Kasus Uji Alpha",
              "param1": 5000000,
              "param2": 3500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "item": "Kasus Uji Beta",
              "param1": 8500000,
              "param2": 7200000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "item": "Kasus Uji Gamma",
              "param1": 6000000,
              "param2": 5500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "item": "Kasus Uji Delta",
              "param1": 3000000,
              "param2": 2400000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "item": "Kasus Uji Epsilon",
              "param1": 2500000,
              "param2": 2100000,
              "target_val": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "target_val",
            "letter": "E",
            "label": "Target Answer",
            "description": "Kalkulasi selisih / rujukan: =C2-D2",
            "expectedRowAnswers": {
              "2": 1500000,
              "3": 1300000,
              "4": 500000,
              "5": 600000,
              "6": 400000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Verifikasi",
            "description": "Jika target >= 500000 LULUS: =IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "LULUS",
              "5": "LULUS",
              "6": "TIDAK LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_master",
        "name": "Data Master",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Referensi",
            "letter": "A"
          },
          {
            "key": "nama_ref",
            "label": "Nama Rujukan",
            "letter": "B"
          },
          {
            "key": "bobot",
            "label": "Bobot Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "nama_ref": "Kategori Standar 1",
              "bobot": 1500000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "nama_ref": "Kategori Standar 2",
              "bobot": 1300000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "nama_ref": "Kategori Standar 3",
              "bobot": 500000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Target Answer",
        "formula": "=C2-D2",
        "explanation": "Menghitung nilai selisih antara Parameter 1 dan Parameter 2"
      },
      {
        "columnLabel": "Status Verifikasi",
        "formula": "=IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelayakan batas nilai 500.000"
      }
    ]
  },
  {
    "id": "EX-043",
    "number": 43,
    "code": "#SBEX042",
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
      "description": "Selesaikan lembar kerja kasus Validasi & Rekonsiliasi Transaksi Bank vs Buku Kas. Buka sheet utama untuk mengisi formula target sesuai data acuan pada sheet referensi.",
      "points": [
        "1. Periksa sheet \"Data Master\" untuk melihat tabel acuan harga/kategori/nama.",
        "2. Tulis rumus Excel dinamis pada kolom target (Answer) di sheet \"XL-Test\".",
        "3. Gunakan formula yang dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas untuk mengevaluasi kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Referensi Standar",
        "headers": [
          "Kategori Data",
          "Formula Saran"
        ],
        "rows": [
          [
            "Pencarian Rujukan",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Kondisi & Logika",
            "IF / IFS"
          ],
          [
            "Perhitungan Angka",
            "Operator Aritmatika / SUMIF / PMT"
          ]
        ]
      },
      "notice": "Dilarang mengubah tabel acuan. Tulis formula langsung pada tabel pengerjaan yang tersedia."
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
            "key": "item",
            "label": "Item / Subjek",
            "letter": "B"
          },
          {
            "key": "param1",
            "label": "Parameter 1",
            "letter": "C"
          },
          {
            "key": "param2",
            "label": "Parameter 2",
            "letter": "D"
          },
          {
            "key": "target_val",
            "label": "Target Answer (Formula)",
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
              "no": 1,
              "item": "Kasus Uji Alpha",
              "param1": 5000000,
              "param2": 3500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "item": "Kasus Uji Beta",
              "param1": 8500000,
              "param2": 7200000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "item": "Kasus Uji Gamma",
              "param1": 6000000,
              "param2": 5500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "item": "Kasus Uji Delta",
              "param1": 3000000,
              "param2": 2400000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "item": "Kasus Uji Epsilon",
              "param1": 2500000,
              "param2": 2100000,
              "target_val": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "target_val",
            "letter": "E",
            "label": "Target Answer",
            "description": "Kalkulasi selisih / rujukan: =C2-D2",
            "expectedRowAnswers": {
              "2": 1500000,
              "3": 1300000,
              "4": 500000,
              "5": 600000,
              "6": 400000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Verifikasi",
            "description": "Jika target >= 500000 LULUS: =IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "LULUS",
              "5": "LULUS",
              "6": "TIDAK LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_master",
        "name": "Data Master",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Referensi",
            "letter": "A"
          },
          {
            "key": "nama_ref",
            "label": "Nama Rujukan",
            "letter": "B"
          },
          {
            "key": "bobot",
            "label": "Bobot Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "nama_ref": "Kategori Standar 1",
              "bobot": 1500000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "nama_ref": "Kategori Standar 2",
              "bobot": 1300000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "nama_ref": "Kategori Standar 3",
              "bobot": 500000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Target Answer",
        "formula": "=C2-D2",
        "explanation": "Menghitung nilai selisih antara Parameter 1 dan Parameter 2"
      },
      {
        "columnLabel": "Status Verifikasi",
        "formula": "=IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelayakan batas nilai 500.000"
      }
    ]
  },
  {
    "id": "EX-044",
    "number": 44,
    "code": "#SBEX043",
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
      "description": "Selesaikan lembar kerja kasus Pencarian Multi-Sheet Inventaris 3 Gudang Wilayah. Buka sheet utama untuk mengisi formula target sesuai data acuan pada sheet referensi.",
      "points": [
        "1. Periksa sheet \"Data Master\" untuk melihat tabel acuan harga/kategori/nama.",
        "2. Tulis rumus Excel dinamis pada kolom target (Answer) di sheet \"XL-Test\".",
        "3. Gunakan formula yang dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas untuk mengevaluasi kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Referensi Standar",
        "headers": [
          "Kategori Data",
          "Formula Saran"
        ],
        "rows": [
          [
            "Pencarian Rujukan",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Kondisi & Logika",
            "IF / IFS"
          ],
          [
            "Perhitungan Angka",
            "Operator Aritmatika / SUMIF / PMT"
          ]
        ]
      },
      "notice": "Dilarang mengubah tabel acuan. Tulis formula langsung pada tabel pengerjaan yang tersedia."
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
            "key": "item",
            "label": "Item / Subjek",
            "letter": "B"
          },
          {
            "key": "param1",
            "label": "Parameter 1",
            "letter": "C"
          },
          {
            "key": "param2",
            "label": "Parameter 2",
            "letter": "D"
          },
          {
            "key": "target_val",
            "label": "Target Answer (Formula)",
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
              "no": 1,
              "item": "Kasus Uji Alpha",
              "param1": 5000000,
              "param2": 3500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "item": "Kasus Uji Beta",
              "param1": 8500000,
              "param2": 7200000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "item": "Kasus Uji Gamma",
              "param1": 6000000,
              "param2": 5500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "item": "Kasus Uji Delta",
              "param1": 3000000,
              "param2": 2400000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "item": "Kasus Uji Epsilon",
              "param1": 2500000,
              "param2": 2100000,
              "target_val": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "target_val",
            "letter": "E",
            "label": "Target Answer",
            "description": "Kalkulasi selisih / rujukan: =C2-D2",
            "expectedRowAnswers": {
              "2": 1500000,
              "3": 1300000,
              "4": 500000,
              "5": 600000,
              "6": 400000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Verifikasi",
            "description": "Jika target >= 500000 LULUS: =IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "LULUS",
              "5": "LULUS",
              "6": "TIDAK LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_master",
        "name": "Data Master",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Referensi",
            "letter": "A"
          },
          {
            "key": "nama_ref",
            "label": "Nama Rujukan",
            "letter": "B"
          },
          {
            "key": "bobot",
            "label": "Bobot Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "nama_ref": "Kategori Standar 1",
              "bobot": 1500000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "nama_ref": "Kategori Standar 2",
              "bobot": 1300000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "nama_ref": "Kategori Standar 3",
              "bobot": 500000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Target Answer",
        "formula": "=C2-D2",
        "explanation": "Menghitung nilai selisih antara Parameter 1 dan Parameter 2"
      },
      {
        "columnLabel": "Status Verifikasi",
        "formula": "=IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelayakan batas nilai 500.000"
      }
    ]
  },
  {
    "id": "EX-045",
    "number": 45,
    "code": "#SBEX044",
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
      "description": "Selesaikan lembar kerja kasus Kalkulasi KPI Performa Karyawan dengan Bobot Penilaian. Buka sheet utama untuk mengisi formula target sesuai data acuan pada sheet referensi.",
      "points": [
        "1. Periksa sheet \"Data Master\" untuk melihat tabel acuan harga/kategori/nama.",
        "2. Tulis rumus Excel dinamis pada kolom target (Answer) di sheet \"XL-Test\".",
        "3. Gunakan formula yang dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas untuk mengevaluasi kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Referensi Standar",
        "headers": [
          "Kategori Data",
          "Formula Saran"
        ],
        "rows": [
          [
            "Pencarian Rujukan",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Kondisi & Logika",
            "IF / IFS"
          ],
          [
            "Perhitungan Angka",
            "Operator Aritmatika / SUMIF / PMT"
          ]
        ]
      },
      "notice": "Dilarang mengubah tabel acuan. Tulis formula langsung pada tabel pengerjaan yang tersedia."
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
            "key": "item",
            "label": "Item / Subjek",
            "letter": "B"
          },
          {
            "key": "param1",
            "label": "Parameter 1",
            "letter": "C"
          },
          {
            "key": "param2",
            "label": "Parameter 2",
            "letter": "D"
          },
          {
            "key": "target_val",
            "label": "Target Answer (Formula)",
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
              "no": 1,
              "item": "Kasus Uji Alpha",
              "param1": 5000000,
              "param2": 3500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "item": "Kasus Uji Beta",
              "param1": 8500000,
              "param2": 7200000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "item": "Kasus Uji Gamma",
              "param1": 6000000,
              "param2": 5500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "item": "Kasus Uji Delta",
              "param1": 3000000,
              "param2": 2400000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "item": "Kasus Uji Epsilon",
              "param1": 2500000,
              "param2": 2100000,
              "target_val": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "target_val",
            "letter": "E",
            "label": "Target Answer",
            "description": "Kalkulasi selisih / rujukan: =C2-D2",
            "expectedRowAnswers": {
              "2": 1500000,
              "3": 1300000,
              "4": 500000,
              "5": 600000,
              "6": 400000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Verifikasi",
            "description": "Jika target >= 500000 LULUS: =IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "LULUS",
              "5": "LULUS",
              "6": "TIDAK LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_master",
        "name": "Data Master",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Referensi",
            "letter": "A"
          },
          {
            "key": "nama_ref",
            "label": "Nama Rujukan",
            "letter": "B"
          },
          {
            "key": "bobot",
            "label": "Bobot Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "nama_ref": "Kategori Standar 1",
              "bobot": 1500000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "nama_ref": "Kategori Standar 2",
              "bobot": 1300000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "nama_ref": "Kategori Standar 3",
              "bobot": 500000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Target Answer",
        "formula": "=C2-D2",
        "explanation": "Menghitung nilai selisih antara Parameter 1 dan Parameter 2"
      },
      {
        "columnLabel": "Status Verifikasi",
        "formula": "=IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelayakan batas nilai 500.000"
      }
    ]
  },
  {
    "id": "EX-046",
    "number": 46,
    "code": "#SBEX045",
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
      "description": "Selesaikan lembar kerja kasus Otomasi Pembuatan Invoice & Faktur Pajak Perusahaan. Buka sheet utama untuk mengisi formula target sesuai data acuan pada sheet referensi.",
      "points": [
        "1. Periksa sheet \"Data Master\" untuk melihat tabel acuan harga/kategori/nama.",
        "2. Tulis rumus Excel dinamis pada kolom target (Answer) di sheet \"XL-Test\".",
        "3. Gunakan formula yang dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas untuk mengevaluasi kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Referensi Standar",
        "headers": [
          "Kategori Data",
          "Formula Saran"
        ],
        "rows": [
          [
            "Pencarian Rujukan",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Kondisi & Logika",
            "IF / IFS"
          ],
          [
            "Perhitungan Angka",
            "Operator Aritmatika / SUMIF / PMT"
          ]
        ]
      },
      "notice": "Dilarang mengubah tabel acuan. Tulis formula langsung pada tabel pengerjaan yang tersedia."
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
            "key": "item",
            "label": "Item / Subjek",
            "letter": "B"
          },
          {
            "key": "param1",
            "label": "Parameter 1",
            "letter": "C"
          },
          {
            "key": "param2",
            "label": "Parameter 2",
            "letter": "D"
          },
          {
            "key": "target_val",
            "label": "Target Answer (Formula)",
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
              "no": 1,
              "item": "Kasus Uji Alpha",
              "param1": 5000000,
              "param2": 3500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "item": "Kasus Uji Beta",
              "param1": 8500000,
              "param2": 7200000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "item": "Kasus Uji Gamma",
              "param1": 6000000,
              "param2": 5500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "item": "Kasus Uji Delta",
              "param1": 3000000,
              "param2": 2400000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "item": "Kasus Uji Epsilon",
              "param1": 2500000,
              "param2": 2100000,
              "target_val": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "target_val",
            "letter": "E",
            "label": "Target Answer",
            "description": "Kalkulasi selisih / rujukan: =C2-D2",
            "expectedRowAnswers": {
              "2": 1500000,
              "3": 1300000,
              "4": 500000,
              "5": 600000,
              "6": 400000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Verifikasi",
            "description": "Jika target >= 500000 LULUS: =IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "LULUS",
              "5": "LULUS",
              "6": "TIDAK LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_master",
        "name": "Data Master",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Referensi",
            "letter": "A"
          },
          {
            "key": "nama_ref",
            "label": "Nama Rujukan",
            "letter": "B"
          },
          {
            "key": "bobot",
            "label": "Bobot Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "nama_ref": "Kategori Standar 1",
              "bobot": 1500000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "nama_ref": "Kategori Standar 2",
              "bobot": 1300000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "nama_ref": "Kategori Standar 3",
              "bobot": 500000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Target Answer",
        "formula": "=C2-D2",
        "explanation": "Menghitung nilai selisih antara Parameter 1 dan Parameter 2"
      },
      {
        "columnLabel": "Status Verifikasi",
        "formula": "=IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelayakan batas nilai 500.000"
      }
    ]
  },
  {
    "id": "EX-047",
    "number": 47,
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
      "description": "Selesaikan lembar kerja kasus File Latihan Championship Excel: EVE Online (MEWC 2023). Buka sheet utama untuk mengisi formula target sesuai data acuan pada sheet referensi.",
      "points": [
        "1. Periksa sheet \"Data Master\" untuk melihat tabel acuan harga/kategori/nama.",
        "2. Tulis rumus Excel dinamis pada kolom target (Answer) di sheet \"XL-Test\".",
        "3. Gunakan formula yang dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas untuk mengevaluasi kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Referensi Standar",
        "headers": [
          "Kategori Data",
          "Formula Saran"
        ],
        "rows": [
          [
            "Pencarian Rujukan",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Kondisi & Logika",
            "IF / IFS"
          ],
          [
            "Perhitungan Angka",
            "Operator Aritmatika / SUMIF / PMT"
          ]
        ]
      },
      "notice": "Dilarang mengubah tabel acuan. Tulis formula langsung pada tabel pengerjaan yang tersedia."
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
            "key": "item",
            "label": "Item / Subjek",
            "letter": "B"
          },
          {
            "key": "param1",
            "label": "Parameter 1",
            "letter": "C"
          },
          {
            "key": "param2",
            "label": "Parameter 2",
            "letter": "D"
          },
          {
            "key": "target_val",
            "label": "Target Answer (Formula)",
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
              "no": 1,
              "item": "Kasus Uji Alpha",
              "param1": 5000000,
              "param2": 3500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "item": "Kasus Uji Beta",
              "param1": 8500000,
              "param2": 7200000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "item": "Kasus Uji Gamma",
              "param1": 6000000,
              "param2": 5500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "item": "Kasus Uji Delta",
              "param1": 3000000,
              "param2": 2400000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "item": "Kasus Uji Epsilon",
              "param1": 2500000,
              "param2": 2100000,
              "target_val": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "target_val",
            "letter": "E",
            "label": "Target Answer",
            "description": "Kalkulasi selisih / rujukan: =C2-D2",
            "expectedRowAnswers": {
              "2": 1500000,
              "3": 1300000,
              "4": 500000,
              "5": 600000,
              "6": 400000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Verifikasi",
            "description": "Jika target >= 500000 LULUS: =IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "LULUS",
              "5": "LULUS",
              "6": "TIDAK LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_master",
        "name": "Data Master",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Referensi",
            "letter": "A"
          },
          {
            "key": "nama_ref",
            "label": "Nama Rujukan",
            "letter": "B"
          },
          {
            "key": "bobot",
            "label": "Bobot Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "nama_ref": "Kategori Standar 1",
              "bobot": 1500000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "nama_ref": "Kategori Standar 2",
              "bobot": 1300000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "nama_ref": "Kategori Standar 3",
              "bobot": 500000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Target Answer",
        "formula": "=C2-D2",
        "explanation": "Menghitung nilai selisih antara Parameter 1 dan Parameter 2"
      },
      {
        "columnLabel": "Status Verifikasi",
        "formula": "=IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelayakan batas nilai 500.000"
      }
    ]
  },
  {
    "id": "EX-048",
    "number": 48,
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
      "description": "Selesaikan lembar kerja kasus Championship Level: Model Valuasi Finansial Startup. Buka sheet utama untuk mengisi formula target sesuai data acuan pada sheet referensi.",
      "points": [
        "1. Periksa sheet \"Data Master\" untuk melihat tabel acuan harga/kategori/nama.",
        "2. Tulis rumus Excel dinamis pada kolom target (Answer) di sheet \"XL-Test\".",
        "3. Gunakan formula yang dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas untuk mengevaluasi kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Referensi Standar",
        "headers": [
          "Kategori Data",
          "Formula Saran"
        ],
        "rows": [
          [
            "Pencarian Rujukan",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Kondisi & Logika",
            "IF / IFS"
          ],
          [
            "Perhitungan Angka",
            "Operator Aritmatika / SUMIF / PMT"
          ]
        ]
      },
      "notice": "Dilarang mengubah tabel acuan. Tulis formula langsung pada tabel pengerjaan yang tersedia."
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
            "key": "item",
            "label": "Item / Subjek",
            "letter": "B"
          },
          {
            "key": "param1",
            "label": "Parameter 1",
            "letter": "C"
          },
          {
            "key": "param2",
            "label": "Parameter 2",
            "letter": "D"
          },
          {
            "key": "target_val",
            "label": "Target Answer (Formula)",
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
              "no": 1,
              "item": "Kasus Uji Alpha",
              "param1": 5000000,
              "param2": 3500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "item": "Kasus Uji Beta",
              "param1": 8500000,
              "param2": 7200000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "item": "Kasus Uji Gamma",
              "param1": 6000000,
              "param2": 5500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "item": "Kasus Uji Delta",
              "param1": 3000000,
              "param2": 2400000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "item": "Kasus Uji Epsilon",
              "param1": 2500000,
              "param2": 2100000,
              "target_val": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "target_val",
            "letter": "E",
            "label": "Target Answer",
            "description": "Kalkulasi selisih / rujukan: =C2-D2",
            "expectedRowAnswers": {
              "2": 1500000,
              "3": 1300000,
              "4": 500000,
              "5": 600000,
              "6": 400000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Verifikasi",
            "description": "Jika target >= 500000 LULUS: =IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "LULUS",
              "5": "LULUS",
              "6": "TIDAK LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_master",
        "name": "Data Master",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Referensi",
            "letter": "A"
          },
          {
            "key": "nama_ref",
            "label": "Nama Rujukan",
            "letter": "B"
          },
          {
            "key": "bobot",
            "label": "Bobot Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "nama_ref": "Kategori Standar 1",
              "bobot": 1500000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "nama_ref": "Kategori Standar 2",
              "bobot": 1300000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "nama_ref": "Kategori Standar 3",
              "bobot": 500000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Target Answer",
        "formula": "=C2-D2",
        "explanation": "Menghitung nilai selisih antara Parameter 1 dan Parameter 2"
      },
      {
        "columnLabel": "Status Verifikasi",
        "formula": "=IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelayakan batas nilai 500.000"
      }
    ]
  },
  {
    "id": "EX-049",
    "number": 49,
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
      "description": "Selesaikan lembar kerja kasus Championship Level: Optimasi Rute Pengiriman Logistik. Buka sheet utama untuk mengisi formula target sesuai data acuan pada sheet referensi.",
      "points": [
        "1. Periksa sheet \"Data Master\" untuk melihat tabel acuan harga/kategori/nama.",
        "2. Tulis rumus Excel dinamis pada kolom target (Answer) di sheet \"XL-Test\".",
        "3. Gunakan formula yang dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas untuk mengevaluasi kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Referensi Standar",
        "headers": [
          "Kategori Data",
          "Formula Saran"
        ],
        "rows": [
          [
            "Pencarian Rujukan",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Kondisi & Logika",
            "IF / IFS"
          ],
          [
            "Perhitungan Angka",
            "Operator Aritmatika / SUMIF / PMT"
          ]
        ]
      },
      "notice": "Dilarang mengubah tabel acuan. Tulis formula langsung pada tabel pengerjaan yang tersedia."
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
            "key": "item",
            "label": "Item / Subjek",
            "letter": "B"
          },
          {
            "key": "param1",
            "label": "Parameter 1",
            "letter": "C"
          },
          {
            "key": "param2",
            "label": "Parameter 2",
            "letter": "D"
          },
          {
            "key": "target_val",
            "label": "Target Answer (Formula)",
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
              "no": 1,
              "item": "Kasus Uji Alpha",
              "param1": 5000000,
              "param2": 3500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "item": "Kasus Uji Beta",
              "param1": 8500000,
              "param2": 7200000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "item": "Kasus Uji Gamma",
              "param1": 6000000,
              "param2": 5500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "item": "Kasus Uji Delta",
              "param1": 3000000,
              "param2": 2400000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "item": "Kasus Uji Epsilon",
              "param1": 2500000,
              "param2": 2100000,
              "target_val": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "target_val",
            "letter": "E",
            "label": "Target Answer",
            "description": "Kalkulasi selisih / rujukan: =C2-D2",
            "expectedRowAnswers": {
              "2": 1500000,
              "3": 1300000,
              "4": 500000,
              "5": 600000,
              "6": 400000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Verifikasi",
            "description": "Jika target >= 500000 LULUS: =IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "LULUS",
              "5": "LULUS",
              "6": "TIDAK LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_master",
        "name": "Data Master",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Referensi",
            "letter": "A"
          },
          {
            "key": "nama_ref",
            "label": "Nama Rujukan",
            "letter": "B"
          },
          {
            "key": "bobot",
            "label": "Bobot Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "nama_ref": "Kategori Standar 1",
              "bobot": 1500000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "nama_ref": "Kategori Standar 2",
              "bobot": 1300000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "nama_ref": "Kategori Standar 3",
              "bobot": 500000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Target Answer",
        "formula": "=C2-D2",
        "explanation": "Menghitung nilai selisih antara Parameter 1 dan Parameter 2"
      },
      {
        "columnLabel": "Status Verifikasi",
        "formula": "=IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelayakan batas nilai 500.000"
      }
    ]
  },
  {
    "id": "EX-050",
    "number": 50,
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
      "description": "Selesaikan lembar kerja kasus Championship Level: Analisis Sensitivitas Laba Multi-Variabel. Buka sheet utama untuk mengisi formula target sesuai data acuan pada sheet referensi.",
      "points": [
        "1. Periksa sheet \"Data Master\" untuk melihat tabel acuan harga/kategori/nama.",
        "2. Tulis rumus Excel dinamis pada kolom target (Answer) di sheet \"XL-Test\".",
        "3. Gunakan formula yang dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas untuk mengevaluasi kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Referensi Standar",
        "headers": [
          "Kategori Data",
          "Formula Saran"
        ],
        "rows": [
          [
            "Pencarian Rujukan",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Kondisi & Logika",
            "IF / IFS"
          ],
          [
            "Perhitungan Angka",
            "Operator Aritmatika / SUMIF / PMT"
          ]
        ]
      },
      "notice": "Dilarang mengubah tabel acuan. Tulis formula langsung pada tabel pengerjaan yang tersedia."
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
            "key": "item",
            "label": "Item / Subjek",
            "letter": "B"
          },
          {
            "key": "param1",
            "label": "Parameter 1",
            "letter": "C"
          },
          {
            "key": "param2",
            "label": "Parameter 2",
            "letter": "D"
          },
          {
            "key": "target_val",
            "label": "Target Answer (Formula)",
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
              "no": 1,
              "item": "Kasus Uji Alpha",
              "param1": 5000000,
              "param2": 3500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "item": "Kasus Uji Beta",
              "param1": 8500000,
              "param2": 7200000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "item": "Kasus Uji Gamma",
              "param1": 6000000,
              "param2": 5500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "item": "Kasus Uji Delta",
              "param1": 3000000,
              "param2": 2400000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "item": "Kasus Uji Epsilon",
              "param1": 2500000,
              "param2": 2100000,
              "target_val": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "target_val",
            "letter": "E",
            "label": "Target Answer",
            "description": "Kalkulasi selisih / rujukan: =C2-D2",
            "expectedRowAnswers": {
              "2": 1500000,
              "3": 1300000,
              "4": 500000,
              "5": 600000,
              "6": 400000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Verifikasi",
            "description": "Jika target >= 500000 LULUS: =IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "LULUS",
              "5": "LULUS",
              "6": "TIDAK LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_master",
        "name": "Data Master",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Referensi",
            "letter": "A"
          },
          {
            "key": "nama_ref",
            "label": "Nama Rujukan",
            "letter": "B"
          },
          {
            "key": "bobot",
            "label": "Bobot Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "nama_ref": "Kategori Standar 1",
              "bobot": 1500000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "nama_ref": "Kategori Standar 2",
              "bobot": 1300000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "nama_ref": "Kategori Standar 3",
              "bobot": 500000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Target Answer",
        "formula": "=C2-D2",
        "explanation": "Menghitung nilai selisih antara Parameter 1 dan Parameter 2"
      },
      {
        "columnLabel": "Status Verifikasi",
        "formula": "=IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelayakan batas nilai 500.000"
      }
    ]
  },
  {
    "id": "EX-051",
    "number": 51,
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
      "description": "Selesaikan lembar kerja kasus Championship Master: Dashboard Eksekutif Lengkap Perusahaan. Buka sheet utama untuk mengisi formula target sesuai data acuan pada sheet referensi.",
      "points": [
        "1. Periksa sheet \"Data Master\" untuk melihat tabel acuan harga/kategori/nama.",
        "2. Tulis rumus Excel dinamis pada kolom target (Answer) di sheet \"XL-Test\".",
        "3. Gunakan formula yang dapat diterapkan ke seluruh baris data.",
        "4. Klik tombol \"Cek Hasil Jawaban\" di pojok kanan atas untuk mengevaluasi kelulusan."
      ],
      "helperTable": {
        "title": "Bantuan Referensi Standar",
        "headers": [
          "Kategori Data",
          "Formula Saran"
        ],
        "rows": [
          [
            "Pencarian Rujukan",
            "VLOOKUP / XLOOKUP / INDEX-MATCH"
          ],
          [
            "Kondisi & Logika",
            "IF / IFS"
          ],
          [
            "Perhitungan Angka",
            "Operator Aritmatika / SUMIF / PMT"
          ]
        ]
      },
      "notice": "Dilarang mengubah tabel acuan. Tulis formula langsung pada tabel pengerjaan yang tersedia."
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
            "key": "item",
            "label": "Item / Subjek",
            "letter": "B"
          },
          {
            "key": "param1",
            "label": "Parameter 1",
            "letter": "C"
          },
          {
            "key": "param2",
            "label": "Parameter 2",
            "letter": "D"
          },
          {
            "key": "target_val",
            "label": "Target Answer (Formula)",
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
              "no": 1,
              "item": "Kasus Uji Alpha",
              "param1": 5000000,
              "param2": 3500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "no": 2,
              "item": "Kasus Uji Beta",
              "param1": 8500000,
              "param2": 7200000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "no": 3,
              "item": "Kasus Uji Gamma",
              "param1": 6000000,
              "param2": 5500000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 5,
            "values": {
              "no": 4,
              "item": "Kasus Uji Delta",
              "param1": 3000000,
              "param2": 2400000,
              "target_val": "?",
              "status": "?"
            }
          },
          {
            "rowNumber": 6,
            "values": {
              "no": 5,
              "item": "Kasus Uji Epsilon",
              "param1": 2500000,
              "param2": 2100000,
              "target_val": "?",
              "status": "?"
            }
          }
        ],
        "targetColumns": [
          {
            "key": "target_val",
            "letter": "E",
            "label": "Target Answer",
            "description": "Kalkulasi selisih / rujukan: =C2-D2",
            "expectedRowAnswers": {
              "2": 1500000,
              "3": 1300000,
              "4": 500000,
              "5": 600000,
              "6": 400000
            }
          },
          {
            "key": "status",
            "letter": "F",
            "label": "Status Verifikasi",
            "description": "Jika target >= 500000 LULUS: =IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
            "expectedRowAnswers": {
              "2": "LULUS",
              "3": "LULUS",
              "4": "LULUS",
              "5": "LULUS",
              "6": "TIDAK LULUS"
            }
          }
        ]
      },
      {
        "id": "sheet_master",
        "name": "Data Master",
        "columns": [
          {
            "key": "kode",
            "label": "Kode Referensi",
            "letter": "A"
          },
          {
            "key": "nama_ref",
            "label": "Nama Rujukan",
            "letter": "B"
          },
          {
            "key": "bobot",
            "label": "Bobot Standar",
            "letter": "C"
          }
        ],
        "rows": [
          {
            "rowNumber": 2,
            "values": {
              "kode": "REF-01",
              "nama_ref": "Kategori Standar 1",
              "bobot": 1500000
            }
          },
          {
            "rowNumber": 3,
            "values": {
              "kode": "REF-02",
              "nama_ref": "Kategori Standar 2",
              "bobot": 1300000
            }
          },
          {
            "rowNumber": 4,
            "values": {
              "kode": "REF-03",
              "nama_ref": "Kategori Standar 3",
              "bobot": 500000
            }
          }
        ]
      }
    ],
    "passingScore": 70,
    "solutionBlueprints": [
      {
        "columnLabel": "Target Answer",
        "formula": "=C2-D2",
        "explanation": "Menghitung nilai selisih antara Parameter 1 dan Parameter 2"
      },
      {
        "columnLabel": "Status Verifikasi",
        "formula": "=IF(E2>=500000, \"LULUS\", \"TIDAK LULUS\")",
        "explanation": "Menguji kondisi kelayakan batas nilai 500.000"
      }
    ]
  }
];
