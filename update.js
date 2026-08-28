const fs = require('fs');

const path = 'src/lib/curriculum.ts';
let content = fs.readFileSync(path, 'utf8');

// I will parse out the MODULES array, but since it's a string, it's easier to match each module block.
// We can use a regex that looks for `id: (\d+),` and then `hints: \[.*?\],` to replace the hints and append new fields.
const moduleRegex = /(id:\s*(\d+),[\s\S]*?)hints:\s*\[(.*?)\],/g;

const jobs = ['Kasir', 'Admin Keuangan', 'Staff Finance', 'Akuntan', 'HRD', 'Guru', 'Admin Gudang', 'Purchasing', 'Data Entry', 'Analis Data', 'Manajer Operasional', 'Sales', 'Marketing', 'Quality Control', 'Customer Service', 'Sekretaris', 'Bendahara', 'Financial Planner', 'Analis Kredit', 'Auditor'];

function getRandomJobs() {
  const shuffled = jobs.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3);
}

const customData = {
  1: {
    skills: ["Operator Penjumlahan (+)", "Referensi Sel Sederhana", "Menulis Rumus Dasar"],
    example: "Seorang Kasir sering kali harus menghitung total pembelian secara cepat ketika sistem kasir bermasalah, atau saat menjumlahkan pemasukan dari beberapa shift.",
    prereq: []
  },
  2: {
    skills: ["Operator Pengurangan (-)", "Kalkulasi Selisih", "Logika Arus Kas"],
    example: "Seorang Admin Keuangan perlu menghitung sisa budget bulanan divisi dengan mengurangi pengeluaran dari total anggaran yang diberikan.",
    prereq: [1]
  },
  3: {
    skills: ["Operator Perkalian (*)", "Kalkulasi Subtotal", "Range Reference Sederhana"],
    example: "Staf Purchasing menghitung subtotal biaya pengadaan barang dengan mengalikan jumlah barang pesanan dengan harga satuan supplier.",
    prereq: [1]
  },
  4: {
    skills: ["Operator Pembagian (/)", "Kalkulasi Rata-Rata Manual", "Split Cost"],
    example: "Manajer Operasional membagi total tagihan katering harian ke seluruh karyawan untuk mengetahui porsi biaya konsumsi per orang.",
    prereq: [1, 2, 3]
  },
  5: {
    skills: ["Kalkulasi Persentase (%)", "Menghitung Diskon/Pajak", "Tipe Data Desimal"],
    example: "Sales Marketing menghitung potongan harga akhir pada invoice setelah klien diberikan diskon promo khusus 20%.",
    prereq: [3]
  },
  6: {
    skills: ["Hirarki Operasi Matematika", "Penggunaan Tanda Kurung ()", "Kalkulasi Multi-Tahap"],
    example: "Financial Planner merancang simulasi pembayaran cicilan klien dengan memperhitungkan penjumlahan total hutang lalu dipotong persentase keringanan.",
    prereq: [1, 2, 3, 4, 5]
  },
  7: {
    skills: ["Fungsi SUM", "Range Reference Blok (A1:A10)", "Agregasi Dasar"],
    example: "Bendahara acara menghimpun seluruh pemasukan tiket dari baris pertama hingga terakhir secara kilat tanpa menjumlahkan satu per satu.",
    prereq: [1]
  },
  8: {
    skills: ["Fungsi AVERAGE", "Mencari Nilai Rata-rata", "Evaluasi Performa"],
    example: "Guru mengevaluasi rata-rata nilai ujian matematika satu kelas untuk melihat apakah kelas perlu sesi remedial tambahan.",
    prereq: [7]
  },
  9: {
    skills: ["Fungsi MAX & MIN", "Analisis Puncak Data", "Mencari Ekstrim"],
    example: "Analis Data memantau rekor tertinggi omset harian dalam sebulan untuk mencari pola hari paling ramai di toko.",
    prereq: [7]
  },
  10: {
    skills: ["Fungsi COUNT", "Menghitung Sel Numerik", "Audit Kelengkapan Angka"],
    example: "HRD menghitung berapa banyak karyawan yang sudah menginput target KPI mereka dalam bentuk persentase angka di sistem rekap.",
    prereq: [7]
  },
  11: {
    skills: ["Fungsi COUNTA", "Menghitung Sel Terisi", "Audit Absensi"],
    example: "Sekretaris menghitung jumlah peserta meeting yang hadir dengan menghitung baris tanda tangan di spreadsheet daftar hadir.",
    prereq: [10]
  },
  12: {
    skills: ["Fungsi COUNTBLANK", "Audit Sel Kosong", "Pengecekan Data Incomplete"],
    example: "Admin Gudang memeriksa baris barang masuk yang belum diberikan kode serial number (kosong) agar segera ditindaklanjuti.",
    prereq: [10, 11]
  },
  13: {
    skills: ["Fungsi LARGE", "Mencari Peringkat N-Tertinggi", "Ranking Parsial"],
    example: "Manajer Sales mencari sales person dengan performa tertinggi kedua untuk diberikan apresiasi 'Runner Up of the Month'.",
    prereq: [9]
  },
  14: {
    skills: ["Fungsi SMALL", "Mencari Peringkat N-Terendah", "Evaluasi Cost Minimum"],
    example: "Staf Purchasing membandingkan penawaran vendor dan mengambil harga tender paling murah kedua sebagai alternatif cadangan.",
    prereq: [9]
  },
  15: {
    skills: ["Fungsi PROPER", "Manipulasi String Teks", "Pembersihan Data Nama"],
    example: "Data Entry merapikan database pelanggan dari form online yang sering diinput dengan huruf kecil semua menjadi rapi dengan awalan huruf besar.",
    prereq: []
  },
  16: {
    skills: ["Fungsi UPPER", "Kapitalisasi Karakter", "Standardisasi Kode"],
    example: "Staf HRD mengubah ribuan data pelamar menjadi format huruf kapital semua untuk disesuaikan dengan format sistem BPJS Ketenagakerjaan.",
    prereq: [15]
  },
  17: {
    skills: ["Operator Ampersand (&)", "Penggabungan String", "Menyelipkan Spasi Kosong"],
    example: "Customer Service menggabungkan kolom Nama Depan dan Nama Belakang pelanggan menjadi satu kolom untuk keperluan pencetakan kartu member.",
    prereq: []
  },
  18: {
    skills: ["Fungsi CONCAT / CONCATENATE", "Penggabungan Multi-Sel", "Pembuatan Barcode/ID"],
    example: "Admin Gudang merangkai kode wilayah, tahun masuk, dan nomor urut menjadi satu string barcode inventaris yang unik.",
    prereq: [17]
  },
  19: {
    skills: ["Fungsi LEFT", "Ekstraksi String Kiri", "Parsing Kode Wilayah"],
    example: "Staf Logistik mengambil 3 huruf pertama dari nomor resi pengiriman untuk mengetahui kode bandara tujuan pengiriman.",
    prereq: []
  },
  20: {
    skills: ["Fungsi RIGHT", "Ekstraksi String Kanan", "Parsing Tahun/Nomor Urut"],
    example: "Analis Kredit mengambil 4 digit terakhir dari nomor kartu kredit nasabah untuk ditampilkan sebagai penanda di resi pembayaran.",
    prereq: [19]
  },
  21: {
    skills: ["Fungsi MID", "Ekstraksi Karakter Tengah", "Parsing NIK/KTP"],
    example: "Admin HRD mengambil karakter tertentu di tengah deretan NIK karyawan untuk mengetahui tahun lahir mereka secara otomatis.",
    prereq: [19, 20]
  },
  22: {
    skills: ["Fungsi TRIM", "Fungsi LEN", "Membersihkan Spasi Berlebih", "Audit Panjang String"],
    example: "Analis Data membersihkan hasil ekspor data CSV yang berantakan karena mengandung banyak spasi tambahan yang merusak sistem pencarian.",
    prereq: []
  }
};

