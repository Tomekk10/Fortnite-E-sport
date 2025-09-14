// Sprawdzenie czy JS działa
documentaddEventListener("DOMContentLoaded", () => {
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


function pokazStrone(id) {
    const strony = document.querySelectorAll("section");
    strony.forEach(s => s.style.display = "none"); // ukryj wszystkie
    document.getElementsById(id).style.display = "block"; // pokaż wybraną
}
