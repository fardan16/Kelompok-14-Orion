const modal = document.getElementById("orderModal");

// fungsi untuk menampilkan popup panduan pemesanan
function openModal() {
    if (modal) {
        modal.style.display = "flex";
        document.body.style.overflow = "hidden"; // menahan scroll halaman belakang
    }
}

// fungsi untuk menyembunyikan popup keawal
function closeModal() {
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "";
    }
}

// menutup popup secara otomatis
window.addEventListener("click", function (event) {
    if (event.target === modal) {
        closeModal();
    }
});

// fitur tutup popup menggunakan tombol escape di keyboard
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeModal();
});


const hamburgerBtn = document.getElementById("hamburgerBtn");
const mainNav      = document.getElementById("mainNav");

// fungsi untuk menu navigasi di hp
if (hamburgerBtn && mainNav) {
    hamburgerBtn.addEventListener("click", function () {
        const isOpen = mainNav.classList.toggle("open");
        hamburgerBtn.setAttribute("aria-expanded", isOpen);
    });

    // menyembunyikan menu otomatis
    mainNav.querySelectorAll("a, button").forEach(function (el) {
        el.addEventListener("click", function () {
            mainNav.classList.remove("open");
        });
    });
}


// fungsi efek bayangan
const mainHeader = document.getElementById("mainHeader");
window.addEventListener("scroll", function () {
    if (!mainHeader) return;
    if (window.scrollY > 10) {
        mainHeader.style.boxShadow = "0 2px 20px rgba(0,0,0,0.22)";
    } else {
        mainHeader.style.boxShadow = "0 2px 16px rgba(0,0,0,0.18)";
    }
});


const menuData = [
    { id: 1,  nama: "Bakso Biasa",                  harga: 15000, kategori: "Bakso",                 img: "assets/img/bakso-biasa.jpg" },
    { id: 2,  nama: "Bakso Meteor",                 harga: 20000, kategori: "Bakso",                 img: "assets/img/bakso-meteor.jpg" },
    { id: 3,  nama: "Bakso Setan",                  harga: 25000, kategori: "Bakso",                 img: "assets/img/bakso-setan.jpg" },
    { id: 4,  nama: "Bakso Campur",                 harga: 20000, kategori: "Bakso",                 img: "assets/img/bakso-campur.jpg" },
    { id: 5,  nama: "Bakso Iga",                    harga: 30000, kategori: "Bakso",                 img: "assets/img/bakso-iga.jpg" },
    { id: 6,  nama: "Bakso Ikan",                   harga: 20000, kategori: "Bakso",                 img: "assets/img/bakso-ikan.jpg" },
    { id: 7,  nama: "Bakso Beranak",                harga: 25000, kategori: "Bakso",                 img: "assets/img/bakso-beranak.jpg" },
    { id: 8,  nama: "Bakso Tenes",                  harga: 20000, kategori: "Bakso",                 img: "assets/img/bakso-tenes.jpg" },
    { id: 9,  nama: "Bakso Urat Kribo Jumbo",       harga: 20000, kategori: "Bakso",                 img: "assets/img/bakso-urat-kribo.jpg" },
    { id: 10, nama: "Bakso Lava",                   harga: 30000, kategori: "Bakso",                 img: "assets/img/bakso-lava.jpg" },
    { id: 11, nama: "Bakso Klenger",                harga: 30000, kategori: "Bakso",                 img: "assets/img/bakso-klenger.jpg" },
    { id: 12, nama: "Mie Ayam Biasa",               harga: 15000, kategori: "Mie Ayam",              img: "assets/img/mie-ayam-biasa.jpg" },
    { id: 13, nama: "Mie Ayam Telur",               harga: 20000, kategori: "Mie Ayam",              img: "assets/img/mie-ayam-telur.jpg" },
    { id: 14, nama: "Mie Ayam Gepeng",              harga: 18000, kategori: "Mie Ayam",              img: "assets/img/mie-ayam-gepeng.jpg" },
    { id: 15, nama: "Mie Ayam Setan",               harga: 18000, kategori: "Mie Ayam",              img: "assets/img/mie-ayam-setan.jpg" },
    { id: 16, nama: "Mie Ayam Pangsit Basah",       harga: 18000, kategori: "Mie Ayam",              img: "assets/img/mie-ayam-pangsit.jpg" },
    { id: 17, nama: "Mie Ayam Bakso Campur",        harga: 25000, kategori: "Bakso & Mie Ayam",      img: "assets/img/mie-bakso-campur.jpg" },
    { id: 18, nama: "Mie Ayam Bakso Tenes",         harga: 30000, kategori: "Bakso & Mie Ayam",      img: "assets/img/mie-bakso-tenes.jpg" },
    { id: 19, nama: "Mie Ayam Bakso Beranak",       harga: 40000, kategori: "Bakso & Mie Ayam",      img: "assets/img/mie-bakso-beranak.jpg" },
    { id: 20, nama: "Mie Ayam Setan + Bakso Setan", harga: 45000, kategori: "Bakso & Mie Ayam",      img: "assets/img/mie-bakso-setan.jpg" },
    { id: 21, nama: "Nasi Ayam Bakar",              harga: 25000, kategori: "Nasi & Makanan Berat",  img: "assets/img/nasi-ayam-bakar.jpg" },
    { id: 22, nama: "Nasi Ayam Goreng",             harga: 25000, kategori: "Nasi & Makanan Berat",  img: "assets/img/nasi-ayam-goreng.jpg" },
    { id: 23, nama: "Rawon",                        harga: 25000, kategori: "Nasi & Makanan Berat",  img: "assets/img/rawon.jpg" },
    { id: 24, nama: "Es Teh",                       harga: 5000,  kategori: "Minuman",               img: "assets/img/es-teh.jpg" },
    { id: 25, nama: "Es Jeruk Buah",                harga: 8000,  kategori: "Minuman",               img: "assets/img/es-jeruk-buah.jpg" },
    { id: 26, nama: "Es Jeruk Nipis",               harga: 8000,  kategori: "Minuman",               img: "assets/img/es-jeruk-nipis.jpg" },
    { id: 27, nama: "Es Campur",                    harga: 15000, kategori: "Minuman",               img: "assets/img/es-campur.jpg" },
    { id: 28, nama: "Es Milo",                      harga: 10000, kategori: "Minuman",               img: "assets/img/es-milo.jpg" },
    { id: 29, nama: "Jus Apel",                     harga: 15000, kategori: "Minuman",               img: "assets/img/jus-apel.jpg" },
    { id: 30, nama: "Jus Mangga",                   harga: 15000, kategori: "Minuman",               img: "assets/img/jus-mangga.jpg" },
    { id: 31, nama: "Jus Cappuccino",               harga: 15000, kategori: "Minuman",               img: "assets/img/jus-cappuccino.jpg" },
    { id: 32, nama: "Jus Buah Naga",                harga: 15000, kategori: "Minuman",               img: "assets/img/jus-buah-naga.jpg" },
    { id: 33, nama: "Jus Sirsak",                   harga: 15000, kategori: "Minuman",               img: "assets/img/jus-sirsak.jpg" },
    { id: 34, nama: "Jus Melon",                    harga: 15000, kategori: "Minuman",               img: "assets/img/jus-melon.jpg" },
    { id: 35, nama: "Jus Semangka",                 harga: 15000, kategori: "Minuman",               img: "assets/img/jus-semangka.jpg" },
    { id: 36, nama: "Jus Alpukat",                  harga: 15000, kategori: "Minuman",               img: "assets/img/jus-alpukat.jpg" }
];