// Fallback logic for ids > 22
function getCustom(idStr) {
  let id = parseInt(idStr);
  if (customData[id]) return customData[id];
  
  // generic mapping for chapter 4,5,6
  let skills = ["Logika Lanjutan", "Pengolahan Keputusan", "Penggunaan Operator Kondisional"];
  let example = "Digunakan oleh analis dan manajer untuk membuat laporan otomatis tanpa harus mensortir data satu per satu secara manual.";
  let prereq = [id - 1];
  
  if (id >= 23 && id <= 30) {
    skills = ["Fungsi IF", "Kondisi Logika (AND/OR)", "Fungsi COUNTIF/SUMIF"];
    example = "Akuntan menggunakan rumus ini untuk otomatis menandai transaksi yang melebihi budget bulanan dengan status 'OVERBUDGET'.";
  } else if (id >= 31 && id <= 36) {
    skills = ["Fungsi VLOOKUP/HLOOKUP", "Pencarian Tabel Reference", "Relasi Antar Data"];
    example = "Staf Admin Gudang menarik harga otomatis dari tabel database pusat hanya dengan mengetikkan kode SKU barang di nota.";
    prereq = [1, 7];
  } else if (id >= 37 && id <= 40) {
    skills = ["Fungsi Finansial PMT", "Analisis Margin Laba", "Simulasi Break Even Point"];
    example = "Financial Planner menyusun simulasi cicilan bulanan yang harus dibayar klien untuk KPR rumah berdasarkan suku bunga bank saat ini.";
    prereq = [1, 2, 3, 4, 5, 6];
  }
  
  return { skills, example, prereq };
}

