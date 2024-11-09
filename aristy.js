// JavaScript untuk efek interaktif pada bunga

const flower = document.getElementById('flower');

// Fungsi untuk menambah efek ledakan saat bunga di-klik
flower.addEventListener('click', () => {
    // Menambahkan class explosion untuk efek ledakan
    flower.classList.add('explosion');
    
    // Mengembalikan bunga ke keadaan semula setelah efek selesai
    setTimeout(() => {
        flower.classList.remove('explosion');
    }, 500); // Efek ledakan berlangsung 0.5 detik
});
