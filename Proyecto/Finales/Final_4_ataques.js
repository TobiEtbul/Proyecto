const $enemigos = [
    document.getElementById("enemigo1"),
    document.getElementById("enemigo2"),
    document.getElementById("enemigo3"),
];
const enemigos = JSON.parse(localStorage.getItem("enemigos"));

enemigos.enemigo1["initialVida"] = enemigos.enemigo1.HP;
enemigos.enemigo2["initialVida"] = enemigos.enemigo2.HP;
enemigos.enemigo3["initialVida"] = enemigos.enemigo3.HP;

$enemigos[0].src =
    "http://localhost:5500/Proyecto/Imagenes/Enemigos/" +
    enemigos.enemigo1.name.toLowerCase() +
    ".png";
$enemigos[1].src =
    "http://localhost:5500/Proyecto/Imagenes/Enemigos/" +
    enemigos.enemigo2.name.toLowerCase() +
    ".png";
$enemigos[2].src =
    "http://localhost:5500/Proyecto/Imagenes/Enemigos/" +
    enemigos.enemigo3.name.toLowerCase() +
    ".png";

function restarVida( enemigo, ataque, enemigoID) {
    console.log(enemigo);
    
    //actualizar barra de vida.
    const barra = document.querySelector("#vidaEnemigo" + enemigoID);
    barra.style.width =
        (enemigo.HP / enemigo["initialVida"]) * 100 + "%";
    console.log(barra)
}

const $golpear = document.getElementById("golpear")
$golpear.addEventListener("click", () => {
    console.log("clicked")
    fetchData("golpear", (enemigos) => {
        console.log(enemigos)
    })
})