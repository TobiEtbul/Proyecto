fs.readFile('proyecto_tercero/JSON_practica/Habilidades_Act.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    }) ;
fs.readFile('proyecto_tercero/JSON_practica/Habilidades_pas.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    }) ;
    const habilidadesP = 'Habilidades_pas.json'  ;
    const habilidadesA = 'Habilidades_Act.json'
    const habilidadesT = [habilidadesP + habilidadesA] ;
    function generarHabilidadAleatorio() {
        const randomIndex = Math.floor(Math.random() * habilidadesT.length);
        return habilidadesT[randomIndex];
      }