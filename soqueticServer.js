import { onEvent, startServer } from "soquetic";
import {
    generarEnemigoAleatorioZ1,
    generarEnemigoAleatorioZ2,
    generarEnemigoAleatorioZ3,
    golpeJugador,
    empalarI,
    empalarII, 
    empalarIII,
    lanza_carbonI,
    lanza_carbonII,
    lanza_carbonIII,
    lanza_carbon_llamasI,
    lanza_carbon_llamasII,
    lanza_carbon_llamasIII,
    cuchillo_venenosoI,
    cuchillo_venenosoII,
    cuchillo_venenosoIII, 
    bombaI,
    bombaII,
    bombaIII,
    habilidad_final,
    mate,
    choripanI,
    choripanII,
    choripanIII,
    cristalMagicoI,
    cristalMagicoII,
    cristalMagicoIII,
    sorteoHabilidades,
    cambiarTurno,
    cristalHP,
    cristalADMG,
    cristalDMG, 
    cristalEST
} from "./main.js";

onEvent("pedirEnemigos", () => {
    const enemigo1 = generarEnemigoAleatorioZ1();
    const enemigo2 = generarEnemigoAleatorioZ1();
    const enemigo3 = generarEnemigoAleatorioZ1();
    const data = {
        enemigo1,
        enemigo2,
        enemigo3,
    };
    console.log(data)
    return data;
});

onEvent("golpear", () => {
    const a = golpeJugador()
    console.log(a) ;
    return a ;
})

onEvent ("Empalar1", () => {
    const b = empalarI()
    console.log(b);
    return b ;
})
onEvent ("Empalar2", () => {
    const c = empalarII()
    console.log(c);
    return c ;
})
onEvent ("Empalar3", () => {
    const d = empalarIII();
    console.log(d);
    return d;
})
onEvent ("lanza_carbon1", () => {
    const e = lanza_carbonI()
    console.log(e)
    return e
})
onEvent ("lanza_carbon2", () => {
    const f = lanza_carbonII()
    console.log(f)
    return f
})
onEvent ("lanza_carbon3", () => {
    const g =lanza_carbonIII()
    console.log(g)
    return g
})
onEvent ("lanza_carbon_llamas1", () => {
    const h = lanza_carbon_llamasI()
    console.log(h)
    return h
})
onEvent ("lanza_carbon_llamas2", () => {
    const i =lanza_carbon_llamasII()
    console.log(i)
    return i
})
onEvent ("lanza_carbon_llamas3", () => {
    const j = lanza_carbon_llamasIII()
    console.log(j)
    return j
})
onEvent ("cuchillo_venenoso1", () => {
    const k  = cuchillo_venenosoI()
    console.log (k)
    return k
})
onEvent ("cuchillo_venenoso2", () => {
    const l = cuchillo_venenosoII()
    console.log(l)
    return l
})
onEvent ("cuchillo_venenoso3", () => {
    const m = cuchillo_venenosoIII()
    console.log(m)
    return m
})
onEvent ("bomba1", () => {
    const n =bombaI()
    console.log(n)
    return n
})
onEvent ("bomba2", () => {
    const ñ = bombaII()
    console.log(ñ)
    return ñ
})
onEvent ("bomba3", () => {
    const o = bombaIII()
    console.log(o)
    return o
})
onEvent ("habilidad_final1", () => {
    const p = habilidad_final()
    console.log(p)
    return p
})
onEvent ("mate1", () => {
    const q = mate()
    console.log(q)
    return q
})
onEvent ("choripan1", () => {
    const r = choripanI()
    console.log(r)
    return r
})
onEvent ("choripan2", () => {
    const s = choripanII()
    console.log(s)
    return s
    
})
onEvent ("choripan3", () => {
    const t = choripanIII()
    console.log(t)
    return t
})
onEvent ("cristalMagico1", () => {
    const u = cristalMagicoI()
    console.log(u)
    return u
})
onEvent ("cristalMagico2", () => {
    const v = cristalMagicoII()
    console.log(v)
    return v
})
onEvent ("cristalMagico3", () => {
    const w = cristalMagicoIII()
    console.log(w)
    return w
})
onEvent ("pasar", () => {
    const x = cambiarTurno()
    console.log(x)
    return x
})
onEvent ("cristalVida", () => {
    const y = cristalHP()
    console.log(y)
    return y
})
onEvent ("cristalDaño", () => {
    const z = cristalDMG()
    console.log(z)
    return z
})
onEvent ("cristalEstamina", () => {
    const aa = cristalEST()
    console.log(aa)
    return aa
})
onEvent ("cristalArea", () => {
    const bb = cristalADMG()
    console.log(bb)
    return bb
})
startServer();