function renderKatalog(data) {
    const container = document.getElementById("katalog-container");
    const infoEl    = document.getElementById("jumlahMenu");

    if (!container) return; 

    // mengubah keterangan jumlah menu
    if (infoEl) {
        const total = data.length;
        infoEl.textContent = total > 0
            ? `Menampilkan ${total} menu`
            : "Tidak ada menu di kategori ini.";
    }

    if (data.length === 0) {
        container.innerHTML = `
            <div style="text-align:center; padding: 60px 0; color: #999; width:100%;">
                <p style="font-size:2rem; margin-bottom:12px;">🍽️</p>
                <p>Tidak ada menu di kategori ini.</p>
            </div>`;
        return;
    }

    let htmlString = "";

    data.forEach(function (item) {
        const hargaFormatted = "Rp " + item.harga.toLocaleString("id-ID");
        const isFeatured = item.kategori === "Bakso & Mie Ayam";
        const badgeClass = isFeatured ? "card-badge card-badge--special" : "card-badge";

        htmlString += `
            <div class="card">
                <div class="card-img placeholder-img">
                    <img 
                        src="${item.img}" 
                        alt="${item.nama}"
                        onerror="this.parentElement.classList.add('no-img'); this.remove();">
                </div>
                <div class="card-body">
                    <span class="${badgeClass}">${item.kategori}</span>
                    <h3 class="card-name">${item.nama}</h3>
                    <p class="harga">${hargaFormatted}</p>
                    <button class="btn-secondary" onclick="openModal()">Pesan Sekarang</button>
                </div>
            </div>
        `;
    });

    container.innerHTML = htmlString;
}

function filterKategori(kategoriPilihan, btn) {

    // reset status warna tombol
    document.querySelectorAll(".btn-filter").forEach(function (el) {
        el.classList.remove("active");
    });

    // kasih warna pada tombol yang diklik
    if (btn) btn.classList.add("active");

    if (kategoriPilihan === "Semua") {
        renderKatalog(menuData);
    } else {
        const dataTerfilter = menuData.filter(function (item) {
            return item.kategori === kategoriPilihan;
        });
        renderKatalog(dataTerfilter);
    }
}


document.addEventListener("DOMContentLoaded", function () {
    renderKatalog(menuData);
});


// proses pengiriman data dari form saran ke layanan email formspree
const formPengaduan = document.getElementById("formPengaduan");

if (formPengaduan) {
    formPengaduan.addEventListener("submit", function (e) {
        e.preventDefault(); 

        const btnSubmit = document.getElementById("btnSubmit");
        const successMsg = document.getElementById("successMsg");

        // info ke user data sedang diproses
        if (btnSubmit) {
            btnSubmit.textContent = "Mengirim...";
            btnSubmit.disabled = true;
        }

        // ambil data dari input dan mengirim via fetch api formspree
        fetch(formPengaduan.action, {
            method: "POST",
            body: new FormData(formPengaduan),
            headers: { "Accept": "application/json" }
        })
        .then(function (response) {
            if (response.ok) {
                if (successMsg) successMsg.style.display = "block";
                formPengaduan.reset();
            } else {
                alert("Gagal mengirim pesan. Silakan coba lagi atau hubungi kami via WhatsApp.");
            }
        })
        .catch(function () {
            alert("Koneksi gagal. Periksa internet Anda dan coba lagi.");
        })
        .finally(function () {
            // mengembalikan tombol kirim seperti awal
            if (btnSubmit) {
                btnSubmit.textContent = "📨 Kirim Pesan";
                btnSubmit.disabled = false;
            }
        });
    });
}