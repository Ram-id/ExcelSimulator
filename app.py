from flask import Flask, render_template, request, jsonify
import pandas as pd

app = Flask(__name__)

# Data Simulasi Inventaris
data = {
    'ID Produk': ['VN-01', 'PM-01', 'VN-02'],
    'Merek': ['Vans', 'Puma', 'Vans'],
    'Model': ['Old Skool', 'Suede', 'Authentic'],
    'Stok': [20, 15, 24] # Total 59 pasang sepatu
}
df = pd.DataFrame(data)

@app.route('/')
def index():
    # Menampilkan file HTML
    return render_template('index.html')

@app.route('/api/evaluate', methods=['POST'])
def evaluate():
    # Menerima rumus dari frontend
    req_data = request.json
    rumus = req_data.get('rumus', '').strip().upper()
    
    # Validasi input
    if not rumus.startswith('='):
        return jsonify({"status": "error", "pesan": "❌ Rumus harus diawali tanda sama dengan (=)"})
    
    # Kunci Jawaban untuk Level 1
    kunci_jawaban = ["=SUM(D2:D4)", "=SUM(D2,D3,D4)"]
    
    if rumus in kunci_jawaban:
        # Eksekusi kalkulasi menggunakan Pandas (Validasi dari sisi server)
        total_stok = df['Stok'].sum() 
        return jsonify({
            "status": "sukses", 
            "pesan": "✅ Benar! Rumus berfungsi dengan baik.", 
            "hasil": int(total_stok)
        })
    else:
        return jsonify({"status": "gagal", "pesan": "❌ Salah! Cek kembali range sel yang kamu masukkan."})

if __name__ == '__main__':
    app.run(debug=True)