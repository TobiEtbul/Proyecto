console.log("loaded.");
fetchData("pedirEnemigos", (data) => {
    //Aca adentro existe data que tiene todos los enemigos:
    console.log("enemigos: ", data);
});
