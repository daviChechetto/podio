
const podio = document.getElementById("podio")

function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

function explodirConfete() {
    const rect = podio.getBoundingClientRect();

    // 3. Calcula a origem
    // (rect.left + rect.width / 2) acha o centro horizontal
    // rect.top acha o topo
    const originX = (rect.left + rect.width / 2) / window.innerWidth;
    const originY = (rect.top + 200) / window.innerHeight;

    confetti({
        particleCount: 150,
        spread: 70,
        angle: randomInRange(55, 125),
        origin: {
            x: originX,
            y: originY
        },
        zIndex: -1
    });
}

let contador = 1;
let intervalId;
setTimeout(function () {
    explodirConfete();
    intervalId = setInterval(() => {
        contador++;
        if (contador > 2) clearInterval(intervalId);
        explodirConfete();
    }, 1500);
}, 4000);

setTimeout(function(){
    $(".lista-podio .logo-estabelecimento").addClass("comemoracao-podio")
}, 4000)