const daftarProduk = [
    { nama: "Gantungan Kunci Kayu Hitam", harga: 15000, kategori: "Souvenir" },
    { nama: "Miniatur Patung", harga: 150000, kategori: "Pajangan" },
    { nama: "Tas Rotan Khas", harga: 250000, kategori: "Fashion" }
];

function tampilkanProduk() {
    const container = document.getElementById('katalog-container');
    container.innerHTML = daftarProduk.map(item => `
        <div class="card">
            <h3>${item.nama}</h3>
            <p>Harga: Rp${item.harga.toLocaleString()}</p>
        </div>
    `).join('');
}

tampilkanProduk();