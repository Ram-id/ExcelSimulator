# 📊 ExcelSimulator - Kurikulum Belajar Excel Interaktif (Zero to Hero)

Platform simulasi dan pembelajaran rumus Microsoft Excel interaktif berbasis **Next.js 15 (App Router)**, **React 19**, **TypeScript**, dan **Tailwind CSS**. Didesain khusus untuk pemula yang ingin belajar rumus Excel dari nol hingga mahir menggunakan **data kasus kehidupan sehari-hari**.

---

## 📚 Struktur Kurikulum Pembelajaran (5 Track / 16 Modul)

### 🔹 Track 1: Aritmatika & Dasar Rumus (Fondasi)
* **Modul 1: Penjumlahan Manual (`+`)** - Menghitung pengeluaran makan & transport harian.
* **Modul 2: Perkalian (`*`)** - Menghitung subtotal belanja sembako (Jumlah x Harga).
* **Modul 3: Pengurangan (`-`)** - Menghitung sisa tabungan bulanan (Pemasukan - Pengeluaran).
* **Modul 4: Pembagian (`/`)** - Menghitung pembagian tagihan makan bersama (*split bill*).

### 🔹 Track 2: Agregasi & Statistik Esensial
* **Modul 5: Penjumlahan Cepat (`=SUM`)** - Menghitung total kebutuhan anggaran anak kost bulanan.
* **Modul 6: Nilai Rata-rata (`=AVERAGE`)** - Menghitung rata-rata nilai rapor ujian siswa.
* **Modul 7: Nilai Tertinggi (`=MAX`)** - Menemukan tagihan listrik termahal dalam 6 bulan.
* **Modul 8: Menghitung Data Teks (`=COUNTA`)** - Menghitung jumlah siswa yang hadir pada daftar absensi.

### 🔹 Track 3: Olah Teks (String Manipulation)
* **Modul 9: Merapikan Huruf (`=PROPER`)** - Mengubah nama huruf kecil menjadi format kapital awal kata.
* **Modul 10: Menggabungkan Teks (`&` / `=CONCAT`)** - Menggabungkan Nama Depan dan Nama Belakang dengan spasi.
* **Modul 11: Mengambil Karakter Kiri (`=LEFT`)** - Mengekstrak 3 digit kode cabang kota dari ID Anggota.

### 🔹 Track 4: Logika & Pengambilan Keputusan (Conditional)
* **Modul 12: Percabangan Logika (`=IF`)** - Evaluasi kelulusan siswa berdasarkan nilai KKM (>= 75 Lulus / Remidi).
* **Modul 13: Menghitung Bersyarat (`=COUNTIF`)** - Menghitung total kehadiran berstatus 'Hadir'.
* **Modul 14: Menjumlahkan Bersyarat (`=SUMIF`)** - Menjumlahkan total uang yang keluar khusus kategori 'Makanan'.

### 🔹 Track 5: Pencarian & Referensi Data (Lookup)
* **Modul 15: Pencarian Harga Kasir (`=VLOOKUP`)** - Menarik harga satuan barang otomatis berdasarkan Kode Barang.
* **Modul 16: Pencarian Modern (`=XLOOKUP`)** - Mencari nomor telepon darurat staf dari database kontak.

---

## 🌟 Fitur Edukasi Unggulan

- 📖 **Kamus Rumus Excel (Formula Cheat Sheet)**: Panel panduan sintaks, arti argumen, contoh nyata, dan tips praktis yang bisa diakses kapan saja.
- 💡 **Tab Teori & Studi Kasus**: Penjelasan konsep dasar dan *mengapa rumus ini penting di dunia kerja* sebelum mengerjakan soal.
- ⚡ **Formula Helper Tooltip**: Panduan otomatis sintaks yang muncul ketika kamu mulai mengetik rumus di *Formula Bar*.
- 🎯 **Interaktivitas Klik Sel**: Klik sel mana saja di tabel untuk otomatis memasukkan referensinya ke dalam rumus.
- 🏆 **Animasi Perayaan (Confetti)** & **Auto-Save Progress**: Progres latihan otomatis tersimpan di browser (*localStorage*).

---

## 🚀 Menjalankan Secara Lokal

```bash
# 1. Clone repository
git clone https://github.com/Ram-id/ExcelSimulator.git
cd ExcelSimulator

# 2. Install dependensi
npm install

# 3. Jalankan server lokal
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

---

## ☁️ Deployment ke Vercel

1. Buka [Vercel](https://vercel.com).
2. Impor repositori **`Ram-id/ExcelSimulator`**.
3. Klik **Deploy** (Vercel otomatis mendeteksi framework Next.js).
