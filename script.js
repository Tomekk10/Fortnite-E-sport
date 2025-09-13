// Sprawdzenie czy JS działa
document.addEventListener("DOMContentLoaded", () => {
    alert("Witaj na e-sportowej stronie Fortnite'a!");
});

// Przycisk losujący zwycięzcę turnieju
const button = document.getElementById("Losuj");
button.addEventListener("click", () => {
    const gracze = ["Setty", "Demuś", "Mikson"];
    const zwycięzca = gracze[Math.floor(Math.random() * gracze.length)];
    alert("zwycięzca turnieju: " + zwycięzca);
});


function pokazAktualnosc(id) {
    // ukryj wszystkie
    const zakladki = document.querySelectorAll(".tab-content");
    zakladki.forEach(z => z.style.display = "none");

    // pokaż wybraną
    document.getElementById(id).style.display = "block";
}
