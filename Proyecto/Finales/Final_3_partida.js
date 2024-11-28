const $enemigos = [
    document.getElementById("enemigo1"),
    document.getElementById("enemigo2"),
    document.getElementById("enemigo3"),
];
console.log($enemigos);
const enemigos = JSON.parse(localStorage.getItem("enemigos"));
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

let minero = {
    name: "minero",
    ATK: 5,
    HPM: 100,
    estamina: 100,
    areaATK: 0,
    inmunidad: false,
    fuego: false,
    veneno: false,
    lentitud: false,
};

console.log(enemigos.enemigo1.HP);


const $pasar = document.getElementById("Pasar")
$pasar.addEventListener("click", () => {
    console.log("clicked")
    fetchData("cambiarTurno", (Pasar) => {
    })
    console.log(Pasar)
})