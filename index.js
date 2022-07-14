import {getProvincia, getRama, getHorario, getCA} from './firebase.js'

//muestra los datos de la coleccion ramas en el select Rama.
const selectRama = document.getElementById('rama')
window.addEventListener('DOMContentLoaded', async ()=>{
    const querySnapshot = await getRama();
    let html = ''
    querySnapshot.forEach(doc => {
        //console.log(doc.data())
        const rama = doc.data()
        html +=
        `<option value="">${rama.rama1}</option>
        <option value="">${rama.rama2}</option>`
    })

    selectRama.innerHTML = html
})

//muestra los datos de la coleccion provincias en el select Provincias.
const selectProvincia = document.getElementById('provincia')
window.addEventListener('DOMContentLoaded', async() =>{
    const querySnapshot = await getProvincia();
    let html = ''
    querySnapshot.forEach(doc => {
        //console.log(doc.data())
        const provincia = doc.data()
        html +=
        `<option value="">${provincia.Provincia1}</option>
        <option value="">${provincia.Provincia2}</option>`
    })
    selectProvincia.innerHTML = html;
})

//muestra los datos de la coleccion horarios en los select de la parte de horarios de step2.html
const selectHorario1 = document.getElementById('selecthorario1')
window.addEventListener('DOMContentLoaded', async() =>{
    const querySnapshot = await getHorario();
    let html = ''
    querySnapshot.forEach(doc => {
        const horario = doc.data()
        html +=
        `<option value="mañanas" selected>${horario.horario1}</option>
        <option value="tardes">${horario.horario2}</option>
        <option value="partido">${horario.horario3}</option>`
    })
    selectHorario1.innerHTML = html
})

const selectHorario2 = document.getElementById('selecthorario2')
window.addEventListener('DOMContentLoaded', async () => {
    const querySnapshot = await getHorario();
    let html = ''
    querySnapshot.forEach(doc => {
        const horario = doc.data()
        html +=
            `<option value="mañanas">${horario.horario1}</option>
        <option value="tardes" selected>${horario.horario2}</option>
        <option value="partido">${horario.horario3}</option>`
    })
    selectHorario2.innerHTML = html
})

const selectHorario3 = document.getElementById('selecthorario3')
window.addEventListener('DOMContentLoaded', async () => {
    const querySnapshot = await getHorario();
    let html = ''
    querySnapshot.forEach(doc => {
        const horario = doc.data()
        html +=
            `<option value="mañanas">${horario.horario1}</option>
        <option value="tardes">${horario.horario2}</option>
        <option value="partido" selected>${horario.horario3}</option>`
    })
    selectHorario3.innerHTML = html
})

//muestra los datos en el select del comunidad de examen de step5
const selectCA = document.getElementById('comunidad')
window.addEventListener('DOMContentLoaded', async () => {
    const querySnapshot = await getCA();
    let html = ''
    querySnapshot.forEach(doc => {
        const comunidad = doc.data()
        html +=
            `<option value="comunidad" disabled selected>Ej: Madrid</option>
            <option value="">${comunidad.comunidad1}</option>
        <option value="">${comunidad.comunidad2}</option>`
    })
    selectCA.innerHTML = html;
})

