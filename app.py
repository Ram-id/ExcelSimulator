from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Data Simulasi Inventaris (Ringan, Tanpa Pandas)
data = {
    'ID Produk': ['VN-01', 'PM-01', 'VN-02'],
    'Merek': ['Vans', 'Puma', 'Vans'],
    'Model': ['Old Skool', 'Suede', 'Authentic'],
    'Stok': [20, 15, 24] # Total 59 pasang sepatu
}

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/evaluate', methods=['POST'])
def evaluate():
    req_data = request.json
    rumus = req_data.get('rumus', '').strip().upper()
    
    if not rumus.startswith('='):
        return jsonify({"status": "error", "pesan": "❌ Rumus harus diawali tanda sama dengan (=)"})
    
    kunci_jawaban = ["=SUM(D2:D4)", "=SUM(D2,D3,D4)"]
    
    if rumus in kunci_jawaban:
        # Kalkulasi langsung menggunakan Python bawaan
        total_stok = sum(data['Stok']) 
        return jsonify({
            "status": "sukses", 
            "pesan": "✅ Benar! Rumus berfungsi dengan baik.", 
            "hasil": total_stok
        })
    else:
        return jsonify({"status": "gagal", "pesan": "❌ Salah! Cek kembali range sel yang kamu masukkan."})

if __name__ == '__main__':
    app.run(debug=True)
