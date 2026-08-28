# 📊 ExcelSimulator

Platform web simulasi dan pembelajaran rumus Microsoft Excel interaktif berbasis **Next.js**, **React**, **TypeScript**, dan **Tailwind CSS**. Siap di-deploy secara instan ke **Vercel**!

![ExcelSimulator Preview](https://raw.githubusercontent.com/Ram-id/ExcelSimulator/main/public/preview.png)

---

## ✨ Fitur Utama

- **Antarmuka Otentik Excel**: Tampilan ribbon, formula bar (`fx`), nama sel aktif, dan grid tabel dengan indeks baris & kolom.
- **Sistem Level & Studi Kasus Dunia Nyata**:
  - **Level 1**: `SUM` (Menghitung total stok inventaris toko)
  - **Level 2**: `AVERAGE` (Menghitung rata-rata pendapatan harian)
  - **Level 3**: `MAX` (Mencari skor performa penjualan tertinggi)
  - **Level 4**: `COUNTIF` (Menghitung invoice berstatus lunas)
  - **Level 5**: `IF` (Evaluasi target capaian penjualan)
- **Interactive Formula Bar**: Evaluasi rumus otomatis dengan dukungan variasi huruf besar/kecil, spasi, dan format argumen.
- **Interaksi Klik Sel**: Klik sel manapun di tabel untuk melihat atau memasukkan referensi sel ke dalam formula bar.
- **Petunjuk & Bantuan (Hints)**: Panduan langkah demi langkah jika menghadapi kesulitan.
- **Efek Perayaan (Confetti)**: Animasi perayaan saat berhasil menyelesaikan level.
- **Penyimpanan Progres Lokal**: Melacak level yang sudah selesai menggunakan `localStorage`.

---

## 🚀 Menjalankan Secara Lokal

1. **Clone repositori**:
   ```bash
   git clone https://github.com/Ram-id/ExcelSimulator.git
   cd ExcelSimulator
   ```

2. **Install dependensi**:
   ```bash
   npm install
   ```

3. **Jalankan development server**:
   ```bash
   npm run dev
   ```

4. Buka browser di [http://localhost:3000](http://localhost:3000).

---

## ☁️ Cara Deploy ke Vercel

### Opsi 1: Melalui Dashboard Vercel (Paling Mudah)
1. Buka [Vercel](https://vercel.com).
2. Klik **"Add New Project"** > **"Import Git Repository"**.
3. Pilih repositori `ExcelSimulator`.
4. Vercel akan otomatis mendeteksi framework **Next.js**.
5. Klik **"Deploy"**.

### Opsi 2: Menggunakan Vercel CLI
```bash
npm i -g vercel
vercel
```

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Celebration**: [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)
