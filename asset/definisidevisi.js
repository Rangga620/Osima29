document.addEventListener('DOMContentLoaded', () => {
    // Ambil semua kartu divisi
    const divisionCards = document.querySelectorAll('.division-card');

    // Tambahkan event listener untuk setiap kartu divisi
    divisionCards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Ambil target divisi dari atribut data
            const targetId = card.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);

            // Tampilkan semua section definisi dengan menyembunyikan semua section terlebih dahulu
            document.querySelectorAll('.division-definition').forEach(section => {
                section.style.display = 'none';
            });

            // Tampilkan section definisi yang sesuai dengan divisi yang diklik
            if (targetSection) {
        
