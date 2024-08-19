function goToHomePage() {
    // Arahkan ke halaman utama
    window.location.href = "Struktur A.html"; // Ganti "index.html" dengan nama file halaman utama Anda
}
function showDetails(page) {
    if (page === 'struktur') {
        window.location.href = 'Struktur Putra.html'; // arahkan ke halaman struktur
    } else if (page === 'visi_misi') {
        window.location.href = 'Visi Misi Osima Putra.html'; // arahkan ke halaman visi misi
    } else if (page === 'program_kerja') {
        window.location.href = 'Proker Osima Putra.html'; // arahkan ke halaman program kerja
    } else if (page === 'rapat') {
        window.location.href = 'Rapat Putra.html'; // arahkan ke halaman rapat
    }
}

function goToHomePage() {
    window.location.href = "Struktur A.html"; // arahkan ke halaman utama
}