let result = content.replace(moduleRegex, (match, prefix, idStr, oldHints) => {
  const data = getCustom(idStr);
  const jobsStr = JSON.stringify(getRandomJobs());
  const skillsStr = JSON.stringify(data.skills);
  const prereqStr = JSON.stringify(data.prereq);
  const exampleStr = JSON.stringify(data.example);
  
  // Extract the function name from valid formulas if possible, or just generate generic hints
  // To get valid formulas, we can do a quick regex on the prefix block.
  const formulaMatch = prefix.match(/validFormulas:\s*\[(.*?)\]/);
  let primaryFormula = "'=SUM(A1:B1)'";
  if (formulaMatch && formulaMatch[1]) {
    // try to parse the first string
    const firstStringMatch = formulaMatch[1].match(/['"`](.*?)['"`]/);
    if (firstStringMatch) {
      primaryFormula = firstStringMatch[0];
    }
  }
  
  let hint1 = "Pikirkan pendekatan konseptual yang tepat. Periksa kolom mana yang perlu dihitung dan apa tujuan utamanya.";
  let hint2 = "Gunakan fungsi atau operator yang sesuai dengan instruksi. Fokus pada sel yang ditunjuk (contohnya perhatikan sel awal dan akhir).";
  let hint3 = "Ketik " + primaryFormula.replace(/['"]/g, '') + " lalu tekan Enter.";
  
  // Check if oldHints had something we can reuse
  const oldHintsStr = `[${oldHints}]`; 
  // actually it's easier to just build the new hints directly
  
  const newHintsStr = `[
      'Hint 1: ${hint1}',
      'Hint 2: ${hint2}',
      'Hint 3: ${hint3}'
    ]`;

  const newFields = `
    skillsLearned: ${skillsStr},
    jobRelevance: ${jobsStr},
    realWorldExample: ${exampleStr},
    prerequisiteModules: ${prereqStr},
    hints: ${newHintsStr},`;

  return prefix + newFields.trim();
});

fs.writeFileSync(path, result, 'utf8');
console.log("Updated rows count. Length changed from", content.length, "to", result.length);
