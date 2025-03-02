document.getElementById('zakatForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Mencegah form submit default

    // Ambil nilai input
    const cash = parseFloat(document.getElementById('cash').value) || 0;
    const gold = parseFloat(document.getElementById('gold').value) || 0;
    const silver = parseFloat(document.getElementById('silver').value) || 0;
    const savings = parseFloat(document.getElementById('savings').value) || 0;
    const stocks = parseFloat(document.getElementById('stocks').value) || 0;
    const property = parseFloat(document.getElementById('property').value) || 0;
    const livestock = parseFloat(document.getElementById('livestock').value) || 0;
    const agriculture = parseFloat(document.getElementById('agriculture').value) || 0;

    // Harga emas dan perak per gram (dalam Rupiah)
    const goldPricePerGram = 1000000; // Ganti dengan harga emas terkini
    const silverPricePerGram = 15000; // Ganti dengan harga perak terkini

    // Nilai hewan ternak per ekor (contoh: sapi)
    const livestockValuePerHead = 5000000; // Ganti dengan nilai hewan ternak terkini

    // Nilai hasil pertanian per kg (contoh: beras)
    const agricultureValuePerKg = 10000; // Ganti dengan nilai hasil pertanian terkini

    // Hitung total nilai harta
    const totalWealth =
        cash +
        (gold * goldPricePerGram) +
        (silver * silverPricePerGram) +
        savings +
        stocks +
        property +
        (livestock * livestockValuePerHead) +
        (agriculture * agricultureValuePerKg);

    // Nisab zakat (85 gram emas)
    const nisab = 85 * goldPricePerGram;

    // Hitung zakat (2.5% dari total harta jika melebihi nisab)
    let zakat = 0;
    if (totalWealth >= nisab) {
        zakat = totalWealth * 0.025;
    }

    // Tampilkan hasil
    const resultDiv = document.getElementById('result');
    const zakatAmount = document.getElementById('zakatAmount');
    if (zakat > 0) {
        zakatAmount.textContent = `Zakat yang harus dibayarkan: Rp ${zakat.toLocaleString()}`;
        resultDiv.style.display = 'block';
    } else {
        zakatAmount.textContent = 'Anda belum wajib membayar zakat.';
        resultDiv.style.display = 'block';
    }
});

// Animasi tambahan untuk quotes
document.querySelectorAll('.quote-card').forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
});

// Animasi untuk tombol CTA
const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('mouseenter', () => {
    ctaButton.style.transform = 'scale(1.05)';
    ctaButton.style.transition = 'transform 0.3s ease';
});

ctaButton.addEventListener('mouseleave', () => {
    ctaButton.style.transform = 'scale(1)';
});

// Tambahkan efek scroll halus untuk semua link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});