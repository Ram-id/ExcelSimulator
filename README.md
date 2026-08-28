# 📊 ExcelSimulator v2.0 - Platform Belajar & Eksplorasi Rumus Excel

Aplikasi web interaktif modern untuk belajar dan bereksplorasi rumus Microsoft Excel dari nol (*Zero to Hero*) dengan antarmuka spreadsheet minimalis, sistem edit langsung di dalam sel (*In-Cell Editing*), dan Mode Bebas (*Sandbox Playground*).

---

## ✨ Fitur Unggulan

1. **✍️ In-Cell Editing (Ketik Langsung di Sel)**:
   - Double-click sel mana saja untuk mengetik rumus/angka langsung di dalam sel.
   - Klik sel lain saat mengetik rumus untuk otomatis memasukkan referensi sel (`B2:C2`) lengkap dengan garis border warna-warni khas Excel.
   - Autocomplete pintar saat mengetik tanda `=`.

2. **⚡ Mode Bebas (Sandbox Playground)**:
   - Eksplorasi rumus Excel tanpa batasan misi.
   - Tambah baris baru, edit data, dan uji formula apa saja dengan kalkulasi *real-time*.
   - Preset template: *Blank Sheet*, *Catatan Keuangan*, *Daftar Nilai Siswa*, *Kasir Toko*.

3. **📚 Kurikulum 40 Modul Terstruktur (6 Bab)**:
   - **Bab 1: Navigasi & Aritmatika Dasar** (`+`, `-`, `*`, `/`, `%`, `()`)
   - **Bab 2: Agregasi & Statistik Esensial** (`SUM`, `AVERAGE`, `MAX`, `MIN`, `COUNT`, `COUNTA`, `COUNTBLANK`, `LARGE`, `SMALL`)
   - **Bab 3: Manipulasi Teks & Tanggal** (`PROPER`, `UPPER`, `LOWER`, `&`, `CONCAT`, `LEFT`, `RIGHT`, `MID`, `TRIM`, `LEN`)
   - **Bab 4: Logika & Pengambilan Keputusan** (`IF`, `Nested IF`, `AND`, `OR`, `COUNTIF`, `SUMIF`, `AVERAGEIF`)
   - **Bab 5: Pencarian Data & Lookup** (`VLOOKUP`, `XLOOKUP`, `INDEX`, `MATCH`)
   - **Bab 6: Analisis Bisnis & Finansial** (Laba Rugi, Margin %, `PMT`, Break Even Point)

4. **📖 Kamus Rumus Lengkap (Cheat Sheet)**:
   - Pencarian instan seluruh rumus Excel, panduan sintaks, arti parameter, dan contoh dunia kerja.

---

## 🚀 Menjalankan Secara Lokal

```bash
git clone https://github.com/Ram-id/ExcelSimulator.git
cd ExcelSimulator
npm install
npm run dev
```
Buka [http://localhost:3000](http://localhost:3000) di browser.

---

## ☁️ Deploy ke Vercel

1. Buka [Vercel](https://vercel.com).
2. Impor repositori **`Ram-id/ExcelSimulator`**.
3. Klik **Deploy**.
