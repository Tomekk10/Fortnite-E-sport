// Sprawdzenie czy JS działa
document.addEventListener("DOMContentLoaded", () => {
    alert("Witaj na e-sportowej stronie Fortnite'a!");
});

// Przycisk losujący zwycięzcę turnieju
const button = document.getElementById("Losuj");
button.addEventListener("click", () => {
    const gracze = ["Setty", "Demuś", "Mikson", "Kami", "Japko"];
    const zwycięzca = gracze[Math.floor(Math.random() * gracze.length)];
    alert("zwycięzca turnieju: " + zwycięzca);
});