function randomSite() {
    const picks = [
        'c1.html',  // Relative path from b1.html
        'c2.html'
    ];
    const randomIndex = Math.floor(Math.random() * picks.length);
    window.location.href = picks[randomIndex];
}

document.getElementById("clickMe").onclick = randomSite;